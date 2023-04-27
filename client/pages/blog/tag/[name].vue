<template>
  <main>
    <BlogPage :articles="articles" />
  </main>
</template>

<script setup lang="ts">
import { gql } from 'graphql-tag'

const graphql = useStrapiGraphQL()
const route = useRoute()
const router = useRouter()

const { data } = await useAsyncData(`tag-${route.params.name}`, () =>
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

const articles = data.value.data.articles.data.filter(article => article.attributes.category.data.attributes.title === route.params.name)

if (!data.value) {
  router.push('/blog')
}
</script>
