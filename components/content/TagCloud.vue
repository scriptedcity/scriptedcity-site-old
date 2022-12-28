<script setup lang="ts">
type Tag = string | {name:string,color:string};

interface Props {
  tags: Tag[];
}
const props = defineProps<Props>();
const getText = (tag: Tag) => {
  if (typeof tag === "string") {
    return tag;
  }
  return tag.name;
};
const getColor = (tag: Tag) => {
  if (typeof tag === "string") {
    return 'primary';
  }
  return tag.color;
};
</script>

<template>
  <div>
    <template v-for="tag in props.tags">
      <va-badge
        square
        class="mr-1 font-semibold"
        :text="getText(tag)"
        :color="getColor(tag)"
      />
    </template>
  </div>
</template>
