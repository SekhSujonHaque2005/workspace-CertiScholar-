import React from 'react';
import { Search, RotateCcw } from 'lucide-react';
import Button from '../common/Button';

export default function ScholarshipFilterBar({
  searchTerm = '',
  onSearchChange,
  selectedCategory = 'All',
  onCategoryChange,
  selectedLevel = 'All',
  onLevelChange,
  selectedLocation = 'All',
  onLocationChange,
  onReset,
  resultsCount = 0,
  searchInputRef,
}) {
  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200/90 mb-8 space-y-4">
      {/* Search Bar with Key Shortcut Indicator */}
      <div className="relative">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          ref={searchInputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          placeholder="Search by scheme name, university, or eligibility keywords... (Press / to focus)"
          className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 focus:bg-white transition"
        />
        <span className="hidden sm:inline-block absolute right-4 top-1/2 -translate-y-1/2 text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded-md font-mono">
          /
        </span>
      </div>

      {/* Dropdown Filters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange && onCategoryChange(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 cursor-pointer"
          >
            <option value="All">All Categories</option>
            <option value="Merit">Merit & Entrance</option>
            <option value="Need-Based">Need-Based (EWS)</option>
            <option value="Faculty Wards">Faculty & Teacher Wards</option>
            <option value="Research">Research & STEM</option>
            <option value="Diversity">Diversity & Leadership</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
            Education Level
          </label>
          <select
            value={selectedLevel}
            onChange={(e) => onLevelChange && onLevelChange(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 cursor-pointer"
          >
            <option value="All">All Education Levels</option>
            <option value="Undergraduate">Undergraduate (UG)</option>
            <option value="Postgraduate">Postgraduate (PG)</option>
            <option value="All Levels">All University Levels</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
            Location / Region
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange && onLocationChange(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 cursor-pointer"
          >
            <option value="All">All Locations</option>
            <option value="Punjab">Punjab (LPU Campus)</option>
            <option value="National">National (India)</option>
            <option value="International">International</option>
          </select>
        </div>

        <div className="flex items-end gap-2">
          <Button 
            variant="secondary" 
            size="md" 
            className="w-full h-[42px]"
          >
            {resultsCount} Available Schemes
          </Button>

          <button
            onClick={onReset}
            title="Reset Filters"
            className="h-[42px] px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
