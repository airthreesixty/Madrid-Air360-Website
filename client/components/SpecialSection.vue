<template>
  <section class="bg-color px-5 max-screen-w-[1400px]">
    <div class="py-20">
      <h2 class="text-center font-bold tracking-wide text-white text-2xl md:text-4xl mb-6 md:mb-12">
        {{ specialData.title }}
      </h2>
      <div class="flex justify-center">
        <nuxt-img :src="media" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gql } from 'graphql-tag'

const graphql = useStrapiGraphQL()
const { data } = await useAsyncData('special-section', () =>
  graphql(gql`
query {
  page(id:3) {
data {
      attributes {
        blocks {
          ... on ComponentBlocksSpecial {
            title
            image {
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

const specialData = computed(() => data.value.data.page.data.attributes.blocks[4])
const media = useStrapiMedia(specialData.value.image.data.attributes.url)
</script>

<style scoped>
.bg-color {
  background: linear-gradient(90.13deg, #E74B91 -11.38%, #E64B91 -11.38%, #2245F5 70.59%, #6278DF 111.04%);
  opacity: 0.9;
}
</style>
