import React from 'react';

const LOGOS = [
  { name: "TERRAFOLD", glyph: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3"/></svg>, type: "caps" },
  { name: "lumen & co", glyph: <span className="text-sm">✱</span>, type: "lower" },
  { name: "orbita", glyph: <span className="text-sm">⚛</span>, type: "lower" },
  { name: "KINDRA", glyph: <span className="text-sm">✱</span>, type: "caps" },
  { name: "nuvio", glyph: <span className="text-sm">❖</span>, type: "lower" },
  { name: "Halden", glyph: <span className="text-sm">:::</span>, type: "caps" },
  { name: "MOSAIQ", glyph: <span className="text-sm">≈</span>, type: "caps" },
];

/**
 * Continuous Infinite Marquee Logo Ticker matching Framer LEROVA template ("Trusted By"):
 * Rounded #f4f4f5 card container sitting directly below Hero Panel with 76px logo gaps.
 */
export default function TrustStatsGrid({
  headline = "Learning that moves you forward.",
  sublabel = "Join a growing community of curious minds, ambitious scholars, and accredited institutions.",
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
