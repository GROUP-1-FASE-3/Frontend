/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'stay-primary': '#152C5B',
      'stay-secondary': '#3252DF',
      'stay-grey': '#B0B0B0',
      'bg-stay': '#F5F5F5',
      'black': '#000000',
      'white': '#ffffff',
      'yellow-star': '#FF9900'
    },
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'login-pattern': 'url("/images/login_banner.jpg")',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms')
  ],
}
