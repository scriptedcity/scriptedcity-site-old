<script setup lang="ts">
interface Props {
  date: string | Date;
}
const props = defineProps<Props>();
</script>
<template>
  <div>
    <va-icon name="mdi-calendar" />
    <span class="ml-2 text-sm">{{ new Date(props.date).toLocaleDateString() }}</span>
  </div>
</template>
