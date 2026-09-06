/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sun: '#F59E0B',
          yellow: '#FEF08A',
          blue: '#0284C7',
          sky: '#E0F2FE',
          green: '#10B981',
          mint: '#D1FAE5',
          coral: '#F97316',
          purple: '#8B5CF6',
          lavender: '#EDE9FE',
          pink: '#EC4899',
          cream: '#FFFBEB'
        }
      },
      fontFamily: {
        fun: ['Quicksand', 'Nunito', 'ui-rounded', 'sans-serif']
      },
      boxShadow: {
        'chunky': '0 6px 0 0 rgba(0,0,0,0.18)',
        'chunky-sm': '0 4px 0 0 rgba(0,0,0,0.16)',
        'chunky-pressed': '0 2px 0 0 rgba(0,0,0,0.18)',
        'card-pop': '0 12px 30px -10px rgba(0, 0, 0, 0.12)'
      },
      animation: {
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.75' },
        }
      }
    },
  },
  plugins: [],
}
