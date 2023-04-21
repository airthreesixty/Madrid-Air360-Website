import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faLinkedin, faInstagram, faYoutube, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faTwitter)
library.add(faLinkedin)
library.add(faInstagram)
library.add(faFacebook)
library.add(faYoutube)
library.add(faTiktok)
library.add(faLink)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FaIcon', FontAwesomeIcon)
})
