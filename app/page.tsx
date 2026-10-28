import React from 'react';
import PepperfryHeroCarousel from '@/components/home/PepperfryHeroCarousel';
import PepperfryCategoryIcons from '@/components/home/PepperfryCategoryIcons';
import PepperfryBankOffers from '@/components/home/PepperfryBankOffers';
import PepperfryLightningDeals from '@/components/home/PepperfryLightningDeals';
import PepperfryShopByRoom from '@/components/home/PepperfryShopByRoom';
import PepperfryTrendingGrid from '@/components/home/PepperfryTrendingGrid';
import InteriorDesignPreview from '@/components/home/InteriorDesignPreview';
import MaterialStudio from '@/components/home/MaterialStudio';
import PepperfryCustomerLookbook from '@/components/home/PepperfryCustomerLookbook';
import CraftoraAboutStory from '@/components/home/CraftoraAboutStory';
import ConsultationCTA from '@/components/home/ConsultationCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. Pepperfry Mega Banner Carousel + 4 Trust Pillars */}
      <PepperfryHeroCarousel />

      {/* 2. Explore Popular Categories Circular Navigation Strip */}
      <PepperfryCategoryIcons />

      {/* 3. Bank Offers & Instant Discount Coupons Strip */}
      <PepperfryBankOffers />

      {/* 4. Lightning Deals & Deals of the Day with Live Countdown */}
      <PepperfryLightningDeals />

      {/* 5. Shop By Room Interactive Makeover Showroom */}
      <PepperfryShopByRoom />

      {/* 5b. Interior Design Styles Teaser */}
      <InteriorDesignPreview />

      {/* 6. Trending Collections / What India is Loving */}
      <PepperfryTrendingGrid />

      {/* 7. 3D Hardwood Timber Studio (Teak, Walnut, Sheesham, Oak) */}
      <MaterialStudio />

      {/* 8. Pepperfry Real Customer Homes & Lookbook Showcase */}
      <PepperfryCustomerLookbook />

      {/* 9. Craftora 35-Year Heritage & Jaipur Atelier Story Section */}
      <CraftoraAboutStory />

      {/* 10. Free In-Home 3D Measurement & Spatial Consultation CTA */}
      <ConsultationCTA />
    </div>
  );
}
