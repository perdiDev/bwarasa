/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      sans: ['Fredoka', 'sans-serif']
    },    
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'secondary': '#F2CB67',
        'primary': '#E3AA18',
        'greyness': '#444341',
      },
    },
  },
  plugins: [],
}
