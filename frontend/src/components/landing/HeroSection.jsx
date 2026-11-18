import React, { useState } from 'react';
import { ArrowRight, Sparkles, Plus, Minus, ShieldCheck, CheckCircle2 } from 'lucide-react';

const DEFAULT_TABS = [
  {
    id: "01",
    label: "DigiLocker Verified",
    sublabel: "Self-Paced Verification",
    description: "Verify academic marksheets once at your own speed. Valid across all university, state, and central schemes.",
    avatars: ["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"],
    badge: "Expert-Verified",
  },
  {
    id: "02",
    label: "10K+ Active Scholars*",
    sublabel: "Empowering Students",
    description: "Over 10,000 students enrolled across Lovely Professional University and partner institutions with zero paperwork delays.",
    avatars: ["/images/avatar-2.jpg", "/images/avatar-3.jpg"],
    badge: "Live Community",
  },
  {
    id: "03",
    label: "250+ Verified Schemes*",
    sublabel: "Institutional & National Aid",
    description: "Direct gazette-corroborated scholarships across LPUNEST merit, EWS need-based, and armed forces wards.",
    avatars: ["/images/avatar-1.jpg", "/images/avatar-3.jpg"],
    badge: "Official Circulars",
  },
  {
    id: "04",
    label: "98% Decision Accuracy*",
    sublabel: "Explainable Quorum",
    description: "Auditable mathematical verification with zero double-counting, backed by verification officer quorum review.",
    avatars: ["/images/avatar-1.jpg", "/images/avatar-2.jpg"],
    badge: "M5 Quorum Approved",
  },
];

/**
 * Hero Section faithfully implementing the Lerova Framer template
 * Includes bold sans + italic serif headline, cutout student photo, and interactive expandable bottom pills.
 */
export default function HeroSection({
  eyebrow = "YOUR FUTURE, YOUR WAY",
  headlineSans = "Fund education.",
  headlineSerif = "unlock your potential",
  description = "Explore verified scholarships, eliminate manual paperwork, and turn your academic ambitions into funded achievements with CertiScholar. Your next opportunity starts with what you verify today.",
  onExploreClick = () => {},
  onHowItWorksClick = () => {},
  tabs = DEFAULT_TABS,
}) {
  const [activeTabId, setActiveTabId] = useState("01");

  return (
    <section id="home" className="px-3 sm:px-6 lg:px-8 pt-2 pb-8 max-w-7xl mx-auto">
      {/* Framer Lerova Rounded Hero Card */}
      <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#67707A] bg-gradient-to-br from-[#747D87] via-[#636C76] to-[#4F5760] text-white overflow-hidden shadow-2xl border border-slate-600/40 min-h-[580px] lg:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 lg:p-14">
        
        {/* Soft Background Radial Lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-900/20 rounded-full blur-2xl pointer-events-none"></div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 text-slate-300 font-semibold tracking-widest text-[11px] uppercase">
              <span className="text-white text-xs">✦</span>
              <span>{eyebrow}</span>
            </div>

            {/* Headline with Bold Sans + Elegant Serif Italic */}
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black tracking-tight leading-[1.04] text-white">
              {headlineSans} <br />
              <span className="font-serif italic font-normal tracking-normal text-slate-100">
                {headlineSerif}
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              {description}
            </p>

            {/* Action Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="bg-white text-slate-950 hover:bg-slate-100 font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm tracking-tight transition shadow-sm hover:shadow active:scale-95"
              >
                Explore Scholarships
              </button>
              <button
                onClick={onHowItWorksClick}
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 font-semibold px-7 py-3.5 rounded-full text-xs sm:text-sm transition active:scale-95"
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Right Cutout Student Photo Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end self-end pointer-events-none mt-4 lg:mt-0">
            <div className="relative w-full max-w-[420px] lg:max-w-[460px] h-[340px] sm:h-[420px] lg:h-[480px]">
              <img
                src="/images/hero-student.jpg"
                alt="Ambitious Student Looking Forward"
                className="w-full h-full object-contain object-bottom filter drop-shadow-2xl select-none"
              />
            </div>
          </div>
        </div>

        {/* Bottom Interactive Expandable Pills Bar (Lerova Signature) */}
        <div className="relative z-20 pt-8 mt-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              
              if (isActive) {
                return (
                  <div
                    key={tab.id}
                    className="bg-white text-slate-900 p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 transition-all duration-300 animate-in fade-in"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        <span className="text-indigo-600 font-extrabold">{tab.id}</span>
                        <span>{tab.label}</span>
                      </span>
                      <button
                        onClick={() => setActiveTabId(activeTabId === tab.id ? null : tab.id)}
                        className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
                        title="Collapse"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 leading-snug line-clamp-2 mb-3">
                      {tab.description}
                    </p>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                      <div className="flex -space-x-1.5 overflow-hidden">
                        {tab.avatars.map((av, idx) => (
                          <img
                            key={idx}
                            src={av}
                            alt="Verified scholar"
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                          />
                        ))}
                      </div>
                      <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
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
                  className="bg-white/90 hover:bg-white text-slate-900 px-4 py-3 sm:py-3.5 rounded-full font-bold text-xs flex items-center justify-between transition-all duration-200 shadow-sm hover:shadow"
                >
                  <span className="flex items-center gap-2 truncate">
                    <span className="text-slate-400 font-extrabold">{tab.id}</span>
                    <span className="truncate">{tab.label}</span>
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
