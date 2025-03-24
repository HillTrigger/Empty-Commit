// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
    head: {
      meta: [
        {
          'http-equiv': 'Content-Security-Policy',
          content: `default-src 'self'; 
                    script-src 'self' http://localhost:3000 'unsafe-eval' 'unsafe-inline'; 
                    style-src 'self' 'unsafe-inline'; 
                    img-src 'self' data:; 
                    font-src 'self'  http://localhost:3000; 
                    connect-src 'self'; 
                    object-src 'none'; 
                    frame-src 'none';`
        }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
	css: ['~/assets/styles/main.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@formkit/auto-animate',
    '@pinia/nuxt'
  ]
});