<template>
  <div class="flex items-center justify-center h-screen">
    <div v-if="isAuthenticated">
      <p class="mb-4">Привет, {{ userInfo.name || userInfo.email }}!</p>
      <button
        class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        @click="handleAuth"
      >
        Выйти
      </button>
    </div>
    <div v-else>
      <button
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        @click="handleAuth"
      >
        Авторизоваться
      </button>
    </div>
  </div>
</template>

<script setup lang="js">


const {
  status,
  data,
  signIn,
  signOut
} = useAuth();

// Флаг авторизации
const isAuthenticated = computed(() => status.value === 'authenticated');

// Информация о пользователе (внутри data.value лежит объект user)
const userInfo = computed(() => data.value || {});

// Обработчик кнопки
function handleAuth() {
  if (isAuthenticated.value) {
    signOut();
  } else {
    signIn({ provider: 'directus' });
  }
}
</script>

<style scoped>
/* При необходимости добавь свои стили */
</style>
