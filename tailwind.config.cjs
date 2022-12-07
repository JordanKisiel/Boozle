/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/data/*",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    screens: {
      'sm': '550px',
      'md': '750px',
      'lg': '1000px',
    },
    extend: {
      fontFamily: {
        'sans': ['PT Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        violet: {
          200: '#C276E8',
          300: '#D33CCB',
        },
        orange: {
          300: '#E0885C',
        },
        pink: {
          300: '#C94F6A',
        },
        gray: {
          300: '#8D98A5',
          600: '#636363',
          700: '#4A4A4A',
        },
        blue: {
          100: '#3C5067',
          300: '#212c38',
          600: '#131B23',
          900: '#0A0E13',
        },
      },
      dropShadow: {
        'xl': '0 2px 1px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [],
}
