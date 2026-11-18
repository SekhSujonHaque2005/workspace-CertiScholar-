import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const DEFAULT_TABS = [
  {
    id: "01",
    badgeNumber: "01",
    value: "1-Click",
    title: "Self-Paced Verification",
    description: "Verify academic marksheets once at your own speed. Valid across all university schemes.",
    badge: "Expert Quorum",
    avatars: [
      "/images/avatar-1.jpg", 
      "/images/avatar-2.jpg", 
      "/images/avatar-3.jpg",
      "/images/mentor-1.jpg"
    ]
  },
  {
    id: "02",
    badgeNumber: "02",
    value: "10K+",
    title: "Active Scholars*",
    description: "Over 10,000 scholars verified across Lovely Professional University and state boards.",
    badge: "Direct DBT",
    avatars: [
      "/images/avatar-2.jpg", 
      "/images/avatar-3.jpg",
      "/images/mentor-2.jpg",
      "/images/mentor-3.jpg"
    ]
  },
  {
    id: "03",
    badgeNumber: "03",
    value: "250+",
    title: "Verified Schemes*",
    description: "Institutional, state gazette, and corporate CSR scholarships corroborated in one vault.",
    badge: "State Gazette",
    avatars: [
      "/images/mentor-1.jpg", 
      "/images/mentor-4.jpg",
      "/images/avatar-1.jpg",
      "/images/avatar-3.jpg"
    ]
  },
  {
    id: "04",
    badgeNumber: "04",
    value: "95%",
    title: "Decision Accuracy*",
    description: "AI-assisted OCR document inspection with multi-officer consensus quorum.",
    badge: "Consensus Quorum",
    avatars: [
      "/images/avatar-3.jpg", 
      "/images/mentor-2.jpg",
      "/images/avatar-1.jpg",
      "/images/mentor-4.jpg"
    ]
  }
];

