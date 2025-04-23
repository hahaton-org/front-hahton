<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import api from '../api';
  import VolonterCard from '../components/VolonterCard.vue';
  import { Volonter } from '../classes/Volonter';
  const volonters = ref<Volonter[]>([]);
  onMounted(async () => {
    volonters.value = await api.get('api/volonter').json();
  });
</script>
<template>
  <VolonterCard v-for="volonter of volonters" :volonter="volonter"></VolonterCard>
</template>
<style scoped>
</style>
