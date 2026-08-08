import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0E8F6F',
          dark: '#0B6E56',
          light: '#DDF1EA',
        },
        gold: '#C8A35F',
        ink: '#061A14',
        surface: '#F9FAFB',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(17, 24, 39, 0.04), 0 8px 24px -8px rgba(17, 24, 39, 0.10)',
        lift: '0 20px 40px -16px rgba(4, 120, 87, 0.35)',
      },
      backgroundImage: {
        'growth-line': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='120' viewBox='0 0 400 120'%3E%3Cpath d='M0 100 L60 80 L120 90 L180 55 L240 65 L300 25 L360 35 L400 5' stroke='%230E8F6F' stroke-width='2' fill='none' opacity='0.15'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drawline: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        drawline: 'drawline 2s ease-out forwards',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [
    // By default Tailwind's `hover:` compiles to plain CSS `:hover`, which on
    // touchscreens causes the well-known "first tap only hovers, second tap
    // actually clicks" problem — exactly what stops single-tap navigation
    // from working anywhere a link has hover: styling (which is everywhere
    // in the nav). This redefines `hover:` to only apply on devices that
    // genuinely support hovering (mouse/trackpad), so touch always gets a
    // normal, single-tap click.
    plugin(({ addVariant }) => {
      addVariant('hover', '@media (hover: hover) and (pointer: fine) { &:hover }')
    }),
  ],
}