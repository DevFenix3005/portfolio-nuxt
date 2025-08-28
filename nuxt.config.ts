// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: "page", mode: "out-in"
    }
  },
  site: {
    name: "Roberto D. Cazarin | Portfolio"
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    "@nuxtjs/sitemap",
    '@nuxt/content'
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "min-light",
            dark: "min-dark"
          }
        }
      }
    }
  },
  colorMode: {
    classSuffix: ''
  },
  sitemap: {
    xsl: false,
    defaults: {
      changefreq: "monthly"
    },
    sortEntries: true,
  }
})