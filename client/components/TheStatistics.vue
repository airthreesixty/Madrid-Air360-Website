<template>
  <section class="relative bg-gradient-to-r from-primary-600 to-secondary-600 dark:bg-gray-900">
    <div class="pb-10 pt-15 px-5 mx-auto max-w-screen-[1400px] lg:px-6">
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
import { gql } from 'graphql-tag'

const graphql = useStrapiGraphQL()
const { data } = await useAsyncData('statistics', () =>
  graphql(gql`
query {
  page(id:3) {
data {
      attributes {
        blocks {
          ... on ComponentBlocksStatistics {
            quote 
            source
          }
        }
      }
    }
  }
}
`)
)

const statisticsData = computed(() => data.value.data.page.data.attributes.blocks[1])
</script>

<style scoped>
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
