import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faLinkedin, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faTwitter)
library.add(faLinkedin)
library.add(faInstagram)
library.add(faYoutube)
library.add(faTiktok)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FaIcon', FontAwesomeIcon)
})
