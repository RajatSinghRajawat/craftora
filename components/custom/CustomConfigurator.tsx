'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Sliders,
  Ruler,
  Palette,
  Layers,
  Check,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  RefreshCw,
  Box,
} from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { useCart } from '@/context/CartContext';
import { AnimatePresence, animate, motion } from 'framer-motion';
import { EASE_LUXE, Reveal, Stagger, StaggerItem } from '../motion';

function AnimatedPrice({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const controls = animate(display, value, {
      duration: 0.8,
      ease: EASE_LUXE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <>₹{display.toLocaleString('en-IN')}</>;
}

/** Small value that pops when it changes. */
function PopValue({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      key={String(children)}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE_LUXE }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
}

interface CustomPieceOption {
  id: string;
  category: string;
  name: string;
  basePrice: number;
  image: string;
  defaultDimensions: { length: number; depth: number; height: number };
  unit: string;
}

const CUSTOM_PIECES: CustomPieceOption[] = [
  {
    id: 'custom-chair',
    category: 'Living Room',
    name: 'Bespoke Sculptural Armchair',
    basePrice: 42000,
    image: '/images/product-chair-solace.jpg',
    defaultDimensions: { length: 85, depth: 88, height: 82 },
    unit: 'cm',
  },
  {
    id: 'custom-sofa',
    category: 'Living Room',
    name: 'Modular Plinth Lounge Sofa',
    basePrice: 110000,
    image: '/images/product-sofa-zenith.jpg',
    defaultDimensions: { length: 280, depth: 105, height: 75 },
    unit: 'cm',
  },
  {
    id: 'custom-dining',
    category: 'Dining',
    name: 'Solid Live-Edge Dining Table',
    basePrice: 88000,
    image: '/images/category-dining.jpg',
    defaultDimensions: { length: 240, depth: 100, height: 76 },
    unit: 'cm',
  },
  {
    id: 'custom-bed',
    category: 'Bedroom',
    name: 'Floating Slat Platform Bed',
    basePrice: 78000,
    image: '/images/category-bedroom.jpg',
    defaultDimensions: { length: 200, depth: 215, height: 95 },
    unit: 'cm',
  },
  {
    id: 'custom-tv',
    category: 'TV Units',
    name: 'Acoustic Wood Slat TV Console Wall',
    basePrice: 72000,
    image: '/images/category-tv-unit.jpg',
    defaultDimensions: { length: 260, depth: 45, height: 210 },
    unit: 'cm',
  },
  {
    id: 'custom-wardrobe',
    category: 'Wardrobes',
    name: 'Walk-In Dressing Suite with Glass Doors',
    basePrice: 175000,
    image: '/images/category-wardrobes.jpg',
    defaultDimensions: { length: 300, depth: 65, height: 240 },
    unit: 'cm',
  },
  {
    id: 'custom-office',
    category: 'Office Furniture',
    name: 'Executive Walnut Desk with Brass Inlay',
    basePrice: 65000,
    image: '/images/category-office.jpg',
    defaultDimensions: { length: 180, depth: 85, height: 76 },
    unit: 'cm',
  },
];

const WOOD_TYPES = [
  { id: 'teak', name: 'Burma Teak', color: '#7C4B27', multiplier: 1.15, description: 'Golden honey grain, high natural oils' },
  { id: 'walnut', name: 'American Walnut', color: '#4A2E1E', multiplier: 1.25, description: 'Deep dark espresso, velvet chatoyancy' },
  { id: 'oak', name: 'European White Oak', color: '#A67C52', multiplier: 1.1, description: 'Scandinavian natural warm grain' },
  { id: 'sheesham', name: 'Indian Rosewood (Sheesham)', color: '#5A2D1B', multiplier: 1.0, description: 'Dramatic grain ribbons, artisan density' },
];

const FINISHES = [
  { id: 'matte-wax', name: 'Natural Organic Matte Wax', cost: 0 },
  { id: 'satin-oil', name: 'Hand-Rubbed Danish Satin Oil', cost: 2500 },
  { id: 'smoked-charcoal', name: 'Smoked Charcoal Fluted', cost: 4000 },
  { id: 'honey-glow', name: 'Warm Amber Honey Glow', cost: 2000 },
];

const HARDWARE_ACCENTS = [
  { id: 'brushed-brass', name: 'Solid Brushed Brass', hex: '#A0741A' },
  { id: 'matte-black', name: 'Architectural Matte Black', hex: '#1C1917' },
  { id: 'champagne-gold', name: 'Champagne Warm Gold', hex: '#E5C07B' },
  { id: 'brushed-nickel', name: 'Brushed Satin Nickel', hex: '#9E9E9E' },
];

export default function CustomConfigurator() {
  const { addToCart } = useCart();
  const [selectedPiece, setSelectedPiece] = useState<CustomPieceOption>(CUSTOM_PIECES[0]);
  const [length, setLength] = useState(selectedPiece.defaultDimensions.length);
  const [depth, setDepth] = useState(selectedPiece.defaultDimensions.depth);
  const [height, setHeight] = useState(selectedPiece.defaultDimensions.height);
  const [selectedWood, setSelectedWood] = useState(WOOD_TYPES[0]);
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);
  const [selectedHardware, setSelectedHardware] = useState(HARDWARE_ACCENTS[0]);
  const [specialNotes, setSpecialNotes] = useState('');
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);

  // When piece changes, update dimensions
  const handlePieceSelect = (piece: CustomPieceOption) => {
    setSelectedPiece(piece);
    setLength(piece.defaultDimensions.length);
    setDepth(piece.defaultDimensions.depth);
    setHeight(piece.defaultDimensions.height);
  };

  // Real-time calculated price
  const estimatedPrice = useMemo(() => {
    const defaultVol =
      selectedPiece.defaultDimensions.length *
      selectedPiece.defaultDimensions.depth *
      selectedPiece.defaultDimensions.height;
    const currentVol = length * depth * height;
    const volumeRatio = Math.max(0.85, Math.min(1.6, currentVol / defaultVol));

    const total =
      selectedPiece.basePrice *
      volumeRatio *
      selectedWood.multiplier +
      selectedFinish.cost;

    return Math.round(total / 500) * 500;
  }, [selectedPiece, length, depth, height, selectedWood, selectedFinish]);

  const handleAddToBasket = () => {
    // Fabricate pseudo item
    const customItem: any = {
      id: `custom-${Date.now()}`,
      slug: `bespoke-${selectedPiece.id}`,
      name: `${selectedPiece.name} (Custom Built)`,
      category: selectedPiece.category.toLowerCase().replace(' ', '-') as any,
      categoryLabel: selectedPiece.category,
      tagline: `Custom Dimensions: ${length}cm × ${depth}cm × ${height}cm in ${selectedWood.name}`,
      price: estimatedPrice,
      rating: 5.0,
      reviewCount: 1,
      image: selectedPiece.image,
      galleryImages: [selectedPiece.image],
      dimensions: {
        width: `${length} cm`,
        depth: `${depth} cm`,
        height: `${height} cm`,
        customizable: true,
      },
      woodOptions: [selectedWood.name],
      finishOptions: [selectedFinish.name],
      leadTime: '4-5 Weeks Custom Atelier Build',
      isSignature: true,
      description: `Bespoke crafted ${selectedPiece.name} with custom dimensions of ${length}cm × ${depth}cm × ${height}cm. Solid ${selectedWood.name} with ${selectedFinish.name} and ${selectedHardware.name} accents.`,
      details: [
        `Custom Sizing: ${length}cm W × ${depth}cm D × ${height}cm H`,
        `Solid Timber: 100% Kiln-Dried ${selectedWood.name}`,
        `Finish: ${selectedFinish.name}`,
        `Hardware: ${selectedHardware.name}`,
      ],
      craftsmanshipNotes: specialNotes || 'Custom order received through Craftora 3D Atelier Studio.',
    };

    addToCart(customItem, {
      wood: selectedWood.name,
      finish: selectedFinish.name,
      dimensions: {
        width: `${length} cm`,
        depth: `${depth} cm`,
        height: `${height} cm`,
        notes: specialNotes,
      },
    });

    setIsAddedSuccess(true);
    setTimeout(() => setIsAddedSuccess(false), 3000);
  };

  const generateDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Craftora Studio, I configured a custom furniture piece on your 3D Studio:\n\n*Piece:* ${selectedPiece.name}\n*Dimensions:* ${length}cm L × ${depth}cm D × ${height}cm H\n*Hardwood:* ${selectedWood.name}\n*Finish:* ${selectedFinish.name}\n*Hardware:* ${selectedHardware.name}\n*Estimated Quote:* ₹${estimatedPrice.toLocaleString('en-IN')}\n${specialNotes ? `*Special Notes:* ${specialNotes}\n` : ''}\nCould your design team review my specs and confirm production availability?`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Interactive Controls */}
      <Stagger className="lg:col-span-7 space-y-8" stagger={0.15} amount={0.05}>
        {/* Step 1: Select Piece Type */}
        <StaggerItem className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E5E4] shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 rounded-full bg-[#4A2E1E] text-white text-xs font-bold flex items-center justify-center shadow-[0_0_0_4px_rgba(194,155,56,0.15)]">
              1
            </span>
            <h3 className="text-xl font-semibold text-[#1C1917]">
              Select Furniture Blueprint
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CUSTOM_PIECES.map((piece) => {
              const isSelected = selectedPiece.id === piece.id;
              return (
                <motion.button
                  key={piece.id}
                  onClick={() => handlePieceSelect(piece)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`group relative p-3 rounded-2xl border text-left transition-[background-color,border-color,box-shadow] duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#A0741A] bg-[#FAFAF9] shadow-md'
                      : 'border-[#E7E5E4] hover:bg-[#FAFAF9] hover:border-[#D6D3D1] hover:shadow-md'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="configurator-piece-ring"
                      className="absolute -inset-px rounded-2xl ring-2 ring-[#A0741A]/50 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#F5F5F4] mb-2.5">
                    <Image
                      src={piece.image}
                      alt={piece.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#7C4B27] font-semibold block">
                      {piece.category}
                    </span>
                    <h4 className="text-xs font-semibold text-[#1C1917] line-clamp-1 mt-0.5">
                      {piece.name}
                    </h4>
                    <span className="text-xs text-[#6B6560] block mt-1">
                      From ₹{piece.basePrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </StaggerItem>

        {/* Step 2: Custom Dimensions */}
        <StaggerItem className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E5E4] shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#4A2E1E] text-white text-xs font-bold flex items-center justify-center shadow-[0_0_0_4px_rgba(194,155,56,0.15)]">
                2
              </span>
              <h3 className="text-xl font-semibold text-[#1C1917]">
                Custom Millimeter Dimensions
              </h3>
            </div>
            <span className="text-xs text-[#7C4B27] font-medium flex items-center gap-1">
              <Ruler className="w-3.5 h-3.5 text-[#A0741A]" /> All measurements in cm
            </span>
          </div>

          <div className="space-y-5">
            {/* Length / Width Slider */}
            <div>
              <div className="flex justify-between text-xs mb-1.5 font-medium">
                <span className="text-[#44403C]">Length / Width:</span>
                <span className="font-bold text-[#1C1917] text-sm">
                  <PopValue>{length}</PopValue> cm ({Math.round(length / 2.54)} inches)
                </span>
              </div>
              <input
                type="range"
                min={Math.round(selectedPiece.defaultDimensions.length * 0.7)}
                max={Math.round(selectedPiece.defaultDimensions.length * 1.5)}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-2 bg-[#E7E5E4] rounded-lg appearance-none cursor-pointer accent-[#4A2E1E]"
              />
            </div>

            {/* Depth Slider */}
            <div>
              <div className="flex justify-between text-xs mb-1.5 font-medium">
                <span className="text-[#44403C]">Depth / Breadth:</span>
                <span className="font-bold text-[#1C1917] text-sm">
                  <PopValue>{depth}</PopValue> cm ({Math.round(depth / 2.54)} inches)
                </span>
              </div>
              <input
                type="range"
                min={Math.round(selectedPiece.defaultDimensions.depth * 0.75)}
                max={Math.round(selectedPiece.defaultDimensions.depth * 1.4)}
                value={depth}
                onChange={(e) => setDepth(Number(e.target.value))}
                className="w-full h-2 bg-[#E7E5E4] rounded-lg appearance-none cursor-pointer accent-[#4A2E1E]"
              />
            </div>

            {/* Height Slider */}
            <div>
              <div className="flex justify-between text-xs mb-1.5 font-medium">
                <span className="text-[#44403C]">Height:</span>
                <span className="font-bold text-[#1C1917] text-sm">
                  <PopValue>{height}</PopValue> cm ({Math.round(height / 2.54)} inches)
                </span>
              </div>
              <input
                type="range"
                min={Math.round(selectedPiece.defaultDimensions.height * 0.8)}
                max={Math.round(selectedPiece.defaultDimensions.height * 1.3)}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-[#E7E5E4] rounded-lg appearance-none cursor-pointer accent-[#4A2E1E]"
              />
            </div>
          </div>
        </StaggerItem>

        {/* Step 3: Hardwood & Finishes */}
        <StaggerItem className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E5E4] shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 rounded-full bg-[#4A2E1E] text-white text-xs font-bold flex items-center justify-center shadow-[0_0_0_4px_rgba(194,155,56,0.15)]">
              3
            </span>
            <h3 className="text-xl font-semibold text-[#1C1917]">
              Solid Timber &amp; Finish
            </h3>
          </div>

          <div className="space-y-5">
            {/* Hardwood choice */}
            <div>
              <span className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold block mb-2">
                Certified Hardwood Timber:
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {WOOD_TYPES.map((wood) => {
                  const isSelected = selectedWood.id === wood.id;
                  return (
                    <motion.button
                      key={wood.id}
                      onClick={() => setSelectedWood(wood)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className={`p-3 rounded-2xl border text-left transition-colors flex items-center gap-3 ${
                        isSelected
                          ? 'border-[#4A2E1E] bg-[#FAFAF9] ring-1 ring-[#4A2E1E]'
                          : 'border-[#E7E5E4] hover:bg-[#FAFAF9]'
                      }`}
                    >
                      <motion.span
                        animate={isSelected ? { scale: [1, 1.25, 1], rotate: [0, 90, 0] } : { scale: 1 }}
                        transition={{ duration: 0.6, ease: EASE_LUXE }}
                        className="w-6 h-6 rounded-full border border-black/20 shadow-inner flex-shrink-0"
                        style={{ backgroundColor: wood.color }}
                      />
                      <div className="min-w-0">
                        <span className="text-sm font-semibold text-[#1C1917] block truncate">
                          {wood.name}
                        </span>
                        <span className="text-xs text-[#6B6560] block truncate">
                          {wood.description}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Finish */}
            <div>
              <span className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold block mb-2">
                Hand-Applied Finish Tone:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {FINISHES.map((f) => {
                  const isSelected = selectedFinish.id === f.id;
                  return (
                    <motion.button
                      key={f.id}
                      onClick={() => setSelectedFinish(f)}
                      whileTap={{ scale: 0.96 }}
                      className={`px-3 py-2 rounded-xl border text-left text-xs transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'border-[#A0741A] bg-[#A0741A]/10 text-[#7C4B27] font-semibold'
                          : 'border-[#E7E5E4] text-[#44403C] hover:bg-[#FAFAF9]'
                      }`}
                    >
                      <span className="truncate">{f.name}</span>
                      <AnimatePresence>
                        {isSelected && (
                          <motion.span
                            initial={{ scale: 0, rotate: -60 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                            className="flex-shrink-0"
                          >
                            <Check className="w-3.5 h-3.5 text-[#A0741A]" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Hardware */}
            <div>
              <span className="text-xs uppercase tracking-wider text-[#6B6560] font-semibold block mb-2">
                Architectural Metal Hardware / Inlay:
              </span>
              <div className="flex flex-wrap gap-2">
                {HARDWARE_ACCENTS.map((h) => {
                  const isSelected = selectedHardware.id === h.id;
                  return (
                    <motion.button
                      key={h.id}
                      onClick={() => setSelectedHardware(h)}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-3 py-1.5 rounded-full border text-xs flex items-center gap-2 transition-colors ${
                        isSelected
                          ? 'border-[#4A2E1E] text-white'
                          : 'border-[#E7E5E4] text-[#44403C] hover:bg-[#FAFAF9]'
                      }`}
                    >
                      {isSelected && (
                        <motion.span
                          layoutId="configurator-hardware-pill"
                          className="absolute inset-0 rounded-full bg-[#4A2E1E]"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span
                        className="relative z-10 w-2.5 h-2.5 rounded-full border border-black/20"
                        style={{ backgroundColor: h.hex }}
                      />
                      <span className="relative z-10">{h.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </StaggerItem>

        {/* Step 4: Special Custom Requests */}
        <StaggerItem className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E5E4] shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-full bg-[#4A2E1E] text-white text-xs font-bold flex items-center justify-center shadow-[0_0_0_4px_rgba(194,155,56,0.15)]">
              4
            </span>
            <h3 className="text-xl font-semibold text-[#1C1917]">
              Special Requests &amp; Room Constraints
            </h3>
          </div>
          <textarea
            rows={3}
            value={specialNotes}
            onChange={(e) => setSpecialNotes(e.target.value)}
            placeholder="Tell us about specific skirting cutouts, cable passthroughs, custom armrest heights, or attach floor plans on WhatsApp..."
            className="w-full p-3.5 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#A0741A]"
          />
        </StaggerItem>
      </Stagger>

      {/* Right Column: Live Estimate & Summary Card (Sticky) */}
      <div className="lg:col-span-5 sticky top-28 space-y-6">
        <Reveal
          direction="right"
          distance={50}
          delay={0.2}
          className="rounded-3xl bg-gradient-to-b from-[#FAFAF9] to-white border border-[#E7E5E4] p-6 sm:p-8 shadow-xl"
        >
          <Badge variant="gold" size="sm" className="mb-3">
            Real-Time Atelier Estimate
          </Badge>

          <AnimatePresence mode="wait" initial={false}>
            <motion.h3
              key={selectedPiece.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE_LUXE }}
              className="text-2xl text-[#1C1917] font-semibold"
            >
              {selectedPiece.name}
            </motion.h3>
          </AnimatePresence>
          <span className="text-xs text-[#57534E] block mt-0.5">
            Crafted in 100% Solid <PopValue>{selectedWood.name}</PopValue>
          </span>

          {/* Render Preview Image */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden my-5 bg-[#F5F5F4] border border-[#E7E5E4] shadow-inner">
            <AnimatePresence initial={false}>
              <motion.div
                key={selectedPiece.id}
                initial={{ opacity: 0, scale: 1.1, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE_LUXE }}
                className="absolute inset-0"
              >
                <Image
                  src={selectedPiece.image}
                  alt={selectedPiece.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-3 left-3 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
              </span>
              Live Customizer Active
            </div>
          </div>

          {/* Specifications Breakdown */}
          <div className="space-y-2.5 text-xs text-[#44403C] py-4 border-y border-[#F0EFED]">
            <div className="flex justify-between">
              <span className="text-[#6B6560]">Configured Sizing:</span>
              <span className="font-medium text-[#1C1917]">
                <PopValue>{`${length}cm L × ${depth}cm D × ${height}cm H`}</PopValue>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B6560]">Hardwood Timber:</span>
              <PopValue className="font-medium text-[#4A2E1E]">{selectedWood.name}</PopValue>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B6560]">Finish Tone:</span>
              <PopValue className="font-medium text-[#1C1917]">{selectedFinish.name}</PopValue>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B6560]">Hardware Detail:</span>
              <PopValue className="font-medium text-[#1C1917]">{selectedHardware.name}</PopValue>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B6560]">Production Lead Time:</span>
              <span className="text-[#7C4B27] font-medium">3-4 Weeks Bespoke</span>
            </div>
          </div>

          {/* Estimated Total Price */}
          <div className="my-5 flex items-baseline justify-between">
            <div>
              <span className="text-xs text-[#6B6560] block font-normal">Total Estimated Atelier Price</span>
              <span className="text-3xl font-semibold text-[#1C1917] tabular-nums">
                <AnimatedPrice value={estimatedPrice} />
              </span>
            </div>
            <span className="text-xs text-[#4A5B47] bg-[#4A5B47]/10 px-2.5 py-1 rounded-full font-medium">
              Tax &amp; Assembly Included
            </span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="primary"
              fullWidth
              size="lg"
              onClick={handleAddToBasket}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isAddedSuccess ? 'added' : 'idle'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block"
                >
                  {isAddedSuccess ? 'Added to Quote Basket!' : 'Add to Bespoke Quote Basket'}
                </motion.span>
              </AnimatePresence>
            </Button>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={generateDirectWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Send Specs via WhatsApp</span>
            </motion.a>
          </div>

          <div className="mt-5 pt-4 border-t border-[#F0EFED] flex items-center justify-center gap-2 text-xs text-[#6B6560]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A0741A]" />
            <span>Backed by Craftora 15-Year Solid Wood Guarantee</span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
