<template>
  <section
    class="bg-white dark:bg-gray-900"
    :style="{
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : '',
    }"
  >
    <div
      class="grid px-5 pt-12 pb-6 max-w-screen-[1400px] mx-auto md:gap-8 lg:gap-12 md:py-38 md:grid-cols-12"
    >
      <div
        class="flex justify-start mb-10 md:col-span-5 md:items-center"
        :class="{ 'md:hidden': rightImage }"
      >
        <nuxt-img
          :src="props.productImage"
          alt="mockup"
          format="webp"
          class="h-40 lg:w-96 lg:h-54 xl:w-112 xl:h-63"
        />
      </div>
      <div class="mr-auto md:mx-auto place-self-center md:col-span-7 lg:pr-6">
        <h1
          class="mb-4 pr-4 text-2xl md:text-4xl tracking-wide font-bold"
          :class="textTitleColor"
        >
          {{ props.title }}
        </h1>
        <p
          class="max-w-2xl mb-6 font-light tracking-wide lg:mb-8 md:text-lg lg:text-xl"
          :class="textSubTitleColor"
        >
          {{ props.subTitle }}
        </p>
        <div
          class="max-w-2xl mb-6 font-light tracking-wide lg:mb-8 md:text-lg lg:text-xl"
          v-html="description"
        />
      </div>
      <div
        v-if="rightImage"
        class="flex hidden md:flex justify-start mb-10 md:block md:col-span-5 md:items-center"
      >
        <nuxt-img
          :src="props.productImage"
          alt="mockup"
          format="webp"
          class="h-40 lg:w-96 lg:h-54 xl:w-112 xl:h-63"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  backgroundImage: {
    type: String,
    default: null
  },
  productImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  textTitleColor: {
    type: String,
    default: 'text-black-700'
  },
  textSubTitleColor: {
    type: String,
    default: 'text-black-600'
  },
  rightImage: {
    type: Boolean,
    default: false
  }
})
</script>
