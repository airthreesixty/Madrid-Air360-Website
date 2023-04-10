<template>
  <section class="filter brightness-115 pb-4" style="background-image: linear-gradient(30deg, #6278DF 0%, #3DDC97 100%);">
    <div class="py-8 px-5 mx-auto max-w-screen-xl py-14 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h2 class="mb-9 text-2xl tracking-wide font-bold text-white dark:text-white">
          {{ ctaData.text }}
        </h2>
        <NuxtLink
          :to="ctaData.button.href"
          class="text-primary-600 bg-white font-bold rounded-lg text-base px-4 py-4 mb-2 focus:outline-none"
        >
          {{ ctaData.button.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ctaQuery } from '~~/graphql/queries'

const graphql = useStrapiGraphQL()
const { data } = await graphql(ctaQuery)
const ctaData = data.page.data.attributes.blocks[6]
console.log(ctaData.button)
</script>
