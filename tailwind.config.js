/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/index.html', 
    './dist/index.js',
    './dist/route.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(to bottom, rgba(28, 33, 77, 0.75), rgba(28, 33, 77, 0.75))",
      },
      height: {
        'full': '100vh',
        'full-l': '120vh',
        'kb': '22rem',
        'kb-l': '300px',
        'kb-full': '100%'
      },
      fontFamily: {
        'kaushan': 'Kaushan Script',
        'litsans': 'LitSans',
        'poppins': 'Poppins',
        'roboto': 'Roboto Flex'
      },
      width: {
        'kb-h': '22rem',
        'kb': '500%',
        'kb-l': '600px',
        '1/3': '29.333333%'
      },
      fontSize: {
        'kb-s': '0.5rem'
      },
      colors: {
        'red-kb': '#FF0013',
        'blue-kb': '#1C2157',
        'gray-kb': '#F2F3F5',
        'darkgray-kb': '#8A8484',
        'darkgray-100-kb': '#979797',
        'input-kb': '#E2E2E3',
        'contact-icon': '#CECED2'
      },
      letterSpacing: {
        'kb-l': '6px',
        'kb-xl': '8px',
        'kb-m': '4px'
      },
      boxShadow: {
        'kb': '-1rem 1rem'
      },
      inset: {
        'kb': '1370px'
      },
      borderRadius: {
        'kb': '65px'
      },
      gridTemplateColumns: {
        'kb': '1fr 1fr 1fr'
      },
      margin: {
        'kb': '32rem'
      }
    },
  },
  plugins: [
  ],
}

