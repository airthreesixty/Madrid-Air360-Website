<template>
  <section class="bg-white px-5" :style="`background-image: url(${bgMedia});`">
    <div class="gap-8 items-center py-8 mx-auto max-w-screen-[1400px] lg:gap-16 md:flex md:justify-center md:py-16 lg:px-6">
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
        <Button :to="roiData.button.href">
          {{ roiData.button.label }}
        </Button>
      </div>
    </div>
    <div class="py-5 pb-15 flex justify-center">
      <p class="text-center tracking-wide text-2xl lg:text-4xl font-bold max-w-screen-lg bg-gradient-to-r from-[#E74B91] via-[#2245F5] to-[#6278DF] bg-clip-text text-transparent">
        {{ roiData.message }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gql } from 'graphql-tag'
import Button from './ui/Button.vue'

const graphql = useStrapiGraphQL()
const { data } = await useAsyncData('roi', () =>
  graphql(gql`
  query {
  page(id:3) {
data {
      attributes {
        blocks {
          ... on ComponentBlocksRoi {
            title
            description
            button {
              href
              label
              isExternal
              target
            }
            message
                        images {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`)
)

const roiData = computed(() => data.value.data.page.data.attributes.blocks[2])
const media = useStrapiMedia(roiData.value.images.data[0].attributes.url)
const bgMedia = useStrapiMedia(roiData.value.images.data[1].attributes.url)
</script>
