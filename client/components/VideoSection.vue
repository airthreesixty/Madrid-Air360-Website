<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="px-5 pt-8 mx-auto max-w-screen-[1400px] text-center lg:py-16 lg:px-12" :style="`background-image: url(${bgImage})`">
      <h1 class="mb-4 lg:mb-10 text-2xl font-bold tracking-wide text-black-700 md:text-3xl dark:text-white tracking-tight">
        {{ videoSectionData.title }}
      </h1>
      <div class="wistia_responsive_padding mx-auto md:w-9/12 lg:w-8/12" style="padding:56.25% 0 0 0;position:relative;">
        <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
          <iframe
            src="https://fast.wistia.net/embed/iframe/uzru2drtmd?videoFoam=true"
            title="Air360 by Scalefast Creating Conversion Rate Heroes Video"
            allow="autoplay; fullscreen"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            class="wistia_embed"
            name="wistia_embed"
            msallowfullscreen
            width="100%"
          />
        </div>
      </div>
      <h2 class="text-2xl md:text-4xl tracking-wide mt-10 md:-mt-12 lg:-mt-25 mb-6 font-bold bg-gradient-to-r from-[#E74B91] via-[#2245F5] to-[#6278DF] bg-clip-text text-transparent sm:px-16 xl:px-48 dark:text-gray-400">
        {{ videoSectionData.subTitle }}
      </h2>
      <div class="mb-8 font-light text-gray-500 md:text-base lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" v-html="videoSectionData.description" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { videoSectionQuery } from '~~/graphql/queries'

const graphql = useStrapiGraphQL()
const { data } = await graphql(videoSectionQuery)

const videoSectionData = data.page.data.attributes.blocks[0]
const bgImage = useStrapiMedia(videoSectionData.bgImage.data[0].attributes.url)

useHead({
  script: [
    {
      src: 'https://fast.wistia.net/assets/external/E-v1.js',
      async: true,
      body: true
    }
  ]
})
</script>
