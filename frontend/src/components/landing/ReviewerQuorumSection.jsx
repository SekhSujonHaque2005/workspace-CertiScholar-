import React from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

// Custom Arrow Up-Right Icon matching Framer
function ArrowUpRightIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-[#171717]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

const REVIEWERS = [
  {
    name: "Olivia Bennett",
    role: "Verification Committee Chair",
    tag: "{ reviewer }",
    image: "/images/mentor-1.jpg",
  },
  {
    name: "Daniel Carter",
    role: "Academic Registrar & Gazettes",
    tag: "{ reviewer }",
    image: "/images/mentor-2.jpg",
  },
  {
    name: "Ethan Brooks",
    role: "Financial Aid Auditor (EWS)",
    tag: "{ reviewer }",
    image: "/images/mentor-3.jpg",
  },
  {
    name: "Sophia Mitchell",
    role: "State Quota Policy Director",
    tag: "{ reviewer }",
    image: "/images/mentor-4.jpg",
  },
];

export default function ReviewerQuorumSection({
  eyebrow = "Governance you can trust",
  headline = "Experience Meets Rigor in Governance.",
  subheadline = "Reviewed by faculty deans and verification officers who uphold institutional standards across all sanctioned scholarships.",
  onMeetReviewers = () => {},
  reviewers = REVIEWERS,
}) {
  return (
    <section id="verification" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Header with Eyebrow on left & Title, Subtitle + Pill Button on right */}
        <ScrollReveal yOffset={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
                {eyebrow}
              </span>
            </div>
            <div className="lg:col-span-8 space-y-5">
              <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] leading-tight text-[#171717] tracking-[-0.035em]">
                {headline}
              </h2>
              <p className="text-[14px] text-slate-500 leading-relaxed font-normal font-['Manrope'] max-w-xl">
                {subheadline}
              </p>
              <div>
                <button
                  onClick={onMeetReviewers}
                  className="group inline-flex items-center bg-white hover:bg-[#171717] text-[#171717] hover:text-white font-semibold px-6 py-2.5 rounded-full text-xs sm:text-[13px] tracking-tight border-[1.5px] border-[#171717] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden font-['Manrope']"
                >
                  <span className="btn-roll">
                    <span className="btn-roll-inner">
                      <span>Meet All Reviewers</span>
                      <span>Meet All Reviewers</span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Monochrome Portrait Cards Grid matching Framer media_1795038288709_59fbca03.jpg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviewers.map((rev, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 100}
              yOffset={40 + idx * 40}
              className="h-full"
            >
              <div className="group space-y-3 cursor-pointer">
                {/* Photo Box with Greyscale Effect & Framer physics */}
                <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] bg-slate-100 shadow-[0_1px_3px_rgba(23,23,23,0.06)]">
                  <img
                    src={rev.image}
                    alt={rev.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-106 transition-all duration-500 ease-out"
                  />
                  {/* Top Left Tag */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[10.5px] font-mono font-medium px-2.5 py-0.5 rounded-full">
                      {rev.tag}
                    </span>
                  </div>

                  {/* Top Right White Circular Arrow Badge matching Framer */}
                  <div className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRightIcon />
                  </div>
                </div>

                {/* Information */}
                <div className="space-y-0.5 pt-1">
                  <h3 className="text-[17px] font-semibold text-[#171717] tracking-tight font-['Manrope']">
                    {rev.name}
                  </h3>
                  <p className="text-[13px] text-slate-500 font-normal font-['Manrope']">
                    {rev.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
