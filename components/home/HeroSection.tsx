'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Plus, Star } from 'lucide-react';
import { FURNITURE_ITEMS } from '@/data/furnitureData';
import { TextReveal, EASE_LUXE } from '../motion';

// Shoppable spots on the hero photo (percent of the image)
const SPOTS = [
  { id: 'crf-01', x: 33, y: 76 },
  { id: 'crf-02', x: 68, y: 63 },
].map((s) => ({ ...s, product: FURNITURE_ITEMS.find((p) => p.id === s.id)! }));

function Hotspot({ spot }: { spot: (typeof SPOTS)[number] }) {
  const [open, setOpen] = useState(false);
  const { product } = spot;
  return (
    <div
      className="absolute hidden sm:block"
      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={`Show ${product.name}`}
        className="relative -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-[#1C1917] shadow-lg flex items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full bg-white/70 animate-ping" />
        <Plus className={`relative w-4 h-4 transition-transform ${open ? 'rotate-45' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE_LUXE }}
            className="absolute left-1/2 bottom-6 -translate-x-1/2 w-56"
          >
            <Link href={`/product/${product.id}`} className="flex items-center gap-3 p-2 pr-3 rounded-2xl bg-white shadow-xl">
              <span className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#F3EFE8] shrink-0">
                <Image src={product.image} alt="" fill sizes="48px" className="object-cover" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-[#1C1917] truncate">{product.name.replace(/^The /, '')}</span>
                <span className="block text-sm text-[#78716C]">₹{product.price.toLocaleString('en-IN')}</span>
              </span>
              <ArrowRight className="w-4 h-4 text-[#1C1917] shrink-0" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HeroSection() {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.94, 1]);

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_LUXE }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#EFEDEA] text-sm text-[#57534E]"
        >
          <Star className="w-3.5 h-3.5 fill-[#1C1917] text-[#1C1917]" />
          4.9 · Loved in 2,400+ homes
        </motion.div>

        <h1 className="mt-6 text-[2.75rem] sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#1C1917]">
          <TextReveal text="Furniture made" onMount delay={0.1} />{' '}
          <TextReveal
            as="div"
            text="for your home."
            onMount
            delay={0.25}
            className="block font-display font-normal italic tracking-[-0.01em] text-[#7C4B27]"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: EASE_LUXE }}
          className="mt-5 text-lg text-[#78716C]"
        >
          Solid wood. Your size. Delivered in about 5 weeks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE_LUXE }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-3"
        >
          <Link
            href="/collections"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1C1917] text-white text-sm font-semibold hover:bg-[#2A2522] transition-colors"
          >
            Shop now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#F5F3EF] text-[#1C1917] text-sm font-semibold hover:bg-[#EDE9E3] transition-colors"
          >
            Book a free visit
          </Link>
        </motion.div>
      </div>

      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 pb-8">
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE_LUXE }}
          style={{ scale }}
          className="relative aspect-[4/5] sm:aspect-[16/9] rounded-[28px] overflow-hidden bg-[#F3EFE8]"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/hero-living.jpg"
              alt="Living room furnished with the Solace armchair and Zenith sofa"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {SPOTS.map((s) => (
            <Hotspot key={s.id} spot={s} />
          ))}
          <span className="absolute left-4 bottom-4 rounded-full bg-white/90 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-[#1C1917] sm:hidden">
            Solace Armchair · Zenith Sofa
          </span>
        </motion.div>
      </div>
    </section>
  );
}
