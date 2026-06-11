import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ─── Brand ──────────────────────────────────────────────
        navy: {
          50:  '#e8edf3',
          100: '#c5d0de',
          200: '#9fb0c7',
          300: '#7890b0',
          400: '#597b9f',
          500: '#3b668e',
          600: '#2a5280',
          700: '#1a3f6e',
          800: '#0C3057',  // PRIMARY
          900: '#071e38',
          950: '#030f1d',
        },
        sky: {
          50:  '#f0f9fe',
          100: '#d9f0fb',
          200: '#b8e4f7',
          300: '#8cd4f2',
          400: '#6EC1E4',  // ACCENT
          500: '#44aedb',
          600: '#2a97cc',
          700: '#2180b0',
          800: '#1d6990',
          900: '#185878',
          950: '#0f3a52',
        },
        // ─── Semantic ────────────────────────────────────────────
        alert: {
          red:    '#DC2626',
          amber:  '#D97706',
          green:  '#16A34A',
        },
        // ─── Neutral ─────────────────────────────────────────────
        slate: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        display: ['var(--font-bricolage)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Fluid type scale
        xs: ['1rem', { lineHeight: '1.75rem' }],
        'display-2xl': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-xl':  ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-lg':  ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md':  ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'display-sm':  ['clamp(1.25rem, 2.5vw, 1.625rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-sky': '0 0 40px -10px rgba(110, 193, 228, 0.4)',
        'glow-navy': '0 0 40px -10px rgba(12, 48, 87, 0.4)',
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(110, 193, 228, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 12px rgba(110, 193, 228, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(110, 193, 228, 0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
