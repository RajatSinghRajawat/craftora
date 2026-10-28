'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  Share2,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCw,
  Ruler,
  Check,
  MessageSquare,
  ArrowRight,
  Info,
  Layers,
  Award,
} from 'lucide-react';
import { FurnitureItem, FURNITURE_ITEMS } from '@/data/furnitureData';
import { useCart } from '@/context/CartContext';
import Button from '../common/Button';
import Badge from '../common/Badge';
import ProductCard from '../common/ProductCard';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { fabricHex, modelFor, woodHex } from '@/data/materials';

const ProductViewer3D = dynamic(() => import('../3d/ProductViewer3D'), {
  ssr: false,
  loading: () => <div className="h-[420px] sm:h-[540px] rounded-3xl bg-[#F6F4F0] animate-pulse" />,
});
import { EASE_LUXE, Reveal, Stagger, StaggerItem, TextReveal } from '../motion';

interface ProductViewProps {
  product: FurnitureItem;
}

export default function ProductView({ product }: ProductViewProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  // Default to studio photography gallery so the card image is shown consistently
  const [activeTab, setActiveTab] = useState<'gallery' | '3d'>('gallery');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Selected options
  const [selectedWood, setSelectedWood] = useState(product.woodOptions[0] || 'Burma Teak');
  const [selectedFinish, setSelectedFinish] = useState(product.finishOptions[0] || 'Natural Matte Wax');
  const [selectedFabric, setSelectedFabric] = useState(
    product.fabricOptions ? product.fabricOptions[0] : ''
  );

  // Custom dimensions state
  const [customWidth, setCustomWidth] = useState(product.dimensions.width);
  const [customDepth, setCustomDepth] = useState(product.dimensions.depth);
  const [customHeight, setCustomHeight] = useState(product.dimensions.height);
  const [customNotes, setCustomNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Ensure primary product image is always the first image displayed
  const images = [
    product.image,
    ...(product.galleryImages || []).filter((img) => img !== product.image),
  ];
  const isWishlisted = isInWishlist(product.id);

  // Reset to gallery view and first image on product change
  React.useEffect(() => {
    setActiveTab('gallery');
    setActiveImageIndex(0);
    setSelectedWood(product.woodOptions[0] || 'Burma Teak');
    setSelectedFinish(product.finishOptions[0] || 'Natural Matte Wax');
    setSelectedFabric(product.fabricOptions ? product.fabricOptions[0] : '');
    setCustomWidth(product.dimensions.width);
    setCustomDepth(product.dimensions.depth);
    setCustomHeight(product.dimensions.height);
  }, [product.id, product.image, product.woodOptions, product.finishOptions, product.fabricOptions, product.dimensions]);

  const handleAddToCart = () => {
    addToCart(product, {
      wood: selectedWood,
      finish: selectedFinish,
      fabric: selectedFabric || undefined,
      dimensions: {
        width: customWidth,
        depth: customDepth,
        height: customHeight,
        notes: customNotes,
      },
    });
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const generateWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Craftora Atelier, I am interested in: *${product.name}*\n• Selected Wood: ${selectedWood}\n• Finish: ${selectedFinish}${selectedFabric ? `\n• Fabric: ${selectedFabric}` : ''}\n• Dimensions: ${customWidth} × ${customDepth} × ${customHeight}\n• Price: ₹${product.price.toLocaleString('en-IN')}\n\nCould you share timber grain photos and dispatch availability?`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  const relatedProducts = FURNITURE_ITEMS.filter(
    (item) => item.category === product.category && item.id !== product.id
  ).slice(0, 3);

  return (
    <div className="bg-[#FAFAF9] min-h-screen py-10 sm:py-16">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_LUXE }}
          className="flex items-center gap-2 text-xs text-[#6B6560] mb-8 overflow-x-auto"
        >
          <Link href="/" className="hover:text-[#4A2E1E] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-[#4A2E1E] transition-colors">
            Collections
          </Link>
          <span>/</span>
          <Link
            href={`/collections?category=${product.category}`}
            className="hover:text-[#4A2E1E] transition-colors"
          >
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-[#1C1917] font-medium truncate">{product.name}</span>
        </motion.nav>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Gallery / 3D Canvas Viewport */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE_LUXE }}
            className="lg:col-span-7 space-y-4"
          >
            {/* View Mode Tabs: High-Res Gallery vs Interactive 3D */}
            <div className="flex items-center gap-2 pb-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('gallery')}
                className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors ${
                  activeTab === 'gallery'
                    ? 'text-white border border-transparent'
                    : 'bg-white text-[#44403C] border border-[#E7E5E4] hover:bg-[#F5F5F4]'
                }`}
              >
                {activeTab === 'gallery' && (
                  <motion.span
                    layoutId="product-view-tab"
                    className="absolute inset-0 rounded-full bg-[#4A2E1E] shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">Studio Photography ({images.length})</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('3d')}
                className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 ${
                  activeTab === '3d'
                    ? 'text-white border border-transparent'
                    : 'bg-white text-[#7C4B27] border border-[#A0741A]/40 hover:bg-[#F5F5F4]'
                }`}
              >
                {activeTab === '3d' && (
                  <motion.span
                    layoutId="product-view-tab"
                    className="absolute inset-0 rounded-full bg-[#4A2E1E] shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <Sparkles className="relative z-10 w-3.5 h-3.5 text-[#A0741A]" />
                <span className="relative z-10">360° 3D View</span>
              </motion.button>
            </div>

            {/* Viewport Card */}
            <AnimatePresence mode="wait" initial={false}>
            {activeTab === 'gallery' ? (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: EASE_LUXE }}
                className="space-y-4"
              >
                <div className="group relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E7E5E4] shadow-sm">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={activeImageIndex}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: EASE_LUXE }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[activeImageIndex] || product.image}
                        alt={product.name}
                        fill
                        priority
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    {product.isSignature && (
                      <Badge variant="gold" size="sm">
                        Signature Atelier
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {images.map((img, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + idx * 0.07, ease: EASE_LUXE }}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 bg-white ${
                          activeImageIndex === idx
                            ? 'border-[#A0741A] ring-2 ring-[#A0741A]/30 scale-105'
                            : 'border-[#E7E5E4] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <Image src={img} alt="thumbnail" fill className="object-cover" />
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="3d"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: EASE_LUXE }}
                className="space-y-2"
              >
                <ProductViewer3D
                  kind={modelFor(product)}
                  wood={woodHex(selectedWood)}
                  fabric={fabricHex(selectedFabric)}
                  className="h-[420px] sm:h-[540px]"
                />
                <p className="text-xs text-[#6B6560] text-center font-normal">
                  Showing {selectedWood}
                  {selectedFabric ? ` · ${selectedFabric}` : ''} — change the wood or fabric on the right and the model updates live.
                </p>
              </motion.div>
            )}
            </AnimatePresence>

            {/* Atelier Craftsmanship Highlights */}
            <Reveal distance={40} className="p-8 rounded-3xl bg-white border border-[#E7E5E4] shadow-sm space-y-4">
              <h3 className="text-xl font-semibold text-[#1C1917] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#A0741A]" />
                <span>Woodworking Atelier Specifications</span>
              </h3>
              <p className="text-sm sm:text-sm text-[#44403C] font-normal leading-relaxed">
                {product.description}
              </p>
              <Stagger stagger={0.06} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#F0EFED]">
                {product.details.map((detail, idx) => (
                  <StaggerItem key={idx} variant="slideLeft" className="flex items-start gap-2.5 text-xs text-[#57534E]">
                    <Check className="w-4 h-4 text-[#A0741A] flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </StaggerItem>
                ))}
              </Stagger>
              <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#7C4B27]">
                <span className="font-semibold block mb-0.5">Master Joiner&apos;s Note:</span>
                <span className="font-normal">{product.craftsmanshipNotes}</span>
              </div>
            </Reveal>
          </motion.div>

          {/* Right Column: Details, Customizer, Actions (Sticky) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE_LUXE }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E5E4] shadow-xl space-y-6">
              {/* Category, Title & Actions */}
              <div>
                <div className="flex items-center justify-between text-xs text-[#7C4B27] uppercase tracking-wider font-semibold mb-2">
                  <span>{product.categoryLabel}</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handleShare}
                      className="p-1.5 rounded-full hover:bg-[#FAFAF9] text-[#6B6560] hover:text-black transition-colors"
                      title="Share piece"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-1.5 rounded-full hover:bg-[#FAFAF9] transition-colors ${
                        isWishlisted ? 'text-[#A0741A]' : 'text-[#6B6560] hover:text-[#A0741A]'
                      }`}
                      title={isWishlisted ? 'Remove from wishlist' : 'Save piece'}
                    >
                      <motion.span
                        key={isWishlisted ? 'on' : 'off'}
                        initial={{ scale: 0.4 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 14 }}
                        className="block"
                      >
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                      </motion.span>
                    </motion.button>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl text-[#1C1917] font-semibold leading-tight">
                  <TextReveal text={product.name} onMount delay={0.35} />
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-[#57534E] font-normal">
                  {product.tagline}
                </p>

                <AnimatePresence>
                  {isCopied && (
                    <motion.span
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="text-xs text-[#4A5B47] font-medium block mt-1"
                    >
                      Link copied to clipboard!
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-3">
                  <motion.span
                    key={`${selectedWood}-${selectedFinish}-${selectedFabric}`}
                    initial={{ scale: 1.08, color: '#A0741A' }}
                    animate={{ scale: 1, color: '#1C1917' }}
                    transition={{ duration: 0.6, ease: EASE_LUXE }}
                    className="text-3xl font-semibold text-[#1C1917] origin-left inline-block"
                  >
                    ₹{product.price.toLocaleString('en-IN')}
                  </motion.span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#78716C] line-through font-normal">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-xs text-[#4A5B47] bg-[#4A5B47]/10 px-2.5 py-0.5 rounded-full font-medium">
                    Atelier Direct Pricing
                  </span>
                </div>
              </div>

              {/* Step 1: Wood Selection */}
              <div className="pt-4 border-t border-[#F0EFED]">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] mb-2.5">
                  1. Select Hardwood Timber: <span className="font-normal text-[#7C4B27]">{selectedWood}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {product.woodOptions.map((wood) => (
                    <motion.button
                      key={wood}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setSelectedWood(wood)}
                      className={`relative p-2.5 rounded-xl border text-xs font-medium text-left transition-colors flex items-center justify-between ${
                        selectedWood === wood
                          ? 'border-[#4A2E1E] text-white shadow-sm'
                          : 'border-[#E7E5E4] text-[#4A2E1E] bg-[#FAFAF9] hover:bg-white'
                      }`}
                    >
                      {selectedWood === wood && (
                        <motion.span
                          layoutId="product-wood-select"
                          className="absolute inset-0 rounded-[11px] bg-[#4A2E1E]"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10 truncate">{wood}</span>
                      <AnimatePresence>
                        {selectedWood === wood && (
                          <motion.span
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0 }}
                            className="relative z-10 flex-shrink-0"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Step 2: Finish Tone */}
              <div className="pt-4 border-t border-[#F0EFED]">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] mb-2.5">
                  2. Select Hand-Applied Finish: <span className="font-normal text-[#7C4B27]">{selectedFinish}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.finishOptions.map((finish) => (
                    <motion.button
                      key={finish}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedFinish(finish)}
                      className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${
                        selectedFinish === finish
                          ? 'border-[#A0741A] bg-[#A0741A]/10 text-[#7C4B27] font-semibold'
                          : 'border-[#E7E5E4] text-[#44403C] hover:bg-[#FAFAF9]'
                      }`}
                    >
                      {finish}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Step 3: Fabric if available */}
              {product.fabricOptions && product.fabricOptions.length > 0 && (
                <div className="pt-4 border-t border-[#F0EFED]">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] mb-2.5">
                    3. Select Upholstery: <span className="font-normal text-[#7C4B27]">{selectedFabric}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.fabricOptions.map((fabric) => (
                      <motion.button
                        key={fabric}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedFabric(fabric)}
                        className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${
                          selectedFabric === fabric
                            ? 'border-[#4A2E1E] bg-[#4A2E1E] text-white font-medium'
                            : 'border-[#E7E5E4] text-[#44403C] hover:bg-[#FAFAF9]'
                        }`}
                      >
                        {fabric}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Dimensions Editor */}
              <div className="pt-4 border-t border-[#F0EFED] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-[#A0741A]" /> Custom Dimensions
                  </span>
                  <span className="text-xs text-[#4A5B47] font-medium">Bespoke Sizing Allowed</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-xs text-[#6B6560] block uppercase">Width</label>
                    <input
                      type="text"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(e.target.value)}
                      className="w-full p-2 rounded-lg bg-[#FAFAF9] border border-[#E7E5E4] text-xs font-medium text-[#1C1917] focus:outline-none focus:border-[#A0741A]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#6B6560] block uppercase">Depth</label>
                    <input
                      type="text"
                      value={customDepth}
                      onChange={(e) => setCustomDepth(e.target.value)}
                      className="w-full p-2 rounded-lg bg-[#FAFAF9] border border-[#E7E5E4] text-xs font-medium text-[#1C1917] focus:outline-none focus:border-[#A0741A]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#6B6560] block uppercase">Height</label>
                    <input
                      type="text"
                      value={customHeight}
                      onChange={(e) => setCustomHeight(e.target.value)}
                      className="w-full p-2 rounded-lg bg-[#FAFAF9] border border-[#E7E5E4] text-xs font-medium text-[#1C1917] focus:outline-none focus:border-[#A0741A]"
                    />
                  </div>
                </div>

                <textarea
                  rows={2}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Need special wall anchoring, cable holes, or room alcove adjustments? Note it here..."
                  className="w-full p-2.5 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#A0741A]"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-[#F0EFED]">
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={handleAddToCart}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Add to Bespoke Quote Basket
                </Button>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={generateWhatsAppInquiry()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Instant Studio Quote via WhatsApp</span>
                </motion.a>

                <div className="text-center">
                  <Link
                    href="/contact"
                    className="text-xs text-[#7C4B27] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>Request Free In-Home Laser Site Measurement</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Trust Guarantees */}
              <div className="grid grid-cols-3 gap-2 text-xs text-[#57534E] pt-4 border-t border-[#F0EFED]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A0741A]" />
                  <span>15-Year Warranty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#A0741A]" />
                  <span>White Glove Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RotateCw className="w-3.5 h-3.5 text-[#A0741A]" />
                  <span>100% Solid Timber</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Curations */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#E7E5E4]">
            <Reveal className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#A0741A] font-semibold block mb-1">
                  Cohesive Aesthetics
                </span>
                <h2 className="text-3xl text-[#1C1917] font-semibold">
                  <TextReveal text="Matching Pieces in this Room" />
                </h2>
              </div>
              <Link
                href={`/collections?category=${product.category}`}
                className="text-xs uppercase tracking-wider font-semibold text-[#7C4B27] hover:underline flex items-center gap-1"
              >
                <span>View All {product.categoryLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Reveal>

            <Stagger stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <StaggerItem key={rel.id} variant="scale">
                  <ProductCard product={rel} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}
      </div>
    </div>
  );
}
