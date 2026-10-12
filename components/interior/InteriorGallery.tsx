'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INTERIOR_DESIGNS, INTERIOR_ROOMS, INTERIOR_STYLES, InteriorRoom, InteriorStyle } from '@/data/interiorData';
import DesignCard from './DesignCard';
import { EASE_LUXE } from '../motion';

type RoomFilter = InteriorRoom | 'All';
type StyleFilter = InteriorStyle | 'All';

/** Filterable grid of interior designs by room type and design style. */
export default function InteriorGallery() {
  const [room, setRoom] = useState<RoomFilter>('All');
  const [style, setStyle] = useState<StyleFilter>('All');

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
              <motion.div
                layout
                key={d.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE_LUXE }}
              >
                <DesignCard design={d} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
