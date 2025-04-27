<script>
definePageMeta({
  middleware: ['ban-if-not-auth'], // Только для этой страницы
	suspense: true,
});
</script>

<template>
  <div>
    Тестовая страница
  </div>
</template>