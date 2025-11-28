import { useEffect, useMemo, useState } from "react";
import { Search, Heart, Bookmark, MoreHorizontal } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { getCurrentProfile, fetchFeedPosts, type FeedPost } from "../lib/db";

type ViewMode = "grid" | "list";

export function ExplorePage() {
  const [posts, setPosts] = useState<FeedPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<FeedPost[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 讀取貼文（首頁探索）
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        // 允許未登入瀏覽，所以 currentUserId 可以是 null
        const { user } = await getCurrentProfile();
        const data = await fetchFeedPosts(user?.id ?? null);

        setPosts(data);
        setFilteredPosts(data);
      } catch (err: any) {
        console.error("Failed to fetch explore posts", err);
        setError(err.message ?? "載入失敗，請稍後再試");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // 搜尋：前端直接 filter caption / 作者名稱
  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      setFilteredPosts(posts);
      return;
    }
    setFilteredPosts(
      posts.filter((p) => {
        const caption = p.caption?.toLowerCase() ?? "";
        const author = p.authorName?.toLowerCase() ?? "";
        return caption.includes(q) || author.includes(q);
      }),
    );
  }, [searchQuery, posts]);

  // 粗略產生「熱門關鍵字」：從 caption 抓出井字標籤
  const popularTags = useMemo(() => {
    const map = new Map<string, number>();
    posts.forEach((p) => {
      const matches = p.caption?.match(/#(\S+)/g) ?? [];
      matches.forEach((m) => {
        const tag = m.toLowerCase();
        map.set(tag, (map.get(tag) ?? 0) + 1);
      });
    });
    return Array.from(map.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([name]) => name);
  }, [posts]);

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag.replace(/^#/, ""));
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-white/70 backdrop-blur-md sticky top-0 z-10">
        <h1 className="text-lg font-semibold">探索穿搭</h1>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            圖格
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            清單
          </Button>
        </div>
      </div>

      {/* Search bar + tags */}
      <div className="px-4 pt-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋穿搭、說明文字或作者…"
            className="pl-9"
          />
        </div>

        {popularTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-500 mr-1">熱門標籤：</span>
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-2 py-4">
        {isLoading && (
          <div className="text-center text-sm text-gray-500 py-10">
            載入中…
          </div>
        )}

        {!isLoading && error && (
          <div className="text-center text-sm text-red-500 py-10">
            {error}
          </div>
        )}

        {!isLoading && !error && filteredPosts.length === 0 && (
          <div className="text-center text-sm text-gray-500 py-10">
            找不到符合條件的穿搭
          </div>
        )}

        {!isLoading && !error && filteredPosts.length > 0 && (
          <>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-3 gap-1 sm:gap-2">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="relative group aspect-square bg-gray-100 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-x-1 bottom-1 flex items-center justify-between text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-white" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bookmark
                          className={`w-3 h-3 ${
                            post.savedByMe ? "fill-white" : ""
                          }`}
                        />
                        <MoreHorizontal className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl shadow-sm border overflow-hidden"
                  >
                    <div className="flex items-center justify-between px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden">
                          {post.authorAvatar && (
                            <img
                              src={post.authorAvatar}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">
                            {post.authorName}
                          </span>
                          <span className="text-xs text-gray-400">
                            {new Date(post.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="w-full bg-gray-100">
                      <img
                        src={post.image}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="px-3 py-2 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Heart
                            className={`w-4 h-4 ${
                              post.likedByMe ? "fill-red-500 text-red-500" : ""
                            }`}
                          />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 max-w-[200px] truncate">
                          <span className="font-semibold">
                            {post.authorName}
                          </span>
                          <span className="truncate">{post.caption}</span>
                        </div>
                      </div>
                      <Bookmark
                        className={`w-4 h-4 ${
                          post.savedByMe ? "fill-black" : ""
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
