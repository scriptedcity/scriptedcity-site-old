<script setup lang="ts">
const { $copyright } = useNuxtApp();
</script>
<template>
  <va-navbar color="primary">
    <template #left>
      <va-navbar-item class="logo">
        <va-icon name="mdi-copyright" />
        <div class="font-half text-sm">{{ $copyright }}</div>
      </va-navbar-item>
    </template>
    <template #right>
      <div class="font-half text-sm">Powered by</div>
      <va-icon name="mdi-vuejs" />
      <va-icon name="mdi-nuxt" />
    </template>
  </va-navbar>
</template>
