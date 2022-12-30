<script setup lang="ts">
import { h } from "vue";
import { VaAvatar, useColors } from "vuestic-ui";
import { NuxtLink } from "#components";

interface Props {
  links: { name: string; icon: string; href: string; isNuxtLink?: boolean }[];
  nolabel?: boolean;
  color?: string;
}
const props = withDefaults(defineProps<Props>(), {
  nolabel: false,
  color: "primary",
});

// aタグとnuxt-linkタグを出し分ける
const aTag = h("a");
const RenderLink = (renderProps: {
  color: string,
  link: {
    name: string,
    icon: string,
    href: string,
    isNuxtLink?: boolean
  };
}) => {
  const { icon, name, href, isNuxtLink } = renderProps.link;

  const avaterTag = h(VaAvatar, {
    icon: icon,
    class: "m-2 popup",
    color: renderProps.color,
  });
  const nameTag = h(
    "div",
    {
      class: "uppercase font-half",
      style: `color: ${useColors().getColor("textPrimary")}`,
    },
    [name]
  );
  const linkTag = isNuxtLink
    ? h(NuxtLink, { to: href }, () => [avaterTag, nameTag])
    : h(aTag, { href: href }, [avaterTag, nameTag]);
  return linkTag;
};
</script>

<template>
  <div class="text-center flex md:ml-2 md:mr-2 lg:ml-10 lg:mr-10">
    <div v-for="link in props.links" :class="`${link.name} flex-none tracking-wide`">
      <render-link :color="props.color" :link="link" />
    </div>
  </div>
</template>
