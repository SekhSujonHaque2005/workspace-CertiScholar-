import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const FAQS = [
  {
    q: "What is LEROVA?",
    a: "LEROVA is an online learning platform offering expert-led courses designed to help you build real-world skills in design, technology, business, and data analysis."
  },
  {
    q: "Who are the courses designed for?",
    a: "Our courses are created for curious minds, aspiring professionals, and career switchers looking to build practical, in-demand skills at their own pace."
  },
  {
    q: "Can I learn at my own pace?",
    a: "Yes. All courses provide lifetime access to on-demand video lessons, project files, and exercises, allowing you to fit learning into your schedule."
  },
  {
    q: "Do I need previous experience?",
    a: "Most foundational courses assume zero prior knowledge. Advanced tracks clearly state prerequisites in their syllabus overview before you enroll."
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. Upon completing all lessons and final portfolio projects, you receive an accredited digital completion certificate that you can showcase on LinkedIn or your portfolio."
  },
  {
    q: "How do I get started?",
    a: "Simply browse our courses, pick a path that aligns with your ambitions, and start learning immediately with interactive lessons and practical assignments."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="max-w-[900px] mx-auto px-6 space-y-14">
        
        {/* Header */}
        <ScrollReveal yOffset={30}>
          <div className="space-y-3">
            <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] leading-tight text-[#171717] tracking-[-0.035em]">
              Everything You Need to Know.
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
              Find answers to common questions about LEROVA, our courses, and how learning works.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List with Scroll Reveal */}
        <ScrollReveal yOffset={40}>
          <div className="divide-y divide-slate-200/80 border-t border-slate-200/80">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="py-6 cursor-pointer select-none transition-colors group"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[17px] font-semibold text-[#171717] tracking-tight font-['Manrope'] group-hover:text-black transition-colors">
                      {faq.q}
                    </h3>
                    <div className="shrink-0 text-slate-400 group-hover:text-black transition-colors">
                      {isOpen ? (
                        <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                          <Minus className="w-4 h-4 text-[#171717]" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center">
                          <Plus className="w-4 h-4 text-slate-600" />
                        </div>
                      )}
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
        </ScrollReveal>

      </div>
    </section>
  );
}
