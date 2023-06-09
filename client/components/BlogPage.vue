<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-8">
      <div class="mx-auto max-w-screen-[1400px] text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-2xl tracking-tight font-extrabold text-black-600 lg:text-4xl dark:text-white"
        >
          Blog
        </h2>
        <p class="font-light mb-1 text-gray-500 md:text-xl dark:text-gray-400">
          Inspiration for conversion heroes
        </p>
        <BlogTagsFilter />
        <BlogSearchBar v-model="searchedArticles" />
      </div>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <transition-group
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <BlogCard v-for="(article, index) in displayedArticles" :key="article.id" :data="article" :data-index="index" />
        </transition-group>
      </div>
      <div class="flex justify-center">
        <div>
          <Button
            v-if="canLoadMore"
            class="mt-16"
            @click="loadMore"
          >
            <div v-if="!isLoading">
              Load More
            </div>
            <Loading v-if="isLoading" class="w-20 h-5" :is-full-page="false" />
          </Button>
        </div>
      </div>
      <div v-if="!articles.length">
        <p class="text-center text-black-600">
          No articles found
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// @ts-ignore
import _ from 'lodash'
import gsap from 'gsap'
import Button from './ui/Button.vue'
import { BlogArticle } from '~~/interfaces/blog'

const route = useRoute()
const props = defineProps({
  articles: {
    type: Array,
    required: true
  }
})
const isLoading = ref(false)
let loadButtonClickCount = 0

const numArticlesPerLoad = 6
const searchedArticles = ref<string[] | null>(null)
const articles = ref(props.articles)
const displayedArticles = ref(props.articles.slice(0, numArticlesPerLoad))

const canLoadMore = computed(() => {
  return displayedArticles.value.length < articles.value.length && searchedArticles.value === null
})

watch([searchedArticles, articles], () => {
  if (searchedArticles.value !== null) {
    displayedArticles.value = articles.value.filter(article => searchedArticles.value?.includes(article.attributes.href))
  } else {
    displayedArticles.value = articles.value.slice(0, numArticlesPerLoad)
  }
},
{ immediate: true }
)

const loadMore = async () => {
  isLoading.value = true
  loadButtonClickCount++
  const currentPage = Number(route.query.page) || 0
  await navigateTo({
    path: '/blog',
    query: {
      page: currentPage + 1
    }
  })
  _.debounce(() => {
    const currentArticlesCount = displayedArticles.value.length
    const newArticles = articles.value.slice(
      currentArticlesCount,
      currentArticlesCount + numArticlesPerLoad
    )
    displayedArticles.value.push(...newArticles)
    isLoading.value = false
  }, 300)()
}

const beforeEnter = (el: Element) => {
  (el as HTMLElement).style.opacity = '0';
  (el as HTMLElement).style.transform = 'translateY(100px)'
}

const enter = (el: Element, done: () => void) => {
  if (el instanceof HTMLElement && el.dataset.index) {
    const index = Number(el.dataset.index)
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      onComplete: done,
      delay: (index - (6 * loadButtonClickCount)) * 0.2
    })
  }
}
</script>
