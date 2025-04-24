<script setup>
  const props = defineProps({
    flag: {
			type: Boolean,
			required: true,
		},
		pageTitle: {
			type: String,
			default: ''
		},
		errors: {
			type: Array,
			default: () => []
		},
  });

  const emit = defineEmits(['closeModal']);
	// const modal = ref(null);

	// useModalScrollLock(props, modal);

	onMounted(() => {
		console.log(props.flag);
	});

</script>

<template>
  <transition name="error">
    <div  v-if="flag" class="z-50 absolute top-0 bottom-0 left-0 right-0  flex flex-col items-center justify-center"  @click="(e) => emit('closeModal', e)">
      <div class="bg-red-500 rounded-xl p-4 text-center">
        <ul>
          <li v-for="(error, index) in errors" :key="index" class="text-base">{{ error }}</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">

</style>