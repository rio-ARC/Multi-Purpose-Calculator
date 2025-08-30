module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#3B82F6", // blue-500
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#6366F1", // indigo-500
          50: "#EEF2FF", // indigo-50
          100: "#E0E7FF", // indigo-100
          200: "#C7D2FE", // indigo-200
          300: "#A5B4FC", // indigo-300
          400: "#818CF8", // indigo-400
          500: "#6366F1", // indigo-500
          600: "#4F46E5", // indigo-600
          700: "#4338CA", // indigo-700
          800: "#3730A3", // indigo-800
          900: "#312E81", // indigo-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          200: "#A7F3D0", // emerald-200
          300: "#6EE7B7", // emerald-300
          400: "#34D399", // emerald-400
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          900: "#064E3B", // emerald-900
        },
        // Background Colors
        background: "#0F172A", // slate-900
        surface: {
          DEFAULT: "#1E293B", // slate-800
          light: "#334155", // slate-700
          lighter: "#475569", // slate-600
        },
        // Text Colors
        text: {
          primary: "#F8FAFC", // slate-50
          secondary: "#94A3B8", // slate-400
          muted: "#64748B", // slate-500
        },
        // Status Colors
        success: {
          DEFAULT: "#22C55E", // green-500
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#22C55E", // green-500
          600: "#16A34A", // green-600
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-sm': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }], // 30px
        'display-md': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '600' }], // 36px
        'display-lg': ['3rem', { lineHeight: '3.5rem', fontWeight: '700' }], // 48px
        'display-xl': ['3.75rem', { lineHeight: '4rem', fontWeight: '700' }], // 60px
      },
      boxShadow: {
        'calculator': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'calculator-lg': '0 4px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft': '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'calculator': '8px',
        'button': '4px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-out': 'slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 0.2s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      transitionTimingFunction: {
        'calculator': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'calculator': '8px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-calculator': {
          transition: 'all 200ms ease-out',
        },
        '.transition-tab': {
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.border-subtle': {
          borderColor: 'rgba(148, 163, 184, 0.1)',
        },
        '.border-subtle-light': {
          borderColor: 'rgba(148, 163, 184, 0.2)',
        },
        '.text-display': {
          fontFamily: 'JetBrains Mono, monospace',
          fontFeatureSettings: '"tnum"',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}