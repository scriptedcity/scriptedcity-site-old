<script setup lang="ts">
interface Props {
  title?: string;
  limit?: number;
  path?: string;
}
const props = withDefaults(defineProps<Props>(), { title: "latest posts", limit: 3, path: '/', });
const data = (await queryContent(props.path).where({ date: { $exists: true } }).sort({ date: -1 }).find()).slice(0, props.limit);
</script>
<template>
  <text-divider class="mt-5">{{ props.title }}</text-divider>
  <div class="font-body mt-5 text-center md:mr-10 md:ml-10 lg:mr-40 lg:ml-40">
    <va-list>
      <va-list-item class="list__item" v-for="(post, index) in data" :key="index" :to="post._path">
        <va-list-item-section avatar>
          <va-avatar color="primary" size="small" icon="mdi-note-text-outline" />
        </va-list-item-section>
        <va-list-item-section>
          <va-list-item-label>
            <date-display :date="post.date" />
          </va-list-item-label>
        </va-list-item-section>

        <va-list-item-section class="text-left">
          <va-list-item-label>
            {{ post.title }}
          </va-list-item-label>
          <va-list-item-label>
            <tag-cloud :tags="post.tags" />
          </va-list-item-label>
        </va-list-item-section>

      </va-list-item>
    </va-list>
  </div>
</template>
