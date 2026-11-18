import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * Pre-Footer Call to Action Section matching Framer LEROVA template exactly:
 * 3D Dark Orb with concentric ripples + floating white card with spark + newsletter capsule
 */
export default function PreFooterCtaSection({
  eyebrow = "Your next chapter",
  headline = "Your Future Won’t Build Itself.",
  description = "Take the first step toward something greater. Verify your academic credentials, explore verified scholarships, and make your next move with CertiScholar.",
  onGetStarted = () => {},
}) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      onGetStarted(email);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
        
        {/* Framer 3D Sphere / Orb Stage */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto flex items-center justify-center">
          {/* Subtle Outer Concentric Ring */}
          <div className="absolute inset-0 rounded-full border border-slate-200/60 scale-125 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full border border-slate-200 pointer-events-none"></div>

          {/* Luxury 3D Dark Orb */}
          <div 
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full relative flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #2f3440 0%, #171920 60%, #0d0e12 100%)',
              boxShadow: '0px 40px 80px -20px rgba(22, 23, 27, 0.55), inset 0px 0px 0px 3px rgba(255, 255, 255, 0.14), inset 0px 30px 60px 0px rgba(22, 23, 27, 0.25)',
            }}
          >
            {/* Floating White Card Over Orb */}
            <div 
              className="bg-white rounded-[20px] px-5 py-3 shadow-2xl flex items-center gap-2.5 z-10 transform -translate-y-1 hover:scale-105 transition-transform"
              style={{
                boxShadow: '0px 30px 70px -24px rgba(22, 23, 27, 0.45)',
              }}
            >
              {/* Framer Orange 4-Point Star Spark */}
              <svg viewBox="0 0 100 100" className="w-4 h-4 shrink-0 fill-[#ff5a2b]">
                <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z" />
              </svg>
              <span className="text-xs font-bold text-slate-900 tracking-tight">
                {eyebrow}
              </span>
            </div>
          </div>
        </div>

        {/* Headline & Description */}
        <div className="max-w-xl mx-auto space-y-3 pt-2">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.12]">
            {headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            {description}
          </p>

          <div className="pt-2">
            <button
              onClick={() => onGetStarted(email)}
              className="inline-flex items-center gap-2 bg-slate-950 hover:bg-black text-white font-bold px-7 py-3 rounded-full text-xs transition shadow-sm"
            >
              <span>Explore Scholarships</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Framer Newsletter / Roll Box */}
        <div className="max-w-md mx-auto pt-4 border-t border-slate-100 space-y-3">
          <p className="text-xs font-bold text-slate-700">
            A Little Inspiration for Your Inbox.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex items-center bg-[#F8F9FA] rounded-full p-1.5 border border-slate-200/90 shadow-2xs focus-within:ring-2 focus-within:ring-slate-900 transition">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your student email..."
              className="w-full bg-transparent px-5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
            />
            <button
              type="submit"
              className="bg-slate-950 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold shrink-0 transition"
            >
              {subscribed ? 'Subscribed ✓' : 'Subscribe'}
            </button>
          </form>

          <p className="text-[10px] text-slate-400">
            By subscribing, you agree to receive scholarship notices from CertiScholar. Unsubscribe anytime.
          </p>
        </div>

      </div>
    </section>
  );
}
