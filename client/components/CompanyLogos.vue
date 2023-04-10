<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-10 lg:py-16 mx-auto max-w-screen-[1400px] max-w-screen-xl px-5">
      <h2 class="mb-8 md:mb-12 lg:mb-16 text-2xl font-bold tracking-wide text-center text-black-700 dark:text-white">
        {{ companyLogosData.title }}
      </h2>
      <div class="grid grid-cols-1 gap-10 lg:gap-6 text-gray-500 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
        <div v-for="(logo, index) in logos" :key="index" class="flex justify-center items-center">
          <nuxt-img :src="logo" class="h-8 md:h-7 lg:h-6 object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { companyLogosQuery } from '~~/graphql/queries'

const graphql = useStrapiGraphQL()
const { data } = await graphql(companyLogosQuery)
const companyLogosData = data.page.data.attributes.blocks[7]

const logos = companyLogosData.logos.data.map((logo: { attributes: { url: string } }) => {
  return useStrapiMedia(logo.attributes.url)
})

</script>
