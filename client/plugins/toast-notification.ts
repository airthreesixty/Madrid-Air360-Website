import Toast, { PluginOptions } from 'vue-toastification'

const options: PluginOptions = {
  position: 'top-center'
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options)
})
