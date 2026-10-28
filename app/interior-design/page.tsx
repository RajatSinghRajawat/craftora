import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Check, Phone } from 'lucide-react';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import SectionHeader from '@/components/common/SectionHeader';
import InteriorGallery from '@/components/interior/InteriorGallery';
import { INTERIOR_STYLES, INTERIOR_PACKAGES, INTERIOR_PROCESS, styleSlug } from '@/data/interiorData';
import { Reveal, Stagger, StaggerItem, TextReveal, Magnetic } from '@/components/motion';

export const metadata: Metadata = {
  title: 'Interior Design Services | Craftora',
  description:
    'Full-home and room-wise interior design — living rooms, bedrooms, modular kitchens, wardrobes, pooja rooms and more, in every style from Japandi to Indian Traditional.',
};

export default function InteriorDesignPage() {
  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/interior/living-modern-jaali.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/85 via-[#1C1917]/60 to-[#1C1917]/20" />
        </div>
        <div className="relative w-full px-4 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <Reveal distance={16} duration={0.7}>
              <Badge variant="ivory" size="sm" className="mb-4">
                Interior Design Studio
              </Badge>
            </Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight">
              <TextReveal text="Every Room. Every Style. Designed for You." onMount delay={0.15} />
            </h1>
            <Reveal delay={0.5} distance={24}>
              <p className="mt-5 text-base sm:text-lg text-[#E7E5E4] leading-relaxed">
                From modular kitchens to pooja rooms, Japandi bedrooms to luxury living lounges — explore
                hundreds of ideas and let our designers turn your home into something truly yours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="gold" size="lg" href="#gallery" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore Designs
                </Button>
                <Button variant="secondary" size="lg" href="/contact?service=interior-design">
                  Book Free Consultation
                </Button>
              </div>
            </Reveal>
            <Stagger delay={0.8} stagger={0.08} className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                ['1,200+', 'Homes designed'],
                ['45 days', 'Avg. delivery'],
                ['15 yrs', 'Warranty'],
              ].map(([value, label]) => (
                <StaggerItem key={label}>
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="text-xs text-[#D6D3D1]">{label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Styles */}
        <section className="py-16 sm:py-24">
          <SectionHeader
            eyebrow="Design styles"
            title="Find the style that feels like home"
            subtitle="Ten signature looks, each tailored to Indian homes, climates and budgets."
          />
          <Stagger stagger={0.06} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {INTERIOR_STYLES.map((s) => (
              <StaggerItem key={s.name}>
                <Link
                  href={`/interior-design/styles/${styleSlug(s.name)}`}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-[#E7E5E4] card-hover"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={`${s.name} interior style`}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 p-3">
                      <h3 className="text-white font-semibold leading-tight">{s.name}</h3>
                      <p className="text-[11px] text-[#E7E5E4]">{s.tagline}</p>
                    </div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <div className="flex gap-1 mb-2">
                      {s.palette.map((c) => (
                        <span
                          key={c}
                          className="w-5 h-5 rounded-full border border-black/10"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed flex-1">{s.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#4A2E1E]">
                      Explore style
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-16 sm:py-20 border-t border-[#E7E5E4] scroll-mt-32">
          <SectionHeader
            eyebrow="Design gallery"
            title="Browse interiors by room & style"
            subtitle="Tap any design to see area, estimated budget and what's included."
          />
          <InteriorGallery />
        </section>

        {/* Process */}
        <section className="py-16 sm:py-20 border-t border-[#E7E5E4]">
          <SectionHeader eyebrow="How it works" title="From idea to handover in 5 steps" />
          <Stagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INTERIOR_PROCESS.map((p) => (
              <StaggerItem key={p.step}>
                <div className="h-full p-6 rounded-2xl bg-white border border-[#E7E5E4]">
                  <span className="text-3xl font-semibold text-[#A0741A]/70">{p.step}</span>
                  <h3 className="mt-3 font-semibold text-[#1C1917]">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-[#57534E] leading-relaxed">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Packages */}
        <section className="py-16 sm:py-20 border-t border-[#E7E5E4]">
          <SectionHeader
            eyebrow="Packages"
            title="Transparent pricing for every budget"
            subtitle="Indicative rates — your final quote is itemised after the site visit."
          />
          <Stagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INTERIOR_PACKAGES.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <div
                  className={`relative h-full flex flex-col p-7 rounded-3xl border ${
                    pkg.popular
                      ? 'bg-gradient-to-b from-[#2C1810] to-[#4A2E1E] text-white border-transparent shadow-xl'
                      : 'bg-white text-[#1C1917] border-[#E7E5E4]'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-[#D4AF37] text-[#1C1917] text-[11px] font-bold uppercase tracking-wider">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  <p className={`mt-1 text-sm ${pkg.popular ? 'text-[#D6D3D1]' : 'text-[#57534E]'}`}>
                    {pkg.description}
                  </p>
                  <p className="mt-5">
                    <span className="text-3xl font-semibold">{pkg.price}</span>
                    <span className={`ml-1 text-sm ${pkg.popular ? 'text-[#D6D3D1]' : 'text-[#6B6560]'}`}>
                      {pkg.unit}
                    </span>
                  </p>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.popular ? 'text-[#D4AF37]' : 'text-[#A0741A]'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={pkg.popular ? 'gold' : 'primary'}
                    size="md"
                    href={`/contact?service=interior-design&package=${pkg.name.toLowerCase()}`}
                    className="mt-8"
                    fullWidth
                  >
                    Choose {pkg.name}
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* CTA */}
        <Reveal
          scale={0.96}
          distance={50}
          className="relative overflow-hidden mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#2C1810] to-[#4A2E1E] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#A0741A]/15 blur-3xl pointer-events-none" />
          <div className="relative">
            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block mb-1">
              Free design consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#FAFAF9]">
              <TextReveal text="Ready to design your dream home?" />
            </h2>
            <p className="mt-2 text-sm text-[#D6D3D1] max-w-xl">
              Talk to a Craftora designer today — get a free 3D concept and estimate for your space.
            </p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <Magnetic className="inline-block">
              <Button variant="gold" size="md" href="/contact?service=interior-design" className="whitespace-nowrap">
                Book Consultation
              </Button>
            </Magnetic>
            <Button
              variant="secondary"
              size="md"
              href="tel:+919950757127"
              icon={<Phone className="w-4 h-4" />}
              iconPosition="left"
              className="whitespace-nowrap"
            >
              Call +91 9950757127
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
