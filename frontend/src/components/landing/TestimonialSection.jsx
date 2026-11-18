import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Stories of Growth / Testimonials Section matching Framer LEROVA template:
 * Clean white rounded card with photo, orange petal spark, quote, and person info
 */
export default function TestimonialSection({
  eyebrow = "Stories of growth",
  headline = "Small Steps. Big Transformations.",
  quote = "CertiScholar helped me turn my ambition into fully funded education. The verification experience made complex requirements feel effortless. I could verify at my own pace and focus entirely on my B.Tech studies with zero tuition stress.",
  author = "Emily Parker",
  role = "B.Tech Computer Science Scholar • LPUNEST Top Rank",
  image = "/images/student-quote.jpg",
}) {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F9FA] border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {headline}
          </h2>
        </div>

        {/* Big Rounded Story Card */}
        <div className="bg-white rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          
          {/* Photo */}
          <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-[24px] overflow-hidden shrink-0 shadow-md">
            <img
              src={image}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote & Author */}
          <div className="space-y-4 flex-1 text-center md:text-left">
            {/* Orange Petal Icon from Framer */}
            <div className="flex justify-center md:justify-start">
              <svg viewBox="0 0 100 100" className="w-6 h-6 stroke-[#ff5a2b] fill-none stroke-[6]">
                <circle cx="76" cy="50" r="17" />
                <circle cx="63" cy="72.5" r="17" />
                <circle cx="37" cy="72.5" r="17" />
                <circle cx="24" cy="50" r="17" />
                <circle cx="37" cy="27.5" r="17" />
                <circle cx="63" cy="27.5" r="17" />
              </svg>
            </div>

            <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
              "{quote}"
            </p>

            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-black text-slate-900 tracking-tight">
                  {author}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {role}
                </p>
              </div>

              <div className="text-xs font-bold text-slate-800 hover:text-black flex items-center justify-center md:justify-end gap-1 cursor-pointer transition">
                <span>Discover More Stories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
