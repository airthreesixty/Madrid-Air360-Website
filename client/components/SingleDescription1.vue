<template>
  <section class="bg-white dark:bg-gray-900" :style="`background-image: url(${media1});`">
    <div class="grid px-4 pt-12 pb-6 mx-auto md:gap-8 lg:gap-12 md:py-38 md:grid-cols-12">
      <div class="flex justify-start mb-10 md:col-span-5 md:items-center">
        <nuxt-img :src="media2" alt="mockup" format="webp" class="h-40 lg:h-50" />
      </div>
      <div class="mr-auto place-self-center md:col-span-7 lg:pr-6">
        <h1 class="text-white mb-4 pr-4 text-2xl md:text-4xl tracking-wide font-bold xl:text-6xl dark:text-white">
          {{ descriptionData.title }}
        </h1>
        <p class="max-w-2xl mb-6 font-light tracking-wide text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          {{ descriptionData.subTitle }}
        </p>
        <p class="max-w-2xl mb-6 font-light tracking-wide text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          {{ descriptionData.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { air360DescriptionQuery } from '~~/graphql/queries'
const graphql = useStrapiGraphQL()

const { data } = await graphql(air360DescriptionQuery)
const descriptionData = data.page.data.attributes.blocks[2]
const media1 = useStrapiMedia(descriptionData.image.data[0].attributes.url)
const media2 = useStrapiMedia(descriptionData.image.data[1].attributes.url)
</script>
