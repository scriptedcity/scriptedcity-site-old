<script setup lang="ts">
import { useColors } from "vuestic-ui";
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
    <div class="flex flex-wrap mt-10 md:ml-2 md:mr-2 lg:ml-5 lg:mr-5">
      <va-card
        v-for="(content, index) in contents"
        :class="`${width} m-4 popup self-start`"
      >
        <va-badge overlap :text="index === 0 ? 'latest' : ''" class="z-10" />
        <nuxt-link :to="content._path">
          <va-card-block class="mb-auto">
            <div v-if="content.icon" :class="`text-center`">
              <va-avatar :icon="content.icon" size="large" color="primary" />
            </div>
            <va-image
              v-if="content.image"
              class="-top-4"
              :src="getImagePath($route.fullPath, content.image)"
          /></va-card-block>
          <va-card-block>
            <va-card-title
              class="font-body text-lg"
              :style="`color: ${useColors().getColor(
                'textPrimary'
              )}; a:hover{ text-decolation: none }`"
              >{{ content.title }}</va-card-title
            >
            <va-card-content class="font-body text-sm">
              <div v-if="content.tags" class="font-body">
                <tag-cloud :tags="content.tags" />
              </div>
            </va-card-content>
          </va-card-block>
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
