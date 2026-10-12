import React from 'react';
import { Metadata } from 'next';
import { Sparkles, Compass, ShieldCheck, Ruler, CheckCircle2, MessageSquare } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import Badge from '@/components/common/Badge';
import CustomConfigurator from '@/components/custom/CustomConfigurator';
import { Reveal, Stagger, StaggerItem, TextReveal } from '@/components/motion';

export const metadata: Metadata = {
  title: 'Custom 3D Furniture Studio | Designed by You. Crafted by Us | Craftora',
  description:
    'Design your dream solid wood furniture online. Adjust length, depth, height, select Burma Teak, American Walnut, or European Oak, and get instant pricing.',
};

const GUARANTEES = [
  {
    icon: <Ruler className="w-6 h-6 text-[#A0741A]" />,
    title: 'Zero Modification Fee',
    text: "We don't charge premiums just because your room requires a non-standard 238cm dining table or recessed baseboards.",
  },
  {
    icon: <Compass className="w-6 h-6 text-[#A0741A]" />,
    title: 'CAD Drawing Approval',
    text: 'Before our chisels touch timber, our design team produces an isometric 3D render and joinery drawing for your sign-off.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#A0741A]" />,
    title: '15-Year Solid Wood Pledge',
    text: 'Each bespoke creation arrives with an engraved brass authenticity plaque and our signature 15-year structural guarantee.',
  },
];

export default function CustomStudioPage() {
  return (
    <div className="bg-[#FAFAF9] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal distance={16} duration={0.7}>
            <Badge variant="gold" size="sm" className="mb-3">
              <Sparkles className="w-3 h-3 text-[#A0741A]" /> 3D Atelier Configurator
            </Badge>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-semibold tracking-tight">
            <TextReveal text="Designed by You." onMount delay={0.15} />{' '}
            <TextReveal
              text="Crafted by Us."
              onMount
              delay={0.4}
              className="block text-[#7C4B27]"
            />
          </h1>
          <Reveal delay={0.65} distance={24}>
            <p className="mt-4 text-sm sm:text-base text-[#44403C] font-normal leading-relaxed">
              Specify your room dimensions down to the centimeter. Select certified solid hardwood timbers,
              custom finishes, and architectural hardware. Receive an instant price quote and 3D CAD visualization.
            </p>
          </Reveal>
        </div>

        {/* The Interactive Configurator Studio */}
        <CustomConfigurator />

        {/* Atelier Custom Guarantee Section */}
        <Reveal distance={50} className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-[#E7E5E4] shadow-sm">
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.15} delay={0.15}>
            {GUARANTEES.map((g) => (
              <StaggerItem key={g.title} className="group flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] flex items-center justify-center flex-shrink-0 text-[#7C4B27] transition-all duration-500 group-hover:bg-[#4A2E1E] group-hover:-rotate-6 group-hover:scale-110">
                  {g.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1C1917]">
                    {g.title}
                  </h3>
                  <p className="text-sm text-[#57534E] font-normal mt-1 leading-relaxed">
                    {g.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </div>
  );
}
