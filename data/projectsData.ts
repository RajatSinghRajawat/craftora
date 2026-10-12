export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Hospitality';
  location: string;
  year: string;
  scope: string;
  coverImage: string;
  description: string;
  keyPieces: string[];
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'The Jor Bagh Penthouse Residence',
    category: 'Residential',
    location: 'New Delhi, India',
    year: '2025',
    scope: 'Complete Living Room, Dining, Master Suite & Fluted TV Unit',
    coverImage: '/images/hero-living.jpg',
    description: 'A 6,500 sq ft penthouse designed in collaboration with Studio Archform. Tailored in solid Burma teak and Belgian bouclé to celebrate organic light and high-ceiling volumes.',
    keyPieces: ['The Solace Armchairs', 'Zenith Modular Plinth Sofa', 'Acoustic TV Media Wall', 'Custom 12-Seater Teak Dining']
  },
  {
    id: 'proj-02',
    title: 'Coastal Alibaug Sanctuary Villa',
    category: 'Residential',
    location: 'Alibaug, Maharashtra',
    year: '2025',
    scope: 'Bespoke Teak Dining Pavilion & Low-Slung Bedroom Suites',
    coverImage: '/images/category-dining.jpg',
    description: 'Designed to harmonize with tropical coastal breezes. Featuring moisture-stabilized seasoned teakwood with brass butterfly keys and sun-washed linen upholstery.',
    keyPieces: ['The Aethel Live Edge Dining Table', 'Nordic Sculptural Dining Chairs', 'Outdoor Teak Loungers']
  },
  {
    id: 'proj-03',
    title: 'Verve Capital Executive Atelier',
    category: 'Commercial',
    location: 'Bandra Kurla Complex (BKC), Mumbai',
    year: '2024',
    scope: 'Founders Boardroom, 6 Executive Desks & Library Walls',
    coverImage: '/images/category-office.jpg',
    description: 'A sovereign wealth fund headquarters where commanding solid American walnut desks meet integrated wire-free brass inlays and acoustic slatted timber conference panels.',
    keyPieces: ['The Apex Executive Desk', 'Solid Walnut Boardroom Table', 'Bespoke Architectural Library']
  },
  {
    id: 'proj-04',
    title: 'The Gulmohar Master Dressing Suite',
    category: 'Residential',
    location: 'Bengaluru, India',
    year: '2025',
    scope: 'Custom Walk-In Wardrobe & Fluted Island Cabinetry',
    coverImage: '/images/category-wardrobes.jpg',
    description: 'An architectural walk-in closet built with smoked glass, solid dark walnut vertical flutes, sensor-activated 2700K perimeter LED lighting, and Italian hardware.',
    keyPieces: ['The Elysian Walk-In Wardrobe', 'Fluted Dressing Island', 'Velvet Jewelry Consoles']
  }
];
