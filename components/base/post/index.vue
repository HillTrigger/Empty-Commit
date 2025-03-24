<script setup lang="js">
defineProps({
	id: {
    type: Number,
		required: true,
  },
  title: {
    type: String,
		required: true,
  },
	description: {
    type: String,
		default: undefined
  },
});

</script>

<template>
  <a href="#">
    <h4>{{ id }} - {{ title }}</h4>
    <p>{{ description }}</p>
  </a>
</template>