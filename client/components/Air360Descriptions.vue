<template>
  <SingleDescription
    :background-image="media1"
    :product-image="media2"
    :title="descriptionData1.title"
    :sub-title="descriptionData1.subTitle"
    :description="descriptionData1.description"
    text-title-color="text-white"
    text-sub-title-color="text-white"
    text-description-color="text-white"
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
    text-description-color="text-white"
  />
</template>

<script setup>
import { air360DescriptionQuery } from '~~/graphql/queries'
const graphql = useStrapiGraphQL()

const { data } = await graphql(air360DescriptionQuery)
const descriptionData1 = data.page.data.attributes.blocks[2]
const media1 = useStrapiMedia(descriptionData1.image.data[0].attributes.url)
const media2 = useStrapiMedia(descriptionData1.image.data[1].attributes.url)

const descriptionData2 = data.page.data.attributes.blocks[3]
const media3 = useStrapiMedia(descriptionData2.image.data[0].attributes.url)

const descriptionData3 = data.page.data.attributes.blocks[4]
const media4 = useStrapiMedia(descriptionData3.image.data[1].attributes.url)
</script>
