import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProductThumbnail } from './ProductThumbnail';
import { X, Heart, MessageCircle, Share2, Bookmark, ExternalLink, Repeat, Upload, Send, Plus, Check, Loader2, ShoppingBag, MoreHorizontal, Trash2, Edit, CornerUpLeft } from 'lucide-react';
import exampleImage from 'figma:asset/126bb68789bb56bc4805f177290e44d33cb2f490.png';
import { supabase } from "../lib/supabase";
import { toast } from 'sonner';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Textarea } from "./ui/textarea";

interface Product {
  id: string;
  brand: string;
  name: string;
  price: string;
  image?: string;
  size?: string;
  position?: { x: number; y: number };
  link?: string;
}

interface PostDetailProps {
  post?: any;
  onClose: () => void;
}

const products: Product[] = [
  { id: '1', brand: 'Zara', name: '質感西裝外套', price: 'NT$2,490', position: { x: 45, y: 35 }, link: 'https://www.zara.com/tw/' },
  { id: '2', brand: 'GU', name: '高腰寬褲', price: 'NT$790', position: { x: 55, y: 65 }, link: 'https://www.gu-global.com/tw/' },
];

const comments = [
  { user: 'alice_style', text: '這套好好看！😍😍' },
  { user: 'jason_wang', text: '褲子版型感覺很顯瘦' },
  { user: 'daily_ootd', text: '請問外套是什麼尺寸？' },
  { user: 'fashion_k', text: '求連結！' },
  { user: 'nina_chen', text: '鞋子好搭' },
];

