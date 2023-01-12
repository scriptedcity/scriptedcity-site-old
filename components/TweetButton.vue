<script setup lang="ts">
type Tag = string | { name: string; color: string };

interface Props {
  title: string;
  url: string;
  tags: Tag[];
}
const props = defineProps<Props>();
const tagsToText = (tags: Tag[]) => {
  return tags
    .map((tag) => {
      if (typeof tag === "string") {
        return tag.replace(/ /g, "");
      }
      return tag.name.replace(/ /g, "");
    })
    .join(",");
};
</script>

<template>
  <a
    :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(
      props.title
    )}&url=${props.url}&hashtags=${tagsToText(props.tags)}`"
  >
    <va-button size="small" icon="mdi-twitter" color="#1DA1F2" class="mr-3 mb-2"
      >Tweet</va-button
    >
  </a>
</template>
