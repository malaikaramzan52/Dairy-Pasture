import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Sun,
  Droplet,
  ShieldCheck,
  Activity,
  Wheat,
  Home as HomeIcon,
  Stethoscope
} from 'lucide-react';

export default function Farm({ onNavigate }) {
  const dailyActivities = [
    {
      title: 'Animal Feeding',
      desc: 'Formulated rations combining fresh green silage, mineral enrichment, and clean dry fodder balanced for livestock vitality.',
      icon: <Wheat className="w-6 h-6 text-[#236B45]" />,
      image: '/images/milking.jpg'
    },
    {
      title: 'Animal Care',
      desc: 'Daily wellness monitoring, comfortable bedding, shelter from extreme Lahore weather, and regular veterinary check-ins.',
      icon: <Stethoscope className="w-6 h-6 text-[#236B45]" />,
      image: '/images/Img-10.jpg'
    },
    {
      title: 'Milking Activities',
      desc: 'Scheduled twice daily under strict hygiene protocols using sanitized equipment and calm, stress-free animal handling.',
      icon: <Activity className="w-6 h-6 text-[#236B45]" />,
      image: '/images/Img-9.jpg'
    },
    {
      title: 'Farm Cleanliness',
      desc: 'Rigorous washing and sanitization of livestock pens, milking sheds, and feeding mangers to maintain bio-security.',
      icon: <HomeIcon className="w-6 h-6 text-[#236B45]" />,
      image: '/images/Img-3.jpg'
    }
  ];

  const galleryImages = [
    {
      src: '/images/Img-14.jpg',
      title: 'Pasture Grazing',
      category: 'Cows in Green Fields'
    },
    {
      src: '/images/goats-card.jpg',
      title: 'Dairy Goats',
      category: 'Curious & Active Caprines'
    },
    {
      src: '/images/clean-barn.jpg',
      title: 'Milking Area',
      category: 'Sanitary Collection Bay'
    },
    {
      src: '/images/Img-1.jpg',
      title: 'Nutritious Silage',
      category: 'Natural Forage'
    },
    {
      src: '/images/Img-16.jpg',
      title: 'Close Animal Care',
      category: 'Daily Health Checks'
    },
    {
      src: '/images/Img-2.jpg',
      title: 'Farm Perimeter',
      category: 'Peaceful Lahore Surroundings'
    }
  ];

  return (
    <div className="w-full bg-[#F8FAF7]">
      {/* SECTION 1: FARM HERO */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3.5 py-1.5 rounded-full border border-[#236B45]/20">
              LIFE ON THE FARM
            </span>
            <h1 className="font-heading text-[32px] sm:text-[46px] lg:text-[52px] font-bold text-[#153F2C] tracking-tight leading-[1.2]">
              Life at Dairy & Pasture
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[#657168] leading-relaxed">
              Take a closer look at our dairy farming environment and the animals at the heart of our work in Lahore, Pakistan.
            </p>
          </div>

          <div className="mt-12 rounded-[16px] overflow-hidden border border-[#DCE5DD] shadow-lg aspect-[16/9] sm:aspect-[21/9]">
            <img
              src="/images/farm-pasture-landscape.jpg"
              alt="Pasture scenery at Dairy & Pasture farm"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR COWS */}
      <section className="py-20 lg:py-24 bg-[#F8FAF7] border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visuals */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-[16px] overflow-hidden border border-[#DCE5DD] shadow-md aspect-[16/10]">
                <img
                  src="/images/cows-card.jpg"
                  alt="Dairy cows grazing in open pasture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[12px] overflow-hidden border border-[#DCE5DD] aspect-[4/3]">
                  <img
                    src="/images/Img-3.jpg"
                    alt="Dairy cows in barn stalls at Dairy & Pasture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[12px] overflow-hidden border border-[#DCE5DD] aspect-[4/3]">
                  <img
                    src="/images/hero-cows.jpg"
                    alt="Dairy cows in pasture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
                BOVINE STEWARDSHIP
              </span>

              <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
                Our Cows & Their Care
              </h2>

              <p className="text-[16px] text-[#657168] leading-[1.7]">
                Dairy cows thrive when provided tranquility, consistent feeding schedules, and hygienic shelter. At our farm, cows spend ample time in open paddocks and shaded barn areas that shield them against harsh afternoon temperatures.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236B45] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm text-[#153F2C] block">Clean, Dry Housing</span>
                    <span className="text-xs text-[#657168]">Regularly cleared resting stalls with proper air movement and drainage.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236B45] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm text-[#153F2C] block">Balanced Natural Nutrition</span>
                    <span className="text-xs text-[#657168]">Continuous access to fresh water alongside locally sourced fodder, silage, and trace minerals.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236B45] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm text-[#153F2C] block">Veterinary Monitoring</span>
                    <span className="text-xs text-[#657168]">Routine health reviews, preventive deworming, and immediate care whenever symptoms emerge.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR GOATS */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Description (alternating side) */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
                CAPRINE SPECIALIZATION
              </span>

              <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
                Our Goats & Gentle Management
              </h2>

              <p className="text-[16px] text-[#657168] leading-[1.7]">
                Goats possess unique behavioral and physiological needs. Unlike larger ruminants, dairy goats are agile, selective browsers with sensitive digestion. We provide them with tailored elevated pens and clean dry bedding to support optimum wellness.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236B45] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm text-[#153F2C] block">Selective Browsing Diet</span>
                    <span className="text-xs text-[#657168]">High-protein legumes, leafy branches, and clean roughage for delicate digestive tracts.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236B45] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm text-[#153F2C] block">Dry & Elevated Housing</span>
                    <span className="text-xs text-[#657168]">Goats are kept in moisture-free sheds with raised resting platforms to prevent foot rot.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#236B45] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm text-[#153F2C] block">Sanitary Milking Procedures</span>
                    <span className="text-xs text-[#657168]">Clean teat preparation and immediate stainless collection to prevent odor transfer.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visuals (order 1 on mobile, order 2 on desktop) */}
            <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
              <div className="rounded-[16px] overflow-hidden border border-[#DCE5DD] shadow-md aspect-[16/10]">
                <img
                  src="/images/goats-img.jpg"
                  alt="Dairy livestock grazing in open pasture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[12px] overflow-hidden border border-[#DCE5DD] aspect-[4/3]">
                  <img
                    src="/images/Img-6.png"
                    alt="Livestock drinking fresh clean water"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[12px] overflow-hidden border border-[#DCE5DD] aspect-[4/3]">
                  <img
                    src="/images/goats.png"
                    alt="Healthy dairy goats at Dairy & Pasture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DAILY FARM ACTIVITIES */}
      <section className="py-20 lg:py-24 bg-[#F8FAF7] border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
              EVERYDAY ROUTINE
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Daily Farm Activities
            </h2>
            <p className="text-[16px] text-[#657168]">
              A consistent daily cycle ensures livestock comfort, optimal health, and hygienic milk harvesting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyActivities.map((act, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] border border-[#DCE5DD] overflow-hidden shadow-xs hover:border-[#236B45] transition-all flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-[#E9F3E9] flex items-center justify-center mb-3">
                      {act.icon}
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-[#153F2C] mb-1">
                      {act.title}
                    </h3>
                    <p className="text-xs text-[#657168] leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FARM GALLERY */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
              FARM VISUALS
            </span>
            <h2 className="font-heading text-[28px] sm:text-[38px] font-semibold text-[#153F2C]">
              Farm Gallery
            </h2>
            <p className="text-[16px] text-[#657168]">
              Photographs depicting our animals, pasture fields, housing sheds, and milk collection areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-[16px] overflow-hidden border border-[#DCE5DD] aspect-[4/3] bg-gray-100 shadow-xs"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-xs text-white/80 uppercase font-medium">{img.category}</span>
                  <span className="font-heading font-semibold text-lg text-white">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FARM-TO-PROCESS CTA */}
      <section className="py-20 bg-[#153F2C] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading text-[30px] sm:text-[40px] font-bold text-white tracking-tight">
            Discover What Happens After Milk Collection
          </h2>
          <p className="text-base sm:text-lg text-[#E9F3E9]/80 max-w-2xl mx-auto">
            Once milk is harvested, it begins a carefully monitored journey through quality testing, sanitary filtration, chilling, and hygienic bottling.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('process')}
              className="bg-[#236B45] hover:bg-[#2e8255] text-white font-semibold text-[15px] px-8 py-3.5 rounded-[8px] transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <span>Explore Our Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
