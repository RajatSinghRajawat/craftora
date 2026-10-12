import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { MapPin, Calendar, Sparkles, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import { PORTFOLIO_PROJECTS } from '@/data/projectsData';
import { Reveal, Stagger, StaggerItem, TextReveal, ParallaxImage, Magnetic } from '@/components/motion';

export const metadata: Metadata = {
  title: 'Lookbook & Bespoke Projects | Craftora Custom Furniture',
  description:
    'Explore completed residential penthouses, coastal villas, and executive workspaces furnished with Craftora custom solid timber furniture.',
};

export default function ProjectsPage() {
  return (
    <div className="bg-[#FAFAF9] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal distance={16} duration={0.7}>
            <Badge variant="gold" size="sm" className="mb-3">
              Spatial Portfolio &amp; Lookbook
            </Badge>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-semibold tracking-tight">
            <TextReveal text="Spaces Brought to Life" onMount delay={0.15} />
          </h1>
          <Reveal delay={0.55} distance={24}>
            <p className="mt-4 text-base sm:text-lg text-[#44403C] font-normal leading-relaxed">
              An intimate glimpse into residential penthouses, coastal villas, and boutique architectural workspaces
              furnished in bespoke Craftora solid hardwoods.
            </p>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <Reveal
              key={project.id}
              distance={70}
              amount={0.15}
              className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-white border border-[#E7E5E4] shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <Reveal
                direction={idx % 2 === 1 ? 'right' : 'left'}
                distance={50}
                delay={0.15}
                className={`lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F5F5F4] border border-[#E7E5E4] ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <ParallaxImage>
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </ParallaxImage>
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#4A2E1E] text-xs font-semibold uppercase tracking-wider border border-[#E7E5E4]">
                  {project.category}
                </div>
              </Reveal>

              {/* Narrative Content */}
              <Stagger
                stagger={0.08}
                delay={0.25}
                className={`lg:col-span-5 flex flex-col justify-between ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div>
                  <StaggerItem className="flex items-center gap-2 text-xs text-[#6B6560] mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#A0741A]" />
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </StaggerItem>

                  <StaggerItem>
                    <h2 className="text-2xl sm:text-3xl text-[#1C1917] font-semibold leading-tight">
                      {project.title}
                    </h2>
                  </StaggerItem>

                  <StaggerItem className="mt-3 p-3 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#7C4B27] font-medium">
                    Scope: {project.scope}
                  </StaggerItem>

                  <StaggerItem>
                    <p className="mt-4 text-sm sm:text-sm text-[#44403C] font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </StaggerItem>

                  <StaggerItem className="mt-6">
                    <span className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold block mb-2">
                      Key Bespoke Furnishings:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.keyPieces.map((piece, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-[#FAFAF9] text-xs text-[#4A2E1E] font-medium border border-[#E7E5E4] hover:border-[#A0741A] hover:-translate-y-0.5 transition-all duration-300"
                        >
                          {piece}
                        </span>
                      ))}
                    </div>
                  </StaggerItem>
                </div>

                <StaggerItem className="mt-8 pt-6 border-t border-[#F0EFED] flex items-center gap-4">
                  <Button
                    variant="primary"
                    size="sm"
                    href="/contact"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Similar Bespoke Interior
                  </Button>
                </StaggerItem>
              </Stagger>
            </Reveal>
          ))}
        </div>

        {/* Trade Program Callout */}
        <Reveal
          scale={0.96}
          distance={50}
          className="relative overflow-hidden mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#2C1810] to-[#4A2E1E] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#A0741A]/15 blur-3xl pointer-events-none animate-pulse" />
          <div className="relative">
            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block mb-1">
              Architect &amp; Interior Designer Program
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#FAFAF9]">
              <TextReveal text="Collaborate With Our Woodworking Atelier" />
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#D6D3D1] font-normal max-w-xl">
              We collaborate with premier architecture studios across India, offering trade pricing, 3D CAD modeling, custom timber finishes, and priority atelier production.
            </p>
          </div>
          <Magnetic className="relative inline-block">
            <Button
              variant="gold"
              size="md"
              href="/contact"
              className="whitespace-nowrap"
            >
              Apply for Trade Program
            </Button>
          </Magnetic>
        </Reveal>
      </div>
    </div>
  );
}
