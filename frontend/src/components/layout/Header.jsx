import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Scholarships", href: "#scholarships" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Governance", href: "#verification" },
  { name: "FAQ", href: "#faq" },
];

/**
 * Inverted Tabbed Header matching Framer LEROVA template:
 * - Hanging Logo Tab (left), Links Tab (center), and Action Tab (right).
 * - Animated show/hide behavior on scroll with Framer spring physics.
 * - When scrolling down: header smoothly retreats out of view.
 * - When scrolling up: header slides down animately into view.
 * - At top of page: always visible.
 * - Fully responsive on tablet (768px - 1024px) and mobile (< 640px) with elegant animated drawer.
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
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detection for show/hide behavior
  useEffect(() => {
    let lastY = typeof window !== 'undefined' ? window.scrollY : 0;

    const handleScroll = () => {
      // If mobile menu is open, keep header visible
      if (isMobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      const currentY = window.scrollY;

      // Always show header at the very top of the page
      if (currentY <= 20) {
        setIsVisible(true);
        setIsScrolled(false);
        lastY = currentY;
        return;
      }

      setIsScrolled(true);

      const diff = currentY - lastY;
      // Filter out micro jitters (less than 6px)
      if (Math.abs(diff) < 6) return;

      if (diff > 0) {
        // Scrolling DOWN -> Header hides smoothly
        setIsVisible(false);
      } else {
        // Scrolling UP -> Header slides down animately
        setIsVisible(true);
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Automatically close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href === '#about' || href === '#faq' || href === '#home' || href === '#workspace') {
      window.location.hash = href;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      window.location.hash = '#home';
      setTimeout(() => {
        const el = document.getElementById(targetId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLoginClick = () => {
    setIsMobileMenuOpen(false);
    onLogin();
  };

  const handleRegisterClick = () => {
    setIsMobileMenuOpen(false);
    onRegister();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 pointer-events-none w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? 'translate-y-0 opacity-100 filter-none'
            : '-translate-y-full opacity-0 pointer-events-none filter blur-xs'
        }`}
      >
        <div className="relative w-full flex items-start justify-between">
          
          {/* Left: Logo Tab (hanging from top with rounded bottom-right corner, flush against left viewport edge) */}
          <div
            className={`rounded-br-[20px] px-4 sm:px-6 py-3 sm:py-4 pointer-events-auto flex items-center gap-2 sm:gap-2.5 transition-all duration-300 ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-b border-r border-black/5'
                : 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
            }`}
          >
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer">
              <div className="w-5 h-5 rounded-full border-2 border-slate-900 flex items-center justify-center shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#ff5a2b] group-hover:scale-125 transition-transform duration-300" />
              </div>
              <span className="tracking-[-0.045em] text-[15px] sm:text-[17px] font-semibold text-slate-950 font-['Manrope']">
                {brandName}
              </span>
            </a>
          </div>

          {/* Center: Links Tab (hanging from top with rounded bottom corners, centered on desktop >= 1024px) */}
          <nav
            className={`hidden lg:flex items-center rounded-b-[22px] px-7 py-3 pointer-events-auto space-x-6 text-[14.5px] font-medium font-['Manrope'] text-slate-900 transition-all duration-300 absolute left-1/2 -translate-x-1/2 top-0 ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-b border-x border-black/5'
                : 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
            }`}
          >
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={
                  idx === 0
                    ? "bg-[#e8e8eb] text-slate-950 px-3.5 py-1.5 rounded-full tracking-[-0.02em] font-medium transition-colors"
                    : "text-slate-800 hover:text-black tracking-[-0.02em] transition-colors"
                }
              >
                {link.name}
              </a>
            ))}

            <span className="text-slate-200">|</span>

            {/* Accessibility & Language */}
            <div className="flex items-center space-x-2 text-[12px] text-slate-500 font-sans">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={language}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="bg-transparent font-medium text-slate-700 cursor-pointer focus:outline-none"
                aria-label="Select language"
              >
                <option value="EN">EN</option>
                <option value="HI">HI</option>
                <option value="PA">PA</option>
              </select>

              <span className="text-slate-200">•</span>

              <button
                type="button"
                onClick={() => onFontScaleChange(90)}
                className={`hover:text-black cursor-pointer ${fontScale === 90 ? 'text-indigo-600 font-bold' : ''}`}
                title="Smaller font"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => onFontScaleChange(100)}
                className={`hover:text-black cursor-pointer ${fontScale === 100 ? 'text-indigo-600 font-bold' : ''}`}
                title="Normal font"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => onFontScaleChange(110)}
                className={`hover:text-black cursor-pointer ${fontScale === 110 ? 'text-indigo-600 font-bold' : ''}`}
                title="Larger font"
              >
                A+
              </button>
            </div>
          </nav>

          {/* Right: Action Tab (hanging from top with rounded bottom-left corner, flush against right viewport edge) */}
          <div
            className={`ml-auto rounded-bl-[20px] px-3.5 sm:px-5 py-2.5 sm:py-3 pointer-events-auto flex items-center gap-2 sm:gap-3 transition-all duration-300 ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-b border-l border-black/5'
                : 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
            }`}
          >
            <button
              type="button"
              onClick={onLogin}
              className="hidden sm:inline-block text-xs font-semibold text-slate-700 hover:text-black px-2 py-1 transition cursor-pointer font-['Manrope']"
            >
              Login
            </button>
            
            {/* Framer Rolling Text Button */}
            <button
              type="button"
              onClick={onRegister}
              className="group relative bg-[#171717] hover:bg-black text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 shadow-sm cursor-pointer overflow-hidden font-['Manrope'] shrink-0"
            >
              <span className="btn-roll">
                <span className="btn-roll-inner">
                  <span>Get Started</span>
                  <span>Get Started</span>
                </span>
              </span>
            </button>

            {/* Mobile / Tablet Hamburger Toggle Button (< 1024px) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-1.5 sm:p-2 text-slate-800 hover:text-black hover:bg-slate-100 rounded-full transition-colors cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-slate-900/10 shrink-0"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900" />
              ) : (
                <Menu className="w-5 h-5 text-slate-900" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile & Tablet Drawer Modal (< 1024px) */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Animated Drawer Panel */}
        <div
          className={`relative max-w-lg mx-3 sm:mx-auto mt-2 sm:mt-4 bg-white/95 backdrop-blur-2xl rounded-[24px] sm:rounded-[28px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200/80 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100 scale-100'
              : '-translate-y-6 opacity-0 scale-95'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full border-2 border-slate-900 flex items-center justify-center shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#ff5a2b]" />
              </div>
              <span className="tracking-[-0.045em] text-[16px] sm:text-[17px] font-semibold text-slate-950 font-['Manrope']">
                {brandName}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body - Navigation Links */}
          <nav className="px-3 sm:px-4 py-3 space-y-1 max-h-[calc(100vh-210px)] overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3.5 py-3 rounded-xl text-[15px] font-medium text-slate-800 hover:text-black hover:bg-slate-50 transition-all group"
              >
                <span className="tracking-[-0.02em] font-['Manrope']">{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}

            {/* Accessibility & Language Row */}
            <div className="pt-3 pb-2 border-t border-slate-100 mt-2 flex flex-wrap items-center justify-between gap-3 px-3">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs text-slate-500 font-medium">Language:</span>
                <div className="flex items-center bg-slate-100 rounded-lg p-0.5 text-xs">
                  {['EN', 'HI', 'PA'].map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => onLanguageChange(lang)}
                      className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                        language === lang
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-500 font-medium">Font:</span>
                <div className="flex items-center bg-slate-100 rounded-lg p-0.5 text-xs">
                  {[
                    { scale: 90, label: 'A-' },
                    { scale: 100, label: 'A' },
                    { scale: 110, label: 'A+' }
                  ].map((f) => (
                    <button
                      key={f.scale}
                      type="button"
                      onClick={() => onFontScaleChange(f.scale)}
                      className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                        fontScale === f.scale
                          ? 'bg-white text-indigo-600 shadow-xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions: Login & Get Started */}
            <div className="pt-3 pb-2 border-t border-slate-100 flex flex-col gap-2 mt-2 px-1">
              <button
                type="button"
                onClick={handleLoginClick}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50 hover:text-black font-semibold text-xs tracking-tight transition-all font-['Manrope'] cursor-pointer flex items-center justify-center min-h-[42px]"
              >
                Login to Portal
              </button>
              <button
                type="button"
                onClick={handleRegisterClick}
                className="group relative w-full bg-[#171717] hover:bg-black text-white py-3 px-5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-300 shadow-sm cursor-pointer overflow-hidden font-['Manrope'] flex items-center justify-center min-h-[44px]"
              >
                <span className="btn-roll">
                  <span className="btn-roll-inner">
                    <span>Get Started • Apply Now</span>
                    <span>Get Started • Apply Now</span>
                  </span>
                </span>
              </button>
            </div>
          </nav>

          {/* Drawer Micro Footer */}
          <div className="px-5 sm:px-6 py-2.5 bg-slate-50/80 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400 font-medium tracking-tight">
              Lovely Professional University • Institutional Scholarship Vault
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
