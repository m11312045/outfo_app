import { useEffect, useState } from "react";
import { Heart, Bookmark, Loader2 } from "lucide-react";
import {
  fetchSavedOutfits,
  getCurrentProfile,
  type SavedOutfit,
} from "../lib/db";

export function WishlistPage() {
  const [saved, setSaved] = useState<SavedOutfit[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { user } = await getCurrentProfile();
        if (!user) {
          setError("請先登入才能查看收藏");
          setSaved([]);
          return;
        }

        const data = await fetchSavedOutfits(user.id, null);
        setSaved(data);
      } catch (err: any) {
        console.error("Failed to fetch saved outfits", err);
        setError(err.message ?? "載入失敗，請稍後再試");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b bg-white/70 backdrop-blur-md sticky top-0 z-10">
        <h1 className="text-lg font-semibold">我的收藏</h1>
        <p className="text-xs text-gray-500 mt-1">
          你儲存過的穿搭會出現在這裡
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500 text-sm gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            載入中…
          </div>
        )}

        {!isLoading && error && (
          <div className="text-center text-sm text-red-500 py-10">
            {error}
          </div>
        )}

        {!isLoading && !error && saved.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500 text-sm gap-2">
            <Bookmark className="w-8 h-8 mb-1" />
            還沒有收藏任何穿搭
          </div>
        )}

        {!isLoading && !error && saved.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {saved.map((item) => (
              <div
                key={item.save_id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border flex flex-col"
              >
                <div className="relative aspect-[4/5] bg-gray-100">
                  <img
                    src={item.outfit.main_image_url}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-1 left-1 flex items-center gap-1 text-white text-xs">
                    <Heart className="w-3 h-3" />
                    <span>收藏於 {item.created_at.slice(0, 10)}</span>
                  </div>
                </div>
                <div className="px-2 py-2 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-gray-800 line-clamp-2">
                    {item.outfit.description || "沒有說明文字"}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-[11px] text-gray-500">
                    <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden">
                      {item.outfit.profiles.avatar_url && (
                        <img
                          src={item.outfit.profiles.avatar_url}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <span className="truncate">
                      {item.outfit.profiles.display_name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
