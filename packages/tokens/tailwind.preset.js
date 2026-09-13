/**
 * DevPreFlight Tailwind CSS Preset
 * Plug-and-play theme extensions for Tailwind CSS projects.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        preflight: {
          blue: {
            DEFAULT: '#2563eb',
            hover: '#1d4ed8',
            active: '#1e40af',
            light: '#eff6ff',
            surface: '#dbeafe',
            border: '#bfdbfe',
          },
          accent: {
            DEFAULT: '#0284c7',
            hover: '#0369a1',
            light: '#f0f9ff',
            border: '#bae6fd',
          },
          bg: {
            main: '#ffffff',
            surface: '#f8fafc',
            subtle: '#f1f5f9',
            muted: '#e2e8f0',
          },
          text: {
            primary: '#0f172a',
            secondary: '#334155',
            muted: '#64748b',
            inverse: '#ffffff',
          },
          border: {
            light: '#e2e8f0',
            medium: '#cbd5e1',
            strong: '#94a3b8',
          },
          status: {
            success: '#16a34a',
            'success-light': '#f0fdf4',
            warning: '#ea580c',
            'warning-light': '#fff7ed',
            danger: '#dc2626',
            'danger-light': '#fef2f2',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        md: '0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
        lg: '0 10px 15px -3px rgba(15, 23, 42, 0.07), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
        blue: '0 4px 14px 0 rgba(37, 99, 235, 0.15)',
      },
    },
  },
};
