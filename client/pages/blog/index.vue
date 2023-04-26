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
articles {
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
</script>
