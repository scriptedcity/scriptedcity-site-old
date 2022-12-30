<script setup lang="ts">
interface Props {
  avatarImageUrl: string;
  avatarSize: string;
  name: string;
  kana: string;
  description?: string;
  status: { name: string; color?: string };
  tags?: string[];
}
const props = defineProps<Props>();
</script>

<template>
  <div class="text-center mt-5 mb-5">
    <va-badge overlap :text="props.status.name" :color="props.status.color ?? 'primary'">
      <va-avatar :src="props.avatarImageUrl" :size="props.avatarSize" class="mb-3" />
    </va-badge>
    <va-divider>
      <div class="px-4">
        <span class="font-half">{{ props.name }}</span>
        <span v-if="props.kana" class="font-body"> / {{ props.kana }}</span>
      </div>
    </va-divider>
    <div v-if="props.tags" class="font-body mt-5 text-center md:mr-10 md:ml-10 lg:mr-40 lg:ml-40">
      <tag-cloud :tags="props.tags" />
    </div>
    <div v-if="props.description" class="font-body mt-1">
      <span class="text-sm">{{ props.description }}</span>
    </div>
  </div>
</template>
