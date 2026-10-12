'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ArrowRight, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';
import { EASE_LUXE } from '../motion';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    generateWhatsAppQuoteLink,
    clearCart,
  } = useCart();

  return (
    <AnimatePresence>
    {isCartOpen && (
    <motion.div
      key="cart-drawer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
      transition={{ duration: 0.3 }}
      onClick={closeCart}
      className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 32 }}
          onClick={(e) => e.stopPropagation()}
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#E7E5E4]"
        >
          {/* Header */}
          <div className="p-6 bg-[#FAFAF9] border-b border-[#E7E5E4] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A0741A]" />
              <h2 className="text-xl font-semibold text-[#1C1917] tracking-tight">
                Bespoke Quote Basket
              </h2>
              <span className="text-xs bg-[#4A2E1E] text-white px-2 py-0.5 rounded-full font-medium">
                {cart.length} {cart.length === 1 ? 'piece' : 'pieces'}
              </span>
            </div>
            <motion.button
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeCart}
              className="p-2 rounded-full text-[#57534E] hover:text-black hover:bg-[#F5F5F4] transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {cart.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE_LUXE }}
                className="h-full flex flex-col items-center justify-center text-center p-8"
              >
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-16 h-16 rounded-full bg-[#F5F5F4] flex items-center justify-center text-[#7C4B27] mb-4"
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl text-[#1C1917] font-semibold">
                  Your Quote Basket Is Empty
                </h3>
                <p className="mt-2 text-sm text-[#57534E] max-w-xs leading-relaxed">
                  Explore our handcrafted furniture catalog or design your own bespoke piece in our 3D customizer.
                </p>
                <div className="mt-6 flex flex-col gap-2 w-full">
                  <Button
                    variant="primary"
                    onClick={closeCart}
                    href="/collections"
                    fullWidth
                  >
                    Browse Collections
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={closeCart}
                    href="/custom-studio"
                    fullWidth
                  >
                    Custom Furniture Studio
                  </Button>
                </div>
              </motion.div>
            ) : (
              <AnimatePresence initial={true} mode="popLayout">
              {cart.map((cartItem, idx) => (
                <motion.div
                  key={`${cartItem.item.id}-${idx}`}
                  layout
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 60, scale: 0.95, transition: { duration: 0.25 } }}
                  transition={{ duration: 0.5, delay: 0.15 + idx * 0.06, ease: EASE_LUXE }}
                  className="flex gap-4 p-4 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] relative group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white border border-[#E7E5E4] flex-shrink-0">
                    <Image
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <Link
                        href={`/product/${cartItem.item.id}`}
                        onClick={closeCart}
                        className="text-sm font-semibold text-[#1C1917] hover:text-[#7C4B27] transition-colors truncate block"
                      >
                        {cartItem.item.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="text-[#78716C] hover:text-red-600 transition-colors p-1"
                        title="Remove piece"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Custom Specs */}
                    <div className="mt-1 space-y-0.5 text-xs text-[#57534E]">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#78716C]">Wood:</span>
                        <span className="font-medium text-[#4A2E1E]">{cartItem.selectedWood}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#78716C]">Finish:</span>
                        <span>{cartItem.selectedFinish}</span>
                      </div>
                      {cartItem.selectedFabric && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#78716C]">Fabric:</span>
                          <span>{cartItem.selectedFabric}</span>
                        </div>
                      )}
                    </div>

                    {/* Price & Quantity */}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#1C1917]">
                        ₹{(cartItem.totalCalculatedPrice * cartItem.quantity).toLocaleString('en-IN')}
                      </span>

                      <div className="flex items-center border border-[#D6D3D1] rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(idx, cartItem.quantity - 1)}
                          className="p-1 hover:bg-[#F5F5F4] text-[#4A2E1E] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <motion.span
                          key={cartItem.quantity}
                          initial={{ y: -8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="px-2.5 text-xs font-medium text-[#1C1917]"
                        >
                          {cartItem.quantity}
                        </motion.span>
                        <button
                          onClick={() => updateQuantity(idx, cartItem.quantity + 1)}
                          className="p-1 hover:bg-[#F5F5F4] text-[#4A2E1E] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              </AnimatePresence>
            )}
          </div>

          {/* Footer & Action Buttons */}
          {cart.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE_LUXE }}
              className="p-6 bg-[#FAFAF9] border-t border-[#E7E5E4] space-y-4"
            >
              <div className="space-y-1.5 text-xs text-[#57534E]">
                <div className="flex justify-between">
                  <span>Estimated Pieces Value:</span>
                  <span className="font-medium text-[#1C1917]">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>White-Glove Delivery & Assembly:</span>
                  <span className="text-[#4A5B47] font-medium">Complimentary</span>
                </div>
                <div className="flex justify-between">
                  <span>In-Home Site Measurement:</span>
                  <span className="text-[#4A5B47] font-medium">Free with Studio</span>
                </div>
                <div className="pt-2 border-t border-[#E7E5E4] flex justify-between text-base font-semibold text-[#1C1917]">
                  <span>Total Estimated Quote:</span>
                  <motion.span
                    key={cartSubtotal}
                    initial={{ scale: 1.15, color: '#A0741A' }}
                    animate={{ scale: 1, color: '#1C1917' }}
                    transition={{ duration: 0.5 }}
                    className="text-lg"
                  >
                    ₹{cartSubtotal.toLocaleString('en-IN')}
                  </motion.span>
                </div>
              </div>

              {/* WhatsApp Instant Quote Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={generateWhatsAppQuoteLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-[background-color,box-shadow]"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Submit Quote to Studio via WhatsApp</span>
              </motion.a>

              {/* Consultation Booking Button */}
              <Button
                variant="primary"
                fullWidth
                href="/contact"
                onClick={closeCart}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book In-Studio Design Consultation
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#6B6560]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A0741A]" />
                <span>Craftora 10-Year Solid Hardwood Guarantee</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
    )}
    </AnimatePresence>
  );
}
