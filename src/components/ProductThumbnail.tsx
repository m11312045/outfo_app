// src/components/ProductThumbnail.tsx
import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ProductThumbnailProps = {
  product: any;                // 這裡先用 any，避免跟原本型別衝突
  mainImage?: string | null;   // 來自貼文主圖（如果有的話）
};

export function ProductThumbnail({ product, mainImage }: ProductThumbnailProps) {
  // 1️⃣ 優先使用 product 自己帶的 image
  const productImage: string | null =
    (product && (product.image || product.image_url)) ?? null;

  // 2️⃣ 再來用 mainImage（整張穿搭圖）
  const fallbackImage: string | null = mainImage ?? null;

  // 3️⃣ 如果有連結，就解析出網域，顯示在縮圖下方
  let hostname: string | null = null;
  if (product?.link) {
    try {
      const url = new URL(product.link);
      hostname = url.hostname.replace(/^www\./, '');
    } catch {
      hostname = null;
    }
  }

  const displayImage = productImage || fallbackImage;

  return (
    <div className="flex items-center gap-2">
      {displayImage ? (
        <div className="w-10 h-10 rounded bg-gray-100 overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={displayImage}
            alt={product?.name || 'product image'}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-xs text-gray-400 flex-shrink-0">
          無圖片
        </div>
      )}

      <div className="flex flex-col min-w-0">
        <span className="text-sm text-gray-900 truncate">
          {product?.name || '未命名單品'}
        </span>
        {hostname && (
          <span className="text-xs text-gray-400 truncate">{hostname}</span>
        )}
      </div>
    </div>
  );
}
