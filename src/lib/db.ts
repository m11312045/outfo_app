// src/lib/db.ts
import { supabase } from "./supabase";

/** profiles row */
export type Profile = {
  id: string;
  display_name: string;
  avatar_url: string | null;
  bio: string | null;
  username: string | null;
  website?: string | null;
  is_public?: boolean | null;
  gender?: string | null;
  birth_year?: number | null;
  country?: string | null;
  region?: string | null;
  language?: string | null;
  styles?: string[] | null;
  background_color?: string | null;
  button_color?: string | null;
  created_at: string;
};

/** outfits + profiles join 後的 row */
export type OutfitRow = {
  id: string;
  user_id: string;
  main_image_url: string;
  description: string | null;
  created_at: string;
  profiles: Profile;
};

// 收藏資料夾
export type SaveFolder = {
  id: number;
  user_id: string;
  name: string;
  created_at: string;
};

// 收藏的貼文（含 outfit + 作者）
export type SavedOutfit = {
  save_id: number;
  folder_id: number | null;
  created_at: string;
  outfit: {
    id: string;
    main_image_url: string;
    description: string | null;
    created_at: string;
    profiles: Profile;
  };
};

/** 給前端用的貼文型別（對應 FeedPostCard 的 Post） */
export type FeedPost = {
  id: string;              // outfit.id
  image: string;           // main_image_url
  images: string[];        // main + outfit_images
  caption: string;
  likes: number;
  authorId: string;
  authorName: string;
  authorAvatar: string | null;
  createdAt: string;
  likedByMe: boolean;
  savedByMe: boolean;
};

/** 取得目前登入 user + profile，沒有 profile 就幫你建一個 */
export async function getCurrentProfile() {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) return { user: null, profile: null };

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (error && error.code !== "PGRST116") throw error;

  let profile = data as Profile | null;

  // 沒 profile 自動建立一筆
  if (!profile) {
    const baseName =
      user.user_metadata?.name ??
      user.email?.split("@")[0] ??
      "New user";

    const { data: created, error: insertError } = await supabase
      .from("profiles")
      .insert({
        id: user.id,
        display_name: baseName,
        username: user.user_metadata?.username ?? baseName,
        avatar_url: user.user_metadata?.avatar_url ?? null,
        bio: null,
      })
      .select("*")
      .single();
    if (insertError) throw insertError;
    profile = created as Profile;
  }

  return { user, profile };
}

/** 從 outfits 系列表抓首頁 feed */
export async function fetchFeedPosts(
  currentUserId: string | null,
): Promise<FeedPost[]> {
  // 1) outfits + profiles
  const { data, error } = await supabase
    .from("outfits")
    .select(
      `
      id,
      user_id,
      main_image_url,
      description,
      created_at,
      profiles:profiles!outfits_user_id_fkey (
        id,
        display_name,
        avatar_url,
        bio,
        created_at
      )
    `,
    )
    .order("created_at", { ascending: false });

  if (error) throw error;
  const outfits = (data ?? []) as OutfitRow[];
  if (outfits.length === 0) return [];

  const outfitIds = outfits.map((o) => o.id);

  // 2) 使用者已按讚 / 收藏
  let likedIds = new Set<string>();
  let savedIds = new Set<string>();

  if (currentUserId) {
    const { data: likes } = await supabase
      .from("likes")
      .select("outfit_id")
      .eq("user_id", currentUserId)
      .in("outfit_id", outfitIds);
    likedIds = new Set((likes ?? []).map((l: any) => l.outfit_id as string));

    const { data: saves } = await supabase
      .from("saves")
      .select("outfit_id")
      .eq("user_id", currentUserId)
      .in("outfit_id", outfitIds);
    savedIds = new Set((saves ?? []).map((s: any) => s.outfit_id as string));
  }

  // 3) 每篇讚數
  const { data: likeRows, count } = await supabase
    .from("likes")
    .select("outfit_id", { head: false, count: "exact" })
    .in("outfit_id", outfitIds);

  const likeCountMap = new Map<string, number>();
  (likeRows ?? []).forEach((row: any) => {
    likeCountMap.set(row.outfit_id as string, (row as any).count ?? 0);
  });

  // 4) outfit_images
  const { data: imgRows } = await supabase
    .from("outfit_images")
    .select("outfit_id, image_url")
    .in("outfit_id", outfitIds);

  const imagesMap = new Map<string, string[]>();
  (imgRows ?? []).forEach((row: any) => {
    const arr = imagesMap.get(row.outfit_id) ?? [];
    arr.push(row.image_url);
    imagesMap.set(row.outfit_id, arr);
  });

  // 5) 組成 FeedPost
  return outfits.map((o) => {
    const images = [o.main_image_url, ...(imagesMap.get(o.id) ?? [])];
    return {
      id: o.id,
      image: o.main_image_url,
      images,
      caption: o.description ?? "",
      likes: likeCountMap.get(o.id) ?? 0,
      authorId: o.user_id,
      authorName: o.profiles.display_name,
      authorAvatar: o.profiles.avatar_url,
      createdAt: o.created_at,
      likedByMe: likedIds.has(o.id),
      savedByMe: savedIds.has(o.id),
    } as FeedPost;
  });
}

