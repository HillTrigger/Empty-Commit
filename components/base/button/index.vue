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

const btnClasses = 'w-auto h-8 border border-borderColor p-1 rounded-md active:bg-bgSecondary text-center';
</script>

<template>
  <nuxt-link v-if="isLink" :class="btnClasses" :to="to">
    <slot/>
  </nuxt-link>
  <button v-else :class="btnClasses">
    <slot/>
  </button>
</template>