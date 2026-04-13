/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: '#FFF8F0',
          100: '#FFE8D6',
          200: '#FFD1B3',
          300: '#FFB58C',
          400: '#FF9966',
          500: '#FF7F33',
          600: '#E66600',
          700: '#CC5200',
          800: '#993D00',
          900: '#662900',
        },
        maple: {
          50: '#FFF5F0',
          100: '#FFE0D0',
          200: '#FFC0A3',
          300: '#FFA076',
          400: '#FF804D',
          500: '#FF6020',
          600: '#E64D1A',
          700: '#CC3A14',
          800: '#992A0F',
          900: '#661A0A',
        },
        gold: {
          50: '#FFF8E6',
          100: '#FFE8CC',
          200: '#FFD199',
          300: '#FFB566',
          400: '#FF9933',
          500: '#FF8000',
          600: '#E66600',
          700: '#CC5200',
          800: '#993D00',
          900: '#662900',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
