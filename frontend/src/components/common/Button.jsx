import React from 'react';

const VARIANTS = {
  primary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 active:scale-95',
  secondary: 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm active:scale-95',
  outline: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 active:scale-95',
  ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 active:scale-95',
  emerald: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 active:scale-95',
};

const SIZES = {
  sm: 'px-3 py-1.5 text-xs rounded-lg',
  md: 'px-4 py-2 text-xs sm:text-sm rounded-xl font-bold',
  lg: 'px-6 py-3.5 text-sm sm:text-base rounded-xl font-extrabold',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  disabled = false,
}) {
  const variantClass = VARIANTS[variant] || VARIANTS.primary;
  const sizeClass = SIZES[size] || SIZES.md;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 transition duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantClass} ${sizeClass} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
