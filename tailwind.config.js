/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#D9628D',
        secondary: '#8C3F5B',
        accent: '#F2ACCD',
        highlight: '#8BCAD9',
        light: '#F2F2F2',
      },
    },
  },
  plugins: [],
};

