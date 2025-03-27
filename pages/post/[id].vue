<script lang="js" setup>
const id = useRoute().params;
const fff = ref(null);
const { getItem } = useEmptyCommitData();

onMounted(async () => {
	fff.value = await getItem(id.id);
});
</script>

<template>
  <h3>Пост с ID {{ fff }}</h3>
</template>