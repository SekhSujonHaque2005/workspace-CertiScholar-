import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  Minus, 
  HelpCircle, 
  FileCheck, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ThumbsUp, 
  ThumbsDown, 
  Sparkles, 
  Download, 
  X,
  MessageSquareCheck,
  Send,
  GraduationCap
} from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { ScrollReveal } from '../../hooks/useScrollReveal';

// CATEGORY DEFINITIONS matching Design Spec & brief
const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'eligibility', label: 'Eligibility & Criteria' },
  { id: 'verification', label: 'Document Verification & Marksheets' },
  { id: 'disbursement', label: 'Disbursement & Tuition Transfer' },
  { id: 'quorum', label: 'Reviewer & Quorum' },
];

// FAQS DATASET
const FAQS = [
  // --- Category: Eligibility & Criteria ---
  {
    id: 'faq-1',
    category: 'eligibility',
    categoryLabel: 'Eligibility & Criteria',
    q: 'Who is eligible to apply for institutional scholarships through CertiScholar?',
    a: 'All undergraduate, postgraduate, and diploma students enrolled or holding provisional admission at Lovely Professional University are eligible to apply. Schemes cover high test scores (LPUNEST / JEE Main / CUET / 12th Board marks), need-based family income support (EWS), state and national sports achievements, wards of serving or retired defense personnel, and special scholarship initiatives for single girl children.',
    takeaway: 'Both fresh admissions and currently enrolled university students can apply during any open scholarship window.',
    tags: ['eligibility', 'lpunest', 'merit', 'sports', 'defense', 'ews', 'criteria']
  },
  {
    id: 'faq-2',
    category: 'eligibility',
    categoryLabel: 'Eligibility & Criteria',
    q: 'Can I combine or receive more than one scholarship at the same time?',
    a: 'University regulations stipulate that a student may only benefit from the single highest scholarship scheme for which they qualify. CertiScholar automatically evaluates every scholarship criteria against your verified marks and sanctions the scheme providing the highest tuition fee concession, ensuring you always receive the maximum financial benefit.',
    takeaway: 'Automatic highest-benefit optimization guarantees maximum tuition relief without duplicate applications.',
    tags: ['multiple', 'combine', 'highest', 'benefit', 'waiver', 'rules']
  },
  {
    id: 'faq-3',
    category: 'eligibility',
    categoryLabel: 'Eligibility & Criteria',
    q: 'What minimum academic performance (CGPA) is required to maintain my scholarship in upcoming years?',
    a: 'To renew your scholarship in subsequent academic years, you must maintain a minimum cumulative grade point average (CGPA) of 7.50, register for the full prescribed semester credit load, maintain at least 75% class attendance in all registered courses, and have no active academic backlogs (re-appears) or disciplinary penalties on record.',
    takeaway: 'Reviewed at the end of each academic year. A one-semester grace period applies for borderline cases (7.00 - 7.49 CGPA).',
    tags: ['cgpa', 'renewal', 'maintenance', 'criteria', 'attendance', 'backlog']
  },
  {
    id: 'faq-4',
    category: 'eligibility',
    categoryLabel: 'Eligibility & Criteria',
    q: 'Are international students or NRI candidates eligible for tuition fee aid?',
    a: 'International and NRI students are eligible for dedicated International Student Scholarships administered through the LPU Division of International Affairs. Eligibility is calculated based on standardized high-school equivalence certificates (A-Levels, IB Diploma, WAEC, or national high school exit exams) converted to Indian percentage scales.',
    takeaway: 'Equivalence certification from the Association of Indian Universities (AIU) is required during intake.',
    tags: ['international', 'nri', 'foreign', 'aiu', 'equivalence', 'curriculum']
  },
  {
    id: 'faq-5',
    category: 'eligibility',
    categoryLabel: 'Eligibility & Criteria',
    q: 'Does taking an educational bank loan or state welfare grant affect my university scholarship?',
    a: 'No. You may avail of institutional bank education loans or state government post-matric welfare schemes (such as the National Scholarship Portal NSP or state SC/ST fee reimbursements). Your CertiScholar fee concession is adjusted directly against your net university tuition invoice, and the remaining fee balance can be paid via your student bank loan or government grant.',
    takeaway: 'You can safely combine bank education loans and government social welfare with CertiScholar institutional merit aid.',
    tags: ['bank loan', 'nsp', 'government', 'sc st', 'education loan', 'concession']
  },

  // --- Category: Document Verification & Marksheets ---
  {
    id: 'faq-6',
    category: 'verification',
    categoryLabel: 'Document Verification & Marksheets',
    q: 'Which specific documents are required for automated marksheet verification?',
    a: 'You need your official Class 10th and 12th marksheets (or semester-wise consolidated transcripts for Master’s applications). For need-based EWS aid, an income certificate issued by a Sub-Divisional Magistrate (SDM), Tehsildar, or Revenue Officer dated within the current financial year is mandatory. Salary slips or Form 16 alone are not accepted for EWS aid under university guidelines.',
    takeaway: 'Must be issued by recognized central/state education boards (CBSE, ICSE, NIOS, or State Boards).',
    tags: ['documents', 'marksheets', '10th', '12th', 'tehsildar', 'income certificate', 'ews']
  },
  {
    id: 'faq-7',
    category: 'verification',
    categoryLabel: 'Document Verification & Marksheets',
    q: 'How does automated OCR mark extraction work, and is my data safe?',
    a: 'When you upload a marksheet, CertiScholar uses privacy-preserving computer vision to detect document boundaries, locate subject mark tables, and extract scores. Documents are encrypted using AES-256 at rest, personally identifiable information is masked per the Digital Personal Data Protection (DPDP) Act 2023, and raw records are never shared with external advertisers.',
    takeaway: 'Full DPDP Act 2023 compliance with automated privacy masking of non-essential personal identifiers.',
    tags: ['ocr', 'extraction', 'privacy', 'dpdp', 'encryption', 'security', 'safety']
  },
  {
    id: 'faq-8',
    category: 'verification',
    categoryLabel: 'Document Verification & Marksheets',
    q: 'Can I link my DigiLocker account instead of uploading manual image scans?',
    a: 'Yes, linking DigiLocker is the recommended and fastest method! By authorizing DigiLocker through our authenticated gateway, CertiScholar retrieves cryptographically signed digital marksheets directly from national issuers (CBSE, CISCE, and state boards). DigiLocker-linked documents achieve instant 100% confidence scores and bypass manual queues.',
    takeaway: 'DigiLocker-verified submissions are processed within 24 hours with zero manual correction delays.',
    tags: ['digilocker', 'cbse', 'fast', 'instant', 'tamper-proof', 'digital credentials']
  },
  {
    id: 'faq-9',
    category: 'verification',
    categoryLabel: 'Document Verification & Marksheets',
    q: 'What happens if the automated system misreads my marks or gives a low confidence score?',
    a: 'Automated scans are never final if there is any ambiguity. If a marksheet is folded, low resolution, or has a complex grading key, CertiScholar flags it with a low confidence score and automatically routes it to our human Document Reviewer Workspace (M5 queue). A university verification officer compares the scan side-by-side with official board records and manually corrects any discrepancies.',
    takeaway: 'No student application is ever rejected based solely on automated computer vision extraction.',
    tags: ['misread', 'low confidence', 'm5 queue', 'reviewer', 'human review', 'bounding box']
  },

  // --- Category: Disbursement & Tuition Transfer ---
  {
    id: 'faq-10',
    category: 'disbursement',
    categoryLabel: 'Disbursement & Tuition Transfer',
    q: 'How is the scholarship amount paid or credited to the student?',
    a: 'CertiScholar does not disburse cash or bank transfers directly to students. Instead, the approved scholarship grant is credited directly to your student institutional ledger within the University Management System (UMS). The sanctioned percentage or fixed sum is deducted from your upcoming semester tuition fee invoice, lowering your net out-of-pocket payment immediately.',
    takeaway: 'Direct tuition ledger credit eliminates disbursement delays, banking fees, and fund misdirection.',
    tags: ['disbursement', 'tuition', 'fee credit', 'ums', 'ledger', 'invoice', 'payment']
  },
  {
    id: 'faq-11',
    category: 'disbursement',
    categoryLabel: 'Disbursement & Tuition Transfer',
    q: 'What happens if I already paid my full semester tuition fee prior to scholarship approval?',
    a: 'If you have already remitted your full semester tuition fee, any newly approved scholarship amount is automatically held as an advance credit on your student account and will offset the subsequent semester’s tuition fees. Graduating students in their final term can submit a standard Fee Adjustment Refund Request via UMS to receive the credit back into their registered bank account.',
    takeaway: 'Overpayments roll over automatically to your next term or can be refunded for graduating seniors.',
    tags: ['paid full', 'refund', 'rollover', 'advance credit', 'fee adjustment']
  },
  {
    id: 'faq-12',
    category: 'disbursement',
    categoryLabel: 'Disbursement & Tuition Transfer',
    q: 'Where can I download my official scholarship award letter and fee adjustment voucher?',
    a: 'Once the verification quorum approves your scholarship, log in to your CertiScholar Student Portal or LPU Touch app. Under "My Applications & Awards", click "Download Award Certificate" to generate an official PDF complete with an institutional seal, detailed eligibility scoring breakdown, and a verifiable cryptographic QR code.',
    takeaway: 'Accepted by bank loan officers, visa authorities, and campus finance departments as official proof of grant.',
    tags: ['award letter', 'certificate', 'pdf', 'voucher', 'qr code', 'proof']
  },
  {
    id: 'faq-13',
    category: 'disbursement',
    categoryLabel: 'Disbursement & Tuition Transfer',
    q: 'Do I need to submit an invoice or receipt to the campus accounts department manually?',
    a: 'No. CertiScholar is deeply integrated with the university ERP and billing systems. As soon as your application is signed off by the quorum, the tuition discount is synchronized automatically with the finance database. You can view the updated invoice directly in your UMS fee portal within 2 hours.',
    takeaway: '100% paperless sync with University Accounts & Finance without standing in campus billing queues.',
    tags: ['accounts', 'paperless', 'erp', 'billing', 'finance', 'ums sync']
  },

  // --- Category: Reviewer & Quorum ---
  {
    id: 'faq-14',
    category: 'quorum',
    categoryLabel: 'Reviewer & Quorum',
    q: 'What is the Verification Quorum and who makes the final scholarship decision?',
    a: 'The Verification Quorum is an institutional governance committee established to guarantee total fairness and transparency. It consists of four independent university officials: an Academic Dean, the Director of Student Welfare, a Registrar representative, and an independent Faculty Ombudsman.',
    takeaway: 'Multi-stakeholder oversight prevents unilateral decisions or personal favoritism in awarding aid.',
    tags: ['quorum', 'committee', 'deans', 'welfare', 'ombudsman', 'governance']
  },
  {
    id: 'faq-15',
    category: 'quorum',
    categoryLabel: 'Reviewer & Quorum',
    q: 'How does quorum consensus voting work on CertiScholar?',
    a: 'Every application that passes document verification is presented in the Committee Console (M9/M10) with an explainable eligibility score. To ensure robustness, a formal scholarship sanction requires a super-majority quorum of at least 3 out of 4 concurring votes. Every vote, rationale, and timestamp is permanently recorded on an immutable tamper-evident audit ledger.',
    takeaway: 'Requires 3-of-4 quorum consensus; all votes and remarks are permanently auditable.',
    tags: ['voting', 'consensus', '3-of-4', 'audit ledger', 'committee console']
  },
  {
    id: 'faq-16',
    category: 'quorum',
    categoryLabel: 'Reviewer & Quorum',
    q: 'What is an "Explainable Eligibility Score" and how is it calculated?',
    a: 'Unlike black-box scoring systems, CertiScholar provides transparent, itemized calculations. The score combines normalized academic test percentiles (60%), economic background tier (25%), and affirmative criteria (15%, such as rural domicile, sports, or single girl child). You can view the exact mathematical formula and weightings applied to your application in your student dashboard.',
    takeaway: 'Full algorithmic transparency; every mark, weight, and criteria is clearly visible to the applicant.',
    tags: ['explainable', 'score', 'algorithm', 'formula', 'weights', 'transparency']
  },
  {
    id: 'faq-17',
    category: 'quorum',
    categoryLabel: 'Reviewer & Quorum',
    q: 'Can I submit an appeal if my scholarship application is rejected or misclassified?',
    a: 'Yes. If your application is denied or you believe an incorrect document was evaluated, you have 14 calendar days from the date of decision to submit a formal Appeal Request through your portal. You can upload supplementary proof, request re-calculation of grade conversions, and have your case re-reviewed by the Faculty Ombudsman.',
    takeaway: 'Formal 14-day appeal window with independent Ombudsman arbitration guaranteed.',
    tags: ['appeal', 'rejected', 're-review', 'ombudsman', '14 days', 'dispute']
  },
  {
    id: 'faq-18',
    category: 'quorum',
    categoryLabel: 'Reviewer & Quorum',
    q: 'How long does the complete application, verification, and approval process take?',
    a: 'Standard processing turnaround is between 3 to 5 working days from submission. Applications submitted via DigiLocker with high-confidence automated matches are frequently approved within 24 to 48 hours. During peak admission cycles (July - August), committee quorum sessions convene daily to prevent student fee registration delays.',
    takeaway: '3 to 5 business days standard; express 24-48 hours for DigiLocker authenticated applications.',
    tags: ['turnaround', 'time', 'how long', 'processing', 'speed', 'approval']
  }
];

