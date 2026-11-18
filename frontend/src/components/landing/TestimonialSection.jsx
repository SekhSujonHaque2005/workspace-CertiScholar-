import React from 'react';
import { Star } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

export default function TestimonialSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#f4f4f5]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Header */}
        <ScrollReveal yOffset={30}>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
              STORIES OF GROWTH
            </span>
            <h2 className="font-['Manrope'] font-medium text-[36px] sm:text-[44px] leading-tight text-[#171717] tracking-[-0.035em]">
              Small Steps. Big Transformations.
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
              Every scholarship journey matters. Here’s how real scholars used CertiScholar to verify credentials, secure financial aid, and achieve their goals.
            </p>
          </div>
        </ScrollReveal>

        {/* Big Testimonial Card with Framer Story Card Physics */}
        <ScrollReveal yOffset={70} scale={0.93} duration={900}>
          <div className="bg-white rounded-[28px] p-8 sm:p-12 lg:p-16 shadow-[0_1px_3px_rgba(23,23,23,0.06)] max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Student Portrait */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[320px] aspect-square rounded-[22px] overflow-hidden shadow-md">
                  <img
                    src="/images/student-quote.jpg"
                    alt="Sarah Lin - Student Story"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Quote Content */}
              <div className="lg:col-span-8 space-y-6">
                {/* 5 Stars */}
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Headline Quote */}
                <blockquote className="text-[24px] sm:text-[32px] font-medium text-[#171717] leading-snug tracking-tight font-['Manrope']">
                  “CertiScholar helped me turn my academic performance into a fully funded university degree.”
                </blockquote>

                {/* Story */}
                <p className="text-slate-500 text-[14px] sm:text-[15.5px] leading-relaxed font-normal font-['Manrope']">
                  The verification process was transparent, fast, and completely free of manual paperwork. Within 48 hours of uploading my board marksheets, my 100% LPUNEST waiver was corroborated and credited directly to my university tuition ledger.
                </p>

                {/* Author */}
                <div className="pt-2 border-t border-slate-100 space-y-0.5">
                  <div className="text-[16px] font-semibold text-[#171717] font-['Manrope']">
                    Sarah Lin
                  </div>
                  <div className="text-[13px] text-slate-500 font-normal font-['Manrope']">
                    B.Tech Computer Science Scholar · Lovely Professional University
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
