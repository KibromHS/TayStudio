/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(to bottom, rgba(28, 33, 87, 0.5), rgba(28, 33, 87, 0.5)), url('./img/home.png');",
      },
      height: {
        'full': '100vh'
      },
      fontFamily: {
        'kaushan': 'Kaushan Script',
        'litsans': 'LitSans'
      },
      width: {
        'kb': '300rem'
      }
    },
  },
  plugins: [],
}

