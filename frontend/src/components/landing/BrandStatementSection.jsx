import React from 'react';

export default function BrandStatementSection({
  onStartJourney = () => {},
}) {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Eyebrow */}
        <div className="text-center">
          <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
            Built around you
          </span>
        </div>

        {/* Stage Container with Giant Bodoni Moda Watermark */}
        <div className="relative min-h-[480px] sm:min-h-[580px] flex items-center justify-center">
          
          {/* Watermark Behind */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
            <span className="font-['Bodoni_Moda'] text-[130px] sm:text-[200px] lg:text-[280px] font-normal italic tracking-[-0.04em] text-slate-100 whitespace-nowrap">
              certischolar
            </span>
          </div>

          {/* Center Image (Magazine / Book from Framer) */}
          <div className="relative z-10 w-[240px] sm:w-[320px] rounded-2xl shadow-2xl overflow-hidden border-4 border-white transform hover:scale-105 transition-transform duration-500">
            <img
              src="/images/lerova-magazine.jpg"
              alt="CertiScholar Platform Experience"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating Progress Card (Left) */}
          <div className="absolute left-4 sm:left-12 lg:left-24 bottom-6 sm:bottom-12 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border border-slate-100 max-w-[280px] space-y-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Verification 4 of 5</span>
              <span>{"{ your progress }"}</span>
            </div>
            <div className="text-[14px] font-semibold text-slate-900 font-['Manrope']">
              LPUNEST Eligibility Quorum
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-bold text-emerald-600">98% Verified</span>
              <button
                onClick={onStartJourney}
                className="bg-slate-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full hover:bg-black transition cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>

        </div>

        {/* Copy Below */}
        <div className="text-center max-w-2xl mx-auto space-y-5">
          <h2 className="font-['Manrope'] font-medium text-[32px] sm:text-[42px] leading-tight text-slate-950 tracking-[-0.035em]">
            Your Goals. Your Pace. Your Progress.
          </h2>
          <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
            Institutional verification works best when it feels transparent. Authenticate your marksheets, track your quota status in real time, and keep moving forward with confidence.
          </p>
          <div className="pt-2">
            <button
              onClick={onStartJourney}
              className="group inline-flex items-center bg-[#171717] hover:bg-black text-white px-7 py-3.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight transition-all duration-300 shadow-sm cursor-pointer overflow-hidden font-['Manrope']"
            >
              <span className="btn-roll">
                <span className="btn-roll-inner">
                  <span>Start Your Verification Journey</span>
                  <span>Start Your Verification Journey</span>
                </span>
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
