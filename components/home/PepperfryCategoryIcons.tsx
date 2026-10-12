'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

const POPULAR_CATEGORIES = [
  {
    name: 'Sofas & Couches',
    subtitle: 'From ₹48,500',
    image: '/images/product-sofa-sectional.jpg',
    href: '/collections?category=living-room',
    tag: 'Trending',
  },
  {
    name: 'Solid Teak Beds',
    subtitle: 'From ₹82,000',
    image: '/images/category-bedroom.jpg',
    href: '/collections?category=bedroom',
    tag: 'Best Value',
  },
  {
    name: 'Dining Sets',
    subtitle: 'From ₹36,000',
    image: '/images/category-dining.jpg',
    href: '/collections?category=dining',
    tag: 'Live Edge',
  },
  {
    name: 'Acoustic TV Units',
    subtitle: 'From ₹76,000',
    image: '/images/category-tv-unit.jpg',
    href: '/collections?category=tv-units',
    tag: 'New',
  },
  {
    name: 'Custom Wardrobes',
    subtitle: 'From ₹1,85,000',
    image: '/images/category-wardrobes.jpg',
    href: '/collections?category=wardrobes',
    tag: 'Modular',
  },
  {
    name: 'Executive Desks',
    subtitle: 'From ₹68,000',
    image: '/images/category-office.jpg',
    href: '/collections?category=office-furniture',
    tag: 'Ergonomic',
  },
  {
    name: 'Accent Chairs',
    subtitle: 'From ₹48,500',
    image: '/images/product-chair-solace.jpg',
    href: '/collections?category=living-room',
    tag: 'Bouclé',
  },
  {
    name: 'Coffee Tables',
    subtitle: 'From ₹32,000',
    image: '/images/hero-living.jpg',
    href: '/collections?category=living-room',
    tag: 'Nesting',
  },
];

export default function PepperfryCategoryIcons() {
  return (
    <section className="py-8 bg-white border-b border-[#F0ECE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7C4B27] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Shop By Category</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1B18]">
              Explore Handcrafted Collections
            </h2>
          </div>
          <Link
            href="/collections"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#4A2E1E] hover:underline"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Circular / Rounded Category Strip */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4">
          {POPULAR_CATEGORIES.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="group flex flex-col items-center text-center p-2 rounded-2xl hover:bg-[#FAF8F5] transition-all duration-300"
            >
              <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full overflow-hidden bg-[#FAF5EE] border-2 border-[#E8E2D8] group-hover:border-[#C29B38] group-hover:scale-105 transition-all duration-300 shadow-xs mb-2">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {cat.tag && (
                  <span className="absolute bottom-0 inset-x-0 bg-[#4A2E1E]/80 backdrop-blur-xs text-white text-[9px] font-bold py-0.5 tracking-tight">
                    {cat.tag}
                  </span>
                )}
              </div>
              <h3 className="text-xs font-bold text-[#1F1B18] group-hover:text-[#7C4B27] transition-colors leading-tight line-clamp-1">
                {cat.name}
              </h3>
              <p className="text-[10px] text-[#8E857C] font-medium mt-0.5">
                {cat.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
