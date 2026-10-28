'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Store, Sparkles, ChevronDown, Clock, ShieldCheck } from 'lucide-react';
import PincodeModal from '../common/PincodeModal';

const PROMO_MESSAGES = [
  '🏛️ Craftora Atelier Jaipur: 35+ Years of Heritage & 2,000+ Happy Customers',
  '🪵 100% Seasoned Kiln-Dried Solid Teak & Walnut with 15-Year Warranty',
  '📍 Flagship Studio: Chomu Tatiyawas Toll Plaza, Jaipur 303701',
  '📞 Direct Call to Owner Surender Singh Rajora: +91 9950757127',
  '🚚 Direct Jaipur Workshop to Doorstep Delivery & Carpenter Assembly'
];

export default function AnnouncementBar() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);
  const [pincode, setPincode] = useState('303701');
  const [city, setCity] = useState('Jaipur');

  useEffect(() => {
    try {
      const savedPin = localStorage.getItem('craftora_pincode');
      const savedCity = localStorage.getItem('craftora_city');
      if (savedPin) setPincode(savedPin);
      if (savedCity) setCity(savedCity);
    } catch {}

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % PROMO_MESSAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleSavePincode = (newPin: string, newCity: string) => {
    setPincode(newPin);
    setCity(newCity.split(',')[0]);
    try {
      localStorage.setItem('craftora_pincode', newPin);
      localStorage.setItem('craftora_city', newCity.split(',')[0]);
    } catch {}
  };

  return (
    <>
      <div className="bg-[#1F1B18] text-[#E8E2D8] text-[12px] sm:text-[13px] border-b border-[#352F2B] py-1.5 px-4 sm:px-8 lg:px-12 relative z-50">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-4">
          
          {/* Left: Jaipur Flagship & Custom Studio Links */}
          <div className="hidden lg:flex items-center gap-4 text-[#B8AEA3] text-xs">
            <Link
              href="/custom-studio"
              className="hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>3D Custom Studio</span>
            </Link>
            <span className="text-[#3E3832]">|</span>
            <Link
              href="/contact"
              className="hover:text-white transition-colors flex items-center gap-1 font-medium text-[#E8DCCB]"
            >
              <Store className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Jaipur Flagship Studio & Workshop</span>
            </Link>
            <span className="text-[#3E3832]">|</span>
            <Link
              href="/projects"
              className="hover:text-white transition-colors"
            >
              Hotels & Commercial Projects
            </Link>
          </div>

          {/* Center: Rotating Promotional Ticker */}
          <div className="flex-1 max-w-xl text-center overflow-hidden h-5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="block text-center font-medium text-white/95 truncate px-2 text-xs sm:text-xs"
              >
                {PROMO_MESSAGES[currentIdx]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Right: Pincode Deliver To & Contact */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            {/* Pincode Selector */}
            <button
              type="button"
              onClick={() => setIsPincodeModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-[#E8E2D8] hover:text-[#C29B38] transition-colors py-0.5 px-2.5 rounded bg-white/5 hover:bg-white/10"
              title="Change Delivery Location"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Location: <strong className="text-white underline decoration-[#C29B38]/50 underline-offset-2">{city} {pincode}</strong></span>
              <ChevronDown className="w-3 h-3 text-[#A8A29E]" />
            </button>

            <span className="text-[#3E3832] hidden sm:inline">|</span>

            <a
              href="tel:+919950757127"
              className="hidden sm:flex items-center gap-1 text-[#E8DCCB] hover:text-[#C29B38] transition-colors font-medium"
              title="Call Owner Surender Singh Rajora"
            >
              <Phone className="w-3 h-3 text-[#C29B38]" />
              <span>+91 9950757127</span>
            </a>
          </div>
        </div>
      </div>

      <PincodeModal
        isOpen={isPincodeModalOpen}
        onClose={() => setIsPincodeModalOpen(false)}
        currentPincode={pincode}
        onSavePincode={handleSavePincode}
      />
    </>
  );
}
