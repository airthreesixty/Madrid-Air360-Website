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
        <div class="pt-3 md:flex">
          <NuxtLink :to="heroData.buttons[0].href" :target="heroData.buttons[0].target" class="text-white text-center bg-primary-600 text-base flex justify-center items-center font-bold w-full mt-5 inline-block transition ease-in-out duration-300 hover:bg-primary-700 rounded-lg px-6 py-3 mr-2 mb-2 md:w-1/2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            {{ heroData.buttons[0].label }}
          </NuxtLink>
          <a
            href="#"
            class="text-white bg-blue-400 text-base font-bold text-center flex justify-center items-center w-full mt-3 block transition ease-in-out duration-300 md:mt-5 hover:bg-blue-500 rounded-lg px-6 py-3 mb-2 md:w-1/2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {{ heroData.buttons[1].label }}
          </a>
        </div>
      </div>
      <div class=" md:flex md:flex-1 lg:mt-0">
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
