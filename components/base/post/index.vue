<script setup lang="js">
import { renderMarkdown } from '~/composables/useMarkdown';
const {getUser} = useEmptyCommitData();


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
		required: true,
  },
	date: {
    type: String,
		required: true,
  }
});

const postContent = computed(() => renderMarkdown(props.content));

const { data: user } = useAsyncData(`user-${props.author}`, async () => {
  try {
    const result = await getUser(props.author);
    return result || [];
  } catch (err) {
    console.error('Ошибка при получении данных:', err);
    return [];
  }
}, { server: true });
</script>

<template>
  <div class="bg-background-200 py-3 px-4  border border-border rounded-md w-full flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <div class="w-10 h-10 rounded-full overflow-hidden">
        <img :src="`https://directus.api.hilltrigger.ru/assets/${user.avatar}?width=256&height=256&fit=cover`" alt="ava">
      </div>
      <div class="flex flex-col">
        <span class="text-sm">{{ user.login }}</span>
        <span class="text-xs text-text-secondary">{{ date }}</span>
      </div>
    </div>
    <div v-sanitize-html="postContent" class="bg-background-300 w-full rounded-md p-4"/>
  </div>
</template>