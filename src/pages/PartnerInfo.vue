<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NFlex, NDataTable } from 'naive-ui'
import { Bonus } from '../classes/Bonus'
import { useRoute } from 'vue-router';
import api from '../api'
const route = useRoute();
const partnerId = route.params.id;
const bonuses = ref<Bonus[]>([])
onMounted(async () => {
  bonuses.value = await api.get<Bonus[]>(`api/partner/${partnerId}/bonuses`).json()
})

const columns = [
  {
    title: 'Номер',
    key: 'id',
  },
  {
    title: 'Название',
    key: 'name',
  },
  {
    title: 'Дата',
    key: 'date',
  },
]
</script>
<template>
  <NFlex>
    <NDataTable :columns="columns" :data="bonuses"> </NDataTable>
  </NFlex>
</template>
<style scoped>
</style>
