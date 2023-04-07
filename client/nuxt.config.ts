// https://nuxt.com/docs/api/configuration/nuxt-config
import gql from '@rollup/plugin-graphql'

export default defineNuxtConfig({
  modules: ['nuxt-windicss', '@nuxtjs/strapi', '@nuxt/image-edge'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          'http-equiv': 'Permissions-Policy',
          content: 'interest-cohort=()'
        }
      ]
    }
  },
  strapi: {
    url: 'http://localhost:1337'
  },
  vite: {
    plugins: [gql()]
  }
})
