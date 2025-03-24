<script setup lang="js">
const {getItems} = useEmptyCommitData();

const {data: posts} = await useAsyncData('posts', getItems);
</script>

<template>
  <div class="flex flex-col gap-4 mx-auto p-10 max-w-4xl">
    <h2 class="font-semibold text-2xl">Все посты</h2>
    <BasePost
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :author="post.author"
      :title="post.title"
      :description="post.description"
      :content="post.content"
    />
  </div>
</template>