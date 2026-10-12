'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal, ParallaxImage, Stagger, StaggerItem, EASE_LUXE } from '../motion';

const POINTS = [
  {
    title: 'Proper joinery',
    text: 'Mortise and tenon joints instead of screws and brackets, so the frame stays tight for decades.',
  },
  {
    title: 'Wood that’s dried right',
    text: 'Every board is kiln-dried to 8–10% moisture, so it doesn’t crack or warp when the seasons change.',
  },
  {
    title: 'Sourced responsibly',
    text: 'We buy timber from managed plantations that replant what they cut.',
  },
];

export default function ArtisanStorySection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <figure className="lg:col-span-7">
          <motion.div
            initial={{ clipPath: 'inset(10% 10% 10% 10% round 16px)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 16px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: EASE_LUXE }}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#EDE8E0]"
          >
            <ParallaxImage>
              <Image
                src="/images/story-artisan.jpg"
                alt="A carpenter sanding the curved frame of an armchair in the Craftora workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </ParallaxImage>
          </motion.div>
          <figcaption className="mt-3 text-sm text-[#78716C]">
            Sanding the back frame of a Solace armchair. Each one takes about 18 hours of hand work.
          </figcaption>
        </figure>

        <div className="lg:col-span-5">
          <Reveal distance={24}>
            <p className="text-sm font-medium text-[#A0741A] mb-3">Our workshop</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.025em] leading-[1.1] text-[#1C1917]">
              Made slowly, by people who know wood.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#57534E] leading-relaxed">
              Our carpenters have been doing this for three generations. We cut, join and finish every piece by hand,
              so no two are exactly alike — the small marks in the grain are part of the wood, not a flaw.
            </p>
          </Reveal>

          <Stagger stagger={0.1} className="mt-8 divide-y divide-[#E7E2DA] border-y border-[#E7E2DA]">
            {POINTS.map((p, i) => (
              <StaggerItem key={p.title} className="py-5 flex gap-5">
                <span className="text-sm font-medium tabular-nums text-[#A8A29E] pt-0.5">0{i + 1}</span>
                <div>
                  <h3 className="text-base font-semibold text-[#1C1917]">{p.title}</h3>
                  <p className="mt-1 text-sm text-[#57534E] leading-relaxed">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2} className="mt-8">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1C1917] border-b border-[#1C1917]/30 pb-1 hover:border-[#1C1917] transition-colors"
            >
              Read our story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
