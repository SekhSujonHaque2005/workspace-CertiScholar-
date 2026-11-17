import React from 'react';

const VARIANTS = {
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  amber: 'bg-amber-50 text-amber-700 border-amber-200/80',
  slate: 'bg-slate-100 text-slate-700 border-slate-200',
  teal: 'bg-teal-50 text-teal-700 border-teal-200/80',
};

export default function Badge({ children, variant = 'slate', icon: Icon, className = '' }) {
  const variantStyles = VARIANTS[variant] || VARIANTS.slate;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border tracking-wide uppercase ${variantStyles} ${className}`}>
      {Icon && <Icon className="w-3 h-3 shrink-0" />}
      {children}
    </span>
  );
}
