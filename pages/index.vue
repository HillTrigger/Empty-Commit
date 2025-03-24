<script setup>
import axios from 'axios';

const { data: posts } = await useAsyncData('posts', () =>
  axios.get('https://directus.api.hilltrigger.ru/items/posts')
    .then(response => response.data.data) // обычно в response.data.data содержатся сами посты
);

// const pageTitle = useState('pageTitle', () => 'О нас'); // Заголовок для страницы "О нас"
useHead({ title: 'Главная' });
</script>

<template>
  <div class="text-center">
    <h1 class="mb-4">Список постов</h1>
    <BasePost
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :description="post.description"
    />
  </div>
</template>
