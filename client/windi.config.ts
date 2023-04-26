import { defineConfig } from 'windicss/helpers'
// import colors from 'windicss/colors'

export default defineConfig({
  plugins: [require('windicss/plugin/typography'), require('flowbite/plugin-windicss')],
  theme: {
    fontFamily: {
      sans: [
        'Montserrat',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'sans-serif'
      ]
    },
    extend: {
      colors: {
        primary: {
          600: '#056AFE'
        },
        secondary: {
          600: '#6278DF'
        },
        black: {
          600: '#6F727B',
          700: '#232E4A'
        },
        gray: {
          600: '#FAFAFA'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              a: {
                'text-decoration': 'none',
                color: '#6278DF'
              }
            },
            color: '#232e4a'
          }
        }
      }
    }
  }
})
