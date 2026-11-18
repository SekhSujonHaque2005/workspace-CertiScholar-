import React from 'react';

const LOGOS = [
  {
    name: "DIGILOCKER",
    glyph: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    type: "caps"
  },
  {
    name: "LPU GAZETTE",
    glyph: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    type: "caps"
  },
  {
    name: "CBSE ACADEMIC",
    glyph: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10M7 12h10M7 16h6" />
      </svg>
    ),
    type: "caps"
  },
  {
    name: "NAD DEPOSITORY",
    glyph: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    type: "caps"
  },
  {
    name: "NSP SCHOLARSHIPS",
    glyph: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    type: "caps"
  },
  {
    name: "PFMS LEDGER",
    glyph: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    type: "caps"
  },
  {
    name: "TESSERACT OCR",
    glyph: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    type: "caps"
  },
  {
    name: "POSTGRESQL 16",
    glyph: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3z" />
        <path d="M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" />
        <path d="M4 18c0 1.657 3.582 3 8 3s8-1.343 8-3" />
      </svg>
    ),
    type: "caps"
  },
  {
    name: "REACT & TAILWIND",
    glyph: (
      <span className="text-sm font-bold text-slate-800">⚛</span>
    ),
    type: "caps"
  },
  {
    name: "PYTHON & DJANGO",
    glyph: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    type: "caps"
  },
];

/**
 * Continuous Infinite Marquee Logo Ticker matching Framer LEROVA template ("Trusted By"):
 * Rounded #f4f4f5 card container sitting directly below Hero Panel with 76px logo gaps.
 */
export default function TrustStatsGrid({
  headline = "Institutional Trust & Verification Governance",
  sublabel = "Corroborated across Lovely Professional University, DigiLocker National Vault, and State Gazette Authorities.",
}) {
  return (
    <div className="w-full bg-[#f4f4f5] rounded-[28px] py-11 px-4 sm:px-8 space-y-8 overflow-hidden select-none">
      
      {/* Copy */}
      <div className="text-center space-y-1.5">
        <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight font-['Manrope']">
          {headline}
        </h3>
        <p className="text-[13px] text-slate-500 max-w-xl mx-auto font-normal font-['Manrope']">
          {sublabel}
        </p>
      </div>

      {/* Infinite Marquee Ticker Track with 76px gap */}
      <div className="relative w-full overflow-hidden mask-fade py-2">
        <div className="animate-ticker items-center space-x-[76px] opacity-80 hover:opacity-100 transition-opacity duration-300">
          {/* Set 1 */}
          {LOGOS.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-700 shrink-0 select-none">
              {logo.glyph}
              <span className={logo.type === "caps" ? "tracking-widest uppercase font-mono text-[13px]" : "tracking-tight lowercase text-[14px]"}>
                {logo.name}
              </span>
            </div>
          ))}
          {/* Set 2 (for continuous seamless loop) */}
          {LOGOS.map((logo, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-700 shrink-0 select-none">
              {logo.glyph}
              <span className={logo.type === "caps" ? "tracking-widest uppercase font-mono text-[13px]" : "tracking-tight lowercase text-[14px]"}>
                {logo.name}
              </span>
            </div>
          ))}
          {/* Set 3 (ensures ultra-wide monitors never see gaps) */}
          {LOGOS.map((logo, idx) => (
            <div key={`dup3-${idx}`} className="flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-700 shrink-0 select-none">
              {logo.glyph}
              <span className={logo.type === "caps" ? "tracking-widest uppercase font-mono text-[13px]" : "tracking-tight lowercase text-[14px]"}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
