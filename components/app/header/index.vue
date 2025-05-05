<script setup>
import { useHeader } from './js/useHeader';
import HeaderControls from './ui/HeaderControlsLayout';
import HeaderLayout from './ui/HeaderLayout';

	const { $authStore, $logout } = useNuxtApp();

	defineProps({
		pageTitle: {
			type: String,
			default: ''
		}
	});

	const {
		toggleColorMode, openModal, closeModal, modalStates, colorMode
	} = useHeader();


</script>

<template>
  <HeaderLayout>
    <nuxt-link to="/">
      <AppLogo :page-title="pageTitle"/>
    </nuxt-link>
    <HeaderControls>
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
    </HeaderControls>
  </HeaderLayout>
  <teleport to='body'>
    <ModalNavigation v-model:flag="modalStates.ModalNavigation" :page-title="pageTitle" @close-modal="(e) => closeModal('ModalNavigation', e)"/>
  </teleport>
</template>