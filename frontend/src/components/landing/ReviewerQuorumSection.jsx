import React from 'react';

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
  eyebrow = "Learn from the best",
  headline = "Experience Meets Rigor in Governance.",
  subheadline = "Reviewed by faculty deans and verification officers who uphold institutional standards across all sanctioned scholarships.",
  reviewers = REVIEWERS,
}) {
  return (
    <section id="verification" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
              {eyebrow}
            </span>
          </div>
          <div className="lg:col-span-8 space-y-3">
            <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] leading-tight text-slate-950 tracking-[-0.035em]">
              {headline}
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed font-normal font-['Manrope'] max-w-xl">
              {subheadline}
            </p>
          </div>
        </div>

        {/* 4 Monochrome Portrait Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviewers.map((rev, idx) => (
            <div
              key={idx}
              className="group space-y-3 cursor-pointer"
            >
              {/* Photo Box with Greyscale Effect */}
              <div className="relative rounded-[20px] overflow-hidden aspect-[3/4] bg-slate-100">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full">
                    {rev.tag}
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="space-y-0.5">
                <h3 className="text-[17px] font-semibold text-slate-900 tracking-tight font-['Manrope']">
                  {rev.name}
                </h3>
                <p className="text-[13px] text-slate-500 font-normal font-['Manrope']">
                  {rev.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
