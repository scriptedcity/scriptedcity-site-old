import { createVuestic, createIconsConfig } from "vuestic-ui";
const fonts = [
  {
    name: /mdi-(.*)/,
    resolveFromRegex: (icon) => ({
      class: `mdi mdi-${icon}`,
      tag: 'span'
    }),
  },
];

export default defineNuxtPlugin((nuxtApp) => {
  const vuestic = createVuestic({
    config: {
      icons: createIconsConfig({ fonts }),
    },
  });

  nuxtApp.vueApp.use(vuestic);
});
