import React from 'react';
import { ShieldCheck, Scale, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

const DEFAULT_FEATURES = [
  {
    tag: "{ verification }",
    title: "Verified Authenticity",
    description: "Academic marksheets, board certificates, and income records authenticated directly via DigiLocker and official university gazettes.",
    icon: ShieldCheck,
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    tag: "{ anti-stacking }",
    title: "Zero Double-Counting",
    description: "Automated policy rule engine prevents conflicting scholarship stacking and preserves financial aid quotas for deserving peers.",
    icon: Scale,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    tag: "{ calculation }",
    title: "Automated Calculations",
    description: "High-precision OCR extracts subject marks and mathematically recalculates aggregate percentages, eliminating human entry error.",
    icon: Cpu,
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    tag: "{ quorum }",
    title: "Explainable Quorum",
    description: "Transparent eligibility assessment with auditable rationale, backed by human-in-the-loop review committee quorum.",
    icon: CheckCircle2,
    color: "bg-sky-50 text-sky-600 border-sky-100",
  },
];

/**
 * Value Proposition Section matching Lerova Framer template ("More Than Learning")
 */
export default function ValuePropositionSection({
  eyebrow = "The CertiScholar Difference",
  headline = "More Than Aid. A Step Toward Your Future.",
  description = "Great scholarship platforms should fit your life, eliminate red tape, and help you make verifiable progress. CertiScholar brings discovery, OCR verification, and institutional review into one unified place.",
  onLearnMore = () => {},
  features = DEFAULT_FEATURES,
}) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
              {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              {headline}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {description}
            </p>
            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="bg-white hover:bg-slate-50 text-slate-900 font-bold px-6 py-3 rounded-full text-xs tracking-tight border border-slate-200/90 shadow-xs hover:shadow transition"
              >
                Learn more &rarr;
              </button>
            </div>
          </div>

          {/* Right 4 Pastel Feature Cards with Framer-style Tags */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition duration-300 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${feat.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
