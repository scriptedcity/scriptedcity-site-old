<script setup lang="ts">
import { h } from "vue";
import { VaAvatar, useColors } from "vuestic-ui";
import { NuxtLink } from "#components";

interface Props {
  links: { name: string; icon: string; href: string; isNuxtLink?: boolean }[];
}
const props = defineProps<Props>();

// aタグとnuxt-linkタグを出し分ける
const aTag = h("a");
const RenderLink = (renderProps: {
  props: {
    name: string;
    icon: string;
    href: string;
    isNuxtLink?: boolean;
  };
}) => {
  const { icon, name, href, isNuxtLink } = renderProps.props;
  const avaterTag = h(VaAvatar, {
    icon: icon,
    class: "m-2 popup",
    color: "primary",
  });
  const nameTag = h(
    "div",
    {
      class: "uppercase font-half noHoverDecolation",
      style: `color: ${useColors().getColor('textPrimary')}`,
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
      <render-link :props="link" />
    </div>
  </div>
</template>
