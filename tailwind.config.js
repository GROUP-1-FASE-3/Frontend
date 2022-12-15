/**@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600&display=swap');

 *  @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'stay-primary': '#152C5B',
      'stay-secondary': '#3252DF',
      'stay-grey': '#B0B0B0',
      'bg-stay': '#F5F5F5',
      black: '#000000',
      white: '#ffffff',
    },
    // fontSize: {
    //   xs: ['12px', '15px'],
    //   sm: ['14px', '18px'],
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
    // },
    textColor: {
      primary: '#152C5B',
      secondary: '#B0B0B0',
      black: '#000000',
      white: '#ffffff',
      'yellow-star': '#FF9900',
      error: '#ff0a1f',
    },
    // screens: {
    //   xs: '300px',
    // },
    screens: {
      xs: '300px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'login-pattern': 'url("/images/login_banner.jpg")',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
};
