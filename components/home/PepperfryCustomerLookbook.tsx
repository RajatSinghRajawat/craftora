'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, CheckCircle, ArrowRight, Heart, MapPin } from 'lucide-react';

const STORIES = [
  {
    id: 1,
    homeowner: 'Vikram & Priya Mehta',
    city: 'Bandra West, Mumbai',
    quote:
      '“The Solace curved chair transformed our penthouse living room into a sanctuary. The bouclé fabric and solid walnut curve feel like pure bespoke poetry.”',
    rating: 5,
    roomImage: '/images/hero-living.jpg',
    productFeatured: 'The Solace Curved Armchair',
    productLink: '/product/crf-01',
    productPrice: '₹48,500',
  },
  {
    id: 2,
    homeowner: 'Dr. Ananya Ray',
    city: 'Indiranagar, Bengaluru',
    quote:
      '“We ordered the 8-seater live-edge teak table. The 3-inch thickness and natural butterfly joints are a conversation starter at every dinner party.”',
    rating: 5,
    roomImage: '/images/category-dining.jpg',
    productFeatured: 'The Aethel Live-Edge Dining Slab',
    productLink: '/product/crf-03',
    productPrice: '₹94,000',
  },
  {
    id: 3,
    homeowner: 'Rohit Singhania',
    city: 'Golf Course Road, Gurugram',
    quote:
      '“The acoustic slat TV backdrop and floating console concealed every wire seamlessly. The warm indirect LED illumination is simply magical.”',
    rating: 5,
    roomImage: '/images/category-tv-unit.jpg',
    productFeatured: 'The Lumina Acoustic Console',
    productLink: '/product/crf-05',
    productPrice: '₹76,000',
  },
];

export default function PepperfryCustomerLookbook() {
  return (
    <section className="py-14 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7C4B27] mb-1">
              <Star className="w-3.5 h-3.5 fill-[#C29B38] text-[#C29B38]" />
              <span>Real Homes · Real Customers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1B18]">
              Pepperfry &amp; Craftora Customer Stories
            </h2>
            <p className="text-xs sm:text-sm text-[#8E857C] mt-1">
              See how over 2,400+ homes across India style their handcrafted solid wood furniture.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#4A2E1E] hover:underline self-start md:self-auto"
          >
            <span>View Full Customer Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3-Column Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Room Image */}
                <div className="relative aspect-[16/10] bg-[#FAF5EE] overflow-hidden">
                  <Image
                    src={story.roomImage}
                    alt={story.homeowner}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C29B38]" />
                    <span>{story.city}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C29B38] text-[#C29B38]" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" /> Verified Homeowner
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5E5750] italic leading-relaxed">
                    {story.quote}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F0ECE4]">
                    <h4 className="text-xs font-bold text-[#1F1B18]">{story.homeowner}</h4>
                    <p className="text-[11px] text-[#8E857C]">{story.city}</p>
                  </div>
                </div>
              </div>

              {/* Product Tagged Banner */}
              <div className="p-4 bg-[#FAF5EE] border-t border-[#E8DCCB] flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <span className="block text-[10px] uppercase font-bold text-[#8E857C]">Featured Piece</span>
                  <span className="block text-xs font-bold text-[#1F1B18] truncate">
                    {story.productFeatured}
                  </span>
                </div>
                <Link
                  href={story.productLink}
                  className="px-3 py-1.5 bg-[#4A2E1E] hover:bg-[#382317] text-white rounded-lg text-xs font-bold whitespace-nowrap transition-colors shrink-0"
                >
                  Shop Piece
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
