'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, CheckCircle2, Truck, ShieldCheck, Store, ArrowRight } from 'lucide-react';

interface PincodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPincode: string;
  onSavePincode: (pincode: string, city: string) => void;
}

const PINCODE_MAP: Record<string, string> = {
  '400': 'Mumbai, Maharashtra',
  '401': 'Thane / Navi Mumbai',
  '110': 'New Delhi, Delhi NCR',
  '122': 'Gurugram, Haryana',
  '201': 'Noida, Uttar Pradesh',
  '560': 'Bengaluru, Karnataka',
  '500': 'Hyderabad, Telangana',
  '411': 'Pune, Maharashtra',
  '600': 'Chennai, Tamil Nadu',
  '700': 'Kolkata, West Bengal',
  '380': 'Ahmedabad, Gujarat',
  '302': 'Jaipur, Rajasthan',
  '682': 'Kochi, Kerala',
};

export default function PincodeModal({
  isOpen,
  onClose,
  currentPincode,
  onSavePincode,
}: PincodeModalProps) {
  const [pincode, setPincode] = useState(currentPincode || '400001');
  const [detectedCity, setDetectedCity] = useState('Mumbai, Maharashtra');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPincode(currentPincode || '400001');
      setIsSuccess(false);
      setError('');
    }
  }, [isOpen, currentPincode]);

  const handleLookup = (pin: string) => {
    setPincode(pin);
    setError('');
    setIsSuccess(false);

    if (pin.length === 6) {
      const prefix = pin.substring(0, 3);
      const city = PINCODE_MAP[prefix] || 'Selected Metro Region, India';
      setDetectedCity(city);
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode)) {
      setError('Please enter a valid 6-digit Indian PIN code');
      return;
    }
    const prefix = pincode.substring(0, 3);
    const city = PINCODE_MAP[prefix] || 'Metro Region, India';
    setDetectedCity(city);
    setIsSuccess(true);
    onSavePincode(pincode, city);
    setTimeout(() => {
      onClose();
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#E8E2D8] p-6 z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F0ECE4]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF5EE] flex items-center justify-center text-[#7C4B27]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1F1B18]">Select Delivery Location</h3>
                  <p className="text-xs text-[#8E857C]">Check delivery dates &amp; free installation</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-[#F5F0E8] flex items-center justify-center text-[#5E5750] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleApply} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5E5750] mb-1.5">
                  Enter 6-Digit PIN Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => handleLookup(e.target.value.replace(/\D/g, ''))}
                    placeholder="e.g. 400001, 560001, 110001"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E2D8] text-base font-medium text-[#1F1B18] focus:outline-none focus:ring-2 focus:ring-[#C29B38] focus:border-transparent tracking-widest placeholder:tracking-normal"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 px-4 bg-[#4A2E1E] hover:bg-[#382317] text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
                  >
                    Apply <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
              </div>

              {/* Delivery Benefits Pill */}
              <div className="bg-[#FAF8F5] rounded-xl p-4 border border-[#E8E2D8] space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1F1B18]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Delivering to: <strong className="text-[#7C4B27]">{detectedCity}</strong></span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-[#5E5750]">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free Delivery (3-5 Days)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
                    <span>Free Room Assembly</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Store className="w-3.5 h-3.5 text-[#7C4B27] shrink-0" />
                    <span>Studio Trial Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>No-Cost EMI Options</span>
                  </div>
                </div>
              </div>

              {/* Quick Select Popular Metros */}
              <div>
                <p className="text-xs text-[#8E857C] mb-2 font-medium">Popular Cities:</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { name: 'Mumbai', pin: '400001' },
                    { name: 'Delhi NCR', pin: '110001' },
                    { name: 'Bengaluru', pin: '560001' },
                    { name: 'Hyderabad', pin: '500001' },
                    { name: 'Pune', pin: '411001' },
                    { name: 'Chennai', pin: '600001' },
                  ].map((city) => (
                    <button
                      key={city.pin}
                      type="button"
                      onClick={() => handleLookup(city.pin)}
                      className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                        pincode === city.pin
                          ? 'border-[#4A2E1E] bg-[#4A2E1E] text-white'
                          : 'border-[#E8E2D8] bg-white text-[#5E5750] hover:border-[#C29B38] hover:text-[#1F1B18]'
                      }`}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              </div>

              {isSuccess && (
                <div className="flex items-center gap-2 p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Location updated! Delivery dates updated for {pincode}.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
