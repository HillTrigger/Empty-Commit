<script setup>
const { getItems } = useEmptyCommitData();


const { data: posts } = useAsyncData('posts', async () => {
  try {
    const result = await getItems();
    return result || [];
  } catch (err) {
    console.error('Ошибка при получении данных:', err);
    return [];
  }
},{
    server: true
});

</script>


<template>
  <div v-if="posts" class="flex flex-col gap-4 mx-auto sm:p-10 max-w-4xl p-2">
    <h2 class="font-semibold text-2xl">Все посты</h2>
    <template v-if="posts.length">
      <BasePost
        v-for="post in posts"
        :id="post.id"
        :key="post.id"
        :email="post.email"
        :date="post.date"
        :title="post.title"
        :description="post.description"
        :content="post.content"
      />
    </template>
  </div>
</template>