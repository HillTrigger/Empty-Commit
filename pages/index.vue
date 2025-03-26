<script setup>
definePageMeta({
  ssr: true // Явное включение SSR
});
// const pageTitle = useState('pageTitle', () => 'О нас'); // Заголовок для страницы "О нас"
</script>

<template>
  <div>
    <BlockPosts/>
  </div>
</template>
