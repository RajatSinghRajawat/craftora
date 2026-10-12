'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../motion';

const REVIEWS = [
  { author: 'Sunaina M.', city: 'New Delhi', text: 'Two years on, the teak looks even better.' },
  { author: 'Rajesh S.', city: 'Mumbai', text: 'Exact sizes, tight joints, honest advice.' },
  { author: 'Devika K.', city: 'Bengaluru', text: 'Seeing it in 3D first made choosing easy.' },
];

const Stars = () => (
  <div className="flex gap-0.5 text-[#1C1917]" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-current" />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
        <Reveal distance={20}>
          <p className="text-6xl font-semibold tracking-[-0.04em] text-[#1C1917]">4.9</p>
          <div className="mt-2">
            <Stars />
          </div>
          <p className="mt-2 text-sm text-[#78716C]">From 2,400+ happy homes</p>
        </Reveal>

        <Stagger stagger={0.1} className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {REVIEWS.map((r) => (
            <StaggerItem key={r.author}>
              <figure className="h-full rounded-3xl bg-white p-6 flex flex-col justify-between gap-6">
                <blockquote className="text-lg font-medium leading-snug text-[#1C1917]">“{r.text}”</blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-[#F3EFE8] text-[#7C4B27] text-sm font-semibold flex items-center justify-center">
                    {r.author.charAt(0)}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-[#1C1917]">{r.author}</span>
                    <span className="block text-[#78716C]">{r.city}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
