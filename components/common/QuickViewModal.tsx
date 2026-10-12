'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';
import Badge from './Badge';
import { FurnitureItem } from '@/data/furnitureData';
import { EASE_LUXE, fadeUpItem } from '../motion';
import dynamic from 'next/dynamic';
import { fabricHex, modelFor, woodHex } from '@/data/materials';

const ProductViewer3D = dynamic(() => import('../3d/ProductViewer3D'), {
  ssr: false,
  loading: () => <div className="aspect-square rounded-3xl bg-white animate-pulse" />,
});

export default function QuickViewModal() {
  const { quickViewProduct } = useCart();

  // Keyed so AnimatePresence keeps the last product rendered while it animates out
  return (
    <AnimatePresence>
      {quickViewProduct && <QuickViewDialog key={quickViewProduct.id} quickViewProduct={quickViewProduct} />}
    </AnimatePresence>
  );
}

function QuickViewDialog({ quickViewProduct }: { quickViewProduct: FurnitureItem }) {
  const { setQuickViewProduct, addToCart } = useCart();
  // Dialog is keyed per product, so initial state resets on every open
  const [selectedWood, setSelectedWood] = useState<string>(quickViewProduct.woodOptions[0] || '');
  const [selectedFinish, setSelectedFinish] = useState<string>(quickViewProduct.finishOptions[0] || '');
  const [selectedFabric, setSelectedFabric] = useState<string>(
    quickViewProduct.fabricOptions ? quickViewProduct.fabricOptions[0] : ''
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mode, setMode] = useState<'3d' | 'photo'>('photo');

  const images = [
    quickViewProduct.image,
    ...(quickViewProduct.galleryImages || []).filter((img) => img !== quickViewProduct.image),
  ];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, {
      wood: selectedWood,
      finish: selectedFinish,
      fabric: selectedFabric || undefined,
    });
    setQuickViewProduct(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={() => setQuickViewProduct(null)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E7E5E4] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ rotate: 90, scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 text-[#4A2E1E] hover:bg-white hover:text-black shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Gallery */}
          <div className="relative flex flex-col bg-[#F5F5F4] p-6 justify-between">
            <div className="mb-3 inline-flex self-start p-1 rounded-full bg-white border border-[#E7E5E4] text-xs font-semibold">
              {(['3d', 'photo'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`relative px-3.5 py-1.5 rounded-full transition-colors ${mode === m ? 'text-white' : 'text-[#57534E] hover:text-[#1C1917]'}`}
                >
                  {mode === m && (
                    <motion.span layoutId="qv-mode" className="absolute inset-0 rounded-full bg-[#1C1917]" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                  )}
                  <span className="relative">{m === '3d' ? '360° 3D' : 'Photos'}</span>
                </button>
              ))}
            </div>
            {mode === '3d' ? (
              <ProductViewer3D
                kind={modelFor(quickViewProduct)}
                wood={woodHex(selectedWood)}
                fabric={fabricHex(selectedFabric)}
                className="aspect-square"
                compact
              />
            ) : (
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-inner">
              <AnimatePresence initial={false}>
                <motion.div
                  key={activeImageIndex}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE_LUXE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[activeImageIndex] || quickViewProduct.image}
                    alt={quickViewProduct.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-3 left-3 z-10">
                <Badge variant="gold" size="sm">
                  <Sparkles className="w-3 h-3" /> Quick Customizer
                </Badge>
              </div>
            </div>
            )}

            {/* Thumbnail selector */}
            {mode === 'photo' && images.length > 1 && (
              <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === idx ? 'border-[#A0741A] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Customization Controls */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
            >
              <motion.div variants={fadeUpItem} className="flex items-center justify-between text-xs text-[#7C4B27] uppercase tracking-wider font-semibold mb-2">
                <span>{quickViewProduct.categoryLabel}</span>
                <span className="text-[#6B6560] font-normal lowercase">{quickViewProduct.leadTime}</span>
              </motion.div>

              <motion.h2 variants={fadeUpItem} className="text-2xl sm:text-3xl text-[#1C1917] font-semibold leading-tight">
                {quickViewProduct.name}
              </motion.h2>
              <motion.p variants={fadeUpItem} className="mt-1 text-xs text-[#57534E] font-normal">
                {quickViewProduct.tagline}
              </motion.p>

              {/* Price */}
              <motion.div variants={fadeUpItem} className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-semibold text-[#1C1917]">
                  ₹{quickViewProduct.price.toLocaleString('en-IN')}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-[#78716C] line-through">
                    ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-[#4A5B47] bg-[#4A5B47]/10 px-2 py-0.5 rounded-full font-medium">
                  Direct Atelier Pricing
                </span>
              </motion.div>

              {/* Wood Selection */}
              <motion.div variants={fadeUpItem} className="mt-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] mb-2">
                  Select Solid Hardwood: <span className="font-normal text-[#7C4B27]">{selectedWood}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {quickViewProduct.woodOptions.map((wood) => (
                    <motion.button
                      key={wood}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setSelectedWood(wood)}
                      className={`relative px-3 py-2 rounded-xl text-xs font-medium text-left border transition-colors flex items-center justify-between ${
                        selectedWood === wood
                          ? 'border-[#4A2E1E] text-white shadow-sm'
                          : 'border-[#E7E5E4] text-[#4A2E1E] bg-[#FAFAF9] hover:bg-white'
                      }`}
                    >
                      {selectedWood === wood && (
                        <motion.span
                          layoutId="qv-wood-pill"
                          className="absolute inset-0 rounded-xl bg-[#4A2E1E]"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="relative truncate">{wood}</span>
                      {selectedWood === wood && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="relative flex-shrink-0 ml-1"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </motion.span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Finish Selection */}
              <motion.div variants={fadeUpItem} className="mt-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] mb-2">
                  Select Finish Tone: <span className="font-normal text-[#7C4B27]">{selectedFinish}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.finishOptions.map((finish) => (
                    <button
                      key={finish}
                      onClick={() => setSelectedFinish(finish)}
                      className={`px-3 py-1.5 rounded-lg text-xs border transition-all ${
                        selectedFinish === finish
                          ? 'border-[#A0741A] bg-[#A0741A]/10 text-[#7C4B27] font-semibold'
                          : 'border-[#E7E5E4] text-[#44403C] hover:bg-[#F5F5F4]'
                      }`}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Fabric Selection if applicable */}
              {quickViewProduct.fabricOptions && quickViewProduct.fabricOptions.length > 0 && (
                <div className="mt-4">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] mb-2">
                    Upholstery Fabric: <span className="font-normal text-[#7C4B27]">{selectedFabric}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.fabricOptions.map((fabric) => (
                      <button
                        key={fabric}
                        onClick={() => setSelectedFabric(fabric)}
                        className={`px-3 py-1.5 rounded-lg text-xs border transition-all ${
                          selectedFabric === fabric
                            ? 'border-[#4A2E1E] bg-[#4A2E1E] text-white font-medium'
                            : 'border-[#E7E5E4] text-[#44403C] hover:bg-[#F5F5F4]'
                        }`}
                      >
                        {fabric}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dimensions */}
              <motion.div variants={fadeUpItem} className="mt-5 p-3 rounded-xl bg-[#F5F5F4] border border-[#E7E5E4] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#6B6560] block font-normal">Standard Dimensions:</span>
                  <span className="font-medium text-[#1C1917]">
                    {quickViewProduct.dimensions.width} × {quickViewProduct.dimensions.depth} × {quickViewProduct.dimensions.height}
                  </span>
                </div>
                <Badge variant="wood" size="sm">
                  100% Custom Sizes Allowed
                </Badge>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUpItem} className="mt-5 grid grid-cols-3 gap-2 text-xs text-[#57534E] pt-3 border-t border-[#F0EFED]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A0741A]" />
                  <span>15-Yr Warranty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#A0741A]" />
                  <span>White Glove Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#A0741A]" />
                  <span>Crafted In India</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: EASE_LUXE }}
              className="mt-6 flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#F0EFED]">
              <Button
                variant="primary"
                fullWidth
                onClick={handleAddToCart}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Add to Bespoke Quote Basket
              </Button>

              <Link
                href={`/product/${quickViewProduct.id}`}
                onClick={() => setQuickViewProduct(null)}
                className="w-full sm:w-auto px-4 py-3 rounded-full text-center text-xs text-[#7C4B27] font-medium border border-[#E7E5E4] hover:bg-[#FAFAF9] transition-colors whitespace-nowrap"
              >
                Full Product Specifications
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
