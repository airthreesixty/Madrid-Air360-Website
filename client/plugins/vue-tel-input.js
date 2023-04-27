// eslint-disable-next-line import/no-named-as-default
import VueTelInput from 'vue-tel-input'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTelInput)
})
