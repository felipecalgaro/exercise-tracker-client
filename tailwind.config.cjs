/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'black-custom': '#090909',
        'red-custom': '#ec4b4b',
        'light-yellow': '#ecb833',
        'dark-yellow': '#cbad10',
        'light-green': '#17c73e',
        'dark-green': '#17680a',
        'purple-custom': '#390c5b',
        'orange-custom': '#cb5a08',
      },
      fontFamily: {
        'roboto': 'Roboto'
      }
    },
  },
  plugins: [],
}
