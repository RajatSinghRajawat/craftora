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
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Hotel,
  Users,
  Store
} from 'lucide-react';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import { Reveal, Stagger, StaggerItem, TextReveal, ParallaxImage } from '@/components/motion';
import { CRAFTORA_WOOD_FINISHES_20 } from '@/data/furnitureData';

export const metadata: Metadata = {
  title: 'Our 35-Year Heritage & Jaipur Atelier | Craftora',
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
    text: 'Raw wood contains moisture that causes cheaper furniture to warp, creak, and crack. We kiln-dry our timbers down to 10-12% equilibrium moisture before any cut is made.',
    footer: '15-Year Structural Warranty',
  },
  {
    icon: <Award className="w-6 h-6 text-[#A0741A]" />,
    title: '20+ Finishes & Made to Measure',
    text: 'Every piece can be customized in dimension, wood tone (20+ finishes from clear coat to smoked oak & ebony), and upholstery shaped around your room routines.',
    footer: 'Direct Workshop Pricing',
  },
];

const MILESTONES = [
  {
    year: '1990',
    title: 'The Jaipur Workshop Founded',
    desc: 'Surender Singh Rajora established the initial artisanal wood carving atelier with traditional Rajasthani joinery masters.',
  },
  {
    year: '2004',
    title: 'Dedicated Kiln Seasoning Chamber',
    desc: 'Invested in high-precision timber seasoning kilns at Chomu, guaranteeing zero warpage in all Indian climates.',
  },
  {
    year: '2014',
    title: 'Heritage Hotel Suites Commissioned',
    desc: 'Completed turnkey guestroom solid wood furnishing for luxury boutique resorts in Jaipur and surrounding heritage destinations.',
  },
  {
    year: '2021',
    title: '50+ High-Rise & Commercial Buildings',
    desc: 'Surpassed 50 major commercial building projects, corporate boardrooms, and 2,000+ private residences furnished.',
  },
  {
    year: '2026',
    title: 'Modern 3D Studio & Jaipur Atelier',
    desc: 'Launched real-time 3D furniture customization while preserving 100% hand-rubbed organic oil finishing.',
  },
];

