import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { SettingsPage } from "./SettingsPage";
import { WishlistPage } from "./WishlistPage";
import { PostDetail } from "./PostDetail";
import { ChevronLeft, MoreHorizontal, Shirt, LayoutGrid, Bookmark, Loader2, Clapperboard, Share2, ShoppingBag, Play, } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription, } from "./ui/sheet";
import { api } from "../utils/api";
import { supabase } from "../lib/supabase";

interface ProfilePageProps {
  onEditProfile?: () => void;
  onNavigate?: (view: "notifications" | "saved" | "wardrobe") => void;
  className?: string;
}

export function ProfilePage({
  onEditProfile,
  onNavigate,
  className,
}: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<"looks" | "reels" | "boards">(
    "looks"
  );
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const [profile, setProfile] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  // boards tab 這裡我們用來存「按讚的貼文」
  const [likedPosts, setLikedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingLikes, setLoadingLikes] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // 切到「按讚的貼文」tab 時載入 likes
  useEffect(() => {
    if (activeTab === "boards") {
      fetchLikedPosts();
    }
  }, [activeTab]);

  /** 抓使用者基本資料與自己的貼文（沿用你原本的 API） */
  const fetchData = async () => {
    try {
      setLoading(true);
      // 1. Get Current User
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return;
      }

      // 2. Get Profile
      try {
        const profileData = await api.get("/users/me");
        setProfile(profileData);
      } catch (err) {
        setProfile({
          id: user.id,
          name: user.user_metadata?.full_name || "User",
          username: user.user_metadata?.username || "user",
          avatar: user.user_metadata?.avatar_url || "",
          bio: "Fashion lover (Offline Mode)",
          followers: 0,
          following: 0,
          styles: [],
        });
      }

      // 3. Get Posts
      try {
        const postsData = await api.get(`/users/${user.id}/posts`);
        if (Array.isArray(postsData)) {
          setPosts(postsData);
        }
      } catch (err) {
        setPosts([]);
      }
    } catch (error) {
      // Silent fail
    } finally {
      setLoading(false);
    }
  };

  /** 抓「我按讚過的貼文」：likes → outfits */
  const fetchLikedPosts = async () => {
    try {
      setLoadingLikes(true);
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) throw error;
      if (!user) return;

      const { data, error: likesErr } = await supabase
        .from("likes")
        .select(
          `
          id,
          created_at,
          outfits:outfit_id (
            id,
            main_image_url,
            description,
            created_at
          )
        `
        )
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (likesErr) throw likesErr;

      const mapped =
        data?.map((row: any) => ({
          likeId: row.id,
          id: row.outfits?.id,
          image: row.outfits?.main_image_url,
          description: row.outfits?.description ?? "",
        })) ?? [];

      setLikedPosts(mapped);
    } catch (e) {
      console.error("Failed to fetch liked posts", e);
      toast.error("載入按讚貼文失敗");
    } finally {
      setLoadingLikes(false);
    }
  };

  const looksPosts = posts.filter(
    (p) => p.type !== "reel" && !p.image?.match(/\.(mp4|webm)$/i)
  );
  const reelsPosts = posts.filter(
    (p) => p.type === "reel" || p.image?.match(/\.(mp4|webm)$/i)
  );

  if (showWishlist) {
    return <WishlistPage onBack={() => setShowWishlist(false)} />;
  }

  if (showSettings) {
    return <SettingsPage onBack={() => setShowSettings(false)} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (!profile) return null;

  return (
    <>
      <div
        className={`min-h-screen bg-white text-gray-900 font-sans max-w-md mx-auto border-x border-gray-50 shadow-sm ${className}`}
      >
        {/* Header */}
        <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-40 flex items-center justify-between px-4 py-3">
          <button
            onClick={() => window.history.back()}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="text-[16px] font-semibold tracking-tight text-gray-900">
            {profile.username}
          </h1>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowWishlist(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingBag className="w-6 h-6 text-gray-800" />
            </button>
            <Sheet open={showMenu} onOpenChange={setShowMenu}>
              <SheetTrigger asChild>
                <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors">
                  <MoreHorizontal className="w-6 h-6 text-gray-800" />
                </button>
              </SheetTrigger>
              <SheetContent side="bottom" className="rounded-t-[20px]">
                <SheetHeader>
                  <SheetTitle>更多選項</SheetTitle>
                  <SheetDescription>
                    管理 {profile.name} 的個人檔案
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base"
                    onClick={() => {
                      setShowMenu(false);
                      onNavigate?.("wardrobe");
                    }}
                  >
                    <Shirt className="w-4 h-4 mr-2" />
                    我的衣櫃
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base"
                    onClick={() => {
                      setShowMenu(false);
                      onNavigate?.("saved");
                    }}
                  >
                    <Bookmark className="w-4 h-4 mr-2" />
                    我的收藏
                  </Button>
                  <div className="h-[1px] bg-gray-100 my-2" />
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base"
                    onClick={() => {
                      setShowMenu(false);
                      setShowSettings(true);
                    }}
                  >
                    設定
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base"
                    onClick={onEditProfile}
                  >
                    編輯個人檔案
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <div className="flex flex-col items-center pt-2 pb-6 px-4">
          {/* Avatar */}
          <div className="relative mb-4">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden border border-gray-100 shadow-sm">
              <ImageWithFallback
                src={
                  profile.avatar ||
                  "https://images.unsplash.com/photo-1745240261519-0b988d54d098?w=400&h=400&fit=crop"
                }
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {profile.name}
          </h2>

          {/* Stats Line */}
          <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium mb-2">
            <span>{profile.followers || 0} 訂閱</span>
            <span className="w-0.5 h-0.5 bg-gray-400 rounded-full" />
            <span>{profile.following || 0} 關注中</span>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-400 mb-4 font-light tracking-wide">
            {profile.bio || "No bio yet."}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {profile.styles?.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-[#F2F2F7] text-gray-600 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full">
            <Button
              className="flex-1 h-11 rounded-lg font-medium text-[15px] shadow-none bg-[#2C2C2E] text-white hover:bg-[#3C3C3E]"
              onClick={onEditProfile}
            >
              編輯檔案
            </Button>
            <Button
              variant="outline"
              className="w-11 h-11 p-0 rounded-lg border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700"
              onClick={() => {
                const url = window.location.href;
                navigator.clipboard
                  .writeText(url)
                  .then(() => toast.success("Link copied to clipboard"))
                  .catch(() => {
                    const textArea = document.createElement("textarea");
                    textArea.value = url;
                    textArea.style.position = "fixed";
                    textArea.style.left = "-9999px";
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    try {
                      document.execCommand("copy");
                      toast.success("Link copied to clipboard");
                    } catch (e) {
                      toast.error("Failed to copy link");
                    }
                    document.body.removeChild(textArea);
                  });
              }}
            >
              <Share2 className="w-5 h-5" strokeWidth={1.5} />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="sticky top-[57px] bg-white z-30 border-b border-gray-100">
          <div className="flex items-center px-2">
            <button
              onClick={() => setActiveTab("looks")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 relative transition-colors ${
                activeTab === "looks"
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="text-[13px] font-medium">穿搭 Looks</span>
              {activeTab === "looks" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("reels")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 relative transition-colors ${
                activeTab === "reels"
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Clapperboard className="w-4 h-4" />
              <span className="text-[13px] font-medium">Reels</span>
              {activeTab === "reels" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("boards")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 relative transition-colors ${
                activeTab === "boards"
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span className="text-[13px] font-medium">按讚的貼文</span>
              {activeTab === "boards" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Content Grid - 3 Columns */}
        <div className="min-h-[500px] bg-white pb-20">
          {activeTab === "looks" && (
            <div className="grid grid-cols-3 gap-[2px]">
              {looksPosts.length === 0 ? (
                <div className="col-span-3 flex flex-col items-center justify-center py-20 text-gray-400">
                  <p className="text-sm">還沒有發布貼文</p>
                </div>
              ) : (
                looksPosts.map((post) => (
                  <div
                    key={post.id}
                    className="relative aspect-[4/5] bg-gray-50 group cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <ImageWithFallback
                      src={post.image}
                      alt={`Outfit ${post.id}`}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                    />
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "reels" && (
            <div className="grid grid-cols-3 gap-[2px]">
              {reelsPosts.length === 0 ? (
                <div className="col-span-3 flex flex-col items-center justify-center py-20 text-gray-400">
                  <Clapperboard className="w-12 h-12 mb-3 stroke-1 opacity-50" />
                  <p className="text-sm">還沒有發布連續短片</p>
                </div>
              ) : (
                reelsPosts.map((post) => (
                  <div
                    key={post.id}
                    className="relative aspect-[9/16] bg-black group cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <video
                      src={post.image}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                    />
                    <div className="absolute top-2 right-2">
                      <Play className="w-4 h-4 text-white fill-white drop-shadow-md" />
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "boards" && (
            <>
              {loadingLikes ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-gray-300" />
                </div>
              ) : likedPosts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                  <Bookmark className="w-12 h-12 mb-3 stroke-1 opacity-50" />
                  <p className="text-sm">還沒有按讚的貼文</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-[2px]">
                  {likedPosts.map((post) => (
                    <div
                      key={post.likeId || post.id}
                      className="relative aspect-[4/5] bg-gray-50 group cursor-pointer"
                      onClick={() =>
                        setSelectedPost({
                          id: post.id,
                          image: post.image,
                          caption: post.description,
                        })
                      }
                    >
                      <ImageWithFallback
                        src={post.image}
                        alt={`Liked Post ${post.id}`}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <PostDetail
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  );
}
