import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const DEFAULT_DOMAINS = [
  {
    category: "Merit-Based",
    title: "Design & Creativity",
    subtext: "UI/UX, Graphic Design, Branding",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-5 h-5 fill-slate-800">
        <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z" />
      </svg>
    ),
  },
  {
    category: "Need-Based",
    title: "Business & Marketing",
    subtext: "Digital Marketing, Strategy, Sales",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-5 h-5 fill-slate-800">
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
    title: "Technology & Development",
    subtext: "Web Development, Programming, AI",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-5 h-5 fill-slate-800">
        <rect x="20" y="20" width="25" height="25" rx="6" />
        <rect x="55" y="20" width="25" height="25" rx="6" />
        <rect x="20" y="55" width="25" height="25" rx="6" />
        <rect x="55" y="55" width="25" height="25" rx="6" />
      </svg>
    ),
  },
  {
    category: "Government",
    title: "Data & Analytics",
    subtext: "Data Analysis, Visualization, Insights",
    glyph: (
      <svg viewBox="0 0 100 100" className="w-5 h-5 fill-slate-800">
        <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="10" />
        <circle cx="50" cy="50" r="14" />
      </svg>
    ),
  },
];

/**
 * Explore Categories Section matching Framer LEROVA template:
 * Clean white cards with geometric glyphs and "Explore Category ->"
 */
export default function DomainPillsSection({
  eyebrow = "Find your direction",
  headline = "Discover What You Can Become. From creative thinking to technical expertise, explore learning paths that match your interests and ambitions.",
  onSelectCategory = () => {},
  domains = DEFAULT_DOMAINS,
}) {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F9FA] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="max-w-2xl space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            {eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
            {headline}
          </h2>
        </div>

        {/* 4 Clean Minimalist Category Cards (Framer Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {domains.map((dom, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCategory(dom.category)}
              className="group bg-white hover:bg-slate-50 text-slate-900 p-8 rounded-[28px] border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-8"
            >
              {/* Glyph Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#F8F9FA] flex items-center justify-center border border-slate-200/70 text-slate-800 group-hover:scale-105 transition-transform">
                {dom.glyph}
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  {dom.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {dom.subtext}
                </p>
              </div>

              {/* Action Link */}
              <div className="flex items-center text-xs font-bold text-slate-800 group-hover:text-black pt-2 transition">
                <span>Explore Category</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
