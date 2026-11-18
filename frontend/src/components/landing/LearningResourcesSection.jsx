import React from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const ARTICLES = [
  {
    title: "How Quorum Verification Validates Academic Marksheets",
    description: "Learn how Lovely Professional University evaluates Class 10/12 marksheets, calculates percentiles, and prevents credential fraud.",
    image: "https://framerusercontent.com/images/AuNMTxFb2gdYMgzE5W1TQXHnLs4.jpg?width=2000&height=1333",
    slug: "#resources"
  },
  {
    title: "The Anti-Stacking Policy & Merit Optimization Engine",
    description: "Explore how CertiScholar allocates your highest entitled scholarship award without conflicting state or central grants.",
    image: "https://framerusercontent.com/images/NaGMKeql8FnolnikdR35FIRdg.jpg?width=2000&height=1333",
    slug: "#resources"
  },
  {
    title: "DigiLocker Integration & DPDP Act Privacy Standards",
    description: "Understand how your academic identity, roll numbers, and category credentials remain encrypted and auditable.",
    image: "https://framerusercontent.com/images/C1KpNH6IWsrXJkqpcGfPeLfsb8.jpg?width=2000&height=1333",
    slug: "#resources"
  }
];

/**
 * Authentic Framer LEROVA Blog / Resources Section:
 * Matches media_1795034504864_acf8b87c.jpg exactly with
 * borderless column layout, top-right floating arrow pill,
 * authentic photography, and minimal typographic hierarchy.
 */
export default function LearningResourcesSection() {
  return (
    <section id="resources" className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-20 sm:py-28 select-none">
      
      {/* Header Row */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <ScrollReveal yOffset={30}>
          <div className="space-y-3">
            
            {/* Eyebrow with Rotating Spark */}
            <div className="inline-flex items-center gap-2">
              <div className="w-4 h-4 animate-spark">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[#ff5a2b]">
                  <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z"></path>
                </svg>
              </div>
              <span className="text-[12px] font-semibold text-slate-500 font-['Manrope'] uppercase tracking-wider">
                Ideas that inspire
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[38px] sm:text-[46px] font-medium text-[#171717] tracking-[-0.04em] leading-[1.12] font-['Manrope']">
              Fresh Perspectives for Your Next Step.
            </h2>
            
            {/* Subhead */}
            <p className="text-[15.5px] text-[#6b6b75] max-w-2xl font-normal leading-relaxed font-['Manrope']">
              Explore practical advice, thoughtful insights, and useful resources to keep your curiosity alive and guide your scholarship journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Action Button matching Framer outline button */}
        <ScrollReveal yOffset={30} delay={100}>
          <a
            href="#scholarships"
            className="group inline-flex items-center gap-2 border border-[#171717] rounded-full px-6 py-2.5 text-[14px] font-semibold text-[#171717] hover:bg-[#171717] hover:text-white transition-all cursor-pointer font-['Manrope'] shrink-0"
          >
            <span>Explore All Articles</span>
          </a>
        </ScrollReveal>
      </div>

      {/* 3 Articles Grid matching Framer exact layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {ARTICLES.map((article, idx) => (
          <ScrollReveal key={idx} yOffset={40} delay={idx * 120} duration={800}>
            <div className="group flex flex-col cursor-pointer select-none">
              
              {/* Image Container with floating arrow in top-right */}
              <div className="relative aspect-[16/11] rounded-[24px] overflow-hidden bg-slate-100 shadow-xs">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Floating white arrow circle button matching Framer */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#171717] transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 text-[#171717]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#171717] tracking-[-0.03em] font-['Manrope'] mt-4 leading-snug group-hover:text-black transition-colors">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#6b6b75] leading-relaxed font-normal font-['Manrope'] mt-2">
                {article.description}
              </p>

              {/* Read Article Link */}
              <div className="mt-3">
                <span className="text-[14px] font-semibold text-[#171717] hover:underline font-['Manrope']">
                  Read Article
                </span>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

    </section>
  );
}
