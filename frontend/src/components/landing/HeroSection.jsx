import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const DEFAULT_TABS = [
  {
    id: "01",
    badgeNumber: "01",
    title: "Self-Paced Learning",
    description: "Learn at your own pace. Grow at your own speed.",
    badge: "Expert-led",
    avatars: [
      "/images/avatar-1.jpg", 
      "/images/avatar-2.jpg", 
      "/images/avatar-3.jpg"
    ]
  },
  {
    id: "02",
    badgeNumber: "02",
    value: "10K+",
    title: "Active Learners*",
    description: "Join over 10,000 ambitious learners mastering real-world skills.",
    badge: "Active Community",
    avatars: [
      "/images/avatar-2.jpg", 
      "/images/avatar-3.jpg",
      "/images/avatar-1.jpg"
    ]
  },
  {
    id: "03",
    badgeNumber: "03",
    value: "250+",
    title: "Expert-Led Courses*",
    description: "Thoughtfully structured curricula designed by industry professionals.",
    badge: "Curated Tracks",
    avatars: [
      "/images/avatar-1.jpg", 
      "/images/avatar-3.jpg",
      "/images/avatar-2.jpg"
    ]
  },
  {
    id: "04",
    badgeNumber: "04",
    value: "95%",
    title: "Learner Satisfaction*",
    description: "Consistently rated 5 stars by students and career switchers worldwide.",
    badge: "Verified Reviews",
    avatars: [
      "/images/avatar-3.jpg", 
      "/images/avatar-2.jpg",
      "/images/avatar-1.jpg"
    ]
  }
];

export default function HeroSection({
  eyebrow = "YOUR FUTURE, YOUR WAY",
  headlineSans = "Build skills.",
  headlineSerif = "unlock your potential.",
  description = "Learn in-demand skills, explore new possibilities, and turn your ambitions into real-world achievements with LEROVA. Your next opportunity starts with what you learn today.",
  onExploreClick = () => {},
  onHowItWorksClick = () => {},
  tabs = DEFAULT_TABS,
}) {
  const [activeTabId, setActiveTabId] = useState("01");

  return (
    <div id="home" className="w-full animate-framer-appear">
      {/* Framer Panel Container */}
      <div 
        className="relative rounded-[28px] overflow-hidden min-h-[820px] lg:min-h-[893px] flex flex-col justify-between pt-[130px] sm:pt-[150px] pb-9 px-6 sm:px-9 lg:px-9 shadow-2xl transition-all"
        style={{
          background: 'linear-gradient(100deg, rgb(124, 129, 139) 0%, rgb(162, 167, 175) 62%, rgb(169, 174, 181) 100%)'
        }}
      >
        {/* Layer 1: Student Photo with Precise Framer Mask */}
        <div 
          className="absolute top-0 left-0 lg:left-[220px] right-0 lg:right-[-220px] bottom-0 w-full lg:w-[1376px] h-full pointer-events-none z-0 overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 26%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, black 26%)',
            transform: 'scale(1.02)'
          }}
        >
          <img
            src="/images/hero-student.jpg"
            alt="Student Ambition"
            className="w-full h-full object-cover object-[50%_30%] select-none"
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
            <span className="text-[#ff5a2b]">✦</span>
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
                  <span>Explore Courses</span>
                  <span>Explore Courses</span>
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

        {/* Layer 5: Bottom Row with Description & Interactive Highlights Tabs */}
        <div className="relative z-10 pt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          
          {/* Paragraph */}
          <p className="text-white/90 text-sm leading-relaxed max-w-[360px] font-normal font-['Manrope']">
            {description}
          </p>

          {/* 4 Interactive Pinned Tabs */}
          <div className="flex flex-wrap sm:flex-nowrap items-end gap-3">
            {tabs.map((tab) => {
              const isOpen = activeTabId === tab.id;

              if (isOpen) {
                return (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className="w-full sm:w-[370px] bg-white rounded-[16px] p-[18px] shadow-[0_20px_40px_-20px_rgba(23,23,23,0.35)] flex flex-col justify-between gap-3.5 transition-all duration-300 cursor-pointer animate-framer-appear"
                  >
                    {/* Head */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#171717] text-white text-[10.5px] font-semibold font-['Manrope'] px-2 py-0.5 rounded-full">
                          {tab.badgeNumber}
                        </span>
                        <h4 className="text-[14px] font-semibold text-slate-900 tracking-tight font-['Manrope']">
                          {tab.title}
                        </h4>
                      </div>
                      <Minus className="w-4 h-4 text-slate-400" />
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 text-[12.5px] leading-relaxed font-normal font-['Manrope']">
                      {tab.description}
                    </p>

                    {/* Learners / Avatars + Badge */}
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
                      <span className="bg-slate-100 text-slate-700 text-[11px] font-medium font-['Manrope'] px-2.5 py-0.5 rounded-full">
                        {tab.badge}
                      </span>
                    </div>
                  </div>
                );
              }

              // Collapsed Tab
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className="bg-white hover:bg-slate-50 rounded-[14px] px-4 py-3 shadow-[0_20px_40px_-20px_rgba(23,23,23,0.35)] flex items-center gap-2.5 cursor-pointer transition-all duration-200 select-none shrink-0"
                >
                  <span className="bg-[#171717] text-white text-[10.5px] font-semibold font-['Manrope'] px-2 py-0.5 rounded-full">
                    {tab.badgeNumber}
                  </span>
                  <span className="font-['Manrope'] font-semibold text-[17px] text-[#171717] tracking-tight tabular-nums">
                    {tab.value}
                  </span>
                  <span className="text-slate-600 text-[13px] font-normal font-['Manrope']">
                    {tab.title}
                  </span>
                  <Plus className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
