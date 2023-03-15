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
    }
  }
})
