import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Bookmark, 
  Share2, 
  ExternalLink, 
  ChevronDown, 
  Menu, 
  X, 
  Play, 
  Info, 
  WifiOff, 
  RotateCcw,
  Sparkles,
  ArrowRight,
  Globe,
  FileCheck,
  Building2,
  Users,
  Award
} from 'lucide-react';
import { MOCK_SCHOLARSHIPS } from '../../services/mockScholarships';

export default function LandingPage({ onNavigateLogin, onNavigateRegister, onNavigateStudentWorkspace }) {
  // State: Search & Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [savedIds, setSavedIds] = useState([]);
  
  // State: Accessibility Font Scale
  const [fontScale, setFontScale] = useState(100); // 90%, 100%, 110%
  const [language, setLanguage] = useState('EN'); // 'EN' | 'HI' | 'PA'
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  // State: UI Controls
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scholarshipDropdownOpen, setScholarshipDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [selectedScholarshipForModal, setSelectedScholarshipForModal] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const searchInputRef = useRef(null);

  // Keyboard shortcut: Pressing '/' focuses search input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Online / Offline Status Listener
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Simulate debounced skeleton loading on filter changes
  const triggerFilterWithSkeleton = (callback) => {
    setIsLoading(true);
    callback();
    setTimeout(() => {
      setIsLoading(false);
    }, 180);
  };

  // Filter Logic
  const filteredScholarships = MOCK_SCHOLARSHIPS.filter((s) => {
    const matchesSearch = 
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || s.educationLevel === selectedLevel || s.educationLevel === 'All Levels';
    const matchesLocation = selectedLocation === 'All' || s.location.includes(selectedLocation);

    return matchesSearch && matchesCategory && matchesLevel && matchesLocation;
  });

  const handleClearFilters = () => {
    triggerFilterWithSkeleton(() => {
      setSearchTerm('');
      setSelectedCategory('All');
      setSelectedLevel('All');
      setSelectedLocation('All');
    });
  };

  const handleToggleSave = (id) => {
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter(item => item !== id));
    } else {
      setSavedIds([...savedIds, id]);
    }
  };

  const handleWhatsAppShare = (scholarship) => {
    const text = encodeURIComponent(
      `Check out this verified scholarship on CertiScholar:\n\n*${scholarship.title}*\nOffered by: ${scholarship.publisher}\nBenefit: ${scholarship.benefit}\nDeadline: ${scholarship.deadline}\n\nView details: https://certischolar.lpu.in/scholarships/${scholarship.id}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div 
      className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-500 selection:text-white"
      style={{ fontSize: `${fontScale}%` }}
    >
      {/* Offline Alert Banner */}
      {!isOnline && (
        <div className="bg-amber-500 text-slate-950 px-4 py-2 text-center text-xs font-bold flex items-center justify-center gap-2">
          <WifiOff className="w-4 h-4" />
          <span>Offline Mode — Displaying cached scholarship directory. Reconnecting...</span>
        </div>
      )}

      {/* 01. GLOBAL HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        {/* Top Utility Bar */}
        <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <a href="mailto:support@certischolar.org" className="hover:text-white transition flex items-center gap-1.5">
                <span>support@certischolar.org</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a href="tel:+15551234567" className="hover:text-white transition hidden sm:inline">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center space-x-1">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-slate-300 hover:text-white focus:outline-none cursor-pointer text-xs"
                >
                  <option value="EN" className="bg-slate-800 text-white">English</option>
                  <option value="HI" className="bg-slate-800 text-white">हिंदी (Hindi)</option>
                  <option value="PA" className="bg-slate-800 text-white">ਪੰਜਾਬੀ (Punjabi)</option>
                </select>
              </div>

              <span className="text-slate-600">|</span>

              {/* Accessibility Font Size Controls */}
              <div className="flex items-center space-x-1.5 font-semibold text-[11px]">
                <span className="text-slate-400 mr-1 hidden sm:inline">Accessibility:</span>
                <button 
                  onClick={() => setFontScale(90)} 
                  className={`px-1 rounded hover:text-white ${fontScale === 90 ? 'text-indigo-400 font-bold' : ''}`}
                  title="Smaller text"
                >
                  A-
                </button>
                <button 
                  onClick={() => setFontScale(100)} 
                  className={`px-1 rounded hover:text-white ${fontScale === 100 ? 'text-indigo-400 font-bold' : ''}`}
                  title="Default text"
                >
                  A
                </button>
                <button 
                  onClick={() => setFontScale(110)} 
                  className={`px-1 rounded hover:text-white ${fontScale === 110 ? 'text-indigo-400 font-bold' : ''}`}
                  title="Larger text"
                >
                  A+
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-md shadow-indigo-600/20">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 block leading-tight">
                CertiScholar
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 block">
                Trust. Transparency. Opportunity.
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-600">
            <a href="#hero" className="hover:text-indigo-600 transition">Home</a>
            <a href="#how-it-works" className="hover:text-indigo-600 transition">How It Works</a>
            <a href="#featured" className="hover:text-indigo-600 transition">Scholarships</a>
            <a href="#capabilities" className="hover:text-indigo-600 transition">Features</a>
            <a href="#audiences" className="hover:text-indigo-600 transition">For Institutions</a>
            <a href="#audiences" className="hover:text-indigo-600 transition">For Agencies</a>
            <a href="#faq" className="hover:text-indigo-600 transition">FAQ</a>
          </nav>

          {/* Desktop Auth CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={onNavigateLogin}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition"
            >
              Login
            </button>
            <button 
              onClick={onNavigateRegister}
              className="px-5 py-2.5 text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm hover:shadow-indigo-600/20 transition transform active:scale-95"
            >
              Register
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50"
            >
              Home
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50"
            >
              How It Works
            </a>
            <a 
              href="#featured" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50"
            >
              Scholarships Directory
            </a>
            <a 
              href="#capabilities" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50"
            >
              Platform Capabilities
            </a>
            <div className="pt-3 border-t border-slate-100 flex gap-2">
              <button 
                onClick={onNavigateLogin}
                className="flex-1 py-2 text-center text-sm font-semibold border border-slate-300 rounded-lg"
              >
                Login
              </button>
              <button 
                onClick={onNavigateRegister}
                className="flex-1 py-2 text-center text-sm font-semibold bg-indigo-600 text-white rounded-lg shadow-sm"
              >
                Register
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 02. HERO SECTION — CONCEPT 1: UNIVERSITY LIBRARY BAY WINDOW (CINEMATIC GLASSMORPHISM) */}
      <section id="hero" className="relative bg-slate-950 py-10 sm:py-14 px-3 sm:px-6 lg:px-8 overflow-hidden select-none">
        {/* Ambient Room Lighting: Warm Study Lamp Glows */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Triple-Pane Bay Window Architectural Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-3 sm:gap-4 items-stretch">
          
          {/* Left Window Panel (Architectural Framing with Campus Vista) */}
          <div className="hidden lg:block lg:col-span-2 relative rounded-3xl overflow-hidden border-4 border-slate-800/90 shadow-2xl bg-slate-900 group">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" 
              alt="Campus Vista Left" 
              className="w-full h-full object-cover object-left opacity-90 scale-105 group-hover:scale-100 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
            {/* Library Desk Hints in Foreground */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700/60 text-[10px] text-slate-300">
              <span className="font-bold text-amber-400 block">Study Sanctuary</span>
              <span>LPU Central Library Wing</span>
            </div>
          </div>

          {/* Center Main Panoramic Bay Window (The Hero Glass Pane) */}
          <div className="col-span-12 lg:col-span-8 relative rounded-[2rem] sm:rounded-[2.75rem] overflow-hidden border-4 sm:border-8 border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),inset_0_0_50px_rgba(0,0,0,0.5)] min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-6 sm:p-10">
            {/* Background Campus Landscape Outside the Window */}
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85" 
              alt="University Campus Lawn & Horizon" 
              className="absolute inset-0 w-full h-full object-cover object-center scale-100 filter brightness-[0.98] contrast-[1.05]"
            />

            {/* Subtle Glass Reflection & Atmospheric Sunlight Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-400/10 via-transparent to-slate-950/70 pointer-events-none"></div>
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Glass Pane Content Layer */}
            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              
              {/* Top Glassmorphic Navigation Capsule */}
              <div className="flex items-center justify-between backdrop-blur-md bg-white/25 border border-white/50 shadow-lg rounded-full px-4 sm:px-6 py-2 text-xs text-slate-900 max-w-xl mx-auto w-full font-semibold">
                <a href="#how-it-works" className="hover:text-indigo-900 transition">How it works?</a>
                <span className="text-slate-400">•</span>
                <a href="#featured" className="hover:text-indigo-900 transition">LPU Schemes</a>
                <span className="text-slate-400">•</span>
                <a href="#featured" className="hover:text-indigo-900 transition">Directory</a>
                <span className="text-slate-400">•</span>
                <a href="#faq" className="hover:text-indigo-900 transition">Trust & Safety</a>
                <button 
                  onClick={onNavigateRegister}
                  className="bg-white/90 hover:bg-white text-slate-900 px-3.5 py-1 rounded-full font-bold shadow-xs hover:shadow transition ml-1"
                >
                  Get Started
                </button>
              </div>

              {/* Main Headline & Message on the Glass */}
              <div className="text-center space-y-4 my-auto pt-4">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/30 border border-white/60 text-slate-900 text-xs font-bold tracking-wide shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-800" />
                  <span>10,500+ LPU Scholarships & 50,000+ Verified Opportunities</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] drop-shadow-xs">
                  Focus on Your Education.<br />
                  <span className="text-indigo-900 drop-shadow-xs">We'll Help Fund It.</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-800 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-xs px-2">
                  Cut through the noise of scattered deadlines, unverified claims, and manual paperwork. CertiScholar brings automated verification, explainable eligibility, and trusted institutional aid directly to your fingertips.
                </p>

                {/* The Hero Glassmorphic Search Capsule */}
                <div className="pt-2 max-w-2xl mx-auto">
                  <div className="backdrop-blur-xl bg-white/40 border border-white/70 shadow-2xl rounded-full p-2 flex items-center gap-2 sm:gap-3 transition focus-within:ring-2 focus-within:ring-indigo-600/50">
                    <Search className="w-5 h-5 text-slate-700 ml-3 sm:ml-4 shrink-0" />
                    <input 
                      type="text" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search scholarships (e.g. Need-Based Aid, 85% Marks, EWS)..."
                      className="w-full bg-transparent text-slate-950 placeholder:text-slate-700 font-semibold text-xs sm:text-sm focus:outline-none"
                    />
                    <a
                      href="#featured"
                      className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs transition shadow-lg shrink-0 flex items-center gap-1.5 transform active:scale-95"
                    >
                      <span>Find Aid</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Lower Window Pane: Floating Frosted Trust Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
                <div className="backdrop-blur-md bg-white/25 border border-white/40 rounded-xl p-2.5 text-center text-slate-900 shadow-xs">
                  <p className="text-base sm:text-lg font-black leading-tight">50,000+</p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-slate-800">Verified Schemes</p>
                </div>
                <div className="backdrop-blur-md bg-white/25 border border-white/40 rounded-xl p-2.5 text-center text-slate-900 shadow-xs">
                  <p className="text-base sm:text-lg font-black leading-tight">2,500+</p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-slate-800">Trusted Sources</p>
                </div>
                <div className="backdrop-blur-md bg-white/25 border border-white/40 rounded-xl p-2.5 text-center text-slate-900 shadow-xs">
                  <p className="text-base sm:text-lg font-black leading-tight">1.2M+</p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-slate-800">Students Guided</p>
                </div>
                <div className="backdrop-blur-md bg-white/25 border border-white/40 rounded-xl p-2.5 text-center text-slate-900 shadow-xs">
                  <p className="text-base sm:text-lg font-black text-emerald-900 leading-tight">98%</p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-slate-800">DigiLocker Verified*</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Window Panel (Architectural Framing with Campus Vista) */}
          <div className="hidden lg:block lg:col-span-2 relative rounded-3xl overflow-hidden border-4 border-slate-800/90 shadow-2xl bg-slate-900 group">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" 
              alt="Campus Vista Right" 
              className="w-full h-full object-cover object-right opacity-90 scale-105 group-hover:scale-100 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
            {/* Campus Horizon Label */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700/60 text-[10px] text-slate-300">
              <span className="font-bold text-teal-400 block">Open Horizon</span>
              <span>Academic Year 2026–27</span>
            </div>
          </div>

        </div>
      </section>


      {/* 03. TRUST & STATS SECTION */}
      <section className="bg-slate-900 text-white py-10 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-indigo-400">50,000+</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">Verified Scholarships</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-teal-400">2,500+</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">Trusted Issuing Sources</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-indigo-400">1.2M+</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">Students Empowered</p>
            </div>
            <div className="space-y-1 relative group cursor-help">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 flex items-center justify-center gap-1">
                98%<span className="text-xs text-emerald-300 align-super">*</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium flex items-center justify-center gap-1">
                Information Accuracy
                <Info className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition" />
              </p>
              {/* Tooltip on Asterisk */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-slate-800 text-slate-200 text-[11px] p-2.5 rounded-lg shadow-xl border border-slate-700 z-50 text-left">
                * Calculated based on authoritative university circular cross-checks, DigiLocker board corroboration, and automated arithmetic recomputation under DOC-001 principles.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-wider">Simple & Transparent</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              How CertiScholar Works
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              A reliable 4-step journey from discovery to automated eligibility and institutional award.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">Discover</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Search verified institutional and government scholarships tailored to your academic standing and category.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">Prepare</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Upload your certificates. OCR extracts fields and automatically recomputes percentages with confidence scoring.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">Submit</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Apply directly to LPU schemes or export your verified Student Passport to external partner portals with consent.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-900">Track</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Watch every review milestone in real time—from reviewer verification to final committee quorum award sign-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06. FEATURED SCHOLARSHIPS DIRECTORY & SEARCH */}
      <section id="featured" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-indigo-600 font-bold text-xs uppercase tracking-wider">Live Directory</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                Featured Scholarship Opportunities
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Hand-picked, verified opportunities from Lovely Professional University and national trusts.
              </p>
            </div>

            <button 
              onClick={handleClearFilters}
              className="text-xs font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1 self-start md:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          </div>

          {/* Search & Multi-Filter Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 mb-8 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search scholarships by title, university, or keyword... (Press / to focus)"
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
              />
              <span className="hidden sm:inline-block absolute right-4 top-1/2 -translate-y-1/2 text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded font-mono">
                /
              </span>
            </div>

            {/* Filter Dropdowns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => triggerFilterWithSkeleton(() => setSelectedCategory(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="All">All Categories</option>
                  <option value="Merit">Merit & Entrance</option>
                  <option value="Need-Based">Need-Based (EWS)</option>
                  <option value="Faculty Wards">Faculty / Teacher Wards</option>
                  <option value="Research">Research & STEM</option>
                  <option value="Diversity">Diversity & Leadership</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1">Education Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => triggerFilterWithSkeleton(() => setSelectedLevel(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="All">All Education Levels</option>
                  <option value="Undergraduate">Undergraduate (UG)</option>
                  <option value="Postgraduate">Postgraduate (PG)</option>
                  <option value="All Levels">All University Levels</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => triggerFilterWithSkeleton(() => setSelectedLocation(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="All">All Locations</option>
                  <option value="Punjab">Punjab (LPU Campus)</option>
                  <option value="National">National (India)</option>
                  <option value="International">International</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => triggerFilterWithSkeleton(() => {})}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 rounded-lg text-xs transition"
                >
                  Apply Filters ({filteredScholarships.length} Results)
                </button>
              </div>
            </div>
          </div>

          {/* Scholarship Cards Grid / Skeleton Loading */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4 animate-pulse">
                  <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                  <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-100 rounded w-full"></div>
                  <div className="h-3 bg-slate-100 rounded w-2/3"></div>
                  <div className="pt-4 flex justify-between">
                    <div className="h-8 bg-slate-200 rounded w-28"></div>
                    <div className="h-8 bg-slate-200 rounded w-8"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredScholarships.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredScholarships.map((s) => (
                <div 
                  key={s.id} 
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                        {s.category}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {s.trustLabel}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-lg leading-snug hover:text-indigo-600 transition cursor-pointer"
                        onClick={() => setSelectedScholarshipForModal(s)}>
                      {s.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-medium">
                      Published by: <span className="text-slate-700 font-semibold">{s.publisher}</span>
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {s.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 pt-2 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="font-semibold text-indigo-700">{s.benefit}</span>
                      <span className="text-[11px] text-slate-400">Deadline: {s.deadline}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedScholarshipForModal(s)}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-3 rounded-xl text-xs transition shadow-xs"
                      >
                        View Details
                      </button>

                      {/* WhatsApp 1-Click Share Button */}
                      <button 
                        onClick={() => handleWhatsAppShare(s)}
                        title="Share on WhatsApp with peers"
                        className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>

                      {/* Bookmark Save Button */}
                      <button 
                        onClick={() => handleToggleSave(s.id)}
                        title={savedIds.includes(s.id) ? "Saved in Shortlist" : "Save for later"}
                        className={`p-2 rounded-xl border transition ${
                          savedIds.includes(s.id) 
                            ? 'bg-indigo-50 text-indigo-600 border-indigo-200' 
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-400 border-slate-200'
                        }`}
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Smart Empty State (No Dead Ends) */
            <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center max-w-lg mx-auto shadow-sm space-y-4">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No scholarships match your filters</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Try widening your search terms or clearing the location and category selections.
              </p>
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 07. AUDIENCES (WHO USES CERTISCHOLAR) */}
      <section id="audiences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-wider">A Unified Ecosystem</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Built for All Stakeholders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-50/50 to-white border border-indigo-100 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">For Students</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Discover matching aid, pre-check eligibility without guessing, upload certificates once into a secure digital passport, and track award decisions.
                </p>
              </div>
              <button 
                onClick={onNavigateRegister}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition"
              >
                Create Student Account &rarr;
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-teal-50/50 to-white border border-teal-100 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">For Institutions</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automate high-volume marksheet intake with OCR, recompute aggregate academic scores, enforce committee quorum policies, and eradicate fraud.
                </p>
              </div>
              <a 
                href="mailto:support@certischolar.org?subject=Institutional%20Demo%20Request"
                className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs text-center transition block"
              >
                Request University Demo &rarr;
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-50/50 to-white border border-purple-100 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">For Funding Agencies</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Publish philanthropic grants, receive pre-verified student candidate dossiers, and distribute CSR scholarship funds with verified impact audits.
                </p>
              </div>
              <button 
                onClick={onNavigateRegister}
                className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs transition"
              >
                Onboard as Agency &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 08. FAQ PREVIEW */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm mt-2">Everything you need to know about verification, privacy, and eligibility.</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How does CertiScholar verify my uploaded marksheets and income certificates?",
                a: "CertiScholar passes your document through an encrypted OCR pipeline that extracts student names, roll numbers, and marks. It mathematically recalculates percentage totals to prevent altered figures and corroborates data with official university databases or DigiLocker."
              },
              {
                q: "Is my personal data protected under India's DPDP Act 2023?",
                a: "Yes. All uploaded documents are stored in private, encrypted vaults. Sensitive identifiers like 12-digit Aadhaar numbers are automatically masked before any officer reviews them. Your data is never sold or shared without explicit, time-limited consent."
              },
              {
                q: "What happens if the OCR scan has low confidence or misreads a digit?",
                a: "CertiScholar enforces a Human-in-the-Loop policy. If OCR confidence falls below 85% or an arithmetic discrepancy is detected, the case is routed to a human Verification Officer (M5) for side-by-side inspection and manual correction."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 flex justify-between items-center text-sm"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. GLOBAL FOOTER */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
            {/* Brand Col */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center space-x-2 text-white">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="font-extrabold text-lg text-white">CertiScholar</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
                Building a transparent, trusted, and inclusive scholarship verification ecosystem for Lovely Professional University and higher education institutions.
              </p>
              <p className="text-[11px] text-slate-500">
                Governed under CS-SRS-002 v3.2 & P12 Project Baseline.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-1.5">
                <li><a href="#hero" className="hover:text-white transition">Home</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#featured" className="hover:text-white transition">Scholarships Directory</a></li>
                <li><a href="#capabilities" className="hover:text-white transition">Features</a></li>
              </ul>
            </div>

            {/* For Students */}
            <div className="space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">For Students</h4>
              <ul className="space-y-1.5">
                <li><a href="#featured" className="hover:text-white transition">Find Scholarships</a></li>
                <li><button onClick={onNavigateLogin} className="hover:text-white transition">Student Portal</button></li>
                <li><a href="#faq" className="hover:text-white transition">Eligibility Checker</a></li>
                <li><a href="#faq" className="hover:text-white transition">Student FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Contact & Support</h4>
              <ul className="space-y-1.5 text-slate-400">
                <li>support@certischolar.org</li>
                <li>+1 (555) 123-4567</li>
                <li>Lovely Professional University</li>
                <li>Phagwara, Punjab 144411</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© 2026 CertiScholar. All rights reserved. Prepared by Sekh Sujon Haque.</p>
            <div className="flex space-x-6">
              <a href="#privacy" className="hover:text-slate-300">Privacy Policy (DPDP 2023)</a>
              <a href="#terms" className="hover:text-slate-300">Terms of Use</a>
              <a href="#accessibility" className="hover:text-slate-300">Accessibility Statement</a>
            </div>
          </div>
        </div>
      </footer>

      {/* DETAIL MODAL (PUB-011) */}
      {selectedScholarshipForModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  {selectedScholarshipForModal.category}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {selectedScholarshipForModal.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {selectedScholarshipForModal.publisher} • {selectedScholarshipForModal.location}
                </p>
              </div>
              <button 
                onClick={() => setSelectedScholarshipForModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-600">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Benefit</span>
                  <span className="font-bold text-indigo-700 text-sm">{selectedScholarshipForModal.benefit}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Min. Percentage</span>
                  <span className="font-bold text-slate-800 text-sm">{selectedScholarshipForModal.minPercentage}%</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Deadline</span>
                  <span className="font-bold text-emerald-700 text-sm">{selectedScholarshipForModal.deadline}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">About the Scheme</h4>
                <p className="leading-relaxed">{selectedScholarshipForModal.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Required Verification Documents</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Original 10th & 12th Standard Marksheets (Classified via M3)</li>
                  <li>Annual Family Income Certificate issued by Sub-Divisional Magistrate / Tehsildar</li>
                  <li>Proof of Enrollment / LPUNEST Registration Receipt</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => handleWhatsAppShare(selectedScholarshipForModal)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50 text-xs font-bold hover:bg-emerald-100 transition"
              >
                <Share2 className="w-4 h-4" />
                Share on WhatsApp
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedScholarshipForModal(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedScholarshipForModal(null);
                    onNavigateLogin();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-sm"
                >
                  Apply with Student Passport &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
