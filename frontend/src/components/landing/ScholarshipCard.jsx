import React from 'react';
import { Bookmark, Share2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function ScholarshipCard({
  scholarship,
  isSaved = false,
  onToggleSave,
  onViewDetails,
  onWhatsAppShare,
}) {
  if (!scholarship) return null;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-300 transition duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant="indigo">
            {scholarship.category}
          </Badge>

          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            {scholarship.trustLabel}
          </span>
        </div>

        {/* Title & Publisher */}
        <div>
          <h3 
            onClick={() => onViewDetails && onViewDetails(scholarship)}
            className="font-black text-slate-900 text-lg leading-snug group-hover:text-indigo-600 transition cursor-pointer"
          >
            {scholarship.title}
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Offered by: <span className="text-slate-800 font-bold">{scholarship.publisher}</span>
          </p>
        </div>

        {/* Tag Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {scholarship.tags?.map((t, idx) => (
            <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2.5 py-0.5 rounded-md">
              {t}
            </span>
          ))}
        </div>

        {/* Description Excerpt */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
          {scholarship.description}
        </p>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-6 border-t border-slate-100 mt-5">
        <div className="flex items-center justify-between text-xs mb-4">
          <span className="font-extrabold text-indigo-700 bg-indigo-50/80 px-2.5 py-1 rounded-lg">
            {scholarship.benefit}
          </span>
          <span className="text-[11px] font-semibold text-slate-400">
            Deadline: {scholarship.deadline}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="primary" 
            size="md" 
            className="flex-1"
            onClick={() => onViewDetails && onViewDetails(scholarship)}
          >
            View Details
          </Button>

          {/* WhatsApp 1-Click Share Button */}
          <button
            onClick={() => onWhatsAppShare && onWhatsAppShare(scholarship)}
            title="Share with peers on WhatsApp"
            className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition cursor-pointer active:scale-95"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Save / Bookmark Button */}
          <button
            onClick={() => onToggleSave && onToggleSave(scholarship.id)}
            title={isSaved ? "Saved in Shortlist" : "Save for later"}
            className={`p-2.5 rounded-xl border transition cursor-pointer active:scale-95 ${
              isSaved
                ? 'bg-indigo-50 text-indigo-600 border-indigo-300'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-400 border-slate-200'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-indigo-600' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
