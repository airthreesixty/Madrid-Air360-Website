// https://nuxt.com/docs/api/configuration/nuxt-config
import gql from '@rollup/plugin-graphql'

export default defineNuxtConfig({
  modules: ['nuxt-windicss', '@nuxtjs/strapi', '@nuxt/image-edge', '@nuxt/content', '@nuxtjs/algolia'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    instantSearch: {
      theme: 'satellite'
    },
    docSearch: {
      indexName: process.env.ALGOLIA_DOCSEARCH_INDEX_NAME
    },
    crawler: {
      apiKey: process.env.ALGOLIA_WRITE_API_KEY ?? '',
      indexName: process.env.ALGOLIA_DOCSEARCH_INDEX_NAME ?? '',
      meta: ['title', 'description'],
      include: [/\/blog/g]
    }
  },
  runtimeConfig: {
    public: {
      algoliaSearchApiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      algoliaApplicationId: process.env.ALGOLIA_APPLICATION_ID,
      algoliaDocsearchIndexName: process.env.ALGOLIA_DOCSEARCH_INDEX_NAME
    }
  },
  strapi: {
    url: 'http://localhost:1337'
  },
  vite: {
    plugins: [gql()]
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons'
    ],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/css/main.css'
  ]
})
