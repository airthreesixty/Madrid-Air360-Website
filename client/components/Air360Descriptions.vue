<template>
  <SingleDescription
    :background-image="media1"
    :product-image="media2"
    :title="descriptionData1.title"
    :sub-title="descriptionData1.subTitle"
    :description="descriptionData1.description"
    text-title-color="text-white"
    text-sub-title-color="text-white"
  />
  <SingleDescription :right-image="true" :product-image="media3" :title="descriptionData2.title" :sub-title="descriptionData2.subTitle" :description="descriptionData2.description" />
  <SingleDescription
    :background-image="media1"
    :product-image="media4"
    :title="descriptionData3.title"
    :sub-title="descriptionData3.subTitle"
    :description="descriptionData3.description"
    text-title-color="text-white"
    text-sub-title-color="text-white"
  />
</template>

<script setup lang="ts">
import { gql } from 'graphql-tag'
const graphql = useStrapiGraphQL()

const { data } = await useAsyncData('air360-descriptions', () =>
  graphql(gql`
query {
page (id: 2) {
data {
      attributes {
        blocks {
          ... on ComponentBlocksAir360Description {
            title
            subTitle
            description
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

// const { data } = await graphql(air360DescriptionQuery)
const descriptionData1 = computed(() => data.value.data.page.data.attributes.blocks[2])

const media1 = computed(() => useStrapiMedia(descriptionData1.value.image.data[0].attributes.url))
const media2 = computed(() => useStrapiMedia(descriptionData1.value.image.data[1].attributes.url))

const descriptionData2 = computed(() => data.value.data.page.data.attributes.blocks[3])
const media3 = computed(() => useStrapiMedia(descriptionData2.value.image.data[0].attributes.url))

const descriptionData3 = computed(() => data.value.data.page.data.attributes.blocks[4])
const media4 = computed(() => useStrapiMedia(descriptionData3.value.image.data[1].attributes.url))
</script>
