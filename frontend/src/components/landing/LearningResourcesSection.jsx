import React from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const ARTICLES = [
  {
    tag: "Policy Guides",
    readTime: "6 min read",
    title: "Understanding Quorum Verification & Gazette Corroboration",
    description: "Learn how Lovely Professional University evaluates Class 10/12 marksheets and entrance examination percentiles.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    slug: "#resources"
  },
  {
    tag: "Scholarship Strategy",
    readTime: "5 min read",
    title: "The Anti-Stacking Policy & Merit Optimization Engine",
    description: "Explore how CertiScholar allocates your highest entitled scholarship award without conflicting state or central grants.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    slug: "#resources"
  },
  {
    tag: "Security & Standards",
    readTime: "8 min read",
    title: "DigiLocker Integration & DPDP Act Privacy Standards",
    description: "Understand how your academic identity, roll numbers, and category credentials remain encrypted and auditable.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    slug: "#resources"
  }
];

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
            <h2 className="text-[34px] sm:text-[44px] font-medium text-[#171717] tracking-[-0.04em] leading-tight font-['Manrope']">
              Fresh Perspectives for Your Next Step.
            </h2>
            
            {/* Subhead */}
            <p className="text-[14.5px] text-[#6b6b75] max-w-xl font-normal leading-relaxed font-['Manrope']">
              Explore practical advice, thoughtful insights, and useful resources to guide your scholarship applications and credential verification.
            </p>
          </div>
        </ScrollReveal>

        {/* Action Button */}
        <ScrollReveal yOffset={30} delay={100}>
          <a
            href="#scholarships"
            className="group inline-flex items-center gap-2 bg-[#f4f4f5] hover:bg-[#171717] hover:text-white text-[#171717] px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all cursor-pointer font-['Manrope'] shrink-0"
          >
            <span>Explore All Articles</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </ScrollReveal>
      </div>

      {/* 3 Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {ARTICLES.map((article, idx) => (
          <ScrollReveal key={idx} yOffset={40} delay={idx * 120} duration={800}>
            <div className="group bg-white rounded-[24px] border border-black/8 overflow-hidden hover:shadow-[0_12px_32px_rgba(23,23,23,0.08)] transition-all duration-300 flex flex-col h-full cursor-pointer">
              
              {/* Image Container with Zoom on Hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-[12px] font-medium text-[#9a9aa1] font-['Manrope']">
                    <span className="text-[#ff5a2b] font-semibold">{article.tag}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-[19px] sm:text-[20px] font-semibold text-[#171717] leading-snug tracking-tight font-['Manrope'] group-hover:text-black transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-[13.5px] text-[#6b6b75] leading-relaxed font-normal font-['Manrope']">
                    {article.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[13px] font-semibold text-[#171717] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ff5a2b]" />
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

    </section>
  );
}
