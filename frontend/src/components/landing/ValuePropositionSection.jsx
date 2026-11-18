import React from 'react';

const FEATURES = [
  {
    tag: "{ verification }",
    title: "Verified Authenticity",
    description: "Academic marksheets, board certificates, and income records authenticated directly via DigiLocker and official university gazettes.",
    illustration: (
      <div className="w-full h-36 bg-[#f0f1f4] rounded-2xl flex items-center justify-center relative overflow-hidden p-4">
        <div className="bg-white rounded-xl shadow-xs p-3 w-4/5 space-y-2 border border-slate-200/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            <div className="h-2 bg-slate-200 rounded-full w-20"></div>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full w-full"></div>
          <div className="h-1.5 bg-slate-100 rounded-full w-3/4"></div>
        </div>
      </div>
    )
  },
  {
    tag: "{ anti-stacking }",
    title: "Zero Double-Counting",
    description: "Automated policy rule engine prevents conflicting scholarship stacking and preserves financial aid quotas for deserving peers.",
    illustration: (
      <div className="w-full h-36 bg-[#f0f1f4] rounded-2xl flex items-center justify-center relative overflow-hidden p-4">
        <div className="w-20 h-20 rounded-full border-4 border-emerald-500/30 flex items-center justify-center bg-white shadow-xs">
          <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center">
            <span className="text-xs font-bold text-emerald-600">0%</span>
          </div>
        </div>
      </div>
    )
  },
  {
    tag: "{ calculation }",
    title: "Automated Calculations",
    description: "High-precision OCR extracts subject marks and mathematically recalculates aggregate percentages, eliminating human entry error.",
    illustration: (
      <div className="w-full h-36 bg-[#f0f1f4] rounded-2xl flex items-center justify-center relative overflow-hidden p-4">
        <div className="grid grid-cols-2 gap-2 w-3/4">
          <div className="h-10 bg-white rounded-lg shadow-2xs border border-slate-200/60 flex items-center justify-center text-[11px] font-bold text-orange-500">98.4%</div>
          <div className="h-10 bg-white rounded-lg shadow-2xs border border-slate-200/60 flex items-center justify-center text-[11px] font-bold text-slate-700">Rank 1</div>
          <div className="h-10 bg-white rounded-lg shadow-2xs border border-slate-200/60 flex items-center justify-center text-[11px] font-bold text-slate-700">CGPA 9.6</div>
          <div className="h-10 bg-white rounded-lg shadow-2xs border border-slate-200/60 flex items-center justify-center text-[11px] font-bold text-emerald-600">Passed</div>
        </div>
      </div>
    )
  },
  {
    tag: "{ quorum }",
    title: "Explainable Quorum",
    description: "Transparent eligibility assessment with auditable rationale, backed by human-in-the-loop review committee quorum.",
    illustration: (
      <div className="w-full h-36 bg-[#f0f1f4] rounded-2xl flex items-end justify-center gap-2 p-6 overflow-hidden">
        <div className="w-5 bg-sky-400 rounded-t-md h-12"></div>
        <div className="w-5 bg-sky-500 rounded-t-md h-20"></div>
        <div className="w-5 bg-sky-600 rounded-t-md h-16"></div>
        <div className="w-5 bg-sky-700 rounded-t-md h-24"></div>
      </div>
    )
  }
];

export default function ValuePropositionSection({
  eyebrow = "The CertiScholar difference",
  headline = "More Than Aid. A Step Toward Your Future.",
  description = "Great scholarship platforms should fit your life, eliminate red tape, and help you make verifiable progress. CertiScholar brings discovery, OCR verification, and institutional review into one unified place.",
  onLearnMore = () => {},
  features = FEATURES,
}) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Row 1: Header with Left Eyebrow & Right Headline/Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
              {eyebrow}
            </span>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.12] tracking-[-0.04em] text-slate-950">
              {headline}
            </h2>
            <p className="text-slate-500 text-[15px] sm:text-[16px] leading-relaxed max-w-2xl font-normal font-['Manrope']">
              {description}
            </p>
            <div>
              <button
                onClick={onLearnMore}
                className="group inline-flex items-center bg-white hover:bg-slate-50 text-slate-900 font-semibold px-6 py-3 rounded-full text-xs sm:text-[13px] tracking-tight border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all duration-300 cursor-pointer overflow-hidden font-['Manrope']"
              >
                <span className="btn-roll">
                  <span className="btn-roll-inner">
                    <span>Learn more</span>
                    <span>Learn more</span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: 4 Feature Cards in a Full Horizontal Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="group bg-[#fafafb] hover:bg-white rounded-[24px] p-6 border border-slate-200/70 hover:border-slate-300 transition-all duration-300 hover:shadow-md flex flex-col justify-between min-h-[420px]"
            >
              {/* Illustration */}
              {feat.illustration}

              {/* Text Information */}
              <div className="space-y-2.5 pt-4">
                <span className="text-[11px] font-mono font-medium text-slate-400">
                  {feat.tag}
                </span>
                <h3 className="text-[17px] font-semibold text-slate-900 tracking-tight font-['Manrope']">
                  {feat.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
