export interface FurnitureItem {
  id: string;
  slug: string;
  name: string;
  category: 'bedroom' | 'living-room' | 'dining' | 'wardrobes' | 'tv-units' | 'office-furniture';
  categoryLabel: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  galleryImages: string[];
  dimensions: {
    width: string;
    depth: string;
    height: string;
    customizable: boolean;
  };
  woodOptions: string[];
  finishOptions: string[];
  fabricOptions?: string[];
  leadTime: string;
  isSignature?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  description: string;
  details: string[];
  craftsmanshipNotes: string;
}

export const CATEGORIES = [
  {
    id: 'bedroom',
    label: 'Bedroom',
    subtitle: 'Restful Sanctuaries',
    description: 'Bespoke solid wood beds, floating headboards, nightstands & dressing consoles crafted for serene tranquility.',
    image: '/images/category-bedroom.jpg',
    itemCount: 8,
  },
  {
    id: 'living-room',
    label: 'Living Room',
    subtitle: 'Sculptural Comfort',
    description: 'Handcrafted accent armchairs, modular cloud sofas, marble-topped coffee tables & artisan credenzas.',
    image: '/images/product-sofa-sectional.jpg',
    itemCount: 14,
  },
  {
    id: 'dining',
    label: 'Dining',
    subtitle: 'Gathering In Style',
    description: 'Live-edge solid teak tables, ergonomic sculpted dining chairs & fluted bar credenzas built to anchor conversations.',
    image: '/images/category-dining.jpg',
    itemCount: 10,
  },
  {
    id: 'wardrobes',
    label: 'Wardrobes',
    subtitle: 'Architectural Storage',
    description: 'Custom walk-in dressing suites, smoked glass sliding wardrobes & solid walnut modular storage systems with integrated LEDs.',
    image: '/images/category-wardrobes.jpg',
    itemCount: 6,
  },
  {
    id: 'tv-units',
    label: 'TV Units',
    subtitle: 'Floating Media Consoles',
    description: 'Contemporary acoustic wood slat wall backdrops, floating consoles with concealed wire management & Italian marble accents.',
    image: '/images/category-tv-unit.jpg',
    itemCount: 7,
  },
  {
    id: 'office-furniture',
    label: 'Office Furniture',
    subtitle: 'Executive Sanctuaries',
    description: 'Solid walnut executive desks with brass inlays, ergonomic leather swivel chairs & bespoke architectural libraries.',
    image: '/images/category-office.jpg',
    itemCount: 9,
  },
] as const;

export const FURNITURE_ITEMS: FurnitureItem[] = [
  {
    id: 'crf-01',
    slug: 'the-craftora-solace-armchair',
    name: 'The Solace Curved Armchair',
    category: 'living-room',
    categoryLabel: 'Living Room',
    tagline: 'As featured in our signature brand emblem',
    price: 48500,
    originalPrice: 56000,
    rating: 4.9,
    reviewCount: 38,
    image: '/images/product-chair-solace.jpg',
    galleryImages: ['/images/product-chair-solace.jpg', '/images/hero-living.jpg', '/images/story-artisan.jpg'],
    dimensions: {
      width: '84 cm',
      depth: '88 cm',
      height: '82 cm',
      customizable: true,
    },
    woodOptions: ['Burma Teak', 'American Walnut', 'White Oak', 'Indian Sheesham'],
    finishOptions: ['Natural Matte Wax', 'Rich Espresso', 'Honey Glow', 'Charcoal Smoked'],
    fabricOptions: ['Belgian Ivory Bouclé', 'Cognac Full-Grain Leather', 'Oatmeal Pure Linen', 'Olive Forest Velvet'],
    leadTime: '3-4 Weeks Bespoke Build',
    isSignature: true,
    isBestSeller: true,
    description: 'The iconic centerpiece of Craftora. Sculpted by hand from solid kiln-dried walnut, featuring unbroken organic curve joinery that supports the body naturally. Wrapped in tactile Belgian bouclé that balances modern minimalism with deep warmth.',
    details: [
      'Mortise and tenon joinery hand-carved by master woodworkers',
      'Solid kiln-dried hardwood frame guaranteed for 15 years',
      'High-resilience dual density foam with feather-down topper',
      'Hand-rubbed natural organic plant-based oil finish'
    ],
    craftsmanshipNotes: 'Every single curve on the Solace armrest is individually rasped and fine-sanded across 18 hours of dedicated artisan labor.'
  },
  {
    id: 'crf-02',
    slug: 'the-zenith-modular-plinth-sofa',
    name: 'The Zenith Low Plinth Sofa',
    category: 'living-room',
    categoryLabel: 'Living Room',
    tagline: 'Deep seating on a solid teak architectural base',
    price: 118000,
    originalPrice: 135000,
    rating: 5.0,
    reviewCount: 24,
    image: '/images/product-sofa-zenith.jpg',
    galleryImages: ['/images/product-sofa-zenith.jpg', '/images/hero-living.jpg'],
    dimensions: {
      width: '280 cm',
      depth: '105 cm',
      height: '74 cm',
      customizable: true,
    },
    woodOptions: ['Burma Teak', 'American Walnut', 'European White Oak'],
    finishOptions: ['Natural Matte Teak', 'Deep Walnut', 'Smoked Ash'],
    fabricOptions: ['Textured Oatmeal Linen', 'Sandstone Bouclé', 'Caramel Nubuck Leather'],
    leadTime: '4-5 Weeks Bespoke Build',
    isSignature: true,
    isBestSeller: true,
    description: 'An architectural statement for luxury living spaces. The Zenith rests on a cantilevered solid teak plinth with an integrated side table ledge. Offers low-slung, ultra-deep cloud seating.',
    details: [
      'Integrated floating side plinth for coffee, books, or art placement',
      'Stain-resistant performance linen treated with eco-shield',
      'Solid wood subframe with 8-way hand-tied spring suspension',
      'Modular layout adaptable for custom living room proportions'
    ],
    craftsmanshipNotes: 'The teak plinth utilizes tongue-and-groove jointing to allow natural wood breathability while maintaining rock-solid structural integrity.'
  },
  {
    id: 'crf-03',
    slug: 'the-aethel-live-edge-dining-table',
    name: 'The Aethel Live-Edge Dining Table',
    category: 'dining',
    categoryLabel: 'Dining',
    tagline: 'Solid 3-inch slab of heritage teak with natural grain',
    price: 94000,
    originalPrice: 108000,
    rating: 4.9,
    reviewCount: 42,
    image: '/images/category-dining.jpg',
    galleryImages: ['/images/category-dining.jpg', '/images/story-artisan.jpg'],
    dimensions: {
      width: '240 cm',
      depth: '100 cm',
      height: '76 cm',
      customizable: true,
    },
    woodOptions: ['Burma Teak Slab', 'Indian Rosewood', 'American Walnut'],
    finishOptions: ['Natural Raw Matte', 'Satin Polyurethane', 'Hand-Rubbed Beeswax'],
    leadTime: '4-6 Weeks Bespoke Build',
    isSignature: true,
    isBestSeller: true,
    description: 'Cut from a single sustainably harvested timber log. The Aethel preserves the natural live edge contours of the tree, celebrating organic knots, butterfly key inlays, and rich annual rings.',
    details: [
      'Solid 75mm (3-inch) thick solid slab tabletop',
      'Traditional brass or walnut butterfly dutchman joints stabilizing natural fissures',
      'Sleek architectural solid timber slab pedestals',
      'Comfortably seats 8 to 10 guests'
    ],
    craftsmanshipNotes: 'Kiln-dried for 45 days down to an optimal 8-10% moisture content to prevent any seasonal warping in Indian climates.'
  },
  {
    id: 'crf-04',
    slug: 'the-sereno-floating-platform-bed',
    name: 'The Sereno Slat Platform Bed',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    tagline: 'Minimalist low-profile bed with cantilevered nightstands',
    price: 82000,
    originalPrice: 95000,
    rating: 4.8,
    reviewCount: 31,
    image: '/images/category-bedroom.jpg',
    galleryImages: ['/images/category-bedroom.jpg'],
    dimensions: {
      width: '200 cm (King)',
      depth: '215 cm',
      height: '95 cm',
      customizable: true,
    },
    woodOptions: ['American Walnut', 'Burma Teak', 'European Oak'],
    finishOptions: ['Natural Matte Walnut', 'Warm Honey Oak', 'Deep Espresso'],
    leadTime: '3-4 Weeks Bespoke Build',
    isBestSeller: true,
    description: 'Designed for quiet, uncluttered bedrooms. The Sereno features an architectural vertical fluted headboard, floating bedside consoles with hidden cord channels, and a recessed base that makes the bed appear weightless.',
    details: [
      'Twin floating bedside consoles with soft-close Blum German drawer slides',
      'Ventilated solid hardwood slat system providing supreme mattress support',
      'Zero-creak precision internal steel corner brackets',
      'Rounded bullnose edges for gentle comfort'
    ],
    craftsmanshipNotes: 'The vertical fluted headboard slats are individually hand-aligned with 4mm spacing for acoustic dampening and visual cadence.'
  },
  {
    id: 'crf-05',
    slug: 'the-lumina-slat-media-console',
    name: 'The Lumina Acoustic Slat Media Console',
    category: 'tv-units',
    categoryLabel: 'TV Units',
    tagline: 'Floating TV wall backdrop with integrated marble & backlight',
    price: 76000,
    originalPrice: 88000,
    rating: 4.9,
    reviewCount: 29,
    image: '/images/category-tv-unit.jpg',
    galleryImages: ['/images/category-tv-unit.jpg'],
    dimensions: {
      width: '260 cm',
      depth: '42 cm',
      height: '45 cm (Console) / 220 cm (Backdrop)',
      customizable: true,
    },
    woodOptions: ['Natural White Oak', 'Smoked Walnut', 'Burma Teak'],
    finishOptions: ['Matte Slat Finish', 'Warm Amber', 'Charcoal Blackwood'],
    leadTime: '3-5 Weeks Bespoke Build',
    isSignature: true,
    isNewArrival: true,
    description: 'Transform your living room wall into a boutique gallery. The Lumina combines an acoustic fluted timber slat panel with a floating low console topped in Calacatta gold marble inlay, plus hidden ambient warm LED illumination.',
    details: [
      'Acoustic felt backing behind timber slats to enhance soundstage clarity',
      'Floating wall-mount console with concealed IR-friendly remote passthrough',
      'Internal cable raceways for 100% hidden wires and gaming console venting',
      'Warm 2700K indirect LED illumination with touch dimmer'
    ],
    craftsmanshipNotes: 'Console doors feature continuous wood grain across the entire 2.6-meter expanse, cut sequentially from the same timber trunk.'
  },
  {
    id: 'crf-06',
    slug: 'the-elysian-custom-walk-in-wardrobe',
    name: 'The Elysian Walk-In Wardrobe Suite',
    category: 'wardrobes',
    categoryLabel: 'Wardrobes',
    tagline: 'Architectural fluted wood & smoked glass modular storage',
    price: 185000,
    originalPrice: 215000,
    rating: 5.0,
    reviewCount: 19,
    image: '/images/category-wardrobes.jpg',
    galleryImages: ['/images/category-wardrobes.jpg'],
    dimensions: {
      width: '320 cm',
      depth: '65 cm',
      height: '240 cm (Floor to Ceiling)',
      customizable: true,
    },
    woodOptions: ['Dark Walnut Fluted', 'Smoked Teak', 'Nordic White Ash'],
    finishOptions: ['Ultra-Matte Lacquer', 'Deep Walnut Wax', 'Charcoal Fluted'],
    leadTime: '5-7 Weeks Bespoke Build',
    isSignature: true,
    description: 'A bespoke dressing haven. Custom tailored to your ceiling height and wardrobe inventory. Featuring bronze-tinted tempered glass doors, recessed motion-sensor illumination, velvet-lined jewelry drawers, and fluted island cabinetry.',
    details: [
      'Tailored internal modular configurations (Dresses, Suits, Shoes, Watches)',
      'German soft-damped slide-and-glide hardware rated for 100,000 cycles',
      'Integrated LED profiles with 95+ CRI natural sunlight color rendering',
      'Central dressing island with marble top and fluted tambour sides'
    ],
    craftsmanshipNotes: 'Every wardrobe is pre-assembled and test-fitted inside our atelier before being flat-packed for white-glove home installation.'
  },
  {
    id: 'crf-07',
    slug: 'the-apex-executive-writing-desk',
    name: 'The Apex Executive Solid Desk',
    category: 'office-furniture',
    categoryLabel: 'Office Furniture',
    tagline: 'Commanding solid walnut desk with brushed brass inlays',
    price: 68000,
    originalPrice: 79000,
    rating: 4.9,
    reviewCount: 22,
    image: '/images/category-office.jpg',
    galleryImages: ['/images/category-office.jpg'],
    dimensions: {
      width: '180 cm',
      depth: '85 cm',
      height: '76 cm',
      customizable: true,
    },
    woodOptions: ['American Walnut', 'Burma Teak', 'European Oak'],
    finishOptions: ['Executive Satin Walnut', 'Natural Matte Teak', 'Dark Mocha'],
    leadTime: '3-4 Weeks Bespoke Build',
    isBestSeller: true,
    description: 'A workspace built for clarity and focus. The Apex pairs hand-selected solid American walnut with subtle brushed brass perimeter inlays. Includes two flush pencil drawers and a magnetic cable drop.',
    details: [
      'Solid brass inlay precisely set flush with the timber grain',
      'Two whisper-quiet concealed pencil and laptop drawers',
      'Under-desk power and USB-C wire conduit port with matching wood cover',
      'Ergonomic bevel on the user edge for comfortable all-day writing'
    ],
    craftsmanshipNotes: 'The desktop is hand-buffed with multiple coats of carnauba wax to resist coffee stains while preserving the natural tactile grain.'
  },
  {
    id: 'crf-08',
    slug: 'the-nordic-sculptural-dining-chairs',
    name: 'The Nordic Curved Dining Chair (Set of 2)',
    category: 'dining',
    categoryLabel: 'Dining',
    tagline: 'Ergonomic half-moon backrest with bouclé cushions',
    price: 36000,
    rating: 4.8,
    reviewCount: 35,
    image: '/images/category-dining.jpg',
    galleryImages: ['/images/category-dining.jpg'],
    dimensions: {
      width: '58 cm',
      depth: '54 cm',
      height: '76 cm',
      customizable: true,
    },
    woodOptions: ['White Oak', 'Burma Teak', 'American Walnut'],
    finishOptions: ['Natural Oak', 'Warm Teak', 'Charcoal Black'],
    fabricOptions: ['Ivory Bouclé', 'Sand Linen', 'Cognac Saddle Leather'],
    leadTime: '2-3 Weeks Bespoke Build',
    isBestSeller: true,
    description: 'Sculptural dining chairs that hug the natural curvature of the back. Crafted with steam-bent timber and upholstered in stain-guarded bouclé.',
    details: [
      'Steam-bent solid hardwood half-moon backrest',
      'Compact footprint that tucks neatly under standard dining tables',
      'High density foam with non-sag webbing',
      'Protective brass floor glides included'
    ],
    craftsmanshipNotes: 'Constructed without visible screws using traditional dowel and mortise joints.'
  },
  {
    id: 'crf-09',
    slug: 'the-oakhaven-nesting-coffee-tables',
    name: 'The Oakhaven Nesting Coffee Tables',
    category: 'living-room',
    categoryLabel: 'Living Room',
    tagline: 'Pair of organic curved tables in solid oak & travertine marble',
    price: 32000,
    originalPrice: 38000,
    rating: 4.8,
    reviewCount: 44,
    image: '/images/hero-living.jpg',
    galleryImages: ['/images/hero-living.jpg', '/images/product-chair-solace.jpg'],
    dimensions: {
      width: '110 cm / 75 cm',
      depth: '60 cm / 50 cm',
      height: '42 cm / 36 cm',
      customizable: true,
    },
    woodOptions: ['White Oak', 'American Walnut', 'Burma Teak'],
    finishOptions: ['Natural Matte Wax', 'Espresso Dark', 'Honey Amber'],
    leadTime: '2-3 Weeks Bespoke Build',
    isBestSeller: true,
    description: 'A harmonious nesting duo crafted with rounded soft-bevel edges. Nest them together to create dynamic depth or separate across your living room seating.',
    details: [
      'Dual-tier nesting format saves room while doubling surface area',
      'Solid kiln-dried hardwood top with waterproof matte seal',
      'Chamfered tapered solid legs with recessed brass feet',
      'Child-safe rounded corner profiles'
    ],
    craftsmanshipNotes: 'Hand-shaped rounded pill contours requiring multi-stage progressive grain sanding.'
  },
  {
    id: 'crf-10',
    slug: 'the-haven-solid-teak-storage-bed',
    name: 'The Haven Hydraulic Storage Bed',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    tagline: 'Solid teak king bed with German effortless hydraulic lift',
    price: 89000,
    originalPrice: 105000,
    rating: 4.9,
    reviewCount: 52,
    image: '/images/category-bedroom.jpg',
    galleryImages: ['/images/category-bedroom.jpg'],
    dimensions: {
      width: '198 cm (King)',
      depth: '212 cm',
      height: '105 cm',
      customizable: true,
    },
    woodOptions: ['Burma Teak', 'Indian Sheesham', 'American Walnut'],
    finishOptions: ['Natural Golden Teak', 'Warm Walnut', 'Honey Glaze'],
    leadTime: '3-4 Weeks Bespoke Build',
    isSignature: true,
    isBestSeller: true,
    description: 'Combines regal handcrafted timber warmth with cavernous concealed under-bed storage. Powered by dual heavy-duty German hydraulic gas-springs.',
    details: [
      'Twin German pneumatic pistons rated for over 50,000 smooth cycles',
      'Heavy-duty dust-sealed partitioned floor compartments',
      'Solid hardwood headboard with soft angled ergonomic back incline',
      'Reinforced zero-squeak frame structure'
    ],
    craftsmanshipNotes: 'Internal storage chamber constructed entirely from moisture-resistant marine-grade hardwood.'
  },
  {
    id: 'crf-11',
    slug: 'the-verona-fluted-bar-cabinet',
    name: 'The Verona Fluted Bar Credenza',
    category: 'dining',
    categoryLabel: 'Dining',
    tagline: 'Artisan fluted timber cabinet with brass wine racks & mirror bar',
    price: 58000,
    originalPrice: 68000,
    rating: 4.9,
    reviewCount: 27,
    image: '/images/category-dining.jpg',
    galleryImages: ['/images/category-dining.jpg'],
    dimensions: {
      width: '120 cm',
      depth: '48 cm',
      height: '110 cm',
      customizable: true,
    },
    woodOptions: ['American Walnut', 'Burma Teak', 'Smoked Ash'],
    finishOptions: ['Rich Espresso', 'Smoked Charcoal', 'Natural Teak'],
    leadTime: '3-4 Weeks Bespoke Build',
    isNewArrival: true,
    description: 'An entertainer’s statement piece. Fluted wood tambour doors slide open to reveal an antiqued mirror bar interior, stemware racks, wine storage grid, and soft warm illumination.',
    details: [
      'Holds up to 18 wine bottles and 16 hanging wine/cocktail glasses',
      'Antiqued mirrored back panel reflecting warm ambient light',
      'Brushed champagne brass hardware and kickplate accents',
      'Pull-out prep shelf for cocktail crafting'
    ],
    craftsmanshipNotes: 'Tambour curved slatted doors slide along custom brass tracks with zero friction.'
  },
  {
    id: 'crf-12',
    slug: 'the-aeris-walnut-executive-chair',
    name: 'The Aeris Walnut Swivel Chair',
    category: 'office-furniture',
    categoryLabel: 'Office Furniture',
    tagline: 'Sculpted bentwood walnut frame with supple Italian cognac leather',
    price: 42000,
    originalPrice: 49000,
    rating: 4.8,
    reviewCount: 31,
    image: '/images/category-office.jpg',
    galleryImages: ['/images/category-office.jpg'],
    dimensions: {
      width: '66 cm',
      depth: '68 cm',
      height: '98-106 cm (Adjustable)',
      customizable: true,
    },
    woodOptions: ['American Walnut', 'Burma Teak', 'Black Ash'],
    finishOptions: ['Natural Walnut', 'Espresso Satin', 'Matte Teak'],
    fabricOptions: ['Cognac Saddle Leather', 'Black Nappa Leather', 'Olive Velvet'],
    leadTime: '2-3 Weeks Bespoke Build',
    isBestSeller: true,
    description: 'Brings mid-century prestige to modern work sanctuaries. 7-ply curved walnut shell cradles memory-foam cushioning, mounted on a 360-degree silent swivel brass mechanism.',
    details: [
      'Pneumatic Class-4 gas cylinder with seamless height adjustment',
      'Synchro-tilt mechanism with multi-position lock',
      'Italian full-grain top-layer aniline leather',
      'Floor-safe dual-wheel silent casters'
    ],
    craftsmanshipNotes: 'Hot-pressed molded veneer shell reinforced with concealed steel internal armature.'
  },
  {
    id: 'crf-13',
    slug: 'the-kyoto-l-shape-sectional-sofa',
    name: 'The Kyoto L-Shape Sectional Sofa',
    category: 'living-room',
    categoryLabel: 'Sofas & Seating',
    tagline: 'Deep cloud chaise lounge on solid Burma teak plinth base',
    price: 124000,
    originalPrice: 142000,
    rating: 5.0,
    reviewCount: 36,
    image: '/images/product-sofa-sectional.jpg',
    galleryImages: ['/images/product-sofa-sectional.jpg', '/images/product-sofa-zenith.jpg'],
    dimensions: {
      width: '295 cm',
      depth: '175 cm (Chaise) / 102 cm',
      height: '76 cm',
      customizable: true,
    },
    woodOptions: ['Burma Teak', 'American Walnut', 'European White Oak'],
    finishOptions: ['Natural Matte Teak', 'Deep Walnut', 'Smoked Charcoal'],
    fabricOptions: ['Oatmeal Textured Linen', 'Belgian Ivory Bouclé', 'Sandstone Velvet'],
    leadTime: '4-5 Weeks Bespoke Build',
    isSignature: true,
    isBestSeller: true,
    isNewArrival: true,
    description: 'An architectural centerpiece designed for effortless lounging. The Kyoto pairs extra-deep seat cushions with a floating solid teak plinth and an integrated side ledge for drinks and books.',
    details: [
      'Substantial kiln-dried teak perimeter plinth with tongue-and-groove jointing',
      'Dual-layer high resilience foam core topped with hypoallergenic micro-down',
      'Stain-shield treated Belgian performance linen fabric',
      'Configurable in both Left-Hand-Side (LHS) and Right-Hand-Side (RHS) layouts'
    ],
    craftsmanshipNotes: 'The base is hand-shaped from three uninterrupted 10-foot lengths of Burma teak timber.'
  },
  {
    id: 'crf-14',
    slug: 'the-avena-curved-boucle-sofa',
    name: 'The Avena Curved Bouclé 3-Seater Sofa',
    category: 'living-room',
    categoryLabel: 'Sofas & Seating',
    tagline: 'Sculptural curved 3-seater sofa in warm Belgian ivory bouclé',
    price: 98000,
    originalPrice: 112000,
    rating: 4.9,
    reviewCount: 29,
    image: '/images/product-sofa-curved.jpg',
    galleryImages: ['/images/product-sofa-curved.jpg'],
    dimensions: {
      width: '235 cm',
      depth: '98 cm',
      height: '78 cm',
      customizable: true,
    },
    woodOptions: ['American Walnut', 'Burma Teak', 'Natural White Oak'],
    finishOptions: ['Rich Espresso', 'Natural Matte Wax', 'Honey Glow'],
    fabricOptions: ['Belgian Ivory Bouclé', 'Oatmeal Pure Linen', 'Forest Olive Velvet'],
    leadTime: '3-4 Weeks Bespoke Build',
    isSignature: true,
    isBestSeller: true,
    description: 'Elegantly contoured to soften contemporary living spaces. The Avena features a continuous sculptural arc backrest wrapped in tactile loop bouclé, perched on tapered solid walnut legs.',
    details: [
      'Steam-bent solid hardwood internal frame with lifetime creak-free warranty',
      'Continuous serpentine arc backrest providing ergonomic lumbar cradling',
      'Turned solid American walnut legs with concealed brass leveling glides',
      'High-traffic commercial rub test certified bouclé fabric'
    ],
    craftsmanshipNotes: 'Every radius on the internal birch hardwood frame is hand-notched and dowel-reinforced.'
  }
];

export const WOOD_FINISHES = [
  {
    id: 'burma-teak',
    name: 'Burma Teak',
    colorHex: '#7C4B27',
    origin: 'Kiln-dried Grade-A Teak',
    characteristics: 'Golden amber tones, rich in natural oils, supreme weather & pest resistance.',
    tag: 'Signature Choice',
    grainTexture: 'Straight to slightly wavy grain with warm satin luster'
  },
  {
    id: 'american-walnut',
    name: 'American Walnut',
    colorHex: '#4A2E1E',
    origin: 'North American Sustainable Forests',
    characteristics: 'Deep espresso to chocolate hues with purple undertones. Luxurious dense grain.',
    tag: 'Luxury Heritage',
    grainTexture: 'Graceful undulating grain swirls with deep chatoyancy'
  },
  {
    id: 'european-oak',
    name: 'European White Oak',
    colorHex: '#A67C52',
    origin: 'Central European Managed Timberland',
    characteristics: 'Warm sand and beige tones. Clean Scandinavian aesthetic with prominent medullary rays.',
    tag: 'Modern Minimalist',
    grainTexture: 'Straight open grain with subtle architectural flecks'
  },
  {
    id: 'indian-sheesham',
    name: 'Indian Rosewood (Sheesham)',
    colorHex: '#5A2D1B',
    origin: 'Northern India Native Timber',
    characteristics: 'High contrast contrasting golden and dark chestnut heartwood bands. Extremely durable.',
    tag: 'Artisan Favorite',
    grainTexture: 'Dramatic, vivid contrasting dark ribbons and knots'
  }
];

export const FABRIC_OPTIONS = [
  { id: 'boucle-ivory', name: 'Belgian Ivory Bouclé', hex: '#EDE7DC', type: 'Textured Loop' },
  { id: 'leather-cognac', name: 'Italian Cognac Leather', hex: '#874B2A', type: 'Full Grain' },
  { id: 'linen-oatmeal', name: 'Pure Oatmeal Linen', hex: '#D7CEBE', type: 'Woven Linen' },
  { id: 'velvet-forest', name: 'Forest Olive Velvet', hex: '#3B4D3C', type: 'Plush Velvet' },
  { id: 'leather-charcoal', name: 'Charcoal Black Leather', hex: '#22201F', type: 'Matte Leather' },
];
