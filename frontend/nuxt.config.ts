// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-windicss', '@nuxtjs/strapi'],
  strapi: {
    url: 'http://localhost:1337'
  }
})
