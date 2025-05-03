<script setup>
const { $authStore } = useNuxtApp();


definePageMeta({
  middleware: ['ban-if-not-auth'], // Только для этой страницы
	suspense: true,
});

const {getUser} = useEmptyCommitData();

onMounted(async () => {
	const data = await getUser($authStore.userId);
	console.log(data);
});
</script>

<template>
  <BlockUserInfo/>
</template>