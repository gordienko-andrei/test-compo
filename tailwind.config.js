/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gotham': ['Gotham', 'sans-serif'],
      },
    },
  },
  plugins: [],
}