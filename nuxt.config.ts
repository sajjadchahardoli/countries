// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts'
],
primevue: {
  options: {
      theme: {
          preset: Aura
      }
  }
},
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/fontawesome.js'],
  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  },
  googleFonts: {
    families: {
      'Nunito+Sans': [300, 600, 800], 
    },
    display: 'swap', 
  },
})
