<script setup lang="ts">
import { h } from "vue";
import { VaAvatar } from "vuestic-ui";
import { NuxtLink } from "#components";

interface Props {
  avatarImageUrl: string;
  avatarSize: string;
  name: string;
  kana: string;
  description?: string;
  status: { name: string; color?: string };
  tags?: string[];
  links?: { name: string; icon: string; href: string; isNuxtLink?: boolean }[];
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
  const nameTag = h("div", { class: "uppercase font-half" }, [name]);
  const linkTag = isNuxtLink
    ? h(NuxtLink, { to: href }, () => [avaterTag, nameTag])
    : h(aTag, { href: href }, [avaterTag, nameTag]);
  return linkTag;
};
</script>

<template>
  <div class="text-center mt-5 mb-10">
    <va-badge
      overlap
      :text="props.status.name"
      :color="props.status.color ?? 'primary'"
    >
      <va-avatar
        :src="props.avatarImageUrl"
        :size="props.avatarSize"
        class="mb-3"
      />
    </va-badge>
    <va-divider>
      <div class="px-4">
        <span class="font-half">{{ props.name }}</span>
        <span v-if="props.kana" class="font-body"> / {{ props.kana }}</span>
      </div>
    </va-divider>
    <div
      v-if="props.tags"
      class="font-body mt-10 text-center md:mr-10 md:ml-10 lg:mr-40 lg:ml-40"
    >
      <tag-cloud :tags="props.tags" />
    </div>
    <div v-if="props.description" class="font-body mt-1">
      <span class="text-sm">{{ props.description }}</span>
    </div>
    <div class="flex m-10">
      <va-spacer />
      <div
        v-for="link in props.links"
        :class="`${link.name} flex-none tracking-wide`"
      >
        <render-link :props="link" />
      </div>
      <va-spacer />
    </div>
  </div>
</template>
