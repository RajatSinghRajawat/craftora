'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { Stagger, StaggerItem } from '../motion';

const STEPS = [
  {
    title: 'Tell us about your space',
    text: 'Send a photo and rough measurements, or we’ll come over and measure for free.',
  },
  {
    title: 'Pick the wood and fabric',
    text: 'Choose from teak, walnut, oak or sheesham. We can post you samples to see at home.',
  },
  {
    title: 'We build it',
    text: 'Your piece is made in our workshop over 3–5 weeks. We send photos along the way.',
  },
  {
    title: 'Delivered and set up',
    text: 'Our own team brings it in, assembles it and takes the packaging away.',
  },
];

export default function CustomProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'start 35%'] });
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="From your room to your door in about 5 weeks"
          subtitle="Every piece is made to order, so you get the size and finish that actually suits your home."
        />

        <div ref={ref} className="relative">
          <div aria-hidden className="hidden lg:block absolute top-[11px] left-0 right-0 h-px bg-[#EFEDEA]">
            <motion.div style={{ scaleX: line }} className="h-full origin-left bg-[#1C1917]" />
          </div>
          <Stagger stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {STEPS.map((s, i) => (
              <StaggerItem key={s.title} className="relative">
                <span className="relative z-10 inline-flex w-6 h-6 rounded-full bg-white border border-[#1C1917] text-[11px] font-semibold items-center justify-center text-[#1C1917]">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#1C1917]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#57534E] leading-relaxed max-w-xs">{s.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
