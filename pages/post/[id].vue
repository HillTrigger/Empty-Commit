<script lang="js" setup>
const { getItem } = useEmptyCommitData();
const id = +useRoute().params.id;
const {data: post} = useAsyncData('posts', async () => {
  try {
    const result = await getItem(id);
    return result;
  } catch (err) {
    console.error('Ошибка при получении данных:', err);
    return null;
  }
},{
    server: true
  });

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