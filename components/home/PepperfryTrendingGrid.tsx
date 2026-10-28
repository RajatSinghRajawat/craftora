'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { FURNITURE_ITEMS } from '@/data/furnitureData';
import ProductCard from '../common/ProductCard';

const TABS = [
  { id: 'bestsellers', label: 'Bestsellers' },
  { id: 'new', label: 'New Arrivals' },
  { id: 'teak', label: 'Solid Burma Teak' },
  { id: 'under50k', label: 'Under ₹50,000' },
];

export default function PepperfryTrendingGrid() {
  const [activeTab, setActiveTab] = useState('bestsellers');

  const getFilteredItems = () => {
    switch (activeTab) {
      case 'new':
        return FURNITURE_ITEMS.filter((item) => item.isNewArrival || item.id === 'crf-05' || item.id === 'crf-11');
      case 'teak':
        return FURNITURE_ITEMS.filter((item) => item.woodOptions.some((w) => w.toLowerCase().includes('teak')));
      case 'under50k':
        return FURNITURE_ITEMS.filter((item) => item.price <= 50000);
      case 'bestsellers':
      default:
        return FURNITURE_ITEMS.filter((item) => item.isBestSeller || item.isSignature);
    }
  };

  const items = getFilteredItems().slice(0, 8);

  return (
    <section className="py-14 bg-white border-b border-[#F0ECE4]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7C4B27] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>What India Loves</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1B18]">
              Trending Furniture &amp; Signature Pieces
            </h2>
            <p className="text-xs sm:text-sm text-[#8E857C] mt-1">
              Hand-picked by our master craftsmen, delivered straight to your living space.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none self-start md:self-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#4A2E1E] text-white shadow-sm'
                    : 'bg-[#FAF8F5] text-[#5E5750] border border-[#E8E2D8] hover:border-[#C29B38] hover:text-[#1F1B18]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FAF5EE] hover:bg-[#F5EBDD] border border-[#E8DCCB] text-[#4A2E1E] text-xs font-bold transition-colors"
          >
            <span>Browse Full Catalog ({FURNITURE_ITEMS.length}+ Handcrafted Designs)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
