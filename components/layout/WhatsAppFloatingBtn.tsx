'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

export default function WhatsAppFloatingBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Hello Craftora Studio! I am interested in custom furniture for my home. I would like to discuss designs, wood choices, and pricing.'
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.6 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 1.8 }}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end"
    >
      {/* Quick Prompt Popover */}
      <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 380, damping: 26 }}
          className="mb-3 w-72 rounded-2xl bg-white p-4 shadow-2xl border border-[#E7E5E4] origin-bottom-right"
        >
          <div className="flex items-start justify-between pb-2 border-b border-[#F0EFED]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-sm font-semibold text-[#1C1917]">
                Craftora Design Atelier
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#78716C] hover:text-black p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-2 text-sm text-[#44403C] leading-relaxed">
            Need custom dimensions, wood advice, or a quick quotation? Connect directly with our lead furniture artisan.
          </p>
          <a
            href={`https://wa.me/919876543210?text=${defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex items-center gap-2 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-xl hover:shadow-2xl transition-[background-color,box-shadow] duration-300"
        title="Direct Artisan WhatsApp Chat"
      >
        <motion.span
          className="inline-flex"
          animate={isOpen ? { rotate: 0 } : { rotate: [0, -14, 14, -10, 10, 0] }}
          transition={isOpen ? { duration: 0.2 } : { duration: 0.8, repeat: Infinity, repeatDelay: 4 }}
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </motion.span>
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
          Custom Inquiry
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]" />
        </span>
      </motion.button>
    </motion.div>
  );
}
