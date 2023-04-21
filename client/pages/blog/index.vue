<template>
  <main>
    <BlogPage :articles="data" />
  </main>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('blog', () =>
  queryContent('blog')
    .only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc'])
    .sort({ published: -1 })
    .find()
)
</script>
