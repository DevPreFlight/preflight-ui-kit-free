/**
 * DevPreFlight Flat UI Kit - Design Tokens
 * Structured, type-safe design tokens for React 19 & Tailwind CSS
 */

export const colors = {
  primary: {
    DEFAULT: '#2563eb', // blue-600
    hover: '#1d4ed8',   // blue-700
    active: '#1e40af',  // blue-800
    light: '#eff6ff',   // blue-50
    surface: '#dbeafe', // blue-100
    border: '#bfdbfe',  // blue-200
  },
  accent: {
    DEFAULT: '#0284c7', // sky-600
    hover: '#0369a1',   // sky-700
    light: '#f0f9ff',   // sky-50
    border: '#bae6fd',  // sky-200
  },
  neutral: {
    background: '#ffffff',
    surface: '#f8fafc',  // slate-50
    subtle: '#f1f5f9',   // slate-100
    muted: '#e2e8f0',    // slate-200
    border: '#cbd5e1',   // slate-300
    borderStrong: '#94a3b8', // slate-400
  },
  text: {
    primary: '#0f172a',   // slate-900 (≥ 12:1 contrast)
    secondary: '#334155', // slate-700 (≥ 8.2:1 contrast)
    muted: '#64748b',     // slate-500 (≥ 4.5:1 contrast)
    inverse: '#ffffff',
  },
  status: {
    success: {
      DEFAULT: '#16a34a',
      light: '#f0fdf4',
      border: '#bbf7d0',
      text: '#15803d',
    },
    warning: {
      DEFAULT: '#ea580c',
      light: '#fff7ed',
      border: '#fed7aa',
      text: '#c2410c',
    },
    danger: {
      DEFAULT: '#dc2626',
      light: '#fef2f2',
      border: '#fecaca',
      text: '#b91c1c',
    },
    info: {
      DEFAULT: '#2563eb',
      light: '#eff6ff',
      border: '#bfdbfe',
      text: '#1d4ed8',
    },
  },
} as const;

export const radius = {
  xs: '4px',
  sm: '6px',
  md: '10px',
  lg: '14px',
  xl: '16px',
  full: '9999px',
} as const;

export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
  sm: '0 2px 4px -1px rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
  md: '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
  lg: '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
  xl: '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
  brand: '0 4px 14px 0 rgba(37, 99, 235, 0.18)',
} as const;

export const typography = {
  fontSans: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  tracking: {
    tight: '-0.025em',
    normal: '0em',
    wide: '0.05em',
    wider: '0.08em',
  },
} as const;

export const transitions = {
  fast: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
  normal: '200ms cubic-bezier(0.16, 1, 0.3, 1)',
  smooth: '300ms cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

export const tokens = {
  colors,
  radius,
  shadows,
  typography,
  transitions,
} as const;

export type DesignTokens = typeof tokens;
export type ColorTokens = typeof colors;
export type RadiusTokens = typeof radius;
export type ShadowTokens = typeof shadows;
export type TypographyTokens = typeof typography;
export type TransitionTokens = typeof transitions;
