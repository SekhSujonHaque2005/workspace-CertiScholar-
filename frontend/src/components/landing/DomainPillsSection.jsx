import React from 'react';

const CATEGORIES = [
  {
    category: "Merit-Based",
    title: "Engineering & Tech",
    subtext: "LPUNEST, JEE Merit, Coding Olympiads",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-slate-800">
        <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z" />
      </svg>
    ),
  },
  {
    category: "Need-Based",
    title: "Financial Assistance (EWS)",
    subtext: "Income Subsidies, Fee Concessions",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-slate-800">
        <circle cx="50" cy="50" r="14" />
        <circle cx="20" cy="50" r="8" />
        <circle cx="80" cy="50" r="8" />
        <circle cx="50" cy="20" r="8" />
        <circle cx="50" cy="80" r="8" />
      </svg>
    ),
  },
  {
    category: "Special",
    title: "Defense & Martyrs Wards",
    subtext: "Armed Forces, Paramilitary Children",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-slate-800">
        <rect x="20" y="20" width="25" height="25" rx="6" />
        <rect x="55" y="20" width="25" height="25" rx="6" />
        <rect x="20" y="55" width="25" height="25" rx="6" />
        <rect x="55" y="55" width="25" height="25" rx="6" />
      </svg>
    ),
  },
  {
    category: "Government",
    title: "Sports & Cultural Merit",
    subtext: "National Medalists, Performing Arts",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-slate-800">
        <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="10" />
        <circle cx="50" cy="50" r="14" />
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
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-14">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
            {eyebrow}
          </span>
          <h2 className="font-['Manrope'] font-medium text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.15] tracking-[-0.035em] text-slate-950">
            {headline}
          </h2>
        </div>

        {/* 4 Category Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCategory(cat.category)}
              className="group bg-[#fafafb] hover:bg-white rounded-[24px] p-7 border border-slate-200/70 hover:border-slate-300 transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between min-h-[340px]"
            >
              {/* Glyph Icon */}
              <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs border border-slate-200/60 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {cat.glyph}
              </div>

              {/* Title & Subtext */}
              <div className="space-y-2">
                <h3 className="text-[18px] font-semibold text-slate-900 tracking-tight font-['Manrope']">
                  {cat.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                  {cat.subtext}
                </p>
              </div>

              {/* Pill Button */}
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200/80 text-[12px] font-semibold text-slate-800 shadow-2xs group-hover:border-slate-400 transition-colors font-['Manrope']">
                  Explore Category
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
