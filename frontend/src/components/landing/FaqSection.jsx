import React from 'react';
import { Plus, Minus } from 'lucide-react';

const DEFAULT_FAQS = [
  {
    q: "What is CertiScholar?",
    a: "CertiScholar is an institutional document verification and scholarship management platform developed for Lovely Professional University. It automates marksheet OCR verification, prevents fraudulent applications, and enforces transparent anti-double-counting policies."
  },
  {
    q: "Who are the scholarships designed for?",
    a: "Our schemes support undergraduate, postgraduate, and doctoral students across merit ranks (LPUNEST), economically weaker sections (EWS), wards of defense personnel, and national-level sports champions."
  },
  {
    q: "Can I verify and apply at my own pace?",
    a: "Yes. Once you create your Student Passport and link your DigiLocker, your verified credentials remain securely stored in your personal vault. You can apply for matching opportunities anytime with one click."
  },
  {
    q: "How does the system prevent scholarship double-counting?",
    a: "CertiScholar's automated policy rule engine evaluates stacking rules across university, state, and central government circulars, ensuring you receive the highest benefit without violating compliance quotas."
  },
  {
    q: "Is my personal data protected under India's DPDP Act 2023?",
    a: "Yes. All uploaded documents are stored in private, 256-bit AES encrypted vaults. Identifiers such as 12-digit Aadhaar numbers are automatically masked before any verification officer reviews the file."
  },
  {
    q: "How do I get started?",
    a: "Click 'Get Started' to create your free Student Passport using your registration number or college email. Link DigiLocker to auto-verify your marksheets in under 60 seconds."
  }
];

/**
 * FAQ Section matching Framer LEROVA template:
 * Clean rounded accordion items with circular + / - toggles
 */
export default function FaqSection({
  eyebrow = "Find answers",
  headline = "Everything You Need to Know.",
  subheadline = "Find answers to common questions about scholarship verification with CertiScholar.",
  faqs = DEFAULT_FAQS,
  activeFaq = null,
  onToggleFaq = () => {},
}) {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            {subheadline}
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;

            return (
              <div
                key={idx}
                className="bg-[#F8F9FA] rounded-[24px] border border-slate-200/80 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => onToggleFaq(idx)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-7 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal animate-in fade-in duration-200 border-t border-slate-200/50 pt-4">
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
