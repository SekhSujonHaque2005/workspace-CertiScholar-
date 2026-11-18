import React, { useState } from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

/**
 * Authentic Framer LEROVA Newsletter Section:
 * Rounded #f4f4f5 card container, decorative geometric background watermark,
 * luxury Manrope typography, and pill email input with embedded black Subscribe button.
 */
export default function NewsletterSection({
  headline = "A Little Inspiration for Your Inbox.",
  description = "Get scholarship deadlines, institutional circulars, and merit application notices delivered fresh.",
}) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 py-3 select-none">
      <ScrollReveal yOffset={40} duration={850}>
        <div className="w-full bg-[#f4f4f5] rounded-[28px] p-8 sm:p-14 shadow-[0_1px_2px_rgba(23,23,23,0.05)] relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12">
          
          {/* Subtle Decorative Geometric Watermark (Signature Framer Art) */}
          <div className="absolute right-[-40px] top-[-40px] w-[280px] h-[280px] pointer-events-none opacity-40">
            <svg viewBox="0 0 100 100" width="100%" height="100%" className="overflow-visible">
              <circle cx="50" cy="50" r="13" fill="rgba(23, 23, 23, 0.06)" />
              <path
                d="M70.00 50.00L94.00 50.00M69.02 56.18L91.85 63.60M66.18 61.76L85.60 75.86M61.76 66.18L75.86 85.60M56.18 69.02L63.60 91.85M50.00 70.00L50.00 94.00M43.82 69.02L36.40 91.85M38.24 66.18L24.14 85.60M33.82 61.76L14.40 75.86M30.98 56.18L8.15 63.60M30.00 50.00L6.00 50.00M30.98 43.82L8.15 36.40M33.82 38.24L14.40 24.14M38.24 33.82L24.14 14.40M43.82 30.98L36.40 8.15M50.00 30.00L50.00 6.00M56.18 30.98L63.60 8.15M61.76 33.82L75.86 14.40M66.18 38.24L85.60 24.14M69.02 43.82L91.85 36.40"
                stroke="rgba(23, 23, 23, 0.06)"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Left Copy */}
          <div className="space-y-3 max-w-xl z-10">
            <h2 className="text-[34px] sm:text-[40px] font-medium text-[#171717] tracking-[-0.04em] leading-[1.12] font-['Manrope']">
              {headline}
            </h2>
            <p className="text-[14.5px] font-normal text-[#6b6b75] leading-relaxed font-['Manrope']">
              {description}
            </p>
          </div>

          {/* Right Input Pill Form */}
          <div className="w-full lg:max-w-[460px] space-y-3 z-10">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-full p-1.5 pl-6 flex items-center shadow-[0_1px_3px_rgba(23,23,23,0.06)] border border-black/6 transition-shadow focus-within:shadow-[0_4px_12px_rgba(23,23,23,0.1)]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-transparent text-[14px] text-[#171717] placeholder:text-[#9a9aa1] focus:outline-none font-['Manrope']"
              />
              <button
                type="submit"
                className="bg-[#171717] text-white text-[13px] font-semibold px-6 py-3 rounded-full hover:bg-black active:scale-98 transition-all cursor-pointer shrink-0 font-['Manrope']"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>

            <p className="text-[12px] text-[#9a9aa1] font-['Manrope'] pl-3">
              By subscribing, you agree to receive updates from CertiScholar. You can unsubscribe at any time.
            </p>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
