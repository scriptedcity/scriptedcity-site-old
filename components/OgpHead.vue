<script setup lang="ts">
const { $title, $meta } = useNuxtApp();
interface Props {
  type?: string;
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  image?: string;
  twitterCard?: string;
  twitterSite?: string;
}
const props = defineProps<Props>();

const metaTags = {
  type: props.type ?? $meta.type,
  title: props.title ?? $meta.title,
  description: props.description ?? $meta.description,
  url: props.url ?? $meta.url,
  siteName: props.siteName ?? $meta.siteName,
  image: props.image ?? $meta.image,
  twitterCard: props.twitterCard ?? $meta.twitterCard,
  twitterSite: props.twitterSite ?? $meta.twitterSite,
};
</script>
<template>

  <Head>
    <title>{{ $title }}</title>
    <Meta property="og:type" :content="metaTags.type" />
    <Meta property="og:title" :content="metaTags.title" />
    <Meta property="og:description" :content="metaTags.description" />
    <Meta property="og:url" :content="metaTags.url" />
    <Meta property="og:site_name" :content="metaTags.siteName" />
    <Meta property="og:image" :content="metaTags.image" />
    <Meta property="twitter:card" :content="metaTags.twitterCard" />
    <Meta property="twitter:site" :content="metaTags.twitterSite" />
  </Head>
</template>
