<template>
  <nuxt-link :to="data.attributes.href">
    <article
      class="relative p-4 bg-white h-full rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <nuxt-img
        format="webp"
        class="mb-5 rounded-lg h-50 w-full object-cover"
        :src="media"
      />
      <span
        v-for="(tag, index) in data.attributes.category.data.attributes"
        :key="index"
        class="bg-blue-100 text-blue-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900"
      >{{ tag }}</span>
      <h2
        class="mt-2 mb-15 text-xl font-bold tracking-tight text-black-600 dark:text-white"
      >
        {{ data.attributes.title }}
      </h2>
      <div class="flex items-center space-x-4 absolute bottom-2">
        <nuxt-img
          class="w-10 h-10 rounded-full"
          src="https://secure.gravatar.com/avatar/8970d6f80cecf680b09d491937b1623f?s=96&d=mm&r=g"
          alt="avatar"
        />
        <div class="font-medium dark:text-white">
          <div>Air360 team</div>
          <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
            {{
              dayjs(data.attributes.publishedAt)
                .locale('en')
                .format('D MMMM YYYY')
            }}
            · {{ data.attributes.readingTime }} min
          </div>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { BlogArticle } from '~~/interfaces/blog'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const media = computed(() => useStrapiMedia(props.data.attributes.image.data.attributes.url))
</script>
