/**@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600&display=swap');

 *  @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
<<<<<<< HEAD
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
=======
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
>>>>>>> d59e9420c010f60aa5462fcadce3e35fba332ac8
  theme: {
    colors: {
      'stay-primary': '#152C5B',
      'stay-secondary': '#3252DF',
      'stay-grey': '#B0B0B0',
      'bg-stay': '#F5F5F5',
<<<<<<< HEAD
      black: '#000000',
      white: '#ffffff',
    },
    fontSize: {
      xs: ['12px', '15px'],
      sm: ['14px', '18px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    textColor: {
      primary: '#152C5B',
      secondary: '#B0B0B0',
    },
    screens: {
      xs: '300px',
=======
      'black': '#000000',
      'white': '#ffffff',
      'yellow-star': '#FF9900',
      'error' : '#ff0a1f',
    },
    screens: {
      'xs': '300px',
>>>>>>> d59e9420c010f60aa5462fcadce3e35fba332ac8
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'login-pattern': 'url("/images/login_banner.jpg")',
      },
    },
  },
<<<<<<< HEAD
  plugins: [require('daisyui')],
};
=======
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms')
  ],
}
>>>>>>> d59e9420c010f60aa5462fcadce3e35fba332ac8
