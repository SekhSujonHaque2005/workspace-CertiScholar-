import React from 'react';

const LOGOS = [
  { name: "TERRAFOLD", glyph: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3"/></svg>, type: "caps" },
  { name: "lumen & co", glyph: <span className="text-xs">✱</span>, type: "lower" },
  { name: "orbita", glyph: <span className="text-xs">⚛</span>, type: "lower" },
  { name: "KINDRA", glyph: <span className="text-xs">✱</span>, type: "caps" },
  { name: "nuvio", glyph: <span className="text-xs">❖</span>, type: "lower" },
  { name: "Halden", glyph: <span className="text-xs">:::</span>, type: "caps" },
  { name: "MOSAIQ", glyph: <span className="text-xs">≈</span>, type: "caps" },
];

/**
 * Continuous Infinite Marquee Logo Ticker matching Framer LEROVA template:
 * Smooth linear scroll to left with 76px gap, pause-on-hover
 */
export default function TrustStatsGrid({
  headline = "Learning that moves you forward.",
  sublabel = "Join a growing community of curious minds, ambitious scholars, and accredited institutions.",
}) {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Copy */}
        <div className="space-y-1">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
            {headline}
          </h3>
          <p className="text-xs text-slate-500 max-w-xl mx-auto font-normal">
            {sublabel}
          </p>
        </div>

        {/* Infinite Marquee Ticker Track */}
        <div className="relative pt-4 w-full overflow-hidden mask-fade">
          <div className="animate-ticker items-center space-x-[76px] opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Set 1 */}
            {LOGOS.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-700 shrink-0 select-none">
                {logo.glyph}
                <span className={logo.type === "caps" ? "tracking-widest uppercase font-mono" : "tracking-tight lowercase"}>
                  {logo.name}
                </span>
              </div>
            ))}
            {/* Set 2 (for continuous seamless loop) */}
            {LOGOS.map((logo, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-700 shrink-0 select-none">
                {logo.glyph}
                <span className={logo.type === "caps" ? "tracking-widest uppercase font-mono" : "tracking-tight lowercase"}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
