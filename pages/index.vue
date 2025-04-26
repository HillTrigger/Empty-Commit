<script setup lang="js">
// const { $directus, $isAuthenticated } = useNuxtApp();

// const pageTitle = useState('pageTitle', () => 'О нас'); // Заголовок для страницы "О нас"
useMetaTags({description: 'Empty Commit - All Posts', image: false, url: 'https://blog.hilltrigger.ru/'});

// onMounted(async () => {
// 	const auth = await $isAuthenticated();
// 	console.log('Auth: ', auth);
	
// });
</script>

<template>
  <div>
    <BlockPosts/>
  </div>
</template>
