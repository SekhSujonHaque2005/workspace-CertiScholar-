import React from 'react';
import { Search, ArrowRight, Play, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import ProductPreviewCard from './ProductPreviewCard';

export default function HeroSection({
  eyebrow = "Empowering Education. Enriching Futures",
  headline = (
    <>
      Discover. Prepare. Apply.{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-teal-600">
        Track Scholarships with Confidence.
      </span>
    </>
  ),
  description = "CertiScholar brings clarity and institutional trust to scholarship discovery, automated document verification, and explainable eligibility decisions.",
  searchTerm = '',
  onSearchChange,
  onSearchSubmit,
  onExploreClick,
  onHowItWorksClick,
  onLoginClick,
  searchInputRef,
}) {
  return (
    <section id="hero" className="relative pt-12 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle Background Radial Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-indigo-500/5 via-teal-500/5 to-indigo-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Search */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <Badge variant="indigo" icon={Sparkles}>
              {eyebrow}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              {headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {description}
            </p>

            {/* High-End Search Capsule with Instant Keyboard Shortcut */}
            <div className="pt-2 max-w-xl mx-auto lg:mx-0">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  onSearchSubmit && onSearchSubmit(searchTerm);
                }}
                className="bg-white rounded-2xl p-2 border border-slate-200/90 shadow-lg shadow-slate-900/5 flex items-center gap-2 transition focus-within:ring-2 focus-within:ring-indigo-600/40 focus-within:border-indigo-600"
              >
                <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                  placeholder="Search 50,000+ scholarships, LPU schemes (Press / to focus)..."
                  className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium focus:outline-none"
                />
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="md" 
                  icon={ArrowRight} 
                  iconPosition="right"
                  className="shrink-0"
                >
                  Explore
                </Button>
              </form>
            </div>

            {/* Supporting CTA Links */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button variant="outline" size="md" icon={Play} onClick={onHowItWorksClick}>
                How It Works
              </Button>
              
              <p className="text-xs text-slate-500 font-medium">
                Already registered?{' '}
                <button 
                  onClick={onLoginClick} 
                  className="text-indigo-600 hover:text-indigo-800 font-bold hover:underline cursor-pointer"
                >
                  Login to your account &rarr;
                </button>
              </p>
            </div>
          </div>

          {/* Right Column: High-Fidelity Product Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <ProductPreviewCard />
          </div>

        </div>
      </div>
    </section>
  );
}
