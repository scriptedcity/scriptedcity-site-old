<script setup lang="ts">
interface Props {
  title: string;
  path: string;
  cardWidth?: string;
  max?: number;
}

const props = defineProps<Props>();
const data = await queryContent(props.path).limit(0).sort({ _id: -1 }).find();

const width = props.cardWidth ?? "w-48";
const contents =
  props.max && props.max < data.length ? data.slice(0, props.max) : data;

const getImagePath = (route: string, imagePath: string) => {
  if (!imagePath) {
    return "";
  }
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  const path = route
    .split("/")
    .filter((elem) => elem)
    .map(() => {
      return "../";
    })
    .join("");
  return path + imagePath;
};
</script>
<template>
  <div class="m-10">
    <text-divider>{{ title }}</text-divider>
    <div class="flex flex-wrap mt-10 md:ml-3 md:mr-3 lg:ml-5 lg:mr-5">
      <va-card
        v-for="(content, index) in contents"
        :class="`${width} m-4 popup`"
      >
        <nuxt-link :to="content._path">
          <va-badge overlap :text="index === 0 ? 'latest' : ''" class="z-10" />
          <va-image
            class="-top-4"
            :src="getImagePath($route.fullPath, content.image)"
          />
          <va-card-title class="font-body text-lg">{{
            content.title
          }}</va-card-title>
          <va-card-content class="font-body text-sm">
            <div v-if="content.tags" class="font-body">
              <tag-cloud :tags="content.tags" />
            </div>
          </va-card-content>
        </nuxt-link>
      </va-card>
    </div>
    <div
      v-if="props.max && contents && props.max < contents.length"
      class="text-right"
    >
      <nuxt-link :to="props.path">
        <va-button
          icon-right="mdi-arrow-right"
          size="small"
          class="mr-3 mb-2 popup"
        >
          <span class="uppercase">more...</span>
        </va-button>
      </nuxt-link>
    </div>
  </div>
</template>
