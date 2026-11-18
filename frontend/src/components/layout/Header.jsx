import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown, Sparkles } from 'lucide-react';

/**
 * Prop-driven Header matching Lerova Framer template
 * Floating pill logo badge + floating navigation bar + dark pill action button
 */
export default function Header({
  brandName = "CertiScholar",
  onLogin = () => {},
  onRegister = () => {},
  language = "EN",
  onLanguageChange = () => {},
  fontScale = 100,
  onFontScaleChange = () => {},
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  return (
    <header className="w-full pt-4 sm:pt-6 px-4 sm:px-8 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo Capsule (Lerova Pill Style) */}
        <a 
          href="#home" 
          className="bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2.5 rounded-full font-bold flex items-center gap-2.5 shadow-sm border border-slate-200/80 hover:shadow-md transition"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
          </span>
          <span className="tracking-tight text-sm font-extrabold text-slate-950 font-sans">
            {brandName}
          </span>
        </a>

        {/* Center Floating Pill Navigation Menu */}
        <nav className="hidden lg:flex items-center bg-white/90 backdrop-blur-md px-7 py-2.5 rounded-full shadow-sm border border-slate-200/70 space-x-7 text-xs font-semibold text-slate-700">
          <a href="#home" className="hover:text-black transition-colors">Home</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#scholarships" className="hover:text-black transition-colors">Scholarships</a>
          <a href="#how-it-works" className="hover:text-black transition-colors">How It Works</a>
          <a href="#verification" className="hover:text-black transition-colors">Verification</a>
          <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
        </nav>

        {/* Right Action Group */}
        <div className="flex items-center space-x-3">
          
          {/* Subtle Language / Accessibility Capsule */}
          <div className="hidden sm:flex items-center bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/70 text-xs text-slate-600 gap-2">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="bg-transparent text-slate-700 font-semibold cursor-pointer focus:outline-none"
            >
              <option value="EN">EN</option>
              <option value="HI">HI</option>
              <option value="PA">PA</option>
            </select>

            <span className="text-slate-300">|</span>

            {/* Font Scaler (WCAG 2.2 AA) */}
            <div className="flex items-center gap-1 font-semibold text-[11px]">
              <button
                onClick={() => onFontScaleChange(90)}
                className={`px-1 rounded hover:text-slate-950 ${fontScale === 90 ? 'text-indigo-600 font-bold' : ''}`}
                title="Smaller text"
              >
                A-
              </button>
              <button
                onClick={() => onFontScaleChange(100)}
                className={`px-1 rounded hover:text-slate-950 ${fontScale === 100 ? 'text-indigo-600 font-bold' : ''}`}
                title="Default text"
              >
                A
              </button>
              <button
                onClick={() => onFontScaleChange(110)}
                className={`px-1 rounded hover:text-slate-950 ${fontScale === 110 ? 'text-indigo-600 font-bold' : ''}`}
                title="Larger text"
              >
                A+
              </button>
            </div>
          </div>

          {/* Student Login link */}
          <button
            onClick={onLogin}
            className="hidden sm:inline-block text-xs font-bold text-slate-800 hover:text-black px-3 py-2 transition"
          >
            Login
          </button>

          {/* Dark Pill CTA Button (Lerova Signature) */}
          <button
            onClick={onRegister}
            className="bg-slate-950 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-tight shadow-sm hover:shadow transition transform active:scale-95"
          >
            Get Started
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:text-black"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-white rounded-3xl p-5 shadow-xl border border-slate-200 space-y-4 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-800">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-1">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1">About</a>
            <a href="#scholarships" onClick={() => setMobileMenuOpen(false)} className="py-1">Scholarships</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="py-1">How It Works</a>
            <a href="#verification" onClick={() => setMobileMenuOpen(false)} className="py-1">Verification</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-1">FAQ</a>
          </nav>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onLogin();
              }}
              className="text-xs font-bold text-slate-800"
            >
              Student Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegister();
              }}
              className="bg-slate-950 text-white px-4 py-2 rounded-full text-xs font-bold"
            >
              Get Started &rarr;
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
