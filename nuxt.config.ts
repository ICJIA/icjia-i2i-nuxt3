// nuxt.config.ts
//
// https://v3.nuxtjs.org/api/configuration/nuxt.config\

import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  app: {
    // baseURL: "/i2i/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Institute to Innovate",
      meta: [
        {
          name: "description",
          content: "Investing in Public Safety by Investing in You.",
        },
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.6.1.slim.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/css/variables.scss",
    "~/assets/css/app.css",
    "~/assets/css/github-markdown.css",
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

  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/apollo",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/content",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (options, nuxt) => {
      await nuxt.hooks.hook("vite:extendConfig", (config) => {
        // console.log(config);
        config?.plugins?.push(vuetify());
      });
    },
  ],
  content: {
    documentDriven: false,
    markdown: {
      mdc: true,
      anchorLinks: false,
    },
  },
  googleFonts: {
    inject: true,
    download: true,
    display: "swap",
    prefetch: true,
    families: {
      Roboto: {
        wght: [100, 400, 700, 900],
        ital: [100],
      },
      Lato: {
        wght: [100, 400, 700, 900],
        ital: [100],
      },
      Raleway: {
        wght: [100, 400, 900],
        ital: [100],
      },
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://r3.icjia-api.cloud/graphql",
      },
    },
  },
});
