/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F0E6',
          dark: '#EFE6D8',
        },
        charcoal: {
          DEFAULT: '#252621',
          card: '#1D1E1A',
          border: '#383932',
        },
        'charcoal-text': '#292822',
        'muted-text': '#77736B',
        surface: {
          white: '#FFFDFC',
          beige: '#E5D5BE',
          'beige-light': '#EFE8DC',
          'beige-dark': '#DAC9B0',
        },
        orange: {
          accent: '#FF8A32',
          light: '#FFAA5C',
          dark: '#E57320',
        },
        border: {
          cream: '#DED4C5',
          dark: '#383A33',
        },
        amber: {
          50: '#FDFBF7',
          100: '#F5F0E6',
          200: '#E5D5BE',
          400: '#FFAA5C',
          500: '#FF8A32',
          600: '#E57320',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        gin: '24px',
        card: '22px',
        'card-lg': '24px',
        btn: '12px',
      },
      boxShadow: {
        subtle: '0 8px 30px rgba(40, 35, 25, 0.06)',
        card: '0 10px 32px rgba(35, 30, 20, 0.07)',
        glow: '0 0 0 1px rgba(255,138,50,0.15), 0 16px 40px -12px rgba(255,138,50,0.25)',
        soft: '0 12px 36px -12px rgba(40, 35, 25, 0.08)',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) scale(0.9)', opacity: '0' },
          '15%': { opacity: '1' },
          '100%': { transform: 'translateY(-90px) scale(1.05)', opacity: '0' },
        },
        popIn: {
          '0%': { transform: 'scale(0.92)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(24px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-24px)', opacity: '0' },
        },
      },
      animation: {
        floatUp: 'floatUp 1.4s ease-out forwards',
        popIn: 'popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards',
        pulseRing: 'pulseRing 1s ease-out forwards',
        slideInRight: 'slideInRight 0.32s ease-out forwards',
        slideOutLeft: 'slideOutLeft 0.24s ease-in forwards',
      },
    },
  },
  plugins: [],
}
