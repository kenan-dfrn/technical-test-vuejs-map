// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  /*
  *   Remove autoPrefix for components
  */
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }]
  },

  css: [
    '@/assets/scss/main.scss',
    'leaflet/dist/leaflet.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
