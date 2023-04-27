<template>
  <main>
    <BlogPage :articles="articlesData" />
  </main>
</template>

<script setup lang="ts">
import { gql } from 'graphql-tag'

const graphql = useStrapiGraphQL()

const { data } = await useAsyncData('all-articles', () =>
  graphql(gql`
query {
articles(sort: "publishedAt:desc", pagination: { limit: 100 }) {
    data {
      id
      attributes {
        publishedAt
        readingTime
        title
        content
        href
        category {
data {
            attributes {
              title
            }
          }
        }
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`)
)

const articlesData = computed(() => data.value.data.articles.data)
console.log(data)
</script>
