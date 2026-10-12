import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/common/CartDrawer';
import QuickViewModal from '@/components/common/QuickViewModal';
import SearchModal from '@/components/common/SearchModal';
import WhatsAppFloatingBtn from '@/components/layout/WhatsAppFloatingBtn';
import MotionProvider from '@/components/motion/MotionProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const displaySerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CRAFTORA™ | Custom Solid Wood Furniture Atelier',
  description:
    'Bespoke solid wood furniture crafted for your space. Living room, bedroom, dining, custom walk-in wardrobes, TV units, and executive office furniture. 100% kiln-dried timber with a 15-year warranty.',
  keywords: [
    'Craftora custom furniture',
    'bespoke wood furniture India',
    'solid teak dining table',
    'curved bouclé armchair',
    'custom wardrobes',
    'acoustic TV wall units',
    'solid walnut office desk',
    'handcrafted furniture atelier',
  ],
  icons: {
    icon: '/images/craftora-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${displaySerif.variable} scroll-smooth`}>
      <body className="bg-white text-[#1C1917] font-sans antialiased selection:bg-[#A0741A]/30 selection:text-[#1C1917] min-h-screen flex flex-col">
        <MotionProvider>
          <CartProvider>
            <AnnouncementBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <QuickViewModal />
            <SearchModal />
            <WhatsAppFloatingBtn />
          </CartProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
