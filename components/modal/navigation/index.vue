<script setup>
  const props = defineProps({
    flag: {
			type: Boolean,
			required: true,
		},
		pageTitle: {
			type: String,
			default: ''
		}
  });
	const { $authStore } =useNuxtApp();
  const emit = defineEmits(['closeModal']);
	const modal = ref(null);

	useModalScrollLock(props, modal);


</script>

<template>
  <transition name="navigation">
    <div
      v-if="flag"
      class="z-40 fixed right-0 top-0 bottom-0 left-0 flex  justify-end bg-bgMain bg-opacity-30"
      @click="(e) => emit('closeModal', e)">
      <div ref="modal" class="navigation-body h-full w-80 bg-bgSecondary200 rounded-l-xl p-4 flex flex-col gap-4">
        <div class="flex justify-between">
          <AppLogo :page-title="pageTitle"/>
          <button class="p-2" @click="(e) => emit('closeModal')">
            <SvgClose class="w-4 h-4"/>
          </button>
        </div>
        <div>
          <ul>
            <li class="">
              <nuxt-link class="px-2 py-1 flex items-center gap-1 hover:bg-bgSecondary300 rounded-md" prefetch to="/">
                <SvgHome class="text-textColor h-4 w-4"/>
                Главная</nuxt-link>
            </li>
            <li class="">
              <nuxt-link class="px-2 py-1 flex items-center gap-1 hover:bg-bgSecondary300 rounded-md" prefetch to="/about">
                <SvgInfo class="text-textColor h-4 w-4"/>
                О проекте</nuxt-link>
            </li>
            <li v-if="$authStore.userIsAuthenticated" class="">
              <nuxt-link class="px-2 py-1 flex items-center gap-1 hover:bg-bgSecondary300 rounded-md" prefetch to="/iam">
                <SvgPeople class="text-textColor h-4 w-4"/>
                Личный кабинет</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.navigation-enter-from {
  opacity: 0;
}
.navigation-enter-to {
  opacity: 1;
}
.navigation-enter-active {
  transition: opacity 0.8s;
}

.navigation-leave-from {
  opacity: 1;
}
.navigation-leave-to {
  opacity: 0;
}
.navigation-leave-active {
  transition: opacity 0.8s;
}
.navigation-enter-from .navigation-body {
  transform: translateX(100%);
}
.navigation-enter-to .navigation-body {
  transform: none;
}
.navigation-enter-active .navigation-body {
  transition: transform 0.5s;
}
.navigation-leave-from .navigation-body {
  transform: none;
}
.navigation-leave-to .navigation-body {
  transform: translateX(100%);
}
.navigation-leave-active .navigation-body {
  transition: transform 0.5s;
}

</style>