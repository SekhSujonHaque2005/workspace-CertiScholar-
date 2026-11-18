import React from 'react';
import { Sparkles, ArrowRight, Code2, HeartHandshake, Trophy, Lightbulb } from 'lucide-react';

const DEFAULT_DOMAINS = [
  {
    category: "Merit-Based",
    title: "Engineering & Tech",
    subtext: "LPUNEST Merit, AICTE Pragati, JEE Advanced waiver",
    icon: Code2,
    count: "42 Schemes",
  },
  {
    category: "Need-Based",
    title: "Financial Assistance",
    subtext: "EWS Aid, Single Girl Child, Family Income < ₹3.5 LPA",
    icon: HeartHandshake,
    count: "68 Schemes",
  },
  {
    category: "Special",
    title: "Sports & Cultural",
    subtext: "National medalists, Zonal champions & performing arts",
    icon: Trophy,
    count: "24 Schemes",
  },
  {
    category: "Government",
    title: "Research & Defense",
    subtext: "Doctoral fellowships, patent grants & armed forces wards",
    icon: Lightbulb,
    count: "35 Schemes",
  },
];

/**
 * Domain & Category Selection Section matching Lerova Framer template ("What You Can Become")
 */
export default function DomainPillsSection({
  eyebrow = "What You Can Become",
  headline = "Explore scholarships tailored to your academic discipline.",
  onSelectCategory = () => {},
  domains = DEFAULT_DOMAINS,
}) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="max-w-xl space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            {eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {headline}
          </h2>
        </div>

        {/* 4 Minimalist Stream Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {domains.map((dom, idx) => {
            const Icon = dom.icon;
            return (
              <div
                key={idx}
                onClick={() => onSelectCategory(dom.category)}
                className="group bg-[#F8F9FA] hover:bg-slate-900 text-slate-900 hover:text-white p-7 rounded-3xl border border-slate-200/80 hover:border-slate-800 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 shadow-xs hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-white group-hover:bg-slate-800 text-slate-700 group-hover:text-white flex items-center justify-center border border-slate-200 group-hover:border-slate-700 transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-400 uppercase tracking-wider">
                    {dom.count}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold tracking-tight">
                    {dom.title}
                  </h3>
                  <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-relaxed mt-1 font-normal">
                    {dom.subtext}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-slate-700 group-hover:text-indigo-400 pt-2 transition">
                  <span>Browse Schemes</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
