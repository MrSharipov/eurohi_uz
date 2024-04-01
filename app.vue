<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {useSeoMeta} from "#imports";

const desc = 'EuroHI.UZ';

useSeoMeta({
  title: 'EuroHI.UZ',
  ogTitle: 'EuroHI.UZ',
  description: desc,
  ogDescription: desc,
  ogImage: '',
  twitterCard: 'summary_large_image',
});
</script>