<script lang="js" setup>
import { usePost } from './js/usePost';

	const { post } = usePost();

	useMetaTags({description: post.description, image: false, url: `https://blog.hilltrigger.ru/post/${post.id}`});
</script>

<template>
  <div>
    <div v-if="!post && post !== null">Loading...</div>
    <div v-if="post === null">Error</div>
    <BasePost
      v-if="post && typeof post === 'object' && post.id"
      :id="post.id"
      :key="post.id"
      :key-author="post.author.key"
      :date="post.date"
      :title="post.title"
      :description="post.description"
      :content="post.content"
    />
  </div>
</template>