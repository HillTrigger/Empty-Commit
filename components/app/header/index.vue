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

</script>

<template>
  <header class="border-b border-border p-4 flex justify-between">
    <AppLogo :page-title="pageTitle"/>
    <button class="border border-border p-2 rounded-md active:bg-buttonHover-200" @click="openModal('ModalNavigation')" >
      <SvgBurger class="w-4 h-4"/>
    </button>
  </header>
  <teleport to='body'>
    <ModalNavigation v-model:flag="modalStates.ModalNavigation" :page-title="pageTitle" @close-modal="(e) => closeModal('ModalNavigation', e)"/>
  </teleport>
</template>