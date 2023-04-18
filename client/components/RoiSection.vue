<template>
  <section class="bg-white px-5" :style="`background-image: url(${bgMedia});`">
    <div class="gap-8 items-center py-8 mx-auto max-w-screen-[1400px] lg:gap-16 md:flex md:justify-center sm:py-16 lg:px-6">
      <div class="">
        <nuxt-img class="w-50 md:w-65" :src="media" format="webp" alt="dashboard image" />
      </div>
      <div class="mt-4 md:mt-0">
        <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {{ roiData.title }}
        </h2>
        <p class="mb-6 font-light text-gray-500 md:text-lg">
          {{ roiData.description }}
        </p>
        <NuxtLink :to="roiData.button.href" :target="roiData.button.target" class="text-white text-center bg-primary-600 text-base flex justify-center items-center font-bold w-full mt-5 transition ease-in-out duration-300 hover:bg-primary-700 rounded-lg px-6 py-3 mr-2 mb-2 md:w-1/2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          {{ roiData.button.label }}
        </NuxtLink>
      </div>
    </div>
    <div class="py-5 md:pb-15 flex justify-center">
      <p class="text-center tracking-wide text-2xl lg:text-4xl font-bold max-w-screen-lg bg-gradient-to-r from-[#E74B91] via-[#2245F5] to-[#6278DF] bg-clip-text text-transparent">
        {{ roiData.message }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { roiQuery } from '~~/graphql/queries'

const graphql = useStrapiGraphQL()
const { data } = await graphql(roiQuery)
const roiData = data.page.data.attributes.blocks[2]
const media = useStrapiMedia(roiData.images.data[0].attributes.url)
const bgMedia = useStrapiMedia(roiData.images.data[1].attributes.url)
</script>
