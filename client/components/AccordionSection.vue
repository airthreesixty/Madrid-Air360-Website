<template>
  <section class="px-5 py-10" :style="`background-image: url(${bgImage})`">
    <div class="max-w-screen-[1400px] mx-auto flex flex-col items-center">
      <h2 class="text-2xl mb-10 font-bold tracking-wide">
        {{ accordionData.title }}
      </h2>
      <div id="accordion-collapse" data-accordion="collapse" class="w-full">
        <div v-for="(accordion, index) in accordionData.accordion" :key="index">
          <h2 :id="`accordion-collapse-heading-${index}`">
            <button type="button" class="flex items-center justify-between bg-white w-full p-5 font-medium text-left text-black-700 border border-b-0 border-gray-200" :data-accordion-target="`#accordion-collapse-body-${index}`" aria-expanded="true" :aria-controls="`accordion-collapse-body-${index}`">
              <span class="text-2xl text-black-700 font-bold tracking-wide">{{ accordion.title }}</span>
              <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </button>
          </h2>
          <div :id="`accordion-collapse-body-${index}`" class="hidden transition ease-in-out duration-300" :aria-labelledby="`accordion-collapse-heading-${index}`">
            <div class="py-10 px-8 border md:flex border-b-0 mx-auto bg-white border-gray-200 last:border-b-1 dark:border-gray-700 dark:bg-gray-900">
              <div class="flex justify-start items-center md:order-1">
                <div class="w-75 md:w-95 lg:w-110 p-8 md:order-last">
                  <nuxt-img v-if="!accordion.isVideo" :src="medias[index]" />
                  <video
                    v-else
                    autoplay
                    class="shadow-lg my-auto w-full rounded-lg object-cover"
                    loop
                    muted
                    playsinline
                  >
                    <source :data-src="medias[index]" type="video/mp4" :src="medias[index]">
                  </video>
                </div>
              </div>
              <div class="max-w-screen-md flex flex-col justify-center">
                <p class="mb-2 text-black-700 font-bold tracking-wide dark:text-gray-400">
                  {{ accordion.subTitle }}
                </p>
                <div class="text-gray-500 dark:text-gray-400" v-html="accordion.description" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gql } from 'graphql-tag'

const graphql = useStrapiGraphQL()
const { data } = await useAsyncData(() =>
  graphql(gql`
query {
  page(id:3) {
data {
      attributes {
        blocks {
          ... on ComponentBlocksAccordionSection {
title
            bgImage {
              data {
                attributes {
                  url
                }
              }
            }
            accordion {
              media {
                data {
                  attributes {
                    url
                  }
                }
              }
              isVideo
              title
              subTitle
              description
            }
          }
        }
      }
    }
  }
}
`)
)

const accordionData = computed(() => data.value.data.page.data.attributes.blocks[6])

const medias = accordionData.value.accordion.map((accordion: { media: { data: { attributes: { url: string } } } }) => {
  return useStrapiMedia(accordion.media.data.attributes.url)
})

const bgImage = computed(() => useStrapiMedia(accordionData.value.bgImage.data.attributes.url))
</script>