/** 切換讚 */
export async function toggleLike(outfitId: string, userId: string) {
  const { data: existing, error } = await supabase
    .from("likes")
    .select("id")
    .eq("outfit_id", outfitId)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw error;

  if (existing) {
    const { error: delError } = await supabase
      .from("likes")
      .delete()
      .eq("id", existing.id);
    if (delError) throw delError;
    return { liked: false };
  } else {
    const { error: insError } = await supabase
      .from("likes")
      .insert({ outfit_id: outfitId, user_id: userId });
    if (insError) throw insError;
    return { liked: true };
  }
}

/** 切換收藏 */
// folderId 可選；若沒帶，就當作「未分類」
export async function toggleSave(
  outfitId: string,
  userId: string,
  folderId?: number | null,
) {
  // 一篇貼文對一個 user 只能存一次 → 直接以 user_id + outfit_id 查
  const { data: existing, error } = await supabase
    .from("saves")
    .select("id, folder_id")
    .eq("outfit_id", outfitId)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw error;

  if (existing) {
    const { error: delError } = await supabase
      .from("saves")
      .delete()
      .eq("id", existing.id);
    if (delError) throw delError;
    return { saved: false };
  } else {
    const { error: insError } = await supabase
      .from("saves")
      .insert({ outfit_id: outfitId, user_id: userId, folder_id: folderId ?? null });
    if (insError) throw insError;
    return { saved: true };
  }
}

// 取得使用者所有收藏資料夾（我的收藏上面的 tabs）
export async function getSaveFolders(userId: string): Promise<SaveFolder[]> {
  const { data, error } = await supabase
    .from("save_folders")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });

  if (error) throw error;
  return data as SaveFolder[];
}

// 取得某個 user 的收藏貼文，folderId 為 null = 全部資料夾
export async function fetchSavedOutfits(
  userId: string,
  folderId?: number | null,
): Promise<SavedOutfit[]> {
  let query = supabase
    .from("saves")
    .select(
      `
      id,
      folder_id,
      created_at,
      outfits:outfit_id (
        id,
        main_image_url,
        description,
        created_at,
        profiles:profiles!outfits_user_id_fkey (
          id,
          display_name,
          avatar_url,
          bio,
          created_at
        )
      )
    `,
    )
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (folderId !== undefined && folderId !== null) {
    query = query.eq("folder_id", folderId);
  }

  const { data, error } = await query;
  if (error) throw error;

  return (data ?? []).map((row: any) => ({
    save_id: row.id,
    folder_id: row.folder_id,
    created_at: row.created_at,
    outfit: row.outfits,
  }));
}

/** 取得目前登入使用者的 profile */
export async function fetchCurrentProfile(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select(`
      id,
      display_name,
      avatar_url,
      bio,
      username,
      website,
      is_public,
      gender,
      birth_year,
      country,
      region,
      language,
      styles,
      background_color,
      button_color,
      created_at
    `)
    .eq("id", userId)
    .single();

  if (error) throw error;
  return data as Profile;
}

