<script setup lang="ts">
const { $categories } = useNuxtApp();
</script>
<template>
  <va-navbar color="primary">
    <template #left>
      <va-navbar-item class="logo">
        <va-icon name="mdi-office-building" />
        <va-spacer />
        <nuxt-link to="/">
          <div class="font-half text-lg">Scripted City Revised</div>
          <div class="font-half text-sm">millstones web site</div>
        </nuxt-link>
      </va-navbar-item>
    </template>
    <template #center>
      <theme-picker class="w-30" />
    </template>
    <template #right>
      <va-button-group>
        <nuxt-link to="/">
          <va-button
            ><span class="font-half lg:text-lg md:text-md uppercase"
              >Top</span
            ></va-button
          >
        </nuxt-link>
        <template v-for="category in $categories">
          <nuxt-link :to="`/posts/${category}/`">
            <va-button
              ><span class="font-half lg:text-lg md:text-md uppercase">{{
                category
              }}</span></va-button
            >
          </nuxt-link>
        </template>
      </va-button-group>
    </template>
  </va-navbar>
</template>
