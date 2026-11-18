import React from 'react';
import { ShieldCheck, Award, Building2, CheckCircle2 } from 'lucide-react';

const DEFAULT_PARTNERS = [
  { name: "Lovely Professional University", abbr: "LPU" },
  { name: "DigiLocker NAD", abbr: "DIGILOCKER" },
  { name: "National Scholarship Portal", abbr: "NSP" },
  { name: "AICTE Approval Board", abbr: "AICTE" },
  { name: "University Grants Commission", abbr: "UGC" },
  { name: "Dept. of Higher Education", abbr: "MHRD" },
];

/**
 * Trust & Partner Marquee Strip matching Lerova Framer template
 */
export default function TrustStatsGrid({
  headline = "Opportunities that move you forward.",
  sublabel = "Join a growing community of ambitious scholars, verified academic offices, and philanthropic trusts.",
  partners = DEFAULT_PARTNERS,
}) {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FA] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        <div className="space-y-1">
          <h3 className="text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
            {headline}
          </h3>
          <p className="text-xs text-slate-500 max-w-xl mx-auto font-normal">
            {sublabel}
          </p>
        </div>

        {/* Minimalist Partner Logo Strip (Lerova Monochrome Style) */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {partners.map((p, idx) => (
            <div key={idx} className="flex items-center gap-2 group cursor-default">
              <span className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-indigo-600 transition"></span>
              <span className="font-extrabold text-sm sm:text-base tracking-widest text-slate-700 uppercase font-mono">
                {p.abbr}
              </span>
              <span className="hidden md:inline text-xs font-medium text-slate-400 group-hover:text-slate-600 transition">
                • {p.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
