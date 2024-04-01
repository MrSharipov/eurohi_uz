<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {useSeoMeta} from "#imports";

const desc = 'PFL.UZ';

useSeoMeta({
  title: 'PFL.UZ',
  ogTitle: 'PFL.UZ',
  description: desc,
  ogDescription: desc,
  ogImage: '',
  twitterCard: 'summary_large_image',
});
</script>