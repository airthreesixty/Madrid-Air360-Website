<template>
  <footer class="bg-white py-8 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl px-5">
      <div class="md:flex md:justify-between">
        <div class="my-6 md:mb-0">
          <nuxt-img :src="logo" format="webp" class="flex items-center" />
          <div class="flex mt-6 mb-8 space-x-4 md:justify-start md:mt-4 lg:mt-6">
            <a
              href="https://www.linkedin.com/company/air360/"
              class="text-secondary-600 transition ease-in-out duration-300 hover:text-gray-800 dark:hover:text-white"
              target="_blank"
            >
              <fa-icon class="fa-xl" :icon="['fab', 'linkedin']" />
              <span class="sr-only">LinkedIn page</span>
            </a>
            <a
              href="https://twitter.com/weareair360"
              class="text-secondary-600 transition ease-in-out duration-300 hover:text-gray-800 dark:hover:text-white"
              target="_blank"
            >
              <fa-icon class="fa-xl" :icon="['fab', 'twitter']" />
              <span class="sr-only">Twitter page</span>
            </a>
            <a
              href="https://www.instagram.com/weareair360/"
              class="text-secondary-600 transition ease-in-out duration-300 hover:text-gray-800 dark:hover:text-white"
              target="_blank"
            >
              <fa-icon class="fa-xl" :icon="['fab', 'instagram']" />
              <span class="sr-only">Instagram page</span>
            </a>
            <a
              href="https://www.youtube.com/@weareair360"
              class="text-secondary-600 transition ease-in-out duration-300 hover:text-gray-800 dark:hover:text-white"
              target="_blank"
            >
              <fa-icon class="fa-xl" :icon="['fab', 'youtube']" />
              <span class="sr-only">Youtube page</span>
            </a>
            <a
              href=" https://www.tiktok.com/@weareair360"
              class="text-secondary-600 transition ease-in-out duration-300 hover:text-gray-800 dark:hover:text-white"
              target="_blank"
            >
              <fa-icon class="fa-xl" :icon="['fab', 'tiktok']" />
              <span class="sr-only">Tiktok page</span>
            </a>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8 md:gap-5 lg:gap-10 md:grid-cols-3">
          <div v-for="column in footerData.columns" :key="column">
            <h2 class="mb-6 text-base md:text-xl font-bold tracking-wide text-primary-600 dark:text-white">
              {{ column.title }}
            </h2>
            <ul class="text-black-700 font-light">
              <li v-for="link in column.links" :key="link" :target="link.target" class="mb-4">
                <NuxtLink v-if="!link.isExternal" :to="link.href">
                  {{ link.label }}
                </NuxtLink>
                <a v-if="link.isExternal" :target="link.target" :href="link.href">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { globalQuery } from '~~/graphql/queries'

const graphql = useStrapiGraphQL()
const { data } = await graphql(globalQuery)
const footerData = data.global.data.attributes.footer

const logo = useStrapiMedia(footerData.logo.data.attributes.url)
</script>
