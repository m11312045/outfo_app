import { useEffect, useState } from "react";
import { Bell, Heart, Loader2 } from "lucide-react";
import {
  getCurrentProfile,
  fetchUserOutfits,
} from "../lib/db";

type MyOutfit = {
  id: string;
  user_id: string;
  main_image_url: string;
  description: string | null;
  created_at: string;
  author: {
    id: string;
    display_name: string;
    avatar_url: string | null;
    username: string | null;
  };
  likesCount: number;
};

export function NotificationsPage() {
  const [items, setItems] = useState<MyOutfit[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { user } = await getCurrentProfile();
        if (!user) {
          setError("請先登入才能查看通知");
          setItems([]);
          return;
        }

        const data = (await fetchUserOutfits(user.id)) as MyOutfit[];
        setItems(data);
      } catch (err: any) {
        console.error("Failed to fetch notification outfits", err);
        setError(err.message ?? "載入失敗，請稍後再試");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b bg-white/70 backdrop-blur-md sticky top-0 z-10 flex items-center gap-2">
        <Bell className="w-5 h-5" />
        <div>
          <h1 className="text-lg font-semibold">動態通知</h1>
          <p className="text-xs text-gray-500">
            目前先顯示「你的貼文被按讚的狀況」
          </p>
        </div>
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

        {!isLoading && !error && items.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500 text-sm gap-2">
            <Bell className="w-8 h-8 mb-1" />
            目前還沒有任何通知，
            <br />
            發佈一篇穿搭後就能在這裡看到讚數囉！
          </div>
        )}

        {!isLoading && !error && items.length > 0 && (
          <div className="space-y-3">
            {items.map((o) => (
              <div
                key={o.id}
                className="flex items-center gap-3 bg-white rounded-xl border shadow-sm px-3 py-2"
              >
                <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={o.main_image_url}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden">
                        {o.author.avatar_url && (
                          <img
                            src={o.author.avatar_url}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <span className="text-sm font-semibold">
                        {o.author.display_name}
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-400">
                      {o.created_at.slice(0, 10)}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-gray-700 line-clamp-2">
                    {o.description || "沒有說明文字"}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                    <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                    <span>
                      目前共有{" "}
                      <span className="font-semibold">{o.likesCount}</span>{" "}
                      個讚
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
