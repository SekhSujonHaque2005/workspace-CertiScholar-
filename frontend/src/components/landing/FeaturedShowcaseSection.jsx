import React from 'react';
import { Star } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

export const SCHOLARSHIP_SHOWCASE_CARDS = [
  {
    id: "lpu-nest-2026",
    title: "LPUNEST Merit Scholarship 2026",
    category: "Technology & Engineering",
    rating: "4.9",
    price: "100% Tuition Waiver",
    badge: "Top Merit",
    description: "Premier academic award for top percentile scorers in LPUNEST and CBSE/ICSE board qualifying examinations.",
    image: "/images/card-code.jpg",
    meta: ["12 Quorum Reviewers", "48h Turnaround"],
  },
  {
    id: "lpu-ews-2026",
    title: "Need-Based Financial Aid (EWS)",
    category: "Social Justice & Inclusion",
    rating: "4.8",
    price: "₹1,50,000 / Year",
    badge: "Popular",
    description: "Dedicated institutional assistance for economically weaker sections with annual family income certified under ₹2.5L.",
    image: "/images/card-design.jpg",
    meta: ["16 Quorum Members", "72h Turnaround"],
  },
  {
    id: "lpu-shikshak-2026",
    title: "Shikshak Samman & Defense Anudaan",
    category: "Special Wards Scheme",
    rating: "4.9",
    price: "75% Tuition Waiver",
    badge: "Priority",
    description: "Special institutional grant honoring the wards of school teachers, armed forces personnel, and paramilitary martyrs.",
    image: "/images/card-finance.jpg",
    meta: ["8 Officers", "24h Turnaround"],
  },
  {
    id: "lpu-sports-2026",
    title: "Sports Excellence & Cultural Grant",
    category: "Talent & Sports Quota",
    rating: "4.8",
    price: "100% Fee & Hostels",
    badge: "National Rank",
    description: "Full scholarship and athletic training stipend for national and state championship medalists representing LPU.",
    image: "/images/card-business.jpg",
    meta: ["Sports Board", "Fast Track"],
  },
  {
    id: "nsp-post-matric-2026",
    title: "Post-Matric SC/ST DBT Depository",
    category: "National Scholarship Portal",
    rating: "4.9",
    price: "Direct DBT Transfer",
    badge: "Gazette Verified",
    description: "Automated PFMS disbursement pipeline corroborating state gazette registries and DigiLocker vaults.",
    image: "/images/card-data.jpg",
    meta: ["PFMS Integrated", "Instant Validation"],
  },
  {
    id: "lpu-research-2026",
    title: "Academic Research & Innovation Fellowship",
    category: "R&D / Dean's Honor",
    rating: "4.9",
    price: "₹50,000 Term Grant",
    badge: "Dean's Honor",
    description: "Competitive seed grants and computing clusters for undergraduate researchers publishing original Scopus papers.",
    image: "/images/card-marketing.jpg",
    meta: ["Dean Committee", "Term Grants"],
  },
];

export default function FeaturedShowcaseSection({
  eyebrow = "HANDPICKED FOR YOU",
  headline = "Schemes Worth Applying For.",
  subheadline = "Discover verified institutional scholarships that turn academic excellence into fully funded education.",
  onViewDetails = () => {},
  cards = SCHOLARSHIP_SHOWCASE_CARDS,
}) {
  return (
    <section id="scholarships" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="space-y-12">
        
        {/* Section Header */}
        <ScrollReveal yOffset={30}>
          <div className="text-center max-w-2xl mx-auto px-6 space-y-3">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-slate-500 uppercase font-['Manrope']">
              <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-[#FF5A2B] animate-spark-spin">
                <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z" />
              </svg>
              <span>{eyebrow}</span>
            </div>
            <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.08] text-[#171717] tracking-[-0.035em]">
              {headline}
            </h2>
            <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
              {subheadline}
            </p>
          </div>
        </ScrollReveal>

        {/* Automatic Infinite Continuous Carousel Track (Framer Course Track Parity) */}
        <div className="relative w-full overflow-hidden select-none py-2 group">
          {/* Subtle horizontal track containing duplicated sets for endless seamless motion */}
          <div className="animate-showcase-ticker flex items-center gap-5 will-change-transform">
            
            {/* Set 1 */}
            {cards.map((card, idx) => (
              <div
                key={`card-1-${card.id}-${idx}`}
                onClick={() => onViewDetails(card)}
                className="w-[330px] sm:w-[410px] md:w-[440px] h-[540px] sm:h-[560px] bg-[#171717] rounded-[24px] shrink-0 relative overflow-hidden cursor-pointer group/card border border-white/5 hover:border-white/20 transition-all duration-500 hover:scale-[1.015] shadow-lg hover:shadow-2xl"
              >
                {/* Background Photography with shade gradient */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-106 opacity-90 group-hover/card:opacity-100"
                  />
                  {/* Framer LEROVA Exact Shade Mask */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(rgba(10, 10, 12, 0.05) 0%, rgba(10, 10, 12, 0.42) 42%, rgba(10, 10, 12, 0.95) 100%)'
                    }}
                  />
                </div>

                {/* Content Overlay pinned to bottom */}
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8 flex flex-col justify-end space-y-3.5 z-10">
                  
                  {/* Concentric Circle Mark */}
                  <div className="w-[24px] h-[24px] rounded-full border-[2px] border-white/80 flex items-center justify-center">
                    <div className="w-[6px] h-[6px] rounded-full bg-white" />
                  </div>

                  {/* Title and Rating Row */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[20px] sm:text-[22px] font-semibold text-white tracking-tight leading-snug font-['Manrope'] group-hover/card:text-amber-100 transition-colors">
                      {card.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0 pt-0.5 text-[#F5B93A]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-[14px] font-bold text-white font-['Manrope']">{card.rating}</span>
                    </div>
                  </div>

                  {/* Meta: Category & Price/Waiver */}
                  <div className="flex items-center gap-2 text-[12.5px] text-slate-300 font-medium font-['Manrope']">
                    <span>{card.category}</span>
                    <span>·</span>
                    <span className="text-white font-semibold">{card.price}</span>
                  </div>

                  {/* Description */}
                  <p className="text-[12.5px] sm:text-[13px] text-slate-300/90 font-normal leading-relaxed line-clamp-2 font-['Manrope']">
                    {card.description}
                  </p>

                  {/* Bottom Row: Badge & Quorum Metadata */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <span className="bg-white text-[#171717] text-[11px] font-bold px-3 py-1 rounded-full font-['Manrope'] shadow-sm">
                      {card.badge}
                    </span>
                    <div className="flex items-center gap-2 text-[11.5px] text-slate-400 font-['Manrope']">
                      <span>{card.meta[0]}</span>
                      <span>·</span>
                      <span>{card.meta[1]}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}

            {/* Set 2 (for continuous seamless looping) */}
            {cards.map((card, idx) => (
              <div
                key={`card-2-${card.id}-${idx}`}
                onClick={() => onViewDetails(card)}
                className="w-[330px] sm:w-[410px] md:w-[440px] h-[540px] sm:h-[560px] bg-[#171717] rounded-[24px] shrink-0 relative overflow-hidden cursor-pointer group/card border border-white/5 hover:border-white/20 transition-all duration-500 hover:scale-[1.015] shadow-lg hover:shadow-2xl"
              >
                {/* Background Photography with shade gradient */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-106 opacity-90 group-hover/card:opacity-100"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(rgba(10, 10, 12, 0.05) 0%, rgba(10, 10, 12, 0.42) 42%, rgba(10, 10, 12, 0.95) 100%)'
                    }}
                  />
                </div>

                {/* Content Overlay pinned to bottom */}
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8 flex flex-col justify-end space-y-3.5 z-10">
                  <div className="w-[24px] h-[24px] rounded-full border-[2px] border-white/80 flex items-center justify-center">
                    <div className="w-[6px] h-[6px] rounded-full bg-white" />
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[20px] sm:text-[22px] font-semibold text-white tracking-tight leading-snug font-['Manrope'] group-hover/card:text-amber-100 transition-colors">
                      {card.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0 pt-0.5 text-[#F5B93A]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-[14px] font-bold text-white font-['Manrope']">{card.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[12.5px] text-slate-300 font-medium font-['Manrope']">
                    <span>{card.category}</span>
                    <span>·</span>
                    <span className="text-white font-semibold">{card.price}</span>
                  </div>

                  <p className="text-[12.5px] sm:text-[13px] text-slate-300/90 font-normal leading-relaxed line-clamp-2 font-['Manrope']">
                    {card.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <span className="bg-white text-[#171717] text-[11px] font-bold px-3 py-1 rounded-full font-['Manrope'] shadow-sm">
                      {card.badge}
                    </span>
                    <div className="flex items-center gap-2 text-[11.5px] text-slate-400 font-['Manrope']">
                      <span>{card.meta[0]}</span>
                      <span>·</span>
                      <span>{card.meta[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Set 3 (ultra-wide screen coverage) */}
            {cards.map((card, idx) => (
              <div
                key={`card-3-${card.id}-${idx}`}
                onClick={() => onViewDetails(card)}
                className="w-[330px] sm:w-[410px] md:w-[440px] h-[540px] sm:h-[560px] bg-[#171717] rounded-[24px] shrink-0 relative overflow-hidden cursor-pointer group/card border border-white/5 hover:border-white/20 transition-all duration-500 hover:scale-[1.015] shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-106 opacity-90 group-hover/card:opacity-100"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(rgba(10, 10, 12, 0.05) 0%, rgba(10, 10, 12, 0.42) 42%, rgba(10, 10, 12, 0.95) 100%)'
                    }}
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8 flex flex-col justify-end space-y-3.5 z-10">
                  <div className="w-[24px] h-[24px] rounded-full border-[2px] border-white/80 flex items-center justify-center">
                    <div className="w-[6px] h-[6px] rounded-full bg-white" />
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[20px] sm:text-[22px] font-semibold text-white tracking-tight leading-snug font-['Manrope'] group-hover/card:text-amber-100 transition-colors">
                      {card.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0 pt-0.5 text-[#F5B93A]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-[14px] font-bold text-white font-['Manrope']">{card.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[12.5px] text-slate-300 font-medium font-['Manrope']">
                    <span>{card.category}</span>
                    <span>·</span>
                    <span className="text-white font-semibold">{card.price}</span>
                  </div>

                  <p className="text-[12.5px] sm:text-[13px] text-slate-300/90 font-normal leading-relaxed line-clamp-2 font-['Manrope']">
                    {card.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <span className="bg-white text-[#171717] text-[11px] font-bold px-3 py-1 rounded-full font-['Manrope'] shadow-sm">
                      {card.badge}
                    </span>
                    <div className="flex items-center gap-2 text-[11.5px] text-slate-400 font-['Manrope']">
                      <span>{card.meta[0]}</span>
                      <span>·</span>
                      <span>{card.meta[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Footer: View All Button with Framer Roll Effect */}
        <ScrollReveal yOffset={20}>
          <div className="text-center pt-2">
            <button
              onClick={() => onViewDetails(cards[0])}
              className="group inline-flex items-center bg-[#171717] hover:bg-black text-white px-7 py-3.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight transition-all duration-300 shadow-sm cursor-pointer overflow-hidden font-['Manrope']"
            >
              <span className="btn-roll">
                <span className="btn-roll-inner">
                  <span>Explore All Schemes</span>
                  <span>Explore All Schemes</span>
                </span>
              </span>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
