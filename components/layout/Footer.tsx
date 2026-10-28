'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  TreePine,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Lock,
  Truck,
  RotateCcw,
  Store,
} from 'lucide-react';
import { CATEGORIES } from '@/data/furnitureData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#FAF8F5] text-[#44403C] border-t border-[#E8E2D8] pt-12 pb-8">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {/* ============================================================== */}
        {/* PEPPERFRY-STYLE NEWSLETTER & PROMO CALLOUT BANNER             */}
        {/* ============================================================== */}
        <div className="bg-[#1F1B18] text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#3A322C]">
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-[#C29B38]/20 border border-[#C29B38]/40 text-[#E8DCCB] text-xs font-bold uppercase tracking-wider mb-2">
              🎉 Jaipur Workshop Direct Voucher
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Get ₹2,500 Off Your First Custom Solid Wood Order
            </h3>
            <p className="text-xs sm:text-sm text-[#B8AEA3] mt-1.5">
              Subscribe for custom timber updates, live-edge slab drops, and direct factory consultation from Surender Singh Rajora.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <AnimatePresence mode="wait">
              {isSubscribed ? (
                <div className="flex items-center gap-2 p-3 bg-emerald-900/60 border border-emerald-500/50 rounded-2xl text-emerald-200 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Coupon code CRAFT2500 has been sent to your email!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:border-[#C29B38] min-w-[260px]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-[#C29B38] hover:bg-[#D4AF37] text-[#1F1B18] font-bold text-xs sm:text-sm transition-colors whitespace-nowrap flex items-center justify-center gap-1.5"
                  >
                    <span>Claim Voucher</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BRAND & VALUE PILLARS BAR (From CRAFTORA PDF)                 */}
        {/* ============================================================== */}
        <div className="pb-10 border-b border-[#E8E2D8] grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center text-[#7C4B27] shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#4A2E1E]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1F1B18]">35+ Years of Heritage</h4>
              <p className="text-[11px] text-[#8E857C]">35 years of master wood craft</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center text-[#7C4B27] shrink-0 shadow-xs">
              <Truck className="w-5 h-5 text-[#7C4B27]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1F1B18]">2,000+ Happy Customers</h4>
              <p className="text-[11px] text-[#8E857C]">50+ buildings &amp; 5 hotels furnished</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center text-[#7C4B27] shrink-0 shadow-xs">
              <TreePine className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1F1B18]">20+ Hand-Applied Finishes</h4>
              <p className="text-[11px] text-[#8E857C]">Dark, warm &amp; light wood tones</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center text-[#7C4B27] shrink-0 shadow-xs">
              <Store className="w-5 h-5 text-[#C29B38]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1F1B18]">Jaipur Flagship Studio</h4>
              <p className="text-[11px] text-[#8E857C]">Chomu Tatiyawas Toll Plaza</p>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* COMPREHENSIVE DIRECTORY SITEMAP                               */}
        {/* ============================================================== */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-[#E8E2D8]">
          
          {/* Col 1: Furniture Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7C4B27]">
              Living &amp; Seating
            </h4>
            <ul className="space-y-1.5 text-xs text-[#5E5750]">
              <li><Link href="/collections?category=living-room" className="hover:text-[#1F1B18]">3 Seater Couches</Link></li>
              <li><Link href="/collections?category=living-room" className="hover:text-[#1F1B18]">L-Shape Sectionals</Link></li>
              <li><Link href="/collections?category=living-room" className="hover:text-[#1F1B18]">Curved Bouclé Chairs</Link></li>
              <li><Link href="/collections?category=living-room" className="hover:text-[#1F1B18]">Solid Wood Recliners</Link></li>
              <li><Link href="/collections?category=living-room" className="hover:text-[#1F1B18]">Nesting Coffee Tables</Link></li>
              <li><Link href="/collections?category=tv-units" className="hover:text-[#1F1B18]">Acoustic Slat TV Backdrops</Link></li>
              <li><Link href="/collections?category=living-room" className="hover:text-[#1F1B18]">Marble Credenzas</Link></li>
            </ul>
          </div>

          {/* Col 2: Bedroom & Wardrobes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7C4B27]">
              Bedroom &amp; Storage
            </h4>
            <ul className="space-y-1.5 text-xs text-[#5E5750]">
              <li><Link href="/collections?category=bedroom" className="hover:text-[#1F1B18]">King Size Slat Beds</Link></li>
              <li><Link href="/collections?category=bedroom" className="hover:text-[#1F1B18]">Hydraulic Storage Beds</Link></li>
              <li><Link href="/collections?category=bedroom" className="hover:text-[#1F1B18]">Floating Headboards</Link></li>
              <li><Link href="/collections?category=bedroom" className="hover:text-[#1F1B18]">Cantilevered Nightstands</Link></li>
              <li><Link href="/collections?category=wardrobes" className="hover:text-[#1F1B18]">Walk-in Dressing Suites</Link></li>
              <li><Link href="/collections?category=wardrobes" className="hover:text-[#1F1B18]">Smoked Glass Sliding Doors</Link></li>
              <li><Link href="/collections?category=wardrobes" className="hover:text-[#1F1B18]">Custom Sized Almirahs</Link></li>
            </ul>
          </div>

          {/* Col 3: Dining & Workspace */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7C4B27]">
              Dining &amp; Workspace
            </h4>
            <ul className="space-y-1.5 text-xs text-[#5E5750]">
              <li><Link href="/collections?category=dining" className="hover:text-[#1F1B18]">6-Seater Solid Dining Sets</Link></li>
              <li><Link href="/collections?category=dining" className="hover:text-[#1F1B18]">Heritage Live-Edge Tables</Link></li>
              <li><Link href="/collections?category=dining" className="hover:text-[#1F1B18]">Curved Dining Chairs</Link></li>
              <li><Link href="/collections?category=dining" className="hover:text-[#1F1B18]">Fluted Bar Cabinets</Link></li>
              <li><Link href="/collections?category=office-furniture" className="hover:text-[#1F1B18]">Executive Walnut Desks</Link></li>
              <li><Link href="/collections?category=office-furniture" className="hover:text-[#1F1B18]">Bentwood Swivel Chairs</Link></li>
              <li><Link href="/collections?category=office-furniture" className="hover:text-[#1F1B18]">Conference &amp; Reception Desks</Link></li>
            </ul>
          </div>

          {/* Col 4: Timber & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7C4B27]">
              Atelier &amp; Craft
            </h4>
            <ul className="space-y-1.5 text-xs text-[#5E5750]">
              <li><Link href="/about" className="hover:text-[#1F1B18]">35-Year Heritage Story</Link></li>
              <li><Link href="/about" className="hover:text-[#1F1B18]">20+ Wood Finishes</Link></li>
              <li><Link href="/custom-studio" className="hover:text-[#1F1B18] font-bold text-[#4A2E1E]">3D Custom Studio</Link></li>
              <li><Link href="/interior-design" className="hover:text-[#1F1B18] font-bold text-[#4A2E1E]">Interior Design Solutions</Link></li>
              <li><Link href="/contact" className="hover:text-[#1F1B18]">Visit Jaipur Studio</Link></li>
              <li><Link href="/projects" className="hover:text-[#1F1B18]">5 Hotel Projects Portfolio</Link></li>
              <li><Link href="/projects" className="hover:text-[#1F1B18]">50+ Furnished Buildings</Link></li>
            </ul>
          </div>

          {/* Col 5: Jaipur Flagship Studio & Owner Contact (From PDF) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7C4B27]">
              Jaipur Flagship Atelier
            </h4>
            <div className="space-y-2 text-xs text-[#5E5750]">
              <div>
                <p className="text-[#1F1B18] font-bold">Owner:</p>
                <p className="font-semibold text-[#4A2E1E]">Surender Singh Rajora</p>
              </div>
              <div>
                <p className="text-[#1F1B18] font-bold">Studio &amp; Workshop:</p>
                <p className="leading-relaxed">
                  Jaipur Raj, Chomu Tatiyawas Toll Plaza, Jaipur, Rajasthan 303701
                </p>
              </div>
              <div className="pt-1 space-y-1">
                <a
                  href="tel:+919950757127"
                  className="flex items-center gap-1.5 text-[#4A2E1E] font-bold hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C29B38]" />
                  <span>+91 9950757127</span>
                </a>
                <a
                  href="mailto:thecraftora@gmail.com"
                  className="flex items-center gap-1.5 text-[#5E5750] hover:text-[#1F1B18]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C29B38]" />
                  <span>thecraftora@gmail.com</span>
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#8E857C] border-t border-[#F0ECE4]">
                <p className="font-medium text-[#1F1B18]">✓ Exclusive Flagship Studio (Jaipur)</p>
                <p>Direct manufacturer shipping across Rajasthan &amp; Pan-India.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PAYMENT BADGES, ENCRYPTION & COPYRIGHT                        */}
        {/* ============================================================== */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8E857C]">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#E8E2D8] bg-white shrink-0">
              <Image src="/images/craftora-logo.png" alt="Craftora" fill className="object-cover" />
            </div>
            <p>© {new Date().getFullYear()} CRAFTORA™ · Surender Singh Rajora. Jaipur, Rajasthan 303701.</p>
          </div>

          {/* Payment & Security Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#E8E2D8] text-[#5E5750]">
              <Lock className="w-3 h-3 text-emerald-600" />
              <span>256-Bit SSL Encrypted Checkout</span>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-[#E8E2D8] font-bold text-[#1F1B18]">
              Visa
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-[#E8E2D8] font-bold text-[#1F1B18]">
              MasterCard
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-[#E8E2D8] font-bold text-[#1F1B18]">
              RuPay
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-[#E8E2D8] font-bold text-[#1F1B18]">
              UPI / NetBanking
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
