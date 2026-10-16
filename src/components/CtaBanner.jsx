import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

export default function CtaBanner({
  onNavigate,
  badge = 'FARM FRESH — LAHORE',
  title = 'Experience the Difference of Pure & Hygienic Dairy',
  subtitle = 'From our farm to your family — always fresh, always trusted.',
  primaryBtnText = 'Get In Touch',
  primaryBtnPage = 'contact',
  secondaryBtnText = 'Explore Our Farm',
  secondaryBtnPage = 'farm'
}) {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
      <section className="relative overflow-hidden bg-[#0C3522] text-white rounded-[28px] sm:rounded-[40px] border border-[#1C5438] shadow-xl">
        {/* Botanical Leaves - Left Side */}
        <div className="absolute left-0 top-0 bottom-0 w-40 sm:w-60 md:w-80 pointer-events-none select-none overflow-hidden z-0">
          <svg
            viewBox="0 0 240 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover -translate-x-6 sm:-translate-x-4 opacity-75"
          >
            {/* Main Leaf 1 */}
            <path
              d="M-20 180 C30 150 70 90 35 20 C5 70 -5 130 -20 180 Z"
              fill="#27784E"
            />
            <path
              d="M-15 175 C18 135 48 85 30 25"
              stroke="#1B5537"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Leaf 2 */}
            <path
              d="M0 190 C60 170 120 120 100 40 C60 80 20 140 0 190 Z"
              fill="#328D5E"
            />
            <path
              d="M5 185 C45 155 85 110 95 45"
              stroke="#1F613E"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Leaf 3 */}
            <path
              d="M20 200 C80 200 150 160 155 90 C110 115 55 160 20 200 Z"
              fill="#2A7E53"
            />
            <path
              d="M25 198 C70 185 120 155 150 95"
              stroke="#1B5537"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Small background leaf */}
            <path
              d="M-30 110 C10 100 50 60 30 0 C0 30 -20 70 -30 110 Z"
              fill="#1E5C3B"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Botanical Leaves - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-40 sm:w-60 md:w-80 pointer-events-none select-none overflow-hidden z-0">
          <svg
            viewBox="0 0 240 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover translate-x-6 sm:translate-x-4 scale-x-[-1] opacity-75"
          >
            {/* Main Leaf 1 */}
            <path
              d="M-20 180 C30 150 70 90 35 20 C5 70 -5 130 -20 180 Z"
              fill="#27784E"
            />
            <path
              d="M-15 175 C18 135 48 85 30 25"
              stroke="#1B5537"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Leaf 2 */}
            <path
              d="M0 190 C60 170 120 120 100 40 C60 80 20 140 0 190 Z"
              fill="#328D5E"
            />
            <path
              d="M5 185 C45 155 85 110 95 45"
              stroke="#1F613E"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Leaf 3 */}
            <path
              d="M20 200 C80 200 150 160 155 90 C110 115 55 160 20 200 Z"
              fill="#2A7E53"
            />
            <path
              d="M25 198 C70 185 120 155 150 95"
              stroke="#1B5537"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Small background leaf */}
            <path
              d="M-30 110 C10 100 50 60 30 0 C0 30 -20 70 -30 110 Z"
              fill="#1E5C3B"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Main Content Container with Increased Padding for Taller Height */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            {/* Left Text Side */}
            <div className="space-y-3.5 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#5EE59D] text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-white/15 backdrop-blur-sm">
                <Leaf className="w-3.5 h-3.5 text-[#5EE59D]" />
                <span>{badge}</span>
              </div>

              <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
                {title}
              </h2>

              <p className="text-[15px] sm:text-[17px] text-[#D3E4D7] leading-relaxed font-normal">
                {subtitle}
              </p>
            </div>

            {/* Right Buttons Side */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 shrink-0">
              {primaryBtnText && (
                <button
                  onClick={() => onNavigate(primaryBtnPage)}
                  className="bg-white hover:bg-[#F2F7F3] text-[#0C3522] text-[15px] font-semibold px-7 sm:px-8 py-3.5 rounded-[8px] transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>{primaryBtnText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}

              {secondaryBtnText && (
                <button
                  onClick={() => onNavigate(secondaryBtnPage)}
                  className="bg-transparent hover:bg-white/10 text-white border border-white/60 hover:border-white text-[15px] font-semibold px-7 sm:px-8 py-3.5 rounded-[8px] transition-all duration-200 flex items-center justify-center cursor-pointer"
                >
                  <span>{secondaryBtnText}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
