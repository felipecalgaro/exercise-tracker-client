/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'black-custom': '#090909',
        'light-red': '#ec4b4b',
        'dark-red': '#8A2929',
        'light-yellow': '#ecb833',
        'dark-yellow': '#635409',
        'light-green': '#17c73e',
        'dark-green': '#17680a',
        'purple-custom': '#390c5b',
        'dark-orange': '#cb5a08',
        'light-orange': '#cb9710',
      },
      fontFamily: {
        'roboto': 'Roboto'
      },
      boxShadow: {
        'custom': '2px 2px 12px 6px rgba(0, 0, 0, 0.25)'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-24rem)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        slide: 'slide .3s ease-out'
      },
      screens: {
        'xs': '360px'
      }
    },
  },
  plugins: [],
}
