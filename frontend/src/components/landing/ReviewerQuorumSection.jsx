import React from 'react';
import { ArrowRight } from 'lucide-react';

const DEFAULT_MEMBERS = [
  {
    name: "Dr. Rajesh Verma",
    title: "Dean of Student Welfare",
    affiliation: "LPU Financial Aid Directorate",
    image: "/images/mentor-1.jpg",
  },
  {
    name: "Prof. Sunita Sharma",
    title: "Chairperson, Scrutiny Quorum",
    affiliation: "Academic Council",
    image: "/images/mentor-2.jpg",
  },
  {
    name: "Er. Harpreet Singh",
    title: "Lead Verification Officer",
    affiliation: "M5 Document Audit Team",
    image: "/images/mentor-3.jpg",
  },
  {
    name: "Dr. Anita Roy",
    title: "Director of Philanthropic Grants",
    affiliation: "External Trust Liaison",
    image: "/images/mentor-4.jpg",
  },
];

/**
 * Reviewer Quorum Section matching Framer LEROVA Instructors section:
 * Grayscale portrait grid with clean typography and hover zoom
 */
export default function ReviewerQuorumSection({
  eyebrow = "Institutional Governance",
  headline = "Experience Meets Passion for Teaching.",
  description = "Learn from professionals who bring real-world experience, thoughtful guidance, and a passion for helping others grow.",
  members = DEFAULT_MEMBERS,
}) {
  return (
    <section id="verification" className="py-20 sm:py-28 bg-[#F8F9FA] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
              {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {headline}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              {description}
            </p>
          </div>

          <a href="#about" className="text-xs font-bold text-slate-900 hover:text-indigo-600 transition flex items-center gap-1.5 shrink-0">
            <span>Meet All Verification Officers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Grayscale Portraits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <div key={idx} className="group space-y-3 cursor-pointer">
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-slate-200 border border-slate-300/60 shadow-xs">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 tracking-tight">
                  {m.name}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  {m.title}
                </p>
                <p className="text-[10px] text-indigo-600 font-semibold mt-0.5">
                  {m.affiliation}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
