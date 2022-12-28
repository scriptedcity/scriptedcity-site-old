<template>
  <div>
    <nuxt-layout>
      <content-doc v-slot="{ doc }">
        <content-renderer-markdown class="markdown-body" :value="doc" />
      </content-doc>
    </nuxt-layout>
  </div>
</template>
