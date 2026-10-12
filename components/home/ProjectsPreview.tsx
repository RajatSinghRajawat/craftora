'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '../common/SectionHeader';
import { PORTFOLIO_PROJECTS } from '@/data/projectsData';
import { ParallaxImage, Stagger, StaggerItem } from '../motion';

export default function ProjectsPreview() {
  // Skip the first project — its photo is already the hero image
  const [first, ...rest] = PORTFOLIO_PROJECTS.slice(1, 4);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="In real homes"
          title="Some of the homes we've furnished"
          action={{ label: 'See all projects', href: '/projects' }}
        />

        <Stagger stagger={0.12} className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-10">
          {[first, ...rest].map((project, i) => (
            <StaggerItem key={project.id} className={i === 0 ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'}>
              <Link href="/projects" className="group block">
                <div className={`relative overflow-hidden rounded-2xl bg-[#F3EFE8] ${i === 0 ? 'aspect-[4/3] lg:aspect-auto lg:h-[560px]' : 'aspect-[16/10]'}`}>
                  <ParallaxImage>
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes={i === 0 ? '(max-width: 1024px) 100vw, 58vw' : '(max-width: 1024px) 100vw, 42vw'}
                      className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
                    />
                  </ParallaxImage>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-[#78716C]">
                    {project.location} · {project.year}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#1C1917] group-hover:underline underline-offset-4 decoration-1">
                    {project.title.replace(/^The /, '')}
                  </h3>
                  <p className="mt-1 text-sm text-[#57534E]">{project.scope}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
