/**
 * Premium Theme Configuration for HotelOps
 * This file defines the advanced theme used across the application
 */

export const premiumTheme = {
  colors: {
    primary: '#1e40af', // Deep blue
    primaryLight: '#3b82f6', // Light blue
    primaryDark: '#1e3a8a', // Darker blue
    secondary: '#0891b2', // Cyan
    accent: '#f59e0b', // Amber
    success: '#10b981', // Emerald
    warning: '#f59e0b', // Amber
    error: '#ef4444', // Red
    info: '#3b82f6', // Blue
    background: '#ffffff',
    backgroundAlt: '#f8fafc',
    text: '#0f172a',
    textLight: '#64748b',
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
  },

  fonts: {
    heading: "'Inter', 'Segoe UI', sans-serif",
    body: "'Inter', 'Segoe UI', sans-serif",
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },

  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },

  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    none: 'none',
  },

  transitions: {
    fast: 'all 0.15s ease-in-out',
    base: 'all 0.3s ease-in-out',
    slow: 'all 0.5s ease-in-out',
  },

  gradients: {
    primary: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    secondary: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    accent: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    success: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
  },
};

export const buttonVariants = {
  primary: {
    bg: 'bg-blue-600',
    text: 'text-white',
    hover: 'hover:bg-blue-700',
    active: 'active:bg-blue-800',
    disabled: 'disabled:bg-slate-300 disabled:cursor-not-allowed',
  },
  secondary: {
    bg: 'bg-slate-100',
    text: 'text-slate-900',
    hover: 'hover:bg-slate-200',
    active: 'active:bg-slate-300',
    disabled: 'disabled:bg-slate-200 disabled:cursor-not-allowed',
  },
  outline: {
    bg: 'bg-transparent',
    text: 'text-blue-600',
    border: 'border-2 border-blue-600',
    hover: 'hover:bg-blue-50',
    active: 'active:bg-blue-100',
    disabled: 'disabled:border-slate-300 disabled:text-slate-300 disabled:cursor-not-allowed',
  },
};

export const cardVariants = {
  elevated: 'bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow',
  flat: 'bg-white rounded-xl border border-slate-200',
  outline: 'rounded-xl border-2 border-slate-200',
  ghost: 'rounded-xl',
};

export const gradientBg = {
  primary: 'bg-gradient-to-br from-blue-50 to-cyan-50',
  secondary: 'bg-gradient-to-br from-slate-50 to-blue-50',
  accent: 'bg-gradient-to-br from-amber-50 to-orange-50',
};
