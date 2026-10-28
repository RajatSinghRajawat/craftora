'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import {
  Package,
  Clock,
  CheckCircle2,
  Truck,
  Sparkles,
  ShieldCheck,
  MapPin,
  User,
  Phone,
  Mail,
  FileText,
  Download,
  ExternalLink,
  MessageCircle,
  ChevronRight,
  Eye,
  X,
  Plus,
  Edit2,
  Trash2,
  Calendar,
  AlertCircle,
  Layers,
  ArrowRight
} from 'lucide-react';
import Badge from '@/components/common/Badge';

// Types for Orders
interface OrderItem {
  id: string;
  name: string;
  category: string;
  wood: string;
  finish: string;
  dimensions: string;
  price: number;
  qty: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'In Production' | 'Delivered' | 'Dispatched' | 'Timber Seasoning';
  statusDescription: string;
  estimatedDelivery: string;
  trackingStep: number; // 1 to 6
  deliveryAddress: string;
  recipient: { name: string; phone: string };
  warrantySerial: string;
  items: OrderItem[];
}

const ORDERS_DATA: Order[] = [
  {
    id: 'CRF-2026-9042',
    date: '24 Oct 2026',
    total: 142800,
    status: 'In Production',
    statusDescription: 'Stage 4: Hand-Rubbed Natural Oil Finishing at Jaipur Atelier',
    estimatedDelivery: '04 Nov 2026',
    trackingStep: 4,
    deliveryAddress: 'Plot 42, Civil Lines Road, Near Raj Bhavan, Jaipur, Rajasthan 302006',
    recipient: { name: 'Rajat Singh', phone: '+91 99507 57127' },
    warrantySerial: 'CRF-WR-9042-BURMA-TEAK',
    items: [
      {
        id: 'crf-01',
        name: 'The Grand Chesterfield Teak 3-Seater Sofa',
        category: 'Living Room',
        wood: '100% Seasoned Burma Teak',
        finish: 'Warm Honey Oak (PDF #13)',
        dimensions: '88"W x 38"D x 34"H',
        price: 94800,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'crf-08',
        name: 'The Artisan Sculptural Royal Teak Coffee Table',
        category: 'Living Room',
        wood: 'Kiln-Dried Solid Teak & Brass Pins',
        finish: 'Warm Honey Oak (Matching Suite)',
        dimensions: '48"L x 28"W x 18"H',
        price: 48000,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'CRF-2026-8714',
    date: '14 Oct 2026',
    total: 164000,
    status: 'Delivered',
    statusDescription: 'Delivered & Assembled by Craftora White-Glove Team',
    estimatedDelivery: 'Delivered on 22 Oct 2026',
    trackingStep: 6,
    deliveryAddress: 'Villa 18, Tatiyawas Green Enclave, Chomu Toll Highway, Jaipur, Rajasthan 303701',
    recipient: { name: 'Rajat Singh', phone: '+91 99507 57127' },
    warrantySerial: 'CRF-WR-8714-WALNUT-USA',
    items: [
      {
        id: 'crf-02',
        name: 'The Monarch King Hydraulic Storage Bed',
        category: 'Bedroom',
        wood: 'Grade-A American Black Walnut',
        finish: 'Deep Espresso (PDF #16)',
        dimensions: '82"W x 86"L x 54"H (King Size)',
        price: 128000,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'crf-21',
        name: 'Artisan Solid Walnut Floating Nightstands (Pair)',
        category: 'Bedroom',
        wood: 'American Walnut & Soft-Close Drawers',
        finish: 'Deep Espresso',
        dimensions: '22"W x 16"D x 18"H (Set of 2)',
        price: 36000,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'CRF-2026-7901',
    date: '28 Sep 2026',
    total: 195000,
    status: 'Delivered',
    statusDescription: 'Delivered & Assembled at Residence',
    estimatedDelivery: 'Delivered on 08 Oct 2026',
    trackingStep: 6,
    deliveryAddress: 'Plot 42, Civil Lines Road, Near Raj Bhavan, Jaipur, Rajasthan 302006',
    recipient: { name: 'Rajat Singh', phone: '+91 99507 57127' },
    warrantySerial: 'CRF-WR-7901-LIVE-TEAK',
    items: [
      {
        id: 'crf-03',
        name: 'The Heritage 8-Seater Live Edge Slab Dining Table + 8 Chairs',
        category: 'Dining & Bar',
        wood: 'Single Monolithic Teak Slab (3.5" Thickness)',
        finish: 'Natural Clear Coat (PDF #03)',
        dimensions: '96"L x 42"W x 30"H',
        price: 195000,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
];

const TRACKING_STEPS = [
  { step: 1, title: 'Timber Selected', desc: '100% Grade-A Seasoned Teak / Walnut' },
  { step: 2, title: 'Kiln Dried', desc: 'Moisture reduced to 10-12% equilibrium' },
  { step: 3, title: 'Hand Joinery', desc: 'Mortise-tenon carving by Jaipur artisans' },
  { step: 4, title: 'Fine Finishing', desc: '7-coat hand-rubbed organic finish' },
  { step: 5, title: 'White-Glove Dispatch', desc: 'Dispatched from Chomu Tatiyawas Workshop' },
  { step: 6, title: 'Delivered & Assembled', desc: 'Installed in your room of choice' },
];

function AccountContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'orders';
  const [activeTab, setActiveTab] = useState<'orders' | 'custom' | 'warranty' | 'addresses' | 'profile'>(
    initialTab as any
  );

  const [orderFilter, setOrderFilter] = useState<'all' | 'in-production' | 'delivered'>('all');
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = useState<Order | null>(null);
  const [selectedWarrantyOrder, setSelectedWarrantyOrder] = useState<Order | null>(null);
  const [activeTrackingOrder, setActiveTrackingOrder] = useState<string | null>('CRF-2026-9042');

  // Address state
  const [addresses, setAddresses] = useState([
    {
      id: 'addr-1',
      type: 'Home (Default)',
      name: 'Rajat Singh',
      phone: '+91 99507 57127',
      addressLine: 'Plot 42, Civil Lines Road, Near Raj Bhavan',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302006',
      isDefault: true,
    },
    {
      id: 'addr-2',
      type: 'Atelier / Workshop Pickup',
      name: 'Craftora Jaipur Studio',
      phone: '+91 99507 57127',
      addressLine: 'Chomu Tatiyawas Toll Plaza, Sikar Road',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '303701',
      isDefault: false,
    },
  ]);

  // Profile state
  const [profile, setProfile] = useState({
    name: 'Rajat Singh',
    email: 'thecraftora@gmail.com',
    phone: '+91 99507 57127',
    city: 'Jaipur, Rajasthan',
    preferredFinish: 'Warm Honey Oak & Natural Teak',
    memberSince: 'October 2024',
    tier: 'Privilege Patron (15-Year Elite Member)',
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileSavedToast, setProfileSavedToast] = useState(false);

  const filteredOrders = ORDERS_DATA.filter((o) => {
    if (orderFilter === 'in-production') return o.status === 'In Production' || o.status === 'Dispatched';
    if (orderFilter === 'delivered') return o.status === 'Delivered';
    return true;
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingProfile(false);
    setProfileSavedToast(true);
    setTimeout(() => setProfileSavedToast(false), 3000);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-8 sm:py-12">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {/* Profile Toast Alert */}
        {profileSavedToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#2D5A27] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-[#86EFAC]" />
            <span className="text-sm font-medium">Profile details updated successfully!</span>
          </div>
        )}

        {/* Top Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#4A2E1E] to-[#7C4B27] text-white flex items-center justify-center font-serif text-3xl font-bold shadow-md">
                  RS
                </div>
                <span className="absolute -bottom-1 -right-1 bg-[#C29B38] text-white p-1.5 rounded-full shadow-sm" title="Verified Craftora Patron">
                  <ShieldCheck className="w-4 h-4" />
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#1F1B18] font-serif">
                    {profile.name}
                  </h1>
                  <Badge variant="gold" size="sm">
                    {profile.tier}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#5E5750]">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-[#7C4B27]" />
                    {profile.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-[#7C4B27]" />
                    {profile.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#7C4B27]" />
                    Jaipur Flagship Member
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/919950757127?text=Hello%20Surender%20Ji%2C%20I%20am%20calling%20from%20my%20Craftora%20Account%20regarding%20my%20furniture%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-full text-xs font-semibold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Atelier Concierge (+91 9950757127)</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveTab('profile')}
                className="inline-flex items-center justify-center gap-1.5 border border-[#E8E2D8] hover:border-[#7C4B27] bg-[#FAF8F5] px-4 py-2.5 rounded-full text-xs font-medium text-[#1F1B18] transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5 text-[#7C4B27]" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#F0ECE4]">
            <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#E8E2D8]/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E857C] block mb-0.5">
                Total Orders Placed
              </span>
              <span className="text-xl font-bold text-[#1F1B18]">3 Handcrafted Suites</span>
            </div>
            <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#E8E2D8]/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E857C] block mb-0.5">
                Active in Production
              </span>
              <span className="text-xl font-bold text-[#C29B38]">1 Suite (Stage 4)</span>
            </div>
            <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#E8E2D8]/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E857C] block mb-0.5">
                Warranty Protection
              </span>
              <span className="text-xl font-bold text-[#2D5A27]">15-Year Active Cover</span>
            </div>
            <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#E8E2D8]/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E857C] block mb-0.5">
                Provenance Workshop
              </span>
              <span className="text-xl font-bold text-[#7C4B27]">Chomu, Jaipur</span>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar border-b border-[#E8E2D8]">
          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'orders'
                ? 'bg-[#4A2E1E] text-white shadow-md'
                : 'bg-white text-[#5E5750] hover:text-[#1F1B18] border border-[#E8E2D8]'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>My Orders & Live Craft Tracker</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === 'orders' ? 'bg-white/20 text-white' : 'bg-[#FAF8F5] text-[#7C4B27] font-bold'}`}>
              {ORDERS_DATA.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('custom')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'custom'
                ? 'bg-[#4A2E1E] text-white shadow-md'
                : 'bg-white text-[#5E5750] hover:text-[#1F1B18] border border-[#E8E2D8]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C29B38]" />
            <span>3D Custom Studio Inquiries</span>
            <span className="bg-[#FAF8F5] text-[#7C4B27] px-2 py-0.5 rounded-full text-[10px] font-bold">1</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('warranty')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'warranty'
                ? 'bg-[#4A2E1E] text-white shadow-md'
                : 'bg-white text-[#5E5750] hover:text-[#1F1B18] border border-[#E8E2D8]'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#2D5A27]" />
            <span>15-Year Warranty Vault</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('addresses')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'addresses'
                ? 'bg-[#4A2E1E] text-white shadow-md'
                : 'bg-white text-[#5E5750] hover:text-[#1F1B18] border border-[#E8E2D8]'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Saved Jaipur Addresses</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'profile'
                ? 'bg-[#4A2E1E] text-white shadow-md'
                : 'bg-white text-[#5E5750] hover:text-[#1F1B18] border border-[#E8E2D8]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile & Security</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: MY ORDERS & LIVE ATELIER TRACKING                      */}
        {/* ============================================================== */}
        {activeTab === 'orders' && (
          <div className="space-y-8">
            {/* Filter Pills */}
            <div className="flex items-center justify-between flex-wrap gap-4 bg-white p-4 rounded-2xl border border-[#E8E2D8]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#8E857C] uppercase tracking-wider mr-2">Filter:</span>
                <button
                  type="button"
                  onClick={() => setOrderFilter('all')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    orderFilter === 'all'
                      ? 'bg-[#7C4B27] text-white'
                      : 'bg-[#FAF8F5] text-[#5E5750] hover:bg-[#F0ECE4]'
                  }`}
                >
                  All Orders ({ORDERS_DATA.length})
                </button>
                <button
                  type="button"
                  onClick={() => setOrderFilter('in-production')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    orderFilter === 'in-production'
                      ? 'bg-[#C29B38] text-white'
                      : 'bg-[#FAF8F5] text-[#5E5750] hover:bg-[#F0ECE4]'
                  }`}
                >
                  In Production (1)
                </button>
                <button
                  type="button"
                  onClick={() => setOrderFilter('delivered')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    orderFilter === 'delivered'
                      ? 'bg-[#2D5A27] text-white'
                      : 'bg-[#FAF8F5] text-[#5E5750] hover:bg-[#F0ECE4]'
                  }`}
                >
                  Delivered (2)
                </button>
              </div>

              <div className="text-xs text-[#5E5750] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#7C4B27]" />
                <span>Crafted at Chomu Tatiyawas Workshop, Jaipur</span>
              </div>
            </div>

            {/* Orders Cards List */}
            <div className="space-y-6">
              {filteredOrders.map((order) => {
                const isTrackingExpanded = activeTrackingOrder === order.id;

                return (
                  <div
                    key={order.id}
                    className="bg-white rounded-3xl border border-[#E8E2D8] shadow-sm overflow-hidden transition-all hover:border-[#C29B38]/60"
                  >
                    {/* Order Header */}
                    <div className="bg-[#FAF8F5] px-6 py-4 border-b border-[#E8E2D8] flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono font-bold text-sm text-[#1F1B18] bg-white px-3 py-1 rounded-lg border border-[#E8E2D8]">
                          {order.id}
                        </span>
                        <span className="text-xs text-[#5E5750]">
                          Placed on: <strong className="text-[#1F1B18]">{order.date}</strong>
                        </span>
                        <span className="text-[#8E857C]">•</span>
                        <span className="text-xs text-[#5E5750]">
                          Total: <strong className="text-[#1F1B18] text-sm">₹{order.total.toLocaleString('en-IN')}</strong>
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {order.status === 'In Production' && (
                          <span className="inline-flex items-center gap-1.5 bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                            <Clock className="w-3.5 h-3.5" />
                            {order.status}
                          </span>
                        )}
                        {order.status === 'Delivered' && (
                          <span className="inline-flex items-center gap-1.5 bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0] px-3 py-1 rounded-full text-xs font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {order.status}
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={() => setSelectedInvoiceOrder(order)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#7C4B27] hover:underline bg-white px-3 py-1 rounded-full border border-[#E8E2D8]"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>View Invoice</span>
                        </button>
                      </div>
                    </div>

                    {/* Order Body: Products Grid */}
                    <div className="p-6">
                      <div className="space-y-6">
                        {order.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#F0ECE4] last:border-b-0 last:pb-0"
                          >
                            <div className="flex items-center gap-4">
                              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8] shrink-0">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E857C] block">
                                  {item.category}
                                </span>
                                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F1B18] mt-0.5">
                                  {item.name}
                                </h3>

                                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                                  <span className="bg-[#FAF5EE] text-[#7C4B27] px-2.5 py-1 rounded-md font-medium border border-[#E8DFD4]">
                                    Timber: {item.wood}
                                  </span>
                                  <span className="bg-[#FAF8F5] text-[#5E5750] px-2.5 py-1 rounded-md font-medium border border-[#E8E2D8]">
                                    Finish: {item.finish}
                                  </span>
                                  <span className="bg-[#FAF8F5] text-[#5E5750] px-2.5 py-1 rounded-md font-medium border border-[#E8E2D8]">
                                    Dimensions: {item.dimensions}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="sm:text-right shrink-0">
                              <span className="text-xs text-[#8E857C] block">Qty: {item.qty}</span>
                              <span className="text-base sm:text-lg font-bold text-[#1F1B18] block mt-0.5">
                                ₹{item.price.toLocaleString('en-IN')}
                              </span>
                              <span className="text-[10px] text-[#2D5A27] font-semibold mt-1 block">
                                ✓ 15-Yr Warranty Certificate Included
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Live Workshop Handcrafting Timeline Tracker */}
                      <div className="mt-8 pt-6 border-t border-[#F0ECE4] bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-[#E8E2D8]">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8E857C]">
                              Live Atelier Craftsmanship Tracking
                            </span>
                            <p className="text-sm font-semibold text-[#1F1B18] mt-0.5 flex items-center gap-2">
                              <span>{order.statusDescription}</span>
                            </p>
                          </div>
                          <span className="text-xs text-[#7C4B27] font-bold bg-white px-3 py-1 rounded-full border border-[#E8E2D8]">
                            Est. Handover: {order.estimatedDelivery}
                          </span>
                        </div>

                        {/* Visual Step Bar */}
                        <div className="relative mt-6 mb-2">
                          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#E8E2D8] -translate-y-1/2 z-0" />
                          <div
                            className="hidden md:block absolute top-1/2 left-0 h-1 bg-[#7C4B27] -translate-y-1/2 z-0 transition-all duration-700"
                            style={{ width: `${((order.trackingStep - 1) / (TRACKING_STEPS.length - 1)) * 100}%` }}
                          />

                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 relative z-10">
                            {TRACKING_STEPS.map((step) => {
                              const isCompleted = step.step <= order.trackingStep;
                              const isCurrent = step.step === order.trackingStep;

                              return (
                                <div key={step.step} className="flex flex-col items-center text-center">
                                  <div
                                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs mb-2 transition-all ${
                                      isCurrent
                                        ? 'bg-[#C29B38] text-white ring-4 ring-[#C29B38]/20 scale-110 shadow-md'
                                        : isCompleted
                                        ? 'bg-[#7C4B27] text-white shadow-xs'
                                        : 'bg-white text-[#8E857C] border border-[#E8E2D8]'
                                    }`}
                                  >
                                    {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : step.step}
                                  </div>
                                  <span
                                    className={`text-xs font-bold leading-tight ${
                                      isCurrent
                                        ? 'text-[#C29B38]'
                                        : isCompleted
                                        ? 'text-[#1F1B18]'
                                        : 'text-[#8E857C]'
                                    }`}
                                  >
                                    {step.title}
                                  </span>
                                  <span className="text-[10px] text-[#8E857C] mt-0.5 leading-tight hidden lg:block">
                                    {step.desc}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Delivery Address & Actions */}
                        <div className="mt-6 pt-4 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5E5750]">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#7C4B27] shrink-0" />
                            <span>
                              Delivering to: <strong className="text-[#1F1B18]">{order.deliveryAddress}</strong>
                            </span>
                          </div>

                          <div className="flex items-center gap-2 w-full sm:w-auto">
                            <button
                              type="button"
                              onClick={() => setSelectedWarrantyOrder(order)}
                              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8E2D8] text-[#1F1B18] hover:border-[#7C4B27] font-medium transition-colors"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A27]" />
                              <span>Warranty Card</span>
                            </button>
                            <a
                              href={`https://wa.me/919950757127?text=Hello%20Surender%20Ji%2C%20please%20share%20status%20for%20my%20Order%20${order.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF5EE] text-[#7C4B27] hover:bg-[#F5EBDD] font-bold transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                              <span>Track on WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: 3D CUSTOM BESPOKE INQUIRIES                             */}
        {/* ============================================================== */}
        {activeTab === 'custom' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#F0ECE4]">
                <div>
                  <Badge variant="gold" size="sm" className="mb-2">
                    Craftora Bespoke Atelier
                  </Badge>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1B18]">
                    Custom Furniture & 3D Spatial Commissions
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5E5750] mt-1">
                    Bespoke dimensions, exotic solid timbers, and custom finishes commissioned directly with Surender Singh Rajora.
                  </p>
                </div>
                <Link
                  href="/custom-studio"
                  className="inline-flex items-center gap-2 bg-[#4A2E1E] hover:bg-[#382317] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-xs transition-colors shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Start New 3D Custom Commission</span>
                </Link>
              </div>

              {/* Active Custom Commission Card */}
              <div className="mt-6 bg-[#FAF8F5] rounded-2xl p-6 border border-[#E8E2D8]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#7C4B27] bg-[#FAF5EE] px-2.5 py-1 rounded-md border border-[#E8DFD4]">
                        CUSTOM-REQ-108
                      </span>
                      <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-[#FDE68A]">
                        3D Render Approved · Quotation Finalized
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#1F1B18]">
                      Monolithic 10-Seater Live Edge Slab Conference Table
                    </h3>

                    <p className="text-xs text-[#5E5750] leading-relaxed max-w-2xl">
                      <strong>Custom Specs:</strong> 120"L x 48"W x 30"H in single solid kiln-dried Teak slab with blackened matte steel trestle base and brushed brass wire concealment channels.
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-white px-3 py-1 rounded-lg border border-[#E8E2D8] font-medium text-[#1F1B18]">
                        Wood: Seasoned Burma Teak (Grade A)
                      </span>
                      <span className="bg-white px-3 py-1 rounded-lg border border-[#E8E2D8] font-medium text-[#1F1B18]">
                        Finish: Natural Oak Clear Coat (PDF #03)
                      </span>
                      <span className="bg-white px-3 py-1 rounded-lg border border-[#E8E2D8] font-medium text-[#1F1B18]">
                        Est. Value: ₹2,45,000
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                    <a
                      href="https://wa.me/919950757127?text=Hello%20Surender%20Ji%2C%20regarding%20my%20Custom%20Furniture%20Request%20CUSTOM-REQ-108."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-xs hover:bg-[#20bd5a] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat with Founder</span>
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-1.5 bg-white border border-[#E8E2D8] text-[#1F1B18] px-5 py-2.5 rounded-full text-xs font-medium hover:border-[#7C4B27] transition-colors"
                    >
                      <span>Visit Jaipur Workshop</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: 15-YEAR WARRANTY & TIMBER CERTIFICATES                  */}
        {/* ============================================================== */}
        {activeTab === 'warranty' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm">
              <div className="max-w-3xl mb-8">
                <Badge variant="gold" size="sm" className="mb-2">
                  Craftora Jaipur Seal of Authenticity
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1B18]">
                  15-Year Solid Wood Structural Warranty
                </h2>
                <p className="text-sm text-[#5E5750] mt-2 leading-relaxed">
                  Every piece crafted at our Chomu Tatiyawas Workshop is covered by an unconditional 15-year guarantee against borer infestation, termite damage, timber splitting, and structural joint looseness.
                </p>
              </div>

              {/* Warranty Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ORDERS_DATA.map((order) => (
                  <div
                    key={order.id}
                    className="p-6 rounded-2xl bg-gradient-to-br from-[#FAF8F5] to-white border-2 border-[#E8E2D8] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 bg-[#C29B38] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider">
                      CERTIFIED SOLID HARDWOOD
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] border border-[#E8DFD4] flex items-center justify-center text-[#7C4B27]">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-[#7C4B27] block">
                          {order.warrantySerial}
                        </span>
                        <span className="text-xs text-[#8E857C]">Order Ref: {order.id}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-xs text-[#5E5750]">
                      <div className="flex justify-between border-b border-[#F0ECE4] pb-1.5">
                        <span>Items Covered:</span>
                        <strong className="text-[#1F1B18]">{order.items.map((i) => i.name).join(', ')}</strong>
                      </div>
                      <div className="flex justify-between border-b border-[#F0ECE4] pb-1.5">
                        <span>Timber Seasoning:</span>
                        <strong className="text-[#1F1B18]">Kiln Dried to 10-12% EMC</strong>
                      </div>
                      <div className="flex justify-between border-b border-[#F0ECE4] pb-1.5">
                        <span>Warranty Expiry:</span>
                        <strong className="text-[#2D5A27]">October 2041 (Active)</strong>
                      </div>
                      <div className="flex justify-between border-b border-[#F0ECE4] pb-1.5">
                        <span>Registered Atelier:</span>
                        <strong className="text-[#1F1B18]">Chomu Tatiyawas Plaza, Jaipur</strong>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedWarrantyOrder(order)}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#4A2E1E] hover:bg-[#382317] text-white py-2 px-4 rounded-xl text-xs font-semibold shadow-xs transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </button>
                      <a
                        href="tel:+919950757127"
                        className="inline-flex items-center justify-center gap-1.5 bg-white border border-[#E8E2D8] hover:border-[#7C4B27] text-[#1F1B18] py-2 px-4 rounded-xl text-xs font-medium transition-colors"
                        title="Warranty Claims Support"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#7C4B27]" />
                        <span>Claim Care</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: SAVED ADDRESSES                                         */}
        {/* ============================================================== */}
        {activeTab === 'addresses' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#F0ECE4]">
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1B18]">
                    Saved Shipping Addresses
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5E5750] mt-1">
                    White-Glove direct delivery addresses for handcrafted furniture assembly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => alert('New Jaipur Address modal opened')}
                  className="inline-flex items-center gap-2 bg-[#4A2E1E] hover:bg-[#382317] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-xs transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Address</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {addresses.map((addr) => (
                  <div
                    key={addr.id}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      addr.isDefault
                        ? 'border-[#7C4B27] bg-[#FAF8F5]'
                        : 'border-[#E8E2D8] bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#7C4B27]">
                        {addr.type}
                      </span>
                      {addr.isDefault && (
                        <span className="bg-[#7C4B27] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Default
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-base text-[#1F1B18]">{addr.name}</h3>
                    <p className="text-xs text-[#5E5750] mt-1 leading-relaxed">
                      {addr.addressLine}, {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
                    </p>
                    <p className="text-xs text-[#5E5750] mt-1">
                      Phone: <strong className="text-[#1F1B18]">{addr.phone}</strong>
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#E8E2D8] flex items-center justify-between">
                      <span className="text-[11px] text-[#2D5A27] font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Free White-Glove Delivery
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="p-1.5 text-[#5E5750] hover:text-[#7C4B27] transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          className="p-1.5 text-[#5E5750] hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 5: PROFILE & SECURITY                                      */}
        {/* ============================================================== */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm">
              <div className="pb-6 border-b border-[#F0ECE4]">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1B18]">
                  Personal Profile & Atelier Preferences
                </h2>
                <p className="text-xs sm:text-sm text-[#5E5750] mt-1">
                  Manage your personal contact details, verified delivery phone, and custom wood finish preferences.
                </p>
              </div>

              <form onSubmit={handleSaveProfile} className="mt-8 max-w-2xl space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#1F1B18] uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E2D8] bg-[#FAF8F5] text-sm text-[#1F1B18] focus:outline-none focus:border-[#7C4B27]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F1B18] uppercase tracking-wider mb-2">
                      Direct WhatsApp Phone
                    </label>
                    <input
                      type="text"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E2D8] bg-[#FAF8F5] text-sm text-[#1F1B18] focus:outline-none focus:border-[#7C4B27]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F1B18] uppercase tracking-wider mb-2">
                    Official Email
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E2D8] bg-[#FAF8F5] text-sm text-[#1F1B18] focus:outline-none focus:border-[#7C4B27]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#1F1B18] uppercase tracking-wider mb-2">
                      Home Base City
                    </label>
                    <input
                      type="text"
                      value={profile.city}
                      onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E2D8] bg-[#FAF8F5] text-sm text-[#1F1B18] focus:outline-none focus:border-[#7C4B27]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F1B18] uppercase tracking-wider mb-2">
                      Preferred Solid Wood Finishes
                    </label>
                    <input
                      type="text"
                      value={profile.preferredFinish}
                      onChange={(e) => setProfile({ ...profile, preferredFinish: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E2D8] bg-[#FAF8F5] text-sm text-[#1F1B18] focus:outline-none focus:border-[#7C4B27]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    type="submit"
                    className="bg-[#4A2E1E] hover:bg-[#382317] text-white px-6 py-3 rounded-full text-xs font-bold shadow-sm transition-colors"
                  >
                    Save Changes
                  </button>
                  <span className="text-xs text-[#8E857C]">
                    Member since {profile.memberSince}
                  </span>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>

      {/* ============================================================== */}
      {/* MODAL: VIEW TAX INVOICE                                        */}
      {/* ============================================================== */}
      {selectedInvoiceOrder && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#E8E2D8] shadow-2xl relative animate-scale-in">
            <button
              type="button"
              onClick={() => setSelectedInvoiceOrder(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F5] text-[#5E5750] hover:text-[#1F1B18]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Invoice Header */}
            <div className="flex items-start justify-between border-b border-[#E8E2D8] pb-6">
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#1F1B18]">
                  CRAFTORA<span className="text-[#C29B38]">.</span>
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[#7C4B27] font-semibold">
                  Solid Wood Atelier · Jaipur Flagship
                </span>
                <p className="text-[11px] text-[#5E5750] mt-1 max-w-xs">
                  Chomu Tatiyawas Toll Plaza, Sikar Road, Jaipur, Rajasthan 303701<br />
                  Owner: Surender Singh Rajora · Phone: +91 9950757127
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E857C] block">
                  Tax Invoice
                </span>
                <span className="font-mono text-sm font-bold text-[#1F1B18] block mt-0.5">
                  INV-{selectedInvoiceOrder.id}
                </span>
                <span className="text-xs text-[#5E5750] block mt-1">Date: {selectedInvoiceOrder.date}</span>
              </div>
            </div>

            {/* Bill To */}
            <div className="py-4 border-b border-[#F0ECE4] text-xs">
              <span className="font-bold uppercase tracking-wider text-[#8E857C] block mb-1">
                Billed & Delivered To:
              </span>
              <p className="font-bold text-[#1F1B18] text-sm">{selectedInvoiceOrder.recipient.name}</p>
              <p className="text-[#5E5750]">{selectedInvoiceOrder.deliveryAddress}</p>
              <p className="text-[#5E5750]">Phone: {selectedInvoiceOrder.recipient.phone}</p>
            </div>

            {/* Invoice Items Table */}
            <div className="py-4">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E8E2D8] text-[#8E857C] uppercase font-bold text-[10px]">
                    <th className="py-2">Item Description</th>
                    <th className="py-2">Wood / Finish</th>
                    <th className="py-2 text-center">Qty</th>
                    <th className="py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0ECE4]">
                  {selectedInvoiceOrder.items.map((it) => (
                    <tr key={it.id}>
                      <td className="py-3 font-semibold text-[#1F1B18]">
                        {it.name}
                        <span className="block text-[10px] text-[#8E857C] font-normal">{it.dimensions}</span>
                      </td>
                      <td className="py-3 text-[#5E5750]">
                        {it.wood}
                        <span className="block text-[10px] text-[#7C4B27]">{it.finish}</span>
                      </td>
                      <td className="py-3 text-center text-[#1F1B18] font-bold">{it.qty}</td>
                      <td className="py-3 text-right font-bold text-[#1F1B18]">₹{it.price.toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Invoice Total Calculation */}
            <div className="pt-4 border-t border-[#E8E2D8] space-y-2 text-xs">
              <div className="flex justify-between text-[#5E5750]">
                <span>Subtotal:</span>
                <span>₹{(selectedInvoiceOrder.total / 1.18).toFixed(0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#5E5750]">
                <span>Integrated GST (18%):</span>
                <span>₹{(selectedInvoiceOrder.total - selectedInvoiceOrder.total / 1.18).toFixed(0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#2D5A27] font-semibold">
                <span>Jaipur White-Glove Delivery & Installation:</span>
                <span>₹0 (Complimentary)</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#1F1B18] pt-2 border-t border-[#E8E2D8]">
                <span>Grand Total (Paid in Full):</span>
                <span>₹{selectedInvoiceOrder.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
              <span className="text-[10px] text-[#8E857C]">
                Authorized Signatory: Surender Singh Rajora · Craftora Jaipur
              </span>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 bg-[#4A2E1E] text-white px-4 py-2 rounded-xl text-xs font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: VIEW 15-YEAR WARRANTY CERTIFICATE                       */}
      {/* ============================================================== */}
      {selectedWarrantyOrder && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] rounded-3xl max-w-xl w-full p-8 border-4 border-[#C29B38] shadow-2xl relative animate-scale-in text-center">
            <button
              type="button"
              onClick={() => setSelectedWarrantyOrder(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#5E5750] hover:text-[#1F1B18]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 mx-auto rounded-full bg-[#C29B38] text-white flex items-center justify-center mb-4 shadow-md">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#7C4B27] font-bold block">
              Official Certificate of Provenance
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#1F1B18] mt-1">
              15-Year Solid Wood Guarantee
            </h2>
            <p className="text-xs text-[#8E857C] mt-1">
              Serial No: <strong className="font-mono text-[#7C4B27]">{selectedWarrantyOrder.warrantySerial}</strong>
            </p>

            <div className="bg-white p-5 rounded-2xl border border-[#E8E2D8] text-left text-xs text-[#5E5750] mt-6 space-y-2">
              <p>
                <strong>Issued To:</strong> {selectedWarrantyOrder.recipient.name}
              </p>
              <p>
                <strong>Furniture Suite:</strong> {selectedWarrantyOrder.items.map((i) => i.name).join(' & ')}
              </p>
              <p>
                <strong>Timber Quality:</strong> 100% Seasoned Kiln-Dried Hardwood (Burma Teak / American Walnut).
              </p>
              <p>
                <strong>Warranty Scope:</strong> Guaranteed against borer attack, fungal infestation, warping, and structural joint failure until October 2041.
              </p>
              <p>
                <strong>Crafted at:</strong> Craftora Flagship Atelier, Chomu Tatiyawas Toll Plaza, Jaipur.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs pt-4 border-t border-[#E8E2D8]">
              <div className="text-left">
                <span className="block font-serif font-bold text-[#1F1B18]">Surender Singh Rajora</span>
                <span className="text-[10px] text-[#8E857C]">Founder & Master Craftsman, Jaipur</span>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 bg-[#7C4B27] text-white px-4 py-2 rounded-xl font-semibold text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Card</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center text-sm text-[#8E857C]">Loading Account Portal...</div>}>
      <AccountContent />
    </Suspense>
  );
}
