import React from 'react';

/**
 * Trusted By / Logo Bar matching Framer LEROVA template:
 * Header + 7 modern brand logos
 */
export default function TrustStatsGrid({
  headline = "Learning that moves you forward.",
  sublabel = "Join a growing community of curious minds, ambitious scholars, and accredited institutions.",
}) {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/60">
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

        {/* 7 Clean Logos matching Framer Template */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          
          {/* TERRAFOLD */}
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm tracking-wider uppercase text-slate-700">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3"/></svg>
            <span>TERRAFOLD</span>
          </div>

          {/* lumen & co */}
          <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm tracking-wide lowercase text-slate-700">
            <span className="text-xs">✱</span>
            <span>lumen &amp; co</span>
          </div>

          {/* orbita */}
          <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm lowercase text-slate-700">
            <span className="text-xs">⚛</span>
            <span>orbita</span>
          </div>

          {/* KINDRA */}
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm tracking-widest uppercase text-slate-700">
            <span className="text-xs">✱</span>
            <span>KINDRA</span>
          </div>

          {/* nuvio */}
          <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm lowercase text-slate-700">
            <span className="text-xs">❖</span>
            <span>nuvio</span>
          </div>

          {/* Halden */}
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm tracking-tight text-slate-700">
            <span className="text-xs">:::</span>
            <span>Halden</span>
          </div>

          {/* MOSAIQ */}
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm tracking-widest uppercase text-slate-700">
            <span className="text-xs">≈</span>
            <span>MOSAIQ</span>
          </div>

        </div>

      </div>
    </section>
  );
}
