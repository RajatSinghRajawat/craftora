'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Reveal } from '../motion';

export default function ConsultationCTA() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <Reveal distance={30} className="rounded-3xl bg-[#F3EFE8] px-6 py-14 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1C1917]">Need help choosing?</h2>
          <p className="mt-4 text-lg text-[#78716C]">We&apos;ll visit, measure and suggest in Jaipur &amp; across Rajasthan. Direct from Surender Singh Rajora.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1C1917] text-white text-sm font-semibold hover:bg-[#2A2522] transition-colors"
            >
              Book a free visit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="https://wa.me/919950757127?text=Hi%20Surender%20ji%2C%20I%20would%20like%20to%20consult%20about%20custom%20Craftora%20furniture."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1C1917] text-sm font-semibold hover:bg-[#FAFAF9] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp (+91 9950757127)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
