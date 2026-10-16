import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Droplet,
  Filter,
  Thermometer,
  PackageCheck,
  AlertCircle,
  MessageCircle,
  Sparkles,
  Milk,
  Boxes,
  Activity
} from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

export default function Process({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);

  const sixSteps = [
    {
      step: '01',
      title: 'Milk Collection',
      desc: 'Milking is conducted under clean protocols into sanitized, food-grade stainless steel churns to prevent foreign exposure from the outset.',
      image: '/images/milking.jpg',
      tag: 'Sanitary Milking'
    },
    {
      step: '02',
      title: 'Initial Quality Testing',
      desc: 'Incoming batches are checked for initial freshness, temperature, and basic physical density before proceeding further in the workflow.',
      image: '/images/Img-8.jpg',
      tag: 'Freshness Screening'
    },
    {
      step: '03',
      title: 'Sanitary Filtration',
      desc: 'Milk passes through food-grade micro-filters that eliminate airborne dust particles and natural sediment without damaging milk fat globules.',
      image: '/images/Img-3.jpg',
      tag: 'Physical Clarification'
    },
    {
      step: '04',
      title: 'Controlled Pasteurization',
      desc: 'Controlled thermal treatment (when applied in certified workflows) effectively reduces pathogenic microorganisms while protecting natural taste.',
      image: '/images/Img-8.jpg',
      tag: 'Thermal Protection'
    },
    {
      step: '05',
      title: 'Rapid Chilling & Storage',
      desc: 'Quickly cooled to below 2°C in insulated bulk milk coolers. Immediate chilling halts bacterial multiplication and retains natural consistency.',
      image: '/images/freezr.png',
      tag: 'Cold Chain (< 2°C)'
    },
    {
      step: '06',
      title: 'Filling, Sealing & Packaging',
      desc: 'Filled into clean, food-grade sealed packets and pouches to preserve wholesome quality and freshness until it reaches your kitchen.',
      image: '/images/packets.png',
      tag: 'Hygienic Sealing'
    }
  ];

  const facilityGallery = [
    {
      src: '/images/pak-milk-chiller.jpg',
      title: 'Farm Chiller & Storage Unit',
      subtitle: 'Insulated bulk milk cooling tank in Lahore'
    },
    {
      src: '/images/Img-8.jpg',
      title: 'Multi-Stage Filtration',
      subtitle: 'Sanitary filtration and screening'
    },
    {
      src: '/images/pak-dairy-cans.jpg',
      title: 'Sanitized Stainless Churns',
      subtitle: 'Pure milk collection cans and washing station'
    },
    {
      src: '/images/pak-milk-testing.jpg',
      title: 'Traditional Purity Testing',
      subtitle: 'Lactometer & natural density evaluation'
    },
    {
      src: '/images/packets.png',
      title: 'Sealed Fresh Milk Packets',
      subtitle: 'Hygienic sealed pouches in cold storage'
    },
    {
      src: '/images/milking.jpg',
      title: 'Quality Evaluation Station',
      subtitle: 'Direct fresh milking and inspection'
    }
  ];

  const products = [
    {
      id: 'cow-milk',
      name: 'Fresh Cow Milk',
      badge: 'Farm Fresh',
      desc: 'Naturally wholesome, creamy cow milk collected daily from healthy pasture-fed cows. Balanced natural fats and proteins with rich traditional flavor.',
      packaging: 'Sealed Hygienic Pouches / Packs',
      storage: 'Keep refrigerated between 2°C – 4°C',
      image: '/images/packets.png',
      inquiryType: 'Dairy Products'
    },
    {
      id: 'goat-milk',
      name: 'Fresh Goat Milk',
      badge: 'Gentle & Pure',
      desc: 'Nutrient-rich, easily digestible fresh goat milk with naturally smaller fat globules. Mild, pleasant taste harvested under strict sanitary conditions.',
      packaging: 'Hygienic Sealed Containers',
      storage: 'Keep refrigerated between 2°C – 4°C',
      image: '/images/goats.png',
      inquiryType: 'Dairy Products'
    }
  ];

  const faqs = [
    {
      q: 'How is milk collected at the farm?',
      a: 'Milk is harvested using clean teat preparation practices and stainless steel milking equipment. Milking occurs under calm, stress-free conditions for the animals, and the harvested milk is immediately directed into sanitized, food-grade containers to prevent environmental exposure.'
    },
    {
      q: 'What is milk filtration and why is it important?',
      a: 'Filtration uses specialized food-grade mesh to remove any physical debris, sediment, or micro-particulates that might naturally occur during milking. While filtration effectively cleans milk physically, it does not destroy bacteria — which is why temperature control and thermal processing are also essential.'
    },
    {
      q: 'Why is pasteurization used in dairy processing?',
      a: 'Pasteurization involves heating milk to a specific temperature for a controlled duration before rapid cooling. This validated food safety process significantly reduces harmful bacteria (such as Salmonella, E. coli, and Listeria) without boiling away the milk’s valuable nutrients or characteristic taste.'
    },
    {
      q: 'How is milk packaged for consumer safety?',
      a: 'Once chilled and processed, milk is packed into clean, food-grade sealed packets and pouches. This preserves freshness, stops airborne contaminants from entering, and prepares the product for temperature-maintained delivery.'
    },
    {
      q: 'How should Dairy & Pasture products be stored at home?',
      a: 'Fresh milk should always be placed in the refrigerator promptly and maintained between 2°C and 4°C. Avoid keeping milk in the refrigerator door shelves where temperature fluctuates most. Always keep packets and pouches properly sealed when stored.'
    }
  ];

  const handleProductInquiry = (productName) => {
    const text = encodeURIComponent(
      `Assalamualaikum, I am interested in inquiring about ${productName} from Dairy & Pasture.`
    );
    window.open(`https://wa.me/923015099459?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-[#F8FAF7]">
      {/* SECTION 1: PROCESS HERO WITH BACKGROUND IMAGE */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 border-b border-[#DCE5DD]">
        {/* Background Image */}
        <img
          src="/images/Img-7.jpeg"
          alt="Hygienic stainless steel dairy processing facility"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay with Opacity for Clear Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07190F]/90 via-[#07190F]/75 to-[#07190F]/50 sm:to-[#07190F]/40" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#5EE59D] text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#5EE59D]" />
              <span>FROM PASTURE TO PACKET</span>
            </div>

            <h1 className="font-heading text-[34px] sm:text-[46px] lg:text-[56px] font-bold text-white tracking-tight leading-[1.15] drop-shadow-sm">
              From Farm to Carefully Packaged Dairy
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#E0EBE2] leading-[1.7] max-w-xl font-normal drop-shadow-sm">
              Explore the stages of milk collection, quality checks, processing, and packaging that shape the dairy journey in Lahore, Pakistan.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('farm')}
                className="bg-[#236B45] hover:bg-[#1b5336] text-white text-[15px] font-semibold px-7 py-3.5 rounded-[8px] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore Our Farm</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/80 text-[15px] font-semibold px-7 py-3.5 rounded-[8px] transition-all duration-200 shadow-sm backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ask a Question</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR MILK PROCESSING JOURNEY (6 STEPS TIMELINE) */}
      <section className="py-20 lg:py-24 bg-[#F8FAF7] border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
              SYSTEMATIC PROCESS
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Our Milk Processing Journey
            </h2>
            <p className="text-[16px] text-[#657168]">
              A step-by-step demonstration of the proposed milk handling sequence designed to preserve natural quality while ensuring hygiene.
            </p>
          </div>

          {/* 6 Steps Grid / Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sixSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] border border-[#DCE5DD] overflow-hidden shadow-xs hover:border-[#236B45] hover:shadow-md transition-all flex flex-col group"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-[#F8FAF7]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className={`w-full h-full ${step.image.includes('packets.png') ? 'object-contain p-2 bg-white' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute top-3 left-3 bg-[#153F2C] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    Step {step.step}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#236B45] text-[11px] font-semibold px-2 py-0.5 rounded shadow-xs">
                    {step.tag}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-[#153F2C] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#657168] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Demonstration Notice Box */}
          <div className="mt-12 p-4 sm:p-5 rounded-[12px] bg-[#E9F3E9]/70 border border-[#236B45]/20 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#236B45] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#202820]/80 leading-relaxed">
              <strong>Demonstration Workflow Note:</strong> The stages described above represent our intended, best-practice handling model. Filtration alone does not replace pasteurization or validated thermal food-safety procedures. Actual equipment setups are continuously being calibrated to meet high hygiene benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCESSING FACILITY */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
              CLEAN ROOM & TANKS
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Inside the Dairy Processing Environment
            </h2>
            <p className="text-[16px] text-[#657168]">
              Photographs illustrating sanitary stainless-steel tanks, food-grade filtration manifolds, temperature regulators, and packaging equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityGallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-[16px] overflow-hidden border border-[#DCE5DD] aspect-[4/3] bg-gray-50 shadow-xs"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full h-full ${item.src.includes('packets.png') ? 'object-contain p-2 bg-white' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="font-heading font-semibold text-lg text-white">{item.title}</span>
                  <span className="text-xs text-white/80">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: QUALITY AND PACKAGING */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-[#DCE5DD]">
        {/* Background Image */}
        <img
          src="/images/pak-dairy-cans.jpg"
          alt="Dairy & Pasture milk cans and storage"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay for Rich Visuals and Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07190F]/90 via-[#07190F]/82 to-[#07190F]/92" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#5EE59D] text-xs font-semibold uppercase tracking-wider border border-white/15 backdrop-blur-sm">
              STANDARDS
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-bold text-white tracking-tight">
              Attention to Every Detail
            </h2>
            <p className="text-[16px] text-[#D3E4D7] leading-relaxed">
              Three essential safeguards that protect the purity, flavor, and shelf freshness of our dairy batches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/95 backdrop-blur-md rounded-[18px] p-8 border border-white/80 shadow-xl hover:border-[#236B45] hover:shadow-2xl transition-all group space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E9F3E9] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-[#236B45]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#153F2C]">
                Clean Handling
              </h3>
              <p className="text-sm text-[#657168] leading-relaxed">
                Contact surfaces are constructed from food-grade stainless steel. Standardized sanitation washdowns precede and follow every operational run.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-[18px] p-8 border border-white/80 shadow-xl hover:border-[#236B45] hover:shadow-2xl transition-all group space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E9F3E9] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Thermometer className="w-6 h-6 text-[#236B45]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#153F2C]">
                Appropriate Processing
              </h3>
              <p className="text-sm text-[#657168] leading-relaxed">
                Strict adherence to temperature thresholds. Milk is protected from ambient heat exposure from the milking shed through storage and sealed packaging.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-[18px] p-8 border border-white/80 shadow-xl hover:border-[#236B45] hover:shadow-2xl transition-all group space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E9F3E9] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <PackageCheck className="w-6 h-6 text-[#236B45]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#153F2C]">
                Food-Grade Packaging
              </h3>
              <p className="text-sm text-[#657168] leading-relaxed">
                Containers are non-reactive and hermetically capped to prevent oxidation, foreign odor absorption, and environmental contamination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR DAIRY PRODUCTS (FULL SHOWCASE HERE!) */}
      <section id="products-showcase" className="py-20 lg:py-24 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9F3E9] text-[#236B45] text-xs font-semibold tracking-wider uppercase border border-[#236B45]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT SHOWCASE</span>
            </div>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Explore Our Dairy Range
            </h2>
            <p className="text-[16px] text-[#657168]">
              Genuine farm products prepared with consistent hygiene and care. Inquire directly about batch availability and daily delivery in Lahore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="bg-[#F8FAF7] rounded-[16px] border border-[#DCE5DD] overflow-hidden shadow-xs hover:border-[#236B45] hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-white flex items-center justify-center">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className={`w-full h-full ${prod.image.includes('packets.png') ? 'object-contain p-2 bg-white' : 'object-cover'} hover:scale-105 transition-transform duration-500`}
                  />
                  <span className="absolute top-3 left-3 bg-[#153F2C] text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {prod.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-heading font-semibold text-2xl text-[#153F2C]">
                      {prod.name}
                    </h3>
                    <p className="text-sm text-[#657168] leading-relaxed">
                      {prod.desc}
                    </p>

                    <div className="pt-2 space-y-2 border-t border-[#DCE5DD]">
                      <div className="text-xs text-[#202820]">
                        <span className="font-semibold text-[#153F2C]">Packaging:</span> {prod.packaging}
                      </div>
                      <div className="text-xs text-[#202820]">
                        <span className="font-semibold text-[#153F2C]">Storage:</span> {prod.storage}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col gap-2.5">
                    <button
                      onClick={() => handleProductInquiry(prod.name)}
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-[14px] py-2.5 px-4 rounded-[8px] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                      <span>Inquire on WhatsApp</span>
                    </button>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full bg-white hover:bg-[#E9F3E9] text-[#236B45] border border-[#236B45]/40 font-semibold text-[13px] py-2 px-4 rounded-[8px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Ask via Contact Form</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PACKAGING GALLERY */}
      <section className="py-20 lg:py-24 bg-[#F8FAF7] border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
              SEALING & PACKAGING
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Packaging Gallery
            </h2>
            <p className="text-[16px] text-[#657168]">
              Photographs showcasing clean sealed packets, pouches, label placement, and packaging handling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-[16px] overflow-hidden border border-[#DCE5DD] aspect-[4/3] bg-white shadow-xs flex items-center justify-center p-2">
              <img
                src="/images/packets.png"
                alt="Sealed fresh milk packets ready for distribution"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-[16px] overflow-hidden border border-[#DCE5DD] aspect-[4/3] bg-white shadow-xs flex items-center justify-center p-2">
              <img
                src="/images/freezr.png"
                alt="Dairy & Pasture Fresh Milk Packaging Pouch"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-[16px] overflow-hidden border border-[#DCE5DD] aspect-[4/3] bg-white shadow-xs">
              <img
                src="/images/pak-dairy-cans.jpg"
                alt="Hygienic packaging setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER (ABOVE FAQS) */}
      <CtaBanner onNavigate={onNavigate} />

      {/* SECTION 7: PROCESS FAQS (INTERACTIVE ACCORDION) */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Understanding Our Dairy Process
            </h2>
            <p className="text-[16px] text-[#657168]">
              Answers to common questions regarding milk collection, filtration, safety measures, and home storage.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[12px] border border-[#DCE5DD] bg-[#F8FAF7] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-semibold text-[17px] text-[#153F2C]">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white border border-[#DCE5DD] flex items-center justify-center shrink-0 text-[#236B45]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#657168] leading-relaxed border-t border-[#DCE5DD]/60">
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