export default function HeroSection({
  eyebrow = "YOUR FUTURE, YOUR WAY",
  headlineSans = "Fund education.",
  headlineSerif = "unlock your potential.",
  description = "Cut through the noise of scattered deadlines, unverified claims, and manual paperwork. CertiScholar brings automated verification, explainable eligibility, and trusted institutional aid directly to your fingertips.",
  onExploreClick = () => {},
  onHowItWorksClick = () => {},
  tabs = DEFAULT_TABS,
}) {
  const [activeTabId, setActiveTabId] = useState("01");
  const [isPaused, setIsPaused] = useState(false);

  // Automatic Tab Animation / Rotation (every 4.5 seconds unless user hovers)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTabId((prev) => {
        const idx = tabs.findIndex((t) => t.id === prev);
        const nextIdx = (idx + 1) % tabs.length;
        return tabs[nextIdx].id;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, tabs]);

  return (
    <div id="home" className="w-full">
      {/* Framer Panel Container - Fixed 893px height on desktop for zero layout shift */}
      <div 
        className="relative rounded-[28px] overflow-hidden min-h-[820px] lg:h-[893px] flex flex-col justify-between pt-[130px] sm:pt-[150px] pb-9 px-6 sm:px-9 lg:px-9 shadow-2xl"
        style={{
          background: 'linear-gradient(100deg, rgb(124, 129, 139) 0%, rgb(162, 167, 175) 62%, rgb(169, 174, 181) 100%)'
        }}
      >
        {/* Layer 1: Student Photo with Rock-Solid Position & Framer Mask */}
        <div 
          className="absolute top-0 left-0 lg:left-[220px] right-0 lg:right-[-220px] bottom-0 w-full lg:w-[1376px] h-full pointer-events-none z-0 overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 26%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, black 26%)',
            transform: 'scale(1.02)',
            transformOrigin: 'center center'
          }}
        >
          <img
            src="/images/hero-student.jpg"
            alt="Student Ambition"
            className="w-full h-full object-cover object-[50%_30%] select-none"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
        </div>

        {/* Layer 2: Lighting Shade Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-1"
          style={{
            background: 'linear-gradient(100deg, rgba(88, 92, 104, 0.5) 0%, rgba(88, 92, 104, 0.12) 46%, rgba(88, 92, 104, 0) 70%)'
          }}
        />

        {/* Layer 3: Bottom Vignette Shade Overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[410px] pointer-events-none z-1"
          style={{
            background: 'linear-gradient(rgba(60, 63, 72, 0) 0%, rgba(60, 63, 72, 0.5) 100%)'
          }}
        />

        {/* Layer 4: Headline & Actions with Word-Blur Entrance */}
        <div className="relative z-10 space-y-4 max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-white/90 text-[13px] font-semibold tracking-[0.08em] uppercase font-['Manrope'] animate-word-blur">
            <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-[#ff5a2b] animate-spark-spin overflow-visible">
                <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z" />
              </svg>
            </div>
            <span>{eyebrow}</span>
          </div>

          {/* Headline H1 (Manrope 500) + H2 (Bodoni Moda 400 Italic) */}
          <div className="space-y-1">
            <h1 className="font-['Manrope'] font-medium text-[68px] sm:text-[105px] lg:text-[135px] xl:text-[150px] leading-[0.9] tracking-[-0.065em] text-white animate-word-blur" style={{ animationDelay: '0.1s' }}>
              {headlineSans}
            </h1>
            <h2 className="font-['Bodoni_Moda'] font-normal italic text-[44px] sm:text-[68px] lg:text-[84px] xl:text-[92px] leading-[1] tracking-[-0.04em] text-white pt-1 animate-word-blur" style={{ animationDelay: '0.2s' }}>
              {headlineSerif}
            </h2>
          </div>

          {/* Action Buttons with Framer Roll Effect */}
          <div className="flex flex-wrap items-center gap-3 pt-4 animate-word-blur" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={onExploreClick}
              className="group bg-white hover:bg-slate-100 text-[#171717] font-semibold px-6 py-3 rounded-full text-xs sm:text-[13px] tracking-tight transition-all duration-300 shadow-sm cursor-pointer overflow-hidden font-['Manrope']"
            >
              <span className="btn-roll">
                <span className="btn-roll-inner">
                  <span>Explore Scholarships</span>
                  <span>Explore Scholarships</span>
                </span>
              </span>
            </button>
            <button
              onClick={onHowItWorksClick}
              className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 font-medium px-6 py-3 rounded-full text-xs sm:text-[13px] transition-all duration-300 active:scale-95 cursor-pointer font-['Manrope']"
            >
              How It Works
            </button>
          </div>
        </div>

        {/* Layer 5: Bottom Section (Paragraph on Left + Full-Width 4 Tabs Aligned to Bottom Baseline) */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative z-10 pt-6 space-y-4 w-full"
        >
          {/* Paragraph stacked above the tabs on the left */}
          <p className="text-white/90 text-sm leading-relaxed max-w-[350px] font-normal font-['Manrope']">
            {description}
          </p>

          {/* 4 Pinned Bottom Tabs spanning the full width with fixed baseline heights */}
          <div className="w-full flex flex-col sm:flex-row items-end gap-3 min-h-[136px]">
            {tabs.map((tab) => {
              const isOpen = activeTabId === tab.id;

              if (isOpen) {
                return (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className="w-full sm:w-[370px] h-[136px] bg-white rounded-[16px] p-4.5 shadow-[0_20px_40px_-20px_rgba(23,23,23,0.35)] flex flex-col justify-between transition-all duration-300 cursor-pointer select-none shrink-0"
                  >
                    {/* Head */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#171717] text-white text-[10.5px] font-semibold flex items-center justify-center shrink-0 font-['Manrope']">
                          {tab.badgeNumber}
                        </span>
                        <h4 className="text-[13.5px] font-semibold text-slate-900 tracking-tight font-['Manrope']">
                          {tab.title}
                        </h4>
                      </div>
                      <Minus className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 text-[12px] leading-relaxed font-normal font-['Manrope'] line-clamp-2">
                      {tab.description}
                    </p>

                    {/* Learners / 4 Avatars + Badge */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center -space-x-2">
                        {tab.avatars.map((av, i) => (
                          <img
                            key={i}
                            src={av}
                            alt="Avatar"
                            className="w-[28px] h-[28px] rounded-full object-cover border-2 border-white shadow-xs"
                          />
                        ))}
                      </div>
                      <span className="bg-[#f4f4f5] text-[#171717] text-[10.5px] font-medium font-['Manrope'] px-2.5 py-0.5 rounded-full">
                        {tab.badge}
                      </span>
                    </div>
                  </div>
                );
              }

              // Collapsed Tab matching Framer exact layout with locked 50px height
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className="flex-1 w-full sm:w-auto h-[50px] bg-white hover:bg-slate-50 rounded-[14px] px-4 shadow-[0_20px_40px_-20px_rgba(23,23,23,0.35)] flex items-center justify-between gap-2.5 cursor-pointer transition-all duration-200 select-none shrink-0"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-5 h-5 rounded-full bg-[#171717] text-white text-[10.5px] font-semibold flex items-center justify-center shrink-0 font-['Manrope']">
                      {tab.badgeNumber}
                    </span>
                    <span className="font-['Manrope'] font-semibold text-[17px] text-[#171717] tracking-[-0.05em] shrink-0">
                      {tab.value}
                    </span>
                    <span className="text-slate-500 text-[13px] font-normal font-['Manrope'] truncate">
                      {tab.title}
                    </span>
                  </div>
                  <Plus className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
