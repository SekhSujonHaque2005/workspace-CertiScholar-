import React, { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from '../../components/landing/HeroSection';
import TrustStatsGrid from '../../components/landing/TrustStatsGrid';
import ValuePropositionSection from '../../components/landing/ValuePropositionSection';
import DomainPillsSection from '../../components/landing/DomainPillsSection';
import FeaturedShowcaseSection from '../../components/landing/FeaturedShowcaseSection';
import HowItWorksSteps from '../../components/landing/HowItWorksSteps';
import BrandStatementSection from '../../components/landing/BrandStatementSection';
import ReviewerQuorumSection from '../../components/landing/ReviewerQuorumSection';
import TestimonialSection from '../../components/landing/TestimonialSection';
import FaqSection from '../../components/landing/FaqSection';
import PreFooterCtaSection from '../../components/landing/PreFooterCtaSection';
import ScholarshipDetailModal from '../../components/landing/ScholarshipDetailModal';
import { MOCK_SCHOLARSHIPS } from '../../services/mockScholarships';

export default function LandingPage({
  onNavigateLogin = () => {},
  onNavigateRegister = () => {},
  onNavigateStudentWorkspace = () => {},
}) {
  // Localization & Accessibility
  const [language, setLanguage] = useState('EN');
  const [fontScale, setFontScale] = useState(100);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Interaction State
  const [savedIds, setSavedIds] = useState([]);
  const [selectedScholarshipForModal, setSelectedScholarshipForModal] = useState(null);

  // Online / Offline Status
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

  const handleApplyDirect = () => {
    setSelectedScholarshipForModal(null);
    onNavigateStudentWorkspace();
  };

  const rootScaleStyle = {
    fontSize: fontScale === 90 ? '90%' : fontScale === 110 ? '110%' : '100%',
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Manrope'] antialiased selection:bg-slate-900 selection:text-white" style={rootScaleStyle}>
      
      {/* Offline Status Warning Bar */}
      {!isOnline && (
        <div className="bg-amber-600 text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 sticky top-0 z-50">
          <WifiOff className="w-4 h-4 shrink-0" />
          <span>You are currently offline. Showing cached scholarship schemes from your local vault.</span>
        </div>
      )}

      {/* 01: Inverted Tabbed Header hanging from top */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        fontScale={fontScale}
        onFontScaleChange={setFontScale}
        onLogin={onNavigateLogin}
        onRegister={onNavigateRegister}
      />

      <main>
        {/* 02 & 03: Top Hero Section Container (contains Hero Panel + Trusted By Logo Ticker) */}
        <section className="pt-3 px-3 sm:px-4 max-w-[1400px] mx-auto flex flex-col gap-3">
          <HeroSection
            eyebrow="YOUR FUTURE, YOUR WAY"
            headlineSans="Build skills."
            headlineSerif="unlock your potential."
            description="Learn in-demand skills, explore new possibilities, and turn your ambitions into real-world achievements with CertiScholar. Your next opportunity starts with what you verify today."
            onExploreClick={() => {
              const el = document.getElementById('scholarships');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onHowItWorksClick={() => {
              const el = document.getElementById('how-it-works');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          <TrustStatsGrid
            headline="Learning that moves you forward."
            sublabel="Join a growing community of curious minds, ambitious scholars, and accredited institutions."
          />
        </section>

        {/* 04: "Why LEROVA / The CertiScholar Difference" (Row 1 Text + Row 2 Four Cards) */}
        <ValuePropositionSection
          eyebrow="The CertiScholar difference"
          headline="More Than Aid. A Step Toward Your Future."
          description="Great scholarship platforms should fit your life, eliminate red tape, and help you make verifiable progress. CertiScholar brings discovery, OCR verification, and institutional review into one unified place."
          onLearnMore={() => {
            const el = document.getElementById('how-it-works');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 05: "Explore Categories / Find Your Direction" (4 Category Cards) */}
        <DomainPillsSection
          onSelectCategory={(cat) => {
            const el = document.getElementById('scholarships');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 06: "Skills Worth Investing In / Scholarships Worth Applying For" (3 Dark Cards on White) */}
        <FeaturedShowcaseSection
          onViewDetails={(card) => {
            const match = MOCK_SCHOLARSHIPS.find((s) => s.id === card.id) || card;
            setSelectedScholarshipForModal(match);
          }}
        />

        {/* 07: "Three Simple Steps. A World of Possibilities" (#f4f4f5 background) */}
        <HowItWorksSteps />

        {/* 08: Giant Bodoni Moda Typography Watermark Statement */}
        <BrandStatementSection
          onStartJourney={() => {
            const el = document.getElementById('scholarships');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 09: Institutional Governance / 4 Grayscale Committee Portraits */}
        <ReviewerQuorumSection />

        {/* 10: "Small Steps. Big Transformations" (Student Testimonial Card) */}
        <TestimonialSection />

        {/* 11: Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 12: Pre-Footer Orbit Concentric Rings Portal CTA */}
        <PreFooterCtaSection
          onGetStarted={onNavigateRegister}
        />
      </main>

      {/* 13: Minimalist 4-Column Footer */}
      <Footer
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateLogin={onNavigateLogin}
        onNavigateRegister={onNavigateRegister}
        onOpenPrivacy={() => alert('PUB-012: Privacy Policy & DPDP Act 2023 Compliance Document')}
        onOpenTerms={() => alert('PUB-013: Terms of Use & Anti-Fraud Submission Policy')}
        onOpenAccessibility={() => alert('PUB-014: WCAG 2.2 Level AA Accessibility Statement')}
      />

      {/* Scholarship Details Modal */}
      <ScholarshipDetailModal
        scholarship={selectedScholarshipForModal}
        onClose={() => setSelectedScholarshipForModal(null)}
        onApply={handleApplyDirect}
      />
    </div>
  );
}
