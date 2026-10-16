import React from 'react';

/**
 * BotanicalCornerLeaves
 * Lush botanical foliage matching the CTA Banner ("Experience the Difference of Pure & Hygienic Dairy") style.
 */
export default function BotanicalCornerLeaves({ position = 'top-right', className = '' }) {
  const isTopRight = position === 'top-right';

  return (
    <div
      className={`absolute ${
        isTopRight ? 'top-0 right-0' : 'bottom-0 left-0'
      } w-36 sm:w-52 md:w-64 h-36 sm:h-52 md:h-64 pointer-events-none select-none overflow-hidden z-0 ${className}`}
    >
      <svg
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full object-contain ${
          isTopRight
            ? 'translate-x-3 -translate-y-3 scale-x-[-1] scale-y-[-1]'
            : '-translate-x-3 translate-y-3'
        } opacity-85`}
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
  );
}
