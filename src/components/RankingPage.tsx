import { useState, useEffect } from 'react';
import { FeedPostCard, Post } from './FeedPostCard';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Loader2, TrendingUp, Trophy, Flame } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface RankingPageProps {
  onNavigate: (view: 'profile') => void;
}

export function RankingPage({ onNavigate }: RankingPageProps) {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      gender: 'female',
      user: { name: '小美', username: 'xiaomei_daily', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop', height: '158cm', bodyType: '梨形身材' },
      image: 'https://images.unsplash.com/photo-1763256433081-b7bc58a71f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWxsJTIwYm9keSUyMGZhc2hpb24lMjB3b21hbiUyMHN0cmVldCUyMHN0eWxlJTIwc3RhbmRpbmd8ZW58MXx8fHwxNzYzNzg1MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: '今天的街頭休閒風 🌟',
      likes: 234,
      date: '2h',
      products: [
        { id: 'p1', name: '質感西裝外套', brand: 'Zara', price: 'NT$2,490', url: '#', position: { x: 50, y: 40 } },
        { id: 'p2', name: '高腰寬褲', brand: 'GU', price: 'NT$790', url: '#', position: { x: 55, y: 80 } }
      ],
    },
    {
      id: 2,
      gender: 'male',
      user: { name: 'Kevin', username: 'kevin_style', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop', height: '178cm', bodyType: '健壯' },
      image: 'https://images.unsplash.com/photo-1759423491599-4e417fc46cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWxsJTIwYm9keSUyMGZhc2hpb24lMjBtYW4lMjBzdHJlZXQlMjBzdHlsZSUyMHN0YW5kaW5nfGVufDF8fHx8MTc2Mzc4NTMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: '極簡風格穿搭分享 ✨',
      likes: 456,
      date: '5h',
      products: [
        { id: 'p3', name: '寬版T恤', brand: 'Uniqlo', price: 'NT$590', url: '#', position: { x: 48, y: 45 } },
        { id: 'p4', name: '工裝褲', brand: 'Carhartt', price: 'NT$3,280', url: '#', position: { x: 52, y: 75 } }
      ],
    },
    {
      id: 3,
      gender: 'female',
      user: { name: 'Style Queen', username: 'style_queen', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop', height: '170cm', bodyType: '沙漏型' },
      image: 'https://images.unsplash.com/photo-1762343291711-9e79473ae91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0YW5kaW5nJTIwZnVsbCUyMGJvZHklMjBvdXRmaXQlMjBjYXN1YWx8ZW58MXx8fHwxNzYzNzg1MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: '舒適的週末穿搭 🍂',
      likes: 389,
      date: '1d',
    },
    {
      id: 4,
      gender: 'male',
      user: { name: 'Jason', username: 'jason_ootd', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop', height: '182cm', bodyType: '高瘦' },
      image: 'https://images.unsplash.com/photo-1692288860056-e4b2ce33c621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdGFuZGluZyUyMGZ1bGwlMjBib2R5JTIwb3V0Zml0JTIwY2l0eXxlbnwxfHx8fDE3NjM3ODUzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'City Boy Look 🏙️',
      likes: 512,
      date: '2d',
    },
    {
      id: 5,
      gender: 'female',
      user: { name: 'Alice', username: 'alice_wonder', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop', height: '162cm', bodyType: 'H型' },
      image: 'https://images.unsplash.com/photo-1762342013658-00f0cc8178a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0YW5kaW5nJTIwZnVsbCUyMGJvZHklMjBkcmVzcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzYzNzg1MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: '優雅的都會風格 💫',
      likes: 521,
      date: '3d',
    },
    {
      id: 6,
      gender: 'female',
      user: { name: '小美', username: 'xiaomei_daily', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop', height: '158cm', bodyType: '梨形身材' },
      image: 'https://images.unsplash.com/photo-1709614268006-96be7984bf05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0YW5kaW5nJTIwZnVsbCUyMGJvZHklMjB3aW50ZXIlMjBjb2F0JTIwb3V0Zml0fGVufDF8fHx8MTc2Mzc4NTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: '秋冬穿搭靈感 🍁',
      likes: 356,
      date: '4d',
    },
  ].sort((a, b) => (b.likes || 0) - (a.likes || 0)));
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     try {
  //       const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-8838b4e7/posts`, {
  //          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
  //       });
  //       const data = await res.json();
  //       if (data.posts) {
  //          // Sort by likes descending
  //          const sorted = data.posts.sort((a: Post, b: Post) => (b.likes || 0) - (a.likes || 0));
  //          setPosts(sorted);
  //       }
  //     } catch (e) {
  //       console.error("Failed to fetch posts for ranking", e);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchPosts();
  // }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>
    );
  }

  return (
    <div className="h-full bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-6 pb-2 flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow-400/20 rounded-xl flex items-center justify-center text-yellow-600">
            <Trophy className="w-6 h-6" />
        </div>
        <div>
             <h1 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
                熱門排行榜 <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
             </h1>
             <p className="text-slate-500 text-sm">最受歡迎的穿搭趨勢</p>
        </div>
      </div>

      <ScrollArea className="flex-1 px-6 pb-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {posts.map((post, index) => {
               // Rank Badge Logic
               let badgeColor = "bg-slate-200 text-slate-600";
               let badgeIcon = null;
               if (index === 0) {
                  badgeColor = "bg-yellow-400 text-yellow-900 shadow-yellow-200";
                  badgeIcon = <Trophy className="w-3 h-3 mr-1" />;
               } else if (index === 1) {
                  badgeColor = "bg-slate-300 text-slate-800 shadow-slate-300";
               } else if (index === 2) {
                  badgeColor = "bg-amber-600 text-amber-100 shadow-amber-200";
               }

               return (
                 <div key={post.id} className="relative group">
                    {/* Rank Badge */}
                    <div className={`absolute -top-3 -left-3 z-20 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white ${badgeColor}`}>
                        {index < 3 && badgeIcon}
                        {index + 1}
                    </div>
                    
                    {/* Post Card */}
                    <div className="transform transition-transform duration-300 hover:scale-[1.02]">
                        <FeedPostCard post={post} onNavigate={onNavigate} />
                    </div>
                 </div>
               );
            })}
         </div>

         {posts.length === 0 && (
             <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                 <TrendingUp className="w-12 h-12 mb-4 opacity-20" />
                 <p>目前沒有熱門貼文</p>
             </div>
         )}
      </ScrollArea>
    </div>
  );
}