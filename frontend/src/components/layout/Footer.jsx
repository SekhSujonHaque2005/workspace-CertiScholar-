import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

/**
 * Footer matching Lerova Framer template minimalist 4-column design
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
        
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          
          {/* Brand Info (2 cols) */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigateHome}>
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
              <span className="text-base font-extrabold text-slate-950 tracking-tight font-sans">
                {brandName}
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-normal">
              A transparent, verifiable scholarship management ecosystem built for Lovely Professional University and partner institutions.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-600 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DigiLocker & DPDP Act 2023 Compliant</span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-black transition">Overview</a></li>
              <li><a href="#about" className="hover:text-black transition">The Difference</a></li>
              <li><a href="#how-it-works" className="hover:text-black transition">How It Works</a></li>
              <li><a href="#verification" className="hover:text-black transition">Quorum Review</a></li>
              <li><a href="#faq" className="hover:text-black transition">FAQ</a></li>
            </ul>
          </div>

          {/* Column 2: Opportunities */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Scholarships</h4>
            <ul className="space-y-2">
              <li><a href="#scholarships" className="hover:text-black transition">LPUNEST Merit</a></li>
              <li><a href="#scholarships" className="hover:text-black transition">Need-Based Aid</a></li>
              <li><a href="#scholarships" className="hover:text-black transition">Defense & Teachers</a></li>
              <li><a href="#scholarships" className="hover:text-black transition">AICTE Schemes</a></li>
            </ul>
          </div>

          {/* Column 3: Portals */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Access</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onNavigateLogin} className="hover:text-black transition text-left flex items-center gap-1">
                  <span>Student Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
              <li>
                <button onClick={onNavigateRegister} className="hover:text-black transition text-left flex items-center gap-1">
                  <span>Create Passport</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
              <li><a href="#verification" className="hover:text-black transition">Auditor Desk</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              <li><a href="mailto:support@certischolar.org" className="hover:text-black transition">support@certischolar.org</a></li>
              <li><span>+91 1824 517000 (LPU Desk)</span></li>
              <li><span>Jalandhar - Delhi G.T. Road, Phagwara, Punjab</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} CertiScholar. Developed by Sekh Sujon Haque for Lovely Professional University.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-slate-700 transition">Privacy Policy (PUB-012)</button>
            <button onClick={onOpenTerms} className="hover:text-slate-700 transition">Terms of Service (PUB-013)</button>
            <button onClick={onOpenAccessibility} className="hover:text-slate-700 transition">Accessibility (PUB-014)</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
