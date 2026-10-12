'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../common/SectionHeader';
import { INTERIOR_STYLES } from '@/data/interiorData';
import { Stagger, StaggerItem } from '../motion';

/** Home page teaser linking into the full Interior Design section. */
export default function InteriorDesignPreview() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Interior Design"
          title="Complete interiors, in every style"
          subtitle="Living rooms, bedrooms, modular kitchens, wardrobes, pooja rooms and more — designed and delivered end-to-end."
          action={{ label: 'Explore all designs', href: '/interior-design' }}
        />
        <Stagger stagger={0.06} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {INTERIOR_STYLES.map((s, i) => (
            <StaggerItem key={s.name} className={i >= 8 ? 'hidden lg:block' : ''}>
              <Link
                href="/interior-design#gallery"
                className="group block relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F5F4]"
              >
                <Image
                  src={s.image}
                  alt={`${s.name} interior design`}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-white font-semibold leading-tight">{s.name}</h3>
                  <p className="text-xs text-[#E7E5E4]">{s.tagline}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
