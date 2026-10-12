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
    image: '/images/interior/style-modern.jpg',
  },
  {
    name: 'Minimalist',
    tagline: 'Less, but better',
    description: 'Clutter-free rooms with concealed storage, soft light and only the pieces you truly use.',
    palette: ['#FFFFFF', '#E7E5E4', '#D6D3D1', '#57534E'],
    image: '/images/interior/style-minimalist.jpg',
  },
  {
    name: 'Scandinavian',
    tagline: 'Light, airy & cosy',
    description: 'Pale oak, white walls, linen textiles and plenty of daylight for a relaxed Nordic feel.',
    palette: ['#FAFAF9', '#E8DCCB', '#C8B49A', '#6B7280'],
    image: '/images/interior/style-scandinavian.jpg',
  },
  {
    name: 'Japandi',
    tagline: 'Japanese calm meets Nordic warmth',
    description: 'Low-slung furniture, natural textures, slatted wood and muted earthy tones.',
    palette: ['#EDE7DD', '#B9A68C', '#6B5844', '#2F2A24'],
    image: '/images/interior/style-japandi.jpg',
  },
  {
    name: 'Indian Traditional',
    tagline: 'Heritage carving & rich colour',
    description: 'Sheesham and teak with hand-carved jaali, brass inlays, jewel tones and handloom fabrics.',
    palette: ['#7F1D1D', '#B45309', '#A0741A', '#3F2A1D'],
    image: '/images/interior/style-indian-traditional.jpg',
  },
  {
    name: 'Industrial',
    tagline: 'Raw, bold & urban',
    description: 'Exposed textures, black metal frames, walnut tops and statement pendant lighting.',
    palette: ['#44403C', '#78716C', '#4A2E1E', '#111111'],
    image: '/images/interior/style-industrial.jpg',
  },
  {
    name: 'Bohemian',
    tagline: 'Layered, free-spirited',
    description: 'Rattan, cane, plants, kilim rugs and collected objects layered with personality.',
    palette: ['#C2410C', '#D97706', '#65A30D', '#7C4B27'],
    image: '/images/interior/style-bohemian.jpg',
  },
  {
    name: 'Luxury Contemporary',
    tagline: 'Statement & sophistication',
    description: 'Fluted panels, marble, velvet, smoked glass and warm cove lighting for a hotel-like finish.',
    palette: ['#1C1917', '#A0741A', '#D4AF37', '#E7E5E4'],
    image: '/images/interior/style-luxury.jpg',
  },
  {
    name: 'Rustic',
    tagline: 'Earthy & handcrafted',
    description: 'Live-edge slabs, reclaimed timber, terracotta and stone for a farmhouse warmth.',
    palette: ['#8B5E3C', '#A16207', '#D6C4A8', '#3F3F2E'],
    image: '/images/interior/style-rustic.jpg',
  },
  {
    name: 'Mid-Century',
    tagline: 'Retro curves, timeless',
    description: 'Tapered legs, curved forms, walnut veneers and pops of mustard and teal.',
    palette: ['#CA8A04', '#0F766E', '#7C4B27', '#F5F5F4'],
    image: '/images/interior/style-mid-century.jpg',
  },
];

