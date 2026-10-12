'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag, Star, Clock } from 'lucide-react';
import { FurnitureItem } from '@/data/furnitureData';
import { useCart } from '@/context/CartContext';
import { woodHex } from '@/data/materials';

interface ProductCardProps {
  product: FurnitureItem;
}

const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;

const SIZES = '(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw';

export default function ProductCard({ product }: ProductCardProps) {
  const { toggleWishlist, isInWishlist, setQuickViewProduct, addToCart } = useCart();
  const [selectedWood, setSelectedWood] = useState(product.woodOptions[0] || 'Burma Teak');
  const [loaded, setLoaded] = useState(false);
  const isWishlisted = isInWishlist(product.id);
  const tag = product.isSignature ? 'Signature' : product.isBestSeller ? 'Bestseller' : product.isNewArrival ? 'New' : null;
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  // Secondary shot revealed on hover, when the gallery has a distinct one
  const hoverImage = product.galleryImages.find((src) => src !== product.image);
  const href = `/product/${product.id}`;

  return (
    <article className="group relative h-full flex flex-col rounded-[22px] bg-white p-2 ring-1 ring-[#EAE5DD] transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(74,46,30,0.28)] hover:ring-[#DDD5C8]">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F4F0EA]">
        {!loaded && <div className="absolute inset-0 card-shimmer" aria-hidden />}

        <Link href={href} className="absolute inset-0 block" aria-label={product.name}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes={SIZES}
            quality={90}
            onLoad={() => setLoaded(true)}
            // Cached images can finish before hydration and never fire onLoad
            ref={(img) => {
              if (img?.complete) setLoaded(true);
            }}
            className={`object-cover object-center transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] ${
              loaded ? 'opacity-100' : 'opacity-0'
            } ${hoverImage ? 'sm:group-hover:opacity-0' : ''}`}
          />
          {hoverImage && (
            <Image
              src={hoverImage}
              alt=""
              aria-hidden
              fill
              sizes={SIZES}
              quality={90}
              className="hidden sm:block object-cover object-center opacity-0 scale-[1.05] transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:scale-100"
            />
          )}
          {/* Soft vignette so overlaid controls stay legible on bright photos */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </Link>

        {/* Badges */}
        <div className="pointer-events-none absolute top-3 left-3 z-10 flex flex-col items-start gap-1.5">
          {tag && (
            <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] font-semibold tracking-wide text-[#1C1917] shadow-sm">
              {tag}
            </span>
          )}
          {discount > 0 && (
            <span className="px-2.5 py-1 rounded-full bg-[#4A2E1E] text-[11px] font-semibold tracking-wide text-white shadow-sm">
              {discount}% off
            </span>
          )}
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.85 }}
          onClick={() => toggleWishlist(product.id)}
          aria-label={isWishlisted ? 'Remove from saved' : 'Save for later'}
          aria-pressed={isWishlisted}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-sm backdrop-blur transition-colors ${
            isWishlisted ? 'bg-[#1C1917] text-white' : 'bg-white/85 text-[#1C1917] hover:bg-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </motion.button>

        {/* Hover actions */}
        <div className="absolute inset-x-3 bottom-3 z-10 hidden sm:flex gap-2 opacity-0 translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
          <button
            type="button"
            onClick={() => setQuickViewProduct(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 rounded-full bg-white/95 backdrop-blur text-xs font-semibold text-[#1C1917] shadow-sm hover:bg-white transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick view
          </button>
          <button
            type="button"
            onClick={() => addToCart(product, { wood: selectedWood })}
            aria-label={`Add ${product.name} to cart`}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1C1917] text-white shadow-sm hover:bg-[#4A2E1E] transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 px-2 pt-4 pb-2 sm:px-3">
        <div className="flex items-center justify-between gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8E857C]">
          <span className="truncate">{product.categoryLabel}</span>
          <span className="inline-flex items-center gap-1 normal-case tracking-normal text-[#1C1917] shrink-0">
            <Star className="w-3.5 h-3.5 fill-[#C29B38] text-[#C29B38]" />
            {product.rating.toFixed(1)}
            <span className="text-[#A8A29E]">({product.reviewCount})</span>
          </span>
        </div>

        <Link href={href} className="mt-1.5">
          <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#1C1917] leading-snug line-clamp-1 decoration-1 underline-offset-4 hover:underline">
            {product.name.replace(/^The /, '')}
          </h3>
        </Link>

        <p className="mt-2 flex flex-wrap items-baseline gap-x-2">
          <span className="text-base sm:text-lg font-semibold text-[#1C1917] tabular-nums">{inr(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-[#A8A29E] line-through tabular-nums">{inr(product.originalPrice)}</span>
          )}
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 min-w-0">
            {product.woodOptions.slice(0, 4).map((wood) => (
              <button
                key={wood}
                type="button"
                onClick={() => setSelectedWood(wood)}
                title={wood}
                aria-label={`Select ${wood}`}
                aria-pressed={selectedWood === wood}
                className={`w-5 h-5 shrink-0 rounded-full border-2 border-white transition-all ${
                  selectedWood === wood ? 'ring-[1.5px] ring-[#1C1917] scale-110' : 'ring-1 ring-black/10 hover:ring-black/30'
                }`}
                style={{ backgroundColor: woodHex(wood) }}
              />
            ))}
            {product.woodOptions.length > 4 && (
              <span className="text-[11px] text-[#8E857C]">+{product.woodOptions.length - 4}</span>
            )}
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#8E857C] whitespace-nowrap">
            <Clock className="w-3 h-3" />
            {product.leadTime}
          </span>
        </div>
        <p className="mt-1.5 text-[11px] text-[#6B6560] truncate">{selectedWood}</p>
      </div>
    </article>
  );
}
