'use client';

import React, { useState } from 'react';
import { Tag, CreditCard, Sparkles, Copy, Check, Gift } from 'lucide-react';

const OFFERS = [
  {
    code: 'CRAFT10',
    title: 'Flat 10% Off',
    desc: 'On orders above ₹40,000 across solid wood collections',
    badge: 'Artisan Coupon',
    icon: Tag,
    bgGradient: 'from-[#FAF5EE] to-[#F5ECE0]',
    borderColor: 'border-[#E8DCCB]',
  },
  {
    code: 'HDFCEMIFREE',
    title: 'No-Cost EMI',
    desc: '0% Interest EMI up to 12 months on all major bank cards',
    badge: 'Bank Offer',
    icon: CreditCard,
    bgGradient: 'from-[#F5F8F5] to-[#EBF3EB]',
    borderColor: 'border-[#D4E4D4]',
  },
  {
    code: 'STUDIOWELCOME',
    title: 'Flat ₹3,500 Off',
    desc: 'On your first customized spatial order booked via Studio',
    badge: 'Studio Perk',
    icon: Gift,
    bgGradient: 'from-[#FAF6F0] to-[#F5EEE4]',
    borderColor: 'border-[#EADCCB]',
  },
  {
    code: 'FREEDEL',
    title: 'Free White Glove Delivery',
    desc: 'Room placement, unpacking & assembly worth ₹4,999 free',
    badge: 'Limited Period',
    icon: Sparkles,
    bgGradient: 'from-[#F7F6F4] to-[#EEECE8]',
    borderColor: 'border-[#E2DFD9]',
  },
];

export default function PepperfryBankOffers() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    try {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2500);
    } catch {}
  };

  return (
    <section className="py-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#C29B38] animate-ping" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F1B18]">
            Bank Offers &amp; Instant Savings
          </h3>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {OFFERS.map((offer, idx) => {
            const Icon = offer.icon;
            const isCopied = copiedCode === offer.code;

            return (
              <div
                key={idx}
                className={`relative bg-gradient-to-br ${offer.bgGradient} border ${offer.borderColor} rounded-2xl p-4 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-200`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/80 text-[#7C4B27] border border-[#E8E2D8]">
                      {offer.badge}
                    </span>
                    <Icon className="w-4 h-4 text-[#7C4B27]" />
                  </div>

                  <h4 className="text-base font-bold text-[#1F1B18]">{offer.title}</h4>
                  <p className="text-xs text-[#5E5750] mt-1 leading-snug line-clamp-2">
                    {offer.desc}
                  </p>
                </div>

                {/* Coupon Code Pill & Copy Button */}
                <div className="mt-4 pt-3 border-t border-[#E8E2D8]/60 flex items-center justify-between gap-2">
                  <div className="font-mono text-xs font-bold text-[#4A2E1E] tracking-wider px-2 py-1 bg-white/90 rounded-md border border-dashed border-[#C29B38]">
                    {offer.code}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(offer.code)}
                    className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-[#4A2E1E] hover:bg-[#382317] text-white transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
