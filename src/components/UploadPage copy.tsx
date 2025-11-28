import { Slider } from './ui/slider';
import Cropper, { Area } from 'react-easy-crop';
import { useState, useCallback, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Badge } from './ui/badge';
import { 
  Upload, X, Tag, Calendar as CalendarIcon, Sparkles, MapPin, 
  ChevronLeft, ChevronRight, MoreHorizontal, Smile, ChevronDown,
  Image as ImageIcon, Film, ShoppingBag, ExternalLink
} from 'lucide-react';
import { ProductThumbnail } from './ProductThumbnail';
import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import { api } from '../utils/api';
import { supabase } from "../lib/supabase";
import { getCurrentProfile } from "../lib/db";
import { toast } from 'sonner';
import { ScrollArea } from './ui/scroll-area';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface UploadPageProps {
  onNavigate: (view: 'home' | 'profile') => void;
}

const weatherOptions = ['晴天', '多雲', '陰天', '雨天', '雪天'];
const categoryOptions = ['街頭風', '休閒風', '優雅風', '運動風', '韓系', '日系', '簡約風', '復古風'];

interface TagPoint {
  id: number;
  x: number;
  y: number;
  imageIndex: number;
  name: string;
  brand: string;
  price: string;
  link: string;
  size: string;
}

// Canvas Utils
const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') 
    image.src = url
  })

async function getCroppedImg(imageSrc: string, pixelCrop: Area): Promise<string> {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return ''

  // 4:5 High Res
  canvas.width = 1080;
  canvas.height = 1350;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    canvas.width,
    canvas.height
  )

  return canvas.toDataURL('image/jpeg', 0.95)
}

type UploadStep = 'select' | 'crop' | 'share' | 'tagging';
type PostType = 'post' | 'reel';

