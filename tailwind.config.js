/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      'primary-color': '#00e600',
      'secondary-color': '#1a53ff',
      'ternary-color': '#f5f505',
      'light-green': '#98f5af',
      'light-blue': '#2370eb',
    },
    screens: {
      'mobile-s': '320px',
      mobile: '815px',
      tablet: '1340px',
    },
    extend: {},
  },
  plugins: [],
};
