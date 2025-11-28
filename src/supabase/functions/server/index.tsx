import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";
import * as kv from "./kv_store.tsx";
import { decodeBase64 } from "jsr:@std/encoding/base64";

const app = new Hono();

// Middleware
app.use('*', logger(console.log));
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

const BASE_URL = "/make-server-8838b4e7";
const BUCKET_NAME = "make-8838b4e7-uploads";

// --- Helpers ---

async function getSupabaseContext(c: any) {
  const authHeader = c.req.header('Authorization');
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  let user = null;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const { data } = await supabase.auth.getUser(token);
    user = data.user;
  }

  return { supabase, user };
}

async function ensureBucket(supabase: any) {
  const { data: buckets } = await supabase.storage.listBuckets();
  if (!buckets?.some((b: any) => b.name === BUCKET_NAME)) {
    await supabase.storage.createBucket(BUCKET_NAME, {
        public: false,
        fileSizeLimit: 52428800, // 50MB
    });
  } else {
    // Update limit just in case
    await supabase.storage.updateBucket(BUCKET_NAME, {
        public: false,
        fileSizeLimit: 52428800, // 50MB
    });
  }
}

// === HELPERS ===

async function fetchMetadata(url: string): Promise<{ image: string | null }> {
  try {
    const res = await fetch(url, {
      headers: { 
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });
    if (!res.ok) return { image: null };
    const html = await res.text();
    
    let image: string | null = null;

    const jsonLdMatches = html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
    for (const match of jsonLdMatches) {
        try {
            const json = JSON.parse(match[1]);
            const data = Array.isArray(json) ? json : [json];
            for (const item of data) {
                if ((item['@type'] === 'Product' || item['@type'] === 'ProductGroup') && item.image) {
                    const imgs = Array.isArray(item.image) ? item.image : [item.image];
                    for (const img of imgs) {
                        if (typeof img === 'string') {
                            image = img;
                            break;
                        } else if (typeof img === 'object' && img.url) {
                            image = img.url;
                            break;
                        }
                    }
                }
                if (image) break;
            }
        } catch (e) { continue; }
        if (image) break;
    }

    if (!image) {
        const ogMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i) ||
                        html.match(/<meta\s+content=["']([^"']+)["']\s+property=["']og:image["']/i);
        if (ogMatch) image = ogMatch[1];
    }

    if (!image) {
        const twMatch = html.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i) ||
                        html.match(/<meta\s+content=["']([^"']+)["']\s+name=["']twitter:image["']/i);
        if (twMatch) image = twMatch[1];
    }
    
    if (image && !image.startsWith('http')) {
        try {
            const u = new URL(url);
            image = new URL(image, u.origin).href;
        } catch (e) {
        }
    }

    return { image };
  } catch (e) {
    return { image: null };
  }
}

async function createNotification(targetUserId: string, notification: any) {
  // Removed self-notification check for testing purposes
  // if (targetUserId === notification.actorId) return; 
  
  const key = `notifications:${targetUserId}`;
  const list = await kv.get(key) || [];
  
  const newList = [notification, ...list].slice(0, 50);
  await kv.set(key, newList);
}

// --- Routes ---

app.get(`${BASE_URL}/health`, (c) => c.json({ status: "ok" }));

app.get(`${BASE_URL}/metadata`, async (c) => {
    const url = c.req.query('url');
    if (!url) return c.json({ error: 'Missing url' }, 400);
    
    try {
        new URL(url); 
        const { image } = await fetchMetadata(url);
        return c.json({ image });
    } catch (e) {
        return c.json({ error: 'Invalid URL or fetch failed' }, 400);
    }
});

// === AUTH & USER ===

app.post(`${BASE_URL}/signup`, async (c) => {
  const { supabase } = await getSupabaseContext(c);
  try {
    const { email, password, name, username } = await c.req.json();
    
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { full_name: name, username },
      email_confirm: true 
    });
    if (authError) throw authError;

    const userId = authData.user.id;
    const profile = {
      id: userId,
      username,
      name,
      bio: "Fashion lover",
      avatar: "",
      followers: 0,
      following: 0,
      styles: [],
      joinedAt: new Date().toISOString()
    };
    await kv.set(`user:${userId}`, profile);

    return c.json(authData);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

app.get(`${BASE_URL}/users/me`, async (c) => {
  const { user, supabase } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  let profile = await kv.get(`user:${user.id}`);
  
  if (!profile) {
    profile = {
      id: user.id,
      username: user.user_metadata?.username || user.email?.split('@')[0],
      name: user.user_metadata?.full_name || 'User',
      avatar: user.user_metadata?.avatar_url || '',
      bio: "",
      followers: 0,
      following: 0,
      joinedAt: new Date().toISOString()
    };
    await kv.set(`user:${user.id}`, profile);
  }

  if (profile.avatar && !profile.avatar.startsWith('http')) {
     const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(profile.avatar, 3600);
     if (data) profile.avatar = data.signedUrl;
  }

  return c.json(profile);
});

app.put(`${BASE_URL}/users/me`, async (c) => {
  const { user } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const updates = await c.req.json();
  const key = `user:${user.id}`;
  const existing = await kv.get(key) || {};
  
  const newProfile = { ...existing, ...updates, id: user.id };
  await kv.set(key, newProfile);
  
  return c.json(newProfile);
});

app.get(`${BASE_URL}/users/:id`, async (c) => {
  const { supabase } = await getSupabaseContext(c);
  const id = c.req.param('id');
  const profile = await kv.get(`user:${id}`);
  
  if (!profile) return c.json({ error: "User not found" }, 404);

  if (profile.avatar && !profile.avatar.startsWith('http')) {
     const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(profile.avatar, 3600);
     if (data) profile.avatar = data.signedUrl;
  }

  return c.json(profile);
});


// === POSTS ===

// Upload Image/Video
app.post(`${BASE_URL}/upload`, async (c) => {
    const { user, supabase } = await getSupabaseContext(c);
    if (!user) return c.json({ error: "Unauthorized" }, 401);

    try {
        await ensureBucket(supabase);
        
        const contentType = c.req.header('content-type') || '';
        let fileBuffer: ArrayBuffer | Uint8Array | ReadableStream;
        let uploadFilename: string = 'file';
        let mimeType = 'image/jpeg'; 

        if (contentType.includes('multipart/form-data')) {
            const body = await c.req.parseBody();
            const file = body['file'];
            if (file && file instanceof File) {
                fileBuffer = await file.arrayBuffer();
                uploadFilename = file.name;
                mimeType = file.type || 'application/octet-stream';
            } else {
                return c.json({ error: "No file found" }, 400);
            }
        } else if (contentType.includes('application/json')) {
            // JSON Fallback (Base64)
            const { image, filename } = await c.req.json();
            if (!image) return c.json({ error: "No image data" }, 400);

            const base64Data = image.split(',')[1] || image;
            fileBuffer = decodeBase64(base64Data);
            uploadFilename = filename || 'image.jpg';
            
            if (image.startsWith('data:image/png')) mimeType = 'image/png';
            else if (image.startsWith('data:video/mp4')) mimeType = 'video/mp4';
        } else {
             // Streaming Upload (Catch-all for binary)
            uploadFilename = c.req.query('filename') || 'file';
            mimeType = contentType || 'application/octet-stream';
            
            // Use raw body stream for robustness
            const stream = c.req.raw.body;
            if (!stream) return c.json({ error: "No body stream received", details: "c.req.raw.body is null" }, 400);
            fileBuffer = stream;
        }

        const path = `${user.id}/${Date.now()}_${uploadFilename}`;
        
        const { data, error } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(path, fileBuffer, { contentType: mimeType, upsert: true });

        if (error) throw error;
        return c.json({ path: data.path });
    } catch (error: any) {
        return c.json({ error: error.message }, 500);
    }
});

app.post(`${BASE_URL}/posts`, async (c) => {
  const { user, supabase } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  try {
    const body = await c.req.json();
    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    let author = await kv.get(`user:${user.id}`);
    if (!author) author = { name: user.user_metadata.full_name, username: 'user', avatar: '' };

    const newPost = {
      id,
      authorId: user.id,
      authorName: author.name,
      authorUsername: author.username,
      authorAvatar: author.avatar,
      ...body,
      createdAt: timestamp,
      likes: 0,
      comments: 0
    };

    await kv.set(`post:${id}`, newPost);
    return c.json(newPost);
  } catch (error) {
    return c.json({ error: "Failed to create post" }, 500);
  }
});

app.put(`${BASE_URL}/posts/:id`, async (c) => {
  const { user } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const postId = c.req.param('id');
  const updates = await c.req.json();
  
  try {
      const postKey = `post:${postId}`;
      const post = await kv.get(postKey);

      if (!post) return c.json({ error: "Post not found" }, 404);
      if (post.authorId !== user.id) return c.json({ error: "Forbidden" }, 403);

      const updatedPost = { ...post, ...updates, updatedAt: new Date().toISOString() };
      await kv.set(postKey, updatedPost);

      return c.json(updatedPost);
  } catch (error) {
      return c.json({ error: "Failed to update post" }, 500);
  }
});

app.delete(`${BASE_URL}/posts/:id`, async (c) => {
  const { user } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const postId = c.req.param('id');

  try {
      const postKey = `post:${postId}`;
      const post = await kv.get(postKey);

      if (!post) return c.json({ error: "Post not found" }, 404);
      if (post.authorId !== user.id) return c.json({ error: "Forbidden" }, 403);

      await kv.del(postKey);
      return c.json({ success: true });
  } catch (error) {
      return c.json({ error: "Failed to delete post" }, 500);
  }
});

app.get(`${BASE_URL}/posts`, async (c) => {
  const { supabase } = await getSupabaseContext(c);
  try {
    const posts = await kv.getByPrefix("post:");
    posts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    const postsWithUrls = await Promise.all(posts.map(async (post: any) => {
        if (post.image && !post.image.startsWith('http')) {
            const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(post.image, 3600);
            if (data) post.image = data.signedUrl;
        }
        if (post.images && Array.isArray(post.images)) {
            post.images = await Promise.all(post.images.map(async (img: string) => {
                if (img && !img.startsWith('http')) {
                    const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(img, 3600);
                    return data ? data.signedUrl : img;
                }
                return img;
            }));
        }
        if (post.authorAvatar && !post.authorAvatar.startsWith('http')) {
            const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(post.authorAvatar, 3600);
            if (data) post.authorAvatar = data.signedUrl;
        }
        return post;
    }));

    return c.json(postsWithUrls);
  } catch (error) {
    return c.json({ error: "Failed to fetch posts" }, 500);
  }
});

app.get(`${BASE_URL}/users/:id/posts`, async (c) => {
  const { supabase } = await getSupabaseContext(c);
  const userId = c.req.param('id');
  
  try {
    const allPosts = await kv.getByPrefix("post:");
    const userPosts = allPosts.filter((p: any) => p.authorId === userId);
    userPosts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const postsWithUrls = await Promise.all(userPosts.map(async (post: any) => {
        if (post.image && !post.image.startsWith('http')) {
            const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(post.image, 3600);
            if (data) post.image = data.signedUrl;
        }
        if (post.images && Array.isArray(post.images)) {
            post.images = await Promise.all(post.images.map(async (img: string) => {
                if (img && !img.startsWith('http')) {
                    const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(img, 3600);
                    return data ? data.signedUrl : img;
                }
                return img;
            }));
        }
        return post;
    }));

    return c.json(postsWithUrls);
  } catch (error) {
    return c.json({ error: "Failed to fetch user posts" }, 500);
  }
});

// === INTERACTIONS ===

app.post(`${BASE_URL}/posts/:id/like`, async (c) => {
  const { user } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const postId = c.req.param('id');
  const postKey = `post:${postId}`;
  const likeKey = `like:${postId}:${user.id}`;

  const post = await kv.get(postKey);
  if (!post) return c.json({ error: "Post not found" }, 404);

  const existingLike = await kv.get(likeKey);

  if (existingLike) {
    await kv.del(likeKey);
    post.likes = Math.max(0, (post.likes || 0) - 1);
  } else {
    await kv.set(likeKey, { userId: user.id, createdAt: new Date().toISOString() });
    post.likes = (post.likes || 0) + 1;

    const actor = await kv.get(`user:${user.id}`);
    await createNotification(post.authorId, {
        id: crypto.randomUUID(),
        type: 'like',
        actorId: user.id,
        actorName: actor?.username || 'User',
        actorAvatar: actor?.avatar || '',
        postId: post.id,
        postImage: post.image,
        createdAt: new Date().toISOString(),
        read: false
    });
  }

  await kv.set(postKey, post);
  return c.json({ likes: post.likes, liked: !existingLike });
});

app.get(`${BASE_URL}/posts/:id/liked`, async (c) => {
  const { user } = await getSupabaseContext(c);
  if (!user) return c.json({ liked: false });

  const postId = c.req.param('id');
  const likeKey = `like:${postId}:${user.id}`;
  const existingLike = await kv.get(likeKey);

  return c.json({ liked: !!existingLike });
});

app.post(`${BASE_URL}/posts/:id/save`, async (c) => {
  const { user } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const postId = c.req.param('id');
  const { folder, product } = await c.req.json().catch(() => ({ folder: 'All Posts' })); 
  
  if (product) {
      const safeProductId = product.id.replace(/[^a-zA-Z0-9-_]/g, '');
      const saveKey = `save:${user.id}:${postId}:${safeProductId}`;
      
      const saveData = { 
          userId: user.id, 
          postId, 
          folder: folder || '待購清單', 
          product, 
          createdAt: new Date().toISOString(),
          type: 'product' 
      };
      await kv.set(saveKey, saveData);
      return c.json({ saved: true, folder: saveData.folder });
  }

  const saveKey = `save:${user.id}:${postId}`;
  const existingSave = await kv.get(saveKey);

  if (existingSave) {
    const newSave = { ...existingSave, folder: folder || existingSave.folder || 'All Posts', updatedAt: new Date().toISOString() };
    await kv.set(saveKey, newSave);
    return c.json({ saved: true, folder: newSave.folder });
  } else {
    await kv.set(saveKey, { userId: user.id, postId, folder: folder || 'All Posts', createdAt: new Date().toISOString() });
    return c.json({ saved: true, folder: folder || 'All Posts' });
  }
});

app.delete(`${BASE_URL}/posts/:id/save`, async (c) => {
  const { user } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  
  const postId = c.req.param('id');
  const { productId } = await c.req.query(); 
  
  if (productId) {
      const safeProductId = productId.replace(/[^a-zA-Z0-9-_]/g, '');
      await kv.del(`save:${user.id}:${postId}:${safeProductId}`);
      return c.json({ saved: false });
  }
  
  const saveKey = `save:${user.id}:${postId}`;
  await kv.del(saveKey);
  return c.json({ saved: false });
});

app.get(`${BASE_URL}/users/me/saved`, async (c) => {
  const { user, supabase } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  try {
    const savedItems = await kv.getByPrefix(`save:${user.id}:`);
    if (!savedItems.length) return c.json([]);

    const uniquePostIds = [...new Set(savedItems.map((i: any) => i.postId))];
    const dbPostIds = uniquePostIds.map(id => `post:${id}`);
    const posts = await kv.mget(dbPostIds);
    
    const postsMap = new Map();
    posts.forEach((p: any) => {
        if(p) postsMap.set(p.id, p);
    });

    const validItems = savedItems.map((item: any) => {
        const parentPost = postsMap.get(item.postId);
        if (!parentPost) return null;

        if (item.type === 'product' && item.product) {
             return {
                 ...parentPost, 
                 savedId: `prod-${item.product.id}-${parentPost.id}`,
                 image: item.product.image || parentPost.image, 
                 title: item.product.name,
                 description: `${item.product.brand} • ${item.product.price}`,
                 isProduct: true,
                 product: item.product,
                 collection: item.folder || '待購清單',
                 savedAt: item.createdAt
             };
        } else {
             return {
                 ...parentPost,
                 savedId: `post-${parentPost.id}`,
                 isProduct: false,
                 collection: item.folder || 'All Posts',
                 savedAt: item.createdAt
             };
        }
    }).filter((x: any) => x !== null);

    validItems.sort((a: any, b: any) => new Date(b.savedAt || b.createdAt).getTime() - new Date(a.savedAt || a.createdAt).getTime());

    const itemsWithUrls = await Promise.all(validItems.map(async (post: any) => {
        if (post.image && !post.image.startsWith('http')) {
            const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(post.image, 3600);
            if (data) post.image = data.signedUrl;
        }
        if (post.images && Array.isArray(post.images)) {
            post.images = await Promise.all(post.images.map(async (img: string) => {
                if (img && !img.startsWith('http')) {
                    const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(img, 3600);
                    return data ? data.signedUrl : img;
                }
                return img;
            }));
        }
        if (post.authorAvatar && !post.authorAvatar.startsWith('http')) {
            const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(post.authorAvatar, 3600);
            if (data) post.authorAvatar = data.signedUrl;
        }
        return post;
    }));

    return c.json(itemsWithUrls);
  } catch (error) {
    return c.json({ error: "Failed to fetch saved posts" }, 500);
  }
});

app.post(`${BASE_URL}/posts/:id/repost`, async (c) => {
  const { user } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);
  return c.json({ success: true });
});

app.post(`${BASE_URL}/posts/:id/comments`, async (c) => {
    const { user } = await getSupabaseContext(c);
    if (!user) return c.json({ error: "Unauthorized" }, 401);
    
    const postId = c.req.param('id');
    const { text } = await c.req.json();

    const postKey = `post:${postId}`;
    const post = await kv.get(postKey);
    if (!post) return c.json({ error: "Post not found" }, 404);

    // Update post comment count
    post.comments = (post.comments || 0) + 1;
    await kv.set(postKey, post);

    // Notification
    const actor = await kv.get(`user:${user.id}`);
    await createNotification(post.authorId, {
        id: crypto.randomUUID(),
        type: 'comment',
        actorId: user.id,
        actorName: actor?.username || 'User',
        actorAvatar: actor?.avatar || '',
        postId: post.id,
        postImage: post.image,
        content: text,
        createdAt: new Date().toISOString(),
        read: false
    });

    return c.json({ success: true });
});


app.post(`${BASE_URL}/users/:id/follow`, async (c) => {
    const { user } = await getSupabaseContext(c);
    if (!user) return c.json({ error: "Unauthorized" }, 401);

    const targetId = c.req.param('id');
    if (user.id === targetId) return c.json({ error: "Cannot follow self" }, 400);

    const followKey = `follow:${user.id}:${targetId}`;
    const isFollowing = await kv.get(followKey);

    const targetProfile = await kv.get(`user:${targetId}`);
    const myProfile = await kv.get(`user:${user.id}`);

    if (isFollowing) {
        await kv.del(followKey);
        if (targetProfile) {
            targetProfile.followers = Math.max(0, (targetProfile.followers || 0) - 1);
            await kv.set(`user:${targetId}`, targetProfile);
        }
        if (myProfile) {
            myProfile.following = Math.max(0, (myProfile.following || 0) - 1);
            await kv.set(`user:${user.id}`, myProfile);
        }
    } else {
        await kv.set(followKey, { createdAt: new Date().toISOString() });
        if (targetProfile) {
            targetProfile.followers = (targetProfile.followers || 0) + 1;
            await kv.set(`user:${targetId}`, targetProfile);

            await createNotification(targetId, {
                id: crypto.randomUUID(),
                type: 'follow',
                actorId: user.id,
                actorName: myProfile?.username || 'User',
                actorAvatar: myProfile?.avatar || '',
                createdAt: new Date().toISOString(),
                read: false
            });
        }
        if (myProfile) {
            myProfile.following = (myProfile.following || 0) + 1;
            await kv.set(`user:${user.id}`, myProfile);
        }
    }

    return c.json({ following: !isFollowing });
});

app.get(`${BASE_URL}/users/me/folders`, async (c) => {
  const { user } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const folders = await kv.get(`folders:${user.id}`) || [];
  return c.json(folders);
});

app.post(`${BASE_URL}/users/me/folders`, async (c) => {
  const { user } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const { name } = await c.req.json();
  if (!name) return c.json({ error: "Name required" }, 400);

  const key = `folders:${user.id}`;
  const folders = await kv.get(key) || [];
  
  if (!folders.includes(name)) {
    folders.push(name);
    await kv.set(key, folders);
  }
  
  return c.json(folders);
});

app.get(`${BASE_URL}/notifications`, async (c) => {
  const { user, supabase } = await getSupabaseContext(c);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const list = await kv.get(`notifications:${user.id}`) || [];
  
  const listWithUrls = await Promise.all(list.map(async (n: any) => {
       if (n.actorAvatar && !n.actorAvatar.startsWith('http')) {
           const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(n.actorAvatar, 3600);
           if (data) n.actorAvatar = data.signedUrl;
       }
       if (n.postImage && !n.postImage.startsWith('http')) {
           const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(n.postImage, 3600);
           if (data) n.postImage = data.signedUrl;
       }
       return n;
  }));

  return c.json(listWithUrls);
});

app.get(`${BASE_URL}/search`, async (c) => {
  const { supabase } = await getSupabaseContext(c);
  const query = c.req.query('q')?.toLowerCase() || '';
  
  if (!query) return c.json([]);

  try {
    const allPosts = await kv.getByPrefix("post:");
    const allUsers = await kv.getByPrefix("user:");

    // Filter Posts
    const matchingPosts = allPosts.filter((post: any) => {
        return (post.caption && post.caption.toLowerCase().includes(query)) ||
               (post.tags && post.tags.some((t: any) => t.name.toLowerCase().includes(query))) ||
               (post.products && post.products.some((p: any) => p.brand.toLowerCase().includes(query) || p.name.toLowerCase().includes(query)));
    }).slice(0, 20);

    // Filter Users
    const matchingUsers = allUsers.filter((u: any) => {
        return (u.username && u.username.toLowerCase().includes(query)) ||
               (u.name && u.name.toLowerCase().includes(query));
    }).slice(0, 10);

    // Process Image URLs
    const postsWithUrls = await Promise.all(matchingPosts.map(async (post: any) => {
        if (post.image && !post.image.startsWith('http')) {
             const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(post.image, 3600);
             if (data) post.image = data.signedUrl;
        }
        return post;
    }));

    const usersWithUrls = await Promise.all(matchingUsers.map(async (user: any) => {
        if (user.avatar && !user.avatar.startsWith('http')) {
             const { data } = await supabase.storage.from(BUCKET_NAME).createSignedUrl(user.avatar, 3600);
             if (data) user.avatar = data.signedUrl;
        }
        return user;
    }));

    return c.json({ posts: postsWithUrls, users: usersWithUrls });
  } catch (error) {
    return c.json({ error: "Search failed" }, 500);
  }
});

Deno.serve(app.fetch);
