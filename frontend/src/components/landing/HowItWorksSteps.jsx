import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function HowItWorksSteps() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-[#f4f4f5]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Header */}
        <div className="max-w-xl space-y-2">
          <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] lg:text-[48px] leading-tight text-slate-950 tracking-[-0.035em]">
            Three Simple Steps. A World of Possibilities.
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white rounded-[24px] p-7 border border-slate-200/60 shadow-xs flex flex-col justify-between min-h-[480px]">
            {/* Top Mockup Canvas */}
            <div className="w-full h-52 bg-[#f4f4f5] rounded-2xl p-4 flex flex-col justify-center gap-2">
              <span className="text-[11px] font-semibold text-slate-500 font-['Manrope']">Pick a scheme category</span>
              <div className="bg-white p-2.5 rounded-xl shadow-2xs border border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-800">
                <span>Merit & Engineering</span>
                <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-900 bg-slate-900"></span>
              </div>
              <div className="bg-white p-2.5 rounded-xl shadow-2xs border border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-600">
                <span>Need-Based Aid (EWS)</span>
                <span className="w-3.5 h-3.5 rounded-full border border-slate-300"></span>
              </div>
              <div className="bg-slate-900 text-white text-center py-2 rounded-xl text-xs font-semibold mt-1">
                Start Verification
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 pt-6">
              <span className="text-[11px] font-mono font-medium text-slate-400 font-['Manrope']">
                {"{ step 01 }"}
              </span>
              <h3 className="text-[20px] font-semibold text-slate-900 tracking-tight font-['Manrope']">
                Choose Your Scheme
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                Find scholarships and financial aid programs that align with your academic achievements, background, and goals.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[24px] p-7 border border-slate-200/60 shadow-xs flex flex-col justify-between min-h-[480px]">
            {/* Top Mockup Canvas */}
            <div className="w-full h-52 bg-[#f4f4f5] rounded-2xl p-4 flex flex-col justify-center gap-2">
              <div className="bg-white p-2.5 rounded-xl shadow-2xs border border-slate-200/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-800">DigiLocker Records</div>
                  <div className="text-[10px] text-slate-400">Class 12 Marks · Verified</div>
                </div>
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              </div>
              <div className="bg-white p-2.5 rounded-xl shadow-2xs border border-slate-200/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-800">OCR Extraction</div>
                  <div className="text-[10px] text-slate-400">Subject aggregate: 94.2%</div>
                </div>
                <span className="text-xs font-bold text-slate-800">94%</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl shadow-2xs border border-slate-200/60 flex items-center justify-between opacity-60">
                <div>
                  <div className="text-xs font-semibold text-slate-800">Policy Verification</div>
                  <div className="text-[10px] text-slate-400">Quorum review in progress</div>
                </div>
                <span className="text-xs font-bold text-slate-400">—</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 pt-6">
              <span className="text-[11px] font-mono font-medium text-slate-400 font-['Manrope']">
                {"{ step 02 }"}
              </span>
              <h3 className="text-[20px] font-semibold text-slate-900 tracking-tight font-['Manrope']">
                Verify at Your Pace
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                Upload your credentials once. High-precision OCR automatically calculates eligibility and authenticates official records.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[24px] p-7 border border-slate-200/60 shadow-xs flex flex-col justify-between min-h-[480px]">
            {/* Top Mockup Canvas */}
            <div className="w-full h-52 bg-[#f4f4f5] rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
              <img
                src="/images/step-card.jpg"
                alt="Approved Sanction"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/60 shadow-xs space-y-1">
                <div className="text-[11px] font-semibold text-emerald-700">✓ Scheme Sanctioned</div>
                <div className="text-xs font-bold text-slate-900">₹1,20,000 Disbursement Approved</div>
                <div className="text-[10px] text-slate-500">Credited to Lovely Professional University Fee Ledger</div>
              </div>
              <div className="relative z-10 text-[10px] text-slate-600 font-semibold bg-white/80 backdrop-blur-xs py-1 px-2.5 rounded-md self-start">
                Quorum Sign-Off Complete
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 pt-6">
              <span className="text-[11px] font-mono font-medium text-slate-400 font-['Manrope']">
                {"{ step 03 }"}
              </span>
              <h3 className="text-[20px] font-semibold text-slate-900 tracking-tight font-['Manrope']">
                Put Aid Into Action
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                Apply your sanctioned awards directly to tuition fees, university living expenses, and academic research pursuits.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Subtext */}
        <div className="text-center text-slate-400 text-xs font-['Manrope']">
          Start small, stay consistent, and turn every verified document into educational opportunity.
        </div>

      </div>
    </section>
  );
}
