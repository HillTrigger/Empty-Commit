<script setup>
	defineProps({
		pageTitle: {
			type: String,
			default: ''
		}
	});
  const modalStates = ref({
    ModalNavigation: false,
  });
	const {openModal, closeModal} = useModalAction(modalStates);
	const colorMode = useColorMode();

	const toggleColorMode = () => {
  	colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
	};

</script>

<template>
  <header class="border-b border-borderColor p-4 flex justify-between">
    <AppLogo :page-title="pageTitle"/>
    <div class="flex align-center gap-2">
      <BaseButton  :is-link="true" to="/sign-up">
        Войти
      </BaseButton>
      <BaseButton @click="toggleColorMode">
        <SvgMoon v-if="colorMode.preference === 'dark'" class="w-full h-full object-cover"/>
        <SvgSun v-else class="w-full h-full object-cover"/>
      </BaseButton>
      <AppBurger @click="openModal('ModalNavigation')"/>
    </div>
  </header>
  <teleport to='body'>
    <ModalNavigation v-model:flag="modalStates.ModalNavigation" :page-title="pageTitle" @close-modal="(e) => closeModal('ModalNavigation', e)"/>
  </teleport>
</template>