<template>
  <section class="bg-gray-600 px-5 md:h-screen dark:bg-gray-900" :style="`background-image: url(${mediaBottom});`">
    <div
      class="max-w-screen-[1400px] px-4 py-12 mx-auto md:gap-4 md:flex lg:gap-8 xl:gap-0 lg:py-16 lg:px-8"
    >
      <div class="pb-6 md:hidden lg:mt-0 lg:col-span-5">
        <nuxt-img
          format="webp"
          :src="mediaHero"
          alt="hero image"
          width="583"
          height="349"
        />
      </div>
      <div class="mr-auto place-self-center lg:col-span-5 md:flex-1">
        <h1
          class="max-w-2xl mb-6 font-bold text-2xl bg-gradient-to-r from-[#6278DF] to-blue-[#3DDC97] bg-clip-text text-transparent lg:mb-8 md:text-3xl lg:text-4xl dark:text-gray-400"
        >
          {{ heroData.title }}
        </h1>
        <h2
          class="max-w-2xl mb-6 leading-7 font-bold text-black-600 md:text-base lg:mb-8 lg:text-xl xl:leading-8 dark:text-gray-400"
        >
          {{ heroData.subTitle }}
        </h2>
        <p class="leading-7 text-black-600">
          {{ heroData.titleDescription }}
        </p>
        <div class="pt-3 md:flex md:gap-4">
          <Button slug="/request-a-demo" class="mb-3 md:mb-0">
            Get Started
          </Button>
          <Button slug="#" variant="secondary">
            Watch our Video
          </Button>
        </div>
      </div>
      <div class="hidden md:flex md:flex-1 lg:mt-0">
        <nuxt-img
          :src="mediaHero"
          alt="Hero image"
          class="object-scale-down"
        />
      </div>
    </div>
    <div class="text-3xl lg:text-[39px] py-12 font-bold text-center tracking-wide px-5 lg:px-25 bg-gradient-to-r from-[#6278DF] to-blue-[#3DDC97] bg-clip-text text-transparent">
      {{ heroData.bottomText }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { gql } from 'graphql-tag'
import Button from './ui/Button.vue'

const graphql = useStrapiGraphQL()
const { data } = await useAsyncData('hero', () =>
  graphql(gql`
    query {
      page(id: 2) {
          data {
            attributes {
              blocks {
                ... on ComponentBlocksHero {
                  title
                  titleDescription
                  subTitle
                  heroImage {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  buttons {
                    href
                    isExternal
                    label
                  }
                  bottomText
                }
              }
            }
          }
        }
      }
  `)
)
const heroData = computed(
  () => data.value.data.page.data.attributes.blocks[0])
const mediaHero = computed(
  () => useStrapiMedia(heroData.value.heroImage.data[0].attributes.url))
const mediaBottom = computed(
  () => useStrapiMedia(heroData.value.heroImage.data[1].attributes.url))
</script>
