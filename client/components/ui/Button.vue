<template>
  <button :class="buttonVariants">
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'

const buttonVariants = computed(() => {
  return cva(
    'text-white text-center bg-primary-600 text-base flex justify-center items-center font-bold w-full mt-5 inline-block transition ease-in-out duration-300 hover:bg-primary-700 rounded-lg px-6 py-3 mr-2 mb-2 md:w-1/2 focus:outline-none',
    {
      variants: {
        variant: {
          primary: 'bg-primary-600 text-white hover:text-primary-600 hover:bg-white hover:ring-2 hover:ring-primary-600'
        }
      }
    }
  )({
    variant: props.variant
  })
})

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  text: {
    type: String,
    default: 'Test'
  },
  slug: {
    type: String,
    default: '/'
  }
})
</script>
