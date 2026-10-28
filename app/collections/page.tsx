'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {
  Filter,
  SlidersHorizontal,
  X,
  Sparkles,
  ArrowUpDown,
  Search,
  Check,
} from 'lucide-react';
import ProductCard from '@/components/common/ProductCard';
import SectionHeader from '@/components/common/SectionHeader';
import Badge from '@/components/common/Badge';
import { FURNITURE_ITEMS, CATEGORIES, WOOD_FINISHES } from '@/data/furnitureData';
import { useCart } from '@/context/CartContext';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE_LUXE, Reveal } from '@/components/motion';

function CollectionsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const filterParam = searchParams.get('filter');

  const { wishlist } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [selectedWood, setSelectedWood] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(250000);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);
  const [onlyWishlist, setOnlyWishlist] = useState<boolean>(filterParam === 'wishlist');

  // Filter and sort items
  const filteredProducts = useMemo(() => {
    let result = [...FURNITURE_ITEMS];

    // Filter by Wishlist
    if (onlyWishlist) {
      result = result.filter((item) => wishlist.includes(item.id));
    }

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Filter by Wood Type
    if (selectedWood !== 'all') {
      result = result.filter((item) =>
        item.woodOptions.some((w) => w.toLowerCase().includes(selectedWood.toLowerCase()))
      );
    }

    // Filter by Price
    result = result.filter((item) => item.price <= maxPrice);

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q) ||
          item.tagline.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedWood, maxPrice, sortBy, searchQuery, onlyWishlist, wishlist]);

  const activeCategoryMeta = CATEGORIES.find((c) => c.id === selectedCategory);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedWood('all');
    setMaxPrice(250000);
    setSortBy('featured');
    setSearchQuery('');
    setOnlyWishlist(false);
  };

  return (
    <div className="bg-[#FAFAF9] min-h-screen py-10 sm:py-16">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal distance={16} duration={0.7}>
            <Badge variant="gold" size="sm" className="mb-3">
              Atelier Furniture Catalog
            </Badge>
          </Reveal>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
              transition={{ duration: 0.55, ease: EASE_LUXE }}
            >
              <h1 className="text-4xl sm:text-5xl text-[#1C1917] font-semibold tracking-tight">
                {activeCategoryMeta ? activeCategoryMeta.label : 'Curated Solid Hardwood Pieces'}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#44403C] font-normal leading-relaxed">
                {activeCategoryMeta
                  ? activeCategoryMeta.description
                  : 'Every single piece is handcrafted to order from kiln-dried timber. Select a design below to customize wood, dimensions, and finishes.'}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Search & Sort Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE_LUXE }}
          className="p-4 rounded-2xl bg-white border border-[#E7E5E4] shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#6B6560] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chairs, dining, desks..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#A0741A]"
            />
          </div>

          {/* Quick Category Buttons on Desktop */}
          <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto">
            {[{ id: 'all', label: 'All' }, ...CATEGORIES].map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  whileTap={{ scale: 0.94 }}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    isActive ? 'text-white' : 'bg-[#FAFAF9] text-[#44403C] hover:bg-[#F5F5F4]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="collections-category-pill"
                      className="absolute inset-0 rounded-full bg-[#4A2E1E] shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Filter Toggle & Sort Dropdown */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E7E5E4] text-xs font-medium text-[#4A2E1E]"
            >
              <Filter className="w-3.5 h-3.5 text-[#A0741A]" />
              <span>Filters</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6B6560] hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-2 px-3 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#1C1917] focus:outline-none focus:border-[#A0741A]"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Main Layout: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Sidebar Filter Panel (Desktop & Mobile Drawer) */}
          <motion.aside
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE_LUXE }}
            className={`lg:col-span-1 bg-white p-6 rounded-3xl border border-[#E7E5E4] shadow-sm space-y-6 ${
              showMobileFilters ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#F0EFED]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#A0741A]" />
                <h3 className="text-lg font-semibold text-[#1C1917]">Refine Pieces</h3>
              </div>
              <button
                onClick={resetFilters}
                className="text-xs text-[#7C4B27] hover:underline font-medium"
              >
                Reset All
              </button>
            </div>

            {/* Wishlist Quick Filter */}
            <div>
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-[#4A2E1E]">
                <input
                  type="checkbox"
                  checked={onlyWishlist}
                  onChange={(e) => setOnlyWishlist(e.target.checked)}
                  className="rounded text-[#A0741A] focus:ring-[#A0741A]"
                />
                <span>Show Saved Wishlist Pieces ({wishlist.length})</span>
              </label>
            </div>

            {/* Room / Category Filter */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6B6560] block mb-2.5">
                Room &amp; Category
              </span>
              <div className="space-y-1.5">
                {[
                  { id: 'all', label: 'All Categories', itemCount: FURNITURE_ITEMS.length },
                  ...CATEGORIES,
                ].map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`relative w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between ${
                        isActive
                          ? 'text-[#7C4B27] font-semibold'
                          : 'text-[#44403C] hover:bg-[#FAFAF9] hover:translate-x-1'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="collections-sidebar-category"
                          className="absolute inset-0 rounded-lg bg-[#FAFAF9] border-l-2 border-[#A0741A]"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{cat.label}</span>
                      <span className="relative z-10 text-xs text-[#A89D8F]">{cat.itemCount}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hardwood Filter */}
            <div className="pt-4 border-t border-[#F0EFED]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6B6560] block mb-2.5">
                Hardwood Timber
              </span>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedWood('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all ${
                    selectedWood === 'all'
                      ? 'bg-[#FAFAF9] text-[#7C4B27] font-semibold'
                      : 'text-[#44403C] hover:bg-[#FAFAF9]'
                  }`}
                >
                  All Woods
                </button>
                {WOOD_FINISHES.map((wood) => (
                  <button
                    key={wood.id}
                    onClick={() => setSelectedWood(wood.name)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-2 ${
                      selectedWood === wood.name
                        ? 'bg-[#FAFAF9] text-[#7C4B27] font-semibold'
                        : 'text-[#44403C] hover:bg-[#FAFAF9]'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-black/15 flex-shrink-0"
                      style={{ backgroundColor: wood.colorHex }}
                    />
                    <span>{wood.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider Filter */}
            <div className="pt-4 border-t border-[#F0EFED]">
              <div className="flex justify-between text-xs mb-2">
                <span className="font-semibold uppercase tracking-wider text-[#6B6560]">
                  Max Price:
                </span>
                <motion.span
                  key={maxPrice}
                  initial={{ opacity: 0.4, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="font-bold text-[#1C1917]"
                >
                  ₹{maxPrice.toLocaleString('en-IN')}
                </motion.span>
              </div>
              <input
                type="range"
                min={30000}
                max={250000}
                step={5000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-[#E7E5E4] rounded-lg appearance-none cursor-pointer accent-[#4A2E1E]"
              />
              <div className="flex justify-between text-xs text-[#A89D8F] mt-1">
                <span>₹30,000</span>
                <span>₹2,50,000+</span>
              </div>
            </div>
          </motion.aside>

          {/* Product Grid Area */}
          <div className="lg:col-span-3">
            {/* Active Filters Summary */}
            <div className="flex items-center justify-between text-xs text-[#6B6560] mb-6">
              <span>Showing {filteredProducts.length} bespoke pieces</span>
              {(selectedCategory !== 'all' || selectedWood !== 'all' || searchQuery || onlyWishlist) && (
                <button
                  onClick={resetFilters}
                  className="text-[#7C4B27] font-medium hover:underline flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" /> Clear active filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE_LUXE }}
                className="p-12 text-center rounded-3xl bg-white border border-[#E7E5E4]"
              >
                <h3 className="text-2xl text-[#1C1917] font-semibold">No matching furniture pieces</h3>
                <p className="mt-2 text-xs text-[#6B6560] max-w-sm mx-auto">
                  Try adjusting your wood or category filters, or use our Custom 3D Studio to build exactly what you have in mind.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#4A2E1E] text-white text-xs uppercase tracking-wider font-medium"
                >
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, i) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                      transition={{ duration: 0.6, delay: Math.min(i, 8) * 0.05, ease: EASE_LUXE }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAF9]">
          <div className="w-8 h-8 border-2 border-[#7C4B27] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <CollectionsContent />
    </Suspense>
  );
}
