import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Lock, 
  Scale, 
  Cpu, 
  HeartHandshake, 
  Building2, 
  Eye, 
  Check,
  ChevronRight
} from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { ScrollReveal } from '../../hooks/useScrollReveal';

// Reusable Arrow Up-Right Icon matching Framer LEROVA
function ArrowUpRightIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
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
  const [activePillar, setActivePillar] = useState(0);

  // Handle URL hash changes or scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const rootScaleStyle = {
    fontSize: fontScale === 90 ? '90%' : fontScale === 110 ? '110%' : '100%',
  };

  const PILLARS_DATA = [
    {
      id: "intake",
      badgeNumber: "01",
      title: "Automated Intake & Document Intelligence",
      tagline: "Instant OCR extraction, zero manual data entry errors, and friendly pre-flight checks.",
      icon: Cpu,
      color: "#ff5a2b",
      description: "CertiScholar replaces tedious paper application forms with an intelligent document intake engine. Students upload standard PDFs or phone photos of marksheets, Tehsil income certificates, and category credentials. Our system checks scan clarity and DPI client-side, saving students weeks of waiting only to be rejected for a blurry photo.",
      highlights: [
        "Instant text and grade extraction across 10th/12th marksheets & semester transcripts",
        "Multi-board arithmetic normalization (CBSE 9.5 multiplier, Punjab State Board, ICSE)",
        "Automated authenticity validation against state Tehsil databases and DigiLocker formats",
        "Client-side scan quality meter guaranteeing legible submissions before final upload"
      ],
      metric: "72 Hours → 4 Minutes",
      metricLabel: "Average intake processing time"
    },
    {
      id: "governance",
      badgeNumber: "02",
      title: "Explainable Governance & Deterministic Rules",
      tagline: "No black-box algorithmic rejections. Every score is clear, transparent, and auditable.",
      icon: Scale,
      color: "#3b82f6",
      description: "We believe educational opportunities must be built on trust, not opaque artificial intelligence. CertiScholar evaluates eligibility through an open, deterministic rule engine. Students and administrators can inspect the exact mathematical formula, weightage breakdown, and source circulars behind every award recommendation.",
      highlights: [
        "100% explainable eligibility scores with itemized criteria checkmarks",
        "Cryptographically signed audit logs timestamping every verification step",
        "Real-time circular cross-referencing against official university fee notifications",
        "98% verified information accuracy backed by dual institutional cross-checks"
      ],
      metric: "100% Explainable",
      metricLabel: "Transparent scoring with zero mystery"
    },
    {
      id: "quorum",
      badgeNumber: "03",
      title: "Multi-Disciplinary University Quorum",
      tagline: "AI assists with speed, but human university leadership makes the final decisions.",
      icon: Users,
      color: "#10b981",
      description: "Technology should never make life-altering decisions in isolation. CertiScholar pairs automated intelligence with a dedicated, four-officer institutional review board. Academic deans, registrars, and student welfare officers review candidate dossiers, resolve edge cases, and sign off on formal award notifications.",
      highlights: [
        "Tripartite sign-off protocol for edge cases and special hardship applications",
        "Integrated Student Grievance & Appeal portal for rapid human reassessment",
        "Direct synchronization with University Student Information System (SIS/ERP)",
        "Guaranteed human officer review for every student seeking consideration"
      ],
      metric: "4 Deans & Officers",
      metricLabel: "Institutional review board oversight"
    }
  ];

  const CORE_VALUES = [
    {
      icon: HeartHandshake,
      title: "Digital Equity",
      subtitle: "Equal opportunity for every student",
      desc: "Financial assistance should be accessible to all students, regardless of background, technical know-how, or access to high-speed scanners. Our mobile-friendly portal works smoothly on any smartphone."
    },
    {
      icon: Eye,
      title: "Radical Transparency",
      subtitle: "No hidden rules or mystery scores",
      desc: "Every scholarship rule, threshold, and formula is stated in clear, simple English. Students know exactly what is required and receive real-time updates as their application progresses."
    },
    {
      icon: Lock,
      title: "Student Data Dignity",
      subtitle: "DPDP Act 2023 certified privacy",
      desc: "Student certificates contain sensitive personal and financial data. We never sell student data or share documents with third-party advertisers. Documents remain encrypted in your private vault."
    },
    {
      icon: Building2,
      title: "Academic Integrity",
      subtitle: "Honoring merit and genuine need",
      desc: "By preventing counterfeit submissions and double-claiming across schemes, we ensure scholarship funds reach the students who have genuinely earned them and need them most."
    }
  ];

  const LEADERSHIP_MEMBERS = [
    {
      name: "Dr. Olivia Bennett",
      role: "Dean of Student Scholarships",
      dept: "Division of Student Welfare, LPU",
      tag: "{ Faculty Dean }",
      image: "/images/mentor-1.jpg",
      quote: "Our mission is to ensure that no promising student at Lovely Professional University has to pause their academic journey because of financial roadblocks."
    },
    {
      name: "Prof. Daniel Carter",
      role: "University Academic Registrar",
      dept: "Office of Academic Records & Accreditations",
      tag: "{ Registrar }",
      image: "/images/mentor-2.jpg",
      quote: "CertiScholar automates the tedious verification burden so our academic teams can focus on what truly matters: supporting scholars and mentoring student success."
    },
    {
      name: "Ethan Brooks",
      role: "Financial Aid & EWS Coordinator",
      dept: "University Scholarship Oversight Cell",
      tag: "{ Financial Aid }",
      image: "/images/mentor-3.jpg",
      quote: "Transparency is our strongest asset. When students understand exactly how eligibility works, the entire scholarship process becomes empowering rather than stressful."
    },
    {
      name: "Dr. Sophia Mitchell",
      role: "Admissions & Quota Committee",
      dept: "University Intake & Equity Directorate",
      tag: "{ Admissions }",
      image: "/images/mentor-4.jpg",
      quote: "The multi-disciplinary quorum ensures a fair balance between automated speed and compassionate, human evaluation of each student's unique circumstances."
    }
  ];

  const ARCHITECTURE_STEPS = [
    {
      step: "01",
      title: "Intelligent Student Intake",
      desc: "Student drags & drops marksheet or caste certificate. Pre-flight checks validate image clarity and format instantly.",
      badge: "Intake (M1–M4)"
    },
    {
      step: "02",
      title: "Document Corroboration",
      desc: "Automated OCR extracts student credentials and corroborates data with official government boards and university records.",
      badge: "Corroboration (M5)"
    },
    {
      step: "03",
      title: "Deterministic Rule Scoring",
      desc: "The open rules engine evaluates marks, income cutoffs, and scheme quotas, generating an explainable recommendation.",
      badge: "Evaluation (M6–M8)"
    },
    {
      step: "04",
      title: "Quorum Review & Award",
      desc: "Institutional committee conducts final review. Approved fee waivers are credited directly to the university fee ledger.",
      badge: "Disbursement (M9–M11)"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Manrope'] antialiased selection:bg-slate-900 selection:text-white" style={rootScaleStyle}>
      
      {/* 01: Inverted Tabbed Global Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        fontScale={fontScale}
        onFontScaleChange={setFontScale}
        onLogin={onNavigateLogin}
        onRegister={onNavigateRegister}
      />

      <main className="space-y-16 sm:space-y-24">
        
        {/* ========================================================================= */}
        {/* 02: HERO NARRATIVE SECTION ("About CertiScholar: Digital Trust in Education") */}
        {/* ========================================================================= */}
        <section className="pt-3 px-3 sm:px-4 max-w-[1400px] mx-auto">
          <div 
            className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[640px] lg:min-h-[720px] flex flex-col justify-between pt-[105px] sm:pt-[125px] pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 shadow-2xl"
            style={{
              background: 'linear-gradient(110deg, rgb(20, 22, 28) 0%, rgb(36, 40, 52) 55%, rgb(28, 31, 40) 100%)'
            }}
          >
            {/* Background Subtle Geometric Grid & Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
              <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
                <defs>
                  <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#about-grid)" />
              </svg>
            </div>

            {/* Ambient Radial Gradient Spotlights */}
            <div 
              className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(255, 90, 43, 0.35) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 75%)'
              }}
            />
            <div 
              className="absolute -bottom-32 -left-32 w-[550px] h-[550px] rounded-full pointer-events-none opacity-30 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
              }}
            />

            {/* Top Eyebrow & Hero Narrative */}
            <div className="relative z-10 space-y-6 max-w-4xl">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-[12px] sm:text-[13px] font-semibold tracking-[0.08em] uppercase font-['Manrope']">
                <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-[#ff5a2b] animate-spark-spin overflow-visible">
                    <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z" />
                  </svg>
                </div>
                <span>About CertiScholar • Digital Trust in Education</span>
              </div>

              {/* Master Headline: Manrope (Sans) + Bodoni Moda (Italic Serif) */}
              <div className="space-y-1">
                <h1 className="font-['Manrope'] font-medium text-[46px] sm:text-[72px] lg:text-[96px] xl:text-[110px] leading-[0.94] tracking-[-0.055em] text-white">
                  Digital Trust.
                </h1>
                <h2 className="font-['Bodoni_Moda'] italic font-normal text-[48px] sm:text-[76px] lg:text-[100px] xl:text-[114px] leading-[0.94] tracking-[-0.035em] text-[#ff7a50]">
                  In Higher Education.
                </h2>
              </div>

              {/* Friendly, Clear Narrative Paragraph */}
              <p className="text-white/85 text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-relaxed max-w-3xl font-['Manrope']">
                CertiScholar is the official digital verification and scholarship ecosystem designed for Lovely Professional University. 
                We replace paperwork bottlenecks and confusing rules with automated intake, explainable governance, and human academic leadership—so deserving students receive their scholarships with speed and dignity.
              </p>

              {/* Navigation Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onNavigateRegister}
                  className="group relative bg-white hover:bg-[#ff5a2b] text-[#171717] hover:text-white px-7 py-3 rounded-full text-[14px] font-semibold tracking-tight transition-all duration-300 shadow-md cursor-pointer overflow-hidden font-['Manrope'] flex items-center gap-2"
                >
                  <span>Create Student Passport</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('pillars');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <span>Explore Platform Pillars</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </button>

                <button
                  onClick={onNavigateHome}
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/70 hover:text-white transition px-3 py-2 cursor-pointer"
                >
                  <span>&larr; Back to Home</span>
                </button>
              </div>

            </div>

            {/* Bottom Institutional Metrics Strip */}
            <div className="relative z-10 pt-10 sm:pt-14 border-t border-white/10 mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-white font-['Manrope']">
              <div>
                <span className="block text-[28px] sm:text-[36px] font-semibold tracking-tight text-white">
                  10,000+
                </span>
                <span className="text-[13px] text-white/60 font-medium">
                  Students Funded
                </span>
              </div>
              <div>
                <span className="block text-[28px] sm:text-[36px] font-semibold tracking-tight text-[#ff7a50]">
                  98%*
                </span>
                <span className="text-[13px] text-white/60 font-medium">
                  Verification Accuracy
                </span>
              </div>
              <div>
                <span className="block text-[28px] sm:text-[36px] font-semibold tracking-tight text-white">
                  4 Minutes
                </span>
                <span className="text-[13px] text-white/60 font-medium">
                  Average Intake Time
                </span>
              </div>
              <div>
                <span className="block text-[28px] sm:text-[36px] font-semibold tracking-tight text-emerald-400">
                  Zero
                </span>
                <span className="text-[13px] text-white/60 font-medium">
                  Physical Paperwork Required
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 03: MISSION & VISION STATEMENTS (Digital Equity & Transparency) */}
        {/* ========================================================================= */}
        <section id="mission-vision" className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <ScrollReveal yOffset={30}>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
              <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
                Institutional Purpose
              </span>
              <h2 className="font-['Manrope'] font-medium text-[34px] sm:text-[46px] leading-tight text-[#171717] tracking-[-0.04em]">
                Driven by Equity. <span className="font-['Bodoni_Moda'] italic font-normal text-slate-600">Anchored in Trust.</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal">
                Higher education changes families and communities for generations. Here is our solemn commitment to every student who steps onto our campus.
              </p>
            </div>
          </ScrollReveal>

          {/* Dual Mission & Vision Bento Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Mission Card */}
            <ScrollReveal yOffset={40} className="h-full">
              <div className="h-full bg-[#f8f9fa] rounded-[28px] border border-black/8 p-8 sm:p-12 space-y-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff5a2b]/10 text-[#ff5a2b] flex items-center justify-center">
                    <HeartHandshake className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff5a2b]">
                      Our Mission
                    </span>
                    <h3 className="font-['Manrope'] font-semibold text-[26px] sm:text-[30px] tracking-[-0.03em] text-[#171717] mt-1">
                      Digital Equity in Every Classroom
                    </h3>
                  </div>
                  <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
                    To democratize access to university education by ensuring every deserving student at Lovely Professional University receives legitimate financial aid without administrative roadblocks, hidden criteria, or bureaucratic delays.
                  </p>
                  
                  {/* Key Principles Checklist */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <p className="text-[14px] text-slate-700 font-medium">
                        Equal access for first-generation learners and rural applicants
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <p className="text-[14px] text-slate-700 font-medium">
                        Mobile-first design ensuring zero barrier on any smartphone
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <p className="text-[14px] text-slate-700 font-medium">
                        Multilingual accessibility supporting English, Hindi, and Punjabi
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>LOVELY PROFESSIONAL UNIVERSITY</span>
                  <span className="text-[#ff5a2b]">STUDENT WELFARE WING</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Vision Card */}
            <ScrollReveal yOffset={50} className="h-full">
              <div className="h-full bg-[#f8f9fa] rounded-[28px] border border-black/8 p-8 sm:p-12 space-y-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Scale className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                      Our Vision
                    </span>
                    <h3 className="font-['Manrope'] font-semibold text-[26px] sm:text-[30px] tracking-[-0.03em] text-[#171717] mt-1">
                      The Gold Standard of Institutional Trust
                    </h3>
                  </div>
                  <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
                    To establish a national benchmark where student scholarships are disbursed with 100% explainability, instant transparency, and complete respect for student dignity—setting the precedent for digital governance across India.
                  </p>
                  
                  {/* Key Principles Checklist */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <p className="text-[14px] text-slate-700 font-medium">
                        Zero black-box algorithmic rejection: every decision is explained
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <p className="text-[14px] text-slate-700 font-medium">
                        Student right to correction and rapid human appeal
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <p className="text-[14px] text-slate-700 font-medium">
                        Cryptographically corroborated records that follow the student for life
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>EXPLAINABLE GOVERNANCE</span>
                  <span className="text-indigo-600">DPDP ACT 2023 COMPLIANT</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 04: ACADEMIC FOUNDATION & ORIGIN STORY */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="bg-[#171717] text-white rounded-[28px] sm:rounded-[32px] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-xl">
            
            {/* Background Decorative Element */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-10 hidden lg:block">
              <svg viewBox="0 0 400 400" className="w-full h-full stroke-white fill-none" strokeWidth="1">
                <circle cx="200" cy="200" r="80" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="140" />
                <circle cx="200" cy="200" r="190" strokeDasharray="2 6" />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Origin Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ff7a50] text-[12px] font-semibold tracking-wider uppercase font-['Manrope']">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Academic Foundation • LPU Capstone P12</span>
                </div>

                <h2 className="font-['Manrope'] font-medium text-[32px] sm:text-[44px] leading-tight text-white tracking-[-0.04em]">
                  Born from real student challenges, <span className="font-['Bodoni_Moda'] italic font-normal text-slate-300">engineered into university policy.</span>
                </h2>

                <div className="space-y-4 text-white/80 text-[15px] sm:text-[16px] leading-relaxed font-['Manrope']">
                  <p>
                    Every intake cycle, thousands of deserving applicants arrive at Lovely Professional University from diverse school boards across India. In the past, evaluating scholarship eligibility required physical queueing, multiple notary affidavits, and weeks of manual grade recomputation by overburdened staff.
                  </p>
                  <p>
                    A single blurry photocopy or a mismatched board grading scale (like CBSE CGPA vs state percentage matrices) could delay a student's fee waiver for months, causing unnecessary anxiety.
                  </p>
                  <p>
                    Originating as an institutional research initiative led by student proponents and academic advisors, CertiScholar was built to solve this exact bottleneck. By pairing state-of-the-art document intelligence with human committee review, we created an ecosystem where verified academic merit is celebrated in minutes rather than months.
                  </p>
                </div>

                {/* Academic Citation Strip */}
                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-white/60 border-t border-white/10">
                  <div>
                    <span className="block text-white font-semibold">Originator & Proponent</span>
                    <span>Sekh Sujon Haque (LPU)</span>
                  </div>
                  <div>
                    <span className="block text-white font-semibold">Institutional Governance</span>
                    <span>CS-SRS-002 v3.2 (M0–M20)</span>
                  </div>
                  <div>
                    <span className="block text-white font-semibold">Campus Deployment</span>
                    <span>Jalandhar-Delhi G.T. Road, Punjab</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Milestone Badges */}
              <div className="lg:col-span-5 space-y-4">
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff5a2b]/20 text-[#ff7a50] flex items-center justify-center font-bold text-sm">
                      M1–M4
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-[15px]">Automated Document Intake</h4>
                      <p className="text-white/60 text-xs">High-accuracy OCR for state & central boards</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Processes marksheets, domicile certificates, and family income statements with real-time field boundary checks.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                      M6–M8
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-[15px]">Deterministic Rule Engine</h4>
                      <p className="text-white/60 text-xs">Zero black-box logic, full explainability</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Evaluates criteria against published university circulars and ensures transparent mathematical score allocation.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                      M9–M11
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-[15px]">Institutional Quorum</h4>
                      <p className="text-white/60 text-xs">Human authority, automated speed</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Deans and registrars review candidate packs and execute fee waiver disbursements directly into student accounts.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 05: PLATFORM PILLARS (Interactive / Structured Feature Grid) */}
        {/* ========================================================================= */}
        <section id="pillars" className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <ScrollReveal yOffset={30}>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
              <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
                Core Architecture
              </span>
              <h2 className="font-['Manrope'] font-medium text-[34px] sm:text-[46px] leading-tight text-[#171717] tracking-[-0.04em]">
                Three Pillars of <span className="font-['Bodoni_Moda'] italic font-normal text-slate-600">Platform Excellence</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal">
                How CertiScholar pairs high-speed document processing with rigorous academic governance.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Pillar Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {PILLARS_DATA.map((p, idx) => {
              const IconComp = p.icon;
              const isSelected = activePillar === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(idx)}
                  className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[13.5px] font-semibold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#171717] text-white shadow-md'
                      : 'bg-[#f4f4f5] text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#ff7a50]' : 'text-slate-400'}`} />
                  <span>{p.title.split('&')[0]}</span>
                  <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-300 text-slate-700'}`}>
                    {p.badgeNumber}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Showcase Stage */}
          {PILLARS_DATA.map((pillar, idx) => {
            if (activePillar !== idx) return null;
            const IconComp = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="bg-[#fcfcfd] rounded-[32px] border border-black/8 p-8 sm:p-12 lg:p-16 shadow-xs animate-framer-appear"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  
                  {/* Left: Detail narrative & bullets */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                        style={{ backgroundColor: pillar.color }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[12px] font-bold uppercase tracking-wider text-slate-400">
                          Pillar {pillar.badgeNumber}
                        </span>
                        <h3 className="font-['Manrope'] font-bold text-[24px] sm:text-[32px] text-[#171717] tracking-tight leading-tight">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[16px] sm:text-[17px] font-medium text-slate-800 leading-snug">
                      {pillar.tagline}
                    </p>

                    <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-3 pt-2">
                      {pillar.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="text-[14px] text-slate-700 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <button
                        onClick={onNavigateStudentWorkspace}
                        className="inline-flex items-center gap-2 bg-[#171717] hover:bg-black text-white px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight transition cursor-pointer"
                      >
                        <span>See this in action</span>
                        <ArrowUpRightIcon />
                      </button>
                    </div>
                  </div>

                  {/* Right: Technical Card Callout & Metric */}
                  <div className="lg:col-span-5">
                    <div className="bg-white rounded-3xl border border-black/8 p-8 shadow-sm space-y-6 relative overflow-hidden">
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Key Performance Metric
                        </span>
                        <div 
                          className="text-[36px] sm:text-[44px] font-bold tracking-tight"
                          style={{ color: pillar.color }}
                        >
                          {pillar.metric}
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          {pillar.metricLabel}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Institutional Verification Guarantee</span>
                        </span>
                        <p className="text-[12px] text-slate-600 leading-relaxed">
                          All computations and document extractions comply with the Lovely Professional University Master Academic Framework (DOC-001) and DPDP Act 2023 regulations.
                        </p>
                      </div>

                      <div className="space-y-3 pt-2 border-t border-slate-100 text-xs text-slate-500">
                        <div className="flex items-center justify-between">
                          <span>Data Retention:</span>
                          <span className="font-semibold text-slate-800">Encrypted Student Vault</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Audit Trail:</span>
                          <span className="font-semibold text-slate-800">Cryptographically Signed</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Human Concurrence:</span>
                          <span className="font-semibold text-slate-800">Mandatory for all decisions</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </section>

        {/* ========================================================================= */}
        {/* 06: HOW DIGITAL TRUST IS BUILT (4-Stage Architecture Flow) */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="bg-[#f4f4f5] rounded-[32px] p-8 sm:p-14 lg:p-16 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
                System Workflow
              </span>
              <h2 className="font-['Manrope'] font-medium text-[32px] sm:text-[44px] leading-tight text-[#171717] tracking-[-0.04em]">
                How Digital Trust Is Built, <span className="font-['Bodoni_Moda'] italic font-normal text-slate-600">step by step.</span>
              </h2>
              <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
                From student intake to fee waiver credit, every stage is designed for speed, clarity, and accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ARCHITECTURE_STEPS.map((s, idx) => (
                <div 
                  key={s.step}
                  className="bg-white rounded-[24px] p-7 border border-black/6 shadow-xs flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-['Bodoni_Moda'] italic text-2xl font-semibold text-[#ff5a2b]">
                        {s.step}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {s.badge}
                      </span>
                    </div>
                    <h3 className="font-['Manrope'] font-bold text-[18px] text-[#171717] tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>Stage {idx + 1} of 4</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 07: MULTI-DISCIPLINARY REVIEW BOARD (Portraits & Leadership) */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <ScrollReveal yOffset={30}>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
              <span className="text-[12px] font-semibold tracking-wider text-slate-400 uppercase font-['Manrope']">
                Institutional Leadership
              </span>
              <h2 className="font-['Manrope'] font-medium text-[34px] sm:text-[46px] leading-tight text-[#171717] tracking-[-0.04em]">
                Meet the <span className="font-['Bodoni_Moda'] italic font-normal text-slate-600">Review Quorum</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal">
                Senior academic leaders and welfare officers overseeing scholarship allocation and candidate grievance resolution.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_MEMBERS.map((member) => (
              <div 
                key={member.name}
                className="bg-white rounded-[24px] border border-black/8 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Framer styling */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-full">
                    {member.tag}
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-['Manrope'] font-bold text-[18px] text-[#171717] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#ff5a2b]">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {member.dept}
                    </p>
                  </div>

                  <p className="text-[12.5px] text-slate-600 italic leading-relaxed pt-2 border-t border-slate-100">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 08: CORE VALUES GRID (Digital Equity, Transparency, Dignity, Integrity) */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="border-t border-slate-200 pt-16 sm:pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CORE_VALUES.map((val) => {
                const IconComp = val.icon;
                return (
                  <div key={val.title} className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-slate-800" />
                    </div>
                    <h3 className="font-['Manrope'] font-bold text-[18px] text-[#171717] tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#ff5a2b]">
                      {val.subtitle}
                    </p>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 09: DPDP ACT 2023 & STUDENT DATA RIGHTS COMMITMENT */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="bg-[#f8f9fa] rounded-[28px] border border-black/8 p-8 sm:p-12 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/5 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  Statutory Privacy & Protection
                </span>
                <h3 className="font-['Manrope'] font-bold text-[22px] sm:text-[26px] text-[#171717]">
                  Committed to Digital Personal Data Protection (DPDP Act 2023)
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-black/10 text-xs font-semibold text-slate-700 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Institutional Trust Certified</span>
              </div>
            </div>

            <p className="text-[14.5px] text-slate-600 leading-relaxed">
              We treat student data with the utmost confidentiality. Under our institutional charter, marks, domicile records, and family income certificates are gathered exclusively for scholarship eligibility adjudication. We do not sell data, profile students for third-party commercial targeting, or retain documents past the statutory audit retention window.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>AES-256 Document Vault Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Third-Party Commercial Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full Right to File Deletion & Export</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10: CLOSING CALL TO ACTION (Framer Orbital Concentric Rings Style) */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-3 sm:px-4 pb-4">
          <ScrollReveal yOffset={40} scale={0.96}>
            <div 
              className="w-full rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[520px] p-8 sm:p-14 relative flex items-center justify-center shadow-lg text-center"
              style={{
                background: 'linear-gradient(180deg, rgb(245, 246, 249) 0%, rgb(211, 214, 224) 42%, rgb(138, 144, 165) 100%)'
              }}
            >
              {/* Concentric Rotating Orbit Rings */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90">
                <svg viewBox="-700 -700 1400 1400" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
                  <circle r="190" fill="none" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
                  <circle
                    r="340"
                    fill="none"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="0.1 26"
                    vectorEffect="non-scaling-stroke"
                    className="animate-spin-slow"
                  />
                  <circle r="490" fill="none" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
                  <circle
                    r="640"
                    fill="none"
                    stroke="rgb(255, 255, 255)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="0.1 26"
                    vectorEffect="non-scaling-stroke"
                    className="animate-spin-reverse"
                  />
                </svg>
              </div>

              {/* Center Stage Floating Card */}
              <div className="bg-white rounded-[24px] p-8 sm:p-12 shadow-[0_30px_70px_-24px_rgba(22,23,27,0.45)] max-w-lg mx-auto space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 justify-center">
                  <div className="w-4 h-4 animate-spark">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-[#ff5a2b]">
                      <path d="M50 4C53 34 66 47 96 50C66 53 53 66 50 96C47 66 34 53 4 50C34 47 47 34 50 4Z" />
                    </svg>
                  </div>
                  <span className="text-[12px] font-semibold text-slate-500 font-['Manrope'] uppercase tracking-wider">
                    Experience Digital Trust
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="font-['Manrope'] font-medium text-[30px] sm:text-[36px] leading-[1.12] tracking-[-0.04em] text-[#171717]">
                    Ready to claim your scholarship?
                  </h2>
                  <p className="text-[14px] text-slate-600 leading-relaxed font-normal">
                    Create your student passport in minutes. Upload your marksheet once and unlock verified access to Lovely Professional University scholarships.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={onNavigateRegister}
                    className="w-full sm:w-auto bg-[#171717] hover:bg-black text-white px-7 py-3 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight transition duration-300 shadow-md cursor-pointer font-['Manrope']"
                  >
                    <span className="btn-roll">
                      <span className="btn-roll-inner">
                        <span>Get Started Now</span>
                        <span>Get Started Now</span>
                      </span>
                    </span>
                  </button>

                  <button
                    onClick={onNavigateScholarships}
                    className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-[#171717] px-6 py-3 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight transition cursor-pointer font-['Manrope']"
                  >
                    Explore Open Schemes
                  </button>

                  <button
                    onClick={onNavigateHome}
                    className="w-full sm:w-auto bg-transparent hover:bg-slate-100 text-slate-600 px-5 py-3 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight transition cursor-pointer font-['Manrope']"
                  >
                    Back to Home
                  </button>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

      </main>

      {/* 11: Authentic Framer LEROVA Rounded Card Footer */}
      <Footer
        onNavigateHome={onNavigateHome}
        onNavigateLogin={onNavigateLogin}
        onNavigateRegister={onNavigateRegister}
        onOpenPrivacy={() => alert('PUB-012: Privacy Policy & DPDP Act 2023 Compliance Document')}
        onOpenTerms={() => alert('PUB-013: Terms of Use & Anti-Fraud Submission Policy')}
        onOpenAccessibility={() => alert('PUB-014: WCAG 2.2 Level AA Accessibility Statement')}
      />

    </div>
  );
}