// DOWNLOADABLE STUDENT GUIDES
const DOWNLOADABLE_GUIDES = [
  {
    title: 'Student Scholarship Handbook 2026-27',
    desc: 'Complete institutional guidelines, scheme matrices, and renewal norms.',
    size: '1.8 MB PDF',
    type: 'Handbook'
  },
  {
    title: 'DigiLocker Marksheet Fetching Guide',
    desc: 'Step-by-step visual tutorial for connecting DigiLocker with instant verification.',
    size: '840 KB PDF',
    type: 'Quick Guide'
  },
  {
    title: 'Tehsildar Income Certificate Checklist',
    desc: 'Authorized issuing authorities, stamp requirements, and validity dates for EWS aid.',
    size: '620 KB PDF',
    type: 'Checklist'
  },
  {
    title: 'Verification Quorum Governance Policy',
    desc: 'DPDP Act 2023 compliance, audit trail standards, and ombudsman appeal rules.',
    size: '1.2 MB PDF',
    type: 'Policy'
  }
];

export default function FaqPage({
  onNavigateHome = () => { window.location.hash = ''; },
  onNavigateLogin = () => {},
  onNavigateRegister = () => {},
  onNavigateStudentWorkspace = () => {},
}) {
  // Localization & Font Scale (compatible with Header)
  const [language, setLanguage] = useState('EN');
  const [fontScale, setFontScale] = useState(100);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Accordion Open State: store open FAQ IDs (supports individual toggle or expand all)
  const [openIds, setOpenIds] = useState(['faq-1']);
  
  // User Feedback state: { [faqId]: 'yes' | 'no' }
  const [feedback, setFeedback] = useState({});

  // Support Form Modal State
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [supportFormSubmitted, setSupportFormSubmitted] = useState(false);
  const [generatedTicketId, setGeneratedTicketId] = useState('');
  const [supportFormData, setSupportFormData] = useState({
    name: '',
    regNumber: '',
    email: '',
    topic: 'Eligibility & Criteria',
    message: ''
  });

  // Filtered FAQs Calculation
  const filteredFaqs = useMemo(() => {
    return FAQS.filter(faq => {
      // Category match
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      if (!matchesCategory) return false;

      // Search match
      if (!searchQuery.trim()) return true;
      const qLower = searchQuery.toLowerCase();
      const inQ = faq.q.toLowerCase().includes(qLower);
      const inA = faq.a.toLowerCase().includes(qLower);
      const inTakeaway = faq.takeaway.toLowerCase().includes(qLower);
      const inTags = faq.tags.some(tag => tag.toLowerCase().includes(qLower));
      return inQ || inA || inTakeaway || inTags;
    });
  }, [activeCategory, searchQuery]);

  // Toggle single FAQ accordion
  const toggleFaq = (id) => {
    setOpenIds(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  // Expand all / Collapse all toggle
  const areAllExpanded = filteredFaqs.length > 0 && filteredFaqs.every(f => openIds.includes(f.id));
  const toggleAll = () => {
    if (areAllExpanded) {
      setOpenIds([]);
    } else {
      setOpenIds(filteredFaqs.map(f => f.id));
    }
  };

  // Provide helpful feedback
  const handleFeedback = (faqId, value) => {
    setFeedback(prev => ({ ...prev, [faqId]: value }));
  };

  // Handle Support Form Submission
  const handleSupportSubmit = (e) => {
    e.preventDefault();
    setGeneratedTicketId(`TKT-${Math.floor(100000 + Math.random() * 900000)}`);
    setSupportFormSubmitted(true);
    setTimeout(() => {
      setIsSupportModalOpen(false);
      setSupportFormSubmitted(false);
      setSupportFormData({
        name: '',
        regNumber: '',
        email: '',
        topic: 'Eligibility & Criteria',
        message: ''
      });
    }, 2200);
  };

  const rootScaleStyle = {
    fontSize: fontScale === 90 ? '90%' : fontScale === 110 ? '110%' : '100%',
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Manrope'] antialiased selection:bg-slate-900 selection:text-white" style={rootScaleStyle}>
      
      {/* 01: Inverted Tabbed Header hanging from top */}
      <Header
        brandName="CertiScholar"
        language={language}
        onLanguageChange={setLanguage}
        fontScale={fontScale}
        onFontScaleChange={setFontScale}
        onLogin={onNavigateLogin}
        onRegister={onNavigateRegister}
      />

      <main className="pt-24 sm:pt-28 pb-16 sm:pb-24">
        
        {/* HERO SECTION */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-4 pb-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-medium text-[#9a9aa1] mb-6">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#171717] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#171717]">Student Help Center & FAQs</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 space-y-4">
              <ScrollReveal yOffset={20}>
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4f4f5] border border-black/5 text-[#171717] text-xs font-semibold tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#ff5a2b] animate-pulse"></span>
                  <span>Student Help Center • PUB-009</span>
                </div>
              </ScrollReveal>

              <ScrollReveal yOffset={30} delay={100}>
                <h1 className="font-['Manrope'] font-medium text-[38px] sm:text-[54px] lg:text-[62px] leading-[1.08] text-[#171717] tracking-[-0.04em]">
                  Frequently Asked <span className="font-serif italic font-normal text-slate-800">Questions.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal yOffset={30} delay={200}>
                <p className="text-[16px] sm:text-[18px] text-[#6b6b75] leading-relaxed font-normal max-w-2xl">
                  Quick, plain-English answers to questions regarding scholarship eligibility, automated marksheet reading, DigiLocker verification, quorum governance, and direct fee disbursement at Lovely Professional University.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Quick Action Card */}
            <div className="lg:col-span-4">
              <ScrollReveal yOffset={30} delay={250}>
                <div className="bg-[#f4f4f5] rounded-[24px] p-6 border border-black/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#9a9aa1] uppercase tracking-wider">
                      Turnaround Guarantee
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5" /> 3-5 Business Days
                    </span>
                  </div>
                  <p className="text-[14px] text-[#171717] font-medium leading-snug">
                    Need urgent assistance with your active application? Our campus Student Welfare helpdesk is ready.
                  </p>
                  <button
                    onClick={() => setIsSupportModalOpen(true)}
                    className="w-full bg-[#171717] hover:bg-black text-white text-xs font-semibold py-3 px-4 rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Contact Student Support</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* QUICK TOPIC SHORTCUT CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10">
            {[
              { id: 'eligibility', icon: Award, label: 'Eligibility & Rules', count: '5 FAQs' },
              { id: 'verification', icon: FileCheck, label: 'Marksheet & DigiLocker', count: '4 FAQs' },
              { id: 'disbursement', icon: GraduationCap, label: 'Tuition Fee Credit', count: '4 FAQs' },
              { id: 'quorum', icon: ShieldCheck, label: 'Reviewer Quorum', count: '5 FAQs' },
            ].map((topic) => {
              const Icon = topic.icon;
              const isActive = activeCategory === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    setActiveCategory(topic.id);
                    setSearchQuery('');
                  }}
                  className={`p-4 rounded-[18px] text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between gap-3 ${
                    isActive 
                      ? 'bg-[#171717] text-white border-[#171717] shadow-sm' 
                      : 'bg-[#f4f4f5] hover:bg-[#ececee] text-[#171717] border-black/5'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-white/10 text-white' : 'bg-white text-[#171717] shadow-xs'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[#6b6b75]'}`}>
                      {topic.count}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold tracking-tight">{topic.label}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* SEARCH & FILTER CONTROLS BAR */}
          <div className="mt-10 pt-8 border-t border-black/5 space-y-6">
            
            {/* Search Input Box */}
            <div className="relative max-w-3xl">
              <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-[#9a9aa1]" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions or keywords (e.g., DigiLocker, CGPA, refund, income certificate, quorum)..."
                className="w-full pl-12 sm:pl-13 pr-10 py-4 bg-[#f4f4f5] hover:bg-[#ececee]/80 focus:bg-white text-[15px] sm:text-[16px] text-[#171717] placeholder-[#9a9aa1] rounded-[20px] border border-black/5 focus:border-[#171717] focus:outline-none transition-all duration-200 shadow-inner-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#9a9aa1] hover:text-[#171717] cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Keyword Suggestion Chips */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[#9a9aa1] font-medium mr-1">Popular searches:</span>
              {['DigiLocker', 'CGPA renewal', 'Tehsildar certificate', 'Tuition refund', 'Quorum voting', 'Appeal deadline'].map((kw) => (
                <button
                  key={kw}
                  onClick={() => setSearchQuery(kw)}
                  className="px-2.5 py-1 rounded-full bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#6b6b75] hover:text-[#171717] transition-colors border border-black/5 cursor-pointer font-medium"
                >
                  {kw}
                </button>
              ))}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
                {CATEGORIES.map(cat => {
                  const isActive = activeCategory === cat.id;
                  const count = cat.id === 'all' 
                    ? FAQS.length 
                    : FAQS.filter(f => f.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 py-2.5 rounded-full text-[13.5px] font-medium transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? 'bg-[#171717] text-white shadow-sm'
                          : 'bg-[#f4f4f5] text-[#6b6b75] hover:text-[#171717] hover:bg-[#ececee]'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-semibold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[#9a9aa1]'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Expand / Collapse All Button */}
              {filteredFaqs.length > 0 && (
                <button
                  onClick={toggleAll}
                  className="text-xs font-semibold text-[#6b6b75] hover:text-[#171717] px-3 py-1.5 rounded-full bg-[#f4f4f5] hover:bg-[#ececee] transition cursor-pointer shrink-0 ml-auto"
                >
                  {areAllExpanded ? 'Collapse All' : 'Expand All'}
                </button>
              )}
            </div>

            {/* Filter Result Counter */}
            <div className="flex items-center justify-between text-xs text-[#9a9aa1] font-medium">
              <span>
                Showing <strong className="text-[#171717] font-semibold">{filteredFaqs.length}</strong> of {FAQS.length} questions
                {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
                {activeCategory !== 'all' && <span> in {CATEGORIES.find(c => c.id === activeCategory)?.label}</span>}
              </span>
              {(searchQuery || activeCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer underline underline-offset-2"
                >
                  Reset all filters
                </button>
              )}
            </div>

          </div>

        </section>

        {/* ACCORDION QUESTIONS LIST */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-8 py-4">
          
          {filteredFaqs.length === 0 ? (
            /* Empty State */
            <div className="bg-[#f4f4f5] rounded-[24px] p-12 text-center max-w-2xl mx-auto space-y-4 border border-black/5">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto text-[#9a9aa1] shadow-xs">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#171717]">No questions found</h3>
              <p className="text-sm text-[#6b6b75]">
                We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Try another keyword, or reach out to our student support desk.
              </p>
              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="px-4 py-2 rounded-full bg-[#171717] text-white text-xs font-semibold cursor-pointer"
                >
                  View All Questions
                </button>
                <button
                  onClick={() => setIsSupportModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-white text-[#171717] border border-black/10 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Ask a Question
                </button>
              </div>
            </div>
          ) : (
            /* Questions List */
            <div className="flex flex-col gap-3.5">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIds.includes(faq.id);
                const hasVoted = feedback[faq.id];

                return (
                  <ScrollReveal key={faq.id} yOffset={20} delay={Math.min(idx * 30, 250)} duration={500}>
                    <div
                      className={`w-full rounded-[20px] sm:rounded-[22px] transition-all duration-200 border select-none ${
                        isOpen 
                          ? 'bg-[#f4f4f5] border-black/10 shadow-xs' 
                          : 'bg-[#f4f4f5]/70 hover:bg-[#f4f4f5] border-black/5'
                      } p-5 sm:px-7 sm:py-6`}
                    >
                      {/* Top Clickable Question Header */}
                      <div
                        onClick={() => toggleFaq(faq.id)}
                        className="flex items-start justify-between gap-4 cursor-pointer"
                      >
                        <div className="space-y-1.5 pr-2">
                          {/* Category Tag Chip */}
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9a9aa1] block">
                            {faq.categoryLabel}
                          </span>

                          {/* Question Text */}
                          <h3 className="text-[17px] sm:text-[18.5px] font-medium text-[#171717] font-['Manrope'] tracking-[-0.02em] leading-snug">
                            {faq.q}
                          </h3>
                        </div>

                        {/* Circular +/- Toggle Button */}
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 ${
                            isOpen ? 'bg-[#171717] text-white' : 'bg-white text-[#171717]'
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </div>
                      </div>

                      {/* Expandable Answer Section */}
                      {isOpen && (
                        <div className="pt-4 mt-3 border-t border-black/5 space-y-4 animate-framer-appear">
                          
                          {/* Main Plain-English Answer */}
                          <p className="text-[15px] sm:text-[15.5px] text-[#4b4b53] leading-relaxed font-normal font-['Manrope']">
                            {faq.a}
                          </p>

                          {/* Key Rule / Takeaway Highlight Box */}
                          {faq.takeaway && (
                            <div className="bg-white/80 rounded-[14px] p-3.5 sm:p-4 border border-black/5 flex items-start gap-3">
                              <div className="p-1.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                                <CheckCircle2 className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="text-xs font-bold text-[#171717] uppercase tracking-wide block mb-0.5">
                                  Key Rule
                                </span>
                                <p className="text-xs sm:text-[13px] text-[#6b6b75] leading-normal font-medium">
                                  {faq.takeaway}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Was this helpful? Micro-interaction */}
                          <div className="pt-2 flex items-center justify-between flex-wrap gap-3 text-xs text-[#9a9aa1] border-t border-black/5">
                            <div className="flex items-center gap-2">
                              <span>Was this explanation helpful?</span>
                              {hasVoted ? (
                                <span className="text-emerald-700 font-medium inline-flex items-center gap-1">
                                  <Sparkles className="w-3.5 h-3.5" /> Thank you for your feedback!
                                </span>
                              ) : (
                                <div className="flex items-center gap-1.5">
                                  <button
                                    onClick={() => handleFeedback(faq.id, 'yes')}
                                    className="p-1 px-2.5 rounded-full bg-white hover:bg-slate-100 text-[#171717] border border-black/5 flex items-center gap-1 cursor-pointer transition font-medium"
                                  >
                                    <ThumbsUp className="w-3 h-3 text-emerald-600" />
                                    <span>Yes</span>
                                  </button>
                                  <button
                                    onClick={() => handleFeedback(faq.id, 'no')}
                                    className="p-1 px-2.5 rounded-full bg-white hover:bg-slate-100 text-[#171717] border border-black/5 flex items-center gap-1 cursor-pointer transition font-medium"
                                  >
                                    <ThumbsDown className="w-3 h-3 text-rose-500" />
                                    <span>No</span>
                                  </button>
                                </div>
                              )}
                            </div>

                            {/* Deep link or copy question */}
                            <span className="text-[11px] text-[#b3b3b9]">
                              ID: {faq.id} • LPU Division of Student Welfare
                            </span>
                          </div>

                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}

        </section>

        {/* ASK SUPPORT CARD & HELPDESK SECTION */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-16">
          <div className="bg-[#171717] text-white rounded-[28px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
            
            {/* Background Glow Accents */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#ff5a2b]/15 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-600/15 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Narrative & Help Channels */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#ff5a2b]"></span>
                  <span>Dedicated Student Helpdesk</span>
                </div>

                <h2 className="font-['Manrope'] font-medium text-[32px] sm:text-[44px] leading-[1.12] tracking-[-0.03em]">
                  Still have questions? <br />
                  <span className="text-[#a1a1aa] font-serif italic font-normal">Our student advisors are here.</span>
                </h2>

                <p className="text-[15px] sm:text-[16px] text-[#d4d4d8] leading-relaxed max-w-xl font-normal">
                  If your case involves complex document issues, foreign board conversions, or income certificate queries, reach out directly to our campus welfare officers.
                </p>

                {/* Direct Contact Channels Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  
                  {/* Email Desk */}
                  <div className="bg-white/5 border border-white/10 rounded-[18px] p-4 space-y-1">
                    <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold">
                      <Mail className="w-4 h-4" />
                      <span>Email Support</span>
                    </div>
                    <a 
                      href="mailto:scholarships@lpu.co.in" 
                      className="text-[14.5px] font-medium text-white hover:underline block"
                    >
                      scholarships@lpu.co.in
                    </a>
                    <span className="text-[11.5px] text-[#a1a1aa] block">24h response time on working days</span>
                  </div>

                  {/* Phone Helpline */}
                  <div className="bg-white/5 border border-white/10 rounded-[18px] p-4 space-y-1">
                    <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                      <Phone className="w-4 h-4" />
                      <span>Campus Helpline</span>
                    </div>
                    <a 
                      href="tel:+911824517000" 
                      className="text-[14.5px] font-medium text-white hover:underline block"
                    >
                      +91 1824 517000
                    </a>
                    <span className="text-[11.5px] text-[#a1a1aa] block">Mon - Fri, 9:00 AM - 5:00 PM IST</span>
                  </div>

                  {/* Physical Office */}
                  <div className="bg-white/5 border border-white/10 rounded-[18px] p-4 space-y-1 sm:col-span-2">
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold">
                      <MapPin className="w-4 h-4" />
                      <span>On-Campus Office</span>
                    </div>
                    <p className="text-[14px] font-medium text-white">
                      Division of Student Welfare (DSW), Block 30, Room 102
                    </p>
                    <span className="text-[11.5px] text-[#a1a1aa] block">
                      Lovely Professional University, Jalandhar - Delhi G.T. Road, Phagwara, Punjab 144411
                    </span>
                  </div>

                </div>
              </div>

              {/* Right Column: "Ask Support" Action Card */}
              <div className="lg:col-span-5 bg-white text-[#171717] rounded-[24px] p-6 sm:p-8 space-y-5 shadow-2xl">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                    Fast-Track Query
                  </span>
                  <h3 className="text-[20px] font-semibold text-[#171717] tracking-tight">
                    Submit a Help Ticket
                  </h3>
                  <p className="text-xs text-[#6b6b75] leading-relaxed">
                    Have an application reference number? Submit a support inquiry and track its status online.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setIsSupportModalOpen(true)}
                    className="w-full bg-[#171717] hover:bg-black text-white text-sm font-semibold py-3.5 px-5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageSquareCheck className="w-4 h-4" />
                    <span>Open Support Ticket</span>
                  </button>

                  <button
                    onClick={onNavigateStudentWorkspace}
                    className="w-full bg-[#f4f4f5] hover:bg-[#ececee] text-[#171717] text-sm font-semibold py-3.5 px-5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer border border-black/5"
                  >
                    <span>Go to Student Workspace</span>
                    <ArrowRight className="w-4 h-4 text-[#6b6b75]" />
                  </button>
                </div>

                <div className="pt-2 border-t border-black/5 text-[11px] text-[#9a9aa1] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Governed by Institutional Service Level Agreements (SLA)</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* DOWNLOADABLE STUDENT TOOLKIT & GUIDES (PUB-009 Cross-Link) */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-16">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#9a9aa1] uppercase tracking-wider block mb-1">
                  Official Resources & Documents
                </span>
                <h2 className="text-[26px] sm:text-[32px] font-semibold text-[#171717] tracking-[-0.03em]">
                  Download Student Guides & Policies
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#6b6b75] max-w-md">
                Official institutional handbooks, mark verification criteria checklists, and governance charters.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DOWNLOADABLE_GUIDES.map((doc, idx) => (
                <div 
                  key={idx}
                  className="bg-[#f4f4f5] rounded-[20px] p-5 border border-black/5 flex flex-col justify-between hover:bg-[#ececee] transition-colors"
                >
                  <div className="space-y-2">
                    <span className="text-[10.5px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/50 px-2 py-0.5 rounded-full inline-block">
                      {doc.type}
                    </span>
                    <h3 className="text-[15px] font-semibold text-[#171717] leading-snug">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-[#6b6b75] leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-black/5 flex items-center justify-between text-xs">
                    <span className="text-[#9a9aa1] font-medium">{doc.size}</span>
                    <button 
                      onClick={() => alert(`Downloading ${doc.title}...`)}
                      className="text-[#171717] font-semibold hover:text-indigo-600 flex items-center gap-1 cursor-pointer transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* 03: Luxury Framer Footer */}
      <Footer
        brandName="CertiScholar"
        onNavigateHome={onNavigateHome}
        onNavigateLogin={onNavigateLogin}
        onNavigateRegister={onNavigateRegister}
      />

      {/* ASK SUPPORT / TICKET MODAL */}
      {isSupportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-framer-appear">
          <div className="bg-white rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-black/10 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setIsSupportModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f4f4f5] hover:bg-[#e4e4e7] flex items-center justify-center text-[#171717] transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {supportFormSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#171717]">Ticket Created Successfully!</h3>
                <p className="text-sm text-[#6b6b75] max-w-sm mx-auto">
                  Your ticket reference is <strong>#{generatedTicketId || 'TKT-829104'}</strong>. Our student advisors will reply to {supportFormData.email || 'your email'} within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSupportSubmit} className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                    Student Helpdesk
                  </span>
                  <h3 className="text-2xl font-bold text-[#171717] tracking-tight">
                    Submit a Support Query
                  </h3>
                  <p className="text-xs text-[#6b6b75] mt-1">
                    Our advisors will inspect your application status and respond via email.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-xs font-semibold text-[#171717] block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={supportFormData.name}
                      onChange={(e) => setSupportFormData({ ...supportFormData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4f4f5] text-sm text-[#171717] border border-black/10 focus:outline-none focus:border-[#171717]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-[#171717] block mb-1">
                        Registration / Roll No
                      </label>
                      <input
                        type="text"
                        value={supportFormData.regNumber}
                        onChange={(e) => setSupportFormData({ ...supportFormData, regNumber: e.target.value })}
                        placeholder="e.g. 12204589"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4f4f5] text-sm text-[#171717] border border-black/10 focus:outline-none focus:border-[#171717]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#171717] block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={supportFormData.email}
                        onChange={(e) => setSupportFormData({ ...supportFormData, email: e.target.value })}
                        placeholder="name@lpu.in"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4f4f5] text-sm text-[#171717] border border-black/10 focus:outline-none focus:border-[#171717]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#171717] block mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={supportFormData.topic}
                      onChange={(e) => setSupportFormData({ ...supportFormData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4f4f5] text-sm text-[#171717] border border-black/10 focus:outline-none focus:border-[#171717] cursor-pointer"
                    >
                      <option value="Eligibility & Criteria">Eligibility & Criteria</option>
                      <option value="Marksheet OCR Extraction Issue">Marksheet OCR Extraction Issue</option>
                      <option value="DigiLocker Integration Error">DigiLocker Integration Error</option>
                      <option value="Fee Disbursement & Ledger Credit">Fee Disbursement & Ledger Credit</option>
                      <option value="Committee Quorum Decision Appeal">Committee Quorum Decision Appeal</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#171717] block mb-1">
                      Detailed Message *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={supportFormData.message}
                      onChange={(e) => setSupportFormData({ ...supportFormData, message: e.target.value })}
                      placeholder="Please describe your question or issue in detail..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4f4f5] text-sm text-[#171717] border border-black/10 focus:outline-none focus:border-[#171717] resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSupportModalOpen(false)}
                    className="px-4 py-2.5 rounded-full text-xs font-semibold text-[#6b6b75] hover:text-[#171717] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#171717] hover:bg-black text-white text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-sm transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Ticket</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
