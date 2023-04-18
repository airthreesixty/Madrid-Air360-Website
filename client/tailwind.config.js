/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
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
        }
      }
    }
  },
  plugins: []
}
