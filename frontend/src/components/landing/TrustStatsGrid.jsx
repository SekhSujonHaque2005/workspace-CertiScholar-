import React from 'react';
import { Info } from 'lucide-react';

const DEFAULT_STATS = [
  { value: "50,000+", label: "Verified Scholarships", sublabel: "Across Central, State & Private Trusts" },
  { value: "2,500+", label: "Trusted Sources", sublabel: "Official Gazettes & University Feeds" },
  { value: "1.2M+", label: "Students Empowered", sublabel: "Across Indian Higher Education" },
  { 
    value: "98%*", 
    label: "Information Accuracy", 
    sublabel: "DigiLocker & Board Corroborated",
    tooltip: "* Calculated based on authoritative university circular cross-checks, DigiLocker board corroboration, and automated arithmetic recomputation under DOC-001 principles."
  },
];

export default function TrustStatsGrid({ stats = DEFAULT_STATS }) {
  return (
    <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-1 relative group cursor-default">
              <p className="text-3xl sm:text-4xl font-black text-indigo-400 tracking-tight">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-200 flex items-center justify-center gap-1">
                <span>{s.label}</span>
                {s.tooltip && (
                  <Info className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition" />
                )}
              </p>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                {s.sublabel}
              </p>

              {/* Tooltip on Asterisk / Accuracy */}
              {s.tooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-72 bg-slate-800 text-slate-200 text-[11px] p-3 rounded-xl shadow-2xl border border-slate-700 z-50 text-left font-normal leading-relaxed">
                  {s.tooltip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
