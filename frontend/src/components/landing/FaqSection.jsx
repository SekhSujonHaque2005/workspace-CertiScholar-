import React from 'react';
import { Plus, Minus } from 'lucide-react';

const DEFAULT_FAQS = [
  {
    q: "How does CertiScholar verify marksheets without manual document queues?",
    a: "CertiScholar combines DigiLocker direct API integration with an encrypted OCR pipeline. When you upload a marksheet, subject marks are extracted and aggregate percentages are mathematically recalculation within 3 seconds, verified against university circular baselines."
  },
  {
    q: "How does the system prevent scholarship double-counting?",
    a: "CertiScholar enforces institutional anti-stacking policies automatically. If you apply for multiple schemes (e.g. LPUNEST Merit and a State EWS aid), the rule engine flags conflicting allowances, ensuring you receive the highest benefit without violating university or government quotas."
  },
  {
    q: "Is my personal Aadhaar and income data protected under DPDP Act 2023?",
    a: "Yes. All uploaded documents are stored in private encrypted vaults with 256-bit AES encryption. Sensitive identifiers such as Aadhaar numbers are automatically masked before any verification officer reviews the file."
  },
  {
    q: "What happens if the OCR scan has low quality or cannot detect a mark?",
    a: "CertiScholar implements strict Human-in-the-Loop governance. If OCR confidence falls below 85% or an arithmetic discrepancy occurs, the case is flagged for side-by-side inspection by an M5 Verification Officer."
  },
  {
    q: "Can outside donors and philanthropic trusts publish scholarships on CertiScholar?",
    a: "Yes. Accredited corporate CSR foundations and private trusts can publish grants through the Agency Onboarding Portal (AGY-001) after passing university compliance verification."
  }
];

/**
 * FAQ Accordion Section matching Lerova Framer template
 */
export default function FaqSection({
  eyebrow = "Frequently Asked Questions",
  headline = "Clear Answers for Every Applicant.",
  faqs = DEFAULT_FAQS,
  activeFaq = null,
  onToggleFaq = () => {},
}) {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8F9FA] border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {headline}
          </h2>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs transition duration-200"
              >
                <button
                  onClick={() => onToggleFaq(idx)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-7 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal animate-in fade-in duration-200 border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
