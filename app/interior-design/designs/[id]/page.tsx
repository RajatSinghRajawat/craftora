import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowRight, Check, ChevronRight, Home, Palette, Phone, Ruler, Wallet } from 'lucide-react';
import Button from '@/components/common/Button';
import SectionHeader from '@/components/common/SectionHeader';
import DesignCard from '@/components/interior/DesignCard';
import {
  INTERIOR_DESIGNS,
  INTERIOR_PROCESS,
  INTERIOR_STYLE_DETAILS,
  INTERIOR_STYLES,
  getDesignById,
  styleSlug,
} from '@/data/interiorData';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

interface PageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return INTERIOR_DESIGNS.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const design = getDesignById(id);
  if (!design) return { title: 'Design Not Found | Craftora' };

  const description = `${design.style} ${design.room.toLowerCase()} design — ${design.area}, estimated ${design.budget}. Includes ${design.highlights.join(', ').toLowerCase()}.`;
  return {
    title: `${design.title} | Craftora Interior Design`,
    description,
    openGraph: { title: design.title, description, images: [{ url: design.image }] },
  };
}

export default async function InteriorDesignDetailPage({ params }: PageProps) {
  const { id } = await params;
  const design = getDesignById(id);
  if (!design) notFound();

  const style = INTERIOR_STYLES.find((s) => s.name === design.style)!;
  const details = INTERIOR_STYLE_DETAILS[design.style];
  const similar = [
    ...INTERIOR_DESIGNS.filter((d) => d.id !== design.id && d.room === design.room),
    ...INTERIOR_DESIGNS.filter((d) => d.id !== design.id && d.room !== design.room && d.style === design.style),
  ].slice(0, 3);

  const enquiryHref = `/contact?service=interior-design&design=${design.id}`;

  return (
    <div className="bg-[#FAFAF9] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-xs sm:text-sm text-[#6B6560] mb-6">
          <Link href="/" className="hover:text-[#1C1917]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/interior-design" className="hover:text-[#1C1917]">
            Interior Design
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/interior-design/styles/${styleSlug(design.style)}`} className="hover:text-[#1C1917]">
            {design.style}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1C1917] font-medium truncate max-w-[60vw]">{design.title}</span>
        </nav>

        {/* Main */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <Reveal distance={30} className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#F5F5F4] border border-[#E7E5E4]">
              <Image
                src={design.image}
                alt={design.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal distance={30} delay={0.1} className="lg:col-span-5">
            <p className="text-xs uppercase tracking-wider text-[#A0741A] font-semibold">
              {design.room} · {design.style}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-[#1C1917]">{design.title}</h1>
            <p className="mt-4 text-[#57534E] leading-relaxed">{style.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: 'Room', value: design.room, icon: Home },
                { label: 'Style', value: design.style, icon: Palette },
                { label: 'Area', value: design.area, icon: Ruler },
                { label: 'Estimated budget', value: design.budget, icon: Wallet },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="p-3.5 rounded-2xl bg-white border border-[#E7E5E4]">
                  <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#6B6560]">
                    <Icon className="w-3.5 h-3.5 text-[#A0741A]" />
                    {label}
                  </p>
                  <p className="mt-1 font-semibold text-[#1C1917]">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold mb-3">
                What&apos;s included
              </p>
              <ul className="space-y-2">
                {design.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[#44403C]">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#A0741A]" />
                    {h}
                  </li>
                ))}
                <li className="flex items-start gap-2 text-sm text-[#44403C]">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#A0741A]" />
                  Free site measurement & 3D design
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" href={enquiryHref} icon={<ArrowRight className="w-4 h-4" />}>
                Get this design
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="tel:18002093232"
                icon={<Phone className="w-4 h-4" />}
                iconPosition="left"
              >
                Talk to a designer
              </Button>
            </div>
            <p className="mt-3 text-xs text-[#6B6560]">
              Budget is indicative — final quote depends on site size, materials and finishes.
            </p>
          </Reveal>
        </div>

        {/* Materials for this look */}
        <section className="mt-16 sm:mt-20 py-12 border-t border-[#E7E5E4] grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-[#1C1917]">Get the {design.style} look</h2>
            <p className="mt-2 text-sm text-[#57534E]">Materials and finishes our designers use for this style.</p>
            <Link
              href={`/interior-design/styles/${styleSlug(design.style)}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A2E1E] underline underline-offset-4"
            >
              Explore the {design.style} style
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.05} className="p-6 rounded-2xl bg-white border border-[#E7E5E4]">
            <p className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold mb-3">Materials</p>
            <ul className="space-y-1.5 text-sm text-[#44403C]">
              {details.materials.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="p-6 rounded-2xl bg-white border border-[#E7E5E4]">
            <p className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold mb-3">Colour palette</p>
            <div className="flex gap-2">
              {style.palette.map((c) => (
                <span key={c} title={c} className="w-9 h-9 rounded-full border border-black/10" style={{ backgroundColor: c }} />
              ))}
            </div>
          </Reveal>
        </section>

        {/* Process */}
        <section className="py-12 border-t border-[#E7E5E4]">
          <SectionHeader eyebrow="How it works" title="From this idea to your home" />
          <Stagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INTERIOR_PROCESS.map((p) => (
              <StaggerItem key={p.step}>
                <div className="h-full p-5 rounded-2xl bg-white border border-[#E7E5E4]">
                  <span className="text-2xl font-semibold text-[#A0741A]/70">{p.step}</span>
                  <h3 className="mt-2 font-semibold text-[#1C1917]">{p.title}</h3>
                  <p className="mt-1 text-sm text-[#57534E] leading-relaxed">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Similar */}
        {similar.length > 0 && (
          <section className="py-12 border-t border-[#E7E5E4]">
            <SectionHeader
              eyebrow="You may also like"
              title="Similar designs"
              action={{ label: 'View all designs', href: '/interior-design#gallery' }}
            />
            <Stagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map((d) => (
                <StaggerItem key={d.id}>
                  <DesignCard design={d} />
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        )}
      </div>
    </div>
  );
}
