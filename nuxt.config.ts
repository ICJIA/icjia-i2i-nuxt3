// nuxt.config.ts
//
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "i2i | Institute to Innovate",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: "description",
          content: "Investing in Public Safety by Investing in You.",
        },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {},
  runtimeConfig: {
    // The private keys which are only available within server-side
    // apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL || "default_api_url",
      apiSecret: process.env.NUXT_API_SECRET || "default_other_url",
    },
  },
});
