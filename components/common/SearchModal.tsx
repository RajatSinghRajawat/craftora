'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { FURNITURE_ITEMS, CATEGORIES } from '@/data/furnitureData';
import { EASE_LUXE } from '../motion';

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useCart();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = useMemo(() => {
    let items = FURNITURE_ITEMS;
    if (activeCategory !== 'all') {
      items = items.filter((item) => item.category === activeCategory);
    }
    if (!query.trim()) {
      return items.slice(0, 6);
    }
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.woodOptions.some((w) => w.toLowerCase().includes(q))
    );
  }, [query, activeCategory]);

  return (
    <AnimatePresence>
    {isSearchOpen && (
    <motion.div
      key="search-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={closeSearch}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6 flex items-start justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -24, scale: 0.97 }}
        transition={{ duration: 0.45, ease: EASE_LUXE }}
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E7E5E4] overflow-hidden mt-12 sm:mt-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E7E5E4] flex items-center gap-3 bg-[#FAFAF9]">
          <Search className="w-5 h-5 text-[#7C4B27]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search custom chairs, teak dining, wardrobes, tv consoles, walnut desks..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#1C1917] placeholder-[#78716C] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-[#78716C] hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={closeSearch}
            className="px-3 py-1.5 rounded-full text-xs font-medium text-[#57534E] hover:bg-[#F0EFED] transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Category Pills */}
        <div className="px-5 py-3 border-b border-[#F0EFED] flex items-center gap-2 overflow-x-auto bg-white">
          <span className="text-xs uppercase tracking-wider text-[#78716C] font-semibold whitespace-nowrap">
            Rooms:
          </span>
          {[{ id: 'all', label: 'All Pieces' }, ...CATEGORIES].map((cat) => (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.92 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'text-white'
                  : 'bg-[#F5F5F4] text-[#4A2E1E] hover:bg-[#E7E5E4]'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="search-category-pill"
                  className="absolute inset-0 rounded-full bg-[#4A2E1E] shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{cat.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Results */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="flex items-center justify-between text-xs text-[#6B6560] mb-2">
            <span>
              {query.trim()
                ? `Found ${filteredItems.length} matching pieces`
                : 'Featured Signature Pieces'}
            </span>
            <Link
              href="/collections"
              onClick={closeSearch}
              className="text-[#7C4B27] font-medium hover:underline flex items-center gap-1"
            >
              View Full Catalog <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-lg text-[#1C1917] font-semibold">No furniture found matching &quot;{query}&quot;</p>
              <p className="mt-1 text-xs text-[#6B6560]">
                Looking for something completely custom? Our master artisans can build any design.
              </p>
              <Link
                href="/custom-studio"
                onClick={closeSearch}
                className="mt-4 inline-block px-5 py-2.5 rounded-full bg-[#4A2E1E] text-white text-xs font-medium uppercase tracking-wider"
              >
                Open Custom 3D Studio
              </Link>
            </div>
          ) : (
            filteredItems.map((item, i) => (
              <motion.div
                key={`${activeCategory}-${item.id}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: EASE_LUXE }}
              >
              <Link
                href={`/product/${item.id}`}
                onClick={closeSearch}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#FAFAF9] border border-transparent hover:border-[#E7E5E4] transition-all group"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#F5F5F4] flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs uppercase tracking-wider text-[#7C4B27] font-semibold">
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-sm font-semibold text-[#1C1917] group-hover:text-[#7C4B27] transition-colors truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#6B6560] truncate font-normal">{item.tagline}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-semibold text-sm text-[#1C1917] block">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#A67C52] uppercase tracking-wider">
                    Custom Available
                  </span>
                </div>
              </Link>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </motion.div>
    )}
    </AnimatePresence>
  );
}
