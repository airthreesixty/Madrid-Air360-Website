<template>
  <nuxt-link
    to="/blog"
    class="tag__link"
  >
    All
  </nuxt-link>
  <nuxt-link
    v-for="tag in tagList"
    :key="tag"
    :to="`/blog/tag/${tag}`"
    class="tag__link"
  >
    {{ tag }}
  </nuxt-link>
</template>

<script setup lang="ts">
const tagList = ['marketing', 'ux', 'e-commerce', 'data', 'other']
</script>

<style scoped lang="postcss">
.tag__link {
  @apply py-3 px-5 mt-5 inline-block text-base lg:text-lg bg-blue-100 text-blue-400 font-semibold rounded mx-2;
}

.router-link-exact-active {
  @apply text-white bg-blue-400;
}
</style>
