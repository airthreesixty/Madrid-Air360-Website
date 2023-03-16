// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-windicss', '@nuxtjs/strapi', '@nuxtjs/apollo'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  strapi: {
    url: 'http://localhost:1337'
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    }
  }
})
