// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-windicss', '@nuxtjs/strapi', '@nuxt/image-edge'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  strapi: {
    url: 'http://localhost:1337'
  }
})
