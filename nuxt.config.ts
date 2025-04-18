// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 3000 // или любой другой порт
  },
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
    '@radya/nuxt-dompurify',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt'
  ],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  }
});