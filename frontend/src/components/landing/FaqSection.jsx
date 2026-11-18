import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "What is CertiScholar?",
    a: "CertiScholar is the unified institutional scholarship discovery, OCR document verification, and quorum governance platform for Lovely Professional University. It guarantees mathematical accuracy, eliminates double-counting, and verifies marks directly against gazettes."
  },
  {
    q: "Who are the scholarships designed for?",
    a: "Scholarships cover students applying for merit-based waivers (LPUNEST, JEE, Board toppers), need-based assistance (EWS, single-parent subsidies), armed forces & paramilitary wards, and sports or cultural excellence champions."
  },
  {
    q: "Can I verify my credentials at my own pace?",
    a: "Yes. You can upload your academic marksheets and certificates whenever you are ready. Our automated OCR engine processes documents within seconds and preserves your draft eligibility without loss of progress."
  },
  {
    q: "Do I need prior experience with DigiLocker or blockchain?",
    a: "No technical experience is required. Simply connect with your standard student mobile number or Aadhaar-linked DigiLocker, and CertiScholar handles cryptographic ledger corroborate seamlessly in the background."
  },
  {
    q: "Will I receive an official university sanction order?",
    a: "Yes. Once the faculty verification committee signs off with quorum approval, an official verifiable digital sanction letter is generated, stamped with cryptographic proofs and credited directly to your university account."
  },
  {
    q: "How do I get started?",
    a: "Click 'Get Started' at the top of the page, select your student program at Lovely Professional University, and upload your high school or semester marksheets to discover all verified scholarship grants."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="max-w-[900px] mx-auto px-6 space-y-14">
        
        {/* Header */}
        <div className="space-y-3">
          <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] leading-tight text-slate-950 tracking-[-0.035em]">
            Everything You Need to Know.
          </h2>
          <p className="text-[14px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
            Find answers to common questions about CertiScholar, credential authentication, and how the scholarship verification process works.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-200/80">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="py-6 cursor-pointer select-none transition-colors"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[17px] font-semibold text-slate-900 tracking-tight font-['Manrope']">
                    {faq.q}
                  </h3>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <Minus className="w-5 h-5 text-slate-900" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>

                {isOpen && (
                  <div className="pt-3 text-[14px] text-slate-500 leading-relaxed font-normal font-['Manrope'] animate-framer-appear">
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
