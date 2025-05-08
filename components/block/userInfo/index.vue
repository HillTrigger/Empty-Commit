<script setup lang="js">
const { $authStore } = useNuxtApp();
const {getUser} = useEmptyCommitData();

const { data: user } = useAsyncData(`user-${$authStore.userId}`, async () => {
  try {
		console.log($authStore.userId);
    const result = await getUser($authStore.userId);
			
    return result;
  } catch (err) {
    console.error('Ошибка при получении данных:', err);
    return [];
  }
},{
    server: true 
});
onMounted(() => {
	console.log(user.value);
});
</script>

<template>
  <div v-if="user" class="p-4">
    <div class="flex flex-col items-center gap-4">
      <div class="rounded-full min-w-64 min-h-64 w-64 h-64 overflow-hidden border-2 border-borderColor ">
        <img class="object-cover w-full h-full" :src="`https://directus.api.hilltrigger.ru/assets/${user.avatar}?width=512&height=512&fit=cover`" alt="ava">
      </div>
      <h4 class="text-2xl font-light text-textSecondary">{{ user.first_name }}</h4>
    </div>
  </div>
</template>