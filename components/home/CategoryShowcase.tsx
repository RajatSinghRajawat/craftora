'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/data/furnitureData';
import { Reveal } from '../motion';

export default function CategoryShowcase() {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) =>
    scroller.current?.scrollBy({ left: dir * scroller.current.clientWidth * 0.7, behavior: 'smooth' });

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-end justify-between gap-4">
        <Reveal distance={20}>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#1C1917]">Shop by room</h2>
        </Reveal>
        <div className="hidden sm:flex gap-2">
          {[-1, 1].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => scrollBy(d)}
              aria-label={d < 0 ? 'Previous' : 'Next'}
              className="w-11 h-11 rounded-full border border-[#E7E5E4] flex items-center justify-center text-[#1C1917] hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-colors"
            >
              {d < 0 ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 sm:px-6 lg:px-[max(2rem,calc((100%-80rem)/2+2rem))] scroll-px-4 sm:scroll-px-6 lg:scroll-px-[max(2rem,calc((100%-80rem)/2+2rem))]"
      >
        {CATEGORIES.map((cat, i) => (
          <Reveal key={cat.id} distance={30} delay={Math.min(i, 3) * 0.06} className="snap-start shrink-0 w-[75%] sm:w-[44%] lg:w-[calc((80rem-4rem-2rem)/3.3)]">
            <Link href={`/collections?category=${cat.id}`} className="group block">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#F3EFE8]">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 44vw, 380px"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
                <span className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1C1917] shadow-sm">
                  {cat.label}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
