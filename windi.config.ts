import { defineConfig } from 'windicss/helpers'
// import colors from 'windicss/colors'

export default defineConfig({
  plugins: [require('windicss/plugin/typography')],
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
        }
      }
    }
  }
})
