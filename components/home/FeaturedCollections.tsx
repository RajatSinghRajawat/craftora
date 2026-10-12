'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../common/ProductCard';
import { FURNITURE_ITEMS } from '@/data/furnitureData';
import { Reveal, Stagger, StaggerItem } from '../motion';

const PICKS = ['crf-01', 'crf-02', 'crf-04', 'crf-07'].map((id) => FURNITURE_ITEMS.find((p) => p.id === id)!);

export default function FeaturedCollections() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <Reveal distance={20}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#1C1917]">Bestsellers</h2>
          </Reveal>
          <Link href="/collections" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#1C1917]">
            Shop all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <Stagger stagger={0.08} className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10">
          {PICKS.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
