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
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto&family=Roboto+Mono:ital,wght@0,400;0,600;1,400&family=Zen+Kaku+Gothic+New&display=swap",
        },
      ],
    },
  },
});
