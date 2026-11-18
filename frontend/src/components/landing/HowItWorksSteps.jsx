import React from 'react';
import { Search, FileCheck, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

const DEFAULT_STEPS = [
  {
    tag: "{ step 01 }",
    title: "Create Student Passport",
    description: "Input your student roll number and link your DigiLocker. CertiScholar securely mounts your academic records into an encrypted personal vault.",
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/90 space-y-3 font-sans">
        <div className="flex items-center justify-between text-xs font-bold text-slate-800">
          <span>Student Passport</span>
          <span className="bg-indigo-50 text-indigo-700 text-[10px] px-2 py-0.5 rounded-full font-mono">STU-2026-904</span>
        </div>
        <div className="space-y-1.5 text-[11px]">
          <div className="p-2 bg-slate-50 rounded-xl border border-slate-200/60 text-slate-600 flex justify-between">
            <span>DigiLocker Linked:</span>
            <span className="text-emerald-600 font-bold">Active ✓</span>
          </div>
          <div className="p-2 bg-slate-50 rounded-xl border border-slate-200/60 text-slate-600 flex justify-between">
            <span>Candidate Name:</span>
            <span className="text-slate-900 font-bold">Rahul Sharma</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    tag: "{ step 02 }",
    title: "Instant OCR & Validation",
    description: "Upload academic marksheets. Our dual OCR pipeline extracts subject marks and recalculates aggregate percentages in under 3 seconds.",
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/90 space-y-3 font-sans">
        <div className="flex items-center justify-between text-xs font-bold text-slate-800">
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            <span>OCR Extraction</span>
          </span>
          <span className="text-emerald-600 font-mono text-[10px] font-bold">96.4% Match</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-full rounded-full w-[96%] animate-pulse"></div>
        </div>
        <div className="flex justify-between text-[11px] text-slate-500">
          <span>Formula Recomputed:</span>
          <span className="font-bold text-slate-900 font-mono">89.00% Aggregate</span>
        </div>
      </div>
    ),
  },
  {
    tag: "{ step 03 }",
    title: "Direct Quorum Handoff",
    description: "Submit directly to university scholarship committees. Reviewers inspect verified evidence with zero double-counting or paperwork anxiety.",
    preview: (
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/90 space-y-3 font-sans">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <span>Dossier Dispatched</span>
        </div>
        <p className="text-[11px] text-slate-500 leading-tight">
          Handed off to LPUNEST Merit Committee Quorum. Track your live decision audit trail anytime.
        </p>
        <div className="text-[10px] font-mono text-slate-400 bg-slate-50 p-1.5 rounded-lg border border-slate-200/60 truncate">
          SHA256: 7f83b1657ff1...
        </div>
      </div>
    ),
  },
];

/**
 * Three Simple Steps Section matching Lerova Framer template
 */
export default function HowItWorksSteps({
  eyebrow = "Pick a verification path",
  headline = "Three Simple Steps. A World of Possibilities.",
  steps = DEFAULT_STEPS,
}) {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F8F9FA] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {headline}
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 rounded-[32px] border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              {/* Step Pill & Framer Tag */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                  {st.tag}
                </span>
                <span className="text-slate-300 group-hover:text-indigo-600 transition">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* UI Preview Card in the Center */}
              <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                {st.preview}
              </div>

              {/* Step Text */}
              <div className="space-y-2">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
