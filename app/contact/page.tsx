'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Calendar,
  MessageSquare,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import Button from '@/components/common/Button';
import Badge from '@/components/common/Badge';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { EASE_LUXE, Reveal, Stagger, StaggerItem, TextReveal, fadeUpItem } from '@/components/motion';

const formStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const ATELIERS = [
  {
    city: 'Jaipur Flagship Atelier & Manufacturing Workshop',
    owner: 'Surender Singh Rajora',
    address: 'Jaipur Raj, Chomu Tatiyawas Toll Plaza, Jaipur, Rajasthan 303701',
    phone: '+91 9950757127',
    email: 'thecraftora@gmail.com',
    hours: 'Mon - Sun: 9:30 AM - 8:30 PM (Direct factory tour & live craft consultation)',
    highlights: '35+ Years Experience · 2,000+ Happy Customers · 50+ Buildings & 5 Hotels Furnished',
  },
];

const FAQS = [
  {
    q: 'How long does custom furniture take to build at the Jaipur workshop?',
    a: 'Each piece is made to order from seasoned solid timber. Standard armchairs and coffee tables take 2 to 3 weeks. Complex bespoke dining tables, walk-in wardrobes, and acoustic TV wall consoles take 3 to 5 weeks. We share direct photo & video progress updates from our Jaipur workshop.'
  },
  {
    q: 'Can you build custom furniture to my exact dimensions?',
    a: 'Yes, absolutely. Under our founder Surender Singh Rajora, we customize length, width, depth, and height down to the millimeter without charging arbitrary custom modification fees.'
  },
  {
    q: 'Do you offer in-home measurements in Jaipur and Rajasthan?',
    a: 'Yes. For complete room suites, wardrobes, and TV units, our team visits your site with digital laser instruments to verify wall plumb, floor leveling, and electrical conduits.'
  },
  {
    q: 'What is covered under the 15-Year Solid Wood Guarantee?',
    a: 'Our guarantee covers all structural frame joinery, timber stability against warping or natural fissures, and internal webbing/spring suspensions. Handcrafted with traditional mortise & tenon joinery.'
  },
  {
    q: 'How does shipping and installation work from Jaipur?',
    a: 'We provide direct White-Glove delivery and professional carpenter assembly across Jaipur, Rajasthan, and nationwide across India with specialized protective transit packing.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Jaipur',
    consultationType: 'In-Studio Experience',
    roomInterest: 'Living Room',
    timberPreference: 'Burma Teak',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#FAFAF9] min-h-screen py-10 sm:py-16">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal distance={16} duration={0.7}>
            <Badge variant="gold" size="sm" className="mb-3">
              Jaipur Flagship Studio &amp; Workshop
            </Badge>
          </Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-semibold tracking-tight">
            <TextReveal text="Crafted For The Way You Live" onMount delay={0.15} />
          </h1>
          <Reveal delay={0.6} distance={24}>
            <p className="mt-4 text-base sm:text-lg text-[#44403C] font-normal leading-relaxed">
              Visit our flagship atelier &amp; workshop at Chomu Tatiyawas Toll Plaza, Jaipur. Speak straight with founder Surender Singh Rajora for individual, bulk, or hotel orders.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Consultation Booking Form */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE_LUXE }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E7E5E4] shadow-lg overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: EASE_LUXE }}
                className="p-8 text-center space-y-4"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.15 }}
                  className="w-16 h-16 rounded-full bg-[#4A5B47]/10 text-[#4A5B47] flex items-center justify-center mx-auto"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <h2 className="text-3xl text-[#1C1917] font-semibold">Consultation Requested</h2>
                <p className="text-sm sm:text-sm text-[#44403C] max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Our senior spatial designer will contact you within 4 business hours on {formData.phone} to confirm your appointment and share preparatory material catalogues.
                </p>
                <div className="pt-4">
                  <Button variant="primary" onClick={() => setIsSubmitted(false)}>
                    Book Another Appointment
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                variants={formStagger}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                className="space-y-6"
              >
                <motion.div variants={fadeUpItem}>
                  <h2 className="text-2xl text-[#1C1917] font-semibold">
                    Book a Free Design Consultation
                  </h2>
                  <p className="text-xs text-[#57534E] mt-1 font-normal">
                    Select your preferred studio location or in-home spatial visit.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpItem} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Rathore"
                      className="w-full p-3 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#1C1917] focus:outline-none focus:border-[#A0741A]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] block mb-1.5">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full p-3 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#1C1917] focus:outline-none focus:border-[#A0741A]"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeUpItem} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full p-3 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#1C1917] focus:outline-none focus:border-[#A0741A]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] block mb-1.5">
                      City Location
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#1C1917] focus:outline-none focus:border-[#A0741A]"
                    >
                      <option value="Jaipur (Chomu / Tatiyawas)">Jaipur (Chomu / Tatiyawas Flagship Workshop)</option>
                      <option value="Jaipur Suburbs">Jaipur (Vaishali / Mansarovar / C-Scheme / Civil Lines)</option>
                      <option value="Rajasthan Region">Rajasthan (Jodhpur / Udaipur / Kota / Ajmer / Bikaner)</option>
                      <option value="Delhi NCR">Delhi NCR / Gurugram / Noida</option>
                      <option value="Other">Other City (Pan-India White-Glove Dispatch)</option>
                    </select>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpItem} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] block mb-1.5">
                      Consultation Format
                    </label>
                    <select
                      value={formData.consultationType}
                      onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#1C1917] focus:outline-none focus:border-[#A0741A]"
                    >
                      <option value="In-Studio Experience">Atelier Studio Visit</option>
                      <option value="In-Home Laser Site Measurement">Complimentary In-Home Laser Measurement</option>
                      <option value="Virtual Video & 3D CAD Call">Virtual Video CAD Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] block mb-1.5">
                      Primary Room
                    </label>
                    <select
                      value={formData.roomInterest}
                      onChange={(e) => setFormData({ ...formData, roomInterest: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#1C1917] focus:outline-none focus:border-[#A0741A]"
                    >
                      <option value="Living Room">Living Room (Sofa, Armchairs, Tables)</option>
                      <option value="Dining Room">Dining (Live-Edge Table &amp; Chairs)</option>
                      <option value="Bedroom">Master Suite (Platform Bed, Nightstands)</option>
                      <option value="Wardrobes">Walk-In Wardrobes / Dressing Room</option>
                      <option value="TV Media Console">Acoustic TV Media Wall Console</option>
                      <option value="Executive Office">Executive Home Office</option>
                      <option value="Complete Home">Complete Home Interior Package</option>
                    </select>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpItem}>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#4A2E1E] block mb-1.5">
                    Floor Plan Notes / Custom Dimensions / Specific Requests
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your space dimensions, preferred timbers (Teak, Walnut, Oak), timeline, or attach sketches..."
                    className="w-full p-3 rounded-xl bg-[#FAFAF9] border border-[#E7E5E4] text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#A0741A]"
                  />
                </motion.div>

                <motion.div variants={fadeUpItem}>
                  <Button variant="primary" fullWidth size="lg" type="submit">
                    Confirm Consultation Request
                  </Button>
                </motion.div>

                <motion.p variants={fadeUpItem} className="text-xs text-[#6B6560] text-center font-normal">
                  Strictly private. We never share your contact details. Free of charge with zero purchase obligation.
                </motion.p>
              </motion.form>
            )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Studio Addresses & Direct WhatsApp Hotline */}
          <Stagger className="lg:col-span-5 space-y-6" onMount delay={0.45} stagger={0.12}>
            {/* WhatsApp Card */}
            <StaggerItem
              variant="scale"
              className="p-6 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 shadow-sm hover:shadow-lg transition-shadow duration-500 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C1917]">
                    WhatsApp Surender Singh Rajora
                  </h3>
                  <p className="text-xs text-[#44403C] font-normal">
                    Send floor plan drawings or photos to +91 9950757127.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/919950757127?text=Hello%20Surender%20ji,%20I%20would%20like%20to%20discuss%20custom%20Craftora%20furniture."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shadow-sm"
              >
                Chat Now
              </a>
            </StaggerItem>

            {/* Atelier Showroom Addresses */}
            <div className="space-y-4">
              <StaggerItem>
                <span className="text-xs uppercase tracking-wider text-[#A0741A] font-semibold block">
                  Exclusive Flagship Studio &amp; Factory
                </span>
              </StaggerItem>

              {ATELIERS.map((atelier, i) => (
                <StaggerItem
                  key={i}
                  variant="slideLeft"
                  className="p-6 rounded-3xl bg-white border border-[#E7E5E4] shadow-sm hover:shadow-lg hover:border-[#A0741A]/40 transition-[box-shadow,border-color] duration-500 space-y-3"
                >
                  <div>
                    <h4 className="text-lg font-bold text-[#1C1917]">
                      {atelier.city}
                    </h4>
                    <p className="text-xs text-[#C29B38] font-bold mt-0.5">
                      Owner: {atelier.owner}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#57534E]">
                    <MapPin className="w-4 h-4 text-[#A0741A] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{atelier.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#57534E]">
                    <Phone className="w-4 h-4 text-[#A0741A] flex-shrink-0" />
                    <a href={`tel:${atelier.phone}`} className="font-bold text-[#4A2E1E] hover:underline">
                      {atelier.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#57534E]">
                    <Mail className="w-4 h-4 text-[#A0741A] flex-shrink-0" />
                    <a href={`mailto:${atelier.email}`} className="hover:underline">
                      {atelier.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#6B6560] pt-2 border-t border-[#F0EFED]">
                    <Clock className="w-3.5 h-3.5 text-[#A0741A] flex-shrink-0" />
                    <span>{atelier.hours}</span>
                  </div>
                  <div className="pt-2 border-t border-[#F0EFED] text-xs font-semibold text-[#7C4B27]">
                    ★ {atelier.highlights}
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>

        {/* FAQs Accordion */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Reveal distance={16}>
              <span className="text-xs uppercase tracking-wider text-[#A0741A] font-semibold block mb-2">
                Frequently Asked Questions
              </span>
            </Reveal>
            <h2 className="text-3xl sm:text-4xl text-[#1C1917] font-semibold">
              <TextReveal text="Everything You Need to Know" />
            </h2>
          </div>

          <Stagger className="space-y-3" stagger={0.08}>
            {FAQS.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <StaggerItem
                  key={idx}
                  className={`rounded-2xl bg-white border overflow-hidden shadow-sm transition-colors duration-300 ${
                    isOpen ? 'border-[#A0741A]/50' : 'border-[#E7E5E4]'
                  }`}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-lg text-[#1C1917] hover:text-[#7C4B27] transition-colors font-semibold"
                  >
                    <span>{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: EASE_LUXE }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-[#A0741A]" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE_LUXE }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-sm sm:text-sm text-[#44403C] font-normal leading-relaxed border-t border-[#F5F5F4]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </div>
  );
}
