import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Bookmark, Search, Plus, Loader2, FolderPlus, Trash2, } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription, } from "./ui/dialog";
import { toast } from "sonner";

import { PostDetail } from "./PostDetail";
import { supabase } from "../lib/supabase";

/** 收藏資料夾 tab 用的型別 */
type FolderTab = {
  id: number | null; // null = All Posts
  name: string;
};

/** SavedPage 內部用的貼文型別（從 outfits + profiles + saves 整理過） */
type SavedPost = {
  saveId: number; // saves.id
  outfitId: number;
  folderId: number | null;
  folderName: string | null;
  image: string;
  title: string;
  description: string;
  authorName: string;
  authorUsername?: string;
  authorAvatar?: string | null;
};

export function SavedPage() {
  const [activeFolderId, setActiveFolderId] = useState<number | null>(null); // null = All Posts
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<SavedPost[]>([]);
  const [folders, setFolders] = useState<FolderTab[]>([
    { id: null, name: "All Posts" },
  ]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  useEffect(() => {
    fetchInitialData();
  }, []);

  /** 一開始載入：抓登入 user、資料夾列表、全部收藏 */
  const fetchInitialData = async () => {
    try {
      setLoading(true);

      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) throw sessionError;

      if (!session?.user) {
        // 沒登入：直接結束，不再往下查收藏
        setLoading(false);
        toast.info("請先登入後再查看收藏");
        return;
      }

      const user = session.user;
      setCurrentUserId(user.id);

      // 1) 收藏資料夾
      const { data: foldersData, error: foldersErr } = await supabase
        .from("save_folders")
        .select("id, name")
        .eq("user_id", user.id)
        .order("created_at", { ascending: true });

      if (foldersErr) throw foldersErr;

      const folderTabs: FolderTab[] = [
        { id: null, name: "All Posts" },
        ...(foldersData ?? []).map((f) => ({ id: f.id, name: f.name })),
      ];
      setFolders(folderTabs);

      // 2) 全部收藏的穿搭
      const saved = await fetchSavedPosts(user.id, null);
      setPosts(saved);
    } catch (error) {
      console.error("Failed to fetch saved data", error);
      toast.error("載入收藏失敗");
    } finally {
      setLoading(false);
    }
  };

  /** 根據 userId + folderId 抓收藏貼文 */
  const fetchSavedPosts = async (
    userId: string,
    folderId: number | null
  ): Promise<SavedPost[]> => {
    const query = supabase
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
            username
          )
        ),
        folder:folder_id (
          id,
          name
        )
      `
      )
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (folderId !== null) {
      query.eq("folder_id", folderId);
    }

    const { data, error } = await query;

    if (error) throw error;

    return (data ?? [])
      .filter((row: any) => row.outfits) // 保險一下
      .map((row: any) => {
        const o = row.outfits;
        const p = o.profiles;

        return {
          saveId: row.id,
          outfitId: o.id,
          folderId: row.folder_id,
          folderName: row.folder?.name ?? null,
          image: o.main_image_url,
          title: o.description ?? "",
          description: o.description ?? "",
          authorName: p?.display_name ?? "",
          authorUsername: p?.username ?? "",
          authorAvatar: p?.avatar_url ?? null,
        } as SavedPost;
      });
  };

  /** 點選不同資料夾 tab */
  const handleFolderClick = async (folder: FolderTab) => {
    if (!currentUserId) return;
    setActiveFolderId(folder.id);
    setLoading(true);
    try {
      const saved = await fetchSavedPosts(currentUserId, folder.id);
      setPosts(saved);
    } catch (e) {
      console.error("Failed to switch folder", e);
      toast.error("載入資料夾失敗");
    } finally {
      setLoading(false);
    }
  };

  /** 建立新收藏資料夾 */
  const handleCreateFolder = async () => {
    if (!newFolderName.trim() || !currentUserId) return;

    try {
      setIsCreating(true);
      const { data, error } = await supabase
        .from("save_folders")
        .insert({
          user_id: currentUserId,
          name: newFolderName.trim(),
        })
        .select("id, name")
        .single();

      if (error) throw error;

      const newFolder: FolderTab = { id: data.id, name: data.name };
      const newFolders = [...folders, newFolder];
      setFolders(newFolders);
      setActiveFolderId(newFolder.id);
      toast.success("已建立資料夾");

      // 切到新資料夾時，內容一開始是空的
      setPosts([]);
      setIsCreateFolderOpen(false);
      setNewFolderName("");
    } catch (error: any) {
      if (error?.code === "23505") {
        toast.error("同名資料夾已存在");
      } else {
        toast.error("建立資料夾失敗");
      }
    } finally {
      setIsCreating(false);
    }
  };

  /** 移除收藏（取消 save） */
  const handleRemoveItem = async (e: React.MouseEvent, post: SavedPost) => {
    e.stopPropagation();
    try {
      // Optimistic UI
      setPosts((prev) => prev.filter((p) => p.saveId !== post.saveId));
      toast.success("已從收藏移除");

      const { error } = await supabase
        .from("saves")
        .delete()
        .eq("id", post.saveId);

      if (error) throw error;
    } catch (error) {
      toast.error("移除失敗");
      // 若失敗，重新載入當前資料夾
      if (currentUserId) {
        const saved = await fetchSavedPosts(currentUserId, activeFolderId);
        setPosts(saved);
      }
    }
  };

  /** 搜尋 + 資料夾篩選 */
  const filteredPosts = posts.filter((post) => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();

    const title = (post.title || "").toLowerCase();
    const description = (post.description || "").toLowerCase();
    const authorName = (post.authorName || "").toLowerCase();
    const authorUsername = (post.authorUsername || "").toLowerCase();

    const matchesText =
      title.includes(query) ||
      description.includes(query) ||
      authorName.includes(query) ||
      authorUsername.includes(query);

    return matchesText;
  });

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-slate-700" /> 我的收藏
          </h1>
          <div className="text-sm text-slate-500 font-medium">
            {posts.length} items
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="搜尋收藏內容..."
              className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-slate-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Collections Tabs */}
      <div className="px-6 py-3 border-b border-slate-100 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 items-center">
          {folders.map((folder) => (
            <button
              key={folder.id ?? "all"}
              onClick={() => handleFolderClick(folder)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeFolderId === folder.id
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {folder.name}
            </button>
          ))}

          {/* 新增資料夾按鈕 */}
          <Dialog
            open={isCreateFolderOpen}
            onOpenChange={setIsCreateFolderOpen}
          >
            <DialogTrigger asChild>
              <button className="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>建立分類資料夾</DialogTitle>
                <DialogDescription>為您的收藏建立一個新的分類</DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Input
                  placeholder="資料夾名稱"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsCreateFolderOpen(false)}
                >
                  取消
                </Button>
                <Button
                  onClick={handleCreateFolder}
                  disabled={!newFolderName.trim() || isCreating}
                >
                  {isCreating ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "建立"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Grid Content */}
      <ScrollArea className="flex-1 p-6">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-gray-300" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPosts.map((post) => (
              <div
                key={post.saveId}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-md transition-all"
                onClick={() =>
                  setSelectedPost({
                    id: post.outfitId,
                    image: post.image,
                    caption: post.description,
                    authorName: post.authorName,
                    authorAvatar: post.authorAvatar,
                    // 其他欄位 PostDetail 若需要可以再補
                  })
                }
              >
                <ImageWithFallback
                  src={post.image}
                  alt={post.title || "Post"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-bold text-sm truncate">
                      {post.title || post.description || "Untitled"}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {post.folderName || "All Posts"}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute top-2 right-2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100 hover:bg-white hover:text-red-600 text-slate-500"
                  onClick={(e) => handleRemoveItem(e, post)}
                >
                  <Trash2 className="w-4 h-4" />
                </div>
              </div>
            ))}

            {filteredPosts.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400">
                {activeFolderId === null ? (
                  <>
                    <Bookmark className="w-12 h-12 mb-3 stroke-1 opacity-50" />
                    <p>沒有找到相關收藏</p>
                  </>
                ) : (
                  <>
                    <FolderPlus className="w-12 h-12 mb-3 stroke-1 opacity-50" />
                    <p>這個資料夾是空的</p>
                    <Button
                      variant="link"
                      className="mt-2"
                      onClick={() => setActiveFolderId(null)}
                    >
                      瀏覽所有收藏
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </ScrollArea>

      {/* Post Detail Modal */}
      {selectedPost && (
        <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}
