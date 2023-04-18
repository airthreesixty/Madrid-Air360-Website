<template>
  <section class="bg-color px-5 max-screen-w-[1400px]">
    <div class="py-20 flex flex-col items-center">
      <h2 class="text-center font-bold tracking-wide text-black-700 text-2xl px-4 md:text-4xl mb-10 md:mb-12">
        {{ features2Data.title }}
      </h2>
      <div class="flex justify-center max-w-screen-lg">
        <nuxt-img src="/features2.svg" class="hidden md:block" />
        <nuxt-img src="/features2Mobile.svg" class="md:hidden" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { features2Query } from '~~/graphql/queries'

const graphql = useStrapiGraphQL()
const { data } = await graphql(features2Query)
const features2Data = data.page.data.attributes.blocks[5]
</script>
