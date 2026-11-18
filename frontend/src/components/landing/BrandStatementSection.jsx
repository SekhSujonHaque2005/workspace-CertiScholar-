import React from 'react';
import { ShieldCheck } from 'lucide-react';

/**
 * Brand Statement Section matching Framer LEROVA template
 * Soft, low-contrast watermark serif lettering with centered institutional endorsement
 */
export default function BrandStatementSection({
  watermarkText = "certischolar",
  quote = "CertiScholar eliminated fraudulent submissions, reduced our scholarship audit turnaround from 45 days to under 48 hours, and ensured financial aid reaches deserving students with complete transparency.",
  author = "Dr. Rajesh Verma",
  role = "Dean, Student Welfare & Financial Aid Secretariat",
  institution = "Lovely Professional University",
}) {
  return (
    <section className="py-28 sm:py-36 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Giant Background Watermark Serif Typography (Soft & Elegant) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span 
          className="font-serif italic text-[120px] sm:text-[200px] lg:text-[280px] font-bold text-slate-900 tracking-tighter lowercase leading-none"
          style={{ opacity: 0.035 }}
        >
          {watermarkText}
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
        
        <div className="inline-flex items-center gap-2 bg-[#F8F9FA] text-slate-700 px-4 py-1.5 rounded-full text-xs font-semibold border border-slate-200/80 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
          <span>Institutional Endorsement</span>
        </div>

        {/* Elegant Quote in Sans/Serif harmony */}
        <blockquote className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-slate-900 leading-snug tracking-tight font-sans max-w-3xl mx-auto">
          "{quote}"
        </blockquote>

        {/* Author Attribution */}
        <div className="space-y-1 pt-1">
          <p className="text-sm font-black text-slate-900 tracking-tight">
            {author}
          </p>
          <p className="text-xs text-slate-500 font-medium">
            {role} • <span className="text-slate-800 font-semibold">{institution}</span>
          </p>
        </div>

      </div>
    </section>
  );
}
