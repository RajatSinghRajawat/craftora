'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TreePine, ShieldCheck, Ruler, Home } from 'lucide-react';
import { CountUp, ParallaxImage, Stagger, StaggerItem } from '../motion';

const TILES = [
  { icon: TreePine, value: <CountUp to={100} suffix="%" />, label: 'Solid wood. No MDF.' },
  { icon: ShieldCheck, value: <CountUp to={15} suffix=" yrs" />, label: 'Frame warranty' },
  { icon: Ruler, value: 'Any size', label: 'Made to fit your room' },
  { icon: Home, value: 'Free', label: 'Home visit & measuring' },
];

export default function WhyCraftora() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Stagger stagger={0.08} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StaggerItem className="col-span-2 lg:row-span-2">
          <Link href="/about" className="group relative block h-full min-h-[360px] lg:min-h-[480px] rounded-3xl overflow-hidden bg-[#EDE8E0]">
            <ParallaxImage>
              <Image
                src="/images/story-artisan.jpg"
                alt="A Craftora carpenter shaping an armchair frame by hand"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </ParallaxImage>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute left-6 right-6 bottom-6 text-white">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-tight">
                Made by hand, in our own workshop.
              </h2>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">
                Our story <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        </StaggerItem>

        {TILES.map(({ icon: Icon, value, label }) => (
          <StaggerItem key={label}>
            <div className="h-full min-h-[170px] lg:min-h-[232px] rounded-3xl bg-[#F5F2ED] p-5 sm:p-6 flex flex-col justify-between">
              <Icon className="w-6 h-6 text-[#7C4B27]" strokeWidth={1.6} />
              <div>
                <p className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#1C1917]">{value}</p>
                <p className="mt-1 text-sm text-[#78716C]">{label}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