export function PostDetail({ post, onClose }: PostDetailProps) {
  const [isLiked, setIsLiked] = useState(post?.isLiked || false);
  const [likeCount, setLikeCount] = useState(post?.likes || 1234);
  const [isSaved, setIsSaved] = useState(post?.isSaved || false);
  const [savedFolder, setSavedFolder] = useState(post?.collection || null); // Track which folder it is in
  const [isReposted, setIsReposted] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [commentsList, setCommentsList] = useState(comments);

  // Edit/Delete state
  const [isEditing, setIsEditing] = useState(false);
  const [displayCaption, setDisplayCaption] = useState(post?.caption || "今天的街頭機能風穿搭分享 🧥✨\n這次搭配了多層次的穿法，適合台北多變的天氣。\n外套是 Zara 的新品，質感很好！\n#OOTD #Streetwear #CityBoy #Taipei");
  const [editCaption, setEditCaption] = useState(displayCaption);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  
  // Folder management
  const [folders, setFolders] = useState<string[]>(['All Posts']);
  const [loadingFolders, setLoadingFolders] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [isSaveMenuOpen, setIsSaveMenuOpen] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const mainImage = post?.image || exampleImage;
  const images = post?.images && post.images.length > 0 ? post.images : [mainImage];

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCurrentSlide(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const authorName = post?.authorName || post?.user?.name || "Alan Chen";
  const authorAvatar = post?.authorAvatar || post?.user?.avatar || "https://images.unsplash.com/photo-1745240261519-0b988d54d098?w=100&h=100&fit=crop";
  const postProducts = post?.products && post.products.length > 0 ? post.products : products;

  useEffect(() => {
      supabase.auth.getUser().then(({ data: { user } }) => {
        if (user) setCurrentUserId(user.id);
      });
  }, []);

  const handleEditPost = async () => {
      if (!editCaption.trim()) return;
      try {
          if (post?.id) {
              await api.put(`/posts/${post.id}`, { caption: editCaption });
              toast.success("Post updated");
              setDisplayCaption(editCaption);
              setIsEditing(false);
          } else {
             setDisplayCaption(editCaption);
             setIsEditing(false);
          }
      } catch (e) {
          toast.error("Failed to update post");
      }
  };

  const handleDeletePost = async () => {
      try {
          setIsDeleting(true);
          if (post?.id) {
              await api.delete(`/posts/${post.id}`);
              toast.success("Post deleted");
              onClose();
          }
      } catch (e) {
          toast.error("Failed to delete post");
      } finally {
          setIsDeleting(false);
      }
  };

  useEffect(() => {
    if (isSaveMenuOpen) {
        fetchFolders();
    }
  }, [isSaveMenuOpen]);
  
  // Check initial saved status if possible
  useEffect(() => {
    if (post?.id) {
      // Ideally we check if it's saved and to which folder
      // For now we rely on passed props or default
    }
  }, [post]);

  const fetchFolders = async () => {
    try {
        setLoadingFolders(true);
        const data = await api.get('/users/me/folders');
        if (Array.isArray(data)) {
            setFolders(['All Posts', ...data]);
        }
    } catch (error) {
        console.error('Failed to fetch folders');
    } finally {
        setLoadingFolders(false);
    }
  };

  const handleLike = async () => {
    const newValue = !isLiked;
    setIsLiked(newValue);
    setLikeCount(prev => newValue ? prev + 1 : prev - 1);
    
    if (post?.id) {
        try {
            await api.post(`/posts/${post.id}/like`, {});
        } catch (error) {
            setIsLiked(!newValue);
            setLikeCount(prev => !newValue ? prev + 1 : prev - 1);
            toast.error("Failed to update like");
        }
    }
  };

  const handleSaveToFolder = async (folderName: string) => {
    setIsSaved(true);
    setSavedFolder(folderName);
    setIsSaveMenuOpen(false);
    toast.success(`Saved to ${folderName}`);
    
    if (post?.id) {
        try {
            await api.post(`/posts/${post.id}/save`, { folder: folderName });
        } catch (error) {
            toast.error("Failed to save");
            // Revert UI if needed, but optimistic UI usually assumes success
        }
    }
  };

  const handleSaveProduct = async (product: Product) => {
      toast.success(`${product.name} saved to Wishlist`);
      
      if (post?.id) {
          try {
              await api.post(`/posts/${post.id}/save`, { folder: '待購清單', product });
          } catch (error) {
              toast.error("Failed to save product");
          }
      }
  };

  const handleRemoveSave = async () => {
      setIsSaved(false);
      setSavedFolder(null);
      setIsSaveMenuOpen(false);
      toast.success("Removed from collection");

      if (post?.id) {
          try {
              await api.delete(`/posts/${post.id}/save`);
          } catch (error) {
              toast.error("Failed to remove");
              setIsSaved(true);
          }
      }
  }

  const handleCreateFolder = async () => {
    if (!newFolderName.trim()) return;
    
    try {
      setIsCreatingFolder(true);
      const updatedFolders = await api.post('/users/me/folders', { name: newFolderName });
      if (Array.isArray(updatedFolders)) {
         setFolders(['All Posts', ...updatedFolders]);
         // Automatically save to new folder
         await handleSaveToFolder(newFolderName);
         setNewFolderName('');
      }
    } catch (error) {
      toast.error('Failed to create folder');
    } finally {
      setIsCreatingFolder(false);
    }
  };

  const handleRepost = async () => {
    const newValue = !isReposted;
    setIsReposted(newValue);
    toast.success(newValue ? "Reposted to your feed" : "Undo repost");

    if (post?.id) {
         try {
            await api.post(`/posts/${post.id}/repost`, {});
        } catch (error) {
            setIsReposted(!newValue);
        }
    }
  }

  const handleComment = async () => {
    if (!commentText.trim()) return;
    
    const newComment = {
        user: 'You', // In a real app, use current user info
        text: commentText,
        avatar: "https://images.unsplash.com/photo-1745240261519-0b988d54d098?w=100&h=100&fit=crop"
    };

    setCommentsList([...commentsList, newComment]);
    setCommentText('');
    
    if (post?.id) {
        try {
            await api.post(`/posts/${post.id}/comments`, { text: commentText });
        } catch (error) {
            toast.error("Failed to post comment");
        }
    }
  };
  
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-0 md:p-6 animate-in fade-in duration-200">
      {/* Mobile Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white md:hidden"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="bg-black w-full max-w-5xl h-full md:h-[95vh] md:max-h-[950px] md:rounded-[20px] shadow-2xl overflow-y-auto md:overflow-hidden block md:flex md:flex-row relative border border-white/10">
        
        {/* LEFT: Image Section (Full Body / Contained) */}
        <div className="w-full md:w-[55%] bg-black sticky top-0 z-0 md:relative flex items-center justify-center h-[55vh] md:h-full group overflow-hidden">
          
          {/* Blurred Background for ambience - Dynamic based on current slide */}
          <div className="absolute inset-0 opacity-50 blur-[100px] scale-150 transition-all duration-500">
             <ImageWithFallback src={images[currentSlide]} className="w-full h-full object-cover" />
          </div>
          
          {/* Carousel */}
          <Carousel className="w-full h-full" opts={{ loop: false }} setApi={setCarouselApi}>
             <CarouselContent className="h-full ml-0">
                 {images.map((img: string, index: number) => (
                     <CarouselItem key={index} className="pl-0 h-full relative flex items-center justify-center">
                         {/* Main Image - Object Contain */}
                         <ImageWithFallback 
                            src={img} 
                            alt={`Post Detail - ${index + 1}`} 
                            className="relative w-full h-full object-cover z-10"
                         />

                         {/* Interactive Tags for this image */}
                         {postProducts.map((product: any) => {
                             // If product has no imageIndex, assume it belongs to first image (index 0)
                             const targetIndex = product.imageIndex ?? 0;
                             if (targetIndex !== index) return null;

                             return (
                                product.position && (
                                  <div 
                                    key={product.id}
                                    className="absolute z-20 group/tag"
                                    style={{ top: `${product.position.y}%`, left: `${product.position.x}%` }}
                                  >
                                     {/* Dot */}
                                     <div className="absolute -left-4 -top-4 w-8 h-8 bg-white/90 rounded-full border-4 border-white/30 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform animate-pulse">
                                        <div className="w-3 h-3 bg-black rounded-full" />
                                     </div>
                                     
                                     {/* Card */}
                                     <div 
                                         className="absolute left-4 top-0 -translate-y-1/2 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5 p-2 max-w-[200px] md:max-w-[240px] cursor-pointer transition-all hover:border-gray-300 hover:shadow-md animate-in fade-in slide-in-from-left-2"
                                         onClick={(e) => {
                                             e.stopPropagation();
                                             if (product.link) window.open(product.link, '_blank');
                                         }}
                                     >
                                         <div className="w-9 h-9 bg-white rounded-lg border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-400 uppercase shrink-0 overflow-hidden">
                                              <ProductThumbnail 
                                                  product={{
                                                      link: product.link,
                                                      brand: product.brand,
                                                      position: product.position
                                                  }} 
                                                  mainImage={img} 
                                              />
                                         </div>
                                         <div className="flex-1 min-w-0 text-left">
                                             <p className="text-xs font-bold text-gray-900 truncate">{product.name || '未命名'}</p>
                                             <p className="text-[10px] text-gray-500 leading-tight">{product.brand} • {product.price}</p>
                                         </div>
                                         <div className="flex items-center gap-0.5">
                                              <button 
                                                  className="p-1.5 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                                                  onClick={(e) => e.stopPropagation()}
                                              >
                                                  <ShoppingBag className="w-3 h-3" />
                                              </button>
                                              {product.link ? (
                                                  <button 
                                                      onClick={(e) => {
                                                          e.stopPropagation();
                                                          window.open(product.link, '_blank');
                                                      }}
                                                      className="p-1.5 text-gray-300 hover:text-black hover:bg-gray-100 rounded-full transition-colors block"
                                                  >
                                                      <ExternalLink className="w-3 h-3" />
                                                  </button>
                                              ) : (
                                                  <div className="p-1.5 text-gray-300">
                                                      <ExternalLink className="w-3 h-3" />
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
                    <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-md z-30" />
                    <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-md z-30" />
                    
                    {/* Page Indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white font-medium pointer-events-none z-30">
                        {currentSlide + 1}/{images.length}
                    </div>
                </>
             )}
          </Carousel>
        </div>

        {/* RIGHT: Sidebar (User Info + Content + Shop) */}
        <div className="w-full md:w-[45%] bg-white relative z-10 block md:flex md:flex-col min-h-[45vh] md:h-full border-l border-gray-100 md:overflow-hidden">
          
          {/* 1. Header: User Profile Card (Fixed Top) */}
          <div className="p-4 md:p-5 border-b border-gray-100 flex items-center justify-between bg-white md:sticky md:top-0 z-30">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 p-0.5 cursor-pointer hover:ring-2 ring-gray-200 transition-all">
                   <ImageWithFallback src={authorAvatar} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-gray-900 cursor-pointer hover:text-gray-600">{authorName}</h4>
                        {((post as any).category || (post as any).theme) && (
                            <>
                                <span className="text-gray-300 text-xs">•</span>
                                <button 
                                    className="text-xs text-gray-500 hover:text-black hover:underline"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const theme = (post as any).category || (post as any).theme;
                                        sessionStorage.setItem('explore_initial_search', theme);
                                        onClose();
                                        window.dispatchEvent(new CustomEvent('navigate-to-explore'));
                                    }}
                                >
                                    {(post as any).category || (post as any).theme}
                                </button>
                            </>
                        )}
                    </div>
                    <p className="text-xs text-gray-500">Taipei • 178cm</p>
                </div>
             </div>
             <div className="flex items-center gap-3">
                 {currentUserId && post?.authorId === currentUserId && (
                   <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                          <DropdownMenuItem onClick={() => setIsEditing(true)}>
                            <Edit className="w-4 h-4 mr-2" />
                            編輯貼文
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setShowDeleteDialog(true)} className="text-red-600 focus:text-red-600 focus:bg-red-50">
                            <Trash2 className="w-4 h-4 mr-2" />
                            刪除貼文
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                   </DropdownMenu>
                 )}

                 <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-900 rounded-full transition-colors hidden md:block">
                    <X className="w-5 h-5" />
                 </button>
             </div>
          </div>

          {/* 2. Scrollable Body */}
          <div className="md:flex-1 md:overflow-y-auto scrollbar-hide">
            
            {/* Caption */}
            <div className="p-5 pb-3">
               {isEditing ? (
                   <div className="space-y-2">
                       <Textarea 
                           value={editCaption}
                           onChange={(e) => setEditCaption(e.target.value)}
                           className="min-h-[100px] text-sm"
                       />
                       <div className="flex justify-end gap-2">
                           <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>Cancel</Button>
                           <Button size="sm" onClick={handleEditPost}>Save</Button>
                       </div>
                   </div>
               ) : (
                   <>
                       <div className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                          <span className="font-bold mr-2 text-black">{authorName}</span>
                          {displayCaption}
                       </div>
                       <p className="text-[10px] text-gray-400 mt-3 uppercase font-medium tracking-wide">2 days ago</p>
                   </>
               )}
            </div>

            {/* Shop The Look Section */}
            <div className="px-5 py-2">
               <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-black text-gray-900 flex items-center gap-2 border-l-2 border-black pl-2 h-3 leading-none">
                     SHOP THE LOOK
                  </h3>
                  <span className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded text-gray-500">
                     {postProducts.length} ITEMS
                  </span>
               </div>
               
               <div className="space-y-3">
                  {postProducts.map((product: any) => (
                    <div 
                        key={product.id} 
                        className="group flex items-center gap-4 p-3 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer bg-white"
                        onClick={() => {
                            if (product.link) {
                                window.open(product.link, '_blank');
                            }
                        }}
                    >
                        <div className="w-12 h-12 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-sm font-bold text-gray-400 uppercase shrink-0 overflow-hidden">
                            {/* Try to show product image if available, else show link favicon, else brand initials */}
                             <ProductThumbnail product={product} mainImage={mainImage} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-gray-900 truncate">{product.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{product.brand} • {product.size ? product.size + ' • ' : ''}{product.price}</p>
                        </div>
                        <div className="flex items-center gap-1">
                             <button 
                                 onClick={(e) => {
                                     e.stopPropagation();
                                     handleSaveProduct(product);
                                 }}
                                 className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                                 title="加入待購清單"
                             >
                                 <ShoppingBag className="w-4 h-4" />
                             </button>
                             {product.link ? (
                                 <button 
                                     onClick={(e) => {
                                         e.stopPropagation();
                                         window.open(product.link, '_blank');
                                     }}
                                     className="p-2 text-gray-300 hover:text-black hover:bg-gray-100 rounded-full transition-colors block"
                                     title="前往購買"
                                 >
                                     <ExternalLink className="w-4 h-4" />
                                 </button>
                             ) : (
                                 <div className="p-2 text-gray-300 group-hover:text-black transition-colors">
                                     <ExternalLink className="w-4 h-4" />
                                 </div>
                             )}
                        </div>
                    </div>
                  ))}
               </div>
            </div>

             {/* Divider */}
             <div className="h-[1px] bg-gray-50 mx-5 my-4" />

             {/* Comments Header */}
             <div className="px-5 mb-2 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-black" />
                <span className="text-xs font-bold text-black">Comments</span>
             </div>

             {/* Comments List */}
             <div className="px-5 pb-6 space-y-4">
               {commentsList.map((comment, i) => (
                  <div key={i} className="flex gap-3 text-sm group">
                      <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden shrink-0">
                         <ImageWithFallback src={comment.avatar || `https://i.pravatar.cc/150?u=${i + 10}`} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                          <div className="flex items-baseline">
                             <span className="font-bold text-xs text-gray-900 mr-2">{comment.user}</span>
                             <span className="text-xs text-gray-500 font-light">Just now</span>
                          </div>
                          <p className="text-gray-700 text-[13px] mt-0.5">{comment.text}</p>
                          <button className="text-[10px] text-gray-400 font-medium mt-1 hover:text-gray-600">Reply</button>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-all self-start">
                         <Heart className="w-3 h-3" />
                      </button>
                  </div>
               ))}
             </div>

          </div>

          {/* 3. Footer: Actions & Input (Fixed Bottom) */}
          <div className="p-4 border-t border-gray-100 bg-white mt-auto shadow-[0_-5px_15px_rgba(0,0,0,0.02)] z-30">
             <div className="flex items-center justify-between mb-4 px-2">
                 <button className="group" onClick={() => document.getElementById('comment-input')?.focus()}>
                     <MessageCircle className="w-6 h-6 text-gray-900 group-hover:scale-110 transition-transform" />
                 </button>
                 <button className="group" onClick={handleRepost}>
                     <Repeat className={`w-6 h-6 transition-transform group-hover:scale-110 ${isReposted ? 'text-green-500' : 'text-gray-900'}`} />
                 </button>
                 <button className="group" onClick={handleLike}>
                     <Heart className={`w-6 h-6 transition-transform group-hover:scale-110 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-900'}`} />
                 </button>
                 
                 {/* Save Button Popover */}
                 <Popover open={isSaveMenuOpen} onOpenChange={setIsSaveMenuOpen}>
                    <PopoverTrigger asChild>
                        <button className="group">
                            <Bookmark className={`w-6 h-6 transition-transform group-hover:scale-110 ${isSaved ? 'fill-black text-black' : 'text-gray-900'}`} />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent side="top" align="center" className="w-72 p-0 rounded-xl overflow-hidden shadow-xl border-gray-200">
                        <div className="bg-white flex flex-col max-h-[300px]">
                            <div className="p-3 border-b border-gray-100 font-semibold text-center text-sm text-gray-900">
                                儲存至...
                            </div>
                            
                            <ScrollArea className="flex-1 overflow-y-auto">
                                <div className="py-1">
                                    {loadingFolders ? (
                                        <div className="flex items-center justify-center py-4">
                                            <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                                        </div>
                                    ) : (
                                        folders.map(folder => (
                                            <button
                                                key={folder}
                                                onClick={() => handleSaveToFolder(folder)}
                                                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between group transition-colors"
                                            >
                                                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{folder}</span>
                                                {isSaved && savedFolder === folder && (
                                                    <Check className="w-4 h-4 text-black" />
                                                )}
                                            </button>
                                        ))
                                    )}
                                </div>
                            </ScrollArea>

                            {/* Create New Folder Input */}
                            <div className="p-3 border-t border-gray-100 bg-gray-50">
                                <div className="flex gap-2">
                                    <Input 
                                        placeholder="建立新資料夾..." 
                                        className="h-8 text-xs bg-white"
                                        value={newFolderName}
                                        onChange={(e) => setNewFolderName(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleCreateFolder()}
                                    />
                                    <Button 
                                        size="sm" 
                                        className="h-8 px-2 bg-black text-white hover:bg-gray-800"
                                        disabled={!newFolderName.trim() || isCreatingFolder}
                                        onClick={handleCreateFolder}
                                    >
                                        {isCreatingFolder ? <Loader2 className="w-3 h-3 animate-spin" /> : <Plus className="w-4 h-4" />}
                                    </Button>
                                </div>
                            </div>
                            
                            {isSaved && (
                                <button 
                                    onClick={handleRemoveSave}
                                    className="w-full p-3 text-center text-xs font-semibold text-red-500 hover:bg-red-50 transition-colors border-t border-gray-100"
                                >
                                    從收藏中移除
                                </button>
                            )}
                        </div>
                    </PopoverContent>
                 </Popover>

                 <button className="group">
                     <Upload className="w-6 h-6 text-gray-900 group-hover:scale-110 transition-transform" />
                 </button>
             </div>
             
             <div className="font-bold text-sm text-gray-900 mb-4 pl-1">
                 {likeCount.toLocaleString()} likes
             </div>

             {/* Comment Input */}
             <div className="flex gap-3 items-center pl-1">
                 <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 shrink-0 ring-1 ring-gray-100">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1745240261519-0b988d54d098?w=100&h=100&fit=crop" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 bg-gray-50 rounded-full px-4 py-2 flex items-center focus-within:ring-1 focus-within:ring-gray-200 transition-all">
                    <input 
                        id="comment-input"
                        type="text" 
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleComment()}
                        placeholder="Add a comment..." 
                        className="flex-1 bg-transparent text-sm border-none focus:ring-0 p-0 placeholder:text-gray-400 focus:outline-none"
                    />
                    <button 
                        onClick={handleComment}
                        disabled={!commentText.trim()}
                        className="text-[#0095F6] font-semibold text-xs hover:text-[#00376B] transition-colors ml-2 disabled:opacity-50"
                    >
                        Post
                    </button>
                 </div>
             </div>
          </div>

        </div>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>確定要刪除這篇貼文嗎？</AlertDialogTitle>
            <AlertDialogDescription>
              此動作無法復原。這將永久刪除您的貼文及所有相關資料。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeletePost} className="bg-red-600 hover:bg-red-700">
              {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : "確認刪除"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>,
    document.body
  );
}