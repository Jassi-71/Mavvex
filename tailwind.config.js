const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#695CFF",
        hover:"#e1dff0",
        'cyan': colors.cyan,
        'teal': colors.teal
      },
      // backgroundImage: {
      //   'hero': "url('../src/images/ai.jpg')",
      // }
    },
  },
  plugins: [],
}