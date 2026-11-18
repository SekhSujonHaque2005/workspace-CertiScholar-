import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

/**
 * Inverted Tabbed Header matching Framer LEROVA template exactly:
 * Fixed top bar with hanging Logo Tab (left), Links Tab (center), and Action Tab (right)
 * Features Framer text roll on the "Get Started" button and smooth link hover states.
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 w-full flex items-start justify-between">
        
        {/* Left: Logo Tab (hanging from top with rounded bottom-right corner) */}
        <div className="bg-white rounded-br-[20px] px-6 py-4 shadow-xs pointer-events-auto flex items-center gap-2.5 transition-all">
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
            <span className="tracking-tight text-sm font-extrabold text-slate-950 font-sans">
              {brandName}
            </span>
          </a>
        </div>

        {/* Center: Links Tab (hanging from top with rounded bottom-left and bottom-right corners) */}
        <nav className="hidden lg:flex items-center bg-white rounded-b-[22px] px-8 py-4 shadow-xs pointer-events-auto space-x-7 text-xs font-semibold text-slate-700">
          <a href="#home" className="hover:text-black transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-black transition-colors duration-200">About</a>
          <a href="#scholarships" className="hover:text-black transition-colors duration-200">Scholarships</a>
          <a href="#how-it-works" className="hover:text-black transition-colors duration-200">How It Works</a>
          <a href="#verification" className="hover:text-black transition-colors duration-200">Verification</a>
          <a href="#faq" className="hover:text-black transition-colors duration-200">FAQ</a>

          <span className="text-slate-200">|</span>

          {/* Accessibility & Language */}
          <div className="flex items-center space-x-2 text-[11px] text-slate-500">
            <Globe className="w-3 h-3 text-slate-400" />
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="bg-transparent font-semibold text-slate-700 cursor-pointer focus:outline-none"
            >
              <option value="EN">EN</option>
              <option value="HI">HI</option>
              <option value="PA">PA</option>
            </select>

            <span className="text-slate-200">•</span>

            <button
              onClick={() => onFontScaleChange(90)}
              className={`hover:text-black cursor-pointer ${fontScale === 90 ? 'text-indigo-600 font-bold' : ''}`}
              title="Smaller font"
            >
              A-
            </button>
            <button
              onClick={() => onFontScaleChange(100)}
              className={`hover:text-black cursor-pointer ${fontScale === 100 ? 'text-indigo-600 font-bold' : ''}`}
              title="Normal font"
            >
              A
            </button>
            <button
              onClick={() => onFontScaleChange(110)}
              className={`hover:text-black cursor-pointer ${fontScale === 110 ? 'text-indigo-600 font-bold' : ''}`}
              title="Larger font"
            >
              A+
            </button>
          </div>
        </nav>

        {/* Right: Action Tab (hanging from top with rounded bottom-left corner) */}
        <div className="bg-white rounded-bl-[20px] p-2 sm:p-2.5 shadow-xs pointer-events-auto flex items-center gap-2">
          <button
            onClick={onLogin}
            className="hidden sm:inline-block text-xs font-bold text-slate-700 hover:text-black px-3 py-1.5 transition cursor-pointer"
          >
            Login
          </button>
          
          {/* Framer Rolling Text Button */}
          <button
            onClick={onRegister}
            className="group relative bg-slate-950 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-tight transition-all duration-300 shadow-sm cursor-pointer overflow-hidden"
          >
            <span className="btn-roll">
              <span className="btn-roll-inner">
                <span>Get Started</span>
                <span>Get Started</span>
              </span>
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-black cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-3 mt-2 bg-white rounded-3xl p-6 shadow-2xl pointer-events-auto space-y-4 border border-slate-200 animate-framer-appear">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-800">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#scholarships" onClick={() => setMobileMenuOpen(false)}>Scholarships</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#verification" onClick={() => setMobileMenuOpen(false)}>Verification</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          </nav>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button onClick={() => { setMobileMenuOpen(false); onLogin(); }} className="text-xs font-bold text-slate-700">
              Student Login
            </button>
            <button onClick={() => { setMobileMenuOpen(false); onRegister(); }} className="bg-slate-950 text-white px-5 py-2 rounded-full text-xs font-bold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
