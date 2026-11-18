import React, { useState } from 'react';
import { Globe } from 'lucide-react';

/**
 * Inverted Tabbed Header matching Framer LEROVA template exactly:
 * Fixed top bar with hanging Logo Tab (left), Links Tab (center), and Action Tab (right).
 * Features Framer text roll on the "Get Started" button and authentic geometry.
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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none w-full">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 w-full flex items-start justify-between">
        
        {/* Left: Logo Tab (hanging from top with rounded bottom-right corner) */}
        <div className="bg-white rounded-br-[20px] px-6 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)] pointer-events-auto flex items-center gap-2.5 transition-all">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-5 h-5 rounded-full border-2 border-slate-900 flex items-center justify-center shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#ff5a2b] group-hover:scale-125 transition-transform duration-300"></span>
            </div>
            <span className="tracking-[-0.045em] text-[17px] font-semibold text-slate-950 font-['Manrope']">
              {brandName}
            </span>
          </a>
        </div>

        {/* Center: Links Tab (hanging from top with rounded bottom-left and bottom-right corners) */}
        <nav className="hidden lg:flex items-center bg-white rounded-b-[22px] px-7 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)] pointer-events-auto space-x-6 text-[14.5px] font-medium font-['Manrope'] text-slate-900">
          <a href="#home" className="bg-[#e8e8eb] text-slate-950 px-3.5 py-1.5 rounded-full tracking-[-0.02em] font-medium transition-colors">
            Home
          </a>
          <a href="#about" className="text-slate-800 hover:text-black tracking-[-0.02em] transition-colors">
            About
          </a>
          <a href="#scholarships" className="text-slate-800 hover:text-black tracking-[-0.02em] transition-colors">
            Scholarships
          </a>
          <a href="#how-it-works" className="text-slate-800 hover:text-black tracking-[-0.02em] transition-colors">
            How It Works
          </a>
          <a href="#verification" className="text-slate-800 hover:text-black tracking-[-0.02em] transition-colors">
            Governance
          </a>
          <a href="#faq" className="text-slate-800 hover:text-black tracking-[-0.02em] transition-colors">
            FAQ
          </a>

          <span className="text-slate-200">|</span>

          {/* Accessibility & Language */}
          <div className="flex items-center space-x-2 text-[12px] text-slate-500 font-sans">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="bg-transparent font-medium text-slate-700 cursor-pointer focus:outline-none"
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
        <div className="bg-white rounded-bl-[20px] px-5 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)] pointer-events-auto flex items-center gap-3">
          <button
            onClick={onLogin}
            className="hidden sm:inline-block text-xs font-semibold text-slate-700 hover:text-black px-2 py-1 transition cursor-pointer font-['Manrope']"
          >
            Login
          </button>
          
          {/* Framer Rolling Text Button */}
          <button
            onClick={onRegister}
            className="group relative bg-[#171717] hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 shadow-sm cursor-pointer overflow-hidden font-['Manrope']"
          >
            <span className="btn-roll">
              <span className="btn-roll-inner">
                <span>Get Started</span>
                <span>Get Started</span>
              </span>
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}
