import React from 'react';
import { GraduationCap, Globe, Menu, X } from 'lucide-react';
import Button from '../common/Button';

export default function Header({
  language = 'EN',
  onLanguageChange,
  fontScale = 100,
  onFontScaleChange,
  onLogin,
  onRegister,
  mobileMenuOpen = false,
  onToggleMobileMenu,
}) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href="mailto:support@certischolar.org" className="hover:text-white transition">
              support@certischolar.org
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a href="tel:+15551234567" className="hover:text-white transition hidden sm:inline">
              +1 (555) 123-4567
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1.5">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={language}
                onChange={(e) => onLanguageChange && onLanguageChange(e.target.value)}
                className="bg-transparent text-slate-300 hover:text-white focus:outline-none cursor-pointer text-xs"
              >
                <option value="EN" className="bg-slate-800 text-white">English</option>
                <option value="HI" className="bg-slate-800 text-white">हिंदी (Hindi)</option>
                <option value="PA" className="bg-slate-800 text-white">ਪੰਜਾਬੀ (Punjabi)</option>
              </select>
            </div>

            <span className="text-slate-600">|</span>

            {/* Accessibility Controls */}
            <div className="flex items-center space-x-1 text-[11px] font-semibold">
              <span className="text-slate-400 mr-1 hidden sm:inline">Text Size:</span>
              <button
                onClick={() => onFontScaleChange && onFontScaleChange(90)}
                className={`px-1.5 py-0.5 rounded hover:text-white ${fontScale === 90 ? 'text-indigo-400 font-bold' : ''}`}
                title="Smaller text"
              >
                A-
              </button>
              <button
                onClick={() => onFontScaleChange && onFontScaleChange(100)}
                className={`px-1.5 py-0.5 rounded hover:text-white ${fontScale === 100 ? 'text-indigo-400 font-bold' : ''}`}
                title="Default text"
              >
                A
              </button>
              <button
                onClick={() => onFontScaleChange && onFontScaleChange(110)}
                className={`px-1.5 py-0.5 rounded hover:text-white ${fontScale === 110 ? 'text-indigo-400 font-bold' : ''}`}
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
        <div 
          className="flex items-center space-x-3 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-md shadow-indigo-600/20">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <span className="font-black text-2xl tracking-tight text-slate-900 block leading-tight">
              CertiScholar
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 block">
              Trust. Transparency. Opportunity.
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <a href="#hero" className="hover:text-indigo-600 transition">Home</a>
          <a href="#how-it-works" className="hover:text-indigo-600 transition">How It Works</a>
          <a href="#featured" className="hover:text-indigo-600 transition">Scholarships</a>
          <a href="#audiences" className="hover:text-indigo-600 transition">For Institutions</a>
          <a href="#audiences" className="hover:text-indigo-600 transition">For Agencies</a>
          <a href="#faq" className="hover:text-indigo-600 transition">FAQ</a>
        </nav>

        {/* Desktop Auth CTAs */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="ghost" size="md" onClick={onLogin}>
            Login
          </Button>
          <Button variant="primary" size="md" onClick={onRegister}>
            Register
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={onToggleMobileMenu}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <a 
            href="#hero" 
            onClick={onToggleMobileMenu}
            className="block px-3 py-2 rounded-md font-semibold text-slate-700 hover:bg-slate-50"
          >
            Home
          </a>
          <a 
            href="#how-it-works" 
            onClick={onToggleMobileMenu}
            className="block px-3 py-2 rounded-md font-semibold text-slate-700 hover:bg-slate-50"
          >
            How It Works
          </a>
          <a 
            href="#featured" 
            onClick={onToggleMobileMenu}
            className="block px-3 py-2 rounded-md font-semibold text-slate-700 hover:bg-slate-50"
          >
            Scholarships
          </a>
          <a 
            href="#audiences" 
            onClick={onToggleMobileMenu}
            className="block px-3 py-2 rounded-md font-semibold text-slate-700 hover:bg-slate-50"
          >
            For Institutions & Agencies
          </a>
          <a 
            href="#faq" 
            onClick={onToggleMobileMenu}
            className="block px-3 py-2 rounded-md font-semibold text-slate-700 hover:bg-slate-50"
          >
            FAQ
          </a>
          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <Button variant="outline" size="md" className="flex-1" onClick={onLogin}>
              Login
            </Button>
            <Button variant="primary" size="md" className="flex-1" onClick={onRegister}>
              Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
