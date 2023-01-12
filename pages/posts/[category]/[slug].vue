<script setup lang="ts">
import { useColors } from "vuestic-ui";
const { getColor } = useColors();
const { $title, $meta } = useNuxtApp();
const primary = ref(getColor("primary"));
const textPrimary = ref(getColor("textPrimary"));
const backgroundPrimary = ref(getColor("backgroundPrimary"));
</script>

<template>
  <nuxt-layout>
    <content-doc v-slot="{ doc }">
      <ogp-head
        :title="`${$title} / ${doc.title}`"
        :description="doc.description"
        :url="`${$meta.url}${doc._path}`"
        :image="doc.image ? `${$meta.url}/${doc.image}` : ''"
      />
      <va-breadcrumbs class="mt-5">
        <va-breadcrumbs-item
          v-for="path in doc._path.split('/').slice(0, -1)"
          class="capitalize"
          :label="path"
        />
        <va-breadcrumbs-item :label="doc.title" />
      </va-breadcrumbs>
      <tag-cloud class="m-5" :tags="doc.tags" />
      <date-display :date="doc.date" />
      <tweet-button
        :title="doc.title"
        :url="`${$meta.url}${doc._path}`"
        :tags="doc.tags"
      />
      <content-renderer-markdown :value="doc" class="markdown-body font-half" />
    </content-doc>
  </nuxt-layout>
</template>

<style lang="scss">
.markdown-body {
  color: v-bind(textPrimary);
  background-color: v-bind(backgroundPrimary);
  padding: 2em;

  a {
    color: v-bind(textPrimary);

    &:hover {
      text-decoration: none;
    }
  }

  > p {
    text-indent: 1em;

    a {
      color: v-bind(primary);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > ul li {
    list-style-type: disc;

    a {
      color: v-bind(primary);

      &:hover {
        text-decoration: underline;
      }
    }

    > ul li {
      list-style-type: circle;

      > ul li {
        list-style-type: square;
      }
    }
  }
}
</style>
