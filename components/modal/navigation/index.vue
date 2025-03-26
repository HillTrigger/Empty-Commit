<script setup>
  defineProps({
    flag: {
			type: Boolean,
			required: true,
		},
		pageTitle: {
			type: String,
			default: ''
		}
  });

  const emit = defineEmits(['closeModal']);

  // function closeModal() {
  //   emit('update:flag', false);
  // }
</script>

<template>
  <transition name="navigation">
    <div v-if="flag" class=" fixed right-0 top-0 bottom-0 left-0 flex  justify-end bg-black bg-opacity-30" @click="(e) => emit('closeModal', e)">
      <div class="navigation-body h-full w-80 bg-background-300 rounded-l-xl p-4 flex flex-col gap-4">
        <div class="flex justify-between">
          <AppLogo :page-title="pageTitle"/>
          <button class="p-2" @click="(e) => emit('closeModal', e)">
            <SvgClose class="w-4 h-4"/>
          </button>
        </div>
        <div>
          <ul>
            <li class="flex items-center gap-1 px-2 py-1 hover:bg-background-400 rounded-md">
              <SvgHome class="text-text-primary h-4 w-4"/>
              <nuxt-link prefetch to="/">Главная</nuxt-link>
            </li>
            <li class="flex items-center gap-1 px-2 py-1 hover:bg-background-400 rounded-md">
              <SvgInfo class="text-text-primary h-4 w-4"/>
              <nuxt-link prefetch to="/about">О проекте</nuxt-link>
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