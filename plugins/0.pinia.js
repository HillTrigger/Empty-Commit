import { createPinia } from 'pinia';

import { defineNuxtPlugin } from '#app';
import { useAuthDataStore } from '~/stores/useAuthDataStore';

export default defineNuxtPlugin((nuxtApp) => {
  // 1️⃣ Создаем экземпляр Pinia
  const pinia = createPinia();
  // 2️⃣ Подключаем Pinia к Vue-приложению
  nuxtApp.vueApp.use(pinia);
  // 3️⃣ Делаем pinia доступной через nuxtApp.$pinia
  nuxtApp.provide('pinia', pinia);
  // 4️⃣ Создаем нужные store (например, authStore)
  const authStore = useAuthDataStore(pinia);
  // 5️⃣ Экспортируем store через provide
  return {
    provide: {
      authStore, // теперь доступен через useNuxtApp().$authStore
    },
  };
});