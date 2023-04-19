<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css',
      body: true
    }
  ],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js',
      body: true
    }
  ]
})
</script>
