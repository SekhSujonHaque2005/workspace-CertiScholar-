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

/**
 * PUB-001: Public Landing Page
 * Completely aligned with the Lerova Framer template design system:
 * - Geometric modern sans-serif (Manrope) + High-contrast luxury serif italic (Bodoni Moda)
 * - Rounded hero container with Indian student portrait cutout & 4 expandable interactive capsule tabs
 * - Monochrome partner logo bar
 * - 4-card pastel difference grid
 * - Domain categorization cards
 * - 3-card dark scheme showcase
 * - 3 simple step workflow mockups
 * - Watermark brand statement
 * - 4 grayscale verification quorum portraits
 * - Student testimonial card
 * - Expandable FAQ accordion
 * - Pre-footer concentric circular portal CTA
 * - Minimalist 5-column footer
 */
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
  const [activeFaq, setActiveFaq] = useState(null);

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

  // Action Handlers
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

  // Font scale style for WCAG 2.2 AA compliance
  const rootScaleStyle = {
    fontSize: fontScale === 90 ? '90%' : fontScale === 110 ? '110%' : '100%',
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white" style={rootScaleStyle}>
      
      {/* Offline Status Warning Bar */}
      {!isOnline && (
        <div className="bg-amber-600 text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 sticky top-0 z-50">
          <WifiOff className="w-4 h-4 shrink-0" />
          <span>You are currently offline. Showing cached scholarship schemes from your local vault.</span>
        </div>
      )}

      {/* 01: Floating Pill Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        fontScale={fontScale}
        onFontScaleChange={setFontScale}
        onLogin={onNavigateLogin}
        onRegister={onNavigateRegister}
      />

      <main>
        {/* 02: Lerova-Style Hero Card with Indian Student Cutout & 4 Interactive Tabs */}
        <HeroSection
          eyebrow="YOUR FUTURE, YOUR WAY"
          headlineSans="Fund education."
          headlineSerif="unlock your potential"
          description="Explore verified scholarships, eliminate manual paperwork, and turn your academic ambitions into funded achievements with CertiScholar. Your next opportunity starts with what you verify today."
          onExploreClick={() => {
            const el = document.getElementById('scholarships');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onHowItWorksClick={() => {
            const el = document.getElementById('how-it-works');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 03: Minimalist Monochrome Partner Logo Marquee */}
        <TrustStatsGrid
          headline="Opportunities that move you forward."
          sublabel="Join a growing community of ambitious scholars, verified academic offices, and philanthropic trusts."
        />

        {/* 04: "The CertiScholar Difference" (4 Pastel Feature Cards) */}
        <ValuePropositionSection
          eyebrow="The CertiScholar Difference"
          headline="More Than Aid. A Step Toward Your Future."
          description="Great scholarship platforms should fit your life, eliminate red tape, and help you make verifiable progress. CertiScholar brings discovery, OCR verification, and institutional review into one unified place."
          onLearnMore={() => {
            const el = document.getElementById('how-it-works');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 05: "What You Can Become" (Academic Discipline Stream Cards) */}
        <DomainPillsSection
          onSelectCategory={(cat) => {
            const el = document.getElementById('scholarships');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 06: "Scholarships Worth Applying For" (Dark 3-Card High-Tech Showcase) */}
        <FeaturedShowcaseSection
          onViewDetails={(card) => {
            // Find matched mock scholarship data or use card
            const match = MOCK_SCHOLARSHIPS.find((s) => s.id === card.id) || card;
            setSelectedScholarshipForModal(match);
          }}
          onSave={handleToggleSave}
          onWhatsAppShare={handleWhatsAppShare}
          savedIds={savedIds}
        />

        {/* 07: "Three Simple Steps. A World of Possibilities" */}
        <HowItWorksSteps />

        {/* 08: Giant Typography Watermark Statement */}
        <BrandStatementSection />

        {/* 09: Institutional Governance / 4 Grayscale Committee Portraits */}
        <ReviewerQuorumSection />

        {/* 10: "Small Steps. Big Transformations" (Rahul Sharma Student Testimonial) */}
        <TestimonialSection />

        {/* 11: Frequently Asked Questions Accordion */}
        <FaqSection
          activeFaq={activeFaq}
          onToggleFaq={(idx) => setActiveFaq(activeFaq === idx ? null : idx)}
        />

        {/* 12: Pre-Footer Concentric Rings Portal CTA */}
        <PreFooterCtaSection
          onGetStarted={(val) => {
            onNavigateRegister();
          }}
        />
      </main>

      {/* 13: Minimalist 5-Column Footer */}
      <Footer
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateLogin={onNavigateLogin}
        onNavigateRegister={onNavigateRegister}
        onOpenPrivacy={() => alert('PUB-012: Privacy Policy & DPDP Act 2023 Compliance Document')}
        onOpenTerms={() => alert('PUB-013: Terms of Use & Anti-Fraud Submission Policy')}
        onOpenAccessibility={() => alert('PUB-014: WCAG 2.2 Level AA Accessibility Statement')}
      />

      {/* Scholarship Details Modal (PUB-011) */}
      <ScholarshipDetailModal
        scholarship={selectedScholarshipForModal}
        onClose={() => setSelectedScholarshipForModal(null)}
        onApply={handleApplyDirect}
        onWhatsAppShare={handleWhatsAppShare}
      />
    </div>
  );
}
