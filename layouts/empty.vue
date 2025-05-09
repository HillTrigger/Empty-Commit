<script setup>
import { getTitle } from './js/getTitle';

const route = useRoute();
const pageTitle = ref('Default Title');

watch(
  () => route.path,
  (newPath) => {
    pageTitle.value = getTitle(newPath);
  },
  { immediate: true }
);

useHead({
  title: computed(() => pageTitle.value),
});
</script>

<template>
  <main class="bg-bgSecondary200 min-h-dvh flex flex-col items-center ">
    <slot/>
  </main>
</template>