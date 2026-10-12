'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Optional link shown on the right, e.g. "View all". */
  action?: { label: string; href: string };
  className?: string;
}

/** Plain, left-aligned section heading used across the home page. */
export default function SectionHeader({ eyebrow, title, subtitle, action, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5 ${className}`}>
      <Reveal distance={24} className="max-w-2xl">
        {eyebrow && <p className="text-sm font-medium text-[#A0741A] mb-3">{eyebrow}</p>}
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.025em] leading-[1.1] text-[#1C1917]">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">{subtitle}</p>}
      </Reveal>
      {action && (
        <Reveal distance={24} delay={0.1} className="shrink-0">
          <Link
            href={action.href}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1C1917] border-b border-[#1C1917]/30 pb-1 hover:border-[#1C1917] transition-colors"
          >
            {action.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </Reveal>
      )}
    </div>
  );
}
