<script setup>


const route = useRoute();

const token = computed(() => route.query.token);
const { verifyEmail } = useEmptyCommitData();

definePageMeta({
  layout: 'empty',
});

const { data } = useAsyncData(
  'posts',
  async () => {
    try {
      const { success } = await verifyEmail(token.value);
      console.log(success);
      return success;
    } catch (err) {
      console.error('Ошибка при авторизации пользователя:', err);
      return null;
    }
  },
  {
    server: true,
  }
);

onMounted(() => {
  if (data.value) {
    setTimeout(() => {
      navigateTo('/sign-in');
    }, 3000);
  }
});
</script>

<template>
  <BlockMessage :confirm="data"/>
</template>
