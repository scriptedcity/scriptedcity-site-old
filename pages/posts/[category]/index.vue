<script setup lang="ts">
const { path, params } = useRoute();
</script>
<template>
  <div>
    <nuxt-layout>
      <lazy-card-list
        :title="
          typeof params.category === 'string'
            ? params.category
            : params.category[0]
        "
        :path="path.slice(0, -1)"
      />
    </nuxt-layout>
  </div>
</template>
