// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
      },

      runtimeConfig: {
        public: {
          graphqlURL: process.env.STRAPI_GRAPGHQL || 'http://localhost:1337/graphql',
          strapiURL: process.env.STRAPI_URL || 'http://localhost:1337',
        }
      },
})
