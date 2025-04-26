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

	const { $authStore, $logout } = useNuxtApp();
	

</script>

<template>
  <header class="relative z-10 border-b border-borderColor p-4 flex justify-between">
    <AppLogo :page-title="pageTitle"/>
    <div class="flex align-center gap-2">
      <client-only>
        <BaseButton v-if="!$authStore.userIsAuthenticated"  :is-link="true" to="/sign-in">
          Войти
        </BaseButton>
        <BaseButton v-else @click="$logout">
          Выйти
        </BaseButton>
      </client-only>
      <client-only>
        <BaseButton @click="toggleColorMode">
          <SvgMoon v-if="colorMode.value === 'dark'" class="w-full h-full object-cover"/>
          <SvgSun v-else class="w-full h-full object-cover"/>
        </BaseButton>
      </client-only>
      <AppBurger @click="openModal('ModalNavigation')"/>
    </div>
  </header>
  <teleport to='body'>
    <ModalNavigation v-model:flag="modalStates.ModalNavigation" :page-title="pageTitle" @close-modal="(e) => closeModal('ModalNavigation', e)"/>
  </teleport>
</template>