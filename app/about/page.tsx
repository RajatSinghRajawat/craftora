import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  TreePine,
  Sparkles,
  Award,
  Flame,
  ArrowRight,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import { Reveal, Stagger, StaggerItem, TextReveal, ParallaxImage } from '@/components/motion';

export const metadata: Metadata = {
  title: 'Our 35-Year Heritage & Atelier | Craftora Jaipur',
  description:
    'Founded by Surender Singh Rajora in Jaipur. 35+ years of solid wood excellence, 2,000+ happy customers, 50+ furnished buildings and 5 luxury hotel projects.',
};

const PILLARS = [
  {
    icon: <TreePine className="w-6 h-6 text-[#A0741A]" />,
    title: '35+ Years of Wood Experience',
    text: 'Three and a half decades of master wood crafting in Jaipur. From single statement pieces to complete hotel suites, made under one brand with zero compromises.',
    footer: 'Founded by Surender Singh Rajora',
  },
  {
    icon: <Flame className="w-6 h-6 text-[#A0741A]" />,
    title: 'Seasoned Kiln-Dried Timber',
    text: 'Raw wood contains moisture that causes cheaper furniture to warp, creak, and crack. We kiln-dry our timbers down to optimal equilibrium moisture content before any cut is made.',
    footer: '15-Year Structural Warranty',
  },
  {
    icon: <Award className="w-6 h-6 text-[#A0741A]" />,
    title: '20+ Finishes & Made to Measure',
    text: 'Every piece can be customized in dimension, wood tone (20+ finishes from clear coat to smoked oak & ebony), and upholstery shaped around your room routines.',
    footer: 'Direct Workshop Pricing',
  },
];

const STANDARDS = [
  '35+ Years Experience & 2,000+ Happy Clients',
  '100% Solid Kiln-Dried Hardwood (Teak, Walnut, Oak)',
  '20+ Hand-Rubbed Wood Finishes & Custom Sizing',
  'Exclusive Flagship Studio: Chomu Tatiyawas Toll Plaza, Jaipur',
  'Completed furniture work for 5 hotels & 50+ buildings',
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAFAF9] min-h-screen py-10 sm:py-16">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Editorial Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal distance={16} duration={0.7}>
            <Badge variant="gold" size="sm" className="mb-3">
              Craftora Jaipur Atelier · Since 1990
            </Badge>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-semibold tracking-tight">
            <TextReveal text="Furniture for the" onMount delay={0.15} />{' '}
            <TextReveal
              text="Way You Live."
              onMount
              delay={0.45}
              className="block text-[#7C4B27]"
            />
          </h1>
          <Reveal delay={0.7} distance={24}>
            <p className="mt-6 text-base sm:text-lg text-[#44403C] font-normal leading-relaxed">
              Three and a half decades of making furniture in Jaipur with one clear way of working. 
              Founded by <strong>Surender Singh Rajora</strong>, Craftora brings complete furniture manufacturing and interior design solutions together under one roof.
            </p>
          </Reveal>
        </div>

        {/* Big Atelier Image Banner */}
        <Reveal
          scale={0.94}
          distance={60}
          duration={1.1}
          delay={0.3}
          className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E7E5E4] bg-[#F5F5F4] mb-20"
        >
          <ParallaxImage>
            <Image
              src="/images/story-artisan.jpg"
              alt="Craftora Master Woodworking Atelier"
              fill
              className="object-cover"
              priority
            />
          </ParallaxImage>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Reveal delay={0.9} distance={24} className="absolute bottom-8 left-8 right-8 text-white">
            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block mb-1">
              The Artisan Benchmark
            </span>
            <p className="text-xl sm:text-2xl font-semibold max-w-xl">
              &ldquo;True luxury is not defined by excess, but by the quiet perfection of honest materials and reverent hands.&rdquo;
            </p>
          </Reveal>
        </Reveal>

        {/* 3 Core Pillars */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" stagger={0.15}>
          {PILLARS.map((pillar) => (
            <StaggerItem
              key={pillar.title}
              variant="scale"
              className="group p-8 rounded-3xl bg-white border border-[#E7E5E4] shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] flex items-center justify-center text-[#7C4B27] mb-6 transition-all duration-500 group-hover:bg-[#4A2E1E] group-hover:rotate-[8deg] group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl text-[#1C1917] font-semibold">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm sm:text-sm text-[#44403C] font-normal leading-relaxed">
                  {pillar.text}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F0EFED] text-xs text-[#7C4B27] font-semibold uppercase tracking-wider">
                {pillar.footer}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Narrative & Visual Comparison */}
        <Reveal distance={60} className="p-8 sm:p-14 rounded-3xl bg-white border border-[#E7E5E4] shadow-xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left" delay={0.15}>
              <Badge variant="gold" size="sm" className="mb-3">
                The Craftora Standard
              </Badge>
              <h2 className="text-3xl sm:text-4xl text-[#1C1917] font-semibold leading-tight">
                <TextReveal text="Why Mass-Manufactured Furniture Fails" />
              </h2>
              <p className="mt-4 text-sm sm:text-sm text-[#44403C] font-normal leading-relaxed">
                Commercial retail stores prioritize flat-pack shipping efficiency over structural longevity.
                They use chemical glues and plastic edge banding that peel when exposed to humidity.
              </p>

              <Stagger className="mt-6 space-y-3" stagger={0.1} delay={0.3}>
                {STANDARDS.map((line) => (
                  <StaggerItem key={line} variant="slideLeft" className="flex items-center gap-3 text-xs text-[#1C1917]">
                    <CheckCircle2 className="w-4 h-4 text-[#4A5B47]" />
                    <span><strong>Craftora:</strong> {line}</span>
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="mt-8">
                <Button
                  variant="primary"
                  href="/custom-studio"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Configure Your Bespoke Piece
                </Button>
              </div>
            </Reveal>

            <Reveal
              direction="right"
              delay={0.25}
              scale={0.95}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F5F4] border border-[#E7E5E4]"
            >
              <ParallaxImage>
                <Image
                  src="/images/hero-living.jpg"
                  alt="Craftora living space"
                  fill
                  className="object-cover"
                />
              </ParallaxImage>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
