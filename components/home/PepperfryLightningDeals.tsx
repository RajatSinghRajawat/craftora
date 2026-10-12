'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Flame,
  Clock,
  Heart,
  Star,
  ShoppingBag,
  Rotate3d,
  ArrowRight,
  Sparkles,
  Check,
} from 'lucide-react';
import { FURNITURE_ITEMS, FurnitureItem } from '@/data/furnitureData';
import { useCart } from '@/context/CartContext';

const DEAL_CATEGORIES = [
  { id: 'all', label: 'All Deals' },
  { id: 'living-room', label: 'Living Room' },
  { id: 'bedroom', label: 'Bedroom' },
  { id: 'dining', label: 'Dining' },
  { id: 'office-furniture', label: 'Home Office' },
];

export default function PepperfryLightningDeals() {
  const { toggleWishlist, isInWishlist, addToCart, setQuickViewProduct } = useCart();
  const [activeTab, setActiveTab] = useState('all');
  const [addedItem, setAddedItem] = useState<string | null>(null);

  // Live countdown timer state (hours, minutes, seconds)
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 12, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TOP_DEAL_IDS = ['crf-13', 'crf-02', 'crf-04', 'crf-03', 'crf-14', 'crf-05'];
  const filteredItems =
    activeTab === 'all'
      ? TOP_DEAL_IDS.map((id) => FURNITURE_ITEMS.find((item) => item.id === id)!).filter(Boolean)
      : FURNITURE_ITEMS.filter((item) => item.category === activeTab);

  const handleAddToCart = (item: FurnitureItem) => {
    addToCart(item);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with live timer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#F0ECE4]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-1.5">
              <Flame className="w-4 h-4 fill-red-600 animate-bounce" />
              <span>Limited Time · Today Only</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1B18]">
              ⚡ Lightning Deals &amp; Steal Offers
            </h2>
            <p className="text-xs sm:text-sm text-[#8E857C] mt-1">
              Top artisan solid wood picks at festive price cuts with 15-year warranty.
            </p>
          </div>

          {/* Pepperfry-style countdown timer box */}
          <div className="flex items-center gap-2.5 bg-[#FAF5EE] border border-[#E8DCCB] px-4 py-2.5 rounded-2xl shadow-xs self-start md:self-auto">
            <Clock className="w-4 h-4 text-[#7C4B27]" />
            <span className="text-xs font-bold text-[#5E5750]">Ends in:</span>
            <div className="flex items-center gap-1 font-mono text-xs font-extrabold text-[#4A2E1E]">
              <span className="bg-[#4A2E1E] text-white px-2 py-1 rounded-md">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              <span>:</span>
              <span className="bg-[#4A2E1E] text-white px-2 py-1 rounded-md">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              <span>:</span>
              <span className="bg-red-700 text-white px-2 py-1 rounded-md animate-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
          {DEAL_CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#4A2E1E] text-white shadow-sm'
                  : 'bg-[#FAF8F5] text-[#5E5750] border border-[#E8E2D8] hover:border-[#C29B38] hover:text-[#1F1B18]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {filteredItems.map((item) => {
            const isWishlisted = isInWishlist(item.id);
            const discountPct = item.originalPrice
              ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
              : 15;
            const savings = (item.originalPrice || item.price * 1.18) - item.price;
            const monthlyEmi = Math.round(item.price / 12);
            const isRecentlyAdded = addedItem === item.id;

            return (
              <div
                key={item.id}
                className="group relative bg-white border border-[#E8E2D8] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Product Image Box */}
                <div className="relative aspect-[4/3] bg-[#FAF8F5] overflow-hidden">
                  <Link href={`/product/${item.id}`} className="block w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>

                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-red-600 text-white text-[11px] font-extrabold shadow-sm tracking-wide">
                      {discountPct}% OFF
                    </span>
                    {item.isBestSeller && (
                      <span className="px-2 py-0.5 rounded-md bg-[#4A2E1E] text-[#F5EBDD] text-[10px] font-bold shadow-xs">
                        BESTSELLER
                      </span>
                    )}
                  </div>

                  {/* Wishlist Heart */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(item.id)}
                    aria-label="Save item"
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#1F1B18] shadow-sm flex items-center justify-center transition-all"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isWishlisted ? 'fill-red-600 text-red-600' : 'text-[#5E5750]'
                      }`}
                    />
                  </button>

                  {/* Quick Look in 3D Button */}
                  <button
                    type="button"
                    onClick={() => setQuickViewProduct(item)}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 hover:bg-white text-[#1F1B18] text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <Rotate3d className="w-3.5 h-3.5 text-[#7C4B27]" />
                    <span>Quick View &amp; 3D</span>
                  </button>
                </div>

                {/* Content Box */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Rating */}
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C4B27]">
                        {item.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1 text-[#1F1B18] font-bold">
                        <Star className="w-3.5 h-3.5 fill-[#C29B38] text-[#C29B38]" />
                        <span>{item.rating}</span>
                        <span className="text-[#8E857C] font-normal">({item.reviewCount})</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <Link href={`/product/${item.id}`} className="block">
                      <h3 className="text-base font-bold text-[#1F1B18] group-hover:text-[#7C4B27] transition-colors line-clamp-1 leading-snug">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-[#8E857C] line-clamp-1 mt-0.5">
                      {item.tagline}
                    </p>

                    {/* Timber options preview */}
                    <div className="mt-2.5 flex items-center gap-1.5">
                      <span className="text-[10px] text-[#8E857C] font-medium">Wood:</span>
                      <span className="text-[11px] font-bold text-[#4A2E1E] bg-[#FAF5EE] px-2 py-0.5 rounded border border-[#E8DCCB]">
                        {item.woodOptions[0] || 'Solid Teak'}
                      </span>
                      {item.woodOptions.length > 1 && (
                        <span className="text-[10px] text-[#8E857C]">
                          +{item.woodOptions.length - 1} more
                        </span>
                      )}
                    </div>

                    {/* Pricing with strikethrough & savings */}
                    <div className="mt-3 pt-3 border-t border-[#F0ECE4] flex items-baseline gap-2">
                      <span className="text-lg font-extrabold text-[#1F1B18]">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-[#8E857C] line-through font-normal">
                          ₹{item.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        Save ₹{Math.round(savings).toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* EMI tag */}
                    <p className="text-[11px] text-[#5E5750] mt-1">
                      No-Cost EMI from <strong className="text-[#1F1B18]">₹{monthlyEmi.toLocaleString('en-IN')}/mo</strong>
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 pt-3 border-t border-[#F0ECE4] flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(item)}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs ${
                        isRecentlyAdded
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#4A2E1E] hover:bg-[#382317] text-white'
                      }`}
                    >
                      {isRecentlyAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <Link
                      href={`/product/${item.id}`}
                      className="py-2.5 px-3.5 rounded-xl border border-[#E8E2D8] hover:border-[#C29B38] bg-[#FAF8F5] text-xs font-bold text-[#1F1B18] transition-colors"
                      title="View Details"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all deals link */}
        <div className="mt-8 text-center">
          <Link
            href="/collections?filter=deals"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FAF5EE] hover:bg-[#F5EBDD] border border-[#E8DCCB] text-[#4A2E1E] text-xs font-bold transition-colors"
          >
            <span>Explore All 35+ Festive Lightning Deals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
