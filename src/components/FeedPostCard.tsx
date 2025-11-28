import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Heart, MessageCircle, MoreHorizontal, Repeat, Upload, ShoppingBag, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProductThumbnail } from './ProductThumbnail';
import { PostDetail } from './PostDetail';
// import { toast } from 'sonner@2.0.3';
import { toast } from 'sonner';
import { getCurrentProfile, toggleLike } from "../lib/db";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

export interface Product {
  id: string;
  name: string;
  price: string;
  brand: string;
  url: string;
  size?: string;
  position: { x: number; y: number };
  imageIndex?: number;
}

export interface Post {
  id: string | number;
  gender?: string;
  type?: 'post' | 'reel'; 
  // Backend fields
  authorId?: string;
  authorName?: string;
  authorAvatar?: string;
  createdAt?: string;
  isLiked?: boolean;
  isSaved?: boolean;
  // Legacy/Mock fields
  user?: { 
    name: string; 
    username: string; 
    avatar: string; 
    height: string; 
    bodyType: string 
  };
  image: string;
  images?: string[];
  caption: string;
  likes: number;
  date?: string;
  products?: Product[];
}

interface FeedPostCardProps {
  post: Post;
  onNavigate: (view: 'profile') => void;
}

export function FeedPostCard({ post, onNavigate }: FeedPostCardProps) {
  const [isLiked, setIsLiked] = useState(!!post.isLiked);
  const [likeCount, setLikeCount] = useState(post.likes ?? 0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data normalization
  const userName = post.authorName || post.user?.username || post.user?.name || 'User';
  const displayName = post.user?.name || userName;
  const userAvatar = post.authorAvatar || post.user?.avatar;
  
  // Images normalization
  const images = post.images && post.images.length > 0 ? post.images : [post.image];

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCurrentSlide(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const optimistic = !isLiked;
    setIsLiked(optimistic);
    setLikeCount((prev) => (optimistic ? prev + 1 : prev - 1));

    if (typeof post.id !== "string") return;

    try {
        const { user } = await getCurrentProfile();
        if (!user) throw new Error("Not logged in");
        const result = await toggleLike(post.id, user.id);
        // 以 DB 結果為準修正一次
        setIsLiked(result.liked);
        setLikeCount((prev) => (result.liked ? prev : Math.max(prev - 1, 0)));
    } catch (err) {
        console.error("Failed to like", err);
        // rollback
        setIsLiked(!optimistic);
        setLikeCount((prev) => (!optimistic ? prev + 1 : Math.max(prev - 1, 0)));
    }
  };

  const handleUserClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onNavigate('profile');
  }

  const isVideo = (url: string) => {
      return post.type === 'reel' || url.match(/\.(mp4|webm|mov)$/i);
  };

  return (
    <>
      <div 
        className="group cursor-pointer block"
        onClick={() => setIsDetailOpen(true)}
      >
         <div className="bg-white rounded-none border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
             
             {/* Header */}
            <div className="flex items-center justify-between p-2">
                 <div 
                    className="flex items-center gap-2"
                    onClick={handleUserClick}
                 >
                     <Avatar className="w-6 h-6">
                         <AvatarImage src={userAvatar} />
                         <AvatarFallback className="text-[10px]">{userName[0]?.toUpperCase()}</AvatarFallback>
                     </Avatar>
                     <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-900 text-xs">{displayName}</span>
                        {((post as any).category || (post as any).theme) && (
                            <>
                                <span className="text-gray-300 text-xs">•</span>
                                <button 
                                    className="text-xs text-gray-500 hover:text-black hover:underline"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const theme = (post as any).category || (post as any).theme;
                                        // Save to session storage to be picked up by ExplorePage
                                        sessionStorage.setItem('explore_initial_search', theme);
                                        // Navigate to explore page
                                        (onNavigate as any)('explore');
                                    }}
                                >
                                    {(post as any).category || (post as any).theme}
                                </button>
                            </>
                        )}
                     </div>
                 </div>
                 <button className="text-gray-500 hover:text-gray-700">
                     <MoreHorizontal className="w-4 h-4" />
                 </button>
             </div>

             {/* Image/Video Content (4:5 Aspect Ratio) */}
             <div className="relative aspect-[4/5] w-full bg-gray-100 group/carousel overflow-hidden">
                 <Carousel className="w-full h-full" opts={{ loop: false }} setApi={setCarouselApi}>
                     <CarouselContent className="h-full ml-0">
                         {images.map((img, index) => (
                             <CarouselItem key={index} className="pl-0 h-full relative">
                                 {isVideo(img) ? (
                                    <video 
                                        src={img} 
                                        className="w-full h-full object-cover" 
                                        autoPlay 
                                        muted 
                                        loop 
                                        playsInline 
                                    />
                                 ) : (
                                    <ImageWithFallback 
                                        src={img} 
                                        className="w-full h-full object-cover"
                                        alt={`${post.caption} - ${index + 1}`}
                                    />
                                 )}

                                 {/* Tags Layer */}
                                 {showTags && post.products?.map((product) => {
                                     const targetIndex = product.imageIndex ?? 0;
                                     if (targetIndex !== index) return null;

                                     return (
                                        product.position && (
                                            <div 
                                                key={product.id}
                                                className="absolute z-10 group/tag"
                                                style={{ top: `${product.position.y}%`, left: `${product.position.x}%` }}
                                            >
                                                {/* Dot (Smaller for Feed: w-6 h-6) */}
                                                <div className="absolute -left-3 -top-3 w-6 h-6 bg-white/90 rounded-full border-2 border-white/30 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform animate-pulse">
                                                    <div className="w-2 h-2 bg-black rounded-full" />
                                                </div>
                                                
                                                {/* Card (Scale down slightly for Feed context: scale-90 origin-top-left) */}
                                                <div 
                                                    className="absolute left-4 top-0 -translate-y-1/2 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 p-3 min-w-[240px] cursor-default transition-all hover:border-gray-300 hover:shadow-md animate-in fade-in slide-in-from-left-2 origin-top-left scale-90"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (product.url) window.open(product.url, '_blank');
                                                    }}
                                                >
                                                    <div className="w-12 h-12 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-sm font-bold text-gray-400 uppercase shrink-0 overflow-hidden">
                                                         <ProductThumbnail 
                                                             product={{
                                                                 link: product.url,
                                                                 brand: product.brand,
                                                                 position: product.position
                                                             }} 
                                                             mainImage={img} 
                                                         />
                                                    </div>
                                                    <div className="flex-1 min-w-0 text-left">
                                                        <p className="text-sm font-bold text-gray-900 truncate">{product.name || '未命名'}</p>
                                                        <p className="text-xs text-gray-500 mt-0.5">{product.brand} • {product.size ? product.size + ' • ' : ''}{product.price}</p>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                         <button 
                                                             className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                                                             onClick={(e) => e.stopPropagation()}
                                                         >
                                                             <ShoppingBag className="w-4 h-4" />
                                                         </button>
                                                         {product.url ? (
                                                             <button 
                                                                 onClick={(e) => {
                                                                     e.stopPropagation();
                                                                     window.open(product.url, '_blank');
                                                                 }}
                                                                 className="p-2 text-gray-300 hover:text-black hover:bg-gray-100 rounded-full transition-colors block"
                                                             >
                                                                 <ExternalLink className="w-4 h-4" />
                                                             </button>
                                                         ) : (
                                                             <div className="p-2 text-gray-300">
                                                                 <ExternalLink className="w-4 h-4" />
                                                             </div>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                     );
                                 })}
                             </CarouselItem>
                         ))}
                     </CarouselContent>
                     
                     {images.length > 1 && (
                        <>
                            <CarouselPrevious className="left-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                            <CarouselNext className="right-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                            <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-[10px] text-white font-medium pointer-events-none z-30">
                                {currentSlide + 1}/{images.length}
                            </div>
                        </>
                     )}
                 </Carousel>

                 {/* Shopping Bag Toggle */}
                 {post.products && post.products.length > 0 && (
                     <div 
                        className={`absolute bottom-3 left-3 p-2 rounded-full transition-all duration-200 z-40 ${showTags ? 'bg-white text-black shadow-md' : 'bg-black/50 backdrop-blur-sm text-white hover:bg-black/70'}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowTags(!showTags);
                        }}
                     >
                         <ShoppingBag className="w-3.5 h-3.5" />
                     </div>
                 )}
             </div>

             {/* Footer Actions */}
             <div className="flex items-center justify-between px-3 py-2 bg-white text-gray-500">
                 <div className="flex items-center gap-1 group/action hover:text-blue-500 transition-colors cursor-pointer">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs font-medium">17</span>
                 </div>
                 
                 <div className="flex items-center gap-1 group/action hover:text-green-500 transition-colors cursor-pointer">
                    <Repeat className="w-4 h-4" />
                    <span className="text-xs font-medium">17</span>
                 </div>

                 <div 
                    className={`flex items-center gap-1 group/action cursor-pointer transition-colors ${isLiked ? 'text-pink-500' : 'hover:text-pink-500'}`}
                    onClick={handleLike}
                 >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-pink-500' : ''}`} />
                    <span className="text-xs font-medium">{likeCount}</span>
                 </div>
                 
                 <div className="flex items-center justify-end group/action hover:text-gray-700 transition-colors cursor-pointer">
                     <Upload className="w-4 h-4" />
                 </div>
             </div>
         </div>
      </div>

      {isDetailOpen && (
        <PostDetail post={post} onClose={() => setIsDetailOpen(false)} />
      )}
    </>
  );
}