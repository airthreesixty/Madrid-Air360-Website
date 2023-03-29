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
    url: 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  }
  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: 'http://localhost:1337/graphql'
  //     }
  //   }
  // }
})
