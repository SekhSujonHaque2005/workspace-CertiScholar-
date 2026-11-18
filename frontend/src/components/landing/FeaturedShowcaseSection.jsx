import React from 'react';
import { Bookmark, Share2, ArrowRight, Clock, ShieldCheck, Search, RotateCcw } from 'lucide-react';

const HIGHLIGHT_CARDS = [
  {
    id: "lpu-nest-2026",
    title: "LPUNEST Merit Scholarship 2026",
    publisher: "Lovely Professional University",
    image: "/images/card-code.jpg",
    category: "Merit-Based",
    educationLevel: "Undergraduate",
    amount: "Up to 100% Tuition Fee Waiver",
    deadline: "30 Jun 2026",
    tags: ["LPUNEST Rank 1-500", "B.Tech CSE / AI", "National Level"],
    verified: true,
  },
  {
    id: "lpu-ews-2026",
    title: "Need-Based Financial Assistance (EWS)",
    publisher: "LPU Financial Aid Office",
    image: "/images/card-design.jpg",
    category: "Need-Based",
    educationLevel: "Undergraduate / Postgraduate",
    amount: "₹1,50,000 / Year Support",
    deadline: "15 Aug 2026",
    tags: ["Annual Income < ₹3.5 LPA", "70%+ Aggregate", "All Disciplines"],
    verified: true,
  },
  {
    id: "lpu-defense-2026",
    title: "Shikshak Samman & Armed Forces Anudaan",
    publisher: "Directorate of Student Welfare",
    image: "/images/card-finance.jpg",
    category: "Special",
    educationLevel: "All Levels",
    amount: "₹50,000 Cash Grant",
    deadline: "01 Jul 2026",
    tags: ["Wards of Defense", "Teachers Wards", "National Service"],
    verified: true,
  },
];

/**
 * Featured Opportunities Showcase matching Lerova Framer template ("Skills Worth Investing In")
 * Sleek dark high-contrast cards with photography, tags, and instant modal inspect.
 */
export default function FeaturedShowcaseSection({
  headline = "Scholarships Worth Applying For.",
  subheadline = "Official gazette-corroborated opportunities featuring automated arithmetic recalculation and direct university submission.",
  onViewDetails = () => {},
  onSave = () => {},
  onWhatsAppShare = () => {},
  savedIds = [],
  cards = HIGHLIGHT_CARDS,
}) {
  return (
    <section id="scholarships" className="py-20 sm:py-28 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-bold tracking-widest text-indigo-400 uppercase">
              Curated Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              {headline}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              {subheadline}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">
              Showing 3 Priority Schemes
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
        </div>

        {/* 3 Dark High-Tech Cards (Lerova Signature Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {cards.map((card) => {
            const isSaved = savedIds.includes(card.id);

            return (
              <div
                key={card.id}
                className="group bg-slate-900 rounded-[28px] border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                {/* Visual Top Preview */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10">
                      {card.category}
                    </span>
                    <button
                      onClick={() => onSave(card.id)}
                      className="w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-white border border-white/10 transition"
                      title={isSaved ? "Saved" : "Save scheme"}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-indigo-400 text-indigo-400' : ''}`} />
                    </button>
                  </div>

                  {/* Verified Seal */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>LPU Gazette Corroborated</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-indigo-300 transition-colors tracking-tight line-clamp-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-medium">
                      {card.publisher}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {card.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-slate-800/80 text-slate-300 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Bar */}
                  <div className="pt-4 border-t border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-500 text-[10px] uppercase font-bold block">Benefit Value</span>
                        <span className="font-extrabold text-white text-sm">{card.amount}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-500 text-[10px] uppercase font-bold block">Deadline</span>
                        <span className="font-medium text-slate-300 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {card.deadline}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => onViewDetails(card)}
                        className="flex-1 bg-white hover:bg-slate-100 text-slate-950 font-bold py-2.5 rounded-full text-xs text-center transition"
                      >
                        Inspect Requirements
                      </button>
                      <button
                        onClick={() => onWhatsAppShare(card)}
                        className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-400 transition"
                        title="Share on WhatsApp"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
