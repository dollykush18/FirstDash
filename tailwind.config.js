/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
    },
    extend: {
      colors: {
        // Change the brand accent here and the whole site follows.
        brand: {
          50: '#f3f1ff',
          100: '#e9e5ff',
          200: '#d5cdff',
          300: '#b9a9ff',
          400: '#9878ff',
          500: '#7c4dff',
          600: '#6d33f5',
          700: '#5c23d8',
          800: '#4c1eb0',
          900: '#3f1c8c',
        },
        ink: {
          950: '#05030f',
          900: '#0a0718',
          850: '#0f0b22',
          800: '#141029',
          700: '#1c1735',
          600: '#272044',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(15, 11, 34, 0.18)',
        card: '0 20px 60px -24px rgba(15, 11, 34, 0.25)',
        glow: '0 24px 80px -20px rgba(124, 77, 255, 0.55)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7c4dff 0%, #9878ff 50%, #6d33f5 100%)',
        'brand-text': 'linear-gradient(100deg, #b9a9ff 0%, #9878ff 40%, #7c4dff 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
