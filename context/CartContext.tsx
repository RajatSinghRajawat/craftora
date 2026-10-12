'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { FurnitureItem } from '@/data/furnitureData';

export interface CartItem {
  item: FurnitureItem;
  quantity: number;
  selectedWood: string;
  selectedFinish: string;
  selectedFabric?: string;
  customDimensions?: {
    width?: string;
    depth?: string;
    height?: string;
    notes?: string;
  };
  totalCalculatedPrice: number;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  isSearchOpen: boolean;
  quickViewProduct: FurnitureItem | null;
  addToCart: (
    item: FurnitureItem,
    options?: {
      wood?: string;
      finish?: string;
      fabric?: string;
      dimensions?: { width?: string; depth?: string; height?: string; notes?: string };
      quantity?: number;
    }
  ) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  openCart: () => void;
  closeCart: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  setQuickViewProduct: (product: FurnitureItem | null) => void;
  cartCount: number;
  cartSubtotal: number;
  clearCart: () => void;
  generateWhatsAppQuoteLink: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<FurnitureItem | null>(null);

  // Load from localStorage if available
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('craftora_cart');
      if (savedCart) setCart(JSON.parse(savedCart));
      const savedWishlist = localStorage.getItem('craftora_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('craftora_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('craftora_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  const addToCart = (
    item: FurnitureItem,
    options?: {
      wood?: string;
      finish?: string;
      fabric?: string;
      dimensions?: { width?: string; depth?: string; height?: string; notes?: string };
      quantity?: number;
    }
  ) => {
    const selectedWood = options?.wood || item.woodOptions[0] || 'Burma Teak';
    const selectedFinish = options?.finish || item.finishOptions[0] || 'Natural Matte';
    const selectedFabric = options?.fabric || (item.fabricOptions ? item.fabricOptions[0] : undefined);
    const quantity = options?.quantity || 1;

    setCart((prev) => {
      // Check if identical configuration already exists
      const existingIndex = prev.findIndex(
        (ci) =>
          ci.item.id === item.id &&
          ci.selectedWood === selectedWood &&
          ci.selectedFinish === selectedFinish &&
          ci.selectedFabric === selectedFabric
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [
        ...prev,
        {
          item,
          quantity,
          selectedWood,
          selectedFinish,
          selectedFabric,
          customDimensions: options?.dimensions,
          totalCalculatedPrice: item.price,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(index);
      return;
    }
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((total, ci) => total + ci.quantity, 0);
  const cartSubtotal = cart.reduce((total, ci) => total + ci.totalCalculatedPrice * ci.quantity, 0);

  const generateWhatsAppQuoteLink = () => {
    if (cart.length === 0) {
      const message = encodeURIComponent(
        `Hello Craftora Studio, I am interested in custom bespoke furniture for my home. Could we discuss catalog options and studio consultation?`
      );
      return `https://wa.me/919876543210?text=${message}`;
    }

    const itemsSummary = cart
      .map(
        (ci, i) =>
          `${i + 1}. *${ci.item.name}* (Qty: ${ci.quantity})\n   • Wood: ${ci.selectedWood}\n   • Finish: ${ci.selectedFinish}${ci.selectedFabric ? `\n   • Fabric: ${ci.selectedFabric}` : ''}\n   • Est: ₹${(ci.totalCalculatedPrice * ci.quantity).toLocaleString('en-IN')}`
      )
      .join('\n\n');

    const rawMessage = `Hello Craftora Atelier,\n\nI would like to request an official quote & consultation for my bespoke furniture selection:\n\n${itemsSummary}\n\n*Estimated Total: ₹${cartSubtotal.toLocaleString('en-IN')}*\n\nPlease confirm custom timeline, wood availability, and schedule a studio design review.`;

    return `https://wa.me/919876543210?text=${encodeURIComponent(rawMessage)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        isSearchOpen,
        quickViewProduct,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        setQuickViewProduct,
        cartCount,
        cartSubtotal,
        clearCart,
        generateWhatsAppQuoteLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
