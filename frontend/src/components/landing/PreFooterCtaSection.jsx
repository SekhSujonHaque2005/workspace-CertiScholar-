import React from 'react';

export default function PreFooterCtaSection({
  onGetStarted = () => {},
}) {
  return (
    <section className="py-14 px-3 sm:px-6 bg-white">
      <div 
        className="max-w-[1376px] mx-auto rounded-[28px] overflow-hidden min-h-[580px] p-6 sm:p-14 relative flex items-center justify-center shadow-lg"
        style={{
          background: 'linear-gradient(rgb(245, 246, 249) 0%, rgb(211, 214, 224) 42%, rgb(138, 144, 165) 100%)'
        }}
      >
        {/* SVG Orbit Concentric Rings with Slow Rotations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg viewBox="-700 -700 1400 1400" preserveAspectRatio="xMidYMid slice" className="w-full h-full opacity-90">
            <circle r="190" fill="none" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.2" vectorEffect="non-scaling-stroke"></circle>
            <circle
              r="340"
              fill="none"
              stroke="rgb(255, 255, 255)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="0.1 26"
              vectorEffect="non-scaling-stroke"
              className="animate-spin"
              style={{ animationDuration: '80s' }}
            ></circle>
            <circle r="490" fill="none" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.2" vectorEffect="non-scaling-stroke"></circle>
            <circle
              r="640"
              fill="none"
              stroke="rgb(255, 255, 255)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="0.1 26"
              vectorEffect="non-scaling-stroke"
              className="animate-spin"
              style={{ animationDuration: '100s', animationDirection: 'reverse' }}
            ></circle>
            <circle r="790" fill="none" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.2" vectorEffect="non-scaling-stroke"></circle>
          </svg>
        </div>

        {/* 3D Black Donut Ring Layer (Signature Framer 3D Object) */}
        <div 
          className="w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full pointer-events-none absolute"
          style={{
            border: '46px solid rgb(22, 23, 27)',
            boxShadow: 'rgba(22, 23, 27, 0.55) 0px 40px 80px -20px, rgba(255, 255, 255, 0.14) 0px 0px 0px 3px inset, rgba(22, 23, 27, 0.25) 0px 30px 60px 0px inset'
          }}
        />

        {/* Floating White Center Card */}
        <div className="bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_30px_70px_-24px_rgba(22,23,27,0.45)] max-w-md mx-auto space-y-4 relative z-10 text-center">
          
          {/* Eyebrow with Spark Icon */}
          <div className="inline-flex items-center gap-2 justify-center">
            <svg viewBox="0 0 100 100" className="w-4 h-4 fill-[#ff5a2b]">
              <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z"></path>
            </svg>
            <span className="text-[12px] font-semibold text-slate-500 font-['Manrope']">
              Your next chapter
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Manrope'] font-medium text-[28px] sm:text-[30px] leading-[1.12] tracking-[-0.055em] text-[#171717]">
            Your Future Won’t Build Itself.
          </h2>

          {/* Paragraph */}
          <p className="text-[13.5px] text-slate-500 leading-relaxed font-normal font-['Manrope']">
            Take the first step toward something greater. Discover verified scholarships, corroborate credentials, and make your next move with CertiScholar.
          </p>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={onGetStarted}
              className="w-full group bg-gradient-to-b from-[#fbfbfc] to-[#e9e9ec] border border-black/8 hover:border-black/20 text-[#171717] py-3.5 px-6 rounded-[14px] text-xs sm:text-[13px] font-semibold tracking-tight shadow-[0_10px_22px_-8px_rgba(23,23,23,0.22)] active:scale-98 transition-all cursor-pointer overflow-hidden font-['Manrope']"
            >
              <span className="btn-roll">
                <span className="btn-roll-inner">
                  <span>Start Verification Today</span>
                  <span>Start Verification Today</span>
                </span>
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
