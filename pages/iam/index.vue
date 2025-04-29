<script setup>
definePageMeta({
  middleware: ['ban-if-not-auth'], // Только для этой страницы
	suspense: true,
});
</script>

<template>
  <BlockUserInfo/>
</template>