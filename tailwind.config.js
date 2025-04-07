/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'police-blue': {
          DEFAULT: '#1e40af', // Richer blue
          light: '#3b82f6',   // Brighter blue
          dark: '#1e3a8a',    // Darker blue for contrast
        },
        'accent': {
          DEFAULT: '#dc2626', // Police red
          light: '#ef4444',
          dark: '#b91c1c',
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};