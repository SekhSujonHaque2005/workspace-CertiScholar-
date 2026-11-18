import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const FAQS = [
  {
    q: "What is CertiScholar?",
    a: "CertiScholar is the official online scholarship portal for Lovely Professional University. It allows students to upload their academic certificates, check eligibility automatically, and receive university fee discounts without paperwork."
  },
  {
    q: "Who can apply for scholarships?",
    a: "All undergraduate and postgraduate students enrolled at Lovely Professional University. Scholarships are available for high test scores (LPUNEST / JEE / 12th Board marks), family financial need, sports achievements, and defense personnel wards."
  },
  {
    q: "How are my documents verified?",
    a: "When you upload your marksheets or connect DigiLocker, the system securely reads your marks and checks them against official board records. This ensures fast verification with zero manual calculation errors."
  },
  {
    q: "Can I receive more than one scholarship?",
    a: "The system automatically checks every scholarship you qualify for and awards you the single highest benefit so you save the maximum amount on your tuition fees."
  },
  {
    q: "Who reviews and approves my scholarship?",
    a: "Applications are reviewed by an official university committee comprising academic deans, the registrar, and student welfare officers to ensure every decision is fair and honest."
  },
  {
    q: "How is the scholarship money given to me?",
    a: "Once approved, your scholarship grant is directly applied to your university fee account, reducing the tuition amount you need to pay for college."
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
              Frequently Asked Questions.
            </h2>
            <p className="text-[15.5px] text-[#6b6b75] leading-relaxed font-normal font-['Manrope'] max-w-2xl">
              Quick answers to common questions about eligibility, document verification, and claiming your university scholarship.
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
