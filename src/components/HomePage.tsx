import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Heart, ShoppingBag, MoreHorizontal, Plus, X, SlidersHorizontal, TrendingUp, Pin, LayoutGrid, Grid, List, Shirt, Compass, User, Share2, MessageCircle, Check, ChevronRight, Loader2 } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ExplorePage } from './ExplorePage';
import { ProfilePage } from './ProfilePage';
import { FeedPostCard, Post } from './FeedPostCard';
import { fetchFeedPosts, getCurrentProfile } from "../lib/db";

interface HomePageProps {
  onNavigate: (view: 'profile' | 'saved' | 'ranking') => void;
}

// --- MOCK DATA (Fallback) ---
const MOCK_POSTS: Post[] = [
  {
    id: 'mock-1',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    caption: '今天的OOTD，喜歡這件外套的剪裁！ #winterfashion #ootd',
    likes: 124,
    authorName: 'StyleQueen',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    createdAt: new Date().toISOString(),
    gender: 'female',
    products: [
      { id: 'p1', name: 'Wool Coat', brand: 'Zara', price: '$129', url: '#', position: { x: 50, y: 40 } }
    ]
  },
  {
    id: 'mock-2',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80',
    caption: '週末街頭隨拍，舒適最重要。',
    likes: 89,
    authorName: 'CityWalker',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    gender: 'male',
  },
  {
    id: 'mock-3',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80',
    caption: '大膽嘗試亮色系！',
    likes: 256,
    authorName: 'FashionKilla',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    gender: 'female',
  },
  {
    id: 'mock-4',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    caption: '優雅的午後時光。',
    likes: 112,
    authorName: 'Grace',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
    createdAt: new Date(Date.now() - 200000000).toISOString(),
    gender: 'female',
  }
];

const trendingBrands = [
  { id: 1, name: 'UNIQLO', count: '12.5k' },
  { id: 2, name: 'GU', count: '8.2k' },
  { id: 3, name: 'Nike', count: '6.7k' },
  { id: 4, name: 'Zara', count: '5.3k' },
  { id: 5, name: 'Adidas', count: '4.1k' },
];

