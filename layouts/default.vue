
<script setup>
	useHead({ title: title[useRoute().path] });
</script>

<template>
  <div>
    <AppHeader/>
    <main>
      <slot />
    </main>
  </div>
</template>