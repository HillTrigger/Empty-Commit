<script setup>
import axios from 'axios';

const { data: posts } = await useAsyncData('posts', () =>
  axios.get('https://directus.api.hilltrigger.ru/items/posts')
    .then(response => response.data.data) // обычно в response.data.data содержатся сами посты
);
</script>

<template>
  <div>
    <h1>Список постов</h1>
    <BasePost
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :description="post.description"
    />
  </div>
</template>
