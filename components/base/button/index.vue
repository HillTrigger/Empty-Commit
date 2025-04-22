<script setup>
defineProps({
  isLink: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: '',
  }
});
</script>

<template>
  <nuxt-link v-if="isLink" class="w-auto h-8 border border-borderColor p-1 rounded-md active:bg-bgSecondary" :to="to">
    <slot/>
  </nuxt-link>
  <button v-else class="w-auto h-8 border border-borderColor p-1 rounded-md active:bg-bgSecondary">
    <slot/>
  </button>
</template>