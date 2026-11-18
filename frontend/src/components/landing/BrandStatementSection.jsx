import React from 'react';
import { Quote, ShieldCheck } from 'lucide-react';

/**
 * Giant Typography Brand Statement Section matching Lerova Framer template
 */
export default function BrandStatementSection({
  watermarkText = "certischolar",
  quote = "CertiScholar eliminated fraudulent submissions, reduced our scholarship audit turnaround from 45 days to under 48 hours, and ensured financial aid reaches deserving students with complete transparency.",
  author = "Dr. Rajesh Verma",
  role = "Dean, Student Welfare & Financial Aid Secretariat",
  institution = "Lovely Professional University",
}) {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-slate-200/70">
      {/* Giant Background Watermark Serif Typography (Lerova Signature) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <span className="font-serif italic text-[140px] sm:text-[220px] lg:text-[320px] font-bold text-slate-900 tracking-tighter uppercase">
          {watermarkText}
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold border border-indigo-100">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Institutional Endorsement</span>
        </div>

        {/* Elegant Quote */}
        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug tracking-tight font-sans">
          "{quote}"
        </blockquote>

        {/* Author Attribution */}
        <div className="space-y-1">
          <p className="text-base font-black text-slate-900 tracking-tight">
            {author}
          </p>
          <p className="text-xs text-slate-500 font-medium">
            {role} • <span className="text-slate-700 font-semibold">{institution}</span>
          </p>
        </div>

      </div>
    </section>
  );
}
