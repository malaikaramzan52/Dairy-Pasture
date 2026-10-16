import React from 'react';
import {
  Heart,
  Sparkles,
  ShieldCheck,
  Droplet,
  CheckCircle2,
  ArrowRight,
  Eye,
  Users,
  TrendingUp,
  Leaf,
  Award
} from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import BotanicalCornerLeaves from '../components/BotanicalCornerLeaves';

export default function About({ onNavigate }) {
  const missionCards = [
    {
      title: 'Care for Animals',
      desc: 'Ensuring our cows and goats live in clean, stress-free open environments with wholesome fodder, clean water, and regular veterinary oversight.',
      icon: <Heart className="w-6 h-6 text-[#236B45]" />
    },
    {
      title: 'Attention to Quality',
      desc: 'Monitoring milk consistency from collection through storage. Prioritizing physical filtration and strict temperature regulation.',
      icon: <Award className="w-6 h-6 text-[#236B45]" />
    },
    {
      title: 'Responsible Handling',
      desc: 'Food-grade stainless steel surfaces, sanitization regimens, and sealed packaging to guard against contaminants before delivery.',
      icon: <ShieldCheck className="w-6 h-6 text-[#236B45]" />
    }
  ];

  const valueItems = [
    {
      title: 'Animal Welfare',
      desc: 'Ethical stewardship is our priority. Healthy, content animals produce nutritious, high-grade milk.',
      icon: <Heart className="w-5 h-5 text-[#236B45]" />
    },
    {
      title: 'Cleanliness',
      desc: 'Scrupulous sanitation of milking equipment, holding tanks, and packaging systems every single day.',
      icon: <Droplet className="w-5 h-5 text-[#236B45]" />
    },
    {
      title: 'Quality Awareness',
      desc: 'Understanding milk biology and temperature sensitivity to maintain natural nutritional value.',
      icon: <ShieldCheck className="w-5 h-5 text-[#236B45]" />
    },
    {
      title: 'Transparency',
      desc: 'Open communication regarding our farm environment, animal care, and actual dairy handling procedures.',
      icon: <Eye className="w-5 h-5 text-[#236B45]" />
    },
    {
      title: 'Customer Trust',
      desc: 'Building enduring relationships with Pakistani families who value unadulterated, wholesome farm dairy.',
      icon: <Users className="w-5 h-5 text-[#236B45]" />
    },
    {
      title: 'Continuous Improvement',
      desc: 'Constantly refining farm infrastructure, hygiene protocols, and cold-chain reliability.',
      icon: <TrendingUp className="w-5 h-5 text-[#236B45]" />
    }
  ];

  return (
    <div className="w-full bg-[#F8FAF7]">
      {/* SECTION 1: ABOUT HERO WITH BACKGROUND IMAGE */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 border-b border-[#DCE5DD]">
        {/* Background Image (Farm Hero Image) */}
        <img
          src="/images/farm-pasture-landscape.jpg"
          alt="Dairy & Pasture farm pasture view"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay with Opacity for Clear Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07190F]/90 via-[#07190F]/75 to-[#07190F]/50 sm:to-[#07190F]/40" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#5EE59D] text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#5EE59D]" />
              <span>OUR HERITAGE & APPROACH</span>
            </div>

            <h1 className="font-heading text-[34px] sm:text-[46px] lg:text-[56px] font-bold text-white tracking-tight leading-[1.15] drop-shadow-sm">
              Getting to Know Dairy & Pasture
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#E0EBE2] leading-[1.7] max-w-xl font-normal drop-shadow-sm">
              Discover our approach to dairy farming, animal care, and the journey of milk from farm to processing right here in Lahore, Pakistan.
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
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-[#EBF4ED] via-white to-[#F4F9F5] border-b border-[#DCE5DD]">
        {/* Top-Right Decorative Botanical Leaves (CTA Banner Style) */}
        <BotanicalCornerLeaves position="top-right" />

        {/* Bottom-Left Decorative Botanical Leaves (CTA Banner Style) */}
        <BotanicalCornerLeaves position="bottom-left" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="rounded-[16px] overflow-hidden border border-[#DCE5DD] shadow-md aspect-[4/3]">
                  <img
                    src="/images/About.jpg"
                    alt="Daily farm care at Dairy & Pasture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-[12px] border border-[#DCE5DD] shadow-md hidden sm:block">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#153F2C]">
                    <Leaf className="w-4 h-4 text-[#236B45]" />
                    <span>Pasture-Centric Mindset</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
                OUR STORY
              </span>

              <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
                Bridging the Gap Between Farm and Table
              </h2>

              <p className="text-[16px] text-[#657168] leading-[1.7]">
                Dairy & Pasture was born from a desire to bring genuine farm freshness directly to households in Lahore. In an era where commercial milk journeys are often opaque and industrialized, we believe consumers deserve complete visibility into how livestock are treated, how milk is harvested, and how it is protected against spoilage.
              </p>

              <p className="text-[16px] text-[#657168] leading-[1.7]">
                Our focus centers on both dairy cows and dairy goats. By combining traditional respect for animal husbandry with modern stainless steel handling, rapid chilling, and rigorous physical filtration, we strive to make fresh milk safe, pure, and dependable for every family member.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-[12px] bg-white border border-[#DCE5DD]">
                  <span className="font-heading font-bold text-base text-[#153F2C] block mb-1">
                    Authentic Livestock Care
                  </span>
                  <span className="text-xs text-[#657168]">
                    Clean shelter, quality forage, and natural open-air movement.
                  </span>
                </div>
                <div className="p-4 rounded-[12px] bg-white border border-[#DCE5DD]">
                  <span className="font-heading font-bold text-base text-[#153F2C] block mb-1">
                    Hygienic Cold Chain
                  </span>
                  <span className="text-xs text-[#657168]">
                    Immediate chilling to curb bacterial proliferation naturally.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR MISSION (OUR APPROACH TO BETTER DAIRY) */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-[#DCE5DD]">
        {/* Background Image */}
        <img
          src="/images/goats-img.jpg"
          alt="Dairy goats at pasture"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Deep Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07190F]/92 via-[#0A2E1C]/84 to-[#07190F]/94" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#5EE59D] text-xs font-semibold uppercase tracking-wider border border-white/15 backdrop-blur-sm">
              CORE PURPOSE
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-bold text-white tracking-tight">
              Our Approach to Better Dairy
            </h2>
            <p className="text-[16px] text-[#D3E4D7] leading-relaxed">
              Three foundational pillars that guide our daily decisions across animal husbandry, collection, and distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md border border-white/85 rounded-[18px] p-8 hover:border-[#236B45] transition-all hover:-translate-y-1 shadow-xl group"
              >
                <div className="w-12 h-12 rounded-full bg-[#E9F3E9] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#153F2C] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#657168] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR VALUES */}
      <section className="py-20 lg:py-24 bg-[#F8FAF7] border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
              WHAT WE STAND FOR
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Values That Define Our Farm
            </h2>
            <p className="text-[16px] text-[#657168]">
              Integrity in dairy means being honest about what goes in, how it is processed, and how it reaches your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueItems.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#DCE5DD] rounded-[14px] p-6 shadow-xs hover:border-[#236B45] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E9F3E9] flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#153F2C] mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-[#657168] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER (ABOVE FROM GREEN PASTURES TO CLEAN PACKETS) */}
      <CtaBanner onNavigate={onNavigate} />

      {/* SECTION 5: OUR FARM-TO-PROCESS APPROACH */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-[#E9F3E9] border border-[#236B45]/20 rounded-[20px] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#236B45]">
                  INTEGRATED HARMONY
                </span>
                <h2 className="font-heading text-[28px] sm:text-[36px] font-semibold text-[#153F2C]">
                  From Green Pastures to Clean Packets
                </h2>
                <p className="text-sm sm:text-base text-[#657168] leading-relaxed max-w-2xl">
                  The link between farm health and processing cleanliness cannot be separated. By caring for our cows and goats in Lahore with balanced feeds and humane routines, milk begins with prime natural composition. Our sanitary filtration and rapid chilling protect that wholesome baseline all the way to sealing.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <button
                  onClick={() => onNavigate('farm')}
                  className="bg-[#236B45] hover:bg-[#153F2C] text-white font-semibold text-[15px] px-7 py-3.5 rounded-[8px] transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Explore Our Farm</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
