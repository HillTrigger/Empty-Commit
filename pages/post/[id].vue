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
</script>

<template>
  <div>
    <div v-if="!post && post !== null">Loading...</div>
    <div v-if="post === null">Error</div>
    <BasePost
      v-if="post"
      :id="post.id"
      :key="post.id"
      :author="post.author"
      :date="post.date"
      :title="post.title"
      :description="post.description"
      :content="post.content"
    />
  </div>
</template>