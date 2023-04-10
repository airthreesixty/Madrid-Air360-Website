<template>
  <section class="bg-white dark:bg-gray-900" :style="`background-image: url(${mediaBg})`">
    <div class="gap-8 items-center py-8 px-5 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <div class="flex justify-center md:hidden">
        <nuxt-img format="webp" class="w-2/3" :src="mediaHeadShot" alt="dashboard image" />
      </div>
      <div class="mt-4 flex flex-col items-center md:mt-0">
        <p class="border-deco mb-4 text-center tracking-wide text-2xl md:text-4xl font-bold text-black-600 dark:text-white">
          {{ testimonialData.quote }}
        </p>
        <p class="mb-6 text-xl font-bold tracking-wide text-black-600 dark:text-gray-400">
          {{ testimonialData.name }}
        </p>
        <p class="mb-8 text-xl font-light tracking-wide text-black-600 dark:text-gray-400">
          {{ testimonialData.role }}
        </p>
        <nuxt-img format="webp" class="w-[110px] mb-10 filter brightness-100 contrast-100 saturate-0 blur-0 hue-rotate-0" :src="mediaLogo" />
      </div>
      <nuxt-img format="webp" class="hidden md:block md:w-75 lg:w-100" :src="mediaHeadShot" alt="dashboard image" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { testimonialQuery } from '~~/graphql/queries'

const graphql = useStrapiGraphQL()
const { data } = await graphql(testimonialQuery)
const testimonialData = data.page.data.attributes.blocks[5]

const mediaHeadShot = useStrapiMedia(testimonialData.images.data[0].attributes.url)
const mediaLogo = useStrapiMedia(testimonialData.images.data[1].attributes.url)
const mediaBg = useStrapiMedia(testimonialData.images.data[2].attributes.url)
</script>

<style lang="postcss">
.border-deco {
  @apply after:content-[''] flex flex-col items-center after:block after:w-20 after:h-[5px] after:rounded-[7px] after:static after:mt-11 after:mb-6 after:bg-black-600;
}
</style>
