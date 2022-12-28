<script setup lang="ts">
const { $title, $meta } = useNuxtApp();
</script>
<template>
  <nuxt-layout>
    <content-doc v-slot="{ doc }">
      <ogp-head
        :title="`${$title} / ${doc.title}`"
        :description="doc.description"
        :url="`${$meta.url}${doc._path}`"
        :image="`${$meta.url}/${doc.image}`"
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
      <content-renderer-markdown :value="doc" class="markdown-body font-half" />
    </content-doc>
  </nuxt-layout>
</template>

<style>
.markdown-body {
  background-color: #f6f6f6;
}

.markdown-body {
  padding: 2em;
}

.markdown-body > p {
  text-indent: 1em;
}

.markdown-body > ul li {
  list-style-type: circle;
}

.markdown-body > ul li ul li {
  list-style-type: square;
}
</style>
