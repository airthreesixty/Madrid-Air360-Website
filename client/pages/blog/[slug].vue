<template>
  <div class="">
    <main v-if="data">
      <div class="bg-white flex justify-center dark:bg-gray-900">
        <div class="pt-10 pb-5 max-w-screen-[1400px]">
          <div class="lg:flex lg:justify-between gap-8 px-6 lg:px-8">
            <div class="">
              <article
                class="mx-auto max-w-screen-md format format-lg sm:format-base lg:format-lg format-blue dark:format-invert"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <nuxt-link
                      v-for="(tag, index) in article.attributes.category.data.attributes"
                      :key="index"
                      class="bg-blue-100 text-blue-400 text-xs font-semibold px-2.5 py-0.5 mr-2 rounded dark:bg-purple-200 dark:text-purple-900"
                      to="/"
                    >
                      {{ tag }}
                    </nuxt-link>
                  </div>
                  <aside aria-label="Share social media">
                    <div class="flex items-center">
                      <button data-tooltip-target="tooltip-linkedin" class="inline-flex items-center p-[5.5px] md:p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                        <a
                          :href="`https://www.linkedin.com/sharing/share-offsite/?url=https://jp.air360.io${fullPath}`"
                          class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
                          rel="nofollow noopener"
                          target="_blank"
                        >
                          <fa-icon class="fa-xl" :icon="['fab', 'linkedin']" />
                        </a>
                      </button>
                      <div id="tooltip-linkedin" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                        Linkedin
                        <div class="tooltip-arrow" data-popper-arrow />
                      </div>
                      <button data-tooltip-target="tooltip-twitter" class="inline-flex items-center p-[5.5px] md:p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                        <a
                          :href="`https://twitter.com/intent/tweet?text=https://jp.air360.io${fullPath}`"
                          class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
                          rel="nofollow noopener"
                          target="_blank"
                        >
                          <fa-icon class="fa-xl" :icon="['fab', 'twitter']" />
                        </a>
                      </button>
                      <div id="tooltip-twitter" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                        Twitter
                        <div class="tooltip-arrow" data-popper-arrow />
                      </div>
                      <button data-tooltip-target="tooltip-facebook" class="inline-flex items-center p-[5.5px] md:p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                        <a
                          :href="`http://www.facebook.com/share.php?u=https://jp.air360.io${fullPath}`"
                          class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
                          rel="nofollow noopener"
                          target="_blank"
                        >
                          <fa-icon class="fa-xl" :icon="['fab', 'facebook']" />
                        </a>
                      </button>
                      <div id="tooltip-facebook" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                        Facebook
                        <div class="tooltip-arrow" data-popper-arrow />
                      </div>
                      <CopyLinkButton />
                      <div id="tooltip-link" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                        Share
                        <div class="tooltip-arrow" data-popper-arrow />
                      </div>
                    </div>
                  </aside>
                </div>
                <header class="my-4 lg:mb-10 not-format">
                  <div class="flex items-center justify-between mb-6 not-italic">
                    <div
                      class="inline-flex items-center mr-3 text-sm text-black-600 dark:text-white"
                    >
                      <nuxt-img class="mr-4 w-16 h-16 rounded-full" src="https://secure.gravatar.com/avatar/8970d6f80cecf680b09d491937b1623f?s=96&d=mm&r=g" />
                      <div>
                        <div
                          class="text-xl font-bold text-black-600 dark:text-white"
                        >
                          Air360 team
                        </div>
                        <p
                          class="text-base font-light text-gray-500 dark:text-gray-400"
                        >
                          <time>{{ dayjs(article.attributes.publishedAt)
                            .locale('en')
                            .format('D MMMM YYYY') }}</time>
                        </p>
                      </div>
                    </div>
                  </div>
                  <h1
                    class="mb-8 text-2xl font-semibold text-black-600 lg:text-3xl dark:text-white"
                  >
                    {{ article.attributes.title }}
                  </h1>
                  <nuxt-img format="webp" :src="media" class="h-90 mb-10 rounded-lg w-full object-cover" />
                </header>
                <div class="">
                  <!-- <TableOfContents :paragraph-titles="paragraphTitles" class="lg:hidden" /> -->
                  {{ article.attributes.content }}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- <CtaNew />
    <RelatedArticles />
    <NewsLetter /> -->
  </div>
</template>

<script setup lang="ts">
// import { useSeoMeta } from '@unhead/vue'
import dayjs from 'dayjs'
import { BlogArticle } from '~~/interfaces/blog'
import { articlesQuery } from '~/graphql/queries'

const route = useRoute()
const router = useRouter()
const fullPath = route.fullPath

// TODO the value from the plugin is wrong, remove _value when it's fixed
// const { data } = await useAsyncData(`blog-${route.params.slug}`, () =>
//   queryContent<BlogArticle>(
//     `${(route.path)}`
//   ).findOne()
// )
// console.log(data)
// const paragraphTitles = data._rawValue.body.toc.links
const graphql = useStrapiGraphQL()
const { data } = await graphql(articlesQuery)
const articlesData = data.articles.data
const article = articlesData.find(art => art.attributes.href === route.fullPath)

const media = useStrapiMedia(article.attributes.image.data.attributes.url)
console.log(articlesData)
// console.log(fullPath)
console.log(article)
// if (!data.value) {
//   router.push('/blog')
// }
// useSeoMeta({
//   title: data.value?.title,
//   ogTitle: data.value?.title,
//   description: data.value?.metaDesc,
//   ogDescription: data.value?.metaDesc,
//   ogImage: data.value?.image,
//   twitterCard: 'summary_large_image',
//   ogUrl: `https://jp.air360.io${fullPath}`
// })
</script>
