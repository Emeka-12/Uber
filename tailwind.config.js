/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        font: ['Overpass'],
      },
    },
  },
  plugins: [require("daisyui")],
}