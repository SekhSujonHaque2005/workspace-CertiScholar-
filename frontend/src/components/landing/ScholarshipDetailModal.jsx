import React from 'react';
import { X, Share2, ArrowRight, ShieldCheck, CheckCircle2, Clock, Calendar, MapPin, Building2 } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function ScholarshipDetailModal({
  scholarship,
  onClose,
  onApply,
  onWhatsAppShare,
}) {
  if (!scholarship) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <Badge variant="indigo" className="mb-2">
              {scholarship.category}
            </Badge>
            <h3 className="text-2xl font-black text-slate-900 leading-tight">
              {scholarship.title}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              <span>{scholarship.publisher}</span>
              <span>•</span>
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{scholarship.location}</span>
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Details */}
        <div className="space-y-5 text-xs text-slate-600">
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Benefit</span>
              <span className="font-black text-indigo-700 text-sm">{scholarship.benefit}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Min. Percentage</span>
              <span className="font-black text-slate-800 text-sm">{scholarship.minPercentage}%</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Application Deadline</span>
              <span className="font-black text-emerald-700 text-sm">{scholarship.deadline}</span>
            </div>
          </div>

          {/* Scheme Description */}
          <div>
            <h4 className="font-black text-slate-900 text-sm mb-1.5">About the Scheme</h4>
            <p className="leading-relaxed text-slate-600">{scholarship.description}</p>
          </div>

          {/* Required Verification Documents */}
          <div>
            <h4 className="font-black text-slate-900 text-sm mb-2">Required Verification Documents</h4>
            <ul className="space-y-1.5 text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Original 10th & 12th Standard Marksheets (Classified via M3)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Annual Family Income Certificate issued by Sub-Divisional Magistrate / Tehsildar</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Proof of Enrollment / LPUNEST Registration Receipt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Action Controls */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => onWhatsAppShare && onWhatsAppShare(scholarship)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 text-xs font-bold hover:bg-emerald-100 transition cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Share on WhatsApp</span>
          </button>

          <div className="flex gap-2">
            <Button variant="outline" size="md" onClick={onClose}>
              Close
            </Button>
            <Button 
              variant="primary" 
              size="md" 
              icon={ArrowRight} 
              iconPosition="right"
              onClick={onApply}
            >
              Apply with Student Passport
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
