<template>
  <section class="filter brightness-110" style="background-image: linear-gradient(30deg, #6278DF 0%, #3DDC97 100%);">
    <div class="py-8 px-5 mx-auto max-w-screen-xl md:py-14 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h2 class="mb-6 text-2xl tracking-wide font-bold text-white dark:text-white">
          {{ ctaData.text }}
        </h2>
        <div class="w-35 mx-auto">
          <Button :to="ctaData.button.href">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gql } from 'graphql-tag'
import Button from './ui/Button.vue'

const graphql = useStrapiGraphQL()
const { data } = await useAsyncData('cta', () =>
  graphql(gql`
query {
  page(id:2) {
    data {
      attributes {
        blocks {
          ... on ComponentBlocksCta {
            text
            button {
              label
              target
              isExternal
              href
            }
          }
        }
      }
    }
  }
}
`)
)
const ctaData = computed(() => data.value.data.page.data.attributes.blocks[6])
</script>
