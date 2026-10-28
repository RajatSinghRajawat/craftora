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
    title: 'The Royal Heritage Palace Suites',
    category: 'Hospitality',
    location: 'Jaipur, Rajasthan',
    year: '2025',
    scope: '42 Luxury Suites, Coordinated Solid Teak Beds, Credenzas & Lounge Seating',
    coverImage: '/images/hero-living.jpg',
    description: 'One of 5 luxury hotel projects furnished by Craftora Jaipur. Handcrafted in 100% seasoned Burma teak with custom brass joinery and traditional Rajasthani mortise & tenon integrity.',
    keyPieces: ['Custom Teak Suite Beds', 'Carved Solid Wood Credenzas', 'Curved Heritage Armchairs', 'Luggage Consoles']
  },
  {
    id: 'proj-02',
    title: 'Civil Lines Luxury Villa',
    category: 'Residential',
    location: 'Civil Lines, Jaipur',
    year: '2025',
    scope: 'Complete Living Room, 8-Seater Dining Slab & Master Suite',
    coverImage: '/images/category-dining.jpg',
    description: 'A bespoke 7,200 sq ft private villa. Featuring live-edge solid timber dining slabs, curved bouclé armchairs, and made-to-measure dressing cabinetry tailored for effortless everyday living.',
    keyPieces: ['The Aethel Live Edge Dining Table', 'The Solace Curved Armchairs', 'Acoustic TV Media Wall', 'Walk-In Wardrobes']
  },
  {
    id: 'proj-03',
    title: 'Apex Business Park Corporate Boardroom',
    category: 'Commercial',
    location: 'Jaipur, Rajasthan',
    year: '2024',
    scope: '18-Seat Conference Table, Executive Office Desks & Reception Counter',
    coverImage: '/images/category-office.jpg',
    description: 'Corporate headquarters furniture giving commercial environments a clear structure. Solid walnut conference tables with concealed wire ports and ergonomic director desks.',
    keyPieces: ['18-Seat Solid Walnut Conference Table', 'Executive Office Tables', 'Reception Desks & Storage Cabinets']
  },
  {
    id: 'proj-04',
    title: 'The Amber View Boutique Heritage Resort',
    category: 'Hospitality',
    location: 'Amer Road, Jaipur',
    year: '2024',
    scope: 'Complete Hotel Bedroom Suites, Restaurant Tables & Open Courtyard Loungers',
    coverImage: '/images/category-wardrobes.jpg',
    description: 'Delivered end-to-end for a luxury boutique resort in Jaipur. Coordinated furniture preserving authentic Rajasthan heritage with 20+ custom hand-rubbed wood finishes.',
    keyPieces: ['Heritage Hotel Platform Beds', 'Live Edge Cafe Tables', 'Built-in Luggage Wardrobes', 'Artisan Coffee Tables']
  }
];
