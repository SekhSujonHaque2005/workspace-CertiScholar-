import React from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const CATEGORIES = [
  {
    category: "Design & Creativity",
    title: "Design & Creativity",
    subtext: "UI/UX, Graphic Design, Branding",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 overflow-visible animate-spark">
        <path
          d="M72.00 50.00L94.00 50.00M65.56 65.56L81.11 81.11M50.00 72.00L50.00 94.00M34.44 65.56L18.89 81.11M28.00 50.00L6.00 50.00M34.44 34.44L18.89 18.89M50.00 28.00L50.00 6.00M65.56 34.44L81.11 18.89"
          stroke="rgb(23, 23, 23)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="50" cy="50" r="5" fill="rgb(255, 90, 43)" />
      </svg>
    ),
  },
  {
    category: "Business & Marketing",
    title: "Business & Marketing",
    subtext: "Digital Marketing, Strategy, Sales",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 overflow-visible">
        <path
          d="M50.00 50.00L88.11 72.00M50.00 50.00L50.00 94.00M50.00 50.00L11.89 72.00M50.00 50.00L11.89 28.00M50.00 50.00L50.00 6.00M50.00 50.00L88.11 28.00"
          stroke="rgb(23, 23, 23)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="50" cy="50" r="6" fill="rgb(255, 90, 43)" />
      </svg>
    ),
  },
  {
    category: "Technology & Development",
    title: "Technology & Development",
    subtext: "Web Development, Programming, AI",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 overflow-visible">
        <ellipse
          cx="50"
          cy="50"
          rx="40"
          ry="16"
          fill="none"
          stroke="rgb(23, 23, 23)"
          strokeWidth="5"
          transform="rotate(-25 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="40"
          ry="16"
          fill="none"
          stroke="rgb(23, 23, 23)"
          strokeWidth="5"
          transform="rotate(35 50 50)"
        />
        <circle cx="50" cy="50" r="7" fill="rgb(255, 90, 43)" />
      </svg>
    ),
  },
  {
    category: "Data & Analytics",
    title: "Data & Analytics",
    subtext: "Data Analysis, Visualization, Insights",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 overflow-visible animate-spark" style={{ animationDuration: '40s' }}>
        <circle cx="50" cy="50" r="18" fill="rgb(255, 90, 43)" />
        <g stroke="rgb(23, 23, 23)" strokeWidth="5" strokeLinecap="round">
          <line x1="50" y1="12" x2="50" y2="24" />
          <line x1="50" y1="76" x2="50" y2="88" />
          <line x1="12" y1="50" x2="24" y2="50" />
          <line x1="76" y1="50" x2="88" y2="50" />
          <line x1="23" y1="23" x2="32" y2="32" />
          <line x1="68" y1="68" x2="77" y2="77" />
          <line x1="23" y1="77" x2="32" y2="68" />
          <line x1="68" y1="32" x2="77" y2="23" />
        </g>
      </svg>
    ),
  },
];

export default function DomainPillsSection({
  eyebrow = "FIND YOUR DIRECTION",
  headline = "Discover What You Can Become. From creative thinking to technical expertise, explore learning paths that match your interests and ambitions.",
  onSelectCategory = () => {},
  categories = CATEGORIES,
}) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Header */}
        <ScrollReveal yOffset={30}>
          <div className="space-y-3 max-w-3xl">
            <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
              {eyebrow}
            </span>
            <h2 className="font-['Manrope'] font-medium text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.15] tracking-[-0.035em] text-[#171717]">
              {headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Category Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 100}
              yOffset={40 + idx * 40}
              className="h-full"
            >
              <div
                onClick={() => onSelectCategory(cat.category)}
                className="group bg-[#f4f4f5] hover:bg-white rounded-[22px] p-7 shadow-[0_1px_2px_rgba(23,23,23,0.05)] border border-slate-200/50 hover:border-slate-300 transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col justify-between min-h-[350px]"
              >
                {/* Glyph Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-2xs border border-slate-100 flex items-center justify-center group-hover:scale-108 transition-transform duration-300">
                  {cat.glyph}
                </div>

                {/* Title & Subtext */}
                <div className="space-y-2">
                  <h3 className="text-[18px] font-semibold text-[#171717] tracking-tight font-['Manrope']">
                    {cat.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                    {cat.subtext}
                  </p>
                </div>

                {/* Pill Button */}
                <div>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200/80 text-[12px] font-semibold text-slate-800 shadow-2xs group-hover:bg-[#171717] group-hover:text-white group-hover:border-transparent transition-all duration-200 font-['Manrope']">
                    Explore Category
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
