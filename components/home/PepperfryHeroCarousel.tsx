'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  Sparkles,
  Ruler,
  ArrowRight,
  Flame,
  Award,
} from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    tag: 'FESTIVE ARTISAN SALE · UP TO 45% OFF',
    title: 'The Grand Solid Wood Furniture Festival',
    description:
      'Handcrafted in 100% seasoned Burma Teak & American Walnut. Enjoy flat 35% off + extra 10% with code CRAFT10.',
    primaryBtn: { text: 'Shop Festive Deals', href: '/collections?filter=deals' },
    secondaryBtn: { text: 'Explore Burma Teak', href: '/collections?category=living-room' },
    image: '/images/hero-living.jpg',
    accentBadge: 'Save up to ₹25,000 Today',
  },
  {
    id: 2,
    tag: 'REAL-TIME 3D CONFIGURATOR',
    title: 'Designed By You. Crafted By Master Artisans.',
    description:
      'Customize dimensions, timber grains, brass trims and bouclé fabrics in interactive 3D with instant cost estimation.',
    primaryBtn: { text: 'Launch 3D Studio', href: '/custom-studio' },
    secondaryBtn: { text: 'Book Free Measurement', href: '/contact' },
    image: '/images/story-artisan.jpg',
    accentBadge: 'Interactive 3D Studio',
  },
  {
    id: 3,
    tag: 'RESTFUL SANCTUARIES · 15-YEAR WARRANTY',
    title: 'Architectural Platform Beds & Hydraulic Suites',
    description:
      'Minimalist floating headboards, acoustic wood slats, and effortless German pneumatic hydraulic storage.',
    primaryBtn: { text: 'Explore Beds from ₹82,000', href: '/collections?category=bedroom' },
    secondaryBtn: { text: 'Custom Wardrobe Suites', href: '/collections?category=wardrobes' },
    image: '/images/category-bedroom.jpg',
    accentBadge: 'German Hydraulic Tech',
  },
  {
    id: 4,
    tag: 'SUSTAINABLY SOURCED TIMBER',
    title: 'Heritage Live-Edge Solid Wood Dining Slabs',
    description:
      'Cut from 3-inch thick timber logs preserving natural contours, butterfly joints, and chatoyant grain luster.',
    primaryBtn: { text: 'Shop Dining Slabs', href: '/collections?category=dining' },
    secondaryBtn: { text: 'Curved Bouclé Chairs', href: '/collections?category=dining' },
    image: '/images/category-dining.jpg',
    accentBadge: 'Single Timber Trunk Slabs',
  },
];

const TRUST_PILLARS = [
  {
    icon: ShieldCheck,
    title: '35+ Years Heritage Craft',
    subtitle: 'Kiln-dried Burma Teak & Walnut with 15-Yr Warranty',
  },
  {
    icon: Truck,
    title: 'Jaipur Workshop Direct',
    subtitle: 'White-glove delivery & installation across India',
  },
  {
    icon: Award,
    title: '2,000+ Happy Customers',
    subtitle: 'Furnished 50+ buildings & 5 luxury hotels',
  },
  {
    icon: Ruler,
    title: 'Made to Measure & 20+ Finishes',
    subtitle: 'Bespoke custom dimensions & 20+ wood tones',
  },
];

export default function PepperfryHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* ============================================================== */}
      {/* HERO BANNER CAROUSEL CONTAINER (FULL WIDTH EDGE TO EDGE)       */}
      {/* ============================================================== */}
      <div
        className="relative w-full px-0 sm:px-2 lg:px-3 pt-0 sm:pt-2 pb-4 sm:pb-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative h-[480px] sm:h-[540px] lg:h-[600px] w-full overflow-hidden shadow-xl sm:rounded-2xl border-y sm:border border-[#E8E2D8] bg-[#1F1B18]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              {/* Background Image with Dark Gradient Vignette */}
              <Image
                src={SLIDES[currentSlide].image}
                alt={SLIDES[currentSlide].title}
                fill
                priority
                className="object-cover object-center opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

              {/* Slide Content */}
              <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-3xl text-white z-10">
                
                {/* Accent Ribbon Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5]/15 backdrop-blur-md border border-white/20 text-xs font-bold text-[#E8DCCB] mb-3 self-start">
                  <Flame className="w-3.5 h-3.5 text-[#C29B38]" />
                  <span>{SLIDES[currentSlide].tag}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                  {SLIDES[currentSlide].title}
                </h1>

                <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#D7CEBE] leading-relaxed max-w-2xl font-normal">
                  {SLIDES[currentSlide].description}
                </p>

                {/* Promotional Pill Badge */}
                <div className="mt-4 inline-flex items-center gap-2 self-start bg-[#C29B38]/20 border border-[#C29B38]/40 px-3 py-1 rounded-lg text-xs font-bold text-[#F5EBDD]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                  <span>{SLIDES[currentSlide].accentBadge}</span>
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={SLIDES[currentSlide].primaryBtn.href}
                    className="px-7 py-3.5 rounded-xl bg-[#C29B38] hover:bg-[#D4AF37] text-[#1F1B18] font-bold text-sm transition-all shadow-md flex items-center gap-2"
                  >
                    <span>{SLIDES[currentSlide].primaryBtn.text}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={SLIDES[currentSlide].secondaryBtn.href}
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm transition-all"
                  >
                    {SLIDES[currentSlide].secondaryBtn.text}
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Previous / Next Arrow Controls */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-8 bg-[#C29B38]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* PEPPERFRY-STYLE 4 TRUST PILLARS BAR (FULL WIDTH)               */}
      {/* ============================================================== */}
      <div className="w-full px-4 sm:px-8 lg:px-12 pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E2D8] shadow-xs">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-[#FAF8F5] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF5EE] border border-[#E8DCCB] flex items-center justify-center text-[#7C4B27] shrink-0">
                  <Icon className="w-5 h-5 text-[#4A2E1E]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F1B18] leading-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-[#8E857C] leading-snug mt-0.5">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
