import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

export const HERO_SCHOLARS = [
  {
    id: "scholar-1",
    src: "/images/hero-student.jpg",
    alt: "LPUNEST Academic Merit Scholar",
    cohort: "LPUNEST Merit Scholar",
    focus: "Undergraduate B.Tech"
  },
  {
    id: "scholar-2",
    src: "/images/hero-student-2.jpg",
    alt: "Engineering & Research Scholar",
    cohort: "Need-Based EWS Grantee",
    focus: "Engineering & Robotics"
  },
  {
    id: "scholar-3",
    src: "/images/hero-student-3.jpg",
    alt: "Tech Innovators Fellow",
    cohort: "Defense Ward Fellow",
    focus: "Computer Science & AI"
  }
];

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  // Automatic Hero Image Carousel (every 5.5 seconds unless user hovers)
  useEffect(() => {
    if (isPaused) return;
    const imgInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_SCHOLARS.length);
    }, 5500);
    return () => clearInterval(imgInterval);
  }, [isPaused]);

  return (
    <div id="home" className="w-full">
      {/* Framer Panel Container - Fixed 893px height on desktop with guaranteed 36px bottom gap */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative rounded-[28px] overflow-hidden min-h-[820px] lg:h-[893px] flex flex-col justify-between pt-[100px] sm:pt-[115px] lg:pt-[125px] pb-7 sm:pb-8 lg:pb-9 px-6 sm:px-9 lg:px-9 shadow-2xl"
        style={{
          background: 'linear-gradient(100deg, rgb(124, 129, 139) 0%, rgb(162, 167, 175) 62%, rgb(169, 174, 181) 100%)'
        }}
      >
        {/* Layer 1: Student Photo Carousel with Precise Framer Mask & Silky Crossfade */}
        <div 
          className="absolute top-0 left-0 lg:left-[220px] right-0 lg:right-[-220px] bottom-0 w-full lg:w-[1376px] h-full pointer-events-none z-0 overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 26%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, black 26%)',
            transform: 'scale(1.02)',
            transformOrigin: 'center center'
          }}
        >
          {HERO_SCHOLARS.map((scholar, idx) => (
            <img
              key={scholar.id}
              src={scholar.src}
              alt={scholar.alt}
              className={`absolute top-0 left-0 w-full h-full object-cover object-[50%_30%] select-none transition-all duration-1000 ease-in-out ${
                idx === currentImageIndex 
                  ? 'opacity-100 scale-100 z-1' 
                  : 'opacity-0 scale-[1.03] z-0 pointer-events-none'
              }`}
            />
          ))}
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

        {/* Scholar Slide Indicators & Live Cohort Pill (Top-Right, cleanly clear of hanging header) */}
        <div className="absolute top-[75px] sm:top-[85px] right-6 sm:right-9 z-20 flex items-center gap-2 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 select-none shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a2b] animate-ping" />
          <span className="text-[11px] font-semibold text-white/90 font-['Manrope'] hidden sm:inline">
            {HERO_SCHOLARS[currentImageIndex].cohort}
          </span>
          <div className="flex items-center gap-1.5 ml-1">
            {HERO_SCHOLARS.map((_, sIdx) => (
              <button
                key={sIdx}
                onClick={() => setCurrentImageIndex(sIdx)}
                className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                  sIdx === currentImageIndex 
                    ? 'w-5 bg-white' 
                    : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Switch to scholar ${sIdx + 1}`}
              />
            ))}
          </div>
        </div>

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
          <div className="space-y-0.5">
            <h1 className="font-['Manrope'] font-medium text-[64px] sm:text-[95px] lg:text-[120px] xl:text-[136px] leading-[0.92] tracking-[-0.065em] text-white animate-word-blur" style={{ animationDelay: '0.1s' }}>
              {headlineSans}
            </h1>
            <h2 className="font-['Bodoni_Moda'] font-normal italic text-[40px] sm:text-[62px] lg:text-[76px] xl:text-[86px] leading-[1] tracking-[-0.04em] text-white pt-0.5 animate-word-blur" style={{ animationDelay: '0.2s' }}>
              {headlineSerif}
            </h2>
          </div>

          {/* Action Buttons with Framer Roll Effect */}
          <div className="flex flex-wrap items-center gap-3 pt-3 animate-word-blur" style={{ animationDelay: '0.3s' }}>
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
        <div className="relative z-10 space-y-3 w-full">
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
