/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(to bottom, rgba(28, 33, 87, 0.65), rgba(28, 33, 87, 0.65)), url('./img/home.png');",
      },
      height: {
        'full': '100vh',
        'kb': '22rem',
        'kb-l': '300px'
      },
      fontFamily: {
        'kaushan': 'Kaushan Script',
        'litsans': 'LitSans'
      },
      width: {
        'kb': '300rem',
        'kb-l': '600px'
      },
      fontSize: {
        'kb-s': '0.5rem'
      },
      colors: {
        'red-kb': '#FF0013'
      }
    },
  },
  plugins: [],
}

