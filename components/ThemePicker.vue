<script setup lang="ts">
import { useColors } from "vuestic-ui";
import { computed } from "vue";

const { presets, setColors, getColor } = useColors();
const colorsToChange = [
  presets.value.light.primary,
  "#ef476f",
  "#ffd166",
  "#06d6a0",
  "#118ab2",
];

const primaryColor = computed({
  get() {
    return getColor("primary");
  },
  set(value) {
    setColors({ primary: value });
  },
});
</script>

<template>
  <div class="d-flex align-center">
    <va-color-palette
      v-model="primaryColor"
      :palette="colorsToChange"
      class="mx-4"
    />
  </div>
</template>
