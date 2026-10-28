'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Store,
  User,
  Flame,
  ShieldCheck,
  Truck,
  Check,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CATEGORIES } from '@/data/furnitureData';
import { EASE_LUXE } from '../motion';

// Pepperfry-style detailed subcategory map
const MEGA_CATEGORIES = [
  {
    id: 'living-room',
    label: 'Sofas & Seating',
    href: '/collections?category=living-room',
    columns: [
      {
        title: 'Sofas by Type',
        items: [
          { name: '3 Seater Sofas', href: '/collections?category=living-room' },
          { name: '2 Seater Love Seats', href: '/collections?category=living-room' },
          { name: 'L-Shape Sectionals', href: '/collections?category=living-room' },
          { name: 'Sofa Cum Beds', href: '/collections?category=living-room' },
          { name: 'Modular Plinth Sofas', href: '/collections?category=living-room' },
        ],
      },
      {
        title: 'Accent Seating',
        items: [
          { name: 'Curved Bouclé Armchairs', href: '/collections?category=living-room' },
          { name: 'Solid Teak Recliners', href: '/collections?category=living-room' },
          { name: 'Chaise Loungers', href: '/collections?category=living-room' },
          { name: 'Ottomans & Benches', href: '/collections?category=living-room' },
          { name: 'Solid Wood Stools', href: '/collections?category=living-room' },
        ],
      },
      {
        title: 'Tables & Media',
        items: [
          { name: 'Nesting Coffee Tables', href: '/collections?category=living-room' },
          { name: 'Marble Inlay Centre Tables', href: '/collections?category=living-room' },
          { name: 'End & Side Tables', href: '/collections?category=living-room' },
          { name: 'Console Tables', href: '/collections?category=living-room' },
        ],
      },
    ],
    featured: {
      title: 'The Kyoto L-Shape Sectional Sofa',
      badge: 'Solid Teak Plinth',
      price: '₹1,24,000',
      image: '/images/product-sofa-sectional.jpg',
      href: '/product/crf-13',
    },
  },
  {
    id: 'bedroom',
    label: 'Beds & Mattresses',
    href: '/collections?category=bedroom',
    columns: [
      {
        title: 'Beds by Size',
        items: [
          { name: 'King Size Platform Beds', href: '/collections?category=bedroom' },
          { name: 'Queen Size Fluted Beds', href: '/collections?category=bedroom' },
          { name: 'Single & Day Beds', href: '/collections?category=bedroom' },
          { name: 'Hydraulic Storage Beds', href: '/collections?category=bedroom' },
          { name: 'Low Plinth Zen Beds', href: '/collections?category=bedroom' },
        ],
      },
      {
        title: 'Bedroom Storage',
        items: [
          { name: 'Floating Bedside Tables', href: '/collections?category=bedroom' },
          { name: 'Chest of 4 Drawers', href: '/collections?category=bedroom' },
          { name: 'Dressing Consoles with Mirror', href: '/collections?category=bedroom' },
          { name: 'Artisan Blanket Trunks', href: '/collections?category=bedroom' },
        ],
      },
      {
        title: 'Mattress & Comfort',
        items: [
          { name: 'Organic Latex Mattresses', href: '/collections?category=bedroom' },
          { name: 'Orthopedic Pocket Spring', href: '/collections?category=bedroom' },
          { name: 'Dual Firmness Mattresses', href: '/collections?category=bedroom' },
        ],
      },
    ],
    featured: {
      title: 'The Sereno Slat Platform Bed',
      badge: '15-Yr Warranty',
      price: '₹82,000',
      image: '/images/category-bedroom.jpg',
      href: '/product/crf-04',
    },
  },
  {
    id: 'dining',
    label: 'Dining & Bar',
    href: '/collections?category=dining',
    columns: [
      {
        title: 'Dining Tables',
        items: [
          { name: '6 Seater Solid Wood Sets', href: '/collections?category=dining' },
          { name: '8 Seater Grand Dining Sets', href: '/collections?category=dining' },
          { name: '4 Seater Compact Dining', href: '/collections?category=dining' },
          { name: 'Heritage Live-Edge Slabs', href: '/collections?category=dining' },
          { name: 'Round Pedestal Tables', href: '/collections?category=dining' },
        ],
      },
      {
        title: 'Dining Seating',
        items: [
          { name: 'Curved Half-Moon Chairs', href: '/collections?category=dining' },
          { name: 'Upholstered Bouclé Chairs', href: '/collections?category=dining' },
          { name: 'Solid Teak Dining Benches', href: '/collections?category=dining' },
          { name: 'Leather Back Carver Chairs', href: '/collections?category=dining' },
        ],
      },
      {
        title: 'Bar & Entertaining',
        items: [
          { name: 'Fluted Bar Cabinets', href: '/collections?category=dining' },
          { name: 'Brass Accent Bar Trolleys', href: '/collections?category=dining' },
          { name: 'Swivel Counter Stools', href: '/collections?category=dining' },
          { name: 'Crockery Almirahs', href: '/collections?category=dining' },
        ],
      },
    ],
    featured: {
      title: 'The Aethel Live-Edge Table',
      badge: 'Solid Burma Teak',
      price: '₹94,000',
      image: '/images/category-dining.jpg',
      href: '/product/crf-03',
    },
  },
  {
    id: 'wardrobes',
    label: 'Wardrobes & Storage',
    href: '/collections?category=wardrobes',
    columns: [
      {
        title: 'Wardrobes by Doors',
        items: [
          { name: 'Walk-In Dressing Suites', href: '/collections?category=wardrobes' },
          { name: '4-Door Fluted Wardrobes', href: '/collections?category=wardrobes' },
          { name: '3-Door Mirrored Wardrobes', href: '/collections?category=wardrobes' },
          { name: '2-Door Solid Wood Almirahs', href: '/collections?category=wardrobes' },
          { name: 'Smoked Glass Sliding Doors', href: '/collections?category=wardrobes' },
        ],
      },
      {
        title: 'Entryway & Storage',
        items: [
          { name: 'Cushioned Shoe Racks', href: '/collections?category=wardrobes' },
          { name: 'Tilt-Out Shoe Cabinets', href: '/collections?category=wardrobes' },
          { name: 'Open Coat Racks & Shelves', href: '/collections?category=wardrobes' },
          { name: 'Sideboards & Credenzas', href: '/collections?category=wardrobes' },
        ],
      },
      {
        title: 'Modular Interiors',
        items: [
          { name: 'Velvet Jewelry Drawers', href: '/collections?category=wardrobes' },
          { name: 'Integrated LED Profiles', href: '/collections?category=wardrobes' },
          { name: 'German Soft-Close Systems', href: '/collections?category=wardrobes' },
        ],
      },
    ],
    featured: {
      title: 'The Elysian Walk-In Suite',
      badge: 'Custom Architecture',
      price: '₹1,85,000',
      image: '/images/category-wardrobes.jpg',
      href: '/product/crf-06',
    },
  },
  {
    id: 'tv-units',
    label: 'TV & Media Units',
    href: '/collections?category=tv-units',
    columns: [
      {
        title: 'Media Units',
        items: [
          { name: 'Acoustic Slat TV Backdrops', href: '/collections?category=tv-units' },
          { name: 'Floating Low Consoles', href: '/collections?category=tv-units' },
          { name: 'Marble Inlay Media Units', href: '/collections?category=tv-units' },
          { name: 'Wire Concealed TV Units', href: '/collections?category=tv-units' },
          { name: 'Floor Standing Credenzas', href: '/collections?category=tv-units' },
        ],
      },
      {
        title: 'Wall Display',
        items: [
          { name: 'Solid Wood Bookcases', href: '/collections?category=tv-units' },
          { name: 'Floating Wall Shelves', href: '/collections?category=tv-units' },
          { name: 'Curio Display Cabinets', href: '/collections?category=tv-units' },
        ],
      },
    ],
    featured: {
      title: 'The Lumina Acoustic Console',
      badge: 'Ambient LED System',
      price: '₹76,000',
      image: '/images/category-tv-unit.jpg',
      href: '/product/crf-05',
    },
  },
  {
    id: 'office-furniture',
    label: 'Office & Study',
    href: '/collections?category=office-furniture',
    columns: [
      {
        title: 'Study Desks',
        items: [
          { name: 'Executive Walnut Desks', href: '/collections?category=office-furniture' },
          { name: 'Brass Inlay Writing Tables', href: '/collections?category=office-furniture' },
          { name: 'Compact Home Study Tables', href: '/collections?category=office-furniture' },
          { name: 'Standing & Height Adjust Desks', href: '/collections?category=office-furniture' },
        ],
      },
      {
        title: 'Office Chairs',
        items: [
          { name: 'Ergonomic Bentwood Chairs', href: '/collections?category=office-furniture' },
          { name: 'Full-Grain Leather Swivel', href: '/collections?category=office-furniture' },
          { name: 'Mid-Century Accent Chairs', href: '/collections?category=office-furniture' },
        ],
      },
    ],
    featured: {
      title: 'The Apex Executive Desk',
      badge: 'Solid American Walnut',
      price: '₹68,000',
      image: '/images/category-office.jpg',
      href: '/product/crf-07',
    },
  },
  {
    id: 'interior-design',
    label: 'Interior Design',
    href: '/interior-design',
    isSpecial: true,
  },
  {
    id: 'custom-studio',
    label: '3D Custom Studio',
    href: '/custom-studio',
    isSpecial: true,
  },
  {
    id: 'deals',
    label: '🔥 Deals of the Day',
    href: '/collections?filter=deals',
    isDeal: true,
  },
];

const SEARCH_PLACEHOLDERS = [
  "Search 'Solid Teak Sofa Sets'...",
  "Search 'King Hydraulic Storage Beds'...",
  "Search 'Heritage Live-Edge Dining Slabs'...",
  "Search 'Acoustic Slat TV Consoles'...",
  "Search 'Curved Bouclé Accent Armchairs'...",
  "Search 'American Walnut Executive Desks'...",
];

export default function Navbar() {
  const pathname = usePathname();
  const { openCart, openSearch, cartCount, cartSubtotal, wishlist } = useCart();
  const [activeMegaCategory, setActiveMegaCategory] = useState<string | null>(null);
  const activeCat = MEGA_CATEGORIES.find((c) => c.id === activeMegaCategory);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cycling search placeholder like Pepperfry
  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % SEARCH_PLACEHOLDERS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // Close menus on path transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaCategory(null);
    setIsAccountOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openSearch();
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md border-b border-[#E8E2D8]' : 'border-b border-[#EFECE6]'
      }`}
    >
      {/* ============================================================== */}
      {/* TIER 1: MAIN SEARCH & BRAND HEADER (Pepperfry Style)           */}
      {/* ============================================================== */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-3">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -ml-2 rounded-lg text-[#1F1B18] hover:bg-[#F5F0E8] transition-colors"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo & Atelier Tagline */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5] shadow-xs group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/craftora-logo.png"
                alt="Craftora Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1F1B18] leading-none">
                Craftora
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#7C4B27] font-semibold mt-0.5">
                Solid Wood Atelier
              </span>
            </div>
          </Link>

          {/* Central Large Search Bar (Pepperfry signature search box) */}
          <div className="flex-1 max-w-2xl mx-2 hidden sm:block">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <div
                onClick={openSearch}
                className="cursor-pointer flex items-center w-full bg-[#FAF8F5] hover:bg-[#F5F0E8] border border-[#E8E2D8] focus-within:border-[#C29B38] focus-within:ring-2 focus-within:ring-[#C29B38]/20 rounded-full transition-all duration-200 pl-4 pr-1.5 py-1.5"
              >
                <Search className="w-4 h-4 text-[#8E857C] shrink-0 mr-2.5" />
                <div className="flex-1 overflow-hidden h-6 flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={placeholderIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-[#8E857C] select-none truncate font-normal"
                    >
                      {SEARCH_PLACEHOLDERS[placeholderIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openSearch();
                  }}
                  className="bg-[#4A2E1E] hover:bg-[#382317] text-white px-4 py-1.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0 shadow-xs"
                >
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Action Icons with Text Labels (Pepperfry Style) */}
          <div className="flex items-center gap-1 sm:gap-4 flex-shrink-0">
            
            {/* Mobile Search Button */}
            <button
              type="button"
              onClick={openSearch}
              className="sm:hidden p-2 rounded-lg text-[#1F1B18] hover:bg-[#F5F0E8]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Jaipur Flagship Studio Action */}
            <Link
              href="/contact"
              className="hidden md:flex flex-col items-center text-[#5E5750] hover:text-[#7C4B27] transition-colors p-1.5 rounded-lg group"
              title="Jaipur Flagship Studio & Workshop"
            >
              <Store className="w-5 h-5 mb-0.5 group-hover:scale-110 transition-transform text-[#4A2E1E]" />
              <span className="text-[11px] font-medium leading-none">Jaipur Studio</span>
            </Link>

            {/* Wishlist Action */}
            <Link
              href="/collections?filter=wishlist"
              className="relative flex flex-col items-center text-[#5E5750] hover:text-[#7C4B27] transition-colors p-1.5 rounded-lg group"
              title="Saved Items"
            >
              <div className="relative">
                <Heart className="w-5 h-5 mb-0.5 group-hover:scale-110 transition-transform" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 rounded-full bg-[#C29B38] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <span className="hidden lg:block text-[11px] font-medium leading-none">Wishlist</span>
            </Link>

            {/* Cart Action (with Price Preview) */}
            <button
              type="button"
              onClick={openCart}
              className="relative flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#F5F0E8] border border-[#E8E2D8] hover:border-[#C29B38] px-3 py-1.5 rounded-full transition-all group"
              title="Cart & Quote Basket"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#4A2E1E] group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 rounded-full bg-[#4A2E1E] text-white text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E857C] leading-none">
                  Cart
                </span>
                <span className="text-xs font-bold text-[#1F1B18] leading-tight">
                  ₹{cartSubtotal > 0 ? cartSubtotal.toLocaleString('en-IN') : '0'}
                </span>
              </div>
            </button>

            {/* User / Account Popover Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="hidden lg:flex flex-col items-center text-[#5E5750] hover:text-[#7C4B27] transition-colors p-1.5 rounded-lg"
                title="Account"
              >
                <User className="w-5 h-5 mb-0.5 text-[#1F1B18]" />
                <span className="text-[11px] font-medium leading-none">Account</span>
              </button>

              <AnimatePresence>
                {isAccountOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-[#E8E2D8] p-4 z-50 text-left"
                  >
                    <div className="pb-3 border-b border-[#F0ECE4]">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold uppercase text-[#8E857C] tracking-wider">Account Portal</p>
                        <span className="text-[10px] bg-[#FAF5EE] text-[#7C4B27] px-2 py-0.5 rounded-full font-bold">Jaipur Patron</span>
                      </div>
                      <Link
                        href="/account"
                        onClick={() => setIsAccountOpen(false)}
                        className="text-sm font-bold text-[#1F1B18] mt-1 hover:text-[#7C4B27] flex items-center justify-between group"
                      >
                        <span>Rajat Singh</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className="py-2 space-y-1">
                      <Link
                        href="/account?tab=orders"
                        onClick={() => setIsAccountOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-[#1F1B18] hover:bg-[#FAF8F5] transition-colors"
                      >
                        <span>My Orders & Live Tracker</span>
                        <span className="w-2 h-2 rounded-full bg-[#C29B38]" />
                      </Link>
                      <Link
                        href="/account?tab=custom"
                        onClick={() => setIsAccountOpen(false)}
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-[#1F1B18] hover:bg-[#FAF8F5] transition-colors"
                      >
                        Custom 3D Commissions
                      </Link>
                      <Link
                        href="/account?tab=warranty"
                        onClick={() => setIsAccountOpen(false)}
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-[#1F1B18] hover:bg-[#FAF8F5] transition-colors"
                      >
                        15-Year Warranty Vault
                      </Link>
                      <Link
                        href="/account?tab=addresses"
                        onClick={() => setIsAccountOpen(false)}
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-[#1F1B18] hover:bg-[#FAF8F5] transition-colors"
                      >
                        Saved Delivery Addresses
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setIsAccountOpen(false)}
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-[#1F1B18] hover:bg-[#FAF8F5] transition-colors"
                      >
                        Book Jaipur Atelier Consultation
                      </Link>
                    </div>
                    <div className="pt-2 border-t border-[#F0ECE4]">
                      <a
                        href="tel:+919950757127"
                        className="block text-center w-full py-2 bg-[#FAF5EE] hover:bg-[#F5EBDD] text-[#7C4B27] rounded-xl text-xs font-bold transition-colors"
                        title="Direct call to Owner Surender Singh Rajora"
                      >
                        Owner Line: +91 9950757127
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* TIER 2: PEPPERFRY CATEGORY MEGA NAVIGATION BAR                */}
      {/* ============================================================== */}
      <nav
        className="hidden lg:block border-t border-[#F0ECE4] bg-white relative"
        onMouseLeave={() => setActiveMegaCategory(null)}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <ul className="flex items-center justify-between gap-1 py-1">
            {MEGA_CATEGORIES.map((cat) => {
              const isHovered = activeMegaCategory === cat.id;

              if (cat.isSpecial) {
                return (
                  <li key={cat.id} onMouseEnter={() => setActiveMegaCategory(null)}>
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-[#4A2E1E] bg-[#FAF5EE] hover:bg-[#F5EBDD] transition-colors border border-[#E8DCCB]"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                      <span>{cat.label}</span>
                    </Link>
                  </li>
                );
              }

              if (cat.isDeal) {
                return (
                  <li key={cat.id} onMouseEnter={() => setActiveMegaCategory(null)}>
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 transition-colors border border-red-200"
                    >
                      <Flame className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                      <span>{cat.label}</span>
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={cat.id}
                  onMouseEnter={() => {
                    if (cat.columns) setActiveMegaCategory(cat.id);
                    else setActiveMegaCategory(null);
                  }}
                >
                  <Link
                    href={cat.href}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                      isHovered
                        ? 'text-[#4A2E1E] bg-[#FAF8F5]'
                        : 'text-[#1F1B18] hover:text-[#7C4B27] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <ChevronDown
                      className={`w-3 h-3 text-[#8E857C] transition-transform duration-200 ${
                        isHovered ? 'rotate-180 text-[#4A2E1E]' : ''
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Container-Anchored Pepperfry Mega Menu Panel (Full Width, Zero Clipping) */}
        <AnimatePresence>
          {activeCat && activeCat.columns && (
            <motion.div
              key={activeCat.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, ease: EASE_LUXE }}
              className="absolute left-0 right-0 top-full pt-2 z-50 pointer-events-auto"
            >
              <div className="w-full px-4 sm:px-8 lg:px-12">
                <div className="bg-white rounded-2xl shadow-2xl border border-[#E8E2D8] p-6 grid grid-cols-12 gap-8">
                  {/* Subcategory Columns (9 Columns) */}
                  <div className="col-span-9 grid grid-cols-3 gap-8">
                    {activeCat.columns.map((col, idx) => (
                      <div key={idx} className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#7C4B27] border-b border-[#F0ECE4] pb-2">
                          {col.title}
                        </h4>
                        <ul className="space-y-2">
                          {col.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                className="text-xs text-[#5E5750] hover:text-[#1F1B18] hover:font-semibold transition-colors block py-0.5"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Featured Product Promo Card (3 Columns) */}
                  {activeCat.featured && (
                    <div className="col-span-3 bg-[#FAF8F5] rounded-xl p-4 border border-[#E8E2D8] flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#4A2E1E] text-white text-[10px] font-bold mb-2.5">
                          {activeCat.featured.badge}
                        </span>
                        <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-white mb-3 shadow-xs">
                          <Image
                            src={activeCat.featured.image}
                            alt={activeCat.featured.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h5 className="text-xs font-bold text-[#1F1B18] line-clamp-2 leading-snug">
                          {activeCat.featured.title}
                        </h5>
                        <p className="text-xs font-bold text-[#7C4B27] mt-1">
                          {activeCat.featured.price}
                        </p>
                      </div>
                      <Link
                        href={activeCat.featured.href}
                        className="mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2 bg-white hover:bg-[#F5F0E8] border border-[#E8E2D8] rounded-xl text-xs font-bold text-[#1F1B18] transition-colors shadow-xs"
                      >
                        View Piece <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ============================================================== */}
      {/* MOBILE DRAWER NAVIGATION                                       */}
      {/* ============================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-[#E8E2D8] shadow-xl overflow-hidden px-4 py-6 max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-4">
              {/* Mobile Search input */}
              <div
                onClick={openSearch}
                className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-sm text-[#8E857C]"
              >
                <Search className="w-4 h-4" />
                <span>Search furniture, sofas, beds...</span>
              </div>

              {/* Mega Categories accordion */}
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8E857C] px-2 mb-2">
                  Shop by Category
                </p>
                {MEGA_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FAF8F5] text-sm font-semibold text-[#1F1B18] transition-colors"
                  >
                    <span>{cat.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#8E857C]" />
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-[#F0ECE4] space-y-2">
                <Link
                  href="/account"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-[#1F1B18] font-bold text-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <User className="w-4 h-4 text-[#7C4B27]" />
                    <span>My Account & Orders Tracker</span>
                  </div>
                  <span className="text-xs bg-[#C29B38] text-white px-2 py-0.5 rounded-full font-semibold">1 Active</span>
                </Link>
                <Link
                  href="/custom-studio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF5EE] text-[#4A2E1E] font-bold text-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#C29B38]" />
                  <span>Launch 3D Custom Studio</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-[#FAF8F5] text-[#1F1B18] font-medium text-sm"
                >
                  <Store className="w-4 h-4 text-[#7C4B27]" />
                  <span>Jaipur Flagship Studio & Workshop</span>
                </Link>
                <Link
                  href="/contact"
                  className="block text-center w-full py-3 bg-[#4A2E1E] text-white rounded-xl text-sm font-bold shadow-sm"
                >
                  Schedule Free In-Home Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
