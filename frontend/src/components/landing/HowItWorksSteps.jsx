import React from 'react';
import { Check, Clock, List } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

export default function HowItWorksSteps({
  onViewAllSchemes = () => {
    const el = document.getElementById('scholarships');
    el?.scrollIntoView({ behavior: 'smooth' });
  },
}) {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#f4f4f5]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Top Centered Pill Button matching Framer media_1795038256939_d564954d.png */}
        <ScrollReveal yOffset={20}>
          <div className="flex flex-col items-center justify-center space-y-12">
            <button
              onClick={onViewAllSchemes}
              className="bg-[#171717] hover:bg-black text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer font-['Manrope']"
            >
              View All Schemes
            </button>
            
            {/* Top Full-Width Subtle Divider */}
            <div className="w-full border-t border-slate-300/60" />
          </div>
        </ScrollReveal>

        {/* Centered Headline matching Framer */}
        <ScrollReveal yOffset={30}>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[46px] lg:text-[50px] leading-[1.12] text-[#171717] tracking-[-0.035em]">
              Three Simple Steps. A<br />World of Possibilities.
            </h2>
          </div>
        </ScrollReveal>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 01 */}
          <ScrollReveal delay={0} yOffset={40} className="h-full">
            <div className="bg-white rounded-[26px] p-6 sm:p-7 shadow-[0_1px_3px_rgba(23,23,23,0.05)] border border-slate-200/60 flex flex-col justify-between min-h-[510px] h-full">
              
              {/* Canvas: Silvery Gray Outer Box with Floating White Card */}
              <div className="w-full bg-[#eaeaea] rounded-[20px] p-5 flex items-center justify-center min-h-[260px]">
                <div className="bg-white rounded-[16px] p-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)] w-full max-w-[270px] space-y-2.5">
                  <span className="text-[11.5px] font-medium text-slate-900 font-['Manrope'] tracking-tight block">
                    Pick your scholarship category
                  </span>
                  
                  {/* Option 1: Selected */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-900 flex items-center justify-between text-[11px] font-medium text-[#171717]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A2B] shrink-0"></span>
                      <span>Merit &amp; Board Marks</span>
                    </div>
                  </div>

                  {/* Option 2 */}
                  <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-[11px] font-normal text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full border border-slate-300 shrink-0"></span>
                      <span>Need-Based Financial Aid</span>
                    </div>
                  </div>

                  {/* Option 3 */}
                  <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-[11px] font-normal text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full border border-slate-300 shrink-0"></span>
                      <span>Sports &amp; Defense Wards</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="bg-[#171717] text-white text-center py-2 rounded-xl text-[11px] font-medium tracking-tight mt-1 shadow-xs font-['Manrope']">
                    Check Eligibility
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-2 pt-6">
                <span className="text-[11px] font-mono font-medium text-slate-400 font-['Manrope'] block">
                  [ step 01 ]
                </span>
                <h3 className="text-[20px] font-semibold text-[#171717] tracking-tight font-['Manrope']">
                  Choose Your Scheme
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                  Find the right scholarship based on your 12th board marks, entrance rank, or family financial background.
                </p>
              </div>

            </div>
          </ScrollReveal>

          {/* Step 02 */}
          <ScrollReveal delay={120} yOffset={80} className="h-full">
            <div className="bg-white rounded-[26px] p-6 sm:p-7 shadow-[0_1px_3px_rgba(23,23,23,0.05)] border border-slate-200/60 flex flex-col justify-between min-h-[510px] h-full">
              
              {/* Canvas: Silvery Gray Outer Box with Floating White Card */}
              <div className="w-full bg-[#eaeaea] rounded-[20px] p-5 flex items-center justify-center min-h-[260px]">
                <div className="bg-white rounded-[16px] p-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)] w-full max-w-[270px] space-y-2.5">
                  
                  {/* Item 1: Completed */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-[#171717]">DigiLocker Marksheet</div>
                        <div className="text-[9.5px] text-slate-400">Class 12 Marks · Verified</div>
                      </div>
                    </div>
                    <span className="text-[10.5px] font-semibold text-emerald-600">✓</span>
                  </div>

                  {/* Item 2: Active with Progress Bar */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70 space-y-1.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#FF5A2B]/15 text-[#FF5A2B] flex items-center justify-center shrink-0">
                          <Clock className="w-3 h-3" />
                        </div>
                        <div>
                          <div className="text-[11px] font-medium text-[#171717]">Eligibility Check</div>
                          <div className="text-[9.5px] text-slate-400">Cutoff 94.2% · 100% Eligible</div>
                        </div>
                      </div>
                      <span className="text-[10.5px] font-bold text-[#FF5A2B]">100%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#FF5A2B] h-full rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  {/* Item 3: Up Next */}
                  <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200/50 flex items-center justify-between opacity-60">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                        <List className="w-3 h-3" />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-[#171717]">Faculty Committee</div>
                        <div className="text-[9.5px] text-slate-400">Official Sign-off · In Review</div>
                      </div>
                    </div>
                    <span className="text-[10.5px] font-medium text-slate-400">—</span>
                  </div>

                </div>
              </div>

              {/* Copy */}
              <div className="space-y-2 pt-6">
                <span className="text-[11px] font-mono font-medium text-slate-400 font-['Manrope'] block">
                  [ step 02 ]
                </span>
                <h3 className="text-[20px] font-semibold text-[#171717] tracking-tight font-['Manrope']">
                  Verify Online in Minutes
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                  Upload your marksheets or sync via DigiLocker. Our system checks your scores instantly with zero manual errors.
                </p>
              </div>

            </div>
          </ScrollReveal>

          {/* Step 03 */}
          <ScrollReveal delay={240} yOffset={120} className="h-full">
            <div className="bg-white rounded-[26px] p-6 sm:p-7 shadow-[0_1px_3px_rgba(23,23,23,0.05)] border border-slate-200/60 flex flex-col justify-between min-h-[510px] h-full">
              
              {/* Canvas: Silvery Gray Outer Box with Floating White Card */}
              <div className="w-full bg-[#eaeaea] rounded-[20px] p-5 flex items-center justify-center min-h-[260px]">
                <div className="bg-white rounded-[16px] p-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)] w-full max-w-[270px] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#171717] font-['Manrope']">
                      Scholarship Awarded
                    </span>
                    <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xs border border-white">
                    <img
                      src="/images/step-card.jpg"
                      alt="Scholarship awarded"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Status Bar */}
                  <div className="bg-white p-2 rounded-xl border border-slate-200/60 flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <div>
                      <div className="text-[10.5px] font-semibold text-[#171717]">Fee Discount Applied</div>
                      <div className="text-[9px] text-slate-400">Credited to your student account</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-2 pt-6">
                <span className="text-[11px] font-mono font-medium text-slate-400 font-['Manrope'] block">
                  [ step 03 ]
                </span>
                <h3 className="text-[20px] font-semibold text-[#171717] tracking-tight font-['Manrope']">
                  Receive Your Scholarship
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                  Once approved, your scholarship grant is directly deducted from your college tuition fee or credited to your account.
                </p>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* Bottom Full-Width Divider & Centered Quote matching Framer media_1795038256939_d564954d.png */}
        <ScrollReveal yOffset={20}>
          <div className="space-y-12 pt-4">
            <div className="w-full border-t border-slate-300/60" />
            <div className="text-center max-w-xl mx-auto">
              <p className="font-['Manrope'] font-normal text-[22px] sm:text-[26px] lg:text-[28px] leading-snug tracking-[-0.03em] text-[#171717]">
                Simple verification, fair reviews, and guaranteed financial support for your education.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