/** 使用者自己的穿搭列表 */
export async function fetchUserOutfits(userId: string) {
  const { data, error } = await supabase
    .from("outfits")
    .select(
      `
      id,
      user_id,
      main_image_url,
      description,
      created_at,
      profiles:profiles!outfits_user_id_fkey (
        id,
        display_name,
        avatar_url,
        username
      ),
      likes:likes(count)
    `
    )
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return (
    data?.map((row: any) => ({
      id: row.id,
      user_id: row.user_id,
      main_image_url: row.main_image_url,
      description: row.description,
      created_at: row.created_at,
      author: row.profiles,
      likesCount: row.likes?.[0]?.count ?? 0,
    })) ?? []
  );
}

/** 使用者按讚過的穿搭（用在個人主頁「按讚的貼文」tab） */
export async function fetchUserLikedOutfits(userId: string) {
  const { data, error } = await supabase
    .from("likes")
    .select(
      `
      outfit_id,
      created_at,
      outfits:outfit_id (
        id,
        user_id,
        main_image_url,
        description,
        created_at,
        profiles:profiles!outfits_user_id_fkey (
          id,
          display_name,
          avatar_url,
          username
        )
      )
    `
    )
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return (
    data?.map((row: any) => ({
      id: row.outfits.id,
      user_id: row.outfits.user_id,
      main_image_url: row.outfits.main_image_url,
      description: row.outfits.description,
      created_at: row.outfits.created_at,
      author: row.outfits.profiles,
    })) ?? []
  );
}

/** 檢查目前使用者是否有對某篇穿搭按讚 */
export async function isOutfitLikedByUser(outfitId: number, userId: string) {
  const { count, error } = await supabase
    .from("likes")
    .select("*", { count: "exact", head: true })
    .eq("outfit_id", outfitId)
    .eq("user_id", userId);

  if (error) throw error;
  return (count ?? 0) > 0;
}

/** 按讚 */
export async function likeOutfit(outfitId: number, userId: string) {
  const { error } = await supabase.from("likes").insert({
    outfit_id: outfitId,
    user_id: userId,
  });
  if (error && error.code !== "23505") {
    // 23505 = duplicate key，代表已經按過讚，可以略過
    throw error;
  }
}

/** 取消讚 */
export async function unlikeOutfit(outfitId: number, userId: string) {
  const { error } = await supabase
    .from("likes")
    .delete()
    .eq("outfit_id", outfitId)
    .eq("user_id", userId);
  if (error) throw error;
}

/** 取得使用者的收藏資料夾 */
export async function fetchSaveFolders(userId: string) {
  const { data, error } = await supabase
    .from("save_folders")
    .select("id, name, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

/** 新增收藏資料夾 */
export async function createSaveFolder(userId: string, name: string) {
  const { data, error } = await supabase
    .from("save_folders")
    .insert({ user_id: userId, name })
    .select("id, name, created_at")
    .single();

  if (error) throw error;
  return data;
}

/** 把穿搭存進某個資料夾（或 null 表示「未分類」） */
export async function saveOutfitToFolder(
  outfitId: number,
  userId: string,
  folderId: number | null
) {
  const payload: any = {
    outfit_id: outfitId,
    user_id: userId,
    folder_id: folderId,
  };

  const { error } = await supabase.from("saves").upsert(payload, {
    onConflict: "user_id,outfit_id,folder_id",
  });

  if (error) throw error;
}

/** 取消收藏（從某個資料夾移除）folderId 可為 undefined 代表不指定 */
export async function removeSavedOutfit(
  outfitId: number,
  userId: string,
  folderId?: number
) {
  let q = supabase.from("saves").delete().eq("outfit_id", outfitId).eq("user_id", userId);
  if (folderId != null) {
    q = q.eq("folder_id", folderId);
  }
  const { error } = await q;
  if (error) throw error;
}
