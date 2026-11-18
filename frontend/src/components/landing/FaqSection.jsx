import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const FAQS = [
  {
    q: "What is CertiScholar?",
    a: "CertiScholar is an institutional document verification and scholarship operations platform developed for Lovely Professional University. It provides automated OCR mark calculations, DigiLocker corroboration, anti-stacking policy enforcement, and multi-officer quorum reviews."
  },
  {
    q: "Who is eligible for institutional scholarships?",
    a: "Undergraduate and postgraduate students enrolled at Lovely Professional University across merit (LPUNEST / JEE / Board percentiles), economic need (EWS / TFW), sports excellence, and reserved categories with verified credentials."
  },
  {
    q: "How does automated document verification work?",
    a: "When you upload academic marksheets or category certificates, CertiScholar's high-precision OCR pipeline extracts subject marks, verifies roll numbers against official state and national gazettes, and recalculates eligibility percentages automatically."
  },
  {
    q: "What is the anti-stacking policy engine?",
    a: "To ensure fair aid distribution and prevent double-dipping, CertiScholar enforces university policy rules that eliminate conflicting scholarship stacking, guaranteeing that each scholar receives their highest entitled award."
  },
  {
    q: "How are verification decisions governed?",
    a: "Decisions are overseen by an auditable multi-officer Quorum Committee comprising academic deans, registrars, and financial aid auditors who review automated flags before approving aid."
  },
  {
    q: "How is sanctioned financial aid disbursed?",
    a: "Once approved, an official digital Sanction Order with cryptographic verification is generated. Grant amounts and tuition fee waivers are directly credited to your university student ledger."
  }
];

/**
 * Authentic Framer LEROVA FAQ Section:
 * Individual rounded pill cards with #f4f4f5 background,
 * circular +/- toggles, and clean 12px gap between questions.
 */
export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-16 sm:py-24 select-none">
      <div className="w-full space-y-10">
        
        {/* Header matching Framer typography */}
        <ScrollReveal yOffset={30}>
          <div className="space-y-3">
            <h2 className="font-['Manrope'] font-medium text-[38px] sm:text-[48px] leading-[1.12] text-[#171717] tracking-[-0.04em]">
              Everything You Need to Know.
            </h2>
            <p className="text-[15.5px] text-[#6b6b75] leading-relaxed font-normal font-['Manrope'] max-w-2xl">
              Find answers to common questions about CertiScholar, automated document verification, and scholarship operations.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Individual Framer Rounded Pill Cards */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollReveal key={idx} yOffset={25} delay={idx * 40} duration={600}>
                <div
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full bg-[#f4f4f5] hover:bg-[#ececee] transition-colors duration-200 rounded-[18px] p-5 sm:px-6 sm:py-5 cursor-pointer select-none"
                >
                  {/* Question Row */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[17px] sm:text-[18px] font-medium text-[#171717] font-['Manrope'] tracking-[-0.02em] leading-snug">
                      {faq.q}
                    </h3>
                    
                    {/* Circle Toggle Button */}
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs text-[#171717] transition-transform">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#171717]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#171717]" />
                      )}
                    </div>
                  </div>

                  {/* Expandable Answer */}
                  {isOpen && (
                    <div className="pt-3.5 text-[14.5px] text-[#6b6b75] leading-relaxed font-normal font-['Manrope'] animate-framer-appear">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
