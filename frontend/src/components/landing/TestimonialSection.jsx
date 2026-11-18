import React from 'react';
import { Quote, ArrowRight, Star } from 'lucide-react';

/**
 * Testimonial Card Section matching Lerova Framer template ("Small Steps. Big Transformations")
 */
export default function TestimonialSection({
  eyebrow = "Student Impact",
  headline = "Small Steps. Big Transformations.",
  quote = "Receiving the LPUNEST 100% scholarship transformed my entire university journey. CertiScholar eliminated weeks of stressful paperwork and queues, allowing me to verify my documents in 60 seconds and focus on my B.Tech studies with zero tuition burden.",
  author = "Rahul Sharma",
  program = "B.Tech Computer Science & Engineering",
  award = "LPUNEST Top Rank Scholar (100% Tuition Waiver)",
  image = "/images/student-quote.jpg",
}) {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-2">
          <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {headline}
          </h2>
        </div>

        {/* Big Rounded Testimonial Card (Lerova Signature) */}
        <div className="bg-[#F8F9FA] rounded-[36px] p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          
          {/* Student Photo */}
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-3xl overflow-hidden shrink-0 shadow-md border-2 border-white">
            <img
              src={image}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote & Details */}
          <div className="space-y-5 flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-slate-800 font-semibold leading-relaxed">
              "{quote}"
            </p>

            <div className="pt-2 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-black text-slate-900 tracking-tight">
                  {author}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {program}
                </p>
                <p className="text-[11px] font-bold text-indigo-600 mt-0.5">
                  {award}
                </p>
              </div>

              <div className="text-xs font-bold text-slate-700 hover:text-black flex items-center justify-center md:justify-end gap-1 cursor-pointer">
                <span>Verified Dossier #STU-2026-904</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
