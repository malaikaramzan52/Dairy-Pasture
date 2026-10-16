import React, { useState } from 'react';
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Droplets,
  Droplet,
  Leaf,
  Filter,
  PackageCheck,
  HeartHandshake,
  Layers,
  Milk,
  Boxes,
  ClipboardCheck,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Award
} from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import BotanicalCornerLeaves from '../components/BotanicalCornerLeaves';
import Counter from '../components/Counter';

export default function Home({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);

  const homeFaqs = [
    {
      q: 'Where is your farm located and how are the animals cared for?',
      a: 'Our farm is situated on the outskirts of Lahore, surrounded by open greenery. We follow humane, ethical dairy practices — providing our cows and goats with spacious, clean shelters, balanced natural fodder, regular veterinary checkups, and stress-free living environments.'
    },
    {
      q: 'How do you guarantee milk purity and hygiene?',
      a: 'Purity is at the heart of everything we do. Milk is harvested using clean teat preparation and sanitized stainless steel containers. It undergoes sanitary filtration to remove natural physical micro-sediment, followed by rapid chilling below 4°C to prevent bacterial growth — with zero preservatives, chemicals, or dilution.'
    },
    {
      q: 'Do you offer both fresh cow milk and goat milk?',
      a: 'Yes! We produce both whole fresh cow milk and premium gentle goat milk. Both varieties are collected fresh daily on our farm and packed in food-safe, hygienic sealed containers to preserve natural flavor and essential nutrients.'
    },
    {
      q: 'What is the shelf life and proper home storage method for your milk?',
      a: 'Because our milk is pure and farm-fresh without chemical preservatives, it should be kept refrigerated continuously between 2°C and 4°C. We recommend consuming it within 2 to 3 days of opening and keeping the packaging tightly sealed.'
    },
    {
      q: 'Can customers get in touch directly or visit the farm?',
      a: 'Absolutely. We believe in complete farm transparency. You can contact our Lahore team directly via phone/WhatsApp at 0301-5099459 or use our contact form to inquire about daily batches, deliveries, or farm inquiries.'
    }
  ];

  const farmProcessSteps = [
    {
      step: '01',
      title: 'Milk Collection',
      desc: 'Collected under clean, hygienic conditions from healthy animals.',
      icon: <Milk className="w-5 h-5 text-[#236B45]" />,
      image: '/images/milking.jpg'
    },
    {
      step: '02',
      title: 'Quality Checks',
      desc: 'Regular testing for freshness, purity and safety.',
      icon: <ClipboardCheck className="w-5 h-5 text-[#236B45]" />,
      image: '/images/Img-1.jpg'
    },
    {
      step: '03',
      title: 'Filtration & Processing',
      desc: 'Gentle filtration and pasteurization to retain natural goodness.',
      icon: <Droplet className="w-5 h-5 text-[#236B45]" />,
      image: '/images/Img-7.jpeg'
    },
    {
      step: '04',
      title: 'Hygienic Packaging',
      desc: 'Sealed, food-grade packing to ensure freshness and safety.',
      icon: <Boxes className="w-5 h-5 text-[#236B45]" />,
      image: '/images/packets.png'
    }
  ];

  const demoProducts = [
    {
      title: 'Fresh Cow Milk',
      badge: 'Farm Fresh',
      desc: 'Wholesome, naturally rich milk from healthy dairy cows raised with proper nutrition and clean pasture environment.',
      packaging: 'Sealed Hygienic Pouches / Packs',
      image: '/images/packets.png'
    },
    {
      title: 'Fresh Goat Milk',
      badge: 'Farm Fresh',
      desc: 'Gentle, naturally homogenized goat milk from carefully tended dairy goats. Mild flavor and high nutritional profile.',
      packaging: 'Hygienic Sealed Containers',
      image: '/images/goats.png'
    }
  ];

  return (
    <div className="w-full bg-[#F8FAF7]">
      {/* SECTION 1: HERO BANNER WITH BACKGROUND VIDEO */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 border-b border-[#DCE5DD]">
        {/* Background Video (Muted / Without Audio, Autoplay, Loop) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Dairy-Farm.mp4" type="video/mp4" />
        </video>

        {/* Overlay with Opacity for Clear Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07190F]/90 via-[#07190F]/75 to-[#07190F]/50 sm:to-[#07190F]/40" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#5EE59D] text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#5EE59D]" />
              <span>FRESHNESS ROOTED IN NATURE</span>
            </div>

            <h1 className="font-heading text-[34px] sm:text-[46px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.15] drop-shadow-sm">
              From Our Farm to Your Family.
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#E0EBE2] leading-[1.7] max-w-xl font-normal drop-shadow-sm">
              Discover our approach to dairy farming, fresh milk production, and careful processing — bringing farm freshness closer to your everyday life in Lahore.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('farm')}
                className="bg-[#236B45] hover:bg-[#1b5336] text-white text-[15px] font-semibold px-7 py-3.5 rounded-[8px] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore Our Farm</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('process')}
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/80 text-[15px] font-semibold px-7 py-3.5 rounded-[8px] transition-all duration-200 shadow-sm backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discover Our Process</span>
              </button>
            </div>

            {/* Micro Trust Points */}
            <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-4 text-left max-w-xl">
              <div>
                <span className="block font-heading font-bold text-lg sm:text-xl text-white">Lahore</span>
                <span className="text-xs text-[#C5D9C8]">Local Farming</span>
              </div>
              <div>
                <span className="block font-heading font-bold text-lg sm:text-xl text-white">Cows & Goats</span>
                <span className="text-xs text-[#C5D9C8]">Healthy Care</span>
              </div>
              <div>
                <span className="block font-heading font-bold text-lg sm:text-xl text-white">Hygienic</span>
                <span className="text-xs text-[#C5D9C8]">Clean Packaging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BRAND INTRODUCTION */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-[#EBF4ED] via-white to-[#F4F9F5] border-b border-[#DCE5DD]">
        {/* Top-Right Decorative Botanical Leaves (CTA Banner Style) */}
        <BotanicalCornerLeaves position="top-right" />

        {/* Bottom-Left Decorative Botanical Leaves (CTA Banner Style) */}
        <BotanicalCornerLeaves position="bottom-left" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Farm Image Side */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="overflow-hidden rounded-[18px] border border-[#DCE5DD] shadow-lg aspect-[4/3] bg-white">
                  <img
                    src="/images/Img-1.jpg"
                    alt="Dairy cows feeding at Dairy & Pasture farm mangers"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Info Badge on Image */}
                <div className="absolute -bottom-5 -left-3 sm:left-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-[14px] border border-[#DCE5DD] shadow-xl flex items-center gap-3 max-w-[280px] sm:max-w-none">
                  <div className="w-10 h-10 rounded-full bg-[#153F2C] flex items-center justify-center shrink-0 shadow-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[#5EE59D]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#153F2C]">100% Pure & Fresh</span>
                    <span className="block text-[11px] text-[#657168]">Responsible animal welfare & hygienic care</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-block text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3.5 py-1.5 rounded-full border border-[#236B45]/20">
                WELCOME TO DAIRY & PASTURE
              </div>

              <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#153F2C] leading-snug tracking-tight">
                Rooted in the Farm. Focused on Quality.
              </h2>

              <p className="text-[16px] text-[#657168] leading-[1.7]">
                At Dairy & Pasture, our philosophy is simple: good milk comes from happy, well-tended animals and responsible dairy management. Situated in Lahore, we prioritize clean living spaces, balanced natural nutrition, and uncompromised hygiene at every stage of milk handling.
              </p>

              {/* Three Highlights */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#E9F3E9] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#236B45]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-[17px] text-[#153F2C]">
                      Responsible Animal Care
                    </h3>
                    <p className="text-sm text-[#657168]">
                      Providing spacious pastures, clean shelter, balanced fodder, and dedicated veterinary attention for our cows and goats.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#E9F3E9] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#236B45]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-[17px] text-[#153F2C]">
                      Careful Milk Handling
                    </h3>
                    <p className="text-sm text-[#657168]">
                      Milking into sanitized, food-grade containers immediately chilled to preserve freshness and reduce microbial growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#E9F3E9] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#236B45]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-[17px] text-[#153F2C]">
                      Thoughtful Dairy Processing
                    </h3>
                    <p className="text-sm text-[#657168]">
                      Precision filtration, controlled heat treatment protocols, and hygienic sealing to deliver dairy you can trust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-[#153F2C] hover:bg-[#236B45] text-white text-[15px] font-semibold px-7 py-3.5 rounded-[8px] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer group"
                >
                  <span>Explore Our Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR FARM PREVIEW */}
      <section className="py-20 lg:py-24 bg-[#F8FAF7] border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
              ANIMAL WELFARE & ENVIRONMENT
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Meet Our Farm
            </h2>
            <p className="text-[16px] text-[#657168]">
              Explore the animals and environment behind our dairy journey. Clean facilities, open movement, and gentle care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Our Cows */}
            <div className="bg-white rounded-[16px] border border-[#DCE5DD] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="/images/cows-card.jpg"
                  alt="Healthy dairy cows at Dairy & Pasture farm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#153F2C] font-semibold text-xs px-3 py-1 rounded-full shadow-sm">
                  Cattle Management
                </span>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-semibold text-2xl text-[#153F2C] mb-2">
                    Our Cows
                  </h3>
                  <p className="text-sm text-[#657168] leading-relaxed">
                    Raised with regular access to open pasture, clean drinking water, and high-nutrient green silage. Our cows enjoy humane handling and stress-free milking routines that directly support high-quality fresh milk.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => onNavigate('farm')}
                    className="w-full sm:w-auto bg-[#E9F3E9] hover:bg-[#236B45] text-[#236B45] hover:text-white font-semibold text-[14px] px-5 py-2.5 rounded-[8px] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Explore the Farm</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Our Goats */}
            <div className="bg-white rounded-[16px] border border-[#DCE5DD] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="/images/goats-card.jpg"
                  alt="Healthy dairy goats at Dairy & Pasture farm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#153F2C] font-semibold text-xs px-3 py-1 rounded-full shadow-sm">
                  Caprine Care
                </span>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-semibold text-2xl text-[#153F2C] mb-2">
                    Our Goats
                  </h3>
                  <p className="text-sm text-[#657168] leading-relaxed">
                    Naturally active and curious, our dairy goats are provided dry, well-ventilated housing and carefully formulated forage. Their mild, easily digestible milk is harvested with precision sanitary protocols.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => onNavigate('farm')}
                    className="w-full sm:w-auto bg-[#E9F3E9] hover:bg-[#236B45] text-[#236B45] hover:text-white font-semibold text-[14px] px-5 py-2.5 rounded-[8px] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Explore the Farm</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FROM FARM TO PROCESS */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-[#DCE5DD]">
        {/* Background Image with Muted Tone / Dulness */}
        <img
          src="/images/Img-14.jpg"
          alt="Dairy & Pasture pasture grazing"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.65] contrast-[0.9]"
        />

        {/* Deeper Muted Gradient Overlay for Increased Dulness and High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04130A]/98 via-[#061A0F]/92 to-[#04130A]/88" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Heading, Subtitle, CTA */}
            <div className="lg:col-span-4 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#5EE59D] text-xs font-semibold tracking-wider uppercase border border-white/20">
                <Layers className="w-3.5 h-3.5 text-[#5EE59D]" />
                <span>TRANSPARENT WORKFLOW</span>
              </div>

              <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[44px] font-bold text-white tracking-tight leading-[1.15] drop-shadow-sm">
                Carefully Handled <br className="hidden sm:inline" />
                at Every Step
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#E0EBE2] leading-relaxed max-w-sm drop-shadow-sm font-normal">
                From morning milking to chilled storage and hygienic packing, our process ensures purity, temperature control, and physical filtration.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('process')}
                  className="bg-[#236B45] hover:bg-[#1b5336] text-white font-semibold text-[15px] px-7 py-3.5 rounded-[8px] transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer group"
                >
                  <span>Explore Our Process</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: 4 Step Cards Sequence with Arrows */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex xl:items-stretch gap-4 xl:gap-2.5">
                {farmProcessSteps.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex-1 bg-white/95 backdrop-blur-md border border-white/80 rounded-[18px] p-4 flex flex-col justify-between shadow-xl hover:border-[#236B45] hover:shadow-2xl transition-all group">
                      <div>
                        {/* Number and Outline Icon */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-heading font-bold text-xl text-[#153F2C]">
                            {item.step}
                          </span>
                          <div className="w-7 h-7 flex items-center justify-center text-[#236B45]">
                            {item.icon}
                          </div>
                        </div>

                        {/* Image */}
                        <div className="rounded-[12px] overflow-hidden aspect-[4/3] mb-3 bg-white border border-[#E3EBE4] flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className={`w-full h-full ${item.step === '04' ? 'object-contain p-2' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                          />
                        </div>

                        {/* Title */}
                        <h3 className="font-heading font-bold text-[15px] text-[#153F2C] mb-1.5 leading-snug">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-[#657168] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Arrow between cards on desktop */}
                    {idx < farmProcessSteps.length - 1 && (
                      <div className="hidden xl:flex items-center justify-center text-[#5EE59D] px-0.5 shrink-0 drop-shadow-sm">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRODUCT HIGHLIGHTS (DEMO CONTENT INSIDE HOME) */}
      <section className="py-20 lg:py-24 bg-[#F8FAF7] border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
              DAIRY SHOWCASE PREVIEW
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Discover Our Dairy Products
            </h2>
            <p className="text-[16px] text-[#657168]">
              Demonstrating our core dairy A Glimpse of Our Dairy Worldline. All products follow identical hygienic collection, sanitary filtration, and food-grade packaging standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 mb-12">
            {demoProducts.map((prod, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] border border-[#DCE5DD] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-[#F8FAF7] flex items-center justify-center">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className={`w-full h-full ${prod.image.includes('packets.png') ? 'object-contain p-2 bg-white' : 'object-cover'} hover:scale-105 transition-transform duration-500`}
                  />
                  <span className="absolute top-3 left-3 bg-[#153F2C] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {prod.badge}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-[#153F2C] mb-2">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-[#657168] leading-relaxed mb-3">
                      {prod.desc}
                    </p>
                    <div className="text-xs font-medium text-[#236B45] bg-[#E9F3E9] px-2.5 py-1.5 rounded-md inline-block">
                      📦 {prod.packaging}
                    </div>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('process')}
                      className="w-full text-center text-xs font-semibold text-[#236B45] hover:text-[#153F2C] py-2 border border-[#DCE5DD] hover:border-[#236B45] rounded-md transition-colors cursor-pointer"
                    >
                      View in Process Showcase &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('process')}
              className="bg-[#236B45] hover:bg-[#153F2C] text-white font-semibold text-[15px] px-8 py-3.5 rounded-[8px] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Explore Our Process & Full Product Range</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5B: OUR IMPACT IN NUMBERS (FULL-WIDTH COUNTER BANNER) */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-[#DCE5DD]">
        {/* Background Image Img-12.jpg */}
        <img
          src="/images/Img-12.jpg"
          alt="Dairy & Pasture farm landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Increased Deep Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#062013]/94 via-[#0A331D]/84 to-[#062013]/94" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#5EE59D] text-xs font-semibold tracking-wider uppercase border border-white/15 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#5EE59D]" />
              <span>OUR IMPACT IN NUMBERS</span>
            </div>

            <h2 className="font-heading text-[28px] sm:text-[38px] lg:text-[42px] font-bold text-white tracking-tight leading-tight">
              Measurable Purity & Everyday Dedication
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#D3E4D7] leading-relaxed font-normal">
              From open pasture care and natural green feeding to hygienic cold-chain handling, every milestone reflects our promise to Lahore families.
            </p>
          </div>

          {/* 4 Separate Impact Cards with Reduced Number Font Size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Card 1: Healthy Animals */}
            <div className="bg-white/95 backdrop-blur-md rounded-[22px] sm:rounded-[26px] border border-white/90 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left group">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[16px] bg-[#E9F3E9] text-[#236B45] flex items-center justify-center border border-[#236B45]/20 shadow-xs mb-4 group-hover:scale-105 group-hover:bg-[#236B45] group-hover:text-white transition-all duration-300">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7 sm:w-8 sm:h-8"
                >
                  <path d="M7 11 C7 7 11 5 16 5 C21 5 25 7 25 11 C25 14 23 16 23 18 L23 23 C23 25 21 27 19 27 L13 27 C11 27 9 25 9 23 L9 18 C9 16 7 14 7 11 Z" />
                  <path d="M5 9 L2 11 L5 13" />
                  <path d="M27 9 L30 11 L27 13" />
                  <circle cx="12" cy="13" r="1.5" fill="currentColor" stroke="none" />
                  <circle cx="20" cy="13" r="1.5" fill="currentColor" stroke="none" />
                  <path d="M12 21 C14 22.5 18 22.5 20 21" />
                </svg>
              </div>
              <div className="font-heading font-extrabold text-[26px] sm:text-[30px] lg:text-[34px] text-[#153F2C] tracking-tight leading-none">
                <Counter end={500} suffix="+" />
              </div>
              <h3 className="font-heading font-bold text-[16px] sm:text-[17px] text-[#153F2C] mt-2">
                Healthy Animals
              </h3>
              <p className="text-xs sm:text-[13px] text-[#657168] leading-relaxed mt-1 font-normal">
                Cows & dairy goats thriving in spacious open-air green paddocks.
              </p>
            </div>

            {/* Card 2: Natural Feed */}
            <div className="bg-white/95 backdrop-blur-md rounded-[22px] sm:rounded-[26px] border border-white/90 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left group">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[16px] bg-[#E9F3E9] text-[#236B45] flex items-center justify-center border border-[#236B45]/20 shadow-xs mb-4 group-hover:scale-105 group-hover:bg-[#236B45] group-hover:text-white transition-all duration-300">
                <Leaf className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div className="font-heading font-extrabold text-[26px] sm:text-[30px] lg:text-[34px] text-[#153F2C] tracking-tight leading-none">
                <Counter end={100} suffix="%" />
              </div>
              <h3 className="font-heading font-bold text-[16px] sm:text-[17px] text-[#153F2C] mt-2">
                Natural Green Feed
              </h3>
              <p className="text-xs sm:text-[13px] text-[#657168] leading-relaxed mt-1 font-normal">
                Nutritious seasonal green forage with strictly zero growth hormones.
              </p>
            </div>

            {/* Card 3: Daily Fresh Yield */}
            <div className="bg-white/95 backdrop-blur-md rounded-[22px] sm:rounded-[26px] border border-white/90 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left group">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[16px] bg-[#E9F3E9] text-[#236B45] flex items-center justify-center border border-[#236B45]/20 shadow-xs mb-4 group-hover:scale-105 group-hover:bg-[#236B45] group-hover:text-white transition-all duration-300">
                <Droplets className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div className="font-heading font-extrabold text-[26px] sm:text-[30px] lg:text-[34px] text-[#153F2C] tracking-tight leading-none">
                <Counter end={1200} suffix="+ L" />
              </div>
              <h3 className="font-heading font-bold text-[16px] sm:text-[17px] text-[#153F2C] mt-2">
                Daily Fresh Yield
              </h3>
              <p className="text-xs sm:text-[13px] text-[#657168] leading-relaxed mt-1 font-normal">
                Filtered, rapid-chilled, and packaged fresh morning & evening.
              </p>
            </div>

            {/* Card 4: Years of Trust */}
            <div className="bg-white/95 backdrop-blur-md rounded-[22px] sm:rounded-[26px] border border-white/90 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left group">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[16px] bg-[#E9F3E9] text-[#236B45] flex items-center justify-center border border-[#236B45]/20 shadow-xs mb-4 group-hover:scale-105 group-hover:bg-[#236B45] group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div className="font-heading font-extrabold text-[26px] sm:text-[30px] lg:text-[34px] text-[#153F2C] tracking-tight leading-none">
                <Counter end={5} suffix="+ Years" />
              </div>
              <h3 className="font-heading font-bold text-[16px] sm:text-[17px] text-[#153F2C] mt-2">
                Years of Trust
              </h3>
              <p className="text-xs sm:text-[13px] text-[#657168] leading-relaxed mt-1 font-normal">
                Dedicated doorstep delivery and purity trusted across Lahore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR COMMITMENT */}
      <section className="py-20 lg:py-24 bg-[#E9F3E9] border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#236B45]">
              OUR ETHICAL STANDARDS
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Care, Quality, and Attention to Detail
            </h2>
            <p className="text-[16px] text-[#657168]">
              Operating with genuine respect for our livestock, scientific clarity regarding food safety, and straightforward transparency with Lahore consumers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[16px] border border-[#236B45]/15 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#236B45] text-white flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-[#153F2C]">
                Animal Care
              </h3>
              <p className="text-sm text-[#657168] leading-relaxed">
                Healthy dairy animals require peaceful living conditions, nutritional fodder, continuous clean water, and prompt veterinary care whenever needed.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[16px] border border-[#236B45]/15 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#236B45] text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-[#153F2C]">
                Careful Milk Handling
              </h3>
              <p className="text-sm text-[#657168] leading-relaxed">
                Every liter is collected in sanitized vessels, rapidly chilled, and filtered to remove natural physical debris while retaining wholesome richness.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[16px] border border-[#236B45]/15 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#236B45] text-white flex items-center justify-center mb-4">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-[#153F2C]">
                Thoughtful Packaging
              </h3>
              <p className="text-sm text-[#657168] leading-relaxed">
                Utilizing sealed, food-safe containers to prevent airborne contamination and facilitate uninterrupted cold-chain transport to households.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FARM GALLERY PREVIEW */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
                VISUAL IMPRESSION
              </span>
              <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
                A Glimpse of Our Dairy World
              </h2>
              <p className="text-[16px] text-[#657168]">
                Real moments from our fields, livestock pens, milking bays, and handling equipment.
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('farm')}
                className="bg-[#236B45] hover:bg-[#153F2C] text-white font-semibold text-[15px] px-6 py-3 rounded-[8px] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Our Farm</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Equal-Height Balanced Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
            {/* Left Column: Full-Height Featured Farm Landscape */}
            <div className="overflow-hidden rounded-[16px] border border-[#DCE5DD] relative group min-h-[340px] lg:min-h-full">
              <img
                src="/images/farm-pasture-landscape.jpg"
                alt="Panoramic green pasture at Dairy & Pasture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs text-white/80 uppercase font-semibold tracking-wider block mb-1">
                    Lush Pastures
                  </span>
                  <span className="font-heading font-semibold text-xl text-white block">
                    Natural Pasture-Raised Livestock
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 Balanced Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="overflow-hidden rounded-[16px] border border-[#DCE5DD] aspect-square relative group">
                <img
                  src="/images/cows-card.jpg"
                  alt="Dairy cattle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <span className="text-white text-xs font-semibold">Healthy Dairy Cows</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[16px] border border-[#DCE5DD] aspect-square relative group">
                <img
                  src="/images/goats-card.jpg"
                  alt="Dairy goats"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <span className="text-white text-xs font-semibold">Dairy Goats</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[16px] border border-[#DCE5DD] aspect-square relative group">
                <img
                  src="/images/Img-7.jpeg"
                  alt="Stainless steel filtration equipment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <span className="text-white text-xs font-semibold">Sanitary Equipment</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[16px] border border-[#DCE5DD] aspect-square relative group bg-[#F8FAF7] flex items-center justify-center p-2">
                <img
                  src="/images/packets.png"
                  alt="Dairy & Pasture Fresh Milk Pack"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5 pointer-events-none">
                  <span className="text-white text-xs font-semibold">Hygienic Packaging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER (ABOVE FAQS) */}
      <CtaBanner onNavigate={onNavigate} />

      {/* SECTION 8: FAQS (INTERACTIVE ACCORDION) */}
      <section className="py-20 lg:py-24 bg-[#F8FAF7] border-b border-[#DCE5DD]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3.5 py-1.5 rounded-full border border-[#236B45]/20 inline-flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-[16px] text-[#657168] max-w-xl mx-auto">
              Learn more about our farm location, livestock care, pure milk standards, and how we bring fresh dairy to your family.
            </p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[14px] border border-[#DCE5DD] bg-white overflow-hidden shadow-xs hover:border-[#236B45]/40 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-semibold text-[17px] text-[#153F2C]">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#F8FAF7] border border-[#DCE5DD] flex items-center justify-center shrink-0 text-[#236B45]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[15px] text-[#657168] leading-relaxed border-t border-[#DCE5DD]/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
