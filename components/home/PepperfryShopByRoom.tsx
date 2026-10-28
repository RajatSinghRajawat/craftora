'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Star, Check, Sparkles, Ruler } from 'lucide-react';
import { FURNITURE_ITEMS } from '@/data/furnitureData';
import { useCart } from '@/context/CartContext';

const ROOMS = [
  {
    id: 'living',
    name: 'Living Room',
    subtitle: 'Sculptural Comfort & Organic Wood',
    image: '/images/hero-living.jpg',
    spots: [
      { id: 'crf-01', name: 'The Solace Curved Armchair', price: '₹48,500', x: 28, y: 68 },
      { id: 'crf-02', name: 'The Zenith Low Plinth Sofa', price: '₹1,18,000', x: 65, y: 55 },
    ],
    items: ['crf-13', 'crf-02', 'crf-01'],
  },
  {
    id: 'bedroom',
    name: 'Master Bedroom',
    subtitle: 'Quiet Minimalist Sanctuaries',
    image: '/images/category-bedroom.jpg',
    spots: [
      { id: 'crf-04', name: 'The Sereno Slat Platform Bed', price: '₹82,000', x: 50, y: 58 },
      { id: 'crf-10', name: 'The Haven Hydraulic Bed', price: '₹89,000', x: 75, y: 45 },
    ],
    items: ['crf-04', 'crf-10', 'crf-06'],
  },
  {
    id: 'dining',
    name: 'Dining Hall',
    subtitle: 'Gathering Around Natural Timber Slabs',
    image: '/images/category-dining.jpg',
    spots: [
      { id: 'crf-03', name: 'The Aethel Live-Edge Dining Table', price: '₹94,000', x: 45, y: 62 },
      { id: 'crf-08', name: 'The Nordic Curved Dining Chair', price: '₹36,000', x: 75, y: 70 },
    ],
    items: ['crf-03', 'crf-08', 'crf-11'],
  },
  {
    id: 'office',
    name: 'Executive Study',
    subtitle: 'Quiet Focus with Natural Grain Desk',
    image: '/images/category-office.jpg',
    spots: [
      { id: 'crf-07', name: 'The Apex Executive Desk', price: '₹68,000', x: 52, y: 60 },
      { id: 'crf-12', name: 'The Aeris Walnut Swivel Chair', price: '₹42,000', x: 75, y: 65 },
    ],
    items: ['crf-07', 'crf-12'],
  },
  {
    id: 'media',
    name: 'TV Lounge',
    subtitle: 'Acoustic Wood Backdrops & Floating Credenzas',
    image: '/images/category-tv-unit.jpg',
    spots: [
      { id: 'crf-05', name: 'The Lumina Acoustic Console', price: '₹76,000', x: 50, y: 55 },
    ],
    items: ['crf-05', 'crf-01'],
  },
];

export default function PepperfryShopByRoom() {
  const [activeRoomId, setActiveRoomId] = useState('living');
  const [activeSpot, setActiveSpot] = useState<string | null>(null);
  const { addToCart } = useCart();
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const currentRoom = ROOMS.find((r) => r.id === activeRoomId) || ROOMS[0];
  const roomProducts = currentRoom.items
    .map((id) => FURNITURE_ITEMS.find((p) => p.id === id))
    .filter(Boolean);

  const handleQuickAdd = (product: any) => {
    addToCart(product);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <section className="py-14 bg-[#FAF8F5]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7C4B27] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Curated Interior Spaces</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1B18]">
              Shop By Room · Styled Sanctuaries
            </h2>
            <p className="text-xs sm:text-sm text-[#8E857C] mt-1">
              Click on the hotspots in each room to explore and add handcrafted artisan pieces.
            </p>
          </div>

          <Link
            href="/custom-studio"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E8E2D8] hover:border-[#C29B38] text-xs font-bold text-[#1F1B18] transition-colors self-start md:self-auto shadow-xs"
          >
            <Ruler className="w-3.5 h-3.5 text-[#7C4B27]" />
            <span>Customize Room in 3D</span>
          </Link>
        </div>

        {/* Room Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-4">
          {ROOMS.map((room) => (
            <button
              key={room.id}
              type="button"
              onClick={() => {
                setActiveRoomId(room.id);
                setActiveSpot(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeRoomId === room.id
                  ? 'bg-[#4A2E1E] text-white shadow-md'
                  : 'bg-white text-[#5E5750] border border-[#E8E2D8] hover:border-[#C29B38] hover:text-[#1F1B18]'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Interactive Room Banner with Hotspots */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-md bg-[#1F1B18]">
            <Image
              src={currentRoom.image}
              alt={currentRoom.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Room Name Badge */}
            <div className="absolute top-5 left-5 z-10 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8E2D8] shadow-xs">
              <span className="text-xs font-bold text-[#1F1B18]">
                {currentRoom.name} · {currentRoom.subtitle}
              </span>
            </div>

            {/* Shoppable Hotspot Pins */}
            {currentRoom.spots.map((spot) => {
              const isOpen = activeSpot === spot.id;
              return (
                <div
                  key={spot.id}
                  className="absolute z-20"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveSpot(isOpen ? null : spot.id)}
                    aria-label={`View ${spot.name}`}
                    className="relative -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-[#1F1B18] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <span className="absolute inset-0 rounded-full bg-white/70 animate-ping" />
                    <Plus className={`relative w-4 h-4 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute left-1/2 bottom-8 -translate-x-1/2 w-56 bg-white rounded-2xl shadow-2xl p-3 border border-[#E8E2D8] z-30"
                      >
                        <p className="text-xs font-bold text-[#1F1B18] line-clamp-1">{spot.name}</p>
                        <p className="text-xs font-extrabold text-[#7C4B27] mt-0.5">{spot.price}</p>
                        <Link
                          href={`/product/${spot.id}`}
                          className="mt-2.5 inline-flex items-center justify-center gap-1 w-full py-1.5 rounded-lg bg-[#4A2E1E] text-white text-[11px] font-bold"
                        >
                          View Details <ArrowRight className="w-3 h-3" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Curated Room Products Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#8E857C]">
                Included in this Styled Room ({roomProducts.length} Pieces)
              </h3>

              {roomProducts.map((prod: any) => {
                const isAdded = addedItem === prod.id;
                return (
                  <div
                    key={prod.id}
                    className="bg-white rounded-2xl p-3 sm:p-4 border border-[#E8E2D8] shadow-xs hover:shadow-md transition-shadow flex items-center gap-3 sm:gap-4"
                  >
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#FAF8F5] shrink-0 border border-[#F0ECE4]">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-[#7C4B27]">
                        <Star className="w-3 h-3 fill-[#C29B38] text-[#C29B38]" />
                        <span>{prod.rating}</span>
                        <span className="text-[#8E857C] font-normal">({prod.reviewCount})</span>
                      </div>
                      <Link href={`/product/${prod.id}`}>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1F1B18] hover:text-[#7C4B27] transition-colors line-clamp-1 leading-snug">
                          {prod.name}
                        </h4>
                      </Link>
                      <p className="text-xs font-extrabold text-[#1F1B18] mt-1">
                        ₹{prod.price.toLocaleString('en-IN')}{' '}
                        {prod.originalPrice && (
                          <span className="text-[11px] text-[#8E857C] line-through font-normal">
                            ₹{prod.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleQuickAdd(prod)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 ${
                        isAdded
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#FAF5EE] hover:bg-[#F5EBDD] text-[#4A2E1E] border border-[#E8DCCB]'
                      }`}
                    >
                      {isAdded ? <Check className="w-4 h-4" /> : '+ Add'}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Bottom Consultation Box */}
            <div className="bg-[#FAF5EE] border border-[#E8DCCB] rounded-2xl p-4 mt-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1F1B18]">
                    Want this complete look tailored for your floorplan?
                  </h4>
                  <p className="text-[11px] text-[#5E5750] mt-0.5">
                    Our atelier team visits with wood samples &amp; 3D renders.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="px-3.5 py-2 bg-[#4A2E1E] hover:bg-[#382317] text-white rounded-xl text-xs font-bold whitespace-nowrap transition-colors"
                >
                  Book Free Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
