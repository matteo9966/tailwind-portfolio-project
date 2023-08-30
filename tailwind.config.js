/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ['Roboto', "sans-serif"],
        yevesa: [ 'Yeseva One', 'cursive'],
      },
      colors: {
        primary:'#ed7f38',
        backgroundMain:'#151b19',
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        wide: "1440px",
      },
      backgroundImage:{
        hero:"url(assets/images/hero-bg.avif)",
        bigMoving:"url(assets/images/big-image-section.webp)",
        movingSquare:"url(assets/images/square-image.webp)",

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}