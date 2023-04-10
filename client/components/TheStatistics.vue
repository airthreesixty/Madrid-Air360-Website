<template>
  <section class="relative bg-gradient-to-r from-primary-600 to-secondary-600 dark:bg-gray-900">
    <div class="py-12 md:py-18 px-5 mx-auto max-w-screen-[1400px] lg:px-6">
      <div class="mx-auto text-center max-w-screen-md">
        <h2 class="mb-2 text-2xl md:text-4xl tracking-wide font-bold text-white dark:text-white">
          {{ statisticsData.quote }}
        </h2>
        <p class="text-xl md:text-2xl text-right font-light text-white dark:text-gray-400">
          {{ statisticsData.source }}
        </p>
      </div>
    </div>
    <div class="triangle" />
  </section>
</template>

<script setup lang="ts">
import { statisticsQuery } from '~~/graphql/queries'

const graphql = useStrapiGraphQL()
const { data } = await graphql(statisticsQuery)
const statisticsData = data.page.data.attributes.blocks[1]
console.log(statisticsData)
</script>

<style>
.triangle{
  border-right: 30px solid transparent;
  border-bottom: 40.6025px solid white;
  border-left: 30px solid transparent;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
