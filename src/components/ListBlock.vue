<script setup lang="ts">
import { Award } from '@/classes/Award'
import { DataTableColumns, NDataTable } from 'naive-ui'
const props = defineProps<{
  data: Award[]
}>()
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
  <NDataTable :columns="columns" :data="data"> </NDataTable>
</template>
<style scoped></style>
