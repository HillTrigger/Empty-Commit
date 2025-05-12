<script setup>
 const route = useRoute();

 const token = computed(() => route.query.token);
const { verifyEmail } = useEmptyCommitData();

definePageMeta({
  layout: 'empty',
});

const {data} = useAsyncData('posts', async () => {
  try {
		
    const {success} = await verifyEmail(token.value);
		console.log(success);
		
    return success;
  } catch (err) {
    console.error('Ошибка при авторизации пользователя:', err);
    return null;
  }
},{
    server: true
});
    // <p>{{ data }}</p>
</script>

<template>
  <div>
    <p>{{ data }}</p>
  </div>
</template>
