import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * Pre-Footer Call to Action Section matching Lerova Framer template
 * Concentric circular portal graphic + floating eligibility card + input capsule
 */
export default function PreFooterCtaSection({
  headline = "A whole new world is just a click away.",
  description = "Join thousands of ambitious students who have simplified their scholarship journey with CertiScholar.",
  onGetStarted = () => {},
}) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onGetStarted(inputValue);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
        
        {/* Futuristic Concentric Rings Graphic (Lerova Portal Style) */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto flex items-center justify-center">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-slate-200 animate-[spin_60s_linear_infinite]"></div>
          {/* Middle Ring */}
          <div className="absolute inset-4 rounded-full border border-slate-300/80"></div>
          {/* Inner Glowing Ring */}
          <div className="absolute inset-10 rounded-full bg-slate-900 shadow-2xl flex items-center justify-center p-6 text-white text-center">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400">
                Quick Eligibility
              </span>
              <p className="text-xs font-bold text-slate-200">
                Instant Verification
              </p>
              <span className="text-[10px] text-slate-400 block font-mono">
                &lt; 60 Seconds
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            {description}
          </p>
        </div>

        {/* Input Capsule (Lerova Signature) */}
        <div className="max-w-md mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-[#F8F9FA] rounded-full p-1.5 border border-slate-300/90 shadow-sm focus-within:ring-2 focus-within:ring-slate-900 transition"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your student roll or email..."
              className="w-full bg-transparent px-5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
            />
            <button
              type="submit"
              className="bg-slate-950 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold shrink-0 transition"
            >
              Get Started
            </button>
          </form>
          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 mt-3">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Free Student Passport
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" /> DigiLocker Corroborated
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
