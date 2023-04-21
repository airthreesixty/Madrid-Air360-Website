<template>
  <div class="vl-parent">
    <loading
      v-model:active="isLoading"
      loader="dots"
      color="#056AFE"
      :is-full-page="isFullPage"
    />
  </div>
</template>

<script setup lang="ts">
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const isLoading = ref(true)

defineProps({
  isFullPage: {
    type: Boolean,
    required: true
  }
})
</script>
