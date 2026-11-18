import React from 'react';

const FRAMER_LOGOS = [
  {
    name: "KINDRA",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 overflow-visible shrink-0">
        <path
          d="M50.00 50.00L88.11 72.00M50.00 50.00L50.00 94.00M50.00 50.00L11.89 72.00M50.00 50.00L11.89 28.00M50.00 50.00L50.00 6.00M50.00 50.00L88.11 28.00"
          stroke="#171717"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: "25px",
      fontWeight: 700,
      letterSpacing: "0.5px",
      lineHeight: "1em",
      color: "#171717"
    }
  },
  {
    name: "nuvio",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 overflow-visible shrink-0">
        <circle cx="76" cy="50" r="17" stroke="#171717" strokeWidth="6.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="63" cy="72.5167" r="17" stroke="#171717" strokeWidth="6.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="37" cy="72.5167" r="17" stroke="#171717" strokeWidth="6.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="24" cy="50" r="17" stroke="#171717" strokeWidth="6.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="37" cy="27.4833" r="17" stroke="#171717" strokeWidth="6.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="63" cy="27.4833" r="17" stroke="#171717" strokeWidth="6.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: "25px",
      fontWeight: 600,
      letterSpacing: "-1.5px",
      lineHeight: "1em",
      color: "#171717"
    }
  },
  {
    name: "Halden",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 overflow-visible shrink-0">
        <circle cx="22" cy="22" r="6" fill="#171717" />
        <circle cx="22" cy="50" r="6" fill="#171717" />
        <circle cx="22" cy="78" r="6" fill="#171717" />
        <circle cx="50" cy="22" r="6" fill="#171717" />
        <circle cx="50" cy="50" r="6" fill="#171717" />
        <circle cx="50" cy="78" r="6" fill="#171717" />
        <circle cx="78" cy="22" r="6" fill="#171717" />
        <circle cx="78" cy="50" r="6" fill="#171717" />
        <circle cx="78" cy="78" r="6" fill="#171717" />
      </svg>
    ),
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: "25px",
      fontWeight: 500,
      letterSpacing: "-1px",
      lineHeight: "1em",
      color: "#171717"
    }
  },
  {
    name: "MOSAIQ",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 overflow-visible shrink-0">
        <path d="M8 30C22 14 36 46 50 30S78 14 92 30" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 50C22 34 36 66 50 50S78 34 92 50" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 70C22 54 36 86 50 70S78 54 92 70" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: "25px",
      fontWeight: 500,
      letterSpacing: "3px",
      lineHeight: "1em",
      color: "#171717",
      textTransform: "uppercase"
    }
  },
  {
    name: "TERRAFOLD",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 overflow-visible shrink-0">
        <circle cx="50" cy="50" r="13" fill="#171717" />
        <path
          d="M70.00 50.00L94.00 50.00M69.02 56.18L91.85 63.60M66.18 61.76L85.60 75.86M61.76 66.18L75.86 85.60M56.18 69.02L63.60 91.85M50.00 70.00L50.00 94.00M43.82 69.02L36.40 91.85M38.24 66.18L24.14 85.60M33.82 61.76L14.40 75.86M30.98 56.18L8.15 63.60M30.00 50.00L6.00 50.00M30.98 43.82L8.15 36.40M33.82 38.24L14.40 24.14M38.24 33.82L24.14 14.40M43.82 30.98L36.40 8.15M50.00 30.00L50.00 6.00M56.18 30.98L63.60 8.15M61.76 33.82L75.86 14.40M66.18 38.24L85.60 24.14M69.02 43.82L91.85 36.40"
          stroke="#171717"
          strokeWidth="6.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: "25px",
      fontWeight: 800,
      letterSpacing: "-1.25px",
      lineHeight: "1em",
      color: "#171717"
    }
  },
  {
    name: "lumen & co",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 overflow-visible shrink-0">
        <path d="M72.00 50.00L94.00 50.00M65.56 65.56L81.11 81.11M50.00 72.00L50.00 94.00M34.44 65.56L18.89 81.11M28.00 50.00L6.00 50.00M34.44 34.44L18.89 18.89M50.00 28.00L50.00 6.00M65.56 34.44L81.11 18.89" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M82.99 41.77L94 50L82.99 58.23" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M79.14 67.51L81.11 81.11L67.51 79.14" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M58.23 82.99L50 94L41.77 82.99" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M32.49 79.14L18.89 81.11L20.86 67.51" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M17.01 58.23L6 50L17.01 41.77" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M20.86 32.49L18.89 18.89L32.49 20.86" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M41.77 17.01L50 6L58.23 17.01" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M67.51 20.86L81.11 18.89L79.14 32.49" stroke="#171717" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: "25px",
      fontWeight: 400,
      letterSpacing: "-1px",
      lineHeight: "1em",
      color: "#171717"
    }
  },
  {
    name: "orbita",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 overflow-visible shrink-0">
        <circle cx="50" cy="50" r="10" fill="#171717" />
        <ellipse cx="50" cy="50" rx="44" ry="18" stroke="#171717" strokeWidth="6.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <ellipse cx="50" cy="50" rx="44" ry="18" transform="rotate(60 50 50)" stroke="#171717" strokeWidth="6.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <ellipse cx="50" cy="50" rx="44" ry="18" transform="rotate(120 50 50)" stroke="#171717" strokeWidth="6.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: "25px",
      fontWeight: 500,
      letterSpacing: "-1.25px",
      lineHeight: "1em",
      color: "#171717"
    }
  }
];

/**
 * Authentic Framer LEROVA Infinite Marquee Logo Ticker:
 * Exact geometric SVG brandmarks, authentic typography, and soft edge gradient masking.
 */
export default function TrustStatsGrid({
  headline = "Learning that moves you forward.",
  sublabel = "Join a growing community of curious minds, ambitious professionals, and lifelong learners.",
}) {
  return (
    <div className="w-full bg-[#f4f4f5] rounded-[28px] pt-[44px] pb-[48px] px-4 sm:px-8 space-y-[34px] overflow-hidden select-none">
      
      {/* Copy Matching Framer LEROVA */}
      <div className="text-center space-y-[6px]">
        <h2 className="text-[17px] font-medium text-[#171717] tracking-[-0.51px] leading-[22.1px] font-['Manrope']">
          {headline}
        </h2>
        <p className="text-[13.5px] font-normal text-[#9a9aa1] tracking-[-0.2025px] leading-[19.575px] max-w-xl mx-auto font-['Manrope']">
          {sublabel}
        </p>
      </div>

      {/* Infinite Marquee Ticker Track with exact Framer linear gradient mask */}
      <div
        className="relative w-full overflow-hidden py-1"
        style={{
          maskImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 100%)'
        }}
      >
        <div className="animate-ticker items-center space-x-[76px] transition-opacity duration-300">
          {/* Set 1 */}
          {FRAMER_LOGOS.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-[9px] shrink-0 select-none">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                {logo.glyph}
              </div>
              <span style={logo.style}>
                {logo.name}
              </span>
            </div>
          ))}
          {/* Set 2 (for continuous seamless loop) */}
          {FRAMER_LOGOS.map((logo, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-[9px] shrink-0 select-none">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                {logo.glyph}
              </div>
              <span style={logo.style}>
                {logo.name}
              </span>
            </div>
          ))}
          {/* Set 3 (ultra-wide display coverage) */}
          {FRAMER_LOGOS.map((logo, idx) => (
            <div key={`dup3-${idx}`} className="flex items-center gap-[9px] shrink-0 select-none">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                {logo.glyph}
              </div>
              <span style={logo.style}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