export function UploadPage({ onNavigate }: UploadPageProps) {
  const [step, setStep] = useState<UploadStep>('select');
  const [postType, setPostType] = useState<PostType>('post');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Crop State
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppingQueue, setCroppingQueue] = useState<string[]>([]);
  const [processedImages, setProcessedImages] = useState<string[]>([]);

  // Post Data
  const [caption, setCaption] = useState('');
  const [date, setDate] = useState<Date>(new Date());
  const [weather, setWeather] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  
  // Tagging
  const [tagPoints, setTagPoints] = useState<TagPoint[]>([]);
  const [nextTagId, setNextTagId] = useState(1);
  const [selectedTagId, setSelectedTagId] = useState<number | null>(null);

  const [isPublishing, setIsPublishing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handlers
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFiles(files);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          processFiles(e.dataTransfer.files);
      }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
  };

  const processFiles = async (files: FileList) => {
      const fileReaders = Array.from(files).map(file => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      });
      
      try {
        const contents = await Promise.all(fileReaders);
        
        if (postType === 'reel') {
            // For video, we skip cropping for now
            setSelectedImages(contents);
            setStep('share');
            setCurrentImageIndex(0);
        } else {
            // For posts (images), go to crop
            setCroppingQueue(contents);
            setProcessedImages([]);
            setStep('crop');
            setCurrentImageIndex(0);
        }
      } catch (error) {
        toast.error("檔案讀取失敗");
      }
  };

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropConfirm = async () => {
    if (!croppedAreaPixels || croppingQueue.length === 0) return;

    try {
        const currentSrc = croppingQueue[processedImages.length];
        const croppedImage = await getCroppedImg(currentSrc, croppedAreaPixels);
        const newProcessed = [...processedImages, croppedImage];
        
        setProcessedImages(newProcessed);
        setCrop({ x: 0, y: 0 });
        setZoom(1);

        if (newProcessed.length === croppingQueue.length) {
            setSelectedImages(newProcessed);
            setCurrentImageIndex(0);
            setStep('share');
            simulateAIAnalysis();
        }
    } catch (e) {
        toast.error("裁切失敗");
    }
  };

  const simulateAIAnalysis = () => {
    toast.promise(new Promise(resolve => setTimeout(resolve, 2000)), {
      loading: 'AI 正在分析穿搭單品...',
      success: '分析完成，已自動推薦分類',
      error: '分析失敗'
    });
    setCategory('街頭風'); // Mock result
  };

  // Helper for FormData upload
  const dataURItoBlob = (dataURI: string) => {
    const split = dataURI.split(',');
    const byteString = atob(split[1]);
    const mimeString = split[0].split(':')[1]?.split(';')[0] || 'application/octet-stream';
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      // 0) 確認登入 & 取得 current user（同時會確保 profiles 有一筆）
      const { user } = await getCurrentProfile();
      if (!user) {
        toast.error("請先登入");
        return;
      }

      // 1) 先把圖片上傳到 storage（沿用你現在的 /upload edges function）
      const uploadedPaths: string[] = [];
      for (const media of selectedImages) {
        if (media.startsWith('data:')) {
          const blob = dataURItoBlob(media);
          const ext = blob.type.split('/')[1] || 'bin';
          const filename = `post_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.${ext}`;

          // 還是走原本的 api.upload
          const uploadData = await api.post(
            `/upload?filename=${encodeURIComponent(filename)}`,
            blob
          );
          uploadedPaths.push(uploadData.path);
        } else {
          // 已經是 URL 的就直接用
          uploadedPaths.push(media);
        }
      }

      if (uploadedPaths.length === 0) {
        toast.error("請先選擇圖片");
        return;
      }

      // 2) Tag 轉為 products（之後要正規化到 tags / outfit_tags 再說）
      const products = tagPoints.map(tp => ({
        id: `prod_${tp.id}`,
        name: tp.name || 'Unknown',
        brand: tp.brand || 'Unknown',
        price: tp.price || 'N/A',
        link: tp.link || '#',
        position: { x: tp.x, y: tp.y },
        imageIndex: tp.imageIndex,
        size: tp.size || ''
      }));

      // 3) 建 outfits 主表
      const { data: newOutfit, error: outfitErr } = await supabase
        .from("outfits")
        .insert({
          user_id: user.id,
          main_image_url: uploadedPaths[0],
          description: caption || null,
          // 這裡之後如果你在 outfits 表加欄位（category, weather, budget, gender...）
          // 就可以一起寫進去，例如：
          // category,
          // weather,
          // budget,
        })
        .select("*")
        .single();

      if (outfitErr || !newOutfit) {
        console.error("insert outfits error", outfitErr);
        throw outfitErr;
      }

      // 4) 其餘圖片寫入 outfit_images
      const extraImages = uploadedPaths.slice(1).map((url) => ({
        outfit_id: newOutfit.id,
        image_url: url,
      }));

      if (extraImages.length > 0) {
        const { error: imgErr } = await supabase
          .from("outfit_images")
          .insert(extraImages);
        if (imgErr) {
          console.error("insert outfit_images error", imgErr);
          throw imgErr;
        }
      }

      // ✅ 這一版先把 products / tags / weather 保留在前端 state，之後你如果要拆成 tags 表再來第二階段
      console.log("products for this outfit (暫存在前端)", products, tags, weather, category, budget);

      toast.success('發布成功！');
      onNavigate('home');

    } catch (error: any) {
      console.error('Failed to publish post', error);
      toast.error(`發布失敗: ${error.message || '請稍後再試'}`);
    } finally {
      setIsPublishing(false);
    }
  };

  // Tagging Logic
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (step !== 'tagging') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const newTag: TagPoint = {
      id: nextTagId,
      x,
      y,
      imageIndex: currentImageIndex,
      name: '',
      brand: '',
      price: '',
      link: '',
      size: ''
    };
    
    setTagPoints([...tagPoints, newTag]);
    setSelectedTagId(nextTagId);
    setNextTagId(nextTagId + 1);
  };

  const updateTag = (id: number, field: keyof TagPoint, value: string) => {
    setTagPoints(tagPoints.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  // Header Logic
  const renderHeader = () => {
    if (step === 'select') return <div className="font-semibold">建立新{postType === 'post' ? '貼文' : '短影片'}</div>;

    if (step === 'crop') {
      return (
        <div className="flex items-center justify-between w-full px-4 py-2">
           <Button variant="ghost" size="icon" onClick={() => setStep('select')}><ChevronLeft /></Button>
           <span className="font-semibold">裁切</span>
           <Button 
             variant="ghost" 
             className="text-blue-500 font-semibold hover:text-blue-600 hover:bg-transparent"
             onClick={handleCropConfirm}
           >
             {processedImages.length + 1 === croppingQueue.length ? '下一步' : '下一張'}
           </Button>
        </div>
      );
    }

    if (step === 'tagging') {
      return (
        <div className="flex items-center justify-between w-full px-4 py-2">
           <Button variant="ghost" size="icon" onClick={() => setStep('share')}><ChevronLeft /></Button>
           <span className="font-semibold">標記單品</span>
           <Button 
             variant="ghost" 
             className="text-blue-500 font-semibold hover:text-blue-600 hover:bg-transparent"
             onClick={() => setStep('share')}
           >
             完成
           </Button>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-between w-full px-4 py-2">
         <Button variant="ghost" size="icon" onClick={() => setStep(postType === 'post' ? 'crop' : 'select')}><ChevronLeft /></Button>
         <span className="font-semibold">建立新{postType === 'post' ? '貼文' : '短影片'}</span>
         <Button 
           variant="ghost" 
           className="text-blue-500 font-semibold hover:text-blue-600 hover:bg-transparent"
           onClick={handlePublish}
           disabled={isPublishing}
         >
           {isPublishing ? '分享中...' : '分享'}
         </Button>
      </div>
    );
  };

  const isVideo = (url: string) => {
      return postType === 'reel' || url.match(/\.(mp4|webm|mov)$/i) || url.startsWith('data:video');
  };

  // Main Render
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
      
      {/* Close Button (outside) */}
      <div className="absolute top-4 right-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={() => onNavigate('home')}>
           <X className="w-6 h-6" />
        </Button>
      </div>

      {/* Modal Container */}
      <div className={`bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ${step === 'share' ? 'w-full max-w-5xl h-[85vh]' : 'w-full max-w-[800px] h-[85vh]'}`}>
        
        {/* Header */}
        <div className="h-12 border-b flex items-center justify-center bg-white shrink-0 z-10">
           {renderHeader()}
        </div>

        {/* Body */}
        <div className="flex-1 flex overflow-hidden bg-gray-50 relative">
          
          {/* SELECT STEP */}
          {step === 'select' && (
            <div 
                className="w-full h-full flex flex-col items-center justify-center relative"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
               <div className="flex-1 flex flex-col items-center justify-center p-8">
                   {postType === 'post' ? <ImageIcon className="w-20 h-20 text-gray-300 mb-4" /> : <Film className="w-20 h-20 text-gray-300 mb-4" />}
                   <h3 className="text-xl font-light mb-6">{postType === 'post' ? '將相片拖曳到這裡' : '將影片拖曳到這裡'}</h3>
                   <Button 
                       size="lg" 
                       className="bg-[#0095F6] hover:bg-[#1877F2]"
                       onClick={() => fileInputRef.current?.click()}
                   >
                       從電腦選擇
                   </Button>
                   <input 
                       ref={fileInputRef}
                       type="file" 
                       multiple 
                       accept={postType === 'post' ? "image/*" : "video/*"}
                       className="hidden" 
                       onChange={handleImageUpload} 
                   />
               </div>

               {/* Mode Switcher Bottom Bar */}
               <div className="w-full h-14 border-t bg-white flex items-center justify-center gap-8 shrink-0">
                  <button 
                    className={`h-full px-4 text-sm font-semibold border-t-2 transition-all ${postType === 'post' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                    onClick={() => setPostType('post')}
                  >
                    貼文
                  </button>
                  <button 
                    className={`h-full px-4 text-sm font-semibold border-t-2 transition-all ${postType === 'reel' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                    onClick={() => setPostType('reel')}
                  >
                    短影片
                  </button>
               </div>
            </div>
          )}

          {/* CROP STEP (Photo Only) */}
          {step === 'crop' && (
            <div className="w-full h-full flex flex-col">
                <div className="flex-1 relative bg-black">
                   {croppingQueue.length > 0 && (
                      <Cropper
                         image={croppingQueue[processedImages.length]}
                         crop={crop}
                         zoom={zoom}
                         aspect={4 / 5}
                         onCropChange={setCrop}
                         onCropComplete={onCropComplete}
                         onZoomChange={setZoom}
                      />
                   )}
                </div>
                <div className="h-16 bg-white border-t flex items-center px-6 justify-between shrink-0">
                   <div className="text-sm font-medium text-gray-900">
                      {processedImages.length + 1} / {croppingQueue.length}
                   </div>
                   <div className="w-48">
                      <Slider 
                        value={[zoom]} 
                        min={1} max={2} step={0.1} 
                        onValueChange={(v) => setZoom(v[0])} 
                      />
                   </div>
                </div>
            </div>
          )}

          {/* SHARE STEP: Split View */}
          {step === 'share' && (
            <>
              {/* Left: Image Preview */}
              <div className="hidden md:flex w-[60%] bg-black items-center justify-center relative">
                 <div className="relative w-full h-full flex items-center justify-center">
                    {isVideo(selectedImages[currentImageIndex]) ? (
                        <video 
                            src={selectedImages[currentImageIndex]} 
                            className="max-w-full max-h-full object-contain" 
                            controls
                        />
                    ) : (
                        <img 
                          src={selectedImages[currentImageIndex]} 
                          className="max-w-full max-h-full object-contain" 
                        />
                    )}
                    
                    {tagPoints.filter(t => t.imageIndex === currentImageIndex).map((tag) => (
                        <div key={tag.id} className="absolute group" style={{ left: `${tag.x}%`, top: `${tag.y}%` }}>
                           <div className="absolute -left-4 -top-4 w-8 h-8 bg-black/50 border border-white rounded-full flex items-center justify-center shadow-lg">
                              <Tag className="w-3 h-3 text-white" />
                           </div>
                           {(tag.brand || tag.name || tag.price) && (
                               <div 
                                   className="absolute left-5 top-0 -translate-y-1/2 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 p-3 min-w-[240px] z-10 cursor-pointer transition-all hover:border-gray-300 hover:shadow-md"
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       if (tag.link) window.open(tag.link, '_blank');
                                   }}
                               >
                                   <div className="w-12 h-12 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-sm font-bold text-gray-400 uppercase shrink-0 overflow-hidden">
                                        <ProductThumbnail 
                                            product={{
                                                link: tag.link,
                                                brand: tag.brand,
                                                position: { x: tag.x, y: tag.y }
                                            }} 
                                            mainImage={selectedImages[currentImageIndex]} 
                                        />
                                   </div>
                                   <div className="flex-1 min-w-0 text-left">
                                       <p className="text-sm font-bold text-gray-900 truncate">{tag.name || '未命名'}</p>
                                       <p className="text-xs text-gray-500 mt-0.5">{tag.brand} • {tag.size ? tag.size + ' • ' : ''}{tag.price}</p>
                                   </div>
                                   <div className="flex items-center gap-1">
                                        <button 
                                            className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ShoppingBag className="w-4 h-4" />
                                        </button>
                                        {tag.link ? (
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(tag.link, '_blank');
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
                           )}
                        </div>
                    ))}
                 </div>
                 {/* Dots / Nav if multiple */}
                 {selectedImages.length > 1 && (
                    <>
                       <Button variant="secondary" size="icon" className="absolute left-4 rounded-full bg-white/80 hover:bg-white" onClick={() => setCurrentImageIndex(p => p > 0 ? p - 1 : p)} disabled={currentImageIndex === 0}><ChevronLeft className="w-4 h-4" /></Button>
                       <Button variant="secondary" size="icon" className="absolute right-4 rounded-full bg-white/80 hover:bg-white" onClick={() => setCurrentImageIndex(p => p < selectedImages.length - 1 ? p + 1 : p)} disabled={currentImageIndex === selectedImages.length - 1}><ChevronRight className="w-4 h-4" /></Button>
                    </>
                 )}
              </div>

              {/* Right: Form */}
              <div className="flex-1 w-full md:w-[40%] bg-white flex flex-col border-l overflow-y-auto">
                 
                 {/* User Info */}
                 <div className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    <span className="font-semibold text-sm">User</span>
                 </div>

                 {/* Caption */}
                 <div className="px-4">
                    <Textarea 
                      placeholder="撰寫說明..." 
                      className="border-0 resize-none p-0 focus-visible:ring-0 min-h-[120px] text-base"
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                    />
                 </div>

                 <Separator className="my-4" />

                 {/* Tag People Row */}
                 <div 
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between transition-colors"
                    onClick={() => setStep('tagging')}
                 >
                    <span className="text-sm font-medium">標記單品</span>
                    <div className="flex items-center gap-2">
                       {tagPoints.length > 0 && <Badge variant="secondary">{tagPoints.length} 個單品</Badge>}
                       <MapPin className="w-4 h-4 text-gray-400" />
                    </div>
                 </div>
                 <Separator />

                 {/* Add Location */}
                 <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                     <span className="text-sm font-medium">新增地點</span>
                     <MapPin className="w-4 h-4 text-gray-400" />
                 </div>
                 <Separator />

                 {/* Accordion for Advanced Settings */}
                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="advanced" className="border-b-0">
                       <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 hover:no-underline">
                          <span className="text-sm font-medium">進階設定</span>
                       </AccordionTrigger>
                       <AccordionContent className="px-4 pb-4 space-y-4">
                           
                           <div className="space-y-2">
                               <Label>穿搭主題</Label>
                               <Input 
                                 placeholder="輸入穿搭主題" 
                                 value={category} 
                                 onChange={(e) => setCategory(e.target.value)} 
                               />
                           </div>

                           <div className="grid grid-cols-2 gap-4">
                               <div className="space-y-2">
                                  <Label>天氣</Label>
                                  <Select value={weather} onValueChange={setWeather}>
                                    <SelectTrigger><SelectValue placeholder="天氣" /></SelectTrigger>
                                    <SelectContent>
                                       {weatherOptions.map(w => <SelectItem key={w} value={w}>{w}</SelectItem>)}
                                    </SelectContent>
                                  </Select>
                               </div>
                           </div>



                           {/* Hashtags */}
                           <div className="space-y-2">
                              <Label>標籤</Label>
                              <div className="flex gap-2">
                                 <Input 
                                    placeholder="輸入後按 Enter..." 
                                    value={currentTag}
                                    onChange={(e) => setCurrentTag(e.target.value)}
                                    onKeyPress={(e) => {
                                       if (e.key === 'Enter' && currentTag.trim()) {
                                          e.preventDefault();
                                          if(!tags.includes(currentTag.trim())) setTags([...tags, currentTag.trim()]);
                                          setCurrentTag('');
                                       }
                                    }}
                                 />
                              </div>
                              <div className="flex flex-wrap gap-1">
                                 {tags.map(t => (
                                    <Badge key={t} variant="secondary" className="cursor-pointer" onClick={() => setTags(tags.filter(x => x !== t))}>
                                       #{t} <X className="w-3 h-3 ml-1" />
                                    </Badge>
                                 ))}
                              </div>
                           </div>

                       </AccordionContent>
                    </AccordionItem>
                 </Accordion>

              </div>
            </>
          )}

          {/* TAGGING MODE */}
          {step === 'tagging' && (
             <div className="w-full h-full flex flex-col md:flex-row">
                {/* Center Image for tagging */}
                <div className="flex-1 bg-gray-100 flex items-center justify-center relative p-4 cursor-crosshair" onClick={handleImageClick}>
                   <div className="relative max-h-full aspect-[4/5] shadow-lg bg-white flex items-center justify-center">
                      {isVideo(selectedImages[currentImageIndex]) ? (
                         <video 
                            src={selectedImages[currentImageIndex]}
                            className="w-full h-full object-cover pointer-events-none"
                            muted
                            loop
                            autoPlay
                         />
                      ) : (
                         <img 
                            src={selectedImages[currentImageIndex]} 
                            className="w-full h-full object-cover pointer-events-none select-none"
                         />
                      )}
                      
                      {/* Tags */}
                      {tagPoints.filter(t => t.imageIndex === currentImageIndex).map((tag) => (
                        <Popover key={tag.id} open={selectedTagId === tag.id}>
                           <PopoverTrigger asChild>
                                <div 
                                    className={`absolute w-8 h-8 -ml-4 -mt-4 bg-black/60 border-2 ${selectedTagId === tag.id ? 'border-blue-500' : 'border-white'} rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`} 
                                    style={{ left: `${tag.x}%`, top: `${tag.y}%` }}
                                    onClick={(e) => {
                                       e.stopPropagation();
                                       setSelectedTagId(tag.id);
                                    }}
                                >
                                   <span className="text-white text-xs font-bold">{tag.id}</span>
                                   {(tag.brand || tag.name || tag.price) && (
                                     <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 p-3 min-w-[240px] z-10 animate-in fade-in slide-in-from-left-2">
                                         <div className="w-12 h-12 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-sm font-bold text-gray-400 uppercase shrink-0 overflow-hidden">
                                              <ProductThumbnail 
                                                  product={{
                                                      link: tag.link,
                                                      brand: tag.brand,
                                                      position: { x: tag.x, y: tag.y }
                                                  }} 
                                                  mainImage={selectedImages[currentImageIndex]} 
                                              />
                                         </div>
                                         <div className="flex-1 min-w-0 text-left">
                                             <p className="text-sm font-bold text-gray-900 truncate">{tag.name || '未命名'}</p>
                                             <p className="text-xs text-gray-500 mt-0.5">{tag.brand} • {tag.size ? tag.size + ' • ' : ''}{tag.price}</p>
                                         </div>
                                         <div className="flex items-center gap-1">
                                              <button 
                                                  className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                                                  onClick={(e) => e.stopPropagation()}
                                              >
                                                  <ShoppingBag className="w-4 h-4" />
                                              </button>
                                              {tag.link ? (
                                                  <button 
                                                      onClick={(e) => {
                                                          e.stopPropagation();
                                                          window.open(tag.link, '_blank');
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
                                   )}
                                </div>
                           </PopoverTrigger>
                           <PopoverContent className="w-80 p-4" align="center" sideOffset={5} onClick={(e) => e.stopPropagation()}>
                               <div className="space-y-3">
                                  <div className="flex justify-between items-center">
                                     <h4 className="font-medium">編輯單品 #{tag.id}</h4>
                                     <Button variant="ghost" size="sm" onClick={(e) => {
                                        e.stopPropagation();
                                        setTagPoints(tagPoints.filter(t => t.id !== tag.id));
                                        setSelectedTagId(null);
                                     }} className="text-red-500 hover:text-red-600 h-8"><X className="w-4 h-4" /></Button>
                                  </div>
                                  <div className="space-y-2">
                                     <Input placeholder="單品名稱 (例: 外套)" value={tag.name} onChange={(e) => updateTag(tag.id, 'name', e.target.value)} autoFocus />
                                     <Input placeholder="品牌 (例: Nike)" value={tag.brand} onChange={(e) => updateTag(tag.id, 'brand', e.target.value)} />
                                     <Input placeholder="尺寸 (例: M)" value={tag.size} onChange={(e) => updateTag(tag.id, 'size', e.target.value)} />
                                     <Input placeholder="價格 (例: NT$ 1,280)" value={tag.price} onChange={(e) => updateTag(tag.id, 'price', e.target.value)} />
                                     <Input placeholder="連結 (選填)" value={tag.link} onChange={(e) => updateTag(tag.id, 'link', e.target.value)} />
                                  </div>
                                  <div className="flex justify-end">
                                     <Button size="sm" onClick={(e) => { e.stopPropagation(); setSelectedTagId(null); }}>完成</Button>
                                  </div>
                                </div>
                           </PopoverContent>
                        </Popover>
                      ))}
                   </div>

                   {/* Thumbnails for multi-image navigation */}
                   {selectedImages.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-full backdrop-blur-sm">
                         {selectedImages.map((_, idx) => (
                            <button 
                              key={idx} 
                              className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white scale-125' : 'bg-white/50'}`}
                              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                            />
                         ))}
                      </div>
                   )}
                </div>
             </div>
          )}

        </div>
      </div>
    </div>
  );
}