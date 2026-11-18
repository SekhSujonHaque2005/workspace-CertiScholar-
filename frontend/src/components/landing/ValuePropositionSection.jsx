import React from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

// Custom Arrow Up-Right Icon matching Framer #3642559178
function ArrowUpRightIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-[#171717]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

const FEATURES = [
  {
    tag: "{ quorum }",
    title: "Verified by Quorum Experts",
    description: "Academic marksheets, board certificates, and income records authenticated directly by faculty deans and gazette officers.",
    illustration: (
      <div className="w-full h-[190px] bg-white rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xs border border-slate-100">
        <svg viewBox="0 0 200 200" className="w-[170px] h-[170px] overflow-visible">
          {/* Top Lavender Chat Bubble */}
          <g className="animate-float-bob">
            <path
              d="M28 44h96a14 14 0 0 1 14 14v40a14 14 0 0 1-14 14H70l-24 20v-20H28a14 14 0 0 1-14-14V58a14 14 0 0 1 14-14z"
              fill="rgb(207, 203, 250)"
              stroke="rgb(23, 23, 23)"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* 3 Bouncing Dots */}
            <circle cx="46" cy="78" r="6" fill="rgb(23, 23, 23)" className="animate-dot-1" />
            <circle cx="76" cy="78" r="6" fill="rgb(23, 23, 23)" className="animate-dot-2" />
            <circle cx="106" cy="78" r="6" fill="rgb(23, 23, 23)" className="animate-dot-3" />
          </g>

          {/* Bottom Dark Speech Bubble */}
          <g transform="translate(0, 0)">
            <path
              d="M92 108h80a14 14 0 0 1 14 14v30a14 14 0 0 1-14 14h-14v18l-22-18H92a14 14 0 0 1-14-14v-30a14 14 0 0 1 14-14z"
              fill="rgb(23, 23, 23)"
              stroke="rgb(23, 23, 23)"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path d="M100 130h52M100 146h34" stroke="rgb(255, 255, 255)" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    ),
  },
  {
    tag: "{ flexible }",
    title: "Verify on Your Schedule",
    description: "Fit document verification into your day with instant DigiLocker sync designed to eliminate physical queue delays.",
    illustration: (
      <div className="w-full h-[190px] bg-white rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xs border border-slate-100">
        <svg viewBox="0 0 200 200" className="w-[170px] h-[170px] overflow-visible">
          {/* Clipboard / Calendar Base */}
          <rect
            x="36"
            y="36"
            width="128"
            height="132"
            rx="22"
            fill="rgb(191, 233, 210)"
            stroke="rgb(23, 23, 23)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path d="M66 26v20M134 26v20" stroke="rgb(23, 23, 23)" strokeWidth="3" strokeLinecap="round" />

          {/* White Clock Face */}
          <circle cx="100" cy="108" r="42" fill="rgb(255, 255, 255)" stroke="rgb(23, 23, 23)" strokeWidth="3" />
          
          {/* Hour Hand */}
          <line
            x1="100"
            y1="108"
            x2="100"
            y2="88"
            stroke="rgb(23, 23, 23)"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-clock-hour"
          />
          
          {/* Orange Minute Hand */}
          <line
            x1="100"
            y1="108"
            x2="100"
            y2="74"
            stroke="rgb(255, 90, 43)"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-clock-minute"
          />
          <circle cx="100" cy="108" r="4" fill="rgb(23, 23, 23)" />
        </svg>
      </div>
    ),
  },
  {
    tag: "{ practical }",
    title: "Focus on Explainable Aid",
    description: "Explore transparent eligibility cutoffs, OCR-corroborated marks, and knowledge you can trust before submitting.",
    illustration: (
      <div className="w-full h-[190px] bg-white rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xs border border-slate-100">
        <svg viewBox="0 0 200 200" className="w-[170px] h-[170px] overflow-visible">
          {/* Soft Shadow */}
          <ellipse cx="100" cy="178" rx="66" ry="6" fill="rgb(23, 23, 23)" opacity="0.08" />

          {/* Lavender Cube */}
          <rect
            x="42"
            y="112"
            width="62"
            height="62"
            rx="12"
            fill="rgb(207, 203, 250)"
            stroke="rgb(23, 23, 23)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Orange Sphere */}
          <circle
            cx="138"
            cy="142"
            r="32"
            fill="rgb(255, 90, 43)"
            stroke="rgb(23, 23, 23)"
            strokeWidth="3"
            className="animate-float-bob"
          />

          {/* Mint Triangle */}
          <path
            d="M74 34l40 70H34z"
            fill="rgb(191, 233, 210)"
            stroke="rgb(23, 23, 23)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="animate-float-bob"
            style={{ animationDelay: '0.5s' }}
          />

          {/* Yellow Rotating Diamond */}
          <rect
            x="132"
            y="40"
            width="34"
            height="34"
            rx="8"
            fill="rgb(255, 224, 138)"
            stroke="rgb(23, 23, 23)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            transform="rotate(25 149 57)"
            className="animate-float-bob"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>
    ),
  },
  {
    tag: "{ progress }",
    title: "Make Progress That Matters",
    description: "Track application milestones in real time, receive quorum decision rationale, and turn verified credentials into disbursed aid.",
    illustration: (
      <div className="w-full h-[190px] bg-white rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xs border border-slate-100">
        <svg viewBox="0 0 200 200" className="w-[170px] h-[170px] overflow-visible">
          {/* Baseline */}
          <path d="M28 168h148" stroke="rgb(23, 23, 23)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />

          {/* Bar 1: Mint */}
          <rect
            x="40"
            y="122"
            width="26"
            height="44"
            rx="7"
            fill="rgb(191, 233, 210)"
            stroke="rgb(23, 23, 23)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{ transformOrigin: 'bottom', transformBox: 'fill-box' }}
          />

          {/* Bar 2: Lavender */}
          <rect
            x="76"
            y="96"
            width="26"
            height="70"
            rx="7"
            fill="rgb(207, 203, 250)"
            stroke="rgb(23, 23, 23)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{ transformOrigin: 'bottom', transformBox: 'fill-box' }}
          />

          {/* Bar 3: Yellow */}
          <rect
            x="112"
            y="68"
            width="26"
            height="98"
            rx="7"
            fill="rgb(255, 224, 138)"
            stroke="rgb(23, 23, 23)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{ transformOrigin: 'bottom', transformBox: 'fill-box' }}
          />

          {/* Bar 4: Orange */}
          <rect
            x="148"
            y="38"
            width="26"
            height="128"
            rx="7"
            fill="rgb(255, 90, 43)"
            stroke="rgb(23, 23, 23)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{ transformOrigin: 'bottom', transformBox: 'fill-box' }}
          />

          {/* Trendline */}
          <path
            d="M36 104l34-22 34 8 52-44"
            stroke="rgb(23, 23, 23)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M140 44l18 2-4 18" stroke="rgb(23, 23, 23)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    ),
  },
];

export default function ValuePropositionSection({
  eyebrow = "The CertiScholar difference",
  headline = "More Than Aid. A Step Toward Your Future.",
  description = "Great scholarship platforms should fit your life, eliminate red tape, and help you make verifiable progress. CertiScholar brings discovery, OCR verification, and institutional review into one unified place.",
  onLearnMore = () => {},
  features = FEATURES,
}) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Row 1: Header with Left Eyebrow & Right Headline/Description */}
        <ScrollReveal yOffset={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
                {eyebrow}
              </span>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.12] tracking-[-0.04em] text-[#171717]">
                {headline}
              </h2>
              <p className="text-slate-500 text-[15px] sm:text-[16px] leading-relaxed max-w-2xl font-normal font-['Manrope']">
                {description}
              </p>
              <div>
                <button
                  onClick={onLearnMore}
                  className="group inline-flex items-center bg-white hover:bg-[#171717] text-[#171717] hover:text-white font-semibold px-6 py-2.5 rounded-full text-xs sm:text-[13px] tracking-tight border-[1.5px] border-[#171717] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden font-['Manrope']"
                >
                  <span className="btn-roll">
                    <span className="btn-roll-inner">
                      <span>Learn more</span>
                      <span>Learn more</span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Row 2: 4 Feature Cards with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 100}
              yOffset={40 + idx * 40}
              className="h-full"
            >
              <div className="group bg-[#f4f4f5] hover:bg-white rounded-[22px] p-5 shadow-[0_1px_2px_rgba(23,23,23,0.05)] border border-slate-200/50 hover:border-slate-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between min-h-[440px] cursor-default">
                
                {/* Top: Tag + White Arrow Button */}
                <div className="flex items-center justify-between pb-3">
                  <span className="text-[11.5px] font-mono font-medium text-slate-500 font-['Manrope']">
                    {feat.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRightIcon />
                  </div>
                </div>

                {/* Canvas with Authentic SVG Illustration */}
                {feat.illustration}

                {/* Bottom Copy */}
                <div className="space-y-2 pt-4">
                  <h3 className="text-[17px] font-semibold text-[#171717] tracking-tight font-['Manrope']">
                    {feat.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                    {feat.description}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
