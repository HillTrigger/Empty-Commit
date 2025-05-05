<script setup>
import PostsLayout from './ui/PostsLayout';
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
  <PostsLayout v-if="posts">
    <h2 class="font-semibold text-2xl">Все посты</h2>
    <template v-if="posts.length">
      <BasePost
        v-for="post in posts"
        :id="post.id"
        :key="post.id"
        :key-author="post.author.key"
        :date="post.date"
        :title="post.title"
        :description="post.description"
        :content="post.content"
      />
    </template>
  </PostsLayout>
</template>