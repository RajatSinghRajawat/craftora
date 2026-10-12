export type InteriorRoom =
  | 'Living Room'
  | 'Bedroom'
  | 'Modular Kitchen'
  | 'Dining'
  | 'Wardrobe'
  | 'Home Office'
  | 'Kids Room'
  | 'Pooja Room'
  | 'TV Unit'
  | 'Commercial';

export type InteriorStyle =
  | 'Modern'
  | 'Minimalist'
  | 'Scandinavian'
  | 'Japandi'
  | 'Indian Traditional'
  | 'Industrial'
  | 'Bohemian'
  | 'Luxury Contemporary'
  | 'Rustic'
  | 'Mid-Century';

export interface InteriorStyleInfo {
  name: InteriorStyle;
  tagline: string;
  description: string;
  palette: string[];
  image: string;
}

export interface InteriorDesign {
  id: string;
  title: string;
  room: InteriorRoom;
  style: InteriorStyle;
  image: string;
  area: string;
  budget: string;
  highlights: string[];
}

export interface InteriorPackage {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const INTERIOR_ROOMS: InteriorRoom[] = [
  'Living Room',
  'Bedroom',
  'Modular Kitchen',
  'Dining',
  'Wardrobe',
  'Home Office',
  'Kids Room',
  'Pooja Room',
  'TV Unit',
  'Commercial',
];

export const INTERIOR_STYLES: InteriorStyleInfo[] = [
  {
    name: 'Modern',
    tagline: 'Clean lines, warm wood',
    description: 'Sleek silhouettes, handleless storage and a calm neutral base lifted by teak and brass accents.',
    palette: ['#F5F5F4', '#A8A29E', '#7C4B27', '#1C1917'],
    image: '/images/hero-living.jpg',
  },
  {
    name: 'Minimalist',
    tagline: 'Less, but better',
    description: 'Clutter-free rooms with concealed storage, soft light and only the pieces you truly use.',
    palette: ['#FFFFFF', '#E7E5E4', '#D6D3D1', '#57534E'],
    image: '/images/category-bedroom.jpg',
  },
  {
    name: 'Scandinavian',
    tagline: 'Light, airy & cosy',
    description: 'Pale oak, white walls, linen textiles and plenty of daylight for a relaxed Nordic feel.',
    palette: ['#FAFAF9', '#E8DCCB', '#C8B49A', '#6B7280'],
    image: '/images/category-dining.jpg',
  },
  {
    name: 'Japandi',
    tagline: 'Japanese calm meets Nordic warmth',
    description: 'Low-slung furniture, natural textures, slatted wood and muted earthy tones.',
    palette: ['#EDE7DD', '#B9A68C', '#6B5844', '#2F2A24'],
    image: '/images/category-tv-unit.jpg',
  },
  {
    name: 'Indian Traditional',
    tagline: 'Heritage carving & rich colour',
    description: 'Sheesham and teak with hand-carved jaali, brass inlays, jewel tones and handloom fabrics.',
    palette: ['#7F1D1D', '#B45309', '#A0741A', '#3F2A1D'],
    image: '/images/story-artisan.jpg',
  },
  {
    name: 'Industrial',
    tagline: 'Raw, bold & urban',
    description: 'Exposed textures, black metal frames, walnut tops and statement pendant lighting.',
    palette: ['#44403C', '#78716C', '#4A2E1E', '#111111'],
    image: '/images/category-office.jpg',
  },
  {
    name: 'Bohemian',
    tagline: 'Layered, free-spirited',
    description: 'Rattan, cane, plants, kilim rugs and collected objects layered with personality.',
    palette: ['#C2410C', '#D97706', '#65A30D', '#7C4B27'],
    image: '/images/product-chair-solace.jpg',
  },
  {
    name: 'Luxury Contemporary',
    tagline: 'Statement & sophistication',
    description: 'Fluted panels, marble, velvet, smoked glass and warm cove lighting for a hotel-like finish.',
    palette: ['#1C1917', '#A0741A', '#D4AF37', '#E7E5E4'],
    image: '/images/category-wardrobes.jpg',
  },
  {
    name: 'Rustic',
    tagline: 'Earthy & handcrafted',
    description: 'Live-edge slabs, reclaimed timber, terracotta and stone for a farmhouse warmth.',
    palette: ['#8B5E3C', '#A16207', '#D6C4A8', '#3F3F2E'],
    image: '/images/product-sofa-sectional.jpg',
  },
  {
    name: 'Mid-Century',
    tagline: 'Retro curves, timeless',
    description: 'Tapered legs, curved forms, walnut veneers and pops of mustard and teal.',
    palette: ['#CA8A04', '#0F766E', '#7C4B27', '#F5F5F4'],
    image: '/images/product-sofa-curved.jpg',
  },
];

export const INTERIOR_DESIGNS: InteriorDesign[] = [
  {
    id: 'int-01',
    title: 'Warm Modern Living Lounge',
    room: 'Living Room',
    style: 'Modern',
    image: '/images/hero-living.jpg',
    area: '320 sq ft',
    budget: '₹4.5L – ₹7L',
    highlights: ['Plinth sofa', 'Fluted wall panel', 'Cove lighting'],
  },
  {
    id: 'int-02',
    title: 'Curved Bouclé Family Lounge',
    room: 'Living Room',
    style: 'Mid-Century',
    image: '/images/product-sofa-curved.jpg',
    area: '280 sq ft',
    budget: '₹3.5L – ₹5.5L',
    highlights: ['Curved sofa', 'Walnut coffee table', 'Mustard accents'],
  },
  {
    id: 'int-03',
    title: 'Sectional Rustic Living',
    room: 'Living Room',
    style: 'Rustic',
    image: '/images/product-sofa-sectional.jpg',
    area: '350 sq ft',
    budget: '₹4L – ₹6L',
    highlights: ['L-shape sectional', 'Reclaimed teak', 'Jute rug'],
  },
  {
    id: 'int-04',
    title: 'Quiet Minimal Master Suite',
    room: 'Bedroom',
    style: 'Minimalist',
    image: '/images/category-bedroom.jpg',
    area: '240 sq ft',
    budget: '₹3L – ₹5L',
    highlights: ['Slat platform bed', 'Floating side tables', 'Hidden storage'],
  },
  {
    id: 'int-05',
    title: 'Japandi Low-Plinth Bedroom',
    room: 'Bedroom',
    style: 'Japandi',
    image: '/images/category-bedroom.jpg',
    area: '200 sq ft',
    budget: '₹2.5L – ₹4L',
    highlights: ['Low zen bed', 'Rice-paper lights', 'Linen drapes'],
  },
  {
    id: 'int-06',
    title: 'Teak Handleless Modular Kitchen',
    room: 'Modular Kitchen',
    style: 'Modern',
    image: '/images/category-dining.jpg',
    area: '120 sq ft',
    budget: '₹3.5L – ₹6L',
    highlights: ['L-shape layout', 'Quartz counter', 'Tall pantry unit'],
  },
  {
    id: 'int-07',
    title: 'Nordic Open Kitchen & Breakfast Bar',
    room: 'Modular Kitchen',
    style: 'Scandinavian',
    image: '/images/category-dining.jpg',
    area: '150 sq ft',
    budget: '₹4L – ₹7L',
    highlights: ['Island counter', 'Oak shutters', 'Open shelving'],
  },
  {
    id: 'int-08',
    title: 'Live-Edge Dining Pavilion',
    room: 'Dining',
    style: 'Rustic',
    image: '/images/category-dining.jpg',
    area: '180 sq ft',
    budget: '₹2.5L – ₹4.5L',
    highlights: ['8-seater slab table', 'Crockery unit', 'Pendant cluster'],
  },
  {
    id: 'int-09',
    title: 'Smoked Glass Walk-In Wardrobe',
    room: 'Wardrobe',
    style: 'Luxury Contemporary',
    image: '/images/category-wardrobes.jpg',
    area: '90 sq ft',
    budget: '₹3L – ₹5.5L',
    highlights: ['Profile LED', 'Dressing island', 'Soft-close fittings'],
  },
  {
    id: 'int-10',
    title: 'Sliding Fluted Wardrobe Wall',
    room: 'Wardrobe',
    style: 'Modern',
    image: '/images/category-wardrobes.jpg',
    area: '60 sq ft',
    budget: '₹1.5L – ₹3L',
    highlights: ['3-door sliding', 'Loft storage', 'Mirror shutter'],
  },
  {
    id: 'int-11',
    title: 'Walnut Executive Home Office',
    room: 'Home Office',
    style: 'Industrial',
    image: '/images/category-office.jpg',
    area: '110 sq ft',
    budget: '₹1.8L – ₹3.5L',
    highlights: ['Executive desk', 'Library wall', 'Acoustic panels'],
  },
  {
    id: 'int-12',
    title: 'Playful Kids Study & Bunk Room',
    room: 'Kids Room',
    style: 'Scandinavian',
    image: '/images/category-bedroom.jpg',
    area: '150 sq ft',
    budget: '₹2L – ₹3.5L',
    highlights: ['Bunk bed', 'Study nook', 'Toy storage'],
  },
  {
    id: 'int-13',
    title: 'Carved Sheesham Pooja Mandir',
    room: 'Pooja Room',
    style: 'Indian Traditional',
    image: '/images/story-artisan.jpg',
    area: '25 sq ft',
    budget: '₹60K – ₹1.5L',
    highlights: ['Jaali doors', 'Brass bells', 'Backlit panel'],
  },
  {
    id: 'int-14',
    title: 'Acoustic Slat TV Wall',
    room: 'TV Unit',
    style: 'Japandi',
    image: '/images/category-tv-unit.jpg',
    area: '14 ft wall',
    budget: '₹1.2L – ₹2.5L',
    highlights: ['Slatted backdrop', 'Floating console', 'Wire concealment'],
  },
  {
    id: 'int-15',
    title: 'Boho Reading Corner',
    room: 'Living Room',
    style: 'Bohemian',
    image: '/images/product-chair-solace.jpg',
    area: '60 sq ft',
    budget: '₹80K – ₹1.5L',
    highlights: ['Accent armchair', 'Cane shelving', 'Indoor plants'],
  },
  {
    id: 'int-16',
    title: 'Boutique Office Reception',
    room: 'Commercial',
    style: 'Luxury Contemporary',
    image: '/images/category-office.jpg',
    area: '600 sq ft',
    budget: '₹8L – ₹15L',
    highlights: ['Reception desk', 'Brand wall', 'Lounge seating'],
  },
];

export const INTERIOR_PACKAGES: InteriorPackage[] = [
  {
    name: 'Essential',
    price: '₹1,499',
    unit: 'per sq ft',
    description: 'Smart, functional interiors for rentals and first homes.',
    features: [
      'Modular kitchen & wardrobes',
      'BWP plywood with laminate finish',
      '2D layout + material board',
      '45-day installation',
      '5-year warranty',
    ],
  },
  {
    name: 'Signature',
    price: '₹2,299',
    unit: 'per sq ft',
    description: 'Full-home design with solid wood highlights and 3D visuals.',
    features: [
      'Everything in Essential',
      'Photorealistic 3D renders',
      'Solid teak / sheesham accents',
      'False ceiling & lighting plan',
      'Dedicated designer + site manager',
      '10-year warranty',
    ],
    popular: true,
  },
  {
    name: 'Luxe',
    price: '₹3,499+',
    unit: 'per sq ft',
    description: 'Bespoke turnkey interiors with premium materials.',
    features: [
      'Everything in Signature',
      'Veneer, marble & fluted finishes',
      'Custom-made Craftora furniture',
      'Décor, art & soft furnishing styling',
      'Smart home & automation',
      '15-year warranty',
    ],
  },
];

export const INTERIOR_PROCESS = [
  { step: '01', title: 'Free Consultation', text: 'Share your space, style and budget with a designer — online or at home.' },
  { step: '02', title: 'Site Measurement', text: 'Our team visits for precise laser measurement of every wall and corner.' },
  { step: '03', title: '3D Design & Quote', text: 'See your home in 3D, tweak finishes, and get a transparent itemised quote.' },
  { step: '04', title: 'Production', text: 'Furniture and modules are crafted in our atelier with quality checks.' },
  { step: '05', title: 'Install & Handover', text: 'Clean installation, final styling and a warranty-backed handover.' },
];
