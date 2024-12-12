/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBackground: '#FFF9F4',
        titlecolor1: '#a4bb46',
        titlecolor2: '#363958',
        titlecolorres1: '#FA804C',
        navfontcolor: '#3C3C3C',
        productimgbg: '#F1F1F1',
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'], // Defining custom font family
      },
    },
  },
  plugins: [],
}

