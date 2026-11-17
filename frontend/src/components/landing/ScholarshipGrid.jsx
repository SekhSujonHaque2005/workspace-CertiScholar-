import React from 'react';
import { Search, RotateCcw } from 'lucide-react';
import ScholarshipCard from './ScholarshipCard';
import Button from '../common/Button';

export default function ScholarshipGrid({
  scholarships = [],
  isLoading = false,
  savedIds = [],
  onToggleSave,
  onViewDetails,
  onWhatsAppShare,
  onResetFilters,
}) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-white rounded-3xl p-7 border border-slate-200/80 space-y-4 animate-pulse">
            <div className="flex justify-between">
              <div className="h-5 bg-slate-200 rounded-full w-24"></div>
              <div className="h-5 bg-slate-200 rounded-full w-28"></div>
            </div>
            <div className="h-7 bg-slate-200 rounded-lg w-4/5"></div>
            <div className="h-4 bg-slate-100 rounded w-1/2"></div>
            <div className="space-y-2 pt-2">
              <div className="h-3 bg-slate-100 rounded w-full"></div>
              <div className="h-3 bg-slate-100 rounded w-3/4"></div>
            </div>
            <div className="pt-6 flex justify-between gap-3">
              <div className="h-10 bg-slate-200 rounded-xl flex-1"></div>
              <div className="h-10 bg-slate-200 rounded-xl w-10"></div>
              <div className="h-10 bg-slate-200 rounded-xl w-10"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (scholarships.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-12 sm:p-16 border border-slate-200 text-center max-w-lg mx-auto shadow-sm space-y-4">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <Search className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-black text-slate-900">No scholarships match your filters</h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
          Try expanding your search keywords or resetting the category and location filters.
        </p>
        <Button 
          variant="primary" 
          size="md" 
          icon={RotateCcw} 
          onClick={onResetFilters}
          className="mx-auto"
        >
          Reset All Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {scholarships.map((s) => (
        <ScholarshipCard
          key={s.id}
          scholarship={s}
          isSaved={savedIds.includes(s.id)}
          onToggleSave={onToggleSave}
          onViewDetails={onViewDetails}
          onWhatsAppShare={onWhatsAppShare}
        />
      ))}
    </div>
  );
}
