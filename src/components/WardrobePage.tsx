import { useState } from 'react';
import { Plus, Shirt, Filter, X, Check, Upload, Loader2, Trash2, Layers, Tag, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { removeBackground } from "@imgly/background-removal";
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollArea } from './ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';

// Helper to resize image before processing to improve stability
const resizeImage = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX_SIZE = 1024; // Limit resolution for single-threaded performance
      let width = img.width;
      let height = img.height;
      
      if (width > height) {
        if (width > MAX_SIZE) {
          height *= MAX_SIZE / width;
          width = MAX_SIZE;
        }
      } else {
        if (height > MAX_SIZE) {
          width *= MAX_SIZE / height;
          height = MAX_SIZE;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Canvas to Blob failed'));
      }, file.type, 0.9);
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

interface WardrobeItem {
  id: string;
  image: string;
  category: string;
  name: string;
  date: string;
}

const initialItems: WardrobeItem[] = [
  { id: '1', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300', category: 'tops', name: 'White T-Shirt', date: '2025-11-15' },
  { id: '2', image: 'https://images.unsplash.com/photo-1542272454315-7f6d75fb3b03?w=300', category: 'bottoms', name: 'Blue Jeans', date: '2025-11-14' },
  { id: '3', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300', category: 'outerwear', name: 'Hoodie', date: '2025-11-12' },
];

const categories = [
  { id: 'all', label: '全部' },
  { id: 'tops', label: '上身' },
  { id: 'bottoms', label: '下身' },
  { id: 'outerwear', label: '外套' },
  { id: 'shoes', label: '鞋子' },
  { id: 'accessories', label: '配件' },
];

export function WardrobePage() {
  const [items, setItems] = useState<WardrobeItem[]>(initialItems);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddOpen, setIsAddOpen] = useState(false);
  
  // Add Item State
  const [uploadStep, setUploadStep] = useState<'upload' | 'processing' | 'confirm'>('upload');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [processingProgress, setProcessingProgress] = useState<string>('');
  const [newItemCategory, setNewItemCategory] = useState('tops');
  const [newItemName, setNewItemName] = useState('');

  const filteredItems = items.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadStep('processing');
      
      // Show local preview first
      const reader = new FileReader();
      reader.onload = (ev) => {
          if (ev.target?.result) {
              setSelectedImage(ev.target.result as string);
          }
      };
      reader.readAsDataURL(file);

      try {
        setProcessingProgress('正在初始化 AI 模型...');
        
        // Resize image first to avoid memory issues in single-threaded mode
        const resizedBlob = await resizeImage(file);
        
        // Process with @imgly/background-removal
        const config = {
            progress: (key: string, current: number, total: number) => {
                const percent = Math.round((current / total) * 100);
                if (key.includes('fetch')) {
                    setProcessingProgress(`下載模型中 (${percent}%)`);
                } else if (key.includes('compute')) {
                    setProcessingProgress(`AI 運算中...`);
                }
            },
            debug: false
        };
        const blob = await removeBackground(resizedBlob, config);
        const url = URL.createObjectURL(blob);
        setSelectedImage(url);
        setUploadStep('confirm');
      } catch (error) {
        console.error("Background removal failed:", error);
        // Fallback to original image if removal fails
        // We already set selectedImage via FileReader, so just move to confirm
        setUploadStep('confirm');
        alert("背景移除失敗，已保留原圖");
      }
    }
  };

  const handleSaveItem = () => {
    if (selectedImage && newItemName) {
      const newItem: WardrobeItem = {
        id: Date.now().toString(),
        image: selectedImage,
        category: newItemCategory,
        name: newItemName,
        date: new Date().toISOString().split('T')[0]
      };
      setItems([newItem, ...items]);
      setIsAddOpen(false);
      resetForm();
    }
  };

  const resetForm = () => {
    setUploadStep('upload');
    setSelectedImage(null);
    setNewItemName('');
    setNewItemCategory('tops');
  };

  return (
    <div className="h-full flex flex-col bg-[#F2F2F7] font-sans selection:bg-slate-200 text-[#1C1C1E]">
      {/* Header */}
      <div className="px-6 pt-10 pb-4 border-b border-slate-300/50 flex items-end justify-between bg-[#F2F2F7]/80 backdrop-blur-xl sticky top-0 z-10 transition-all">
        <div>
          <h1 className="text-[34px] font-bold text-[#1C1C1E] tracking-tighter leading-tight">我的衣櫃</h1>
          <p className="text-[#8E8E93] text-[15px] font-normal mt-0.5 tracking-tight">Outfo Collection</p>
        </div>
        <Dialog open={isAddOpen} onOpenChange={(open) => { setIsAddOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button className="bg-[#1C1C1E] text-white hover:bg-black rounded-full w-10 h-10 p-0 shadow-lg shadow-slate-300/50 hover:scale-105 active:scale-95 transition-all duration-200">
              <Plus className="w-[22px] h-[22px]" strokeWidth={2} />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md bg-white/95 backdrop-blur-2xl border-white/20 sm:rounded-[36px] p-0 overflow-hidden gap-0 shadow-2xl ring-1 ring-black/5">
            <div className="w-full h-7 bg-transparent flex justify-center items-center pt-3 pb-1">
               <div className="w-12 h-1.5 bg-[#E5E5EA] rounded-full" />
            </div>
            <DialogHeader className="px-6 pb-4 pt-1">
              <DialogTitle className="text-[20px] font-semibold text-center text-[#1C1C1E] tracking-tight">新增衣物</DialogTitle>
              <DialogDescription className="text-center text-[#8E8E93] text-[15px] font-normal tracking-tight">上傳照片，AI 將自動移除背景</DialogDescription>
            </DialogHeader>

            <div className="p-6 pt-2">
              {uploadStep === 'upload' && (
                <div className="border-2 border-dashed border-[#E5E5EA] bg-[#F2F2F7]/50 rounded-[32px] p-10 text-center hover:bg-[#F2F2F7] transition-all duration-300 cursor-pointer relative group active:scale-[0.99]">
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    onChange={handleFileSelect}
                  />
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ring-1 ring-black/5">
                    <Upload className="w-8 h-8 text-[#8E8E93] group-hover:text-[#1C1C1E] transition-colors" strokeWidth={1.5} />
                  </div>
                  <p className="font-semibold text-[#1C1C1E] text-[17px] tracking-tight">點擊上傳或拖放圖片</p>
                  <p className="text-[13px] text-[#8E8E93] mt-2 font-medium">支援 JPG, PNG 格式</p>
                </div>
              )}

              {uploadStep === 'processing' && (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="relative mb-8 scale-110">
                    <div className="w-32 h-32 rounded-[32px] overflow-hidden opacity-50 blur-md bg-white shadow-lg">
                       {selectedImage && <img src={selectedImage} className="w-full h-full object-cover" />}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5">
                          <Loader2 className="w-8 h-8 text-[#1C1C1E] animate-spin" strokeWidth={2} />
                       </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-[20px] text-[#1C1C1E] mb-2 tracking-tight">正在處理...</h3>
                  <p className="text-[#8E8E93] text-[15px] max-w-[260px] mx-auto leading-relaxed tracking-tight">
                    {processingProgress || "AI 正在分析影像結構，請稍候"}
                  </p>
                  {processingProgress.includes('運算中') && (
                    <p className="text-[11px] font-medium text-[#AEAEB2] mt-4 px-3 py-1 bg-[#F2F2F7] rounded-full tracking-wide uppercase">(單執行緒模式)</p>
                  )}
                </div>
              )}

              {uploadStep === 'confirm' && selectedImage && (
                <div className="space-y-6">
                  <div className="relative bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F133%2F645%2Foriginal%2Fvector-transparent-background.jpg&f=1&nofb=1&ipt=9d897d03347d4c53067274102370677271871966603309408816710337291037&ipo=images')] bg-cover rounded-[32px] p-8 flex items-center justify-center aspect-square border border-black/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.03)]">
                     <img src={selectedImage} className="max-h-full max-w-full object-contain drop-shadow-2xl" />
                     <div className="absolute top-5 right-5 bg-[#34C759]/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md tracking-wide">
                        已去背
                     </div>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-[13px] font-semibold text-[#8E8E93] uppercase tracking-wide ml-1">名稱</label>
                      <Input 
                        value={newItemName} 
                        onChange={(e) => setNewItemName(e.target.value)} 
                        placeholder="例如：白色棉質襯衫"
                        className="bg-[#F2F2F7] border-0 focus-visible:ring-0 focus-visible:bg-[#E5E5EA] transition-all h-[50px] rounded-2xl text-[17px] px-5 text-[#1C1C1E] placeholder:text-[#AEAEB2]"
                      />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[13px] font-semibold text-[#8E8E93] uppercase tracking-wide ml-1">分類</label>
                       <Select value={newItemCategory} onValueChange={setNewItemCategory}>
                          <SelectTrigger className="bg-[#F2F2F7] border-0 focus:ring-0 focus:bg-[#E5E5EA] transition-all h-[50px] rounded-2xl text-[17px] px-5 text-[#1C1C1E]">
                             <SelectValue placeholder="選擇分類" />
                          </SelectTrigger>
                          <SelectContent className="rounded-2xl border-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-2">
                             {categories.filter(c => c.id !== 'all').map(c => (
                                <SelectItem key={c.id} value={c.id} className="rounded-xl my-1 cursor-pointer text-[15px] py-3 px-4 focus:bg-[#F2F2F7] focus:text-[#1C1C1E]">{c.label}</SelectItem>
                             ))}
                          </SelectContent>
                       </Select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <DialogFooter className="p-6 pt-2 bg-white">
              {uploadStep === 'confirm' && (
                 <div className="flex w-full gap-3">
                    <Button variant="ghost" className="flex-1 rounded-2xl h-[50px] text-[17px] font-medium text-[#8E8E93] hover:text-[#1C1C1E] hover:bg-[#F2F2F7] tracking-tight" onClick={resetForm}>重新上傳</Button>
                    <Button className="flex-[2] bg-[#1C1C1E] text-white rounded-2xl h-[50px] text-[17px] font-semibold shadow-lg shadow-slate-300/50 hover:bg-black hover:scale-[1.02] active:scale-95 transition-all tracking-tight" onClick={handleSaveItem} disabled={!newItemName}>
                       儲存至衣櫃
                    </Button>
                 </div>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Categories */}
      <div className="px-6 pt-2 pb-2 bg-[#F2F2F7]/80 backdrop-blur-xl z-0 overflow-x-auto no-scrollbar">
         <div className="flex gap-2.5 min-w-max p-1">
            {categories.map(cat => (
               <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-300 tracking-tight ${
                     selectedCategory === cat.id 
                     ? 'bg-[#1C1C1E] text-white shadow-md scale-100' 
                     : 'bg-white text-[#8E8E93] hover:bg-white hover:text-[#1C1C1E] shadow-sm active:scale-95'
                  }`}
               >
                  {cat.label}
               </button>
            ))}
         </div>
      </div>

      {/* Grid */}
      <ScrollArea className="flex-1 p-6 pt-4">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pb-24">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative bg-white rounded-[32px] p-5 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer active:scale-[0.96] ring-1 ring-black/[0.02]">
                 <div className="aspect-[4/5] flex items-center justify-center mb-4 relative bg-[#F9F9F9] rounded-2xl overflow-hidden">
                    <ImageWithFallback 
                       src={item.image} 
                       className="max-w-[90%] max-h-[90%] object-contain drop-shadow-sm mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                 </div>
                 <div className="px-1">
                    <h3 className="font-semibold text-[#1C1C1E] text-[16px] truncate tracking-tight leading-snug">{item.name}</h3>
                    <div className="flex items-center justify-between mt-1.5">
                       <span className="text-[13px] font-medium text-[#8E8E93] tracking-normal">{categories.find(c => c.id === item.category)?.label}</span>
                       <button className="text-[#C7C7CC] hover:text-[#FF3B30] transition-colors p-2 -mr-2 active:scale-90">
                          <Trash2 className="w-[18px] h-[18px]" strokeWidth={2} />
                       </button>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[50vh] text-[#8E8E93]">
             <div className="w-20 h-20 bg-white rounded-[28px] shadow-sm flex items-center justify-center mb-6 ring-1 ring-black/5">
                <Shirt className="w-9 h-9 text-[#C7C7CC]" strokeWidth={1.5} />
             </div>
             <p className="font-semibold text-[17px] text-[#1C1C1E] tracking-tight">此分類暫無衣物</p>
             <p className="text-[15px] text-[#8E8E93] mt-2 max-w-[200px] text-center leading-relaxed tracking-tight">點擊右上角新增按鈕<br/>開始建立您的數位衣櫃</p>
          </div>
        )}
      </ScrollArea>
    </div>
  );
}