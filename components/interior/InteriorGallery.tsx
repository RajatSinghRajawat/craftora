'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Ruler, Wallet, X } from 'lucide-react';
import {
  INTERIOR_DESIGNS,
  INTERIOR_ROOMS,
  INTERIOR_STYLES,
  InteriorDesign,
  InteriorRoom,
  InteriorStyle,
} from '@/data/interiorData';
import { EASE_LUXE } from '../motion';

type RoomFilter = InteriorRoom | 'All';
type StyleFilter = InteriorStyle | 'All';

/** Filterable grid of interior designs by room type and design style. */
export default function InteriorGallery() {
  const [room, setRoom] = useState<RoomFilter>('All');
  const [style, setStyle] = useState<StyleFilter>('All');
  const [selected, setSelected] = useState<InteriorDesign | null>(null);

  const designs = useMemo(
    () =>
      INTERIOR_DESIGNS.filter(
        (d) => (room === 'All' || d.room === room) && (style === 'All' || d.style === style)
      ),
    [room, style]
  );

  const chip = (active: boolean) =>
    `shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors ${
      active
        ? 'bg-[#4A2E1E] text-white border-[#4A2E1E]'
        : 'bg-white text-[#44403C] border-[#E7E5E4] hover:border-[#A0741A]'
    }`;

  return (
    <div>
      {/* Filters */}
      <div className="space-y-4 mb-10">
        <div>
          <p className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold mb-2">Room</p>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {(['All', ...INTERIOR_ROOMS] as RoomFilter[]).map((r) => (
              <button key={r} type="button" onClick={() => setRoom(r)} className={chip(room === r)}>
                {r}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold mb-2">Style</p>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {(['All', ...INTERIOR_STYLES.map((s) => s.name)] as StyleFilter[]).map((s) => (
              <button key={s} type="button" onClick={() => setStyle(s)} className={chip(style === s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
        <p className="text-sm text-[#6B6560]">
          Showing <span className="font-semibold text-[#1C1917]">{designs.length}</span> design
          {designs.length === 1 ? '' : 's'}
        </p>
      </div>

      {/* Grid */}
      {designs.length === 0 ? (
        <div className="text-center py-16 rounded-2xl border border-dashed border-[#D6D3D1] bg-white">
          <p className="text-[#44403C] font-medium">No designs for this combination yet.</p>
          <p className="text-sm text-[#6B6560] mt-1">Our designers can create one just for you.</p>
          <button
            type="button"
            onClick={() => {
              setRoom('All');
              setStyle('All');
            }}
            className="mt-4 text-sm font-semibold text-[#4A2E1E] underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {designs.map((d) => (
              <motion.button
                layout
                key={d.id}
                type="button"
                onClick={() => setSelected(d)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE_LUXE }}
                className="group text-left rounded-2xl overflow-hidden bg-white border border-[#E7E5E4] card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F4]">
                  <Image
                    src={d.image}
                    alt={d.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-semibold text-[#4A2E1E]">
                      {d.room}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#1C1917]/75 backdrop-blur text-[11px] font-semibold text-white">
                      {d.style}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#1C1917] leading-snug">{d.title}</h3>
                  <div className="mt-2 flex items-center gap-4 text-xs text-[#6B6560]">
                    <span className="inline-flex items-center gap-1">
                      <Ruler className="w-3.5 h-3.5 text-[#A0741A]" />
                      {d.area}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Wallet className="w-3.5 h-3.5 text-[#A0741A]" />
                      {d.budget}
                    </span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A2E1E]">
                    View details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: EASE_LUXE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-[#1C1917] hover:bg-white shadow"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative aspect-[16/9] bg-[#F5F5F4]">
                <Image src={selected.image} alt={selected.title} fill sizes="768px" className="object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-wider text-[#A0741A] font-semibold">
                  {selected.room} · {selected.style}
                </p>
                <h3 className="mt-1 text-2xl sm:text-3xl font-semibold text-[#1C1917]">{selected.title}</h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4]">
                    <p className="text-[11px] uppercase tracking-wider text-[#6B6560]">Area</p>
                    <p className="font-semibold text-[#1C1917]">{selected.area}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4]">
                    <p className="text-[11px] uppercase tracking-wider text-[#6B6560]">Estimated budget</p>
                    <p className="font-semibold text-[#1C1917]">{selected.budget}</p>
                  </div>
                </div>
                <p className="mt-5 text-xs uppercase tracking-wider text-[#6B6560] font-semibold mb-2">
                  What&apos;s included
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selected.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 rounded-lg bg-[#FAFAF9] text-xs text-[#4A2E1E] font-medium border border-[#E7E5E4]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/contact?service=interior-design&design=${selected.id}`}
                  className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4A2E1E] hover:bg-[#342014] text-white text-sm font-semibold transition-colors"
                >
                  Get this design for my home
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
