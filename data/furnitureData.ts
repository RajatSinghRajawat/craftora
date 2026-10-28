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
    itemCount: 20,
  },
  {
    id: 'living-room',
    label: 'Living Room',
    subtitle: 'Sculptural Comfort',
    description: 'Handcrafted accent armchairs, modular cloud sofas, marble-topped coffee tables & artisan credenzas.',
    image: '/images/product-sofa-sectional.jpg',
    itemCount: 20,
  },
  {
    id: 'dining',
    label: 'Dining',
    subtitle: 'Gathering In Style',
    description: 'Live-edge solid teak tables, ergonomic sculpted dining chairs & fluted bar credenzas built to anchor conversations.',
    image: '/images/category-dining.jpg',
    itemCount: 20,
  },
  {
    id: 'wardrobes',
    label: 'Wardrobes',
    subtitle: 'Architectural Storage',
    description: 'Custom walk-in dressing suites, smoked glass sliding wardrobes & solid walnut modular storage systems with integrated LEDs.',
    image: '/images/category-wardrobes.jpg',
    itemCount: 20,
  },
  {
    id: 'tv-units',
    label: 'TV Units',
    subtitle: 'Floating Media Consoles',
    description: 'Contemporary acoustic wood slat wall backdrops, floating consoles with concealed wire management & Italian marble accents.',
    image: '/images/category-tv-unit.jpg',
    itemCount: 20,
  },
  {
    id: 'office-furniture',
    label: 'Office Furniture',
    subtitle: 'Executive Sanctuaries',
    description: 'Solid walnut executive desks with brass inlays, ergonomic leather swivel chairs & bespoke architectural libraries.',
    image: '/images/category-office.jpg',
    itemCount: 20,
  },
] as const;

export const CRAFTORA_WOOD_FINISHES_20 = [
  'Black', 'Distressed Black', 'Clear Coat',
  'Rosewood', 'Natural Oak', 'Dark Oak',
  'English Oak', 'Jacobean Oak', 'Walnut',
  'Teak', 'Mahogany', 'Cherry', 'Honey Oak',
  'Golden Oak', 'Chestnut', 'Espresso',
  'Ash Grey', 'Whitewash', 'Cedar', 'Smoked Oak', 'Ebony'
] as const;

