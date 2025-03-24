<script setup lang="js">
import { renderMarkdown } from '~/composables/useMarkdown';

const props = defineProps({
	id: {
    type: Number,
		required: true,
  },
  title: {
    type: String,
		required: true,
  },
	author: {
    type: String,
		required: true,
  },
	content: {
    type: String,
		default: undefined
  },
});

const postContent = renderMarkdown(props.content);

</script>

<template>
  <div class="bg-background-200 py-3 px-4  border border-border rounded-md w-full">
    <div>
      <span>{{ author }}</span>
    </div>
    <div v-sanitize-html="postContent" class="bg-background-300 w-full rounded-md p-4"/>
  </div>
</template>