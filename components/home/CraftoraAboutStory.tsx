'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Sparkles,
  TreePine,
  CheckCircle2,
  ArrowRight,
  Phone,
  Store,
  Clock,
  Layers,
  Flame,
  Building2,
  Hotel,
  Users
} from 'lucide-react';
import Badge from '@/components/common/Badge';
import { CRAFTORA_WOOD_FINISHES_20 } from '@/data/furnitureData';

export default function CraftoraAboutStory() {
  const [activeStoryTab, setActiveStoryTab] = useState<'heritage' | 'process' | 'finishes' | 'commercial'>('heritage');

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-b border-[#E8E2D8]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {/* Header Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <Badge variant="gold" size="sm" className="mb-3">
              Craftora Jaipur Atelier · Since 1990
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1B18] tracking-tight leading-tight">
              Furniture for the <span className="text-[#7C4B27] italic font-serif">Way You Live.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5E5750] mt-3 font-normal leading-relaxed">
              Three and a half decades of uncompromised solid wood craftsmanship. Founded by <strong>Surender Singh Rajora</strong> at our Chomu Tatiyawas workshop in Jaipur, bringing timber seasoning, hand joinery, and architectural interior solutions under one roof.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#4A2E1E] hover:bg-[#382317] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <span>Explore Full 35-Year Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919950757127"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F5F0E8] border border-[#E8E2D8] text-[#1F1B18] px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#7C4B27]" />
              <span>Talk to Founder</span>
            </a>
          </div>
        </div>

        {/* 4 PDF Benchmark Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D8] shadow-xs hover:border-[#C29B38] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] flex items-center justify-center text-[#7C4B27] mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1B18] block">35+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C4B27] mt-1 block">Years Heritage</span>
            <p className="text-xs text-[#5E5750] mt-1">Master woodcraft founded in 1990 in Jaipur</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D8] shadow-xs hover:border-[#C29B38] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] flex items-center justify-center text-[#7C4B27] mb-3">
              <Users className="w-5 h-5" />
            </div>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1B18] block">2,000+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C4B27] mt-1 block">Happy Customers</span>
            <p className="text-xs text-[#5E5750] mt-1">Homes furnished with generational furniture</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D8] shadow-xs hover:border-[#C29B38] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] flex items-center justify-center text-[#7C4B27] mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1B18] block">50+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C4B27] mt-1 block">Buildings Furnished</span>
            <p className="text-xs text-[#5E5750] mt-1">High-rises, luxury villas, and corporate parks</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D8] shadow-xs hover:border-[#C29B38] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] flex items-center justify-center text-[#7C4B27] mb-3">
              <Hotel className="w-5 h-5" />
            </div>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1B18] block">5 Hotels</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C4B27] mt-1 block">Luxury Suites Done</span>
            <p className="text-xs text-[#5E5750] mt-1">Complete turnkey guest room & lounge woodwork</p>
          </div>
        </div>

        {/* Interactive Story Showcase Tabs */}
        <div className="bg-white rounded-3xl border border-[#E8E2D8] p-6 sm:p-10 shadow-sm">
          
          {/* Tab Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-[#F0ECE4]">
            <button
              type="button"
              onClick={() => setActiveStoryTab('heritage')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeStoryTab === 'heritage'
                  ? 'bg-[#4A2E1E] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#5E5750] hover:text-[#1F1B18]'
              }`}
            >
              <TreePine className="w-4 h-4" />
              <span>Founder & 35-Year Heritage</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveStoryTab('process')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeStoryTab === 'process'
                  ? 'bg-[#4A2E1E] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#5E5750] hover:text-[#1F1B18]'
              }`}
            >
              <Flame className="w-4 h-4 text-[#C29B38]" />
              <span>Kiln Drying & Solid Wood Ethos</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveStoryTab('finishes')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeStoryTab === 'finishes'
                  ? 'bg-[#4A2E1E] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#5E5750] hover:text-[#1F1B18]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#7C4B27]" />
              <span>20 Authentic Wood Finishes</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveStoryTab('commercial')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeStoryTab === 'commercial'
                  ? 'bg-[#4A2E1E] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#5E5750] hover:text-[#1F1B18]'
              }`}
            >
              <Award className="w-4 h-4 text-[#2D5A27]" />
              <span>Turnkey Hotel & Villa Projects</span>
            </button>
          </div>

          {/* TAB 1: HERITAGE */}
          {activeStoryTab === 'heritage' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <Badge variant="gold" size="sm">The Jaipur Founder</Badge>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1B18]">
                  From a Single Chisel in Jaipur to Rajasthan&apos;s Revered Atelier
                </h3>
                <p className="text-sm sm:text-base text-[#5E5750] leading-relaxed">
                  Founded by <strong>Surender Singh Rajora</strong>, Craftora was built on one uncompromising principle: furniture should outlive generations, not trend cycles.
                </p>
                <p className="text-sm text-[#5E5750] leading-relaxed">
                  While modern fast-furniture brands rely on chemical-heavy MDF, chipboard, and paper veneers that deteriorate within 3 years, Craftora still sources whole logs of seasoned Burma Teak, American Walnut, and Rosewood. Each log is kiln-dried in our Jaipur facility to withstand Rajasthan&apos;s dry heat and monsoon humidity without a millimeter of warpage.
                </p>

                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#1F1B18]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                    <span>Single workshop provenance: Chomu Tatiyawas Toll Plaza, Jaipur</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#1F1B18]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                    <span>Open Atelier Policy: You can walk in and inspect your furniture during crafting</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#1F1B18]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                    <span>Direct direct-from-workshop pricing with no retail middleman markup</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#7C4B27] hover:bg-[#633a1e] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-xs"
                  >
                    <Store className="w-4 h-4" />
                    <span>Visit Our Jaipur Workshop</span>
                  </Link>
                  <span className="text-xs text-[#8E857C]">Mon - Sun: 10:00 AM – 8:30 PM</span>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-md bg-[#FAF8F5]">
                <Image
                  src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80"
                  alt="Craftora Master Woodworking Atelier Jaipur"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C29B38] block mb-1">
                    Authentic Joinery Benchmark
                  </span>
                  <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                    &ldquo;When you touch seasoned solid wood, you feel the calm of nature transformed by honest hands.&rdquo;
                  </p>
                  <p className="text-xs text-white/80 mt-2">— Surender Singh Rajora, Founder</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KILN DRYING PROCESS */}
          {activeStoryTab === 'process' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <Badge variant="gold" size="sm">Scientific Seasoning</Badge>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1B18]">
                  The Kiln Drying Difference: Why Cheaper Furniture Cracks
                </h3>
                <p className="text-sm text-[#5E5750] leading-relaxed">
                  Raw freshly felled timber contains up to 60% water content. If cut immediately, changing seasonal humidity causes wood to shrink, twist, squeak, and split at the joints within months.
                </p>
                <p className="text-sm text-[#5E5750] leading-relaxed">
                  At Craftora&apos;s Jaipur seasoning facility, every timber plank undergoes a rigorous 45-day controlled kiln seasoning cycle until its equilibrium moisture drops to an exact <strong>10%–12%</strong>.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E2D8]">
                    <span className="text-xs font-bold uppercase text-[#7C4B27] block">Commercial Retail Furniture</span>
                    <p className="text-xs text-[#5E5750] mt-1">Air dried or chemically rushed. Warps and develops cracks within 1-2 monsoons.</p>
                  </div>
                  <div className="bg-[#FAF5EE] p-4 rounded-2xl border border-[#E8DFD4]">
                    <span className="text-xs font-bold uppercase text-[#2D5A27] block">Craftora Seasoned Wood</span>
                    <p className="text-xs text-[#1F1B18] mt-1">45-day precision kiln dry. Backed by an unconditional 15-year warranty.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/collections"
                    className="inline-flex items-center gap-2 bg-[#4A2E1E] text-white px-5 py-2.5 rounded-full text-xs font-semibold"
                  >
                    <span>Browse 100% Solid Wood Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-md bg-[#FAF8F5]">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
                  alt="Kiln Dried Seasoned Hardwood Planks"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* TAB 3: 20 WOOD FINISHES */}
          {activeStoryTab === 'finishes' && (
            <div>
              <div className="max-w-2xl mb-6">
                <Badge variant="gold" size="sm" className="mb-1">CRAFTORA_v2.pdf Specification</Badge>
                <h3 className="text-2xl font-serif font-bold text-[#1F1B18]">
                  20 Curated Architectural Wood Finishes
                </h3>
                <p className="text-xs sm:text-sm text-[#5E5750] mt-1">
                  Every dining table, sofa, bed, and console can be customized in any of our 20 hand-rubbed organic stains, from raw Clear Coat to Deep Smoked Oak and Ebony.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {CRAFTORA_WOOD_FINISHES_20.map((finish, idx) => (
                  <div
                    key={finish}
                    className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#7C4B27] transition-all flex items-center gap-3"
                  >
                    <span
                      className="w-7 h-7 rounded-full shadow-inner shrink-0 border border-black/10"
                      style={{
                        backgroundColor:
                          idx === 0 ? '#1A1A1A' :
                          idx === 1 ? '#2E2B2A' :
                          idx === 2 ? '#E8D3B9' :
                          idx === 3 ? '#5B2C24' :
                          idx === 4 ? '#C19A6B' :
                          idx === 5 ? '#6E4726' :
                          idx === 6 ? '#8A5D3B' :
                          idx === 7 ? '#4B3621' :
                          idx === 8 ? '#5C4033' :
                          idx === 9 ? '#B5651D' :
                          idx === 10 ? '#4E1609' :
                          idx === 11 ? '#7B2A20' :
                          idx === 12 ? '#D89E48' :
                          idx === 13 ? '#C48A3F' :
                          idx === 14 ? '#954535' :
                          idx === 15 ? '#362B28' :
                          idx === 16 ? '#9C9B98' :
                          idx === 17 ? '#EDEBE6' :
                          idx === 18 ? '#A85A3A' :
                          '#242124'
                      }}
                    />
                    <div>
                      <span className="text-[10px] text-[#8E857C] block font-mono">#{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-xs font-bold text-[#1F1B18] leading-tight block truncate">{finish}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: COMMERCIAL PROJECTS */}
          {activeStoryTab === 'commercial' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <Badge variant="gold" size="sm">Turnkey Projects</Badge>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1B18]">
                  Trusted by 5 Luxury Hotels & Over 50 Commercial Buildings
                </h3>
                <p className="text-sm text-[#5E5750] leading-relaxed">
                  Beyond residential homes, Craftora has engineered custom furniture for 5 boutique heritage resorts and 50+ residential and commercial multi-story developments across Rajasthan.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8]">
                    <div className="flex items-center justify-between">
                      <strong className="text-sm text-[#1F1B18]">Heritage Palace Suites & Spa</strong>
                      <span className="text-xs bg-[#FAF5EE] text-[#7C4B27] px-2.5 py-0.5 rounded-full font-bold">42 Luxury Suites</span>
                    </div>
                    <p className="text-xs text-[#5E5750] mt-1">Carved Teak 4-poster beds, hand-rubbed consoles, and dining pavilions.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8]">
                    <div className="flex items-center justify-between">
                      <strong className="text-sm text-[#1F1B18]">Amber View Boutique Heritage Resort</strong>
                      <span className="text-xs bg-[#FAF5EE] text-[#7C4B27] px-2.5 py-0.5 rounded-full font-bold">28 Guest Rooms</span>
                    </div>
                    <p className="text-xs text-[#5E5750] mt-1">Turnkey lounge seating, solid walnut bar counters, and open-air cabanas.</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 bg-[#4A2E1E] text-white px-5 py-2.5 rounded-full text-xs font-semibold"
                  >
                    <span>View Projects Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-md bg-[#FAF8F5]">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury Hotel Turnkey Woodwork by Craftora"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