export const FURNITURE_ITEMS: FurnitureItem[] = [
  {
    "id": "crf-01",
    "slug": "the-craftora-solace-armchair",
    "name": "The Solace Curved Armchair",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Signature brand emblem curved armchair",
    "price": 48500,
    "originalPrice": 56000,
    "rating": 4.9,
    "reviewCount": 42,
    "image": "/images/product-chair-solace.jpg",
    "galleryImages": [
      "/images/product-chair-solace.jpg",
      "/images/hero-living.jpg",
      "/images/story-artisan.jpg"
    ],
    "dimensions": {
      "width": "84 cm",
      "depth": "88 cm",
      "height": "82 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Walnut",
      "Clear Coat",
      "Smoked Oak"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Oatmeal Pure Linen",
      "Forest Olive Velvet"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isSignature": true,
    "isBestSeller": true,
    "description": "Sculptural silhouette designed to anchor formal living spaces with quiet architectural authority. Carved in solid timber and upholstered in rich tactile bouclé.",
    "details": [
      "Kiln-dried solid timber frame with 15-year warranty",
      "Sculptural curved continuous wrap backrest",
      "High-density multi-layer cushioning",
      "Concealed levelers for stone & hardwood floors"
    ],
    "craftsmanshipNotes": "Joints are assembled using traditional mortise-and-tenon construction."
  },
  {
    "id": "crf-02",
    "slug": "zenith-modular-plinth-sofa",
    "name": "The Zenith Modular Plinth 3-Seater",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Low-slung architectural timber plinth sofa",
    "price": 118000,
    "originalPrice": 135000,
    "rating": 4.9,
    "reviewCount": 36,
    "image": "/images/product-sofa-zenith.jpg",
    "galleryImages": [
      "/images/product-sofa-zenith.jpg",
      "/images/product-sofa-curved.jpg",
      "/images/hero-living.jpg"
    ],
    "dimensions": {
      "width": "240 cm",
      "depth": "98 cm",
      "height": "72 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Ebony",
      "Teak"
    ],
    "fabricOptions": [
      "Oatmeal Pure Linen",
      "Italian Cognac Leather",
      "Belgian Ivory Bouclé"
    ],
    "leadTime": "4-5 Weeks Bespoke Build",
    "isSignature": true,
    "isBestSeller": true,
    "description": "Floating on a continuous 45mm solid wood perimeter plinth with shadow-gap reveal. Designed for deep lounge comfort with high-resilience Italian webbing.",
    "details": [
      "Solid timber perimeter plinth with 15-year warranty",
      "Down-feather blend top layer over high-density foam",
      "Removable commercial upholstery covers",
      "Integrated timber end-table shelf"
    ],
    "craftsmanshipNotes": "Plinth corners feature exposed 45-degree miter spline keys."
  },
  {
    "id": "crf-03",
    "slug": "elysian-curved-boucle-sofa",
    "name": "The Elysian Sculptural Curved Sofa",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Organic curved sofa inspired by Rajasthani haveli arches",
    "price": 138000,
    "originalPrice": 155000,
    "rating": 4.8,
    "reviewCount": 29,
    "image": "/images/product-sofa-curved.jpg",
    "galleryImages": [
      "/images/product-sofa-curved.jpg",
      "/images/product-sofa-sectional.jpg"
    ],
    "dimensions": {
      "width": "260 cm",
      "depth": "110 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Honey Oak"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Sand Textured Weave"
    ],
    "leadTime": "4-5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "A breathtaking curved form that softens sharp geometric living rooms. Hand-shaped timber internal framework with plush organic curves.",
    "details": [
      "Organic arc design with seamless continuous backrest",
      "Pocket spring core with multi-density foam",
      "Solid timber turned legs with brass ferrules"
    ],
    "craftsmanshipNotes": "Continuous steam-bent frame crafted at our Jaipur atelier."
  },
  {
    "id": "crf-04",
    "slug": "avena-modular-l-shape-sectional",
    "name": "The Avena Modular L-Shape Sectional",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Expansive 5-seater corner sectional for large family lounges",
    "price": 165000,
    "originalPrice": 189000,
    "rating": 5,
    "reviewCount": 47,
    "image": "/images/product-sofa-sectional.jpg",
    "galleryImages": [
      "/images/product-sofa-sectional.jpg",
      "/images/product-sofa-zenith.jpg"
    ],
    "dimensions": {
      "width": "310 cm",
      "depth": "210 cm",
      "height": "74 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Walnut",
      "Espresso"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Charcoal Textured Weave",
      "Oatmeal Linen"
    ],
    "leadTime": "5 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "A magnificent modular sectional that commands the room. Designed with generous chaise depth and interlocking hidden German hardware.",
    "details": [
      "Modular configuration (Left or Right chaise)",
      "Solid hardwood internal frame kiln-dried to 8% moisture",
      "Deep seating for lounging and entertaining"
    ],
    "craftsmanshipNotes": "Double-doweled and reinforced at every major load-bearing corner."
  },
  {
    "id": "crf-05",
    "slug": "heritage-chesterfield-sofa",
    "name": "The Jaipur Heritage Deep-Tufted Chesterfield",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Classic deep diamond button tufting in Italian pull-up leather",
    "price": 145000,
    "originalPrice": 168000,
    "rating": 4.9,
    "reviewCount": 31,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
      "/images/product-chair-solace.jpg"
    ],
    "dimensions": {
      "width": "225 cm",
      "depth": "95 cm",
      "height": "78 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Jacobean Oak",
      "Walnut",
      "Dark Oak"
    ],
    "fabricOptions": [
      "Italian Cognac Leather",
      "Charcoal Black Leather",
      "Vintage Olive Velvet"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Generously proportioned with hand-pleated rolled arms and hand-tied button tufting. Crafted for heritage bungalows and luxury executive drawing rooms.",
    "details": [
      "100% Top-grain Italian leather",
      "Eight-way hand-tied coil springs",
      "Solid turned hardwood bun feet"
    ],
    "craftsmanshipNotes": "Every single button is hand-punched and secured with heavy-duty sailmakers thread."
  },
  {
    "id": "crf-06",
    "slug": "nordic-sculptural-armchair",
    "name": "The Nordic Sculptural Teak Armchair",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Exposed teakwood joinery with organic armrest curves",
    "price": 36000,
    "originalPrice": 42000,
    "rating": 4.8,
    "reviewCount": 22,
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
      "/images/product-chair-solace.jpg"
    ],
    "dimensions": {
      "width": "76 cm",
      "depth": "82 cm",
      "height": "80 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Teak",
      "Rosewood"
    ],
    "fabricOptions": [
      "Oatmeal Pure Linen",
      "Forest Olive Velvet",
      "Cognac Tan Leather"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isNewArrival": true,
    "description": "Clean Scandinavian lines fused with Rajasthan hardwood carpentry. The sculpted armrests invite touch with satin smooth beeswax hand-finishing.",
    "details": [
      "Exposed through-tenon joint accents",
      "Ergonomically angled seat cushion",
      "Lightweight yet indestructible solid timber construction"
    ],
    "craftsmanshipNotes": "Hand-shaped with Japanese rasps to produce tactile organic edges."
  },
  {
    "id": "crf-07",
    "slug": "aethel-live-edge-coffee-table",
    "name": "The Aethel Live-Edge Teak Coffee Table",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Single tree-trunk live-edge slab with brass butterfly keys",
    "price": 52000,
    "originalPrice": 62000,
    "rating": 5,
    "reviewCount": 54,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
      "/images/hero-living.jpg"
    ],
    "dimensions": {
      "width": "135 cm",
      "depth": "75 cm",
      "height": "42 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Natural Oak",
      "Honey Oak",
      "Walnut"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "isBestSeller": true,
    "description": "Celebrates the natural undulating contours of a single timber trunk. Accented with hand-inlaid brass butterfly keys to stabilize natural fissures.",
    "details": [
      "70mm thick seasoned solid wood slab",
      "Organic live bark contour preserved under matte protective sealant",
      "Matte black architectural metal or turned wood legs"
    ],
    "craftsmanshipNotes": "Kiln-stabilized over 45 days in our Jaipur solar kiln."
  },
  {
    "id": "crf-08",
    "slug": "marina-round-nesting-tables",
    "name": "The Marina Fluted Nesting Coffee Tables (Set of 2)",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Fluted solid wood cylinders with Italian Carrara marble tops",
    "price": 44000,
    "originalPrice": 52000,
    "rating": 4.8,
    "reviewCount": 38,
    "image": "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "85 cm & 60 cm",
      "depth": "85 cm",
      "height": "45 cm & 38 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Smoked Oak",
      "Black",
      "Walnut",
      "Clear Coat"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Dynamic nesting tables that slide together or separate for entertaining. Vertical fluted timber bases wrapped in authentic solid wood slats.",
    "details": [
      "Set of 2 nesting circular tables",
      "Natural polished Italian marble or solid wood slab tops",
      "Concealed felt glides protect flooring"
    ],
    "craftsmanshipNotes": "Precision CNC fluting assembled and finished by master artisans."
  },
  {
    "id": "crf-09",
    "slug": "verona-solid-wood-daybed",
    "name": "The Verona Architectural Chaise Daybed",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Minimalist daybed with integrated leather bolster cushion",
    "price": 68000,
    "originalPrice": 78000,
    "rating": 4.9,
    "reviewCount": 18,
    "image": "https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "190 cm",
      "depth": "80 cm",
      "height": "45 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Walnut",
      "Teak",
      "Ebony"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Italian Cognac Leather"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isNewArrival": true,
    "description": "Perfect for sunrooms, window bays, and luxury reading nooks. Solid wood slat deck with a strapped cylindrical leather bolster.",
    "details": [
      "Solid timber frame with tapered Danish legs",
      "Full-grain leather buckle straps",
      "High-resilience foam mattress core"
    ],
    "craftsmanshipNotes": "Constructed using mortise-and-tenon joints with hand-sanded edges."
  },
  {
    "id": "crf-10",
    "slug": "kallisto-curved-swivel-chair",
    "name": "The Kallisto 360° Swivel Pod Chair",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Effortless 360-degree silent swivel in cocoon bouclé",
    "price": 42000,
    "originalPrice": 49000,
    "rating": 4.9,
    "reviewCount": 27,
    "image": "https://images.unsplash.com/photo-1583845112239-97ef1341b271?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583845112239-97ef1341b271?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "82 cm",
      "depth": "84 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Walnut"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Forest Olive Velvet"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "A cozy cocooning lounge chair featuring a heavy-duty ball-bearing silent 360-degree swivel mechanism on a recessed solid wood disc.",
    "details": [
      "Heavy-duty 360° silent rotation mechanism",
      "Wrap-around curved barrel silhouette",
      "Durable loop bouclé with soil-release treatment"
    ],
    "craftsmanshipNotes": "Solid timber internal frame tested up to 250 kg."
  },
  {
    "id": "crf-11",
    "slug": "haveli-rattan-accent-chair",
    "name": "The Haveli Cane & Teak Lounge Chair",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Hand-woven natural cane wickerwork with solid Burma teak",
    "price": 38000,
    "originalPrice": 45000,
    "rating": 4.8,
    "reviewCount": 34,
    "image": "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "72 cm",
      "depth": "78 cm",
      "height": "82 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Rosewood",
      "Natural Oak",
      "Chestnut"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Honors Rajasthan’s royal haveli heritage. Hand-caned backrest offers breathable summer comfort while seasoned Burma teak provides timeless durability.",
    "details": [
      "Authentic hand-woven natural rattan octagonal cane",
      "Ergonomic seat recline angle",
      "Includes removable pure linen seat cushion"
    ],
    "craftsmanshipNotes": "Cane is woven entirely by master handcraft artisans in Jaipur."
  },
  {
    "id": "crf-12",
    "slug": "grand-teak-credenza-sideboard",
    "name": "The Grand Teak Sideboard Credenza (4-Door)",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Fluted wood door panels with solid brass handles",
    "price": 84000,
    "originalPrice": 98000,
    "rating": 5,
    "reviewCount": 41,
    "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "200 cm",
      "depth": "48 cm",
      "height": "80 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Teak",
      "Ebony"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Statement living room storage featuring vertical acoustic flutes across four soft-closing cabinet doors with adjustable interior shelving.",
    "details": [
      "Four soft-close concealed German hinges",
      "Adjustable solid wood internal shelves",
      "Concealed rear wire management pass-throughs"
    ],
    "craftsmanshipNotes": "Solid timber throughout, including drawer sides and back panels."
  },
  {
    "id": "crf-13",
    "slug": "marcellus-cloud-couch-2-seater",
    "name": "The Marcellus Deep Comfort 2-Seater",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Feather-soft cloud cushioning on architectural wood legs",
    "price": 82000,
    "originalPrice": 95000,
    "rating": 4.8,
    "reviewCount": 25,
    "image": "https://images.unsplash.com/photo-1493663284051-5999189d3d6d?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1493663284051-5999189d3d6d?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "185 cm",
      "depth": "94 cm",
      "height": "78 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Natural Oak",
      "Walnut"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Oatmeal Pure Linen"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "description": "Designed for intimate reading spaces, apartments, and modern living zones. Features plush goose-down feather wrapped cushions over pocket springs.",
    "details": [
      "Double-layer feather blend seating",
      "Hardwood mortise-and-tenon internal frame",
      "Stain-resistant performance fabric"
    ],
    "craftsmanshipNotes": "Hand-sewn French seams along all perimeter edges."
  },
  {
    "id": "crf-14",
    "slug": "tatiyawas-monolith-coffee-table",
    "name": "The Tatiyawas Monolith Block Table",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Hand-carved solid timber block honoring our Jaipur atelier roots",
    "price": 49000,
    "originalPrice": 58000,
    "rating": 5,
    "reviewCount": 19,
    "image": "https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "120 cm",
      "depth": "70 cm",
      "height": "38 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Distressed Black",
      "Smoked Oak",
      "Walnut",
      "Clear Coat"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Chiseled and smoothed from interlocking solid timber baulks. A commanding low-profile centerpiece that embodies raw architectural gravity.",
    "details": [
      "Heavy solid hardwood block construction",
      "Satin smooth hand-rubbed wax finish",
      "Recessed shadow plinth gives floating illusion"
    ],
    "craftsmanshipNotes": "Named in honor of our Chomu Tatiyawas workshop."
  },
  {
    "id": "crf-15",
    "slug": "valencia-sofa-cum-bed",
    "name": "The Valencia Hydraulic Sofa-Cum-Bed",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Effortless German pneumatic transformation from sofa to queen bed",
    "price": 92000,
    "originalPrice": 108000,
    "rating": 4.9,
    "reviewCount": 33,
    "image": "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "215 cm",
      "depth": "100 cm (200 cm open)",
      "height": "82 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Walnut",
      "Espresso"
    ],
    "fabricOptions": [
      "Oatmeal Pure Linen",
      "Charcoal Textured Weave"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Seamless dual functionality without compromising luxury aesthetics. Pulls out with one smooth motion into a 6-inch orthopedic foam mattress.",
    "details": [
      "Pneumatic gas-lift mechanism with 10-year warranty",
      "Integrated storage compartment for duvets and pillows",
      "Solid hardwood armrests and base frame"
    ],
    "craftsmanshipNotes": "German engineered transformation hinges concealed within solid teak."
  },
  {
    "id": "crf-16",
    "slug": "chomu-carved-jharokha-mirror",
    "name": "The Chomu Hand-Carved Floor Mirror",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Architectural solid timber arch with antiqued brass studs",
    "price": 32000,
    "originalPrice": 38000,
    "rating": 4.8,
    "reviewCount": 28,
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "90 cm",
      "depth": "8 cm",
      "height": "210 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Distressed Black",
      "Walnut",
      "Teak"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Full-length statement mirror crowned with gentle traditional haveli curvature. Adds tremendous spatial depth and reflected natural light.",
    "details": [
      "5mm distortion-free Saint-Gobain mirror",
      "Heavy-duty wall anchoring safety hardware included",
      "Can lean against wall or hang flush"
    ],
    "craftsmanshipNotes": "Carved by our second-generation master carvers in Jaipur."
  },
  {
    "id": "crf-17",
    "slug": "solaria-cantilever-side-table",
    "name": "The Solaria C-Shape Sofa Slide Table",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Slides effortlessly over couch cushions for drinks & laptop work",
    "price": 18500,
    "originalPrice": 22000,
    "rating": 4.7,
    "reviewCount": 46,
    "image": "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "45 cm",
      "depth": "40 cm",
      "height": "62 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Walnut",
      "Black",
      "Natural Oak"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Slender, stable, and indispensable. The cantilevered solid wood top hovers directly above sofa armrests, holding espresso cups or iPads.",
    "details": [
      "Weighted low-profile base slides under low clearance sofas",
      "Solid timber top with beveled ergonomic perimeter",
      "Scratch-resistant botanical oil finish"
    ],
    "craftsmanshipNotes": "Reinforced internal steel spline prevents cantilever sag."
  },
  {
    "id": "crf-18",
    "slug": "zen-low-profile-slat-bench",
    "name": "The Zen Teak Slat Entryway & Living Bench",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "George Nelson inspired solid wood architectural slat bench",
    "price": 26000,
    "originalPrice": 31000,
    "rating": 4.9,
    "reviewCount": 39,
    "image": "https://images.unsplash.com/photo-1615876234886-fd9a39fa95f9?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615876234886-fd9a39fa95f9?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "150 cm",
      "depth": "46 cm",
      "height": "42 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Ebony",
      "Teak"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "isNewArrival": true,
    "description": "Classic architectural slat design providing versatile seating or low-slung surface display behind sofas or along entryway galleries.",
    "details": [
      "Equally spaced 25mm thick solid wood slats",
      "Open shadow design allows ambient air and light passage",
      "Optional tailored linen bench cushion available"
    ],
    "craftsmanshipNotes": "Finger-jointed cross members for superior lateral stability."
  },
  {
    "id": "crf-19",
    "slug": "florence-curved-back-2-seater",
    "name": "The Florence Barrel Back Loveseat",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Intimate conversation couch with wrap-around upholstered curve",
    "price": 76000,
    "originalPrice": 89000,
    "rating": 4.8,
    "reviewCount": 21,
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "175 cm",
      "depth": "88 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Honey Oak",
      "Natural Oak"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Forest Olive Velvet"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "description": "Enveloping 2-seater couch with a continuous curved backrest that embraces conversational warmth in boutique apartments and hotel lounges.",
    "details": [
      "Curved plywood core reinforced with solid timber framing",
      "High-resilience foam padding",
      "Tapered turned wood feet with brass tips"
    ],
    "craftsmanshipNotes": "Built to hotel contract commercial grade specifications."
  },
  {
    "id": "crf-20",
    "slug": "amber-revolving-bookcase-table",
    "name": "The Amber Revolving Side Table & Library",
    "category": "living-room",
    "categoryLabel": "Living Room",
    "tagline": "Rotating circular timber table with integrated book compartments",
    "price": 34000,
    "originalPrice": 39500,
    "rating": 5,
    "reviewCount": 16,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "55 cm",
      "depth": "55 cm",
      "height": "60 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Teak",
      "Walnut",
      "Chestnut"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "An ingenious dual-tier side table that rotates 360 degrees, allowing you to access books and journals right from your favorite armchair.",
    "details": [
      "Precision smooth steel swivel bearing",
      "Solid wood dividing partitions",
      "Upper display surface with raised lip edge"
    ],
    "craftsmanshipNotes": "Inspired by traditional Rajasthani library carousel tables."
  },
  {
    "id": "crf-21",
    "slug": "kallisto-floating-slat-bed",
    "name": "The Kallisto Floating Platform King Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Cantilevered architectural bed giving the illusion of weightlessness",
    "price": 94000,
    "originalPrice": 110000,
    "rating": 5,
    "reviewCount": 48,
    "image": "/images/category-bedroom.jpg",
    "galleryImages": [
      "/images/category-bedroom.jpg",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "195 cm",
      "depth": "215 cm",
      "height": "95 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Natural Oak",
      "Clear Coat",
      "Smoked Oak"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isSignature": true,
    "isBestSeller": true,
    "description": "Recessed cantilever base creates an ethereal floating appearance. Paired with integrated perimeter under-glow channel and acoustic vertical wood slats.",
    "details": [
      "Recessed central support base with 15-year creak-free warranty",
      "Pneumatic mattress lift option available",
      "Integrated wire pass-through for bedside charging"
    ],
    "craftsmanshipNotes": "Headboard slats are individually hand-aligned with precision 12mm air gaps."
  },
  {
    "id": "crf-22",
    "slug": "valen-hydraulic-storage-king-bed",
    "name": "The Valen German Hydraulic Storage King Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Effortless pneumatic gas-lift lifting 800L of dust-proof storage",
    "price": 112000,
    "originalPrice": 130000,
    "rating": 4.9,
    "reviewCount": 62,
    "image": "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "198 cm",
      "depth": "218 cm",
      "height": "110 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Walnut",
      "Espresso",
      "Dark Oak"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Oatmeal Pure Linen",
      "Charcoal Velvet"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Solves Indian apartment storage needs with effortless fingertip lifting. Fitted with heavy-duty German gas struts and sealed internal timber chambers.",
    "details": [
      "Twin German gas struts with 10-year replacement warranty",
      "800 Liters of fully dust-proof storage compartment",
      "Cushioned upholstered wingback headboard"
    ],
    "craftsmanshipNotes": "Frame reinforced with tubular steel ribbing bolted to solid timber."
  },
  {
    "id": "crf-23",
    "slug": "japandi-low-slung-platform-bed",
    "name": "The Kyoto Japandi Low Platform Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Minimalist low-profile platform with extended bedside ledges",
    "price": 86000,
    "originalPrice": 99000,
    "rating": 4.9,
    "reviewCount": 38,
    "image": "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "220 cm",
      "depth": "225 cm",
      "height": "65 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Whitewash",
      "Ash Grey"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Embraces Japanese aesthetic calm and Danish functionality. The wide peripheral perimeter ledge doubles as an organic nightstand for cups and books.",
    "details": [
      "15cm low-to-ground profile promotes grounded sleep",
      "Solid wood slats allow natural mattress ventilation",
      "Zero-tool interlocking joint assembly"
    ],
    "craftsmanshipNotes": "Assembled using traditional Japanese chigiri butterfly spline joints."
  },
  {
    "id": "crf-24",
    "slug": "rajputana-four-poster-canopy-bed",
    "name": "The Rajputana Royal 4-Poster Canopy Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Solid Burma teak 4-poster bed with brass finials & sheer drapes",
    "price": 148000,
    "originalPrice": 175000,
    "rating": 5,
    "reviewCount": 29,
    "image": "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "205 cm",
      "depth": "220 cm",
      "height": "225 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Teak",
      "Mahogany",
      "Jacobean Oak"
    ],
    "leadTime": "5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "An architectural heirloom celebrating Rajasthani palace bed design. Towering tapered solid teak posts topped with hand-spun brass finials.",
    "details": [
      "Massive 80mm solid teak corner posts",
      "Mortise-and-tenon bolted framework for silent stability",
      "Includes custom sheer cotton canopy drapes"
    ],
    "craftsmanshipNotes": "Delivered for luxury suites across our 5 hotel projects."
  },
  {
    "id": "crf-25",
    "slug": "aethel-cantilever-nightstand",
    "name": "The Aethel Floating Nightstand (Pair)",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Wall-mounted floating nightstand with soft-close dovetail drawer",
    "price": 28000,
    "originalPrice": 34000,
    "rating": 4.8,
    "reviewCount": 42,
    "image": "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "50 cm",
      "depth": "40 cm",
      "height": "22 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Natural Oak",
      "Clear Coat",
      "Smoked Oak"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Floats effortlessly off the wall to make bedroom cleaning easy. Conceals wireless phone charging pads directly beneath the solid timber top.",
    "details": [
      "Heavy-duty French cleat wall mounting system holds up to 45 kg",
      "Blum concealed soft-closing undermount slides",
      "Dovetailed solid timber drawer box"
    ],
    "craftsmanshipNotes": "Drawer face cut from the same timber board as top to maintain continuous grain."
  },
  {
    "id": "crf-26",
    "slug": "solace-wingback-upholstered-bed",
    "name": "The Solace Grand Wingback King Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Curved acoustic wingback headboard in Belgian boucle",
    "price": 105000,
    "originalPrice": 122000,
    "rating": 4.9,
    "reviewCount": 35,
    "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "202 cm",
      "depth": "220 cm",
      "height": "125 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Walnut",
      "Smoked Oak"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Forest Olive Velvet",
      "Oatmeal Linen"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Features dramatic wrap-around curved wings that cocoon your sleep and dampen ambient room noise. Upholstered in tactile heavy boucle.",
    "details": [
      "Acoustic sound-dampening wing structure",
      "Hardwood internal framing with 15-year guarantee",
      "Low-profile footboard prevents shin bumps"
    ],
    "craftsmanshipNotes": "Wing curves are hand-formed with multilayer laminated hardwood."
  },
  {
    "id": "crf-27",
    "slug": "chomu-dressing-vanity-console",
    "name": "The Chomu Dressing Table with Illuminated Mirror",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Solid timber vanity with velvet-lined jewelry drawers & 3000K LED mirror",
    "price": 58000,
    "originalPrice": 68000,
    "rating": 5,
    "reviewCount": 27,
    "image": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "120 cm",
      "depth": "48 cm",
      "height": "145 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Natural Oak",
      "Rosewood"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Every morning becomes a ritual of elegance. Designed with custom dividers for rings, watches, and fragrances, plus warm halo mirror lighting.",
    "details": [
      "Integrated soft-touch dimmable LED mirror",
      "Four velvet-lined divided organizer drawers",
      "Matching solid wood upholstered vanity stool included"
    ],
    "craftsmanshipNotes": "Drawer interiors crafted from fragrant Himalayan cedar."
  },
  {
    "id": "crf-28",
    "slug": "haven-6-drawer-tallboy-dresser",
    "name": "The Haven 6-Drawer Solid Wood Tallboy",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Vertical bedroom chest with recessed shadow handles",
    "price": 64000,
    "originalPrice": 75000,
    "rating": 4.8,
    "reviewCount": 31,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "85 cm",
      "depth": "50 cm",
      "height": "130 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Walnut",
      "Espresso",
      "Dark Oak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "description": "Maximizes vertical storage space with a compact floor footprint. Six full-extension dovetail drawers with silent German push-to-open slides.",
    "details": [
      "Six deep drawers handle winter duvets and apparel",
      "Anti-tip wall bracket hardware included",
      "Continuous waterfall grain across the top and side panels"
    ],
    "craftsmanshipNotes": "Solid timber side panels with expansion allowance slots."
  },
  {
    "id": "crf-29",
    "slug": "serena-fluted-bedside-table",
    "name": "The Serena Fluted Cylinder Bedside Table",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Circular fluted nightstand with concealed revolving drawer",
    "price": 24000,
    "originalPrice": 28500,
    "rating": 4.9,
    "reviewCount": 44,
    "image": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "45 cm",
      "depth": "45 cm",
      "height": "52 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Walnut",
      "Black",
      "Honey Oak"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "isNewArrival": true,
    "description": "Soft circular silhouette prevents nighttime bumps. The curved door swings open on invisible pivots to reveal dual-level bedside storage.",
    "details": [
      "Curved tambour fluting around complete perimeter",
      "Marble or solid wood top with raised spill rim",
      "Silent push-to-open latch"
    ],
    "craftsmanshipNotes": "Every vertical flute strip is bookmatched by hand."
  },
  {
    "id": "crf-30",
    "slug": "amber-acoustic-slat-headboard",
    "name": "The Amber Architectural Acoustic Wood Headboard Wall",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Wall-to-wall acoustic slatted timber backdrop with floating pedestals",
    "price": 125000,
    "originalPrice": 145000,
    "rating": 5,
    "reviewCount": 22,
    "image": "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "320 cm",
      "depth": "12 cm",
      "height": "130 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Natural Oak",
      "Smoked Oak",
      "Teak"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Transforms your master bedroom into a 7-star resort suite. Extends across the entire bed wall with integrated warm LED backlighting and floating shelves.",
    "details": [
      "Custom site dimensions measured with laser precision",
      "Pre-wired with dual bedside 2-way light switches & USB-C ports",
      "Absorbs flutter echoes for quiet restorative sleep"
    ],
    "craftsmanshipNotes": "Built in modular interlocking sections for clean in-room assembly."
  },
  {
    "id": "crf-31",
    "slug": "monarch-curved-linen-bed",
    "name": "The Monarch Curved Headboard Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Gently curved low-profile bedframe in oatmeal woven linen",
    "price": 88000,
    "originalPrice": 104000,
    "rating": 4.8,
    "reviewCount": 19,
    "image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "190 cm",
      "depth": "215 cm",
      "height": "105 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Honey Oak"
    ],
    "fabricOptions": [
      "Oatmeal Pure Linen",
      "Belgian Ivory Bouclé"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "description": "Clean minimalist elegance inspired by coastal villas. Features soft tailored linen upholstery resting on turned solid oak feet.",
    "details": [
      "Solid timber posture slat foundation",
      "Removable and washable fabric slipcover options",
      "15-Year structural frame guarantee"
    ],
    "craftsmanshipNotes": "Precision joinery ensures squeak-free sleep across decades."
  },
  {
    "id": "crf-32",
    "slug": "chomu-carved-teak-wardrobe-armoire",
    "name": "The Chomu 2-Door Freestanding Teak Armoire",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Hand-chiseled geometric paneling with internal hanging & drawers",
    "price": 78000,
    "originalPrice": 92000,
    "rating": 4.9,
    "reviewCount": 26,
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "110 cm",
      "depth": "60 cm",
      "height": "195 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Teak",
      "Chestnut",
      "Distressed Black"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "A traditional Rajasthani armoire reimagined with contemporary restraint. Two full-length solid timber doors open to reveal hanging rails and shelves.",
    "details": [
      "Solid brass forged lock and key hardware",
      "Full-width solid brass hanging rail",
      "Two lower drawers for linens and blankets"
    ],
    "craftsmanshipNotes": "Mortise-and-tenon doors will never sag or bind with humidity."
  },
  {
    "id": "crf-33",
    "slug": "lumina-bedroom-bench-chest",
    "name": "The Lumina Upholstered Bed-End Storage Bench",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Hydraulic cushioned seat opens to store extra quilts & pillows",
    "price": 31000,
    "originalPrice": 36000,
    "rating": 4.8,
    "reviewCount": 37,
    "image": "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "140 cm",
      "depth": "45 cm",
      "height": "48 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Natural Oak",
      "Clear Coat"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Italian Cognac Leather",
      "Oatmeal Linen"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Anchors the foot of your king bed with functional luxury. The cushioned bouclé seat lid stays open safely with pneumatic soft-close stays.",
    "details": [
      "Soft-close safety lid stay prevents finger pinches",
      "Cedar-lined interior naturally deters moths",
      "High-density foam cushion comfortable for dressing"
    ],
    "craftsmanshipNotes": "Base plinth matches our king bed series perfectly."
  },
  {
    "id": "crf-34",
    "slug": "nordic-minimal-queen-bed",
    "name": "The Nordic Slender Oak Queen Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Airy minimalist spindle headboard in solid white oak",
    "price": 74000,
    "originalPrice": 86000,
    "rating": 4.7,
    "reviewCount": 30,
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "165 cm",
      "depth": "210 cm",
      "height": "98 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Honey Oak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "description": "Features slender turned wood spindles across the headboard that let light flow through smaller bedrooms. Finished in breathable organic matte wax.",
    "details": [
      "Solid timber turned spindles set into arched rail",
      "Central spine support beam with adjustable legs",
      "Compatible with all standard 60x78 in Queen mattresses"
    ],
    "craftsmanshipNotes": "Each spindle is turned on a lathe and hand-sanded to 400 grit."
  },
  {
    "id": "crf-35",
    "slug": "regency-velvet-tufted-headboard-bed",
    "name": "The Regency Hotel Suite Tufted Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Floor-to-ceiling channel-tufted velvet with solid teak plinth",
    "price": 118000,
    "originalPrice": 138000,
    "rating": 5,
    "reviewCount": 15,
    "image": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "200 cm",
      "depth": "218 cm",
      "height": "140 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Ebony",
      "Teak"
    ],
    "fabricOptions": [
      "Forest Olive Velvet",
      "Belgian Ivory Bouclé",
      "Champagne Silk Velvet"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Commanding luxury suite bed crafted for boutique hotels and executive penthouses. Vertical channeled velvet backrest paired with rich walnut trim.",
    "details": [
      "Heavy contract-grade stain-resistant velvet",
      "High-resilience foam core maintains plush fullness",
      "Solid timber surround with recessed mattress well"
    ],
    "craftsmanshipNotes": "Delivered as part of our heritage resort commissions in Rajasthan."
  },
  {
    "id": "crf-36",
    "slug": "zenith-floating-drawer-bed",
    "name": "The Zenith Under-Bed 4-Drawer Platform Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Four massive concealed rolling drawers on smooth castor wheels",
    "price": 98000,
    "originalPrice": 115000,
    "rating": 4.9,
    "reviewCount": 41,
    "image": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "195 cm",
      "depth": "215 cm",
      "height": "100 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Walnut",
      "Dark Oak",
      "Espresso"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "An elegant alternative to hydraulic lift beds. Four independent solid wood drawers glide out seamlessly on concealed rubber wheels.",
    "details": [
      "Four deep drawers (two on each side)",
      "Zero-clearance handles ensure smooth legroom",
      "Independent drawer boxes don’t disturb mattress when opened"
    ],
    "craftsmanshipNotes": "Drawer interiors crafted from fragrant solid cedarwood."
  },
  {
    "id": "crf-37",
    "slug": "haveli-cane-mesh-nightstand",
    "name": "The Haveli Cane Weave Bedside Cabinet",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Traditional octagonal rattan cane door with interior shelf",
    "price": 22500,
    "originalPrice": 26000,
    "rating": 4.8,
    "reviewCount": 29,
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "48 cm",
      "depth": "42 cm",
      "height": "58 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Rosewood",
      "Natural Oak"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "description": "Breathable rattan cane door allows air circulation inside while shielding bedtime essentials from view. Accented with turned brass knobs.",
    "details": [
      "Natural unbleached cane mesh",
      "Solid teak frame and top",
      "Soft-close hidden magnetic catch"
    ],
    "craftsmanshipNotes": "Cane hand-woven by Jaipur artisan guilds."
  },
  {
    "id": "crf-38",
    "slug": "solace-blanket-ladder-rack",
    "name": "The Solace Solid Wood Quilt & Towel Ladder",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Angled leaning ladder for throws, quilts, and morning robes",
    "price": 14500,
    "originalPrice": 17500,
    "rating": 4.7,
    "reviewCount": 33,
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "52 cm",
      "depth": "8 cm",
      "height": "175 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Walnut",
      "Smoked Oak"
    ],
    "leadTime": "1-2 Weeks Bespoke Build",
    "description": "Effortless bedroom organization. Leans casually against any wall without drilling. Five smooth rungs keep quilts and shawls wrinkle-free.",
    "details": [
      "Non-slip rubber feet and top bumper pads protect walls and floors",
      "Beveled rungs gentle on delicate cashmere and wool",
      "Solid hardwood construction holds heavy winter quilts"
    ],
    "craftsmanshipNotes": "Mortised rungs glued under hydraulic pressure."
  },
  {
    "id": "crf-39",
    "slug": "chomu-luggage-bench-credenza",
    "name": "The Chomu Lowline Bedroom Credenza Bench",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Multi-purpose luggage bench and 3-drawer console",
    "price": 46000,
    "originalPrice": 54000,
    "rating": 4.9,
    "reviewCount": 17,
    "image": "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "160 cm",
      "depth": "45 cm",
      "height": "50 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Natural Oak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Originally commissioned for 5-star hotel suites in Jaipur. Serves as a sturdy luggage drop surface, dressing seat, and 3-drawer bureau.",
    "details": [
      "Top surface tested to support 200 kg seating weight",
      "Three push-to-open soft closing drawers",
      "Protective solid brass bumper corner trims"
    ],
    "craftsmanshipNotes": "Built to hotel contract commercial grade specifications."
  },
  {
    "id": "crf-40",
    "slug": "amber-monolith-floating-bed",
    "name": "The Amber Teak Monolith Floating Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom",
    "tagline": "Single tree-slab headboard with live bark edge & integrated shelves",
    "price": 135000,
    "originalPrice": 158000,
    "rating": 5,
    "reviewCount": 24,
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "210 cm",
      "depth": "220 cm",
      "height": "115 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Natural Oak",
      "Honey Oak",
      "Walnut"
    ],
    "leadTime": "4-5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Showcases a dramatic 3-inch thick continuous live-edge timber headboard slab cut from an aged tree trunk. An unrepeatable masterpiece of nature.",
    "details": [
      "Single continuous live-edge slab headboard with natural grain voids",
      "Butterfly spline stabilization in polished solid brass",
      "Two cantilevered nightstand slabs incorporated into headboard"
    ],
    "craftsmanshipNotes": "Every piece is completely one-of-a-kind and serialized."
  },
  {
    "id": "crf-41",
    "slug": "the-aethel-live-edge-dining-table",
    "name": "The Aethel Live-Edge Teak Dining Slab (8-Seater)",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Single timber trunk slab with natural undulating contours",
    "price": 94000,
    "originalPrice": 112000,
    "rating": 5,
    "reviewCount": 58,
    "image": "/images/category-dining.jpg",
    "galleryImages": [
      "/images/category-dining.jpg",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "240 cm",
      "depth": "100 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Natural Oak",
      "Honey Oak",
      "Walnut"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isSignature": true,
    "isBestSeller": true,
    "description": "Milled from a single magnificent timber trunk. Natural live-edge contours preserved under matte food-safe plant oils with recessed butterfly keys.",
    "details": [
      "75mm thick solid timber top",
      "Hand-inlaid brass butterfly splines stabilize natural expansion",
      "Choice of sculptural timber plinth or matte architectural steel base"
    ],
    "craftsmanshipNotes": "Seasoned in our Jaipur solar kiln to an exact 8-10% equilibrium moisture content."
  },
  {
    "id": "crf-42",
    "slug": "nordic-sculptural-dining-chair",
    "name": "The Nordic Sculpted Dining Chair (Pair)",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Steam-bent solid wood backrest with seamless ergonomic curvature",
    "price": 24500,
    "originalPrice": 29000,
    "rating": 4.9,
    "reviewCount": 46,
    "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "54 cm",
      "depth": "56 cm",
      "height": "78 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Walnut",
      "Smoked Oak"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Italian Cognac Leather",
      "Oatmeal Linen"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Engineered for long, relaxed dinner conversations. The continuous steam-bent top rail cradles the lumbar spine without pressure points.",
    "details": [
      "Steam-bent continuous solid hardwood backrest",
      "High-density foam upholstered seat in stain-resistant fabrics",
      "Concealed felt floor protectors"
    ],
    "craftsmanshipNotes": "Hand-sanded to 400 grit before receiving three coats of hand-rubbed wax."
  },
  {
    "id": "crf-43",
    "slug": "solaria-round-pedestal-dining-table",
    "name": "The Solaria Round Pedestal Dining Table (6-Seater)",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Sculptural fluted timber pedestal with zero leg obstruction",
    "price": 76000,
    "originalPrice": 89000,
    "rating": 4.9,
    "reviewCount": 39,
    "image": "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "140 cm (Diameter)",
      "depth": "140 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Natural Oak",
      "Smoked Oak",
      "Teak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Circular dining eliminates awkward corner seating. Supported by a fluted conical solid wood pedestal weighted for supreme stability.",
    "details": [
      "140cm round table comfortably seats 6 diners",
      "Central weighted pedestal ensures 360-degree leg freedom",
      "Beveled reverse-knife edge profile"
    ],
    "craftsmanshipNotes": "Top slab constructed with radial bookmatched solid timber leaves."
  },
  {
    "id": "crf-44",
    "slug": "grand-teak-10-seater-banquet-table",
    "name": "The Grand Teak 10-Seater Banquet Table",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Monumental 3-meter solid Burma teak banquet dining table",
    "price": 138000,
    "originalPrice": 165000,
    "rating": 5,
    "reviewCount": 27,
    "image": "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "300 cm",
      "depth": "110 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Rosewood",
      "Walnut",
      "Honey Oak"
    ],
    "leadTime": "4-5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Built to host grand family celebrations. Massive 80mm solid Burma teak top anchored on dual architectural trestle timber bases.",
    "details": [
      "Seats 10 to 12 diners comfortably",
      "Traditional keyed mortise-and-tenon trestle stretcher",
      "Scratch and wine-spill resistant commercial top coat"
    ],
    "craftsmanshipNotes": "Hand-crafted at our Jaipur atelier from seasoned old-growth teak timbers."
  },
  {
    "id": "crf-45",
    "slug": "fluted-teak-bar-cabinet",
    "name": "The Maharaja Fluted Teak Bar Cabinet",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Concealed bar with mirrored interior, wine racks & stemware holders",
    "price": 68000,
    "originalPrice": 82000,
    "rating": 4.9,
    "reviewCount": 33,
    "image": "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "105 cm",
      "depth": "50 cm",
      "height": "140 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Teak",
      "Ebony"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "An entertainer’s dream. Bi-fold fluted doors reveal an illuminated antiqued mirror interior, solid brass stemware racks, and 18-bottle wine slots.",
    "details": [
      "Holds up to 18 wine bottles and 24 stemware glasses",
      "Motion-sensor 2700K warm LED lighting illuminates upon opening",
      "Pull-out solid stone prep shelf for cocktail mixing"
    ],
    "craftsmanshipNotes": "Solid brass door hardware forged exclusively for Craftora."
  },
  {
    "id": "crf-46",
    "slug": "haveli-rattan-dining-chair",
    "name": "The Haveli Cane Back Dining Chair (Set of 2)",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Heritage octagonal cane backrest with upholstered seat cushion",
    "price": 26000,
    "originalPrice": 31000,
    "rating": 4.8,
    "reviewCount": 40,
    "image": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "52 cm",
      "depth": "55 cm",
      "height": "84 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Natural Oak",
      "Rosewood",
      "Chestnut"
    ],
    "fabricOptions": [
      "Oatmeal Pure Linen",
      "Belgian Ivory Bouclé",
      "Cognac Leather"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Combines breathable natural rattan cane with solid seasoned teak. Perfect for airy warm climates and heritage dining aesthetics.",
    "details": [
      "Genuine unbleached natural rattan cane backrest",
      "Curved frame relieves thigh pressure",
      "Removable and dry-cleanable cushion covers"
    ],
    "craftsmanshipNotes": "Cane woven by hand with double-wrap reinforced border."
  },
  {
    "id": "crf-47",
    "slug": "chomu-live-edge-dining-bench",
    "name": "The Chomu Live-Edge Dining Bench",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Matching solid timber bench with organic bark edge & butterfly keys",
    "price": 36000,
    "originalPrice": 42000,
    "rating": 4.9,
    "reviewCount": 51,
    "image": "https://images.unsplash.com/photo-1615876234886-fd9a39fa95f9?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615876234886-fd9a39fa95f9?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "180 cm",
      "depth": "42 cm",
      "height": "46 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Natural Oak",
      "Walnut",
      "Honey Oak"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Designed to slide neatly underneath our Aethel dining tables when not in use. Seats 3 to 4 adults comfortably during casual gatherings.",
    "details": [
      "60mm thick solid live-edge timber plank",
      "Chamfered seating edges for ergonomic thigh comfort",
      "Reinforced underneath with anti-warp steel C-channels"
    ],
    "craftsmanshipNotes": "C-channels slotted to allow natural seasonal timber movement without cracking."
  },
  {
    "id": "crf-48",
    "slug": "kallisto-boucle-dining-carver",
    "name": "The Kallisto Armrest Dining Carver Chair",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Captain’s head-of-table dining armchair in ivory bouclé",
    "price": 21500,
    "originalPrice": 25000,
    "rating": 4.9,
    "reviewCount": 28,
    "image": "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "60 cm",
      "depth": "62 cm",
      "height": "82 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Natural Oak",
      "Clear Coat"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Forest Olive Velvet",
      "Italian Cognac Leather"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Commands the head of your dining table. Features tailored bouclé armrests and a gently curved back that invites dessert courses to linger.",
    "details": [
      "Arm height specifically dimensioned to slide beneath standard table aprons",
      "High-traffic rub certified bouclé",
      "Turned solid walnut legs with brass leveling glides"
    ],
    "craftsmanshipNotes": "Internal birch hardwood frame with pocket sprung seat core."
  },
  {
    "id": "crf-49",
    "slug": "verona-minimalist-walnut-dining-table",
    "name": "The Verona Architectural Walnut Dining Table (6-Seater)",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Sleek knife-edge perimeter with sculpted inward-canted legs",
    "price": 82000,
    "originalPrice": 96000,
    "rating": 4.8,
    "reviewCount": 32,
    "image": "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "200 cm",
      "depth": "95 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Dark Oak",
      "Smoked Oak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "description": "Clean mid-century modernist proportions. Inward-canted tapered legs give the dining table a remarkably light, airborne visual presence.",
    "details": [
      "Reverse knife-edge border profile",
      "Seats 6 to 8 diners comfortably",
      "Finished with non-yellowing matte polyurethane and natural wax"
    ],
    "craftsmanshipNotes": "Mortised corner brackets anchored with machine-threaded steel bolts."
  },
  {
    "id": "crf-50",
    "slug": "amber-fluted-dining-server-sideboard",
    "name": "The Amber Fluted Dining Room Server",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Lowline buffet server with Italian marble hot-dish top",
    "price": 78000,
    "originalPrice": 92000,
    "rating": 5,
    "reviewCount": 23,
    "image": "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "180 cm",
      "depth": "48 cm",
      "height": "82 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Smoked Oak",
      "Walnut",
      "Teak",
      "Ebony"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Topped with heat-resistant Italian marble, making it the perfect buffet staging server for warm curries, hot casseroles, and dinner service.",
    "details": [
      "Italian Carrara or Nero Marquina marble top",
      "Three felt-lined cutlery drawers with solid brass handles",
      "Two lower cabinets for fine china and soup tureens"
    ],
    "craftsmanshipNotes": "Marble top isolated with silicone dampeners to prevent resonance."
  },
  {
    "id": "crf-51",
    "slug": "tatiyawas-farmhouse-teak-table",
    "name": "The Tatiyawas Farmhouse Trestle Table",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Heavy timber farmhouse table with traditional wedge through-tenons",
    "price": 89000,
    "originalPrice": 105000,
    "rating": 4.9,
    "reviewCount": 19,
    "image": "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "220 cm",
      "depth": "100 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Distressed Black",
      "English Oak",
      "Rosewood"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Rustic yet impeccably refined. Shows exposed wooden through-tenon keys wedged into heavy trestle legs, just like 19th-century workshop worktables.",
    "details": [
      "Heavy 65mm thick planked top with breadboard ends",
      "Exposed removable wedge tenons for easy relocation",
      "Hand-distressed surface patinated with natural beeswax"
    ],
    "craftsmanshipNotes": "Breadboard ends allow cross-grain expansion with slotted dowels."
  },
  {
    "id": "crf-52",
    "slug": "solace-bentwood-dining-chair",
    "name": "The Solace Curved Spindle Dining Chair",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Windsor style reinvented in solid American walnut",
    "price": 19500,
    "originalPrice": 23000,
    "rating": 4.8,
    "reviewCount": 35,
    "image": "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "50 cm",
      "depth": "52 cm",
      "height": "80 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Natural Oak",
      "Clear Coat",
      "Ebony"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "description": "Graceful tapered spindles connect a steam-bent continuous bow back to a saddle-carved solid timber seat that requires no cushion for comfort.",
    "details": [
      "Hand-saddled scoop seat cradles sit bones",
      "Steam-bent solid hardwood bow back",
      "Tested to withstand 200 kg drop impact test"
    ],
    "craftsmanshipNotes": "Spindles are through-wedged into the seat pan with contrasting oak pegs."
  },
  {
    "id": "crf-53",
    "slug": "rajputana-carved-dining-chair",
    "name": "The Rajputana Jharokha Carved Dining Chair",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Intricate floral lattice backrest hand-carved in solid Burma teak",
    "price": 28000,
    "originalPrice": 33000,
    "rating": 5,
    "reviewCount": 22,
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "50 cm",
      "depth": "54 cm",
      "height": "96 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Teak",
      "Mahogany",
      "Jacobean Oak"
    ],
    "fabricOptions": [
      "Italian Cognac Leather",
      "Forest Olive Velvet",
      "Silk Damask"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "An ode to the artisan carving traditions of Jaipur and Shekhawati. The pierced jali backrest allows air to pass freely while creating breathtaking shadow patterns.",
    "details": [
      "Intricate hand-carved jali openwork backrest",
      "Padded seat upholstered in rich velvet or leather",
      "Tenoned leg stretchers for generational durability"
    ],
    "craftsmanshipNotes": "Each chair back takes 16 hours of artisan hand-chiseling."
  },
  {
    "id": "crf-54",
    "slug": "elysian-marble-oval-dining-table",
    "name": "The Elysian Italian Marble & Walnut Oval Table",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Sculptural oval Carrara marble top with double timber pedestal",
    "price": 115000,
    "originalPrice": 135000,
    "rating": 4.9,
    "reviewCount": 18,
    "image": "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "220 cm",
      "depth": "110 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Natural Oak"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Soft oval form encourages fluid room circulation. Pairs a 20mm polished Italian Carrara marble slab with dual sculpted solid walnut bases.",
    "details": [
      "Genuine Italian Carrara marble with bullnose edge",
      "Dual fluted solid walnut pedestals",
      "Sub-top timber substrate absorbs vibration"
    ],
    "craftsmanshipNotes": "Marble treated with fluoropolymer anti-etch sealant."
  },
  {
    "id": "crf-55",
    "slug": "chomu-counter-height-bar-stools",
    "name": "The Chomu Fluted Bar Stool with Backrest (Set of 2)",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Swivel bar stools with solid brass footrest ring for kitchen islands",
    "price": 32000,
    "originalPrice": 38000,
    "rating": 4.8,
    "reviewCount": 31,
    "image": "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "48 cm",
      "depth": "48 cm",
      "height": "95 cm (Seat 65 cm)",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Walnut",
      "Black"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Italian Cognac Leather"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Designed for luxury breakfast islands and home bar counters. Smooth 360-degree swivel with a heavy solid brass circular footrest rail.",
    "details": [
      "Ideal 65cm seat height for standard 36-inch kitchen counters",
      "Solid brass footrest ring prevents scuffs",
      "Comfortable curved lumbar backrest"
    ],
    "craftsmanshipNotes": "Heavy-duty steel ball-bearing swivel mechanism."
  },
  {
    "id": "crf-56",
    "slug": "amber-glass-display-china-cabinet",
    "name": "The Amber Glass Front China & Crockery Cabinet",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Fluted glass double doors with interior display spot lighting",
    "price": 86000,
    "originalPrice": 99000,
    "rating": 5,
    "reviewCount": 16,
    "image": "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "120 cm",
      "depth": "45 cm",
      "height": "190 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Smoked Oak",
      "Rosewood"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Showcase heirloom porcelain, crystal decanters, and silver dinnerware. Fluted glass doors obscure clutter while reflecting warm interior LEDs.",
    "details": [
      "Tempered fluted glass door inserts",
      "Adjustable 25mm thick solid wood shelves",
      "Warm 2700K concealed LED illumination on touch dimmer"
    ],
    "craftsmanshipNotes": "Framed in solid Burma teak with mortise-and-tenon stile and rail doors."
  },
  {
    "id": "crf-57",
    "slug": "marina-round-bistro-table",
    "name": "The Marina Compact Round Bistro Table (4-Seater)",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Space-saving 100cm round breakfast table in solid white oak",
    "price": 48000,
    "originalPrice": 56000,
    "rating": 4.8,
    "reviewCount": 29,
    "image": "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "100 cm (Diameter)",
      "depth": "100 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Natural Oak",
      "Honey Oak"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "description": "Perfect for cozy kitchen nooks, balconies, and morning breakfast spaces. Four tapered legs splay outwards to maximize leg clearance.",
    "details": [
      "Seats 4 diners comfortably",
      "Beveled solid timber tabletop",
      "Compact footprint ideal for modern apartments"
    ],
    "craftsmanshipNotes": "Finished with organic food-safe hardwax oils."
  },
  {
    "id": "crf-58",
    "slug": "verona-extendable-teak-dining-table",
    "name": "The Verona Butterfly Extendable Dining Table (6-10 Seater)",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Concealed butterfly leaf extends table from 180cm to 260cm in seconds",
    "price": 112000,
    "originalPrice": 132000,
    "rating": 4.9,
    "reviewCount": 38,
    "image": "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "180 cm (Extends to 260 cm)",
      "depth": "95 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Walnut",
      "Natural Oak"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Everyday elegance meets party practicality. The internal butterfly leaf folds out seamlessly with smooth German gear tracks by one person.",
    "details": [
      "One-person smooth pull-and-flip extension mechanism",
      "Leaf stores invisibly inside table apron when closed",
      "Continuous grain alignment across extension joints"
    ],
    "craftsmanshipNotes": "German cable-driven synchronized extension slides."
  },
  {
    "id": "crf-59",
    "slug": "solace-cane-credenza-buffet",
    "name": "The Solace Cane Front Dining Buffet",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "4-door sideboard with natural rattan panels & brass pulls",
    "price": 74000,
    "originalPrice": 86000,
    "rating": 4.8,
    "reviewCount": 25,
    "image": "https://images.unsplash.com/photo-1580481077195-c22ae2499d08?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1580481077195-c22ae2499d08?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "190 cm",
      "depth": "46 cm",
      "height": "78 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Teak",
      "Chestnut"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "description": "Airy bohemian elegance crafted in solid wood. Four door panels wrapped in authentic natural cane provide ample storage for tablecloths and plates.",
    "details": [
      "Four soft-close doors with push-pin magnetic catches",
      "Solid wood adjustable internal shelves",
      "Concealed levelers adjust to floor variations"
    ],
    "craftsmanshipNotes": "Cane is backed with linen scrim for privacy."
  },
  {
    "id": "crf-60",
    "slug": "amber-monolith-teak-bar-cart",
    "name": "The Amber Mobile Teak Bar Cart & Trolley",
    "category": "dining",
    "categoryLabel": "Dining",
    "tagline": "Two-tier rolling drinks trolley with brass bottle guardrails",
    "price": 29500,
    "originalPrice": 35000,
    "rating": 5,
    "reviewCount": 31,
    "image": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "80 cm",
      "depth": "45 cm",
      "height": "82 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Rosewood",
      "Ebony"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "isNewArrival": true,
    "description": "Rolls smoothly from kitchen to dining terrace. Two solid timber tray tiers surrounded by brushed brass railings to prevent bottle tip-overs.",
    "details": [
      "Large solid wood wheels with smooth rubber treads",
      "Holds 12 spirit bottles and full cocktail shaker set",
      "Integrated stemware racks beneath top tier"
    ],
    "craftsmanshipNotes": "Brass guardrails turned and polished by hand."
  },
  {
    "id": "crf-61",
    "slug": "elysian-walk-in-dressing-suite",
    "name": "The Elysian Architectural Walk-In Dressing Suite",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Bespoke walk-in wardrobe with smoked glass, solid walnut flutes & 2700K LEDs",
    "price": 245000,
    "originalPrice": 285000,
    "rating": 5,
    "reviewCount": 29,
    "image": "/images/category-wardrobes.jpg",
    "galleryImages": [
      "/images/category-wardrobes.jpg",
      "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "360 cm",
      "depth": "240 cm",
      "height": "270 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Natural Oak",
      "Ebony"
    ],
    "leadTime": "5-6 Weeks Bespoke Build",
    "isSignature": true,
    "isBestSeller": true,
    "description": "A sanctuary for attire. Designed to your room’s exact floor-to-ceiling volume with smoked tempered glass doors, backlit vertical walnut fluting, and velvet drawers.",
    "details": [
      "Smoked safety glass sliding or hinged doors",
      "Recessed 2700K perimeter LED channels with automatic proximity sensors",
      "Custom accessory island with leather watch winders & jewelry trays"
    ],
    "craftsmanshipNotes": "Manufactured and pre-assembled in our Jaipur factory before white-glove site installation."
  },
  {
    "id": "crf-62",
    "slug": "chomu-4-door-solid-teak-sliding-almirah",
    "name": "The Chomu 4-Door Solid Teak Sliding Almirah",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Heavy-duty German smooth sliding track system with solid Burma teak panels",
    "price": 135000,
    "originalPrice": 158000,
    "rating": 4.9,
    "reviewCount": 42,
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "240 cm",
      "depth": "65 cm",
      "height": "220 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Rosewood",
      "Walnut",
      "Chestnut"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Built for lifetimes of daily use. Two exterior doors slide on whisper-quiet concealed German bottom rollers, requiring zero floor space when open.",
    "details": [
      "Heavy-duty 100 kg load rated bottom roller tracks",
      "Built-in double hanging rods, lockable security drawer & saree stacks",
      "100% solid timber construction with anti-warp bracing"
    ],
    "craftsmanshipNotes": "Sliding door stiles are tension-rod braced against seasonal humidity changes."
  },
  {
    "id": "crf-63",
    "slug": "amber-fluted-smoked-glass-wardrobe",
    "name": "The Amber Smoked Glass 3-Door Wardrobe",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Slim black aluminum frames with smoked bronze glass & warm internal lighting",
    "price": 118000,
    "originalPrice": 138000,
    "rating": 4.9,
    "reviewCount": 36,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "180 cm",
      "depth": "62 cm",
      "height": "230 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Smoked Oak",
      "Black",
      "Walnut"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Brings modern European runway boutique elegance into your home. The smoked bronze glass gently reveals illuminated apparel when lit.",
    "details": [
      "Bronze tinted shatterproof tempered safety glass",
      "Concealed 180-degree hinges with soft-close dampers",
      "Full-height sensor-activated warm LED light bars"
    ],
    "craftsmanshipNotes": "Internal carcasses built from seasoned solid hardwood boards."
  },
  {
    "id": "crf-64",
    "slug": "rajputana-hand-carved-heritage-almirah",
    "name": "The Rajputana 3-Door Carved Heritage Almirah",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Hand-carved floral cornices and traditional Rajasthani brass latchwork",
    "price": 98000,
    "originalPrice": 115000,
    "rating": 5,
    "reviewCount": 28,
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "160 cm",
      "depth": "60 cm",
      "height": "210 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Teak",
      "Mahogany",
      "Jacobean Oak"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "A genuine handcrafted royal heirloom. Hand-carved floral panels and traditional brass latches crafted by generational artisans in Jaipur.",
    "details": [
      "Three hinged doors with authentic iron & brass drop latches",
      "Internal lockable cash & jewellery locker",
      "Includes full-width coat hanging rail and 6 shelving tiers"
    ],
    "craftsmanshipNotes": "Preserves traditional 18th-century Rajasthani joinery principles."
  },
  {
    "id": "crf-65",
    "slug": "nordic-light-oak-sliding-wardrobe",
    "name": "The Nordic 2-Door Light Oak Wardrobe",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Clean Scandinavian sliding doors with recessed timber finger pulls",
    "price": 89000,
    "originalPrice": 104000,
    "rating": 4.8,
    "reviewCount": 31,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "160 cm",
      "depth": "62 cm",
      "height": "210 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Whitewash",
      "Honey Oak"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "description": "Brightens smaller bedrooms with warm natural European white oak tones. Full-height sliding doors glide effortlessly on precision tracks.",
    "details": [
      "Soft-close bumpers on both left and right slides",
      "Adjustable modular internal shelf heights",
      "Zero chemical emissions — finished with natural wax"
    ],
    "craftsmanshipNotes": "Solid oak stiles with expansion joint panel floating."
  },
  {
    "id": "crf-66",
    "slug": "valen-dressing-island-cabinet",
    "name": "The Valen Central Walk-In Dressing Island",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Double-sided island with glass jewelry showcase & velvet drawers",
    "price": 72000,
    "originalPrice": 85000,
    "rating": 5,
    "reviewCount": 19,
    "image": "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "140 cm",
      "depth": "80 cm",
      "height": "90 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Natural Oak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "The centerpiece of an elite dressing room. Features a crystal glass top window showing your organized watches, sunglasses, and jewelry below.",
    "details": [
      "Tempered glass top window over partitioned velvet drawer",
      "12 soft-close drawers across both front and rear sides",
      "Integrated electrical outlets for hair styling tools"
    ],
    "craftsmanshipNotes": "Internal dividers crafted from aromatic solid cedar."
  },
  {
    "id": "crf-67",
    "slug": "chomu-modular-built-in-wardrobe-wall",
    "name": "The Chomu Floor-to-Ceiling Built-In Modular Wardrobe",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Custom made-to-measure wardrobe fitted flush with your room ceiling",
    "price": 185000,
    "originalPrice": 215000,
    "rating": 5,
    "reviewCount": 47,
    "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "300 cm",
      "depth": "65 cm",
      "height": "280 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Natural Oak",
      "Espresso"
    ],
    "leadTime": "5 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Maximizes every millimeter of ceiling height with integrated upper loft cabinets for suitcases, long hanging coats, and pull-out shoe racks.",
    "details": [
      "Measured on-site in Jaipur with digital laser scanners",
      "Loft storage cabinets equipped with hydraulic lift-up hinges",
      "Integrated pull-down wardrobe lifter bars for high hanging items"
    ],
    "craftsmanshipNotes": "Precision fitted by our master carpenters to match uneven ceiling contours."
  },
  {
    "id": "crf-68",
    "slug": "haveli-cane-inset-4-door-almirah",
    "name": "The Haveli 4-Door Cane Inset Wardrobe",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Natural rattan cane woven door panels in solid teak framework",
    "price": 115000,
    "originalPrice": 132000,
    "rating": 4.8,
    "reviewCount": 25,
    "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "200 cm",
      "depth": "62 cm",
      "height": "215 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Rosewood",
      "Natural Oak",
      "Chestnut"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Allows air circulation naturally through woven cane panels, preventing wardrobe mustiness and dampness during monsoon seasons in India.",
    "details": [
      "Four hinged doors with genuine unbleached rattan cane panels",
      "Full solid timber interior framework",
      "Four internal drawers with turned wood knobs"
    ],
    "craftsmanshipNotes": "Cane woven by traditional artisan guilds in Rajasthan."
  },
  {
    "id": "crf-69",
    "slug": "amber-shoe-accessory-organizer-wardrobe",
    "name": "The Amber Rotating Shoe & Bag Carousel Armoire",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Holds 40 pairs of shoes and 12 handbags on rotating carousel shelves",
    "price": 58000,
    "originalPrice": 68000,
    "rating": 4.9,
    "reviewCount": 38,
    "image": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "90 cm",
      "depth": "55 cm",
      "height": "200 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Natural Oak",
      "Clear Coat",
      "Smoked Oak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isNewArrival": true,
    "description": "Never hunt for your favorite pair again. A compact tall armoire featuring a full-height 360-degree rotating rack that holds up to 40 pairs of shoes.",
    "details": [
      "360-degree smooth rotating internal column",
      "Angled non-slip shelves hold heels, sneakers, and boots",
      "Full-length exterior mirror on front door"
    ],
    "craftsmanshipNotes": "German heavy-duty steel turntable mechanism tested to 150 kg."
  },
  {
    "id": "crf-70",
    "slug": "solace-fluted-timber-wardrobe-2-door",
    "name": "The Solace 2-Door Fluted Wardrobe",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Continuous vertical fluting with brushed solid brass handles",
    "price": 68000,
    "originalPrice": 79000,
    "rating": 4.8,
    "reviewCount": 32,
    "image": "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "105 cm",
      "depth": "60 cm",
      "height": "205 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Natural Oak",
      "Ebony"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "description": "Sleek architectural statement for compact bedrooms and guest suites. Vertical fluted timber doors paired with warm brass bar pulls.",
    "details": [
      "Solid timber vertical fluted doors",
      "Full extension soft-close lower drawer",
      "Includes hanging rail and three adjustable shelves"
    ],
    "craftsmanshipNotes": "Precision milled in kiln-dried hardwood."
  },
  {
    "id": "crf-71",
    "slug": "regency-mirrored-sliding-wardrobe",
    "name": "The Regency Full-Length Mirror Sliding Wardrobe",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Two massive bronze mirror sliding doors that expand room visual depth",
    "price": 112000,
    "originalPrice": 129000,
    "rating": 4.9,
    "reviewCount": 27,
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "180 cm",
      "depth": "65 cm",
      "height": "225 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Espresso"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Doubles the visual volume of your bedroom while eliminating the need for a separate dressing mirror. Smooth gliding bronze-tinted safety mirrors.",
    "details": [
      "Saint-Gobain bronze safety-backed distortion-free mirrors",
      "Whisper-quiet German ball-bearing top and bottom tracks",
      "Built-in double hanging rods and modular drawer stack"
    ],
    "craftsmanshipNotes": "Mirror glass mounted with vibration-damping structural adhesive."
  },
  {
    "id": "crf-72",
    "slug": "zen-minimalist-open-wardrobe-rack",
    "name": "The Zen Open Concept Teak Wardrobe Valet",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Boutique open clothes rail with bottom solid timber drawers",
    "price": 38000,
    "originalPrice": 45000,
    "rating": 4.7,
    "reviewCount": 39,
    "image": "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "120 cm",
      "depth": "50 cm",
      "height": "185 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Teak",
      "Smoked Oak"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "isNewArrival": true,
    "description": "For lovers of curated capsule wardrobes. Displays your favorite outfits on a solid brass rail above two spacious dovetail drawers.",
    "details": [
      "Heavy solid brass hanging rail",
      "Two smooth soft-closing cedar-lined drawers",
      "Slotted bottom shelf for shoes and leather bags"
    ],
    "craftsmanshipNotes": "Clean Danish mortise-and-tenon post construction."
  },
  {
    "id": "crf-73",
    "slug": "chomu-corner-walk-in-wardrobe-unit",
    "name": "The Chomu L-Shape Corner Wardrobe System",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Custom 90-degree corner unit maximizing dead bedroom angles",
    "price": 155000,
    "originalPrice": 178000,
    "rating": 5,
    "reviewCount": 22,
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "240 x 200 cm (L-shape)",
      "depth": "62 cm",
      "height": "240 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Walnut",
      "Natural Oak"
    ],
    "leadTime": "4-5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Turns awkward bedroom corners into high-capacity walk-in storage. Features 165-degree wide-opening corner hinges and curved rail systems.",
    "details": [
      "165° wide-opening corner doors eliminate dark blind spots",
      "Curved continuous hanging rail holds 30+ suits and sarees",
      "Motion sensor warm LED strip lighting inside corner alcove"
    ],
    "craftsmanshipNotes": "Custom fabricated to exact site laser dimensions."
  },
  {
    "id": "crf-74",
    "slug": "amber-sliding-glass-walk-through-wardrobe",
    "name": "The Amber Walk-Through Sliding Partition Wardrobe",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Floor-to-ceiling glass sliding doors dividing bedroom and bath",
    "price": 195000,
    "originalPrice": 225000,
    "rating": 4.9,
    "reviewCount": 17,
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "320 cm",
      "depth": "60 cm",
      "height": "270 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Smoked Oak",
      "Black",
      "Walnut"
    ],
    "leadTime": "5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Functions as both a wardrobe suite and an architectural room divider between the master bedroom and ensuite bathroom.",
    "details": [
      "Top-hung Italian roller hardware — zero bottom floor tracks to trip on",
      "Smoked acoustic glass dampens sound from bathroom",
      "Integrated illuminated wardrobe cabinetry on both sides"
    ],
    "craftsmanshipNotes": "Top track anchored into reinforced ceiling joists."
  },
  {
    "id": "crf-75",
    "slug": "tatiyawas-linen-press-wardrobe",
    "name": "The Tatiyawas Solid Wood Linen Press",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Deep slide-out timber trays for bedsheets, quilts & towels",
    "price": 62000,
    "originalPrice": 72000,
    "rating": 4.8,
    "reviewCount": 31,
    "image": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "100 cm",
      "depth": "55 cm",
      "height": "180 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Natural Oak",
      "Teak",
      "Rosewood"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "description": "A traditional household essential perfected. Upper cabinet doors open to five slide-out solid wood trays, over two deep bottom drawers.",
    "details": [
      "Five slide-out trays keep folded linens organized and wrinkle-free",
      "Two deep lower drawers for heavy winter razais (quilts)",
      "Solid wood lockable panel doors"
    ],
    "craftsmanshipNotes": "Trays built with open slats for air circulation."
  },
  {
    "id": "crf-76",
    "slug": "solace-kids-growing-wardrobe",
    "name": "The Solace Adjustable Modular Kids Wardrobe",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Adjustable hanging heights and soft-closing curved doors for child safety",
    "price": 49000,
    "originalPrice": 58000,
    "rating": 4.9,
    "reviewCount": 24,
    "image": "https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "110 cm",
      "depth": "55 cm",
      "height": "185 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Whitewash"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isNewArrival": true,
    "description": "Grows with your child from toddler to teen. Interior hanging rods and shelves can be adjusted to three different heights without tools.",
    "details": [
      "Rounded corner radii prevent child bumps",
      "Non-toxic VOC-free botanical finish certified child-safe",
      "Soft-closing hinges prevent pinched fingers"
    ],
    "craftsmanshipNotes": "Solid timber construction withstands energetic childhood use."
  },
  {
    "id": "crf-77",
    "slug": "rajputana-saree-collector-wardrobe",
    "name": "The Rajputana Silk Saree & Poshak Wardrobe",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Specialized velvet-wrapped slide-out saree bars and muslin storage drawers",
    "price": 88000,
    "originalPrice": 104000,
    "rating": 5,
    "reviewCount": 35,
    "image": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "120 cm",
      "depth": "60 cm",
      "height": "210 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Teak",
      "Mahogany"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Designed specifically for heritage Indian wardrobes. Features 24 velvet-padded slide-out arms that prevent zari creasing and metal tarnishing.",
    "details": [
      "24 velvet-wrapped pull-out saree suspension arms",
      "Untreated aromatic cedarwood interior lining deters silverfish",
      "Deep bottom drawers lined with cotton muslin for wedding lehengas"
    ],
    "craftsmanshipNotes": "Custom designed by Surender Singh Rajora for traditional Rajasthani attire."
  },
  {
    "id": "crf-78",
    "slug": "amber-luggage-trunk-storage-bench",
    "name": "The Amber Solid Wood Blanket & Luggage Chest",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Heavy solid teak storage chest with hand-forged brass strap accents",
    "price": 34000,
    "originalPrice": 40000,
    "rating": 4.8,
    "reviewCount": 42,
    "image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "120 cm",
      "depth": "50 cm",
      "height": "52 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Rosewood",
      "Distressed Black",
      "Walnut"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "A handsome heirloom chest for bedroom corners or bed ends. Holds winter quilts, heavy woolens, or family heirlooms with pneumatic lid safety.",
    "details": [
      "Soft-close safety lid stay prevents heavy timber slam",
      "Authentic solid brass corner straps and side carrying handles",
      "Cedar-scented internal volume"
    ],
    "craftsmanshipNotes": "Dovetailed timber corners on 30mm thick planks."
  },
  {
    "id": "crf-79",
    "slug": "chomu-gentlemans-valet-stand",
    "name": "The Chomu Gentleman’s Wardrobe Valet Stand",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Sculpted suit jacket hanger, trouser bar, shoe shelf & watch tray",
    "price": 16500,
    "originalPrice": 19500,
    "rating": 4.9,
    "reviewCount": 49,
    "image": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "48 cm",
      "depth": "38 cm",
      "height": "115 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Natural Oak",
      "Smoked Oak"
    ],
    "leadTime": "1-2 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Prepares tomorrow’s business suit in impeccable order. Solid timber contoured shoulder hanger keeps jackets tailored without shoulder dimples.",
    "details": [
      "Contoured solid timber shoulder hanger",
      "Non-slip grooved trouser suspension rail",
      "Top dish with brass divider for cufflinks, signet rings, and phone"
    ],
    "craftsmanshipNotes": "Weighted solid wood base prevents tipping under heavy overcoats."
  },
  {
    "id": "crf-80",
    "slug": "monarch-grand-6-door-almirah-suite",
    "name": "The Monarch Grand 6-Door Bedroom Almirah Suite",
    "category": "wardrobes",
    "categoryLabel": "Wardrobes",
    "tagline": "Monumental 3.2m wardrobe suite with his & her dressing wings",
    "price": 215000,
    "originalPrice": 248000,
    "rating": 5,
    "reviewCount": 18,
    "image": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "320 cm",
      "depth": "65 cm",
      "height": "235 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Smoked Oak",
      "Rosewood"
    ],
    "leadTime": "5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "The pinnacle of freestanding bedroom luxury. Divided symmetrically into separate His and Her dressing wings with a central full-length mirror bay.",
    "details": [
      "Six full-height solid wood panel doors",
      "Central dressing bay with illuminated mirror and four deep drawers",
      "Custom interior configuration designed to your attire"
    ],
    "craftsmanshipNotes": "Modular construction allows delivery into high-rise elevators and stairwells."
  },
  {
    "id": "crf-81",
    "slug": "the-lumina-acoustic-tv-console",
    "name": "The Lumina Acoustic Slatted TV Console & Wall Backdrop",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Vertical wood slat sound wall with floating media console & wire-free channels",
    "price": 76000,
    "originalPrice": 89000,
    "rating": 5,
    "reviewCount": 52,
    "image": "/images/category-tv-unit.jpg",
    "galleryImages": [
      "/images/category-tv-unit.jpg",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "220 cm",
      "depth": "42 cm",
      "height": "180 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Natural Oak",
      "Teak"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isSignature": true,
    "isBestSeller": true,
    "description": "Transforms your television screen into an architectural design statement. Vertical acoustic timber slats conceal cables while dampening home theater echoes.",
    "details": [
      "Conceals all HDMI, power, and optical wires invisibly behind slatted wall",
      "Floating media console with acoustic fabric door for soundbars",
      "Indirect 2700K perimeter LED lighting strip included"
    ],
    "craftsmanshipNotes": "Console includes acoustic speaker cloth doors that allow remote IR signals and sound to pass through."
  },
  {
    "id": "crf-82",
    "slug": "chomu-floating-minimalist-tv-shelf",
    "name": "The Chomu Floating Lowline TV Unit (200cm)",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Wall-mounted floating media credenza with continuous waterfall edge",
    "price": 48000,
    "originalPrice": 56000,
    "rating": 4.9,
    "reviewCount": 64,
    "image": "https://images.unsplash.com/photo-1583845112239-97ef1341b271?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583845112239-97ef1341b271?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "200 cm",
      "depth": "38 cm",
      "height": "32 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Natural Oak",
      "Walnut",
      "Smoked Oak"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Clean modern minimalism. Mounts flush to the wall with zero visible brackets, creating an unobstructed floor that makes living rooms feel expansive.",
    "details": [
      "Heavy-duty French cleat wall mounting system rated to 120 kg",
      "Drop-down pneumatic fluted doors with cable grommets",
      "Dedicated internal ventilation slots for Apple TV and gaming consoles"
    ],
    "craftsmanshipNotes": "Continuous waterfall miter grain along top and side edges."
  },
  {
    "id": "crf-83",
    "slug": "amber-marble-backdrop-grand-entertainment-center",
    "name": "The Amber Italian Marble & Teak Entertainment Wall",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Bookmatched Italian marble TV backdrop flanked by solid teak fluting",
    "price": 145000,
    "originalPrice": 172000,
    "rating": 5,
    "reviewCount": 31,
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "280 cm",
      "depth": "45 cm",
      "height": "220 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Smoked Oak",
      "Ebony"
    ],
    "leadTime": "4-5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "For discerning luxury villas and penthouses. Bookmatched Italian marble slab anchors screens up to 85 inches, framed by warm teak acoustic louvers.",
    "details": [
      "Accommodates OLED TV screens from 55 to 85 inches",
      "Italian Carrara or Statuario marble backdrop panel",
      "Lower floating console with four velvet-lined AV drawers"
    ],
    "craftsmanshipNotes": "Marble panel is mounted on sound-isolated marine ply backer."
  },
  {
    "id": "crf-84",
    "slug": "nordic-slat-sliding-door-tv-bench",
    "name": "The Nordic Tambour Sliding Door TV Bench",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Curved tambour timber doors that slide seamlessly around rounded corners",
    "price": 54000,
    "originalPrice": 63000,
    "rating": 4.8,
    "reviewCount": 37,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "180 cm",
      "depth": "44 cm",
      "height": "52 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Honey Oak",
      "Walnut"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Fascinating tambour woodwork. Hundreds of individual wooden slats glued to canvas slide smoothly around 90-degree curved corners into hidden pockets.",
    "details": [
      "Flexible tambour wood sliding doors reveal or conceal components",
      "Solid wood turned legs with brass levelers",
      "Rear cable management conduit keeps cords invisible"
    ],
    "craftsmanshipNotes": "Tambour slats milled with tongue-and-groove micro interlocking profiles."
  },
  {
    "id": "crf-85",
    "slug": "haveli-jali-carved-tv-cabinet",
    "name": "The Haveli Teakwood Jali TV Credenza",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Perforated traditional jali doors allow IR remotes to work while doors are closed",
    "price": 62000,
    "originalPrice": 72000,
    "rating": 4.9,
    "reviewCount": 28,
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "190 cm",
      "depth": "46 cm",
      "height": "60 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Teak",
      "Mahogany",
      "Jacobean Oak"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Traditional craftsmanship meets modern technology. The pierced jali wooden doors allow remote control infrared signals and sound to pass right through.",
    "details": [
      "IR remote signals pass through pierced jali lattice without opening doors",
      "Natural air convection cools warm AV receivers and gaming consoles",
      "Hand-forged brass drop handles"
    ],
    "craftsmanshipNotes": "Jali lattice is hand-chiseled from 25mm solid seasoned Burma teak."
  },
  {
    "id": "crf-86",
    "slug": "solaria-curved-plinth-media-credenza",
    "name": "The Solaria Curved End Lowline Media Credenza",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Sculptural rounded pill ends with four soft-close push drawers",
    "price": 68000,
    "originalPrice": 79000,
    "rating": 4.8,
    "reviewCount": 33,
    "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "210 cm",
      "depth": "44 cm",
      "height": "48 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Natural Oak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isNewArrival": true,
    "description": "Soft organic curves eliminate sharp living room corners. Features a continuous curved perimeter that flows effortlessly into wall-hung artwork.",
    "details": [
      "Organic pill-shaped rounded ends",
      "Four push-to-open soft closing drawers",
      "Concealed central soundbar alcove with acoustic grille"
    ],
    "craftsmanshipNotes": "Curved doors are formed using high-frequency vacuum presses."
  },
  {
    "id": "crf-87",
    "slug": "zenith-monolith-block-tv-bench",
    "name": "The Zenith Low-Profile Monolith TV Bench (220cm)",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Massive solid timber baulk with continuous recessed plinth shadow line",
    "price": 72000,
    "originalPrice": 84000,
    "rating": 5,
    "reviewCount": 25,
    "image": "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "220 cm",
      "depth": "45 cm",
      "height": "40 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Distressed Black",
      "Smoked Oak",
      "Walnut",
      "Teak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Grounds your home theater with sheer architectural substance. The recessed shadow line at the base gives this massive timber block a floating aura.",
    "details": [
      "Solid 40mm thick timber casing on all sides",
      "Two drop-down flap doors and two pull-out media drawers",
      "Heavy load rating supports massive 100-inch televisions and center speakers"
    ],
    "craftsmanshipNotes": "Corners feature internal steel brackets and continuous wood miters."
  },
  {
    "id": "crf-88",
    "slug": "amber-bookcase-surround-tv-library",
    "name": "The Amber Floor-to-Ceiling Media Library Wall",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Full wall library with integrated central TV recess & display niches",
    "price": 165000,
    "originalPrice": 195000,
    "rating": 5,
    "reviewCount": 19,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "320 cm",
      "depth": "40 cm",
      "height": "260 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Natural Oak",
      "Espresso"
    ],
    "leadTime": "5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Brings books, curated artifacts, and cinematic entertainment together into one harmonious architectural library wall tailored to your ceiling height.",
    "details": [
      "Central TV recess fits up to 75-inch screens",
      "16 open display cubbies with integrated warm LED puck lights",
      "Four lower closed storage cabinets conceal games, routers, and albums"
    ],
    "craftsmanshipNotes": "Pre-assembled in our Jaipur workshop in 4 interlocking modular columns."
  },
  {
    "id": "crf-89",
    "slug": "chomu-retro-mid-century-tv-console",
    "name": "The Chomu Mid-Century Tapered Leg TV Console",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "1960s Danish modernism rendered in solid Burma teakwood",
    "price": 44000,
    "originalPrice": 52000,
    "rating": 4.8,
    "reviewCount": 43,
    "image": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "160 cm",
      "depth": "42 cm",
      "height": "56 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Natural Oak",
      "Clear Coat",
      "Rosewood"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Classic tapered splayed legs with brass ferrules. Two sliding bypass doors and central open shelving for set-top boxes and PlayStation consoles.",
    "details": [
      "Sliding bypass doors glide without swinging into walking pathways",
      "Solid turned hardwood legs with brass foot caps",
      "Open center shelf with cable access portal"
    ],
    "craftsmanshipNotes": "Authentic 1960s Danish proportions with solid wood throughout."
  },
  {
    "id": "crf-90",
    "slug": "solace-fluted-corner-tv-unit",
    "name": "The Solace Space-Saving Corner TV Credenza",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Angled rear profile fits snugly into room corners",
    "price": 39000,
    "originalPrice": 46000,
    "rating": 4.7,
    "reviewCount": 29,
    "image": "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "120 cm",
      "depth": "55 cm",
      "height": "54 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Natural Oak",
      "Teak"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "description": "Solves challenging room layouts. The chamfered rear corners tuck flush into 90-degree room angles while maintaining a wide frontal display area.",
    "details": [
      "Angled back footprint saves up to 40% floor space",
      "Supports TVs up to 55 inches",
      "Front fluted doors conceal gaming systems and media accessories"
    ],
    "craftsmanshipNotes": "Precision 45-degree angled rear framework."
  },
  {
    "id": "crf-91",
    "slug": "elysian-brass-inlay-media-console",
    "name": "The Elysian Brass Inlay Luxury Media Console",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Solid American walnut with hand-inlaid geometric brass ribbons",
    "price": 82000,
    "originalPrice": 96000,
    "rating": 5,
    "reviewCount": 26,
    "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "200 cm",
      "depth": "44 cm",
      "height": "52 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Ebony"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Fine jewelry craftsmanship applied to furniture. Solid brass linear strips are painstakingly routed and hand-pressed flush into dark walnut door faces.",
    "details": [
      "Genuine unlacquered solid brass inlay strips",
      "Four soft-closing push latch doors",
      "Ventilated base allows continuous cool airflow to electronics"
    ],
    "craftsmanshipNotes": "Brass is flush-scraped and sealed with microcrystalline wax."
  },
  {
    "id": "crf-92",
    "slug": "nordic-floating-soundbar-shelf",
    "name": "The Nordic Floating Media Shelf & Soundbar Cradle",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Ultra-slim floating solid wood shelf with recessed cord channels",
    "price": 22000,
    "originalPrice": 26500,
    "rating": 4.8,
    "reviewCount": 55,
    "image": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "150 cm",
      "depth": "28 cm",
      "height": "14 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Walnut",
      "Teak"
    ],
    "leadTime": "1-2 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "For minimalists who only need a clean cradle for a Sonos or Bose soundbar beneath a wall-mounted TV. Conceals all dangling cords invisibly.",
    "details": [
      "Internal aluminum French cleat holds up to 50 kg without sag",
      "Central cord drop slot passes cables straight into wall conduit",
      "Single pull-out drawer stores remote controls and game pads"
    ],
    "craftsmanshipNotes": "Solid hardwood throughout with no veneered edges."
  },
  {
    "id": "crf-93",
    "slug": "amber-fluted-glass-media-hutch",
    "name": "The Amber Fluted Glass TV Sideboard",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Tempered reed glass doors with solid timber framework and brass trims",
    "price": 64000,
    "originalPrice": 75000,
    "rating": 4.9,
    "reviewCount": 31,
    "image": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "180 cm",
      "depth": "42 cm",
      "height": "58 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Teak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "description": "Fluted glass diffuses harsh LED device indicator lights while allowing infrared signals to operate Apple TV, decoders, and PlayStation systems.",
    "details": [
      "Architectural fluted tempered safety glass",
      "Soft-closing hinges with 110-degree opening angle",
      "Removable internal wooden shelves for subwoofer placement"
    ],
    "craftsmanshipNotes": "Glass panes cushioned with silicone gaskets to prevent vibration hum."
  },
  {
    "id": "crf-94",
    "slug": "chomu-lowline-japanese-bench",
    "name": "The Chomu Lowline Tatami TV Bench (30cm Height)",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Ultra low-profile 30cm bench designed for extra-large 85-inch screens",
    "price": 49000,
    "originalPrice": 57000,
    "rating": 4.9,
    "reviewCount": 22,
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "230 cm",
      "depth": "45 cm",
      "height": "30 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Smoked Oak",
      "Distressed Black"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isNewArrival": true,
    "description": "Engineered specifically for giant 75 to 85 inch TVs. The low 30cm elevation aligns the screen center with natural seated eye level to eliminate neck strain.",
    "details": [
      "Optimal 30cm height prevents neck fatigue with massive screens",
      "Three wide drop-front soft closing compartments",
      "Heavy load bearing construction holds up to 150 kg"
    ],
    "craftsmanshipNotes": "Built with 35mm thick solid hardwood planks."
  },
  {
    "id": "crf-95",
    "slug": "solaria-revolving-tv-room-divider",
    "name": "The Solaria 360° Rotating TV Partition Pole",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Swivels TV screen 360 degrees between living room and dining area",
    "price": 88000,
    "originalPrice": 104000,
    "rating": 5,
    "reviewCount": 17,
    "image": "https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1540518614846-7ede433c457b?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "120 cm",
      "depth": "35 cm",
      "height": "Floor-to-Ceiling (Custom)",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Smoked Oak"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Watch TV from the living room sofa, then spin the screen around to watch the match while eating dinner. Internal slip-ring keeps wires from twisting.",
    "details": [
      "360-degree continuous rotation with internal wire pass-through",
      "Floor-to-ceiling tensioned solid wood column with fluted slats",
      "Supports screen sizes from 43 to 65 inches"
    ],
    "craftsmanshipNotes": "German engineered industrial thrust bearing tested to 100,000 spins."
  },
  {
    "id": "crf-96",
    "slug": "rajputana-hand-painted-tv-armoire",
    "name": "The Rajputana Hand-Painted TV Cabinet with Doors",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Conceals television completely behind traditional hand-painted floral doors",
    "price": 95000,
    "originalPrice": 112000,
    "rating": 4.8,
    "reviewCount": 20,
    "image": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "150 cm",
      "depth": "50 cm",
      "height": "160 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Teak",
      "Mahogany",
      "Distressed Black"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "For homes where a black plastic television screen ruins formal living room decor. Bi-fold pocket doors slide away into side recesses when viewing.",
    "details": [
      "Pocket doors slide invisibly back into cabinet sides when watching",
      "Hand-painted miniature floral motifs by Jaipur master artists",
      "Lower drawers store DVDs, gaming gear, and albums"
    ],
    "craftsmanshipNotes": "Hand-painted using natural mineral pigments under protective shellac."
  },
  {
    "id": "crf-97",
    "slug": "amber-cantilever-floating-tv-drawer",
    "name": "The Amber Asymmetrical Floating Media Unit",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Modern staggered floating shelves with open book cubbies",
    "price": 52000,
    "originalPrice": 61000,
    "rating": 4.9,
    "reviewCount": 34,
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "220 cm",
      "depth": "38 cm",
      "height": "45 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Natural Oak",
      "Smoked Oak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "description": "Dynamic asymmetric composition. Combines a long floating closed storage drawer with an offset open timber niche for displaying ceramics and sculptures.",
    "details": [
      "Asymmetric staggered design adds architectural rhythm",
      "Push-to-open soft closing drawer glide hardware",
      "Integrated cable pass-throughs between upper and lower levels"
    ],
    "craftsmanshipNotes": "Mitered box joints reinforced with hidden splines."
  },
  {
    "id": "crf-98",
    "slug": "tatiyawas-solid-slab-tv-bench",
    "name": "The Tatiyawas 3-Inch Thick Live Edge TV Bench",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Single tree slab with cast iron trapezoid legs & lower shelf",
    "price": 58000,
    "originalPrice": 68000,
    "rating": 5,
    "reviewCount": 28,
    "image": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "190 cm",
      "depth": "45 cm",
      "height": "46 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Natural Oak",
      "Honey Oak",
      "Walnut"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Brings raw organic nature into modern apartments. Preserves natural undulating tree bark contours with cast iron architectural supports.",
    "details": [
      "75mm thick single slab seasoned solid timber",
      "Secondary lower shelf holds soundbars and cable boxes",
      "Treated with water and wine-resistant natural hardwax"
    ],
    "craftsmanshipNotes": "Natural wood fissures stabilized with solid brass butterfly keys."
  },
  {
    "id": "crf-99",
    "slug": "zen-minimalist-slat-tv-sideboard",
    "name": "The Zen Teak Slatted Entertainment Credenza",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Japanese horizontal wood slat front on recessed shadow base",
    "price": 66000,
    "originalPrice": 77000,
    "rating": 4.8,
    "reviewCount": 39,
    "image": "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "200 cm",
      "depth": "44 cm",
      "height": "50 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Walnut",
      "Smoked Oak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "description": "Horizontal slatted facades evoke the serene balance of Kyoto tea pavilions. Concealed push-latch doors keep living rooms visually calm.",
    "details": [
      "Horizontal solid wood louver slats allow IR remotes to function",
      "Rear cable management raceway with power strip holder",
      "Removable internal partition panels"
    ],
    "craftsmanshipNotes": "Solid timber louvers hand-notched into vertical door stiles."
  },
  {
    "id": "crf-100",
    "slug": "monarch-grand-home-theater-wall-suite",
    "name": "The Monarch Acoustic Home Theater Cinema Wall Suite",
    "category": "tv-units",
    "categoryLabel": "TV Units",
    "tagline": "Comprehensive acoustic wall panelling with built-in subwoofer and speaker housings",
    "price": 185000,
    "originalPrice": 220000,
    "rating": 5,
    "reviewCount": 14,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "360 cm",
      "depth": "50 cm",
      "height": "270 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Ebony",
      "Teak"
    ],
    "leadTime": "5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "The ultimate bespoke audio-visual installation. Custom designed to acoustically calibrate your home theater room while looking like high-art architecture.",
    "details": [
      "Tested to reduce flutter echo and boominess across 80Hz - 20kHz",
      "Hidden acoustic fabric compartments house subwoofers and LCR speakers",
      "Automated motorized drop-down projector screen housing option"
    ],
    "craftsmanshipNotes": "Acoustic modeling verified by audio-visual engineers before manufacture."
  },
  {
    "id": "crf-101",
    "slug": "apex-executive-walnut-desk",
    "name": "The Apex Executive Solid Walnut Desk",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Commanding executive desk with integrated wire-free brass inlays & leather pad",
    "price": 88000,
    "originalPrice": 105000,
    "rating": 5,
    "reviewCount": 42,
    "image": "/images/category-office.jpg",
    "galleryImages": [
      "/images/category-office.jpg",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "180 cm",
      "depth": "85 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Dark Oak",
      "Teak"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isSignature": true,
    "isBestSeller": true,
    "description": "Designed for visionary leadership. Solid American walnut desktop inset with full-grain Italian leather writing blotter and magnetic cable management channels.",
    "details": [
      "Flush-inset top grain leather desk pad",
      "Concealed pop-up international power & USB-C fast charging box",
      "Lockable solid timber file drawers with German soft-close runners"
    ],
    "craftsmanshipNotes": "45-degree mitered plinth base with solid brass reveal strip."
  },
  {
    "id": "crf-102",
    "slug": "chomu-architect-drafting-table",
    "name": "The Chomu Architect Tilt-Top Drafting Table",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Adjustable brass quadrant mechanism tilts tabletop from 0° to 45°",
    "price": 62000,
    "originalPrice": 74000,
    "rating": 4.9,
    "reviewCount": 35,
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "150 cm",
      "depth": "80 cm",
      "height": "78 cm (Adjustable)",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Teak",
      "Natural Oak",
      "Clear Coat",
      "Rosewood"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "For architects, artists, and creators. The solid teak top tilts to five ergonomic drafting angles with heavy cast brass ratchet quadrant arms.",
    "details": [
      "Five-position solid brass tilt ratchet mechanism",
      "Bottom pencil ledge prevents sketchbooks and laptops from sliding",
      "Two side slide-out trays hold brushes, pens, and coffee cups"
    ],
    "craftsmanshipNotes": "Cast brass hardware hand-polished in our Jaipur atelier."
  },
  {
    "id": "crf-103",
    "slug": "nordic-minimalist-study-desk",
    "name": "The Nordic 2-Drawer Minimalist Study Desk",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Clean Danish proportions in solid white oak with cord pass-through",
    "price": 42000,
    "originalPrice": 49000,
    "rating": 4.8,
    "reviewCount": 57,
    "image": "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "140 cm",
      "depth": "65 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Honey Oak",
      "Walnut"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Brings calm focus into home offices and bedrooms. Two shallow pull-out drawers keep notebooks and pens organized without cramping leg clearance.",
    "details": [
      "Generous 68cm under-desk knee clearance fits ergonomic chairs with armrests",
      "Rear beveled notch allows monitor cables to pass flush against wall",
      "Felt-lined organizer compartments in both drawers"
    ],
    "craftsmanshipNotes": "Traditional dovetail drawer boxes with smooth wooden slides."
  },
  {
    "id": "crf-104",
    "slug": "amber-floor-to-ceiling-library-bookcase",
    "name": "The Amber Floor-to-Ceiling Solid Wood Bookshelf",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Magnificent architectural library with sliding rolling brass ladder",
    "price": 155000,
    "originalPrice": 185000,
    "rating": 5,
    "reviewCount": 28,
    "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "260 cm",
      "depth": "38 cm",
      "height": "260 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Smoked Oak",
      "Rosewood"
    ],
    "leadTime": "4-5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Every bibliophile’s ultimate sanctuary. Towering solid timber shelving complete with a heavy solid brass rolling library ladder that glides across the top rail.",
    "details": [
      "Includes solid brass rolling ladder with rubber-tread wheels",
      "Adjustable 30mm thick hardwood shelves withstand heavy art books without bowing",
      "Lower closed credenza cabinets for files and storage"
    ],
    "craftsmanshipNotes": "Modular unit constructed in 3 sections for seamless room installation."
  },
  {
    "id": "crf-105",
    "slug": "kallisto-ergonomic-leather-executive-chair",
    "name": "The Kallisto Top-Grain Leather Executive Swivel Chair",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Bentwood solid walnut shell with Italian leather & pneumatic tilt mechanism",
    "price": 48000,
    "originalPrice": 56000,
    "rating": 4.9,
    "reviewCount": 44,
    "image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "68 cm",
      "depth": "70 cm",
      "height": "110-120 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Natural Oak"
    ],
    "fabricOptions": [
      "Italian Cognac Leather",
      "Charcoal Black Leather"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isSignature": true,
    "isBestSeller": true,
    "description": "The executive chair reinvented as fine furniture. An outer shell of continuous molded solid walnut cradles top-grain Italian leather cushioning.",
    "details": [
      "Class-4 German pneumatic gas cylinder with 10-year warranty",
      "Synchro-tilt recline with multi-position lock",
      "Solid five-star cast metal base with hardwood capping and polyurethane castors"
    ],
    "craftsmanshipNotes": "Molded 7-ply hardwood veneer shell finished in natural walnut wax."
  },
  {
    "id": "crf-106",
    "slug": "chomu-16-seat-boardroom-conference-table",
    "name": "The Chomu Corporate Boardroom Conference Table (16-Seater)",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Magnificent 4.8-meter solid timber conference table with pop-up power ports",
    "price": 260000,
    "originalPrice": 295000,
    "rating": 5,
    "reviewCount": 16,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "480 cm",
      "depth": "140 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Smoked Oak"
    ],
    "leadTime": "5-6 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Furnished for corporate boardrooms and hotel meeting spaces across India. Seats 16 executives with flush-mounted motorized power, HDMI, and Cat6 data ports.",
    "details": [
      "Four flush pop-up motor-driven conference connectivity modules",
      "Subterranean wire management channels inside solid wood pedestals",
      "Treated with high-durability commercial scratch-resistant topcoat"
    ],
    "craftsmanshipNotes": "Delivered for commercial headquarters across our 50+ building projects."
  },
  {
    "id": "crf-107",
    "slug": "amber-reception-counter-desk",
    "name": "The Amber Fluted Commercial Reception Desk",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Curved fluted timber facade with Italian marble transaction ledge",
    "price": 135000,
    "originalPrice": 158000,
    "rating": 5,
    "reviewCount": 21,
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "240 cm",
      "depth": "85 cm",
      "height": "110 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Smoked Oak",
      "Natural Oak"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Makes an unforgettable first impression for corporate lobbies and boutique hotels. Curved vertical fluted wood with a polished marble transaction shelf.",
    "details": [
      "Dual-height design (76cm staff workstation, 110cm visitor transaction ledge)",
      "Built-in wire management conduits and lockable document pedestals",
      "Concealed LED toe-kick ambient illumination"
    ],
    "craftsmanshipNotes": "Custom fabricated to site dimensions in our Jaipur atelier."
  },
  {
    "id": "crf-108",
    "slug": "solaria-l-shape-executive-workstation",
    "name": "The Solaria L-Shape Executive Corner Desk",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Executive desk with attached lateral return, credenza & filing cabinet",
    "price": 115000,
    "originalPrice": 135000,
    "rating": 4.9,
    "reviewCount": 33,
    "image": "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "200 x 180 cm (L-shape)",
      "depth": "80 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Teak",
      "Dark Oak"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "The complete workspace command center. Combines a broad primary writing desk with an integrated low credenza return holding printers and legal files.",
    "details": [
      "Modular return can be configured for Left or Right-hand rooms",
      "Lockable Central locking drawer system with keys",
      "Full modesty panel with horizontal wire troughs"
    ],
    "craftsmanshipNotes": "Solid timber throughout with no peeling veneer edges."
  },
  {
    "id": "crf-109",
    "slug": "tatiyawas-live-edge-study-table",
    "name": "The Tatiyawas Live-Edge Solid Teak Study Desk",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Single tree slab work desk with cast iron trapezoid legs",
    "price": 56000,
    "originalPrice": 66000,
    "rating": 5,
    "reviewCount": 48,
    "image": "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "160 cm",
      "depth": "75 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Clear Coat",
      "Natural Oak",
      "Honey Oak",
      "Walnut"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Brings inspiring organic beauty into remote work. Working on raw solid timber grain enhances calm and mental clarity during long work hours.",
    "details": [
      "60mm thick solid live-edge timber slab",
      "Hand-inlaid brass butterfly keys stabilize natural grain contours",
      "Pre-installed cable routing grommets with solid wood covers"
    ],
    "craftsmanshipNotes": "Kiln-dried in our Jaipur solar kiln to prevent warping."
  },
  {
    "id": "crf-110",
    "slug": "haveli-writing-bureau-desk",
    "name": "The Haveli Roll-Top Secretary Writing Bureau",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Traditional tambour roll-top desk with secret compartments & letter cubbies",
    "price": 68000,
    "originalPrice": 79000,
    "rating": 4.9,
    "reviewCount": 27,
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "110 cm",
      "depth": "65 cm",
      "height": "115 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Teak",
      "Mahogany",
      "Chestnut"
    ],
    "leadTime": "4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "A romantic masterpiece of classical woodworking. The flexible slatted roll-top glides up smoothly to reveal 8 pigeonhole cubbies and secret drawers.",
    "details": [
      "Whisper-quiet wooden tambour roll-top with brass key lock",
      "Two spring-activated concealed secret compartments",
      "Two lower full-extension file drawers"
    ],
    "craftsmanshipNotes": "Assembled entirely without metal nails using wedged joinery."
  },
  {
    "id": "crf-111",
    "slug": "nordic-solid-oak-conference-armchair",
    "name": "The Nordic Conference Armchair (Pair)",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Sculpted solid timber meeting chair in oatmeal wool fabric",
    "price": 29500,
    "originalPrice": 35000,
    "rating": 4.8,
    "reviewCount": 36,
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "58 cm",
      "depth": "58 cm",
      "height": "80 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Walnut",
      "Smoked Oak"
    ],
    "fabricOptions": [
      "Belgian Ivory Bouclé",
      "Italian Cognac Leather",
      "Oatmeal Wool"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Elevates commercial conference rooms and private study suites. Sculptural curved armrests offer restful support during multi-hour strategic meetings.",
    "details": [
      "Heavy commercial-grade wool upholstery",
      "Solid hardwood joinery withstands daily office rotation",
      "Stackable up to 3 units for flexible space use"
    ],
    "craftsmanshipNotes": "Built to commercial contract BIFMA durability standards."
  },
  {
    "id": "crf-112",
    "slug": "solace-modular-office-credenza-storage",
    "name": "The Solace 4-Door Office File & Storage Credenza",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Fluted wood credenza with lateral file hanging rods & printer top",
    "price": 58000,
    "originalPrice": 68000,
    "rating": 4.8,
    "reviewCount": 25,
    "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "180 cm",
      "depth": "48 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Smoked Oak",
      "Teak",
      "Natural Oak"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "description": "Keep your executive suite immaculate. Designed with lateral file rails for A4/Legal folders, printer paper shelves, and lockable security bays.",
    "details": [
      "Holds standard A4 and Legal hanging file folders",
      "Reinforced top supports heavy laser multi-function printers",
      "Two central lockable security cabinets with keys"
    ],
    "craftsmanshipNotes": "Solid timber framework with heavy-duty full extension runners."
  },
  {
    "id": "crf-113",
    "slug": "amber-standing-electric-height-desk",
    "name": "The Amber Solid Wood Smart Standing Desk",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Dual-motor electric sit-stand frame topped with 40mm solid walnut slab",
    "price": 78000,
    "originalPrice": 92000,
    "rating": 4.9,
    "reviewCount": 51,
    "image": "https://images.unsplash.com/photo-1580481077195-c22ae2499d08?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1580481077195-c22ae2499d08?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "160 cm",
      "depth": "80 cm",
      "height": "65-130 cm (Electric)",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Natural Oak",
      "Clear Coat",
      "Smoked Oak"
    ],
    "leadTime": "2-3 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Combines the health benefits of sit-stand work with the timeless prestige of real solid hardwood. Dual German motors lift silently at 38mm/sec.",
    "details": [
      "Dual high-torque silent motors with 4 memory height presets",
      "Anti-collision safety sensors automatically stop movement if obstructed",
      "Integrated under-desk wire cable spine management"
    ],
    "craftsmanshipNotes": "Solid walnut top with ergonomic beveled comfort front edge."
  },
  {
    "id": "crf-114",
    "slug": "chomu-lawyers-glass-stacking-bookcase",
    "name": "The Chomu Traditional Barrister Stacking Bookcase",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Four modular glass lift-up shelf bays inspired by vintage legal chambers",
    "price": 72000,
    "originalPrice": 84000,
    "rating": 5,
    "reviewCount": 33,
    "image": "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "95 cm",
      "depth": "36 cm",
      "height": "175 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Teak",
      "Mahogany",
      "Jacobean Oak"
    ],
    "leadTime": "3-4 Weeks Bespoke Build",
    "isSignature": true,
    "description": "A prized collectible. Glass doors lift up and slide horizontally back into the cabinet top, protecting rare legal texts and first-edition novels from dust.",
    "details": [
      "Four modular stacking sections with lift-up and slide-in glass doors",
      "Dust-proof sealed glass enclosures with brass knobs",
      "Solid teak frame can be expanded vertically with additional sections"
    ],
    "craftsmanshipNotes": "Interlocking sectional construction with hidden alignment dowels."
  },
  {
    "id": "crf-115",
    "slug": "solaria-sculptural-bentwood-swivel-chair",
    "name": "The Solaria Mid-Century Swivel Desk Chair",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Bentwood solid oak arms with cognac leather & tilt swivel base",
    "price": 36000,
    "originalPrice": 42000,
    "rating": 4.8,
    "reviewCount": 40,
    "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "62 cm",
      "depth": "64 cm",
      "height": "88-96 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Walnut",
      "Black"
    ],
    "fabricOptions": [
      "Italian Cognac Leather",
      "Charcoal Black Leather"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Light, elegant, and ergonomic. Molded bentwood arms flow gracefully into an upholstered leather seat pan mounted on a brushed metal swivel base.",
    "details": [
      "Pneumatic seat height adjustment and 360-degree rotation",
      "Compact profile fits neatly under home study desks",
      "Soft polyurethane castors safe for hardwood and stone floors"
    ],
    "craftsmanshipNotes": "Continuous steam-bent solid wood armrest loop."
  },
  {
    "id": "crf-116",
    "slug": "amber-monolith-partner-desk",
    "name": "The Amber Double-Sided Partner Desk",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Double-pedestal desk with drawers on both sides for shared work",
    "price": 125000,
    "originalPrice": 148000,
    "rating": 5,
    "reviewCount": 18,
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "190 cm",
      "depth": "110 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Smoked Oak",
      "Dark Oak"
    ],
    "leadTime": "4-5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "Allows two partners, executives, or co-founders to work facing one another across a magnificent shared solid hardwood surface with dual drawer banks.",
    "details": [
      "Symmetrical drawers and kneeholes on both sides of the desk",
      "Four file drawers and four accessory drawers with brass pulls",
      "Dual flush cable grommets with solid wood covers"
    ],
    "craftsmanshipNotes": "Heavy solid timber construction built for multi-generational service."
  },
  {
    "id": "crf-117",
    "slug": "chomu-compact-floating-wall-desk",
    "name": "The Chomu Wall-Mounted Drop-Leaf Laptop Desk",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Folds completely flat against wall when closed with interior organizer",
    "price": 24000,
    "originalPrice": 28000,
    "rating": 4.8,
    "reviewCount": 52,
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "85 cm",
      "depth": "18 cm (70 cm open)",
      "height": "60 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Walnut"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "For apartments and multi-purpose guest rooms. When work is done, fold the heavy timber leaf upwards and latch it flush into a sleek wall cabinet.",
    "details": [
      "Heavy-duty steel stay cables support up to 45 kg on work surface",
      "Interior magnetic corkboard panel and phone charging shelf",
      "Cabinet depth is only 18cm when folded shut"
    ],
    "craftsmanshipNotes": "Solid hardwood perimeter frame with magnetic flush catch."
  },
  {
    "id": "crf-118",
    "slug": "rajputana-hand-carved-armchair-study",
    "name": "The Rajputana Traditional Library Reading Chair",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Deep reading chair in distressed cognac leather with carved teak arms",
    "price": 44000,
    "originalPrice": 51000,
    "rating": 4.9,
    "reviewCount": 31,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "78 cm",
      "depth": "82 cm",
      "height": "92 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Rosewood",
      "Teak",
      "Mahogany",
      "Jacobean Oak"
    ],
    "fabricOptions": [
      "Italian Cognac Leather",
      "Charcoal Black Leather",
      "Forest Olive Velvet"
    ],
    "leadTime": "3 Weeks Bespoke Build",
    "isSignature": true,
    "description": "The definitive fireside study reading armchair. Generous back height supports the head and shoulders during deep research and literary study.",
    "details": [
      "Top-grain pull-up leather patinates beautifully with age",
      "Eight-way hand-tied spring suspension for lifetime buoyancy",
      "Hand-turned solid teak front legs with brass castors"
    ],
    "craftsmanshipNotes": "Carved with traditional acanthus leaf scrolls at arm terminals."
  },
  {
    "id": "crf-119",
    "slug": "solaria-modular-corner-bookshelf",
    "name": "The Solaria 5-Tier Corner Display Etagere",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Quarter-round solid wood corner shelf for study books and awards",
    "price": 28000,
    "originalPrice": 33000,
    "rating": 4.8,
    "reviewCount": 46,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "45 cm",
      "depth": "45 cm",
      "height": "180 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Natural Oak",
      "Clear Coat",
      "Walnut",
      "Teak"
    ],
    "leadTime": "2 Weeks Bespoke Build",
    "isBestSeller": true,
    "description": "Transforms empty study room corners into functional vertical display for academic diplomas, architecture awards, and book collections.",
    "details": [
      "Five quarter-circle radial shelves with lip rims",
      "Fits flush into standard 90-degree room corners",
      "Solid hardwood upright frame provides rock-solid rigidity"
    ],
    "craftsmanshipNotes": "Pre-assembled in one piece with mortised radial joints."
  },
  {
    "id": "crf-120",
    "slug": "monarch-maharaja-executive-desk-suite",
    "name": "The Monarch Grand Executive Desk Suite (With Credenza)",
    "category": "office-furniture",
    "categoryLabel": "Office Furniture",
    "tagline": "Monumental 2.4-meter executive desk with matching rear credenza & safe cavity",
    "price": 195000,
    "originalPrice": 235000,
    "rating": 5,
    "reviewCount": 15,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    "galleryImages": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
    ],
    "dimensions": {
      "width": "240 cm (Desk) & 200 cm (Credenza)",
      "depth": "100 cm",
      "height": "76 cm",
      "customizable": true
    },
    "woodOptions": [
      "Burma Teak",
      "American Walnut",
      "European White Oak",
      "Indian Rosewood (Sheesham)"
    ],
    "finishOptions": [
      "Walnut",
      "Teak",
      "Smoked Oak",
      "Rosewood"
    ],
    "leadTime": "5 Weeks Bespoke Build",
    "isSignature": true,
    "description": "The supreme expression of workplace status. A 2.4-meter solid hardwood desk paired with a matching wall credenza housing an integrated safe cavity.",
    "details": [
      "Includes primary executive desk plus matching rear sideboard credenza",
      "Concealed steel electronic digital safe cavity built into credenza",
      "Full-grain Italian leather writing pad with 24k gold leaf perimeter debossing"
    ],
    "craftsmanshipNotes": "Crafted exclusively under the personal supervision of Surender Singh Rajora."
  }
];

export const WOOD_FINISHES = [
  {
    id: 'burma-teak',
    name: 'Burma Teak',
    colorHex: '#7C4B27',
    origin: 'Kiln-dried Grade-A Teak (Jaipur Atelier)',
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
    origin: 'Northern India Native Hardwood',
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