const STATS = [
  { value: '35+', label: 'Years Experience', desc: 'Crafting fine furniture since 1990' },
  { value: '2,000+', label: 'Happy Customers', desc: 'Residences furnished with heirloom pieces' },
  { value: '50+', label: 'Buildings Furnished', desc: 'High-rise & corporate projects delivered' },
  { value: '5', label: 'Hotel Projects', desc: 'Turnkey luxury boutique guestrooms' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {/* Editorial Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal distance={16} duration={0.7}>
            <Badge variant="gold" size="sm" className="mb-3">
              Craftora Jaipur Atelier · Since 1990
            </Badge>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#1F1B18] font-serif font-bold tracking-tight">
            <TextReveal text="Furniture for the" onMount delay={0.15} />{' '}
            <TextReveal
              text="Way You Live."
              onMount
              delay={0.45}
              className="block text-[#7C4B27] italic font-serif"
            />
          </h1>
          <Reveal delay={0.7} distance={24}>
            <p className="mt-6 text-base sm:text-lg text-[#5E5750] font-normal leading-relaxed">
              Three and a half decades of making furniture in Jaipur with one clear way of working. 
              Founded by <strong>Surender Singh Rajora</strong>, Craftora brings complete timber seasoning, bespoke manufacturing, and interior architectural solutions under one roof.
            </p>
          </Reveal>
        </div>

        {/* Big Atelier Image Banner */}
        <Reveal
          scale={0.94}
          distance={60}
          duration={1.1}
          delay={0.3}
          className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E8E2D8] bg-[#F5F5F4] mb-16"
        >
          <ParallaxImage>
            <Image
              src="/images/story-artisan.jpg"
              alt="Craftora Master Woodworking Atelier Jaipur"
              fill
              className="object-cover"
              priority
            />
          </ParallaxImage>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <Reveal delay={0.9} distance={24} className="absolute bottom-8 left-8 right-8 text-white">
            <span className="text-xs uppercase tracking-wider text-[#C29B38] font-bold block mb-1">
              The Artisan Benchmark · Jaipur Atelier
            </span>
            <p className="font-serif text-xl sm:text-3xl font-bold max-w-2xl leading-snug">
              &ldquo;True luxury is not defined by synthetic excess, but by the honest perfection of seasoned solid wood and reverent hands.&rdquo;
            </p>
            <span className="text-xs text-white/80 block mt-2">— Surender Singh Rajora, Founder</span>
          </Reveal>
        </Reveal>

        {/* 4 Heritage Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {STATS.map((st) => (
            <div
              key={st.label}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2D8] shadow-xs text-center"
            >
              <span className="font-serif text-3xl sm:text-5xl font-bold text-[#7C4B27] block">
                {st.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F1B18] mt-2 block">
                {st.label}
              </span>
              <p className="text-xs text-[#5E5750] mt-1">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* 3 Core Pillars */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" stagger={0.15}>
          {PILLARS.map((pillar) => (
            <StaggerItem
              key={pillar.title}
              variant="scale"
              className="group p-8 rounded-3xl bg-white border border-[#E8E2D8] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF5EE] border border-[#E8DFD4] flex items-center justify-center text-[#7C4B27] mb-6 transition-all duration-500 group-hover:bg-[#4A2E1E] group-hover:text-white group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1F1B18] font-bold">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-[#5E5750] font-normal leading-relaxed">
                  {pillar.text}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F0ECE4] text-xs text-[#7C4B27] font-semibold uppercase tracking-wider">
                {pillar.footer}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* 35-Year Milestone Chronology */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E8E2D8] shadow-sm mb-20">
          <div className="max-w-2xl mb-12">
            <Badge variant="gold" size="sm" className="mb-2">Our Journey</Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1B18]">
              35 Years of Woodworking Excellence in Jaipur
            </h2>
            <p className="text-sm text-[#5E5750] mt-2">
              From our humble workshop roots to Rajasthan&apos;s leading solid wood atelier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {MILESTONES.map((m, idx) => (
              <div key={m.year} className="relative flex flex-col justify-between p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <div>
                  <span className="font-mono text-xl font-bold text-[#7C4B27] block mb-2">{m.year}</span>
                  <h3 className="font-serif font-bold text-sm text-[#1F1B18] mb-1.5">{m.title}</h3>
                  <p className="text-xs text-[#5E5750] leading-relaxed">{m.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E2D8] text-[10px] font-bold text-[#8E857C] uppercase tracking-wider">
                  Phase #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 20 Authentic Wood Finishes Showcase from PDF */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E8E2D8] shadow-sm mb-20">
          <div className="max-w-3xl mb-8">
            <Badge variant="gold" size="sm" className="mb-2">CRAFTORA_v2.pdf Specification</Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1B18]">
              The 20 Wood Finish Library
            </h2>
            <p className="text-sm text-[#5E5750] mt-2 leading-relaxed">
              Every dining table, sofa frame, king bed, and acoustic TV unit can be finished in any of our 20 master organic tones, hand-rubbed with beeswax and natural oils.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {CRAFTORA_WOOD_FINISHES_20.map((finish, idx) => (
              <div
                key={finish}
                className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-center gap-3 hover:border-[#7C4B27] transition-all"
              >
                <span
                  className="w-8 h-8 rounded-full shadow-inner shrink-0 border border-black/10"
                  style={{
                    backgroundColor:
                      idx === 0 ? '#1A1A1A' :
                      idx === 1 ? '#2E2B2A' :
                      idx === 2 ? '#E8D3B9' :
                      idx === 3 ? '#5B2C24' :
                      idx === 4 ? '#C19A6B' :
                      idx === 5 ? '#6E4726' :
                      idx === 6 ? '#8A5D3B' :
                      idx === 7 ? '#4B3621' :
                      idx === 8 ? '#5C4033' :
                      idx === 9 ? '#B5651D' :
                      idx === 10 ? '#4E1609' :
                      idx === 11 ? '#7B2A20' :
                      idx === 12 ? '#D89E48' :
                      idx === 13 ? '#C48A3F' :
                      idx === 14 ? '#954535' :
                      idx === 15 ? '#362B28' :
                      idx === 16 ? '#9C9B98' :
                      idx === 17 ? '#EDEBE6' :
                      idx === 18 ? '#A85A3A' :
                      '#242124'
                  }}
                />
                <div>
                  <span className="text-[10px] text-[#8E857C] font-mono">#{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-xs font-bold text-[#1F1B18] block leading-tight truncate">{finish}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Invitation & Contact Card */}
        <div className="bg-[#4A2E1E] text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C29B38] font-bold block mb-2">
                Open Atelier Policy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Visit Us at Our Jaipur Workshop & Experience the Timber
              </h2>
              <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
                We believe in complete transparency. Walk through our seasoning chambers, see our master artisans hand-carve tenon joints, and select the exact timber slab for your dining table or bed.
              </p>

              <div className="mt-6 space-y-3 text-xs sm:text-sm text-white/90">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#C29B38] shrink-0" />
                  <span>Jaipur Raj, Chomu Tatiyawas Toll Plaza, Jaipur, Rajasthan 303701</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C29B38] shrink-0" />
                  <span>Owner Direct: +91 9950757127 (Surender Singh Rajora)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C29B38] shrink-0" />
                  <span>Official Email: thecraftora@gmail.com</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#C29B38] hover:bg-[#b08b30] text-[#1F1B18] px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md transition-colors"
                >
                  Schedule Studio Consultation
                </Link>
                <a
                  href="https://wa.me/919950757127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/40">
              <Image
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80"
                alt="Craftora Jaipur Atelier Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
