import React from 'react';
import { ChevronDown } from 'lucide-react';
import Badge from '../common/Badge';

const DEFAULT_FAQS = [
  {
    q: "How does CertiScholar verify my uploaded marksheets and income certificates?",
    a: "CertiScholar passes your document through an encrypted OCR pipeline that extracts student names, roll numbers, and marks. It mathematically recalculates percentage totals to prevent altered figures and corroborates data with official university databases or DigiLocker."
  },
  {
    q: "Is my personal data protected under India's DPDP Act 2023?",
    a: "Yes. All uploaded documents are stored in private, encrypted vaults. Sensitive identifiers like 12-digit Aadhaar numbers are automatically masked before any officer reviews them. Your data is never sold or shared without explicit, time-limited consent."
  },
  {
    q: "What happens if the OCR scan has low confidence or misreads a digit?",
    a: "CertiScholar enforces a Human-in-the-Loop policy. If OCR confidence falls below 85% or an arithmetic discrepancy is detected, the case is routed to a human Verification Officer (M5) for side-by-side inspection and manual correction."
  },
  {
    q: "Can I apply for multiple scholarships at Lovely Professional University simultaneously?",
    a: "Yes. CertiScholar allows you to create one unified Student Passport. You can apply for both LPUNEST Merit Aid and Need-Based Financial Aid without re-uploading documents. The rule engine enforces stacking restrictions automatically."
  }
];

export default function FaqSection({
  faqs = DEFAULT_FAQS,
  activeFaq = null,
  onToggleFaq,
}) {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <Badge variant="indigo">Common Questions</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Everything you need to know about verification, privacy, and eligibility.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50/70 hover:bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden transition shadow-2xs"
            >
              <button
                onClick={() => onToggleFaq && onToggleFaq(activeFaq === idx ? null : idx)}
                className="w-full px-6 py-5 text-left font-bold text-slate-900 flex justify-between items-center text-sm sm:text-base cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ml-4 ${activeFaq === idx ? 'rotate-180 text-indigo-600' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
