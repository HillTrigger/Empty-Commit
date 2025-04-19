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
},{
    server: true 
  });
</script>

<template>
  <div v-if="user" class="bg-bgSecondary py-3 px-4  border border-borderColor rounded-md w-full flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <div class="w-10 h-10 min-w-10 min-h-10 rounded-full overflow-hidden">
        <img :src="`https://directus.api.hilltrigger.ru/assets/${user.avatar}?width=256&height=256&fit=cover`" alt="ava">
      </div>
      <div class="flex flex-col">
        <span class="text-sm">{{ user.login }}</span>
        <span class="text-xs text-textSecondary">{{ date }}</span>
      </div>
      <NuxtLink :to="{ name: 'post-id', params: { id } }" class="hover:underline pl-2 relative before:content-[''] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-textColor before:w-1 before:h-1 text-lg md:text-xl text-center">
        {{ title }}
      </NuxtLink>
    </div>
    <div v-sanitize-html="postContent" class="w-full max-w-full rounded-md p-4 bg-bgSecondary200 markdown-body prose sm:prose-xl"/>
  </div>
</template>
