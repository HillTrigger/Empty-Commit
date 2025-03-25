// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
	runtimeConfig: {
    apiKey: '', // Скрытый API-ключ (только сервер)
    public: {
      apiUrl: '', // Можно использовать на клиенте
    },
  },
  devtools: { enabled: true },
    css: ['~/assets/styles/main.scss'],
  modules: [
   '@nuxtjs/tailwindcss',
   '@nuxt/eslint',
   '@formkit/auto-animate',
   '@pinia/nuxt',
   '@radya/nuxt-dompurify'
  ]
});