import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

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
 * Reviewer Quorum & Mentors Section matching Lerova Framer template
 */
export default function ReviewerQuorumSection({
  eyebrow = "Institutional Governance",
  headline = "Governed by Academic Quorum & Certified Auditors.",
  description = "No scholarship is awarded through opaque black boxes. Every algorithmic determination is corroborated by certified verification officers.",
  members = DEFAULT_MEMBERS,
}) {
  return (
    <section id="verification" className="py-20 sm:py-28 bg-[#F8F9FA] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="max-w-xl space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            {description}
          </p>
        </div>

        {/* 4 Grayscale Portraits Grid (Lerova Signature Style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <div key={idx} className="group space-y-3">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-slate-200 border border-slate-300/70 shadow-xs">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
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
