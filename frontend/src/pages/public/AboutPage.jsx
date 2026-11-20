import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

// Reusable Arrow Up-Right Icon matching Framer LEROVA
function ArrowUpRightIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

// Framer Orange Spark Icon
function OrangeSpark({ className = "w-3.5 h-3.5" }) {
  return (
    <div className={`${className} shrink-0 flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full fill-[#ff5a2b] overflow-visible">
        <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z" />
      </svg>
    </div>
  );
}

export default function AboutPage({
  onNavigateHome = () => {},
  onNavigateLogin = () => {},
  onNavigateRegister = () => {},
  onNavigateStudentWorkspace = () => {},
  onNavigateScholarships = () => {},
}) {
  const [language, setLanguage] = useState('EN');
  const [fontScale, setFontScale] = useState(100);
  const [activeApproachTab, setActiveApproachTab] = useState(0);

  // Counter animations for Section 2
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Animate stats counter
    const dur = 1400;
    const steps = 30;
    const interval = dur / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounter1(Math.round(progress * 10));
      setCounter2(Math.round(progress * 42));
      setCounter3(Math.round(progress * 99.4 * 10) / 10);
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const rootScaleStyle = {
    fontSize: fontScale === 90 ? '90%' : fontScale === 110 ? '110%' : '100%',
  };

  const CORE_VALUES = [
    {
      id: "val-1",
      tag: "{ value 01 }",
      title: "Curiosity First",
      desc: "We encourage questions, exploration, and lifelong learning across every academic field.",
      glyph: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#ff5a2b] fill-none" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      )
    },
    {
      id: "val-2",
      tag: "{ value 02 }",
      title: "Practical by Design",
      desc: "We focus on knowledge and automated tools that students and faculty can put into action immediately.",
      glyph: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#ff5a2b] fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      )
    },
    {
      id: "val-3",
      tag: "{ value 03 }",
      title: "Progress Over Perfection",
      desc: "Small, consistent improvements in verification speed create lasting institutional trust.",
      glyph: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#ff5a2b] fill-none" strokeWidth="2" strokeLinecap="round">
          <path d="M2 12c4-4 8-4 12 0s8 4 12 0" />
          <path d="M2 17c4-4 8-4 12 0s8 4 12 0" />
        </svg>
      )
    },
    {
      id: "val-4",
      tag: "{ value 04 }",
      title: "Aid for Everyone",
      desc: "We aim to make scholarship opportunities welcoming, fair, and accessible to every background.",
      glyph: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#ff5a2b] fill-none" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4a8 8 0 0 1 8 8M12 20a8 8 0 0 1-8-8" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      id: "val-5",
      tag: "{ value 05 }",
      title: "Always Improving",
      desc: "We believe higher education and institutional governance must evolve alongside the world.",
      glyph: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#ff5a2b] fill-none" strokeWidth="2" strokeLinecap="round">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
          <circle cx="12" cy="12" r="3" fill="#ff5a2b" />
        </svg>
      )
    }
  ];

  const APPROACH_PRINCIPLES = [
    {
      title: "Flexibility & Mobile Ease",
      desc: "Designed to operate seamlessly on any smartphone with client-side camera scan quality feedback before upload."
    },
    {
      title: "Clear Eligibility Paths",
      desc: "Itemized criteria breakdowns showing exactly how board percentiles, entrance test ranks, and income cutoffs qualify."
    },
    {
      title: "Practical Verification",
      desc: "Automated OCR extraction and multi-board normalization eliminating manual paperwork and physical university queues."
    },
    {
      title: "Steady Progress & Direct Credit",
      desc: "Real-time application tracking with sanctioned fee concessions credited directly to the university SIS tuition ledger."
    }
  ];

  const TEAM_MEMBERS = [
    {
      name: "Dr. Olivia Bennett",
      role: "Dean of Student Scholarships",
      dept: "Division of Student Welfare, LPU",
      tag: "{ learning }",
      image: "/images/mentor-1.jpg"
    },
    {
      name: "Noah Fischer",
      role: "Curriculum & Evaluation Lead",
      dept: "Academic Board of Accreditations",
      tag: "{ curriculum }",
      image: "/images/mentor-2.jpg"
    },
    {
      name: "Maya Okafor",
      role: "Student Community Coordinator",
      dept: "Scholarship Grievance & Welfare Cell",
      tag: "{ community }",
      image: "/images/mentor-3.jpg"
    },
    {
      name: "Leo Tanaka",
      role: "Platform Operations Director",
      dept: "Institutional Directorate of Intake",
      tag: "{ product }",
      image: "/images/mentor-4.jpg"
    }
  ];

  const WHY_CHOOSE_ITEMS = [
    "Flexible, transparent application experience with zero physical paperwork",
    "Instant OCR marksheet extraction eliminating manual data entry errors",
    "Deterministic, 100% explainable eligibility scoring backed by circulars",
    "DPDP Act 2023 certified encrypted student document vault",
    "A supportive institutional grievance and multi-disciplinary quorum committee"
  ];

  return (
    <div className="min-h-screen bg-white text-[#171717] font-['Manrope'] antialiased selection:bg-[#171717] selection:text-white overflow-x-hidden w-full" style={rootScaleStyle}>
      
      {/* 01: Inverted Tabbed Global Header (pinned flush to viewport edges) */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        fontScale={fontScale}
        onFontScaleChange={setFontScale}
        onLogin={onNavigateLogin}
        onRegister={onNavigateRegister}
      />

      <main className="space-y-16 sm:space-y-24 pb-12 w-full overflow-x-hidden">
        
        {/* ========================================================================= */}
        {/* 02: HERO SECTION (Framer LEROVA "Opening" / Soft Light Panel + Photo)    */}
        {/* ========================================================================= */}
        <section className="pt-2 sm:pt-3 px-2 sm:px-4 max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col gap-3 w-full">
            
            {/* Top Light Panel Container matching Framer LEROVA rgb(230, 232, 236) */}
            <div 
              className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[580px] sm:min-h-[660px] lg:min-h-[700px] flex flex-col justify-between pt-[100px] sm:pt-[120px] pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 shadow-xs"
              style={{
                backgroundColor: 'rgb(230, 232, 236)'
              }}
            >
              {/* Background Art / Concentric Circles Line Graphics */}
              <div className="absolute right-[-40px] sm:right-[-20px] top-[40px] sm:top-[60px] w-[340px] sm:w-[500px] lg:w-[620px] h-[340px] sm:h-[500px] lg:h-[620px] pointer-events-none opacity-40 overflow-hidden">
                <svg viewBox="0 0 600 600" className="w-full h-full stroke-black fill-none" strokeWidth="1">
                  <circle cx="300" cy="300" r="120" strokeDasharray="3 3" />
                  <circle cx="300" cy="300" r="190" />
                  <circle cx="300" cy="300" r="260" strokeDasharray="2 6" />
                  <circle cx="300" cy="300" r="330" />
                </svg>
              </div>

              {/* Top Eyebrow + Headline + Description */}
              <div className="relative z-10 space-y-5 sm:space-y-6 max-w-3xl">
                
                {/* Eyebrow Pill matching Framer: + GET TO KNOW LEROVA */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/5 text-[#171717] text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase shadow-2xs font-['Manrope']">
                  <OrangeSpark />
                  <span>Get to know CertiScholar</span>
                </div>

                {/* Master H1 Headline: Matching Framer LEROVA Manrope Medium ~76px */}
                <h1 className="font-['Manrope'] font-medium text-[38px] min-[400px]:text-[46px] sm:text-[64px] lg:text-[76px] leading-[1.04] tracking-[-0.035em] text-[#171717]">
                  Learning Should <br className="hidden sm:inline" />
                  Open Doors, Not <br className="hidden sm:inline" />
                  Create Barriers.
                </h1>

                {/* Subtitle Paragraph */}
                <p className="text-slate-600 text-[15px] sm:text-[18px] leading-relaxed max-w-2xl font-normal font-['Manrope']">
                  We believe everyone deserves the opportunity to grow. CertiScholar is built around a simple idea: make university scholarships more accessible, practical, and meaningful for students ready to move forward.
                </p>

                {/* Action CTA Button with Framer Dual-Roll Pill */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      onNavigateScholarships();
                      const el = document.getElementById('our-story');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group bg-[#171717] hover:bg-[#ff5a2b] text-white font-semibold px-7 py-3.5 rounded-full text-xs sm:text-[13.5px] tracking-tight transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 font-['Manrope'] min-h-[46px]"
                  >
                    <span>Explore Our Schemes</span>
                    <ArrowUpRightIcon />
                  </button>

                  <button
                    type="button"
                    onClick={onNavigateHome}
                    className="text-slate-600 hover:text-black text-xs sm:text-[13px] font-medium transition px-3 py-2 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>&larr; Back to Home</span>
                  </button>
                </div>

              </div>

              {/* Bottom Subtle Institutional Note */}
              <div className="relative z-10 pt-8 border-t border-black/8 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-500 font-['Manrope']">
                <span>LOVELY PROFESSIONAL UNIVERSITY</span>
                <span className="text-[#ff5a2b]">STUDENT FINANCIAL AID & SCHOLARSHIPS CELL</span>
              </div>

            </div>

            {/* Below Hero: Full-Width Rounded Media Banner matching Framer Media > Image */}
            <div className="w-full rounded-[24px] sm:rounded-[28px] overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-slate-200 relative shadow-xs">
              <img
                src="/images/hero-student-2.jpg"
                alt="Lovely Professional University students collaborating in campus study hall"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 sm:bottom-6 left-5 sm:left-8 text-white font-['Manrope']">
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase opacity-90">
                  Campus Life • Lovely Professional University
                </span>
                <h3 className="text-sm sm:text-lg font-medium opacity-95">
                  Over 10,000 students verified and funded across academic programs.
                </h3>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 03: SECTION 2: "Our Story" (Split Layout + Figures / Counter Stats)      */}
        {/* ========================================================================= */}
        <section id="our-story" className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Narrative Headline & Paragraphs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-slate-600 text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase font-['Manrope']">
                <OrangeSpark />
                <span>Our story</span>
              </div>

              {/* H2 Headline */}
              <h2 className="font-['Manrope'] font-medium text-[30px] sm:text-[44px] leading-[1.12] tracking-[-0.03em] text-[#171717]">
                Built on the Belief That Everyone Can Grow.
              </h2>

              <p className="text-slate-600 text-[15.5px] sm:text-[17px] leading-relaxed font-normal font-['Manrope']">
                The world is constantly changing, and the ability to learn has never mattered more. CertiScholar is designed to help students navigate that change with relevant knowledge, flexible scholarship experiences, and a clearer path toward their educational goals.
              </p>

              <p className="text-slate-600 text-[15.5px] sm:text-[17px] leading-relaxed font-normal font-['Manrope']">
                Whether you’re beginning your first degree, continuing high-level research, or overcoming family financial constraints, we’re here to make your next step feel possible and respected.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onNavigateRegister}
                  className="bg-[#171717] hover:bg-[#ff5a2b] text-white px-6 py-3 rounded-full text-xs sm:text-[13px] font-semibold transition cursor-pointer flex items-center gap-2"
                >
                  <span>Start Your Application</span>
                  <ArrowUpRightIcon />
                </button>
              </div>

            </div>

            {/* Right Column: Figures matching Framer { 01 }, { 02 }, { 03 } */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Figure 01 */}
              <div className="bg-[#f4f4f5] rounded-[22px] p-6 sm:p-7 space-y-2 border border-black/4 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-mono font-medium text-slate-400">
                    {`{ 01 }`}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#ff5a2b]" />
                </div>
                <div className="font-['Manrope'] font-semibold text-[38px] sm:text-[46px] text-[#171717] tracking-tight leading-none">
                  {counter1}K+
                </div>
                <p className="text-[14px] text-slate-600 font-medium">
                  Active Scholars Evaluated*
                </p>
              </div>

              {/* Figure 02 */}
              <div className="bg-[#f4f4f5] rounded-[22px] p-6 sm:p-7 space-y-2 border border-black/4 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-mono font-medium text-slate-400">
                    {`{ 02 }`}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#ff5a2b]" />
                </div>
                <div className="font-['Manrope'] font-semibold text-[38px] sm:text-[46px] text-[#171717] tracking-tight leading-none">
                  {counter2}+
                </div>
                <p className="text-[14px] text-slate-600 font-medium">
                  Merit & Need-Based Schemes*
                </p>
              </div>

              {/* Figure 03 */}
              <div className="bg-[#f4f4f5] rounded-[22px] p-6 sm:p-7 space-y-2 border border-black/4 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-mono font-medium text-slate-400">
                    {`{ 03 }`}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="font-['Manrope'] font-semibold text-[38px] sm:text-[46px] text-[#171717] tracking-tight leading-none">
                  {counter3}%
                </div>
                <p className="text-[14px] text-slate-600 font-medium">
                  Verification Accuracy Rate*
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 04: SECTION 3: "Mission & Vision" (Dual Framer Bento Cards)             */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            
            {/* Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-slate-600 text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase font-['Manrope']">
                <OrangeSpark />
                <span>What drives us</span>
              </div>
              <h2 className="font-['Manrope'] font-medium text-[30px] sm:text-[42px] leading-tight text-[#171717] tracking-[-0.03em]">
                Mission & Vision
              </h2>
            </div>

            {/* Bento Cards matching Framer Cards > Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Mission Card */}
              <div className="bg-[#fbfbfc] rounded-[26px] border border-black/8 p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg transition-all duration-300 space-y-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-[#cfcbfa]/40 text-[#403359] text-[11.5px] font-mono font-semibold px-3 py-1 rounded-full">
                      {`{ our mission }`}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white shadow-xs border border-slate-200/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRightIcon />
                    </div>
                  </div>

                  <h3 className="font-['Manrope'] font-semibold text-[24px] sm:text-[28px] text-[#171717] tracking-tight">
                    Our Mission
                  </h3>

                  <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                    To make high-quality scholarship assistance more approachable, transparent, and useful—empowering students to build credentials and skills that unlock meaningful opportunities without financial debt.
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-black/5">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Equitable fee waivers for first-generation students</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Mobile-first application with instant scan clarity tests</span>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-[#fbfbfc] rounded-[26px] border border-black/8 p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg transition-all duration-300 space-y-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-[#bfe9d2]/50 text-[#1f4e38] text-[11.5px] font-mono font-semibold px-3 py-1 rounded-full">
                      {`{ our vision }`}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white shadow-xs border border-slate-200/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRightIcon />
                    </div>
                  </div>

                  <h3 className="font-['Manrope'] font-semibold text-[24px] sm:text-[28px] text-[#171717] tracking-tight">
                    Our Vision
                  </h3>

                  <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                    A campus world where curiosity is encouraged, educational support is accessible, and every learner with the determination to succeed has the tools and institutional backing to reach their highest potential.
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-black/5">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Zero black-box decisions with 100% explainability</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Cryptographically verified records following students for life</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 05: SECTION 4: "Our Core Values" (5 Framer Values with Custom Glyphs)     */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            
            {/* Header matching Framer Core Values */}
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-slate-600 text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase font-['Manrope']">
                <OrangeSpark />
                <span>Our core values</span>
              </div>
              <h2 className="font-['Manrope'] font-medium text-[30px] sm:text-[44px] leading-[1.12] tracking-[-0.03em] text-[#171717]">
                Five ideas guide everything we make. They shape how we design tools, support learners, and decide what to build next.
              </h2>
            </div>

            {/* 5 Value Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CORE_VALUES.map((val) => (
                <div 
                  key={val.id}
                  className="bg-[#f4f4f5] hover:bg-white rounded-[24px] p-6 sm:p-7 border border-black/4 hover:border-black/10 hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[220px] group cursor-default"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-2xs border border-slate-200/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {val.glyph}
                      </div>
                      <span className="text-[11.5px] font-mono font-medium text-slate-400">
                        {val.tag}
                      </span>
                    </div>

                    <h3 className="font-['Manrope'] font-semibold text-[20px] text-[#171717] tracking-tight pt-1">
                      {val.title}
                    </h3>

                    <p className="text-[13.5px] text-slate-600 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/4 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>Guiding Principle</span>
                    <ArrowUpRightIcon className="w-3 h-3 text-slate-400 group-hover:text-[#ff5a2b] transition-colors" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 06: SECTION 5: "Our Approach" (Image + Principles List)                  */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Media Image matching Framer Our Approach > Media */}
            <div className="lg:col-span-5 rounded-[28px] overflow-hidden aspect-[4/5] bg-slate-200 shadow-sm relative">
              <img
                src="/images/step-card.jpg"
                alt="Student using CertiScholar digital scholarship interface"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
                Authentic Verification
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-slate-600 text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase font-['Manrope']">
                <OrangeSpark />
                <span>Our approach</span>
              </div>

              <h2 className="font-['Manrope'] font-medium text-[30px] sm:text-[44px] leading-[1.12] tracking-[-0.03em] text-[#171717]">
                Designed Around Real Life.
              </h2>

              <p className="text-slate-600 text-[15.5px] sm:text-[17px] leading-relaxed font-normal font-['Manrope']">
                Scholarship applications should work with your schedule, not against it. That’s why CertiScholar’s verification experience emphasizes flexibility, clear eligibility paths, practical document checks, and steady progress.
              </p>

              {/* 4 Interactive Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {APPROACH_PRINCIPLES.map((p, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveApproachTab(idx)}
                    className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      activeApproachTab === idx 
                        ? 'bg-white border-[#ff5a2b] shadow-xs' 
                        : 'bg-[#f4f4f5] border-transparent hover:bg-slate-200/60'
                    }`}
                  >
                    <div className="flex items-center justify-between pb-1">
                      <span className="font-['Manrope'] font-semibold text-[14.5px] text-[#171717]">
                        {p.title}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${activeApproachTab === idx ? 'bg-[#ff5a2b]' : 'bg-slate-300'}`} />
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={onNavigateStudentWorkspace}
                  className="bg-[#171717] hover:bg-[#ff5a2b] text-white px-7 py-3 rounded-full text-xs sm:text-[13px] font-semibold transition cursor-pointer flex items-center gap-2 font-['Manrope']"
                >
                  <span>Discover the Learning Experience</span>
                  <ArrowUpRightIcon />
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 07: SECTION 6: "Meet Our Team" (4 Portrait Cards)                         */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            
            {/* Header matching Framer Team */}
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-slate-600 text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase font-['Manrope']">
                <OrangeSpark />
                <span>Meet our team</span>
              </div>
              <h2 className="font-['Manrope'] font-medium text-[30px] sm:text-[44px] leading-[1.12] tracking-[-0.03em] text-[#171717]">
                People Who Believe in Possibility. Behind every great learning experience is a team committed to making knowledge more useful, engaging, and accessible.
              </h2>
            </div>

            {/* 4 Portrait Cards matching Framer Cell > Default */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM_MEMBERS.map((m) => (
                <div 
                  key={m.name}
                  className="bg-[#fbfbfc] rounded-[24px] overflow-hidden border border-black/8 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  {/* Portrait with zoom on hover */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-slate-200">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-slate-700 shadow-2xs">
                      {m.tag}
                    </div>
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRightIcon className="w-3 h-3 text-slate-800" />
                    </div>
                  </div>

                  {/* Copy below photo */}
                  <div className="p-5 space-y-1">
                    <h3 className="font-['Manrope'] font-semibold text-[17px] text-[#171717] tracking-tight">
                      {m.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#ff5a2b]">
                      {m.role}
                    </p>
                    <p className="text-[11.5px] text-slate-500 font-normal">
                      {m.dept}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 08: SECTION 7: "Why Learners Choose LEROVA" (Split Row + Checks)         */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="bg-[#f4f4f5] rounded-[28px] sm:rounded-[32px] p-8 sm:p-14 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-slate-600 text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase font-['Manrope']">
                  <OrangeSpark />
                  <span>Why learners choose CertiScholar</span>
                </div>
                <h2 className="font-['Manrope'] font-medium text-[34px] sm:text-[50px] leading-[1.08] tracking-[-0.035em] text-[#171717]">
                  A Smarter Way to Keep Growing.
                </h2>
                <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                  Lovely Professional University’s automated platform replaces anxiety with clarity, bringing institutional trust and dignity to every deserving applicant.
                </p>
              </div>

              {/* Right Column: 5 Checklist Items matching Framer */}
              <div className="lg:col-span-6 space-y-3.5">
                {WHY_CHOOSE_ITEMS.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl p-4 sm:p-4.5 border border-black/4 shadow-2xs flex items-center gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#ff5a2b] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="font-['Manrope'] font-medium text-[14px] sm:text-[15px] text-[#171717]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 09: SECTION 8: "Closing CTA" (Framer Luxury Dark Banner with Orbit Rings)  */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-2 sm:px-4">
          <div 
            className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden min-h-[460px] sm:min-h-[520px] p-8 sm:p-14 lg:p-16 relative flex items-center justify-center shadow-2xl text-center"
            style={{
              backgroundColor: 'rgb(22, 23, 27)'
            }}
          >
            {/* Concentric Rotating Orbit Rings matching Framer Closing CTA > Orbit */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 flex items-center justify-center">
              <svg viewBox="-700 -700 1400 1400" className="w-[1200px] h-[1200px]">
                <circle r="180" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                <circle r="320" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" strokeDasharray="4 8" />
                <circle r="480" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                <circle r="640" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="2 12" />
              </svg>
            </div>

            {/* Soft Ambient Radial Spotlight in Center */}
            <div 
              className="absolute w-[400px] h-[400px] rounded-full pointer-events-none opacity-20 blur-3xl"
              style={{
                background: 'radial-gradient(circle, #ff5a2b 0%, transparent 70%)'
              }}
            />

            {/* Central Callout Content */}
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto text-white">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase font-['Manrope']">
                <OrangeSpark />
                <span>Start today</span>
              </div>

              <h2 className="font-['Manrope'] font-medium text-[34px] sm:text-[52px] leading-[1.08] tracking-[-0.035em] text-white">
                Your Next Opportunity Starts With Learning.
              </h2>

              <p className="text-white/70 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto font-normal font-['Manrope']">
                Discover a scholarship scheme, verify your credentials in minutes, and take a meaningful step toward your degree.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onNavigateRegister}
                  className="bg-white hover:bg-[#ff5a2b] text-[#171717] hover:text-white font-semibold px-8 py-3.5 rounded-full text-xs sm:text-[14px] tracking-tight transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer flex items-center gap-2 font-['Manrope'] min-h-[46px]"
                >
                  <span>Find Your Scheme</span>
                  <ArrowUpRightIcon />
                </button>

                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/15 font-medium px-6 py-3.5 rounded-full text-xs sm:text-[13px] transition cursor-pointer font-['Manrope'] min-h-[46px]"
                >
                  Back to Home
                </button>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* 10: Global Institutional Footer */}
      <Footer
        onExploreClick={onNavigateHome}
        onLoginClick={onNavigateLogin}
        onRegisterClick={onNavigateRegister}
      />

    </div>
  );
}
