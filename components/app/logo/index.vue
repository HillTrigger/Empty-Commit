<script setup lang="js">
defineProps({
	pageTitle: {
		type: String,
		default: ''
	}
});
</script>

<template>
  <div class="flex items-center">
    <SvgLogo class="h-7"/>
    <span>{{ pageTitle }}</span>
  </div>
</template>