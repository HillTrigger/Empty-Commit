// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 3000 // или любой другой порт
  },
	app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Empty Commit — блог фронтенд-разработчика, который учится на своих ошибках. Здесь вы найдете кривые костыли, грабли Nuxt и Vue, внезапные фиксы и честные заметки о том, как divы сводят с ума. Без теории, зато с !important и position: absolute.' },
        { name: 'keywords', content: `Frontend, разработка, блог, Vue ошибки, Верстка, 
					Ошибки, программирование, костыли, код, 
					Консольные ошибки, div, position, absolute, 
					important, хаки, Проблемы с Nuxt, Directus CMS, Безболезненный код, 
					Код без теории, Практический фронтенд,
					Это не баг это фича, git push force, Блог начинающего разработчика, 
					Заметки фронтенд-разработчика, Как не надо писать код, Смешные баги в коде, 
					Реальный опыт разработки, Программирование без правил, Веб-разработка без стресса, 
					Почему мой код не работает, Как я починил баг, Гайды для тех кто не читает гайды` },
        { name: 'author', content: 'HillTrigger' },
      ]
    }
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