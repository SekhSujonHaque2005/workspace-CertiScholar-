import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import Badge from '../common/Badge';

export default function ProductPreviewCard({
  studentName = "Rahul Sharma",
  institution = "Lovely Professional University",
  program = "B.Tech Computer Science",
  marksheet = "12th_Standard_Marksheet.pdf",
  confidence = 96.4,
  recomputedMarks = "445 / 500 (89.00%)",
  schemeName = "Need-Based Financial Aid (EWS)",
  awardStatus = "Qualified • 30% Fee Waiver",
  isDigiLockerVerified = true,
}) {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-500/15 rounded-full blur-2xl pointer-events-none"></div>

      {/* Main Glassmorphic Container */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(30,41,59,0.12)] border border-slate-200/90 space-y-5 transition duration-300 hover:shadow-2xl">
        
        {/* Floating Top Shield Pill */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-indigo-600/20">
              {studentName.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900 leading-tight">{studentName}</h4>
              <p className="text-[11px] text-slate-500 font-medium">{institution} • {program}</p>
            </div>
          </div>

          <Badge variant="emerald" icon={ShieldCheck}>
            100% Verified
          </Badge>
        </div>

        {/* Live Document Intake & OCR Scan Simulation */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 space-y-3 relative overflow-hidden">
          {/* Subtle Scanning Beam */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse"></div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-slate-800">{marksheet}</p>
                <p className="text-[10px] text-slate-400">Class: Academic Marksheet • M3 Auto-Classified</p>
              </div>
            </div>

            <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md border border-emerald-200">
              OCR: {confidence}%
            </span>
          </div>

          <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 font-medium">Recomputed Percentage (M6):</span>
            <span className="font-extrabold text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
              {recomputedMarks}
            </span>
          </div>
        </div>

        {/* Real-Time Rule Engine Evaluation (M8/M9) */}
        <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent p-4 rounded-2xl border border-emerald-200/80">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-slate-800">{schemeName}</span>
            <span className="text-[11px] font-extrabold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Qualified
            </span>
          </div>
          <p className="text-[11px] text-slate-600 font-medium">
            Rule Result: Marks &gt; 60% & Income &lt; ₹2.5L validated against approved policy.
          </p>
          <div className="mt-2 text-xs font-black text-emerald-800">
            Award: {awardStatus}
          </div>
        </div>

        {/* Card Footer Trust Seals */}
        <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <span className="flex items-center gap-1 text-slate-600">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            Explainable AI Reasoning
          </span>
          {isDigiLockerVerified && (
            <span className="flex items-center gap-1 text-emerald-700 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              DigiLocker Corroborated
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
