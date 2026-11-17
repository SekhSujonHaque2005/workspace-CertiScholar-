import React from 'react';
import { GraduationCap, Building2, Award, ArrowRight } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function AudienceSection({
  onStudentRegister,
  onInstitutionEnquire,
  onAgencyGetStarted,
}) {
  return (
    <section id="audiences" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Badge variant="indigo">A Unified Higher Education Ecosystem</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Built for All Stakeholders
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Connecting ambitious students, university financial aid offices, and philanthropic donors on one verified platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Students Card */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-xs">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">For Students</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Discover matching university and national aid, pre-check eligibility without guessing, upload certificates once into a secure digital passport, and track award decisions live.
              </p>
            </div>
            <Button 
              variant="primary" 
              size="md" 
              className="w-full" 
              icon={ArrowRight} 
              iconPosition="right"
              onClick={onStudentRegister}
            >
              Create Student Account
            </Button>
          </div>

          {/* Institutions Card */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shadow-xs">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">For Institutions</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automate high-volume marksheet intake with OCR, recompute aggregate academic scores, enforce committee quorum policies, and eradicate fraud with complete auditability.
              </p>
            </div>
            <Button 
              variant="secondary" 
              size="md" 
              className="w-full" 
              icon={ArrowRight} 
              iconPosition="right"
              onClick={onInstitutionEnquire}
            >
              Request University Demo
            </Button>
          </div>

          {/* Funding Agencies Card */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shadow-xs">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">For Funding Agencies</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Publish philanthropic grants, receive pre-verified student candidate dossiers, and distribute CSR scholarship funds with verified impact audits and transparency.
              </p>
            </div>
            <Button 
              variant="outline" 
              size="md" 
              className="w-full border-purple-200 hover:bg-purple-50 text-purple-900 font-bold" 
              icon={ArrowRight} 
              iconPosition="right"
              onClick={onAgencyGetStarted}
            >
              Onboard as Agency
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
