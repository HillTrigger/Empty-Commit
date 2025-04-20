// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	nitro: {
    preset: 'node-server' // важно для серверного рендеринга
  },
	app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
				{ name: 'description', content: 'Empty Commit — личный блог фронтенд‑разработчика, который учится на собственных ошибках. Здесь вы найдёте кривые костыли, ловушки Nuxt и Vue, внезапные фиксы и честные заметки о том, как div‑ы сводят с ума. Без лишней теории, зато с !important и position:absolute.' },
				{ name: 'keywords', content: 'Frontend, веб‑разработка, разработка интерфейсов, вёрстка, адаптивная вёрстка, кроссбраузерность, CSS‑хаки, Flex, Grid, position:absolute, !important, CSS‑трикcы, HTML, JavaScript, TypeScript, Vue.js, Vue 3, Composition API, Nuxt.js, SSR, Directus CMS, Headless CMS, API‑интеграция, производительность фронтенда, оптимизация, анти‑паттерны, костыли, багфикс, фикс багов, смешные баги, консольные ошибки, ловушки кода, код без теории, практический фронтенд, безболезненный код, git push --force, безопасный git‑workflow, блог фронтенд‑разработчика, заметки разработчика, гайды для ленивых, Empty Commit, личный блог, RSS, feed, HillTrigger' },
        { name: 'author', content: 'HillTrigger' },
      ]
    }
  },
  compatibilityDate: '2024-11-01',
    runtimeConfig: {
    apiKey: 'LTRsa-3oU2bVj9lGHGyR7_t-iffYxKuG',
    public: {
      apiUrl: 'https://directus.api.hilltrigger.ru',
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
    '@vueuse/nuxt',
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
  },
  // Добавьте эти настройки для обработки Vite-предупреждений
  vite: {
    build: {
      rollupOptions: {
        external: [
          'fs', 'path', 'http', 'https', 'url', 'net', 'tls',
          'zlib', 'crypto', 'stream', 'util', 'os', 'vm',
          'child_process', 'assert'
        ]
      }
    },
    optimizeDeps: {
      exclude: ['jsdom']
    }
  }
});