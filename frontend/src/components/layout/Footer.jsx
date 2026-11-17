import React from 'react';
import { GraduationCap, ShieldCheck, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';

/**
 * Footer component for CertiScholar
 * @param {Object} props
 * @param {() => void} [props.onNavigateHome]
 * @param {() => void} [props.onNavigateLogin]
 * @param {() => void} [props.onNavigateRegister]
 * @param {() => void} [props.onOpenPrivacy]
 * @param {() => void} [props.onOpenTerms]
 * @param {() => void} [props.onOpenAccessibility]
 */
export default function Footer({
  onNavigateHome = () => {},
  onNavigateLogin = () => {},
  onNavigateRegister = () => {},
  onOpenPrivacy = () => {},
  onOpenTerms = () => {},
  onOpenAccessibility = () => {}
}) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      {/* Institutional Endorsement Bar */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-slate-500 uppercase tracking-wider font-semibold">Institutional Partners:</span>
            <span className="font-semibold text-slate-300">Lovely Professional University</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">National Scholarship Portal (NSP) Data Bridge</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">DigiLocker NAD Ecosystem</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>256-bit Encryption • ISO 27001 & DigiLocker Compliant</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand Column */}
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={onNavigateHome}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-indigo-900/40">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">CertiScholar</span>
              <span className="block text-[10px] uppercase font-semibold tracking-widest text-indigo-400">Trust • Transparency • Opportunity</span>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
            Building a verifiable, auditable scholarship ecosystem. Eliminating fraudulent submissions, streamlining committee workflows, and connecting deserving scholars with genuine opportunities.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Powered by LPU CSE Innovation Hub</span>
            <span>•</span>
            <span className="text-emerald-400 font-mono">v1.0-RC1</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            <li><a href="#featured" className="hover:text-white transition-colors">Browse Scholarships</a></li>
            <li><a href="#audiences" className="hover:text-white transition-colors">For Institutions</a></li>
            <li><a href="#audiences" className="hover:text-white transition-colors">For Agencies</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Support</a></li>
          </ul>
        </div>

        {/* For Students */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">For Students</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={onNavigateRegister} className="hover:text-white transition-colors text-left">
                Create Student Passport
              </button>
            </li>
            <li><a href="#featured" className="hover:text-white transition-colors">LPUNEST Merit Schemes</a></li>
            <li><a href="#featured" className="hover:text-white transition-colors">Need-Based Financial Aid</a></li>
            <li><a href="#featured" className="hover:text-white transition-colors">Eligibility Calculator</a></li>
            <li>
              <button onClick={onNavigateLogin} className="hover:text-white transition-colors text-left flex items-center gap-1">
                <span>Student Login</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </button>
            </li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Direct Contact</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <a href="mailto:support@certischolar.org" className="hover:text-white transition-colors">
                support@certischolar.org
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <span>+91 1824 517000 (LPU Desk)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <span>Mon – Fri: 9:00 AM – 6:00 PM IST</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CertiScholar. Developed by Sekh Sujon Haque for Lovely Professional University. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-slate-300 transition-colors">
              Privacy Policy (PUB-012)
            </button>
            <button onClick={onOpenTerms} className="hover:text-slate-300 transition-colors">
              Terms of Use (PUB-013)
            </button>
            <button onClick={onOpenAccessibility} className="hover:text-slate-300 transition-colors">
              Accessibility Statement (PUB-014)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
