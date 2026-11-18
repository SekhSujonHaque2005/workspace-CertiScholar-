import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Minimalist Footer matching Framer LEROVA template:
 * Clean brand statement, 3 column links, and subtle legal copyright bar
 */
export default function Footer({
  brandName = "CertiScholar",
  onNavigateHome = () => {},
  onNavigateLogin = () => {},
  onNavigateRegister = () => {},
  onOpenPrivacy = () => {},
  onOpenTerms = () => {},
  onOpenAccessibility = () => {}
}) {
  return (
    <footer className="bg-white border-t border-slate-200/80 text-slate-500 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigateHome}>
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
              <span className="text-base font-extrabold text-slate-950 tracking-tight font-sans">
                {brandName}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-800 leading-snug max-w-sm">
              A better way to verify, fund, and prepare for what’s next.
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Institutional document verification and scholarship governance platform developed for Lovely Professional University.
            </p>
          </div>

          {/* Explore Column */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-black transition">About Us</a></li>
              <li><a href="#scholarships" className="hover:text-black transition">All Scholarships</a></li>
              <li><a href="#verification" className="hover:text-black transition">Our Verification Quorum</a></li>
              <li><a href="#how-it-works" className="hover:text-black transition">How It Works</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-black transition">FAQs</a></li>
              <li><a href="mailto:support@certischolar.org" className="hover:text-black transition">Help Center</a></li>
              <li>
                <button onClick={onNavigateLogin} className="hover:text-black transition flex items-center gap-1">
                  <span>Student Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
              <li>
                <button onClick={onNavigateRegister} className="hover:text-black transition flex items-center gap-1">
                  <span>Create Passport</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
            </ul>
          </div>

          {/* Follow Column */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black transition">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-black transition">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-black transition">YouTube</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} CertiScholar. Developed by Sekh Sujon Haque for Lovely Professional University.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-slate-700 transition">Privacy Policy</button>
            <button onClick={onOpenTerms} className="hover:text-slate-700 transition">Terms of Service</button>
            <button onClick={onOpenAccessibility} className="hover:text-slate-700 transition">Accessibility</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
