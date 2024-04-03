<template>
  <i :class="className"></i>
</template>

<script setup lang="ts">
import {computed} from "#imports";

const props = withDefaults(
  defineProps<{
    type?: 'rr' | 'sr';
    icon: string;
  }>(),
  {
    type: 'rr'
  }
)
const className = computed(() => `app-icon fi fi-${props.type}-${props.icon}`);
</script>

<style lang="stylus">
.app-icon{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
