<template>
  <main>
    <BlogPage :articles="articlesData" />
  </main>
</template>

<script setup lang="ts">
import { articlesQuery } from '~/graphql/queries'
// const { data } = await useAsyncData('blog', () =>
//   queryContent('blog')
//     .only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc'])
//     .sort({ published: -1 })
//     .find()
// )
// console.log(data)

const graphql = useStrapiGraphQL()
const { data } = await graphql(articlesQuery)
const articlesData = data.articles.data
</script>
