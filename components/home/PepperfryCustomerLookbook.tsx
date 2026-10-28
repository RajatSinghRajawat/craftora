'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, CheckCircle, ArrowRight, Heart, MapPin } from 'lucide-react';

const STORIES = [
  {
    id: 1,
    homeowner: 'Vikram & Priya Rathore',
    city: 'Civil Lines, Jaipur',
    quote:
      '“The Solace curved chair transformed our living room into a royal sanctuary. The seasoned wood curve and bespoke upholstery crafted at the Jaipur workshop feel like pure poetry.”',
    rating: 5,
    roomImage: '/images/hero-living.jpg',
    productFeatured: 'The Solace Curved Armchair',
    productLink: '/product/crf-01',
    productPrice: '₹48,500',
  },
  {
    id: 2,
    homeowner: 'Dr. Ananya Sharma',
    city: 'C-Scheme, Jaipur',
    quote:
      '“We ordered the 8-seater live-edge teak dining table directly from Surender ji. The 3-inch slab thickness and natural butterfly joints are a conversation starter at every dinner.”',
    rating: 5,
    roomImage: '/images/category-dining.jpg',
    productFeatured: 'The Aethel Live-Edge Dining Slab',
    productLink: '/product/crf-03',
    productPrice: '₹94,000',
  },
  {
    id: 3,
    homeowner: 'Rajesh & Meenakshi Shekhawat',
    city: 'Vaishali Nagar, Jaipur',
    quote:
      '“The acoustic slat TV backdrop and floating console concealed every wire seamlessly. The Craftora carpentry team did flawless fitting in our villa within hours.”',
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
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7C4B27] mb-1">
              <Star className="w-3.5 h-3.5 fill-[#C29B38] text-[#C29B38]" />
              <span>Real Homes · 2,000+ Happy Customers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1B18]">
              Craftora Atelier Living Spaces
            </h2>
            <p className="text-xs sm:text-sm text-[#8E857C] mt-1">
              Handcrafted in solid wood at our Jaipur atelier for bespoke residences, villas and heritage hotels.
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
