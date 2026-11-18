import React, { useRef } from 'react';
import { Play } from 'lucide-react';
import { ScrollReveal, useScrollParallax } from '../../hooks/useScrollReveal';

function ArrowUpRightIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-[#171717]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

export default function BrandStatementSection({
  onStartJourney = () => {},
}) {
  const containerRef = useRef(null);
  const parallaxOffset = useScrollParallax(0.08, containerRef);

  return (
    <section id="experience" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Eyebrow */}
        <ScrollReveal yOffset={20}>
          <div className="text-center">
            <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
              Built around you
            </span>
          </div>
        </ScrollReveal>

        {/* Stage Container with Parallax Wordmark & Centered Magazine */}
        <div ref={containerRef} className="relative min-h-[500px] sm:min-h-[620px] flex items-center justify-center">
          
          {/* Giant Bodoni Moda Wordmark matching Framer LEROVA stage (Solid Black #171717 with Parallax) */}
          <div 
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden transition-transform duration-75 ease-out"
            style={{
              transform: `translateX(${parallaxOffset}px)`
            }}
          >
            <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center">
              <span className="absolute right-[calc(50%+130px)] sm:right-[calc(50%+150px)] lg:right-[calc(50%+160px)] font-['Bodoni_Moda'] text-[56px] sm:text-[95px] md:text-[118px] lg:text-[136px] xl:text-[145px] font-normal tracking-[-0.04em] text-[#171717] leading-[0.9] whitespace-nowrap">
                certi
              </span>
              <span className="absolute left-[calc(50%+130px)] sm:left-[calc(50%+150px)] lg:left-[calc(50%+160px)] font-['Bodoni_Moda'] text-[56px] sm:text-[95px] md:text-[118px] lg:text-[136px] xl:text-[145px] font-normal tracking-[-0.04em] text-[#171717] leading-[0.9] whitespace-nowrap">
                scholar
              </span>
            </div>
          </div>

          {/* Center Stage: Lesson Card (Tilted at -7deg, with Framer scale & shadow) */}
          <ScrollReveal yOffset={60} scale={0.92} className="relative z-10">
            <div className="relative w-[260px] sm:w-[340px] rounded-[24px] overflow-hidden shadow-[0_30px_70px_-20px_rgba(23,23,23,0.35)] border-4 border-white transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 bg-slate-900 group">
              <img
                src="/images/lerova-magazine.jpg"
                alt="Verification Experience"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
              />

              {/* Play / Verification Pill at Top */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-white/60">
                <span className="w-5 h-5 rounded-full bg-[#171717] text-white flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span className="text-[11.5px] font-semibold text-[#171717] font-['Manrope']">
                  Verification 4 of 5
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Floating Progress Card (Bottom-Left) */}
          <div className="absolute left-2 sm:left-10 lg:left-24 bottom-4 sm:bottom-8 z-20 bg-white/95 backdrop-blur-md rounded-[20px] p-5 shadow-[0_20px_50px_-15px_rgba(23,23,23,0.25)] border border-slate-100 max-w-[280px] space-y-3 animate-float-bob">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-medium text-slate-400 font-['Manrope']">
                {"{ your progress }"}
              </span>
              <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center">
                <ArrowUpRightIcon />
              </div>
            </div>

            <div className="text-[13.5px] font-semibold text-[#171717] font-['Manrope']">
              LPUNEST Document Quorum
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                <span>Progress</span>
                <span className="text-[#ff5a2b]">68%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#ff5a2b] h-full rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onStartJourney}
                className="w-full bg-[#171717] hover:bg-black text-white text-[11.5px] font-semibold py-2 rounded-xl transition cursor-pointer flex items-center justify-center gap-1 font-['Manrope']"
              >
                <span>Continue</span>
                <span className="text-xs">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Floating Illustrated Cap SVG (Signature Framer Art · Cap at Bottom-Right) */}
          <div className="hidden sm:block absolute right-4 sm:right-12 lg:right-24 bottom-6 z-20 w-[130px] h-[130px] pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible animate-float-bob" style={{ animationDelay: '1.2s' }}>
              <g>
                <path d="M56 104v30c0 16 88 16 88 0v-30" fill="rgb(207, 203, 250)" stroke="rgb(23, 23, 23)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                <path d="M100 52l84 34-84 36-84-36z" fill="rgb(23, 23, 23)" stroke="rgb(23, 23, 23)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                <g>
                  <path d="M184 86v44" stroke="rgb(23, 23, 23)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                  <circle cx="184" cy="138" r="9" fill="rgb(255, 90, 43)" stroke="rgb(23, 23, 23)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                </g>
              </g>
              <path d="M34 44l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="rgb(255, 224, 138)" stroke="rgb(23, 23, 23)" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" className="animate-spark" />
              <circle cx="164" cy="170" r="7" fill="rgb(191, 233, 210)" stroke="rgb(23, 23, 23)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </div>

          {/* Floating Verified Credential Pill (Top-Right) */}
          <div className="hidden sm:flex absolute right-6 sm:right-16 lg:right-28 top-12 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_20px_40px_-12px_rgba(23,23,23,0.18)] border border-slate-100 items-center gap-2.5 animate-float-bob" style={{ animationDelay: '1.8s' }}>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a2b]"></span>
            <div>
              <div className="text-[12px] font-bold text-[#171717]">Verified Credential</div>
              <div className="text-[10px] text-slate-400">Institutional Sanction</div>
            </div>
          </div>

        </div>

        {/* Copy Below */}
        <ScrollReveal yOffset={40}>
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <h2 className="font-['Manrope'] font-medium text-[32px] sm:text-[42px] leading-tight text-[#171717] tracking-[-0.035em]">
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
        </ScrollReveal>

      </div>
    </section>
  );
}
