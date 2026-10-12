import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Ruler, Wallet } from 'lucide-react';
import { InteriorDesign } from '@/data/interiorData';

/** Clickable interior design card that opens the design's detail page. */
export default function DesignCard({ design }: { design: InteriorDesign }) {
  return (
    <Link
      href={`/interior-design/designs/${design.id}`}
      className="group block h-full rounded-2xl overflow-hidden bg-white border border-[#E7E5E4] card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F4]">
        <Image
          src={design.image}
          alt={design.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-semibold text-[#4A2E1E]">
            {design.room}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#1C1917]/75 backdrop-blur text-[11px] font-semibold text-white">
            {design.style}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#1C1917] leading-snug">{design.title}</h3>
        <div className="mt-2 flex items-center gap-4 text-xs text-[#6B6560]">
          <span className="inline-flex items-center gap-1">
            <Ruler className="w-3.5 h-3.5 text-[#A0741A]" />
            {design.area}
          </span>
          <span className="inline-flex items-center gap-1">
            <Wallet className="w-3.5 h-3.5 text-[#A0741A]" />
            {design.budget}
          </span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A2E1E]">
          View design
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
