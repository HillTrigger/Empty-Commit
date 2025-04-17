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
  <div>
    <AppHeader :page-title="pageTitle" />
    <main>
      <slot />
    </main>
    <AppFooter/>
  </div>
</template>