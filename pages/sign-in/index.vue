<script setup lang="js">
definePageMeta({
  layout: 'empty',
	middleware: ['ban-if-auth'], // Только для этой страницы
	suspense: true,
});

</script>

<template>
  <BlockAuthForm
    title="Sign in to Empty Commit"
    :is-full-form="false"/>
</template>