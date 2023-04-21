<template>
  <main>
    <BlogPage :articles="data" />
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData(`tag-${route.params.name}`, () => queryContent('blog').where({ tags: { $contains: route.params.name } }).sort({ published: -1 }).only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc']).find())

if (!data.value) {
  router.push('/blog')
}
</script>
