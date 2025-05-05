<script setup>
definePageMeta({
  layout: 'empty',
	middleware: ['ban-if-auth'], // Только для этой страницы
	suspense: true,
});
</script>

<template>
  <BlockAuthForm title="Sign up to Empty Commit"/>
</template>