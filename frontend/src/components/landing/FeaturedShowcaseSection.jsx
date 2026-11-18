import React from 'react';
import { Star } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const HIGHLIGHT_CARDS = [
  {
    id: "lpu-nest-2026",
    title: "LPUNEST Merit Scholarship 2026",
    category: "Technology & Engineering",
    rating: "4.9",
    price: "100% Waiver",
    badge: "Top Merit",
    description: "Premier academic scholarship awarded based on LPUNEST percentile and 12th board qualifying marks.",
    image: "/images/card-code.jpg",
    meta: ["12 Reviewers", "48h Turnaround"],
  },
  {
    id: "lpu-ews-2026",
    title: "Need-Based Financial Aid (EWS)",
    category: "Social Justice & Inclusion",
    rating: "4.8",
    price: "₹1,50,000/yr",
    badge: "Popular",
    description: "Dedicated assistance for economically weaker sections with annual family income certified under ₹2.5L.",
    image: "/images/card-design.jpg",
    meta: ["16 Quorum Members", "72h Turnaround"],
  },
  {
    id: "lpu-shikshak-2026",
    title: "Shikshak Samman & Defense Anudaan",
    category: "Special Wards Scheme",
    rating: "4.9",
    price: "75% Waiver",
    badge: "Priority",
    description: "Special institutional grant honoring the wards of school teachers, armed forces, and paramilitary personnel.",
    image: "/images/card-finance.jpg",
    meta: ["8 Officers", "24h Turnaround"],
  },
];

export default function FeaturedShowcaseSection({
  eyebrow = "HANDPICKED FOR YOU",
  headline = "Schemes Worth Applying For.",
  subheadline = "Discover verified institutional scholarships that turn academic excellence into fully funded education.",
  onViewDetails = () => {},
  cards = HIGHLIGHT_CARDS,
}) {
  return (
    <section id="scholarships" className="py-24 sm:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal yOffset={30}>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
              {eyebrow}
            </span>
            <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] lg:text-[48px] leading-tight text-[#171717] tracking-[-0.035em]">
              {headline}
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
              {subheadline}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Dark Cards Grid with Framer Dimensions & Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <ScrollReveal
              key={card.id}
              delay={idx * 120}
              yOffset={40 + idx * 40}
              className="h-full"
            >
              <div
                onClick={() => onViewDetails(card)}
                className="group bg-[#171717] text-white rounded-[24px] overflow-hidden flex flex-col justify-between min-h-[560px] p-6 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer h-full border border-white/5 hover:border-white/15"
              >
                {/* Image Preview with Mask & Badge */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-slate-900">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 opacity-90 group-hover:opacity-100 ease-out"
                  />
                  
                  {/* Badge Top Left */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/10 font-['Manrope']">
                      {card.badge}
                    </span>
                  </div>
                </div>

                {/* Card Meta & Title */}
                <div className="space-y-3 pt-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Category, Rating, Price */}
                    <div className="flex items-center justify-between text-xs text-slate-400 font-['Manrope']">
                      <span className="text-slate-300 font-medium">{card.category}</span>
                      <div className="flex items-center gap-1.5 font-semibold text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{card.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-[20px] font-semibold text-white tracking-tight leading-snug font-['Manrope']">
                      {card.title}
                    </h3>

                    <p className="text-[13px] text-slate-400 leading-relaxed font-normal font-['Manrope']">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Row: Meta & Award */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-['Manrope']">
                      <span>{card.meta[0]}</span>
                      <span>·</span>
                      <span>{card.meta[1]}</span>
                    </div>
                    <span className="text-[15px] font-bold text-white font-['Manrope']">
                      {card.price}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer: View All Button with Framer Roll Effect */}
        <ScrollReveal yOffset={20}>
          <div className="text-center pt-4">
            <button
              onClick={() => onViewDetails(cards[0])}
              className="group inline-flex items-center bg-[#171717] hover:bg-black text-white px-7 py-3.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight transition-all duration-300 shadow-sm cursor-pointer overflow-hidden font-['Manrope']"
            >
              <span className="btn-roll">
                <span className="btn-roll-inner">
                  <span>View All Schemes</span>
                  <span>View All Schemes</span>
                </span>
              </span>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
