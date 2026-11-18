import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const FAQS = [
  {
    q: "What is CertiScholar?",
    a: "CertiScholar is an institutional document verification and scholarship operations platform developed for Lovely Professional University. It provides automated OCR mark calculations, DigiLocker corroboration, anti-stacking policy enforcement, and multi-officer quorum reviews."
  },
  {
    q: "How does automated document verification work?",
    a: "When you upload academic marksheets or category certificates, CertiScholar's high-precision OCR pipeline extracts subject marks, verifies roll numbers against official gazettes, and recalculates eligibility percentages automatically."
  },
  {
    q: "What is the anti-stacking policy engine?",
    a: "To ensure fair aid distribution and prevent double-dipping, CertiScholar enforces university rules that eliminate conflicting scholarship stacking, guaranteeing that each scholar receives their highest entitled award."
  },
  {
    q: "How are verification decisions governed?",
    a: "Decisions are overseen by an auditable multi-officer Quorum Committee comprising academic deans, registrars, and financial aid auditors who review automated flags before approving aid."
  },
  {
    q: "How is sanctioned financial aid disbursed?",
    a: "Once approved, an official digital Sanction Order with cryptographic verification is generated. Grant amounts and tuition fee waivers are directly credited to your university student ledger."
  },
  {
    q: "What documents are required to apply?",
    a: "Standard requirements include Class 10 and 12 marksheets, entrance examination rank cards (such as LPUNEST or JEE), government photo ID via DigiLocker, and relevant income or category certificates."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white select-none">
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header with Rotating Spark Eyebrow */}
        <ScrollReveal yOffset={30}>
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <div className="w-4 h-4 animate-spark">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[#ff5a2b]">
                  <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z"></path>
                </svg>
              </div>
              <span className="text-[12px] font-semibold text-slate-500 font-['Manrope'] uppercase tracking-wider">
                Got questions?
              </span>
            </div>

            <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] leading-tight text-[#171717] tracking-[-0.04em]">
              Everything You Need to Know.
            </h2>
            <p className="text-[14.5px] text-[#6b6b75] leading-relaxed font-normal font-['Manrope']">
              Find answers to common questions about CertiScholar, automated document verification, and scholarship operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List with Framer Styling */}
        <ScrollReveal yOffset={40}>
          <div className="divide-y divide-[#e4e4e7] border-t border-[#e4e4e7]">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="py-6 cursor-pointer select-none transition-colors group"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#171717] tracking-tight font-['Manrope'] group-hover:text-black transition-colors">
                      {faq.q}
                    </h3>
                    <div className="shrink-0 text-slate-400 group-hover:text-black transition-colors">
                      {isOpen ? (
                        <div className="w-8 h-8 rounded-full bg-[#f4f4f5] flex items-center justify-center transition-transform">
                          <Minus className="w-4 h-4 text-[#171717]" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-[#f4f4f5] flex items-center justify-center transition-transform group-hover:bg-[#e4e4e7]">
                          <Plus className="w-4 h-4 text-[#171717]" />
                        </div>
                      )}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="pt-3 text-[14.5px] text-[#6b6b75] leading-relaxed font-normal font-['Manrope'] animate-framer-appear">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
