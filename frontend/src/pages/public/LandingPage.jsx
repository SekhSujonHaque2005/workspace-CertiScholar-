import React, { useState, useEffect, useRef } from 'react';
import { WifiOff } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from '../../components/landing/HeroSection';
import TrustStatsGrid from '../../components/landing/TrustStatsGrid';
import HowItWorksSteps from '../../components/landing/HowItWorksSteps';
import ScholarshipFilterBar from '../../components/landing/ScholarshipFilterBar';
import ScholarshipGrid from '../../components/landing/ScholarshipGrid';
import AudienceSection from '../../components/landing/AudienceSection';
import FaqSection from '../../components/landing/FaqSection';
import ScholarshipDetailModal from '../../components/landing/ScholarshipDetailModal';
import { MOCK_SCHOLARSHIPS } from '../../services/mockScholarships';

/**
 * PUB-001: Public Landing Page
 * Prop-driven architectural orchestrator assembling modular, reusable components.
 * 
 * @param {Object} props
 * @param {() => void} [props.onNavigateLogin]
 * @param {() => void} [props.onNavigateRegister]
 * @param {() => void} [props.onNavigateStudentWorkspace]
 */
export default function LandingPage({
  onNavigateLogin = () => {},
  onNavigateRegister = () => {},
  onNavigateStudentWorkspace = () => {},
}) {
  // Accessibility & Localization State
  const [language, setLanguage] = useState('EN');
  const [fontScale, setFontScale] = useState(100);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  // Interaction State
  const [savedIds, setSavedIds] = useState([]);
  const [selectedScholarshipForModal, setSelectedScholarshipForModal] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const searchInputRef = useRef(null);

  // Keyboard shortcut: Pressing '/' focuses search input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Online / Offline Status Listener
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Debounced skeleton transition for realistic responsive UI feedback
  const triggerFilterTransition = (updateStateCallback) => {
    setIsLoading(true);
    updateStateCallback();
    setTimeout(() => {
      setIsLoading(false);
    }, 180);
  };

  // Filter Logic
  const filteredScholarships = MOCK_SCHOLARSHIPS.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || s.educationLevel === selectedLevel || s.educationLevel === 'All Levels';
    const matchesLocation = selectedLocation === 'All' || s.location.includes(selectedLocation);

    return matchesSearch && matchesCategory && matchesLevel && matchesLocation;
  });

  // Action Handlers
  const handleClearFilters = () => {
    triggerFilterTransition(() => {
      setSearchTerm('');
      setSelectedCategory('All');
      setSelectedLevel('All');
      setSelectedLocation('All');
    });
  };

  const handleToggleSave = (id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleWhatsAppShare = (scholarship) => {
    const text = encodeURIComponent(
      `Check out this verified scholarship on CertiScholar:\n\n*${scholarship.title}*\nOffered by: ${scholarship.publisher}\nAward: ${scholarship.amount}\nDeadline: ${scholarship.deadline}\n\nLearn more: https://certischolar.org/scholarships/${scholarship.id}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleApplyDirect = (scholarship) => {
    setSelectedScholarshipForModal(null);
    onNavigateStudentWorkspace();
  };

  // Dynamic root font scale style
  const rootScaleStyle = {
    fontSize: fontScale === 90 ? '90%' : fontScale === 110 ? '110%' : '100%',
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white" style={rootScaleStyle}>
      
      {/* Offline Status Warning Bar */}
      {!isOnline && (
        <div className="bg-amber-600 text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 sticky top-0 z-50">
          <WifiOff className="w-4 h-4 shrink-0" />
          <span>You are currently offline. Showing cached scholarship schemes from your local vault.</span>
        </div>
      )}

      {/* 01: Global Header Component */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        fontScale={fontScale}
        onFontScaleChange={setFontScale}
        onLogin={onNavigateLogin}
        onRegister={onNavigateRegister}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <main>
        {/* 02: Hero Section Component */}
        <HeroSection
          searchTerm={searchTerm}
          onSearchChange={(val) => triggerFilterTransition(() => setSearchTerm(val))}
          onSearchSubmit={() => {
            const el = document.getElementById('featured');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreClick={() => {
            const el = document.getElementById('featured');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onHowItWorksClick={() => {
            const el = document.getElementById('how-it-works');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onLoginClick={onNavigateLogin}
          searchInputRef={searchInputRef}
        />

        {/* 03: Trust & Stats Grid Component */}
        <TrustStatsGrid />

        {/* 04: How It Works Steps Component */}
        <HowItWorksSteps />

        {/* 05 & 06: Featured Scholarships Directory */}
        <section id="featured" className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-indigo-600">Verified Opportunities</span>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
                  Active Scholarships
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Hand-picked, official gazette corroborated schemes with automated verification.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{filteredScholarships.length} Schemes Available</span>
              </div>
            </div>

            {/* Filter Bar Component */}
            <ScholarshipFilterBar
              searchTerm={searchTerm}
              onSearchChange={(val) => triggerFilterTransition(() => setSearchTerm(val))}
              selectedCategory={selectedCategory}
              onCategoryChange={(val) => triggerFilterTransition(() => setSelectedCategory(val))}
              selectedLevel={selectedLevel}
              onLevelChange={(val) => triggerFilterTransition(() => setSelectedLevel(val))}
              selectedLocation={selectedLocation}
              onLocationChange={(val) => triggerFilterTransition(() => setSelectedLocation(val))}
              onReset={handleClearFilters}
              resultsCount={filteredScholarships.length}
              searchInputRef={searchInputRef}
            />

            {/* Scholarship Cards Grid Component */}
            <ScholarshipGrid
              scholarships={filteredScholarships}
              isLoading={isLoading}
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
              onViewDetails={(s) => setSelectedScholarshipForModal(s)}
              onWhatsAppShare={handleWhatsAppShare}
              onResetFilters={handleClearFilters}
            />
          </div>
        </section>

        {/* 07: Audience Ecosystem Section */}
        <AudienceSection
          onStudentRegister={onNavigateRegister}
          onInstitutionEnquire={() => {
            alert('Institution Partner Onboarding Request dispatched to LPU Financial Aid Secretariat.');
          }}
          onAgencyGetStarted={() => {
            alert('Agency Grant Publisher Onboarding initiated.');
          }}
        />

        {/* 08: FAQ Section Component */}
        <FaqSection
          activeFaq={activeFaq}
          onToggleFaq={(idx) => setActiveFaq(activeFaq === idx ? null : idx)}
        />
      </main>

      {/* 09: Global Footer Component */}
      <Footer
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateLogin={onNavigateLogin}
        onNavigateRegister={onNavigateRegister}
        onOpenPrivacy={() => alert('PUB-012: Privacy Policy & DPDP Act 2023 Compliance Document')}
        onOpenTerms={() => alert('PUB-013: Terms of Use & Anti-Fraud Submission Policy')}
        onOpenAccessibility={() => alert('PUB-014: WCAG 2.2 Level AA Accessibility Statement')}
      />

      {/* 10: Scholarship Details Modal Component (PUB-011) */}
      <ScholarshipDetailModal
        scholarship={selectedScholarshipForModal}
        onClose={() => setSelectedScholarshipForModal(null)}
        onApply={handleApplyDirect}
        onWhatsAppShare={handleWhatsAppShare}
      />
    </div>
  );
}
