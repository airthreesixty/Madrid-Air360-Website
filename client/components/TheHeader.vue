<template>
  <nav
    class="bg-white border-gray-200 border-b-1 px-5 sticky py-2 top-0 rounded z-10 md:py-3 lg:py-0 dark:bg-gray-900"
  >
    <div class="flex flex-wrap items-center justify-between">
      <NuxtLink to="/">
        <nuxt-img
          format="webp"
          src="https://www.air360.io/wp-content/uploads/2022/05/air360-logo-bk.svg"
          class="h-6 mr-3 w-auto sm:h-7 xl:h-8"
          alt="Air360 Logo"
        />
      </NuxtLink>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div
        id="navbar-default"
        class="w-full transition ease-in-out duration-500 lg:block lg:w-auto"
        :class="{ block: isActive, hidden: !isActive }"
      >
        <ul
          class="flex flex-col p-4 mt-4 border items-center border-none lg:flex-row lg:space-x-8 lg:mt-0 lg:text-base lg:font-medium lg:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li
            v-for="header in headerData.links"
            :key="header.links"
            class="menu__link"
          >
            <NuxtLink
              v-if="!header.isExternal"
              :to="header.href"
              :target="header.target"
            >
              {{ header.label }}
            </NuxtLink>
            <NuxtLink
              v-if="header.isExternal"
              :to="header.href"
              :target="header.target"
            >
              {{ header.label }}
            </NuxtLink>
          </li>
          <li class="py-2">
            <NuxtLink
              :to="headerData.button.href"
              class="bg-primary-600 text-base text-white transition ease-in-out duration-300 hover:bg-primary-700 font-medium rounded-lg px-6 py-3 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {{ headerData.button.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { gql } from 'graphql-tag'

const graphql = useStrapiGraphQL()

const { data } = await useAsyncData('header-navigation', () =>
  graphql(gql`
    query {
      global {
        data {
          attributes {
            navigation {
              links {
                label
                target
                href
                isExternal
              }
              button {
                label
                target
                href
                isExternal
              }
            }
          }
        }
      }
    }
  `)
)

const headerData = computed(
  () => data.value.data.global.data.attributes.navigation
)

const isActive = ref(false)

const toggleMenu = () => {
  isActive.value = !isActive.value
}
</script>

<style lang="postcss">
.menu__link {
  @apply block text-[20px] lg:text-base py-2 pl-3 pr-4 text-black-600 rounded transition ease-in-out duration-300 hover:bg-gray-100 md:after:absolute md:after:top-0 md:hover:after:block md:hover:bg-transparent md:border-0 md:hover:text-secondary-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent;
  .router-link-exact-active & {
    @apply text-secondary-600;
  }
}
</style>
