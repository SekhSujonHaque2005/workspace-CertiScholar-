import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const DEFAULT_TABS = [
  {
    id: "01",
    label: "Self-Paced Verification",
    number: "01",
    value: null,
    description: "Verify academic marksheets once at your own speed. Valid across all university, state, and central schemes.",
    avatars: [
      "/images/avatar-1.jpg", 
      "/images/avatar-2.jpg", 
      "/images/avatar-3.jpg",
      "/images/avatar-1.jpg"
    ],
    badge: "Expert-led",
  },
  {
    id: "02",
    label: "Active Scholars*",
    number: "02",
    value: "10K+",
    description: "Over 10,000 students verified across Lovely Professional University and partner colleges with zero processing backlog.",
    avatars: ["/images/avatar-2.jpg", "/images/avatar-3.jpg"],
    badge: "Live Network",
  },
  {
    id: "03",
    label: "Verified Schemes*",
    number: "03",
    value: "250+",
    description: "Direct gazette-corroborated scholarships across LPUNEST merit, EWS aid, and armed forces wards.",
    avatars: ["/images/avatar-1.jpg", "/images/avatar-3.jpg"],
    badge: "Gazette Checked",
  },
  {
    id: "04",
    label: "Decision Accuracy*",
    number: "04",
    value: "95%",
    description: "Auditable mathematical verification with zero double-counting, backed by verification officer quorum review.",
    avatars: ["/images/avatar-1.jpg", "/images/avatar-2.jpg"],
    badge: "M5 Quorum",
  },
];

/**
 * Exact Framer LEROVA Hero Section:
 * Full-bleed studio panel with CSS gradient mask on student photo,
 * left & bottom shade overlays, entrance animations, and interactive expandable pills.
 */
export default function HeroSection({
  eyebrow = "YOUR FUTURE, YOUR WAY",
  headlineSans = "Fund education.",
  headlineSerif = "unlock your potential.",
  description = "Learn in-demand skills, explore new possibilities, and turn your ambitions into real-world achievements with CertiScholar. Your next opportunity starts with what you verify today.",
  onExploreClick = () => {},
  onHowItWorksClick = () => {},
  tabs = DEFAULT_TABS,
}) {
  const [activeTabId, setActiveTabId] = useState("01");

  return (
    <section id="home" className="pt-3 sm:pt-4 pb-8 px-3 sm:px-4 max-w-[1400px] mx-auto animate-framer-appear">
      {/* Framer Panel Container */}
      <div 
        className="relative rounded-[28px] overflow-hidden min-h-[760px] lg:min-h-[820px] flex flex-col justify-between pt-[140px] sm:pt-[150px] pb-9 px-6 sm:px-10 lg:px-12 shadow-2xl transition-all"
        style={{
          background: 'linear-gradient(100deg, #7c818b 0%, #a2a7af 62%, #a9aeb5 100%)'
        }}
      >
        {/* Layer 1: Student Photo with Smooth Left-Mask (Framer Signature) */}
        <div 
          className="absolute top-0 right-0 w-full sm:w-[85%] lg:w-[75%] h-full pointer-events-none z-0 overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.8) 25%, black 100%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.8) 25%, black 100%)',
          }}
        >
          <img
            src="/images/hero-student.jpg"
            alt="Student Looking Upwards with Ambition"
            className="w-full h-full object-cover object-[50%_30%] lg:object-[60%_30%] select-none scale-[1.02] transition-transform duration-700"
          />
        </div>

        {/* Layer 2: Left Lighting Shade Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-1"
          style={{
            background: 'linear-gradient(100deg, rgba(88, 92, 104, 0.75) 0%, rgba(88, 92, 104, 0.25) 46%, rgba(88, 92, 104, 0) 70%)'
          }}
        />

        {/* Layer 3: Bottom Vignette Shade Overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[46%] pointer-events-none z-1"
          style={{
            background: 'linear-gradient(to top, rgba(40, 42, 50, 0.85) 0%, rgba(60, 63, 72, 0.4) 60%, transparent 100%)'
          }}
        />

        {/* Layer 4: Foreground Content with Staggered Entrance */}
        <div className="relative z-10 max-w-xl lg:max-w-2xl space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-slate-200 text-xs font-semibold tracking-wider uppercase">
            <span className="text-orange-400">✦</span>
            <span>{eyebrow}</span>
          </div>

          {/* Headline: Grotesque Bold + Luxury Serif Italic */}
          <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-black text-white tracking-tight leading-[1.04]">
            {headlineSans} <br />
            <span className="font-serif italic font-normal tracking-normal text-white drop-shadow-xs">
              {headlineSerif}
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-md font-normal pt-1">
            {description}
          </p>

          {/* Action Buttons with Framer Roll Effect */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={onExploreClick}
              className="group bg-white text-slate-950 hover:bg-slate-100 font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm tracking-tight transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer overflow-hidden"
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
              className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 font-medium px-7 py-3.5 rounded-full text-xs sm:text-sm transition-all duration-300 active:scale-95 cursor-pointer"
            >
              How It Works
            </button>
          </div>
        </div>

        {/* Layer 5: Pinned Bottom Interactive Tabs (Highlights) */}
        <div className="relative z-20 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;

              if (isActive) {
                return (
                  <div
                    key={tab.id}
                    className="bg-white text-slate-900 p-5 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 transition-all duration-400 animate-framer-appear"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-slate-950 text-white text-[10.5px] font-mono font-bold px-1.5 py-0.5 rounded-full">
                          {tab.number}
                        </span>
                        <span className="text-xs font-bold text-slate-900 tracking-tight">
                          {tab.label}
                        </span>
                      </div>
                      <button
                        onClick={() => setActiveTabId(activeTabId === tab.id ? null : tab.id)}
                        className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
                        title="Collapse"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 leading-snug line-clamp-2 mb-3">
                      {tab.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div className="flex -space-x-1.5 overflow-hidden">
                        {tab.avatars.map((av, idx) => (
                          <img
                            key={idx}
                            src={av}
                            alt="Scholar"
                            className="inline-block h-6 w-6 rounded-full border-[1.5px] border-white object-cover"
                          />
                        ))}
                      </div>
                      <span className="bg-[#F8F9FA] border border-slate-200 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {tab.badge}
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className="bg-white/90 hover:bg-white text-slate-900 px-5 py-3.5 rounded-full font-bold text-xs flex items-center justify-between transition-all duration-300 shadow-sm hover:shadow cursor-pointer hover:scale-[1.01]"
                >
                  <span className="flex items-center gap-2 truncate">
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full">
                      {tab.number}
                    </span>
                    {tab.value ? (
                      <span className="font-extrabold text-sm text-slate-950 tracking-tight">
                        {tab.value}
                      </span>
                    ) : null}
                    <span className="truncate text-slate-800">{tab.label}</span>
                  </span>
                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 ml-2">
                    <Plus className="w-3 h-3" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
