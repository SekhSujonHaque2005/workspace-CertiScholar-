import React from 'react';
import { Star } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const SCHOLARSHIP_SHOWCASE_CARDS = [
  {
    id: "lpu-nest-2026",
    title: "LPUNEST Merit Scholarship 2026",
    category: "Engineering & Technology",
    rating: "4.9",
    price: "100% Tuition Waiver",
    badge: "Top Merit",
    description: "Top academic award for high scorers in LPUNEST entrance test and 12th board exams.",
    image: "/images/card-code.jpg",
    meta: ["Faculty Approved", "48h Review"],
  },
  {
    id: "lpu-ews-2026",
    title: "Need-Based Financial Aid (EWS)",
    category: "Financial Assistance",
    rating: "4.8",
    price: "₹1,50,000 / Year",
    badge: "Popular",
    description: "Financial support for students with annual family income certified under ₹2.5 Lakh.",
    image: "/images/card-design.jpg",
    meta: ["Income Verified", "3-Day Review"],
  },
  {
    id: "lpu-shikshak-2026",
    title: "Teachers & Defense Wards Grant",
    category: "Special Wards Scheme",
    rating: "4.9",
    price: "75% Tuition Waiver",
    badge: "Priority",
    description: "Special fee concession honoring the children of school teachers and armed forces personnel.",
    image: "/images/card-finance.jpg",
    meta: ["Defense & Teachers", "24h Review"],
  },
  {
    id: "lpu-sports-2026",
    title: "Sports & Cultural Excellence Grant",
    category: "Sports & Talent Quota",
    rating: "4.8",
    price: "100% Fee & Free Hostel",
    badge: "State & National",
    description: "Full college scholarship and free hostel for national and state sports championship medalists.",
    image: "/images/card-business.jpg",
    meta: ["Sports Board", "Fast Track"],
  },
  {
    id: "nsp-post-matric-2026",
    title: "Government SC/ST Scholarship",
    category: "National Scholarship Portal",
    rating: "4.9",
    price: "Direct Bank Transfer",
    badge: "Govt Verified",
    description: "Direct government scholarship transfer verified easily through DigiLocker certificates.",
    image: "/images/card-data.jpg",
    meta: ["Govt Approved", "Direct Bank Credit"],
  },
  {
    id: "lpu-research-2026",
    title: "Student Research & Innovation Grant",
    category: "Research & Innovation",
    rating: "4.9",
    price: "₹50,000 Project Grant",
    badge: "Dean's Honor",
    description: "Project funding and lab resources for students building creative tech and science projects.",
    image: "/images/card-marketing.jpg",
    meta: ["Dean Approved", "Project Grant"],
  },
];

export default function FeaturedShowcaseSection({
  eyebrow = "POPULAR SCHOLARSHIPS",
  headline = "Scholarships Worth Applying For.",
  subheadline = "Explore verified university scholarships that turn your academic hard work into a funded degree.",
  onViewDetails = () => {},
  cards = SCHOLARSHIP_SHOWCASE_CARDS,
}) {
  return (
    <section id="scholarships" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="space-y-12">
        
        {/* Section Header matching Framer red/orange star and typography */}
        <ScrollReveal yOffset={30}>
          <div className="text-center max-w-2xl mx-auto px-6 space-y-3">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#FF5A2B] uppercase font-['Manrope']">
              <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-current">
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
          {/* Seamless horizontal track with smooth scroll and pause on hover */}
          <div className="animate-showcase-ticker flex items-center gap-5 will-change-transform">
            
            {/* Set 1 */}
            {cards.map((card, idx) => (
              <div
                key={`card-1-${card.id}-${idx}`}
                onClick={() => onViewDetails(card)}
                className="w-[330px] sm:w-[410px] md:w-[440px] h-[520px] sm:h-[540px] bg-[#171717] rounded-[26px] p-4.5 sm:p-5 shrink-0 flex flex-col justify-between cursor-pointer group/card border border-white/5 hover:border-white/20 transition-all duration-500 hover:scale-[1.015] shadow-lg hover:shadow-2xl"
              >
                {/* Top: Rounded Image Container matching Framer Image 2 */}
                <div className="relative w-full aspect-[16/11] rounded-[18px] overflow-hidden bg-slate-800 shrink-0 shadow-inner">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-106"
                  />
                  {/* Concentric Circle Mark at bottom-left of image */}
                  <div className="absolute bottom-3 left-3 w-[26px] h-[26px] rounded-full border-[2px] border-white/90 bg-black/40 backdrop-blur-xs flex items-center justify-center shadow-xs">
                    <div className="w-[6px] h-[6px] rounded-full bg-white" />
                  </div>
                </div>

                {/* Content below image */}
                <div className="flex-1 flex flex-col justify-between pt-4 pb-1 space-y-3">
                  {/* Title & Star Rating */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[19px] sm:text-[21px] font-semibold text-white tracking-tight leading-snug font-['Manrope'] group-hover/card:text-amber-100 transition-colors">
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
                  <p className="text-[12.5px] sm:text-[13px] text-slate-400 font-normal leading-relaxed line-clamp-2 font-['Manrope']">
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
                className="w-[330px] sm:w-[410px] md:w-[440px] h-[520px] sm:h-[540px] bg-[#171717] rounded-[26px] p-4.5 sm:p-5 shrink-0 flex flex-col justify-between cursor-pointer group/card border border-white/5 hover:border-white/20 transition-all duration-500 hover:scale-[1.015] shadow-lg hover:shadow-2xl"
              >
                {/* Top: Rounded Image Container matching Framer Image 2 */}
                <div className="relative w-full aspect-[16/11] rounded-[18px] overflow-hidden bg-slate-800 shrink-0 shadow-inner">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-106"
                  />
                  {/* Concentric Circle Mark at bottom-left of image */}
                  <div className="absolute bottom-3 left-3 w-[26px] h-[26px] rounded-full border-[2px] border-white/90 bg-black/40 backdrop-blur-xs flex items-center justify-center shadow-xs">
                    <div className="w-[6px] h-[6px] rounded-full bg-white" />
                  </div>
                </div>

                {/* Content below image */}
                <div className="flex-1 flex flex-col justify-between pt-4 pb-1 space-y-3">
                  {/* Title & Star Rating */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[19px] sm:text-[21px] font-semibold text-white tracking-tight leading-snug font-['Manrope'] group-hover/card:text-amber-100 transition-colors">
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
                  <p className="text-[12.5px] sm:text-[13px] text-slate-400 font-normal leading-relaxed line-clamp-2 font-['Manrope']">
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

          </div>
        </div>

      </div>
    </section>
  );
}
