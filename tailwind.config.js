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
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.8, 0, 1, 1)',
        'out-expo': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      keyframes: {
        'more': {
            '0%, 100%': {
              transform: 'translateX(25%)',
            },
            '50%': {
              transform: 'translateX(0)',
            },
        },
        'avos': {
            '0%': {
              transform: 'translate(-25%)',
            },
            '25%': {
              transform: 'translate(-25%, 25%)',
            },
            '50%': {
              transform: 'translate(0%, 25%)',
            },
            '75%': {
              transform: 'translate(0%, 0%)',
            },
            '100%': {
              transform: 'translate(-25%)',
            },
        },
        'slide': {
          '0%': {
            scale: '0',
          },
          '100%': {
            scale: '1',
          }
        }
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'more': 'more 1s linear infinite',
        'space': 'avos 3s ease-in infinite',
        'swosh': 'slide 1s ease-in 1'
      },
    },
  },
  plugins: [],
}
