import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Check, Gem, Lamp, Lightbulb, Sofa, Sparkles } from 'lucide-react';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import SectionHeader from '@/components/common/SectionHeader';
import DesignCard from '@/components/interior/DesignCard';
import {
  INTERIOR_DESIGNS,
  INTERIOR_STYLES,
  INTERIOR_STYLE_DETAILS,
  getStyleBySlug,
  styleSlug,
} from '@/data/interiorData';
import { Reveal, Stagger, StaggerItem, TextReveal } from '@/components/motion';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return INTERIOR_STYLES.map((s) => ({ slug: styleSlug(s.name) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const style = getStyleBySlug(slug);
  if (!style) return { title: 'Style Not Found | Craftora' };

  return {
    title: `${style.name} Interior Design Ideas | Craftora`,
    description: style.description,
    openGraph: {
      title: `${style.name} Interior Design | Craftora`,
      description: style.description,
      images: [{ url: style.image }],
    },
  };
}

export default async function InteriorStylePage({ params }: PageProps) {
  const { slug } = await params;
  const style = getStyleBySlug(slug);
  if (!style) notFound();

  const details = INTERIOR_STYLE_DETAILS[style.name];
  const designs = INTERIOR_DESIGNS.filter((d) => d.style === style.name);
  const otherStyles = INTERIOR_STYLES.filter((s) => s.name !== style.name);

  const elements = [
    { title: 'Materials', icon: Gem, items: details.materials },
    { title: 'Furniture', icon: Sofa, items: details.furniture },
    { title: 'Lighting', icon: Lamp, items: details.lighting },
    { title: 'Décor', icon: Sparkles, items: details.decor },
  ];

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={style.image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/85 via-[#1C1917]/55 to-[#1C1917]/15" />
        </div>
        <div className="relative w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
          <Link
            href="/interior-design"
            className="inline-flex items-center gap-1.5 text-sm text-[#E7E5E4] hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All interior styles
          </Link>
          <div className="max-w-2xl">
            <Reveal distance={16} duration={0.7}>
              <Badge variant="ivory" size="sm" className="mb-4">
                {style.tagline}
              </Badge>
            </Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight">
              <TextReveal text={`${style.name} Interior Design`} onMount delay={0.15} />
            </h1>
            <Reveal delay={0.45} distance={24}>
              <p className="mt-5 text-base sm:text-lg text-[#E7E5E4] leading-relaxed">{style.description}</p>
              <div className="mt-6 flex items-center gap-2">
                {style.palette.map((c) => (
                  <span
                    key={c}
                    title={c}
                    className="w-8 h-8 rounded-full border-2 border-white/70 shadow"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  variant="gold"
                  size="lg"
                  href={`/contact?service=interior-design&style=${slug}`}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Design my home in {style.name}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Overview + palette */}
        <section className="py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <p className="text-sm font-medium text-[#A0741A] mb-3">About the style</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] leading-[1.1] text-[#1C1917]">
              What makes a home {style.name}?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#57534E] leading-relaxed">{details.overview}</p>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold mb-2">Best suited for</p>
              <div className="flex flex-wrap gap-2">
                {details.bestRooms.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1.5 rounded-full bg-white border border-[#E7E5E4] text-sm text-[#4A2E1E] font-medium"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-white border border-[#E7E5E4]">
              <p className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold mb-4">Colour palette</p>
              <div className="grid grid-cols-4 gap-3">
                {style.palette.map((c) => (
                  <div key={c}>
                    <div className="aspect-square rounded-2xl border border-black/10" style={{ backgroundColor: c }} />
                    <p className="mt-2 text-[11px] font-mono text-[#57534E] text-center">{c}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-[#F0EFED]">
                <p className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold mb-3 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-[#A0741A]" />
                  Designer tips
                </p>
                <ul className="space-y-2.5">
                  {details.tips.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-[#44403C]">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#A0741A]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Key elements */}
        <section className="py-16 sm:py-20 border-t border-[#E7E5E4]">
          <SectionHeader eyebrow="Key elements" title={`The building blocks of ${style.name}`} />
          <Stagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {elements.map(({ title, icon: Icon, items }) => (
              <StaggerItem key={title}>
                <div className="h-full p-6 rounded-2xl bg-white border border-[#E7E5E4]">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#A0741A]" />
                  </div>
                  <h3 className="mt-4 font-semibold text-[#1C1917]">{title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {items.map((i) => (
                      <li key={i} className="text-sm text-[#57534E]">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Designs in this style */}
        <section className="py-16 sm:py-20 border-t border-[#E7E5E4]">
          <SectionHeader
            eyebrow="Design ideas"
            title={`${style.name} designs by Craftora`}
            subtitle={`${designs.length} design${designs.length === 1 ? '' : 's'} in this style. Tap any design to see details.`}
            action={{ label: 'See full gallery', href: '/interior-design#gallery' }}
          />
          <Stagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs.map((d) => (
              <StaggerItem key={d.id}>
                <DesignCard design={d} />
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Other styles */}
        <section className="py-16 sm:py-20 border-t border-[#E7E5E4]">
          <SectionHeader eyebrow="Keep exploring" title="Other interior styles" />
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {otherStyles.map((s) => (
              <Link
                key={s.name}
                href={`/interior-design/styles/${styleSlug(s.name)}`}
                className="group shrink-0 w-44 sm:w-52 relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F5F4]"
              >
                <Image
                  src={s.image}
                  alt={`${s.name} interior style`}
                  fill
                  sizes="208px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-3">
                  <h3 className="text-white font-semibold leading-tight">{s.name}</h3>
                  <p className="text-[11px] text-[#E7E5E4]">{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal
          scale={0.96}
          distance={50}
          className="relative overflow-hidden mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#2C1810] to-[#4A2E1E] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="relative">
            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block mb-1">
              Free design consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#FAFAF9]">Love the {style.name} look?</h2>
            <p className="mt-2 text-sm text-[#D6D3D1] max-w-xl">
              Our designers will plan your space in this style and share a free 3D concept and estimate.
            </p>
          </div>
          <Button
            variant="gold"
            size="md"
            href={`/contact?service=interior-design&style=${slug}`}
            className="relative whitespace-nowrap"
          >
            Book Consultation
          </Button>
        </Reveal>
      </div>
    </div>
  );
}
