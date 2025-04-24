<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute, RouterView } from 'vue-router';
  import HomeLayout from './HomeLayout.vue';
  import AppLayout from './AppLayout.vue';
  const route = useRoute()
  const isHome = computed(() => route.path === '/');
  const layoutComponent = computed(() => {
  return route.meta.layout === 'HomeLayout' ? HomeLayout : AppLayout
})
</script>
<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>
