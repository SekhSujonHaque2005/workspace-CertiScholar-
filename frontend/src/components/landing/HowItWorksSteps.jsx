import React from 'react';
import { Check, Clock, List, Share2 } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

export default function HowItWorksSteps() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-[#f4f4f5]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Header with Scroll Reveal */}
        <ScrollReveal yOffset={30}>
          <div className="max-w-xl space-y-2">
            <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] lg:text-[48px] leading-tight text-[#171717] tracking-[-0.035em]">
              Three Simple Steps. A World of Possibilities.
            </h2>
          </div>
        </ScrollReveal>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 01 */}
          <ScrollReveal delay={0} yOffset={40} className="h-full">
            <div className="bg-white rounded-[24px] p-7 shadow-[0_1px_2px_rgba(23,23,23,0.05)] border border-slate-200/60 flex flex-col justify-between min-h-[490px] h-full">
              {/* Canvas: Mock Card */}
              <div className="w-full bg-[#f4f4f5] rounded-2xl p-4 flex flex-col justify-center space-y-2.5">
                <span className="text-[11.5px] font-medium text-slate-900 font-['Manrope'] tracking-tight">
                  Pick a learning path
                </span>
                
                {/* Option 1: Selected */}
                <div className="bg-white p-2.5 rounded-xl border border-slate-900 flex items-center justify-between text-[11.5px] font-medium text-[#171717]">
                  <span>Design &amp; Creativity</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#171717] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  </span>
                </div>

                {/* Option 2 */}
                <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-[11.5px] font-normal text-slate-500">
                  <span>Business &amp; Marketing</span>
                  <span className="w-3.5 h-3.5 rounded-full border border-slate-300"></span>
                </div>

                {/* Option 3 */}
                <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-[11.5px] font-normal text-slate-500">
                  <span>Technology</span>
                  <span className="w-3.5 h-3.5 rounded-full border border-slate-300"></span>
                </div>

                {/* Button */}
                <div className="bg-[#171717] text-white text-center py-2.5 rounded-xl text-[11.5px] font-medium tracking-tight mt-1 shadow-xs font-['Manrope']">
                  Start Path
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-2 pt-6">
                <span className="text-[11px] font-mono font-medium text-slate-400 font-['Manrope']">
                  {"{ step 01 }"}
                </span>
                <h3 className="text-[20px] font-semibold text-[#171717] tracking-tight font-['Manrope']">
                  Choose Your Path
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                  Find courses that align with your interests, goals, and the skills you want to develop.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 02 */}
          <ScrollReveal delay={120} yOffset={80} className="h-full">
            <div className="bg-white rounded-[24px] p-7 shadow-[0_1px_2px_rgba(23,23,23,0.05)] border border-slate-200/60 flex flex-col justify-between min-h-[490px] h-full">
              {/* Canvas: Lessons Progress List */}
              <div className="w-full bg-[#f4f4f5] rounded-2xl p-4 flex flex-col justify-center space-y-2.5">
                
                {/* Lesson 1: Completed */}
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-[11.5px] font-medium text-[#171717]">User Research</div>
                      <div className="text-[10px] text-slate-400">Lesson 3 · Completed</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600">✓</span>
                </div>

                {/* Lesson 2: Active with Progress Bar */}
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-[#ff5a2b] flex items-center justify-center shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11.5px] font-medium text-[#171717]">Wireframes</div>
                        <div className="text-[10px] text-slate-400">Lesson 4 · 12 min left</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#ff5a2b]">68%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#ff5a2b] h-full rounded-full transition-all duration-1000" style={{ width: '68%' }}></div>
                  </div>
                </div>

                {/* Lesson 3: Up Next */}
                <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200/50 flex items-center justify-between opacity-70">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                      <List className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11.5px] font-medium text-[#171717]">User Flows</div>
                      <div className="text-[10px] text-slate-400">Lesson 5 · Up next</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">—</span>
                </div>

              </div>

              {/* Copy */}
              <div className="space-y-2 pt-6">
                <span className="text-[11px] font-mono font-medium text-slate-400 font-['Manrope']">
                  {"{ step 02 }"}
                </span>
                <h3 className="text-[20px] font-semibold text-[#171717] tracking-tight font-['Manrope']">
                  Learn at Your Pace
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                  Follow expert-led lessons, practice new concepts, and make learning part of your routine.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 03 */}
          <ScrollReveal delay={240} yOffset={120} className="h-full">
            <div className="bg-white rounded-[24px] p-7 shadow-[0_1px_2px_rgba(23,23,23,0.05)] border border-slate-200/60 flex flex-col justify-between min-h-[490px] h-full">
              {/* Canvas: Mock Card with Image & Status */}
              <div className="w-full bg-[#f4f4f5] rounded-2xl p-3 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11.5px] font-medium text-[#171717] font-['Manrope']">
                    Final project
                  </span>
                  <Share2 className="w-3.5 h-3.5 text-slate-400" />
                </div>

                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xs border border-white">
                  <img
                    src="/images/step-card.jpg"
                    alt="Portfolio piece"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Status Bar */}
                <div className="bg-white p-2 rounded-xl border border-slate-200/60 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold text-[#171717]">Portfolio piece published</div>
                    <div className="text-[9.5px] text-slate-400">Shared with 3 reviewers</div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-2 pt-6">
                <span className="text-[11px] font-mono font-medium text-slate-400 font-['Manrope']">
                  {"{ step 03 }"}
                </span>
                <h3 className="text-[20px] font-semibold text-[#171717] tracking-tight font-['Manrope']">
                  Put Skills Into Action
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
                  Apply what you learn to projects, your career, and the opportunities ahead.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Footer Subtext */}
        <div className="text-center text-slate-400 text-xs font-['Manrope']">
          Start small, stay consistent, and turn every lesson into progress.
        </div>

      </div>
    </section>
  );
}
