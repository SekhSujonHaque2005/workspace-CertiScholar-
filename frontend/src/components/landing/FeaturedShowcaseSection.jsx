import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const HIGHLIGHT_CARDS = [
  {
    id: "lpu-nest-2026",
    title: "Modern Web Development",
    altTitle: "LPUNEST Merit Scholarship 2026",
    category: "Technology & Development",
    rating: "4.9",
    price: "$59",
    badge: "Popular",
    description: "Build responsive websites and understand the fundamentals of the modern web.",
    image: "/images/card-code.jpg",
    meta: ["20 Lessons", "8 Hours"],
  },
  {
    id: "lpu-ews-2026",
    title: "Brand Identity & Visual Design",
    altTitle: "Need-Based Financial Assistance (EWS)",
    category: "Design & Creativity",
    rating: "4.8",
    price: "$45",
    badge: "Editor's Pick",
    description: "Shape a brand from idea to identity with colour, type, and visual systems.",
    image: "/images/card-design.jpg",
    meta: ["14 Lessons", "5 Hours"],
  },
  {
    id: "lpu-defense-2026",
    title: "Data Analytics for Beginners",
    altTitle: "Shikshak Samman & Defense Anudaan",
    category: "Data & Analytics",
    rating: "4.7",
    price: "$35",
    badge: "Bestseller",
    description: "Turn raw numbers into clear charts, insights, and better decisions.",
    image: "/images/card-finance.jpg",
    meta: ["15 Lessons", "5.5 Hours"],
  },
];

/**
 * Featured Courses Section matching Framer LEROVA template ("Skills Worth Investing In"):
 * Dark section (#0B0F17) with photography cards, ratings, lessons meta, and roll-effect white pill CTAs
 */
export default function FeaturedShowcaseSection({
  eyebrow = "Handpicked for you",
  headline = "Skills Worth Investing In.",
  subheadline = "Discover thoughtfully designed courses that help you move from curiosity to capability.",
  onViewDetails = () => {},
  cards = HIGHLIGHT_CARDS,
}) {
  return (
    <section id="scholarships" className="py-24 sm:py-32 bg-[#0B0F17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-bold tracking-widest text-indigo-400 uppercase">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            {subheadline}
          </p>
        </div>

        {/* 3 Dark Cards Grid with Framer Hover Physics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group bg-[#161B26] rounded-[28px] border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-slate-700 hover:-translate-y-2 transition-all duration-400 shadow-xl hover:shadow-2xl"
            >
              {/* Image Preview with Aspect Ratio */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Badge Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10">
                    {card.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating, Category & Price Row */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <span className="flex items-center gap-1 text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{card.rating}</span>
                      </span>
                      <span>•</span>
                      <span>{card.category}</span>
                    </div>
                    <span className="text-white font-extrabold text-sm">{card.price}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-extrabold text-white group-hover:text-indigo-300 transition-colors tracking-tight mt-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2 font-normal line-clamp-2">
                    {card.description}
                  </p>
                </div>

                {/* Footer: Meta & White Pill Button with Framer Roll */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-500 font-medium">
                    {card.meta.join(" • ")}
                  </div>

                  <button
                    onClick={() => onViewDetails(card)}
                    className="group/btn bg-white hover:bg-slate-100 text-slate-950 font-bold px-5 py-2.5 rounded-full text-xs transition-all duration-300 cursor-pointer shrink-0 shadow-sm overflow-hidden"
                  >
                    <span className="btn-roll">
                      <span className="btn-roll-inner">
                        <span>View Course</span>
                        <span>View Course</span>
                      </span>
                    </span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-4">
          <button
            onClick={() => onViewDetails(cards[0])}
            className="group inline-flex items-center gap-2 bg-[#202736] hover:bg-[#2b3447] text-white font-bold px-8 py-3.5 rounded-full text-xs tracking-tight border border-slate-700/60 shadow-sm transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
          >
            <span className="btn-roll">
              <span className="btn-roll-inner">
                <span>View All Courses &rarr;</span>
                <span>View All Courses &rarr;</span>
              </span>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
