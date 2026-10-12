'use client';

// Pinned, scroll-driven 3D chapter: as the visitor scrolls, each signature piece
// spins a full 360° on a plinth and then hands over to the next one.

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowRight, Rotate3d } from 'lucide-react';
import { FURNITURE_ITEMS } from '@/data/furnitureData';
import { fabricHex, modelFor, woodHex } from '@/data/materials';
import { EASE_LUXE } from '../motion';

const ShowcaseScene = dynamic(() => import('../3d/ShowcaseScene'), { ssr: false });

const PIECES = ['crf-01', 'crf-02', 'crf-03', 'crf-04', 'crf-05'].map((id) => {
  const p = FURNITURE_ITEMS.find((item) => item.id === id)!;
  return {
    product: p,
    scene: { kind: modelFor(p), wood: woodHex(p.woodOptions[0]), fabric: fabricHex(p.fabricOptions?.[0]) },
  };
});
const SCENE_PIECES = PIECES.map((p) => p.scene);
const N = PIECES.length;

const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;

function ChapterBar({ progress, index, active, onSelect, label }: {
  progress: MotionValue<number>;
  index: number;
  active: boolean;
  onSelect: () => void;
  label: string;
}) {
  const fill = useTransform(progress, [index / N, (index + 1) / N], [0, 1]);
  return (
    <button type="button" onClick={onSelect} className="group flex-1 text-left" aria-label={`Show ${label}`}>
      <span className="block h-[3px] rounded-full bg-[#E7E5E4] overflow-hidden">
        <motion.span style={{ scaleX: fill }} className="block h-full origin-left bg-[#1C1917]" />
      </span>
      <span
        className={`hidden md:block mt-2.5 text-xs font-medium truncate transition-colors ${
          active ? 'text-[#1C1917]' : 'text-[#A8A29E] group-hover:text-[#57534E]'
        }`}
      >
        {label}
      </span>
    </button>
  );
}

export default function ScrollShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const i = Math.min(N - 1, Math.max(0, Math.floor(v * N)));
    if (i !== active) setActive(i);
  });

  // Live viewing angle for the current piece (0–360°)
  const angle = useTransform(scrollYProgress, (v) => `${Math.round((((v * N) % 1) + 1) % 1 * 360)}°`);

  const scrollTo = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + travel * ((i + 0.15) / N), behavior: 'smooth' });
  };

  const { product } = PIECES[active];

  return (
    <section id="showcase" ref={sectionRef} className="relative bg-white" style={{ height: `${N * 95 + 40}vh` }}>
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Giant backdrop word */}
        <div aria-hidden className="pointer-events-none absolute inset-0 lg:left-[34%] flex items-start pt-[14vh] lg:pt-0 lg:items-center justify-center overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={product.id}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.7, ease: EASE_LUXE }}
              className="font-display italic leading-none text-[28vw] lg:text-[15vw] text-[#F3F1EC] select-none whitespace-nowrap lg:-translate-y-[22%]"
            >
              {product.name.replace(/^The /, '').split(' ')[0]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* 3D stage */}
        <div className="absolute inset-x-0 top-[7%] h-[46%] lg:inset-y-0 lg:top-0 lg:h-auto lg:left-[34%]">
          <ShowcaseScene progress={scrollYProgress} pieces={SCENE_PIECES} />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col pointer-events-none">
          {/* Header */}
          <div className="pt-6 lg:pt-10 flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#78716C]">
              <Rotate3d className="w-4 h-4 text-[#A0741A]" />
              Keep scrolling to turn each piece
            </span>
            <span className="text-xs font-medium tabular-nums text-[#78716C]">
              Angle <motion.span className="inline-block w-9 text-right text-[#1C1917]">{angle}</motion.span>
            </span>
          </div>

          {/* Copy */}
          <div className="mt-auto lg:my-auto max-w-md pb-4 lg:pb-0 pointer-events-auto">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={product.id}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06 } },
                  exit: { transition: { staggerChildren: 0.03 } },
                }}
              >
                {[
                  <span key="n" className="text-sm font-medium text-[#A0741A]">
                    {String(active + 1).padStart(2, '0')} / {String(N).padStart(2, '0')} · {product.categoryLabel}
                  </span>,
                  <h2 key="t" className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-[#1C1917] leading-[1.05]">
                    {product.name.replace(/^The /, '')}
                  </h2>,
                  <div key="c" className="mt-6 flex items-center gap-4">
                    <Link
                      href={`/product/${product.id}`}
                      className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1C1917] text-white text-sm font-semibold hover:bg-[#2A2522] transition-colors"
                    >
                      Explore in 3D
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <span className="text-sm text-[#57534E]">
                      from <span className="font-semibold text-[#1C1917]">{inr(product.price)}</span>
                    </span>
                  </div>,
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_LUXE } },
                      exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
                    }}
                  >
                    {node}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Chapter progress */}
          <div className="pb-24 md:pb-10 md:pr-52 flex gap-2 sm:gap-4 pointer-events-auto">
            {PIECES.map(({ product: p }, i) => (
              <ChapterBar
                key={p.id}
                progress={scrollYProgress}
                index={i}
                active={i === active}
                label={p.name.replace(/^The /, '')}
                onSelect={() => scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
