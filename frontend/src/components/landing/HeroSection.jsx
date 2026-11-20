import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const HERO_SCHOLARS = [
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
    title: "Easy Verification",
    description: "Upload your marksheets once. They are verified and ready for all university scholarships.",
    badge: "Fast & Simple",
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
    title: "Students Supported*",
    description: "Over 10,000 students verified and funded across university programs.",
    badge: "Direct Transfer",
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
    title: "Available Schemes*",
    description: "Merit, sports, defense, and need-based scholarships all in one single place.",
    badge: "All in One",
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
    title: "Approval Accuracy*",
    description: "Clear eligibility rules with fair committee reviews. No hidden rejections.",
    badge: "Fair & Clear",
    avatars: [
      "/images/avatar-3.jpg", 
      "/images/mentor-2.jpg",
      "/images/avatar-1.jpg",
      "/images/mentor-4.jpg"
    ]
  }
];

export default function HeroSection({
  eyebrow = "INSTITUTIONAL SCHOLARSHIP PLATFORM",
  headlineSans = "Verify credentials.",
  headlineSerif = "claim your scholarship.",
  description = "The official scholarship portal for Lovely Professional University. Upload your marksheets, check your eligibility in minutes, and get your tuition scholarship approved with zero paperwork.",
  onExploreClick = () => {},
  onHowItWorksClick = () => {},
  tabs = DEFAULT_TABS,
}) {
  const [activeTabId, setActiveTabId] = useState("01");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic Tab Animation / Rotation (every 4.5 seconds unless paused)
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

  // Automatic Hero Image Carousel (every 5.5 seconds unless paused)
  useEffect(() => {
    if (isPaused) return;
    const imgInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_SCHOLARS.length);
    }, 5500);
    return () => clearInterval(imgInterval);
  }, [isPaused]);

  return (
    <div id="home" className="w-full">
      {/* Framer Panel Container - Responsive height & padding */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden min-h-[660px] sm:min-h-[760px] lg:h-[893px] flex flex-col justify-between pt-[88px] sm:pt-[108px] lg:pt-[125px] pb-5 sm:pb-7 lg:pb-9 px-4 sm:px-7 lg:px-9 shadow-2xl transition-all"
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
              className={`absolute top-0 left-0 w-full h-full object-cover object-[50%_25%] sm:object-[50%_30%] select-none transition-all duration-1000 ease-in-out ${
                idx === currentImageIndex 
                  ? 'opacity-100 scale-100 z-1' 
                  : 'opacity-0 scale-[1.03] z-0 pointer-events-none'
              }`}
            />
          ))}
        </div>

        {/* Layer 2: Lighting Shade Overlay (Desktop) */}
        <div 
          className="hidden sm:block absolute inset-0 pointer-events-none z-1"
          style={{
            background: 'linear-gradient(100deg, rgba(88, 92, 104, 0.5) 0%, rgba(88, 92, 104, 0.12) 46%, rgba(88, 92, 104, 0) 70%)'
          }}
        />

        {/* Layer 2: Lighting Shade Overlay (Mobile High-Contrast for Readability) */}
        <div 
          className="sm:hidden block absolute inset-0 pointer-events-none z-1"
          style={{
            background: 'linear-gradient(180deg, rgba(25, 27, 33, 0.6) 0%, rgba(55, 58, 68, 0.35) 45%, rgba(18, 20, 26, 0.75) 100%)'
          }}
        />

        {/* Layer 3: Bottom Vignette Shade Overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[320px] sm:h-[410px] pointer-events-none z-1"
          style={{
            background: 'linear-gradient(rgba(60, 63, 72, 0) 0%, rgba(60, 63, 72, 0.55) 100%)'
          }}
        />

        {/* Layer 4: Headline & Actions with Word-Blur Entrance */}
        <div className="relative z-10 space-y-3 sm:space-y-4 max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-white/90 text-[11px] sm:text-[13px] font-semibold tracking-[0.08em] uppercase font-['Manrope'] animate-word-blur">
            <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-[#ff5a2b] animate-spark-spin overflow-visible">
                <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z" />
              </svg>
            </div>
            <span>{eyebrow}</span>
          </div>

          {/* Headline H1 (Manrope 500) + H2 (Bodoni Moda 400 Italic) - Scaled smoothly from mobile to desktop */}
          <div className="space-y-0.5">
            <h1
              className="font-['Manrope'] font-medium text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[112px] 2xl:text-[128px] leading-[0.94] tracking-[-0.04em] sm:tracking-[-0.055em] lg:tracking-[-0.065em] text-white animate-word-blur break-words"
              style={{ animationDelay: '0.1s' }}
            >
              {headlineSans}
            </h1>
            <h2
              className="font-['Bodoni_Moda'] font-normal italic text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[74px] 2xl:text-[82px] leading-[1.05] tracking-[-0.03em] sm:tracking-[-0.04em] text-white/95 pt-0.5 animate-word-blur break-words"
              style={{ animationDelay: '0.2s' }}
            >
              {headlineSerif}
            </h2>
          </div>

          {/* Action Buttons with Framer Roll Effect - Stacking cleanly on mobile, wrapping on tablet/desktop */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2 sm:pt-3 animate-word-blur w-full sm:w-auto"
            style={{ animationDelay: '0.3s' }}
          >
            <button
              type="button"
              onClick={onExploreClick}
              className="group bg-white hover:bg-slate-100 text-[#171717] font-semibold px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-[13px] tracking-tight transition-all duration-300 shadow-sm cursor-pointer overflow-hidden font-['Manrope'] flex items-center justify-center min-h-[44px]"
            >
              <span className="btn-roll">
                <span className="btn-roll-inner">
                  <span>Explore Scholarships</span>
                  <span>Explore Scholarships</span>
                </span>
              </span>
            </button>
            <button
              type="button"
              onClick={onHowItWorksClick}
              className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 font-medium px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-[13px] transition-all duration-300 active:scale-95 cursor-pointer font-['Manrope'] flex items-center justify-center min-h-[44px]"
            >
              How It Works
            </button>
          </div>
        </div>

        {/* Layer 5: Bottom Section (Paragraph on Left + Full-Width 4 Responsive Reflowing Tabs) */}
        <div className="relative z-10 space-y-3 w-full mt-4 sm:mt-0">
          {/* Paragraph stacked above the tabs on the left */}
          <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-full sm:max-w-[350px] font-normal font-['Manrope']">
            {description}
          </p>

          {/* 4 Pinned Bottom Tabs spanning the full width with fixed baseline heights */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-end gap-2.5 sm:gap-3 min-h-auto sm:min-h-[136px]">
            {tabs.map((tab) => {
              const isOpen = activeTabId === tab.id;

              if (isOpen) {
                return (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className="w-full sm:w-[300px] md:w-[320px] lg:w-[370px] min-h-[128px] sm:h-[136px] bg-white rounded-[16px] p-3.5 sm:p-4.5 shadow-[0_20px_40px_-20px_rgba(23,23,23,0.35)] flex flex-col justify-between transition-all duration-300 cursor-pointer select-none shrink-0"
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
                      <Minus className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 text-[12px] leading-relaxed font-normal font-['Manrope'] line-clamp-2 my-1">
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
                            className="w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] rounded-full object-cover border-2 border-white shadow-xs"
                          />
                        ))}
                      </div>
                      <span className="bg-[#f4f4f5] text-[#171717] text-[10.5px] font-medium font-['Manrope'] px-2.5 py-0.5 rounded-full shrink-0">
                        {tab.badge}
                      </span>
                    </div>
                  </div>
                );
              }

              // Collapsed Tab matching Framer exact layout with locked height
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className="w-full sm:w-auto sm:flex-1 h-[46px] sm:h-[50px] bg-white hover:bg-slate-50 rounded-[14px] px-3.5 sm:px-4 shadow-[0_20px_40px_-20px_rgba(23,23,23,0.35)] flex items-center justify-between gap-2.5 cursor-pointer transition-all duration-200 select-none shrink-0"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <span className="w-5 h-5 rounded-full bg-[#171717] text-white text-[10.5px] font-semibold flex items-center justify-center shrink-0 font-['Manrope']">
                      {tab.badgeNumber}
                    </span>
                    <span className="font-['Manrope'] font-semibold text-[15px] sm:text-[17px] text-[#171717] tracking-[-0.05em] shrink-0">
                      {tab.value}
                    </span>
                    <span className="text-slate-500 text-[12px] sm:text-[13px] font-normal font-['Manrope'] truncate">
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
