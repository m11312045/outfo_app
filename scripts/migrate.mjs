// scripts/migrate.mjs
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("SUPABASE_URL 或 SUPABASE_SERVICE_KEY 未設定");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const KV_TABLE = 'kv_store';

async function getKv(prefix) {
  const { data, error } = await supabase
    .from(KV_TABLE)
    .select('key, value')
    .like('key', `${prefix}:%`);

  if (error) throw error;
  return data ?? [];
}

/** user:* → profiles */
async function migrateProfiles() {
  console.log('profiles 開始');

  const rows = await getKv('user');

  for (const row of rows) {
    try {
      const [, userId] = row.key.split(':');
      const obj = JSON.parse(row.value);

      const { error } = await supabase.from('profiles').upsert({
        id: userId,
        display_name: obj.name ?? obj.username ?? "未命名",
        avatar_url: obj.avatar ?? null,
        bio: obj.bio ?? null,
        created_at: obj.joinedAt ?? new Date().toISOString(),
      });

      if (error) {
        console.error(`profile 寫入失敗 user=${userId}`, error);
      } else {
        console.log(`profile: ${userId}`);
      }
    } catch (err) {
      console.error('profile 搬移失敗 key=', row.key, err);
    }
  }
}

/** post:* → outfits */
async function migrateOutfits() {
  console.log('outfits 開始');

  const rows = await getKv('post');

  for (const row of rows) {
    try {
      const [, postId] = row.key.split(':'); // "post:<postId>"
      const obj = JSON.parse(row.value);

      // 先決定 outfitId
      const outfitId = obj.id ?? postId;

      // 如果不是 uuid（沒有 "-" 的那種 1 / 2 / 3 demo），就略過
      if (!String(outfitId).includes('-')) {
        console.log(`  ⚠️ outfitId=${outfitId} 不是 uuid，看起來是舊 demo，略過`);
        continue;
      }

      // 主圖：image 或 images[0]
      const mainImage =
        obj.image ||
        (Array.isArray(obj.images) && obj.images.length > 0
          ? obj.images[0]
          : null);

      if (!mainImage) {
        console.log(`  ⚠️ postId=${postId} 無主圖，略過`);
        continue;
      }

      const { error: e1 } = await supabase.from('outfits').upsert({
        id: outfitId,
        user_id: obj.authorId,
        main_image_url: mainImage,
        description: obj.caption ?? obj.description ?? null,
        created_at: obj.createdAt ?? new Date().toISOString(),
      });

      if (e1) {
        console.error(`  ❌ outfit 寫入失敗 id=${outfitId}`, e1);
        continue;
      }

      // 多張圖：從 index 1 之後丟到 outfit_images
      if (Array.isArray(obj.images) && obj.images.length > 1) {
        const others = obj.images.slice(1);
        const payload = others.map((url) => ({
          outfit_id: outfitId,
          image_url: url,
        }));

        if (payload.length > 0) {
          const { error: e2 } = await supabase.from('outfit_images').insert(payload);
          if (e2) {
            console.error(`  ❌ outfit_images 寫入失敗 outfit=${outfitId}`, e2);
          }
        }
      }

      console.log(`  ✅ outfit: ${outfitId}`);
    } catch (err) {
      console.error('  ❌ outfit 搬移失敗 key=', row.key, err);
    }
  }
}

/** post_likes:* → likes */
async function migrateLikes() {
  console.log('likes 開始');

  const rows = await getKv('post_likes');

  for (const row of rows) {
    try {
      const [, postId] = row.key.split(':');

      // 不是 uuid 的舊貼文略過
      if (!postId.includes('-')) {
        console.log(`  ⚠️ post_likes 的 postId=${postId} 不是 uuid，略過`);
        continue;
      }

      const users = JSON.parse(row.value);
      if (!Array.isArray(users)) {
        console.warn(`  ⚠️ post_likes 不是陣列 key=${row.key}`);
        continue;
      }

      const payload = users.map((uid) => ({
        user_id: uid,
        outfit_id: postId,
      }));

      if (payload.length === 0) continue;

      const { error } = await supabase
        .from('likes')
        .insert(payload)
        .onConflict('user_id, outfit_id');

      if (error) {
        console.error(`  ❌ likes 寫入失敗 post=${postId}`, error);
      } else {
        console.log(`  ✅ likes for post ${postId} (${users.length} 筆)`);
      }
    } catch (err) {
      console.error('  ❌ likes 搬移失敗 key=', row.key, err);
    }
  }
}


/** user_saved:* → saves */
async function migrateSaves() {
  console.log('saves 開始');

  const rows = await getKv('user_saved');

  for (const row of rows) {
    try {
      const [, userId] = row.key.split(':');
      const posts = JSON.parse(row.value);

      if (!Array.isArray(posts)) {
        console.warn(`  ⚠️ user_saved 不是陣列 key=${row.key}`);
        continue;
      }

      const validPosts = posts.filter((postId) => String(postId).includes('-'));
      const payload = validPosts.map((postId) => ({
        user_id: userId,
        outfit_id: postId,
      }));

      if (payload.length === 0) continue;

      const { error } = await supabase
        .from('saves')
        .insert(payload)
        .onConflict('user_id, outfit_id');

      if (error) {
        console.error(`  ❌ saves 寫入失敗 user=${userId}`, error);
      } else {
        console.log(`  ✅ saves for user ${userId} (${validPosts.length} 筆)`);
      }
    } catch (err) {
      console.error('  ❌ saves 搬移失敗 key=', row.key, err);
    }
  }
}



async function main() {
  await migrateProfiles();
  await migrateOutfits();
  await migrateLikes();
  await migrateSaves();
  console.log('遷移完成！');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