const suggestedUsers = [
  { id: 1, username: 'street_style', name: 'Street Style', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop', height: '165cm', style: '街頭' },
  { id: 2, username: 'fashion_week', name: 'Fashion Week', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop', height: '170cm', style: '歐美' },
];

// --- TYPES ---
type ColumnType = 'feed' | 'trending' | 'favorites' | 'explore' | 'profile';
type GenderFilter = 'all' | 'male' | 'female';
type ViewMode = 'grid' | 'list';

interface ColumnDef {
  id: string;
  type: ColumnType;
  title: string;
  filter?: GenderFilter;
  viewMode?: ViewMode;
}

// --- COMPONENTS ---

export function HomePage({ onNavigate }: HomePageProps) {
  const [columns, setColumns] = useState<ColumnDef[]>([
    { id: 'col-1', type: 'feed', title: '為你推薦', filter: 'all', viewMode: 'grid' },
    { id: 'col-2', type: 'trending', title: '熱門趨勢', viewMode: 'list' },
  ]);

  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoadingFeed, setIsLoadingFeed] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoadingFeed(true);
    try {
      // 1) 先拿當前 user，用來決定哪些是我按讚 / 收藏
      const { user } = await getCurrentProfile();

      // 2) 從 outfits / outfit_images / likes / saves 撈 feed
      const feed = await fetchFeedPosts(user?.id ?? null);

      // 3) 把 DB 回來的資料 map 成 FeedPostCard 用的 Post 型別
      const mapped: Post[] = feed.map((p) => ({
        id: p.id,
        image: p.image,
        images: p.images,
        caption: p.caption,
        likes: p.likes,
        authorName: p.authorName,
        authorAvatar: p.authorAvatar ?? '',
        createdAt: p.createdAt,
        // 下面這兩個會給 FeedPostCard 初始化按讚 / 收藏狀態用
        isLiked: p.likedByMe,
        isSaved: p.savedByMe,
        // 性別現在先沒有，用不到可以先不管
      }));

      setPosts(mapped);
    } catch (error) {
      console.error('fetchPosts failed, fallback to MOCK_POSTS', error);
      setPosts(MOCK_POSTS);
    } finally {
      setIsLoadingFeed(false);
    }
  };

  // Quick Add State
  const addColumn = (type: ColumnType, title: string, filter: GenderFilter = 'all') => {
    const newColumn: ColumnDef = {
      id: `col-${Date.now()}`,
      type,
      title,
      filter,
      viewMode: 'grid'
    };
    setColumns([...columns, newColumn]);
  };

  const removeColumn = (id: string) => {
    setColumns(columns.filter(c => c.id !== id));
  };

  const updateColumn = (id: string, updates: Partial<ColumnDef>) => {
    setColumns(columns.map(c => c.id === id ? { ...c, ...updates } : c));
  };

  const isSingleColumn = columns.length === 1;

  return (
    <div className="h-full w-full overflow-x-auto bg-[rgba(131,66,66,0)] p-0 md:p-6 transition-all duration-500">
      <div className={`inline-flex h-full gap-4 md:gap-6 align-top w-full transition-all duration-500 ${isSingleColumn ? 'justify-center' : ''}`}>
        
        {/* Columns */}
        {columns.map((column, index) => (
          <div 
            key={column.id}
            className={`h-full flex-shrink-0 flex-col bg-white/5 border-white/40 overflow-hidden transition-all duration-500 ease-in-out hover:bg-white/10 group/col
              ${index > 0 ? 'hidden md:flex' : 'flex'}
              ${index === 0 ? 'w-full rounded-none border-0 md:rounded-3xl md:border' : 'rounded-3xl border'}
              ${isSingleColumn ? 'md:w-full md:max-w-3xl' : 'md:w-[420px]'}
            `}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/20 bg-white/20 backdrop-blur-md z-10 shrink-0">
              <div className="flex items-center gap-3">
                <h3 className="hidden sm:block font-bold text-slate-800 text-lg tracking-tight">{column.title}</h3>
                {column.type === 'feed' && (
                  <div className="flex items-center gap-1 bg-white/40 rounded-lg p-1 border border-white/30">
                    <button 
                       onClick={() => updateColumn(column.id, { filter: 'all' })}
                       className={`px-2 py-0.5 text-xs rounded-md transition-colors ${column.filter === 'all' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                    >全</button>
                    <button 
                       onClick={() => updateColumn(column.id, { filter: 'male' })}
                       className={`px-2 py-0.5 text-xs rounded-md transition-colors ${column.filter === 'male' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >男</button>
                    <button 
                       onClick={() => updateColumn(column.id, { filter: 'female' })}
                       className={`px-2 py-0.5 text-xs rounded-md transition-colors ${column.filter === 'female' ? 'bg-white shadow-sm text-pink-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >女</button>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover/col:opacity-100 transition-opacity">
                {column.type === 'feed' && (
                   <button 
                     onClick={() => updateColumn(column.id, { viewMode: column.viewMode === 'grid' ? 'list' : 'grid' })}
                     className="p-2 text-slate-500 hover:text-slate-800 hover:bg-white/40 rounded-full transition-colors"
                   >
                     {column.viewMode === 'grid' ? <Grid className="w-4 h-4" /> : <List className="w-4 h-4" />}
                   </button>
                )}
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="p-2 text-slate-500 hover:text-slate-800 hover:bg-white/40 rounded-full transition-colors">
                      <SlidersHorizontal className="w-4 h-4" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 bg-white/80 backdrop-blur-xl border-white/50 p-2">
                    <div className="flex flex-col gap-1">
                       <Button variant="ghost" size="sm" className="justify-start text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => removeColumn(column.id)}>
                         <X className="w-4 h-4 mr-2" /> 移除欄位
                       </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Column Content */}
            <PullToRefresh
              className="flex-1 overflow-y-auto p-0 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onRefresh={fetchPosts}
              enabled={column.type === 'feed'}
            >
              {column.type === 'feed' && (
                <div className="p-0">
                  {isLoadingFeed  && posts.length === 0 ? (
                    <div className="flex justify-center py-10">
                      <Loader2 className="w-6 h-6 animate-spin text-slate-400" />
                    </div>
                  ) : (
                    <FeedColumnContent 
                        posts={posts}
                        filter={column.filter || 'all'} 
                        viewMode={column.viewMode || 'grid'} 
                        onNavigate={onNavigate} 
                        isSingleMode={isSingleColumn}
                    />
                  )}
                </div>
              )}
              {column.type === 'trending' && (
                <div className="p-2">
                  <TrendingColumnContent onNavigate={onNavigate} />
                </div>
              )}
               {column.type === 'favorites' && (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-2 p-4">
                   <Heart className="w-12 h-12 opacity-20" />
                   <p>尚無收藏內容</p>
                   <Button variant="link" className="text-slate-500" onClick={() => onNavigate('saved')}>
                     前往收藏頁面
                   </Button>
                </div>
              )}
              {column.type === 'explore' && (
                <div className="h-full bg-white/30">
                   <ExplorePage className="p-4" />
                </div>
              )}
              {column.type === 'profile' && (
                <div className="h-full bg-white/30">
                   <ProfilePage className="bg-transparent min-h-0" />
                </div>
              )}
            </PullToRefresh>
          </div>
        ))}

        {/* Add Column Button (End of List) */}
        <div className={`hidden md:flex flex-shrink-0 w-[100px] h-full items-center justify-center transition-all duration-500 ${columns.length === 0 ? 'w-full' : ''}`}>
          <Popover>
            <PopoverTrigger asChild>
              <button className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border-2 border-white/50 flex items-center justify-center text-slate-500 hover:scale-110 hover:bg-white/60 hover:text-slate-800 hover:border-white/80 transition-all shadow-lg group">
                <Plus className="w-8 h-8 group-hover:rotate-90 transition-transform" />
              </button>
            </PopoverTrigger>
            <PopoverContent side="right" align="center" className="w-64 bg-white/80 backdrop-blur-xl border-white/50 p-4 shadow-xl rounded-2xl">
              <h4 className="font-semibold text-slate-800 mb-3 px-1">新增欄位</h4>
              <div className="grid gap-2 max-h-[300px] overflow-y-auto scrollbar-hide">
                <Button variant="outline" className="justify-start border-white/50 hover:bg-white/60" onClick={() => addColumn('feed', '為你推薦', 'all')}>
                   <LayoutGrid className="w-4 h-4 mr-2 text-purple-500" /> 為你推薦
                </Button>
                <Button variant="outline" className="justify-start border-white/50 hover:bg-white/60" onClick={() => addColumn('feed', '男性穿搭', 'male')}>
                   <Shirt className="w-4 h-4 mr-2 text-blue-500" /> 男性專區
                </Button>
                <Button variant="outline" className="justify-start border-white/50 hover:bg-white/60" onClick={() => addColumn('feed', '女性穿搭', 'female')}>
                   <Shirt className="w-4 h-4 mr-2 text-pink-500" /> 女性專區
                </Button>
                <Button variant="outline" className="justify-start border-white/50 hover:bg-white/60" onClick={() => addColumn('trending', '熱門趨勢')}>
                   <TrendingUp className="w-4 h-4 mr-2 text-orange-500" /> 熱門榜單
                </Button>
                 <Button variant="outline" className="justify-start border-white/50 hover:bg-white/60" onClick={() => addColumn('explore', '探索靈感')}>
                   <Compass className="w-4 h-4 mr-2 text-green-500" /> 探索靈感
                </Button>
                <Button variant="outline" className="justify-start border-white/50 hover:bg-white/60" onClick={() => addColumn('profile', '個人頁面')}>
                   <User className="w-4 h-4 mr-2 text-slate-700" /> 個人頁面
                </Button>
                 <Button variant="outline" className="justify-start border-white/50 hover:bg-white/60" onClick={() => addColumn('favorites', '我的收藏')}>
                   <Heart className="w-4 h-4 mr-2 text-rose-500" /> 我的收藏
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function PullToRefresh({ 
  children, 
  onRefresh, 
  className,
  enabled = false
}: { 
  children: React.ReactNode; 
  onRefresh?: () => Promise<void>; 
  className?: string;
  enabled?: boolean;
}) {
  const [startY, setStartY] = useState(0);
  const [pullY, setPullY] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) {
      setPullY(0);
      setIsRefreshing(false);
    }
  }, [enabled]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!enabled || isRefreshing) return;
    if (containerRef.current && containerRef.current.scrollTop <= 1) {
      setStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!enabled || !startY || isRefreshing) return;
    const currentY = e.touches[0].clientY;
    const delta = currentY - startY;
    
    if (delta > 0 && containerRef.current && containerRef.current.scrollTop <= 1) {
       const resistance = delta * 0.4;
       const damped = Math.min(resistance, 120);
       setPullY(damped);
    } else {
       setPullY(0);
    }
  };

  const handleTouchEnd = async () => {
    if (!enabled || !startY || isRefreshing) return;
    
    if (pullY > 60) {
      setIsRefreshing(true);
      setPullY(60);
      if (onRefresh) await onRefresh();
      setIsRefreshing(false);
      setPullY(0);
    } else {
      setPullY(0);
    }
    setStartY(0);
  };

  return (
    <div 
      ref={containerRef} 
      className={`${className} ${enabled ? 'overscroll-contain' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {enabled && (
        <div 
          className="absolute top-4 left-0 w-full flex justify-center items-center pointer-events-none z-50"
          style={{ 
              opacity: pullY > 0 || isRefreshing ? 1 : 0,
              transform: `translateY(${pullY > 0 ? pullY / 2 : 0}px)`,
              transition: isRefreshing ? 'all 0.3s' : 'none'
          }}
        >
           <div className="bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg border border-gray-100/50 ring-1 ring-black/5">
             {isRefreshing ? (
               <Loader2 className="w-5 h-5 animate-spin text-slate-800" />
             ) : (
               <TrendingUp 
                 className={`w-5 h-5 transition-colors ${pullY > 60 ? 'text-slate-800' : 'text-slate-400'}`} 
                 style={{ transform: `rotate(${pullY * 2}deg)` }} 
               />
             )}
           </div>
        </div>
      )}
      
      <div style={{ 
          transform: `translateY(${pullY}px)`, 
          transition: isRefreshing ? 'transform 0.3s' : 'transform 0.1s',
          minHeight: '100%'
      }}>
         {children}
      </div>
    </div>
  );
}

function FeedColumnContent({ posts, filter, viewMode, onNavigate, isSingleMode }: { posts: Post[], filter: GenderFilter; viewMode: ViewMode; onNavigate: (view: 'profile' | 'saved' | 'ranking') => void, isSingleMode?: boolean }) {
  const filteredPosts = posts.filter(p => filter === 'all' || p.gender === filter || !p.gender); // Show all if gender undefined

  // If single mode and grid view, use responsive grid. Otherwise single column for narrow container
  // Changed to always force 2 columns for grid view as per user request, with tight gap
  // Modified: Phone now uses 2 columns in grid view
  const gridCols = viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-2' : 'grid-cols-1';

  return (
    <div className={`grid gap-0.5 ${gridCols}`}>
      {filteredPosts.map((post) => (
         <FeedPostCard key={post.id} post={post} onNavigate={onNavigate} />
      ))}
    </div>
  );
}

function TrendingColumnContent({ onNavigate }: { onNavigate: (view: 'profile' | 'saved' | 'ranking') => void }) {
  return (
    <div className="space-y-6 p-2">
       <div className="px-1">
          <Button 
            variant="outline" 
            className="w-full justify-between border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
            onClick={() => onNavigate('ranking')}
          >
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> 查看完整排行榜</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
       </div>

       {/* Suggested Users */}
       <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">推薦達人</h4>
          {suggestedUsers.map(user => (
             <TrendingUserItem key={user.id} user={user} />
          ))}
       </div>

       {/* Trending Brands */}
       <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">熱門品牌</h4>
          {trendingBrands.map((brand, i) => (
             <div key={brand.id} className="flex items-center justify-between p-3 rounded-xl bg-white/40 border border-white/30 group cursor-pointer hover:bg-white/60 transition-colors active:scale-95">
                <div className="flex items-center gap-3">
                   <span className={`flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold ${i < 3 ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-500'}`}>
                     {i + 1}
                   </span>
                   <span className="font-medium text-slate-700">{brand.name}</span>
                </div>
                <span className="text-xs text-slate-400">{brand.count}</span>
             </div>
          ))}
       </div>
    </div>
  );
}

function TrendingUserItem({ user }: { user: typeof suggestedUsers[0] }) {
  const [isFollowed, setIsFollowed] = useState(false);
  
  return (
     <div className="flex items-center gap-3 p-2 rounded-xl bg-white/40 border border-white/30 hover:bg-white/60 transition-colors">
        <Avatar className="w-10 h-10 border border-white">
           <AvatarImage src={user.avatar} />
           <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
           <div className="font-bold text-sm text-slate-700 truncate">{user.username}</div>
           <div className="text-xs text-slate-500">{user.style} • {user.height}</div>
        </div>
        <Button 
           size="sm" 
           variant={isFollowed ? "secondary" : "ghost"}
           className={`h-8 w-8 p-0 rounded-full transition-all ${isFollowed ? 'bg-slate-800 text-white hover:bg-slate-700' : 'hover:bg-slate-200'}`}
           onClick={() => setIsFollowed(!isFollowed)}
        >
           {isFollowed ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4 text-slate-600" />}
        </Button>
     </div>
  );
}
