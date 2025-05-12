<script setup>
defineProps({
	href: {
		type: String,
		default: '/'
	}
});
</script>

<template>
  <a
    :href="href"
    class="font-medium text-textAccent"
  >
    <slot/>
  </a>
</template>