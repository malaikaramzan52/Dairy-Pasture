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
      desc: 'Scrupulous sanitation of milking equipment, holding tanks, and bottling systems every single day.',
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
      {/* SECTION 1: ABOUT HERO */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3.5 py-1.5 rounded-full border border-[#236B45]/20">
              OUR HERITAGE & APPROACH
            </span>
            <h1 className="font-heading text-[32px] sm:text-[46px] lg:text-[52px] font-bold text-[#153F2C] tracking-tight leading-[1.2]">
              Getting to Know Dairy & Pasture
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[#657168] leading-relaxed">
              Discover our approach to dairy farming, animal care, and the journey of milk from farm to processing right here in Lahore, Pakistan.
            </p>
          </div>

          <div className="mt-12 rounded-[16px] overflow-hidden border border-[#DCE5DD] shadow-lg aspect-[16/9] sm:aspect-[21/9]">
            <img
              src="/images/Img-17.png"
              alt="Dairy & Pasture farm panoramic view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="py-20 lg:py-24 bg-[#F8FAF7] border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
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

      {/* SECTION 3: OUR MISSION */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
              CORE PURPOSE
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Our Approach to Better Dairy
            </h2>
            <p className="text-[16px] text-[#657168]">
              Three foundational pillars that guide our daily decisions across animal husbandry, collection, and distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAF7] border border-[#DCE5DD] rounded-[16px] p-8 hover:border-[#236B45] transition-all hover:-translate-y-1 shadow-xs"
              >
                <div className="w-12 h-12 rounded-full bg-[#E9F3E9] flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-[#153F2C] mb-3">
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
                  From Green Pastures to Clean Bottles
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

      {/* SECTION 6: CONTACT CTA */}
      <section className="py-20 bg-[#153F2C] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-[30px] sm:text-[40px] font-bold text-white tracking-tight">
            Want to Know More About Us?
          </h2>
          <p className="text-base sm:text-lg text-[#E9F3E9]/80 max-w-xl mx-auto">
            We are always happy to answer questions from customers, discuss animal welfare, or provide dairy details.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#236B45] hover:bg-[#2e8255] text-white font-semibold text-[15px] px-8 py-3.5 rounded-[8px] transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
