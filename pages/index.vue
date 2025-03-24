<script setup>
// import axios from 'axios';

// const { data: posts } = await useAsyncData('posts', () =>
//   axios.get('https://directus.api.hilltrigger.ru/items/posts')
//     .then(response => response.data)
// );

</script>

<template>
  <div>
    <h1>Список постов</h1>
    
    <!-- Отображаем посты -->
    <!-- <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </NuxtLink>
      </li>
    </ul> -->
  </div>
</template>
