/** @type {import('tailwindcss').Config} */
// Design system extracted from HANDOFF_06_CSS_DESIGN_SYSTEM.md
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors (from HANDOFF_06)
        'primary': {
          DEFAULT: '#2563eb',
          'dark': '#1d4ed8',
          'light': '#3b82f6',
        },
        // Background colors
        'bg': {
          'dark': '#0f172a',
          'secondary': '#1e293b',
          'card': '#ffffff',
          'page': '#f8fafc',
        },
        // Status colors
        'status': {
          'success': '#10b981',
          'success-light': '#d1fae5',
          'warning': '#f59e0b',
          'warning-light': '#fef3c7',
          'danger': '#ef4444',
          'danger-light': '#fee2e2',
          'neutral': '#64748b',
        },
        // Text colors
        'text': {
          'primary': '#0f172a',
          'secondary': '#475569',
          'muted': '#94a3b8',
        },
        // Freshness status colors
        'freshness': {
          'current': '#10b981',
          'recent': '#f59e0b',
          'stale': '#ef4444',
          'unavailable': '#64748b',
        },
        // Direction colors
        'direction': {
          'bullish': '#10b981',
          'bearish': '#ef4444',
          'neutral': '#64748b',
        },
        // Border color
        'border': '#e2e8f0',
      },
      // Border radius (from HANDOFF_06)
      borderRadius: {
        'cia': '12px',
        'cia-sm': '8px',
      },
      // Box shadows (from HANDOFF_06)
      boxShadow: {
        'cia': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        'cia-lg': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      },
      // Font family (from HANDOFF_06)
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