export const INTERIOR_DESIGNS: InteriorDesign[] = [
  d('int-01', 'Jaali Feature Wall Living Room', 'Living Room', 'Modern', 'living-modern-jaali', '420 sq ft', '₹6L – ₹9L', ['CNC jaali partition', 'Floating TV console', 'Cove ceiling']),
  d('int-02', 'Teal Accent Apartment Living', 'Living Room', 'Modern', 'living-teal-apartment', '260 sq ft', '₹3L – ₹4.5L', ['Accent paint wall', 'Compact sofa', 'Wall-mounted TV shelf']),
  d('int-03', 'Velvet Green Mid-Century Lounge', 'Living Room', 'Mid-Century', 'living-mid-century-green', '240 sq ft', '₹3.5L – ₹5.5L', ['Velvet sofa', 'Walnut coffee table', 'Textured rug']),
  d('int-04', 'Open-Plan Living & Dining', 'Living Room', 'Scandinavian', 'living-open-plan', '380 sq ft', '₹4.5L – ₹7L', ['Oak dining table', 'Open metal shelving', 'Pendant cluster']),
  d('int-05', 'Jodhpur Heritage Living Room', 'Living Room', 'Indian Traditional', 'living-heritage-jodhpur', '350 sq ft', '₹5L – ₹8L', ['Carved armchairs', 'Striped stone floor', 'Crystal chandelier']),
  d('int-06', 'Vintage Haveli Sitting Room', 'Living Room', 'Indian Traditional', 'living-vintage-indian', '300 sq ft', '₹4L – ₹7L', ['Antique side tables', 'Brass accents', 'Hand-painted walls']),
  d('int-07', 'Boho Rattan Reading Corner', 'Living Room', 'Bohemian', 'living-boho-corner', '80 sq ft', '₹80K – ₹1.5L', ['Peacock rattan chair', 'Sheepskin throws', 'Layered rugs']),
  d('int-08', 'Quiet Minimal Master Suite', 'Bedroom', 'Minimalist', 'bedroom-minimal', '220 sq ft', '₹2.5L – ₹4L', ['Upholstered bed', 'Wall sconces', 'Concealed storage']),
  d('int-09', 'Japandi Sunlit Bedroom', 'Bedroom', 'Japandi', 'bedroom-japandi', '200 sq ft', '₹2.5L – ₹4L', ['Solid wood stool table', 'Linen bedding', 'Natural light']),
  d('int-10', 'Plain White Calm Bedroom', 'Bedroom', 'Scandinavian', 'style-minimalist', '180 sq ft', '₹2L – ₹3.5L', ['Floating side shelf', 'White linen', 'Warm task light']),
  d('int-11', 'Teak Counter Modular Kitchen', 'Modular Kitchen', 'Modern', 'kitchen-wood-white', '110 sq ft', '₹3L – ₹5L', ['L-shape layout', 'Teak counter & backsplash', 'Under-cabinet LED']),
  d('int-12', 'All-White Nordic Kitchen', 'Modular Kitchen', 'Scandinavian', 'kitchen-white-nordic', '150 sq ft', '₹4L – ₹6.5L', ['Island counter', 'Built-in ovens', 'Tall pantry']),
  d('int-13', 'Handleless Glossy Kitchen', 'Modular Kitchen', 'Luxury Contemporary', 'kitchen-handleless-luxe', '130 sq ft', '₹5L – ₹8L', ['Gola profile shutters', 'Smoked glass uppers', 'Wine cooler']),
  d('int-14', 'Kitchen with Breakfast Dining', 'Modular Kitchen', 'Modern', 'kitchen-dining-zone', '170 sq ft', '₹4.5L – ₹7L', ['Floor-to-ceiling units', 'Round dining table', 'Pastel chairs']),
  d('int-15', 'Farmhouse Dining Room', 'Dining', 'Rustic', 'dining-farmhouse', '200 sq ft', '₹2.5L – ₹4.5L', ['Solid wood table & bench', 'Iron pendant', 'Wide-plank floor']),
  d('int-16', 'Wood Cabin Dining Nook', 'Dining', 'Rustic', 'style-rustic', '90 sq ft', '₹1.2L – ₹2.5L', ['Pine wall panelling', 'Carved white chairs', '4-seater table']),
  d('int-17', 'Luxe Walk-In Wardrobe', 'Wardrobe', 'Luxury Contemporary', 'wardrobe-walk-in-luxe', '110 sq ft', '₹3.5L – ₹6L', ['Profile LED', 'Glass-front drawers', 'Shoe wall']),
  d('int-18', 'Light Oak Walk-Through Closet', 'Wardrobe', 'Minimalist', 'wardrobe-light-oak', '80 sq ft', '₹2.5L – ₹4L', ['Open oak shelving', 'Hanging rails', 'Drawer island']),
  d('int-19', 'Black Metal Open Wardrobe', 'Wardrobe', 'Industrial', 'wardrobe-industrial', '70 sq ft', '₹1.8L – ₹3L', ['Steel frame', 'Wooden shelves', 'Track lighting']),
  d('int-20', 'Compact Minimal Study Nook', 'Home Office', 'Minimalist', 'office-minimal-study', '40 sq ft', '₹40K – ₹90K', ['Floating desk', 'Wall shelf', 'Accent chair']),
  d('int-21', 'Brick Loft Workspace', 'Home Office', 'Industrial', 'style-industrial', '300 sq ft', '₹3L – ₹5L', ['Exposed brick', 'Steel beams', 'Track lights']),
  d('int-22', 'Scandinavian Nursery', 'Kids Room', 'Scandinavian', 'kids-nursery', '120 sq ft', '₹1.2L – ₹2L', ['White crib', 'Cube storage', 'Wall shelves']),
  d('int-23', 'Shared Kids Room with Rattan Beds', 'Kids Room', 'Bohemian', 'kids-shared-room', '160 sq ft', '₹1.8L – ₹3L', ['Twin rattan beds', 'Macramé wall art', 'Toy storage']),
  d('int-24', 'Wall-Mounted Wooden Mandir', 'Pooja Room', 'Indian Traditional', 'pooja-wooden-mandir', '20 sq ft', '₹50K – ₹1.2L', ['Teak niche shelves', 'Brass diyas', 'Backlit idol niche']),
  d('int-25', 'Marble & Fluted TV Wall', 'TV Unit', 'Luxury Contemporary', 'style-luxury', '14 ft wall', '₹1.5L – ₹3L', ['Marble-look panels', 'Fluted wood section', 'Floating shelves']),
  d('int-26', 'Teak Sideboard Media Corner', 'TV Unit', 'Mid-Century', 'tv-teak-sideboard', '10 ft wall', '₹70K – ₹1.4L', ['Teak sideboard', 'Wall-mounted TV', 'Minimal décor']),
  d('int-27', 'Glass & Wood Corporate Lobby', 'Commercial', 'Luxury Contemporary', 'commercial-lobby', '900 sq ft', '₹12L – ₹20L', ['Wood-clad columns', 'Full-height glazing', 'Polished floor']),
  d('int-28', 'Boho Boutique Studio Reception', 'Commercial', 'Bohemian', 'commercial-boho-reception', '250 sq ft', '₹3L – ₹5L', ['Rattan lounge seating', 'Gallery wall', 'Plants']),
];

function d(
  id: string,
  title: string,
  room: InteriorRoom,
  style: InteriorStyle,
  photo: string,
  area: string,
  budget: string,
  highlights: string[]
): InteriorDesign {
  return { id, title, room, style, image: `/images/interior/${photo}.jpg`, area, budget, highlights };
}

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
