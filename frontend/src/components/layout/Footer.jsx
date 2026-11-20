import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Authentic Framer LEROVA Luxury Footer:
 * Encapsulated in a rounded-[28px] white card with border & subtle shadow,
 * 34px Manrope brandmark emblem, circular social icon pills, and institutional legal footer.
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
    <footer className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 pb-6 pt-3 select-none">
      <div className="bg-white rounded-[28px] border border-black/8 shadow-[0_1px_2px_rgba(23,23,23,0.05)] p-8 sm:p-14 space-y-14">
        
        {/* Main Grid: Left Brand Column + Right 3 Link Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Logo Emblem + Wordmark */}
            <div 
              className="inline-flex items-center gap-3 cursor-pointer group"
              onClick={onNavigateHome}
            >
              <div className="w-9 h-9 rounded-full border-[3px] border-[#171717] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a2b] transition-transform group-hover:scale-125"></span>
              </div>
              <span className="font-['Manrope'] font-medium text-[32px] sm:text-[34px] tracking-[-0.045em] text-[#171717] leading-none">
                {brandName}
              </span>
            </div>

            {/* Tagline & Attribution */}
            <p className="text-[15px] font-normal text-[#171717] leading-relaxed max-w-sm font-['Manrope']">
              A simple way to verify documents and receive university scholarships.
            </p>
            <p className="text-[13px] text-[#9a9aa1] leading-relaxed max-w-sm font-['Manrope']">
              Official scholarship and document verification portal for Lovely Professional University.
            </p>

            {/* Follow Us Social Icon Buttons */}
            <div className="space-y-3 pt-2">
              <span className="text-[13px] font-semibold text-[#171717] block font-['Manrope']">
                Follow us
              </span>
              <div className="flex items-center gap-2.5">
                
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-black/8 bg-[#f4f4f5]/70 hover:bg-[#171717] hover:text-white flex items-center justify-center text-[#171717] transition-all cursor-pointer"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-black/8 bg-[#f4f4f5]/70 hover:bg-[#171717] hover:text-white flex items-center justify-center text-[#171717] transition-all cursor-pointer"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-black/8 bg-[#f4f4f5]/70 hover:bg-[#171717] hover:text-white flex items-center justify-center text-[#171717] transition-all cursor-pointer"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>

              </div>
            </div>

          </div>

          {/* Right Links Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Column 1: Explore */}
            <div className="space-y-4">
              <h4 className="text-[#171717] font-semibold text-[15px] font-['Manrope']">
                Explore
              </h4>
              <ul className="space-y-3 text-[14px] text-[#6b6b75] font-['Manrope']">
                <li>
                  <a href="#home" className="hover:text-[#171717] transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#171717] transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#scholarships" className="hover:text-[#171717] transition-colors">All Scholarships</a>
                </li>
                <li>
                  <a href="#verification" className="hover:text-[#171717] transition-colors">Our Verification Quorum</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#171717] transition-colors">How It Works</a>
                </li>
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="space-y-4">
              <h4 className="text-[#171717] font-semibold text-[15px] font-['Manrope']">
                Resources
              </h4>
              <ul className="space-y-3 text-[14px] text-[#6b6b75] font-['Manrope']">
                <li>
                  <a href="#resources" className="hover:text-[#171717] transition-colors">Guides & Articles</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#171717] transition-colors">FAQs</a>
                </li>
                <li>
                  <a href="mailto:support@certischolar.org" className="hover:text-[#171717] transition-colors">Institutional Contact</a>
                </li>
                <li>
                  <button 
                    onClick={onNavigateLogin} 
                    className="hover:text-[#171717] transition-colors flex items-center gap-1 cursor-pointer text-left"
                  >
                    <span>Student Portal</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9a9aa1]" />
                  </button>
                </li>
                <li>
                  <button 
                    onClick={onNavigateRegister} 
                    className="hover:text-[#171717] transition-colors flex items-center gap-1 cursor-pointer text-left"
                  >
                    <span>Create Passport</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9a9aa1]" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Follow Us */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-[#171717] font-semibold text-[15px] font-['Manrope']">
                Follow Us
              </h4>
              <ul className="space-y-3 text-[14px] text-[#6b6b75] font-['Manrope']">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#171717] transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#171717] transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#171717] transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-[#f4f4f5] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#9a9aa1] font-['Manrope']">
          <p>© {CURRENT_YEAR} CertiScholar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-[#171717] transition cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={onOpenTerms} className="hover:text-[#171717] transition cursor-pointer">
              Terms of Service
            </button>
            <button onClick={onOpenAccessibility} className="hover:text-[#171717] transition cursor-pointer">
              Accessibility
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
