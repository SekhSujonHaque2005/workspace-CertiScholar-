import React from 'react';
import { Search, FileCheck, Send, CheckCircle2 } from 'lucide-react';
import Badge from '../common/Badge';

const DEFAULT_STEPS = [
  {
    step: 1,
    title: "Discover",
    description: "Search verified institutional and national scholarships matching your exact academic score, course, and category.",
    icon: Search
  },
  {
    step: 2,
    title: "Prepare",
    description: "Upload academic marksheets and certificates. OCR extracts data and recalculates aggregate percentages instantly.",
    icon: FileCheck
  },
  {
    step: 3,
    title: "Submit",
    description: "Apply directly to university schemes or export verified credentials to external government portals with consent.",
    icon: Send
  },
  {
    step: 4,
    title: "Track",
    description: "Watch your application progress live through reviewer verification, committee quorum review, and official award sign-off.",
    icon: CheckCircle2
  }
];

export default function HowItWorksSteps({
  title = "How CertiScholar Works",
  subtitle = "A simple 4-step journey from discovery to decision.",
  steps = DEFAULT_STEPS,
}) {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="indigo">Simple & Transparent</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.step} 
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-indigo-300 shadow-xs hover:shadow-xl transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-indigo-600 group-hover:bg-indigo-700 text-white rounded-2xl flex items-center justify-center font-extrabold text-base mb-6 shadow-md shadow-indigo-600/20 transition">
                    {Icon ? <Icon className="w-5 h-5" /> : s.step}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {s.step}. {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
