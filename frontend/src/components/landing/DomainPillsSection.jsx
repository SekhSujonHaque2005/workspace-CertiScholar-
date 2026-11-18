import React, { useState } from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const CATEGORIES = [
  {
    id: "merit",
    category: "Merit Scholarships",
    title: "Merit & Engineering",
    subtext: "LPUNEST, JEE Ranks, Board Percentiles",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 overflow-visible" fill="none">
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="16"
            x2="50"
            y2="28"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="9" stroke="currentColor" strokeWidth="4" />
      </svg>
    ),
  },
  {
    id: "ews",
    category: "Need-Based Aid",
    title: "Need-Based Financial Aid",
    subtext: "Tehsildar EWS, Low-Income Waivers",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 overflow-visible" fill="none">
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="14"
            x2="50"
            y2="50"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
      </svg>
    ),
  },
  {
    id: "defense",
    category: "Special Wards",
    title: "Faculty & Special Wards",
    subtext: "Defense Anudaan, Shikshak Samman",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 overflow-visible" fill="none">
        <ellipse cx="50" cy="50" rx="36" ry="14" stroke="currentColor" strokeWidth="4" />
        <ellipse cx="50" cy="50" rx="36" ry="14" stroke="currentColor" strokeWidth="4" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="36" ry="14" stroke="currentColor" strokeWidth="4" transform="rotate(120 50 50)" />
        <circle cx="50" cy="50" r="4.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "sports",
    category: "Sports & Cultural",
    title: "Sports & Cultural Grants",
    subtext: "National Medalists, Performing Arts",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 overflow-visible" fill="none">
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="4" />
        <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="3.5" strokeDasharray="3 4.5" />
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
  },
];

export default function DomainPillsSection({
  eyebrow = "FIND YOUR DIRECTION",
  titleBold = "Discover What You Can Become. ",
  titleFaded = "From merit waivers to need-based financial aid, explore scholarship paths that match your achievements and ambitions.",
  onSelectCategory = () => {},
  categories = CATEGORIES,
}) {
  // Default active category index set to 1 (matches Framer screenshot media_1795038208736_8b03505e.png)
  const [activeIdx, setActiveIdx] = useState(1);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-14">
        
        {/* Header matching Framer with red/orange spark and two-tone heading */}
        <ScrollReveal yOffset={30}>
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-2 text-[12px] font-semibold tracking-wider text-[#FF5A2B] uppercase font-['Manrope']">
              <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-current">
                <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z" />
              </svg>
              <span>{eyebrow}</span>
            </div>
            <h2 className="font-['Manrope'] text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.18] tracking-[-0.035em]">
              <span className="font-medium text-[#171717]">{titleBold}</span>
              <span className="font-normal text-slate-400">{titleFaded}</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Category Cards matching Framer layout and active black state */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => {
            const isActive = activeIdx === idx;

            return (
              <ScrollReveal
                key={cat.id}
                delay={idx * 80}
                yOffset={40 + idx * 30}
                className="h-full"
              >
                <div
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => {
                    setActiveIdx(idx);
                    onSelectCategory(cat.category);
                  }}
                  className={`group relative rounded-[26px] p-7 flex flex-col justify-between items-center text-center min-h-[390px] transition-all duration-300 cursor-pointer select-none border ${
                    isActive
                      ? 'bg-[#171717] text-white border-[#171717] shadow-xl scale-[1.01]'
                      : 'bg-[#f4f4f5] text-[#171717] border-slate-200/50 hover:border-slate-300 shadow-2xs hover:shadow-md'
                  }`}
                >
                  {/* Top space filler to balance vertical rhythm */}
                  <div className="w-full pt-4"></div>

                  {/* Centered Glyph & Copy */}
                  <div className="flex flex-col items-center justify-center space-y-7 my-auto">
                    {/* Geometric Emblem */}
                    <div
                      className={`transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-[#171717] group-hover:scale-108'
                      } transition-transform duration-300`}
                    >
                      {cat.glyph}
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-2">
                      <h3
                        className={`text-[19px] sm:text-[20px] font-semibold tracking-tight font-['Manrope'] transition-colors duration-200 ${
                          isActive ? 'text-white' : 'text-[#171717]'
                        }`}
                      >
                        {cat.title}
                      </h3>
                      <p
                        className={`text-[12.5px] leading-relaxed font-normal font-['Manrope'] transition-colors duration-200 max-w-[210px] mx-auto ${
                          isActive ? 'text-zinc-400' : 'text-slate-500'
                        }`}
                      >
                        {cat.subtext}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Pill Button: Appears on Active State, Matches Framer media_1795038208736_8b03505e.png */}
                  <div className="w-full pt-4 pb-2 flex justify-center h-[52px]">
                    <div
                      className={`transition-all duration-300 transform ${
                        isActive
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <span className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-[#171717] text-[12px] font-semibold shadow-sm hover:bg-slate-100 transition-colors font-['Manrope']">
                        Explore Category
                      </span>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
