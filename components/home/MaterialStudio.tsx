'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { WOOD_FINISHES } from '@/data/furnitureData';
import { Reveal, EASE_LUXE } from '../motion';

const WoodPlank3D = dynamic(() => import('../3d/WoodPlank3D'), { ssr: false });

export default function MaterialStudio() {
  const [selected, setSelected] = useState(WOOD_FINISHES[0]);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Materials"
          title="Four woods. Solid all the way through."
          subtitle="Pick one to see the colour and grain. Not sure? We'll post you free samples."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Wood list */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-[#EFEDEA] border-y border-[#EFEDEA]">
            {WOOD_FINISHES.map((wood) => {
              const active = selected.id === wood.id;
              return (
                <button
                  key={wood.id}
                  type="button"
                  onClick={() => setSelected(wood)}
                  className="group py-5 flex items-center gap-4 text-left"
                >
                  <span
                    className={`w-10 h-10 rounded-full shrink-0 transition-shadow ${active ? 'ring-2 ring-offset-2 ring-[#1C1917]' : ''}`}
                    style={{ backgroundColor: wood.colorHex }}
                  />
                  <span className="flex-1 min-w-0">
                    <span className={`block text-lg font-semibold transition-colors ${active ? 'text-[#1C1917]' : 'text-[#78716C] group-hover:text-[#1C1917]'}`}>
                      {wood.name}
                    </span>
                    <span className="block text-sm text-[#A8A29E] truncate">{wood.origin}</span>
                  </span>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-all ${active ? 'text-[#1C1917] translate-x-0' : 'text-transparent -translate-x-2'}`} />
                </button>
              );
            })}
          </div>

          {/* Live sample */}
          <Reveal distance={30} className="lg:col-span-7 flex flex-col rounded-2xl bg-[#FAF8F5] overflow-hidden">
            <div className="relative h-64 sm:h-80">
              <WoodPlank3D color={selected.colorHex} />
              <span className="absolute left-4 top-4 text-xs text-[#78716C]">Live 3D sample — move your mouse over it</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE_LUXE }}
                className="p-6 sm:p-8 pt-2 sm:pt-2"
              >
                <h3 className="text-2xl font-semibold text-[#1C1917]">{selected.name}</h3>
                <p className="mt-2 text-[15px] text-[#57534E] leading-relaxed">{selected.characteristics}</p>
                <p className="mt-2 text-[15px] text-[#57534E] leading-relaxed">{selected.grainTexture}.</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm text-[#78716C]">Kiln-dried · Finished with natural oils & beeswax</span>
                  <Link href="/contact" className="text-sm font-semibold text-[#1C1917] underline underline-offset-4 decoration-1">
                    Request free samples
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
