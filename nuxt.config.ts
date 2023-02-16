// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  plugins: [{ src: "~/plugins/const.ts" }],
  css: [
    "vuestic-ui/css",
    "@mdi/font/css/materialdesignicons.min.css",
    "github-markdown-css/github-markdown-light.css",
  ],
  app: {
    head: {
      htmlAttrs: { lang: "ja" },
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
      ],
    },
  },
});
