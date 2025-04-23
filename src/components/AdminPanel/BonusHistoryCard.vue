<script setup lang="ts">
import { NCard, NDataTable, NSpace, NButton } from 'naive-ui'
import { ref } from 'vue'

const props = defineProps<{
  history: any[]
  loading: boolean
}>()

const pagination = ref({
  pageSize: 10,
})

const emit = defineEmits(['export'])

const columns = [
  { title: 'ID', key: 'id' },
  { title: 'Волонтёр', key: 'volunteer_name' },
  { title: 'Партнёр', key: 'partner_name' },
  { title: 'Бонус', key: 'bonus_amount' },
  { title: 'Дата выдачи', key: 'issue_date' },
  { title: 'Статус', key: 'status' },
]
</script>

<template>
  <NCard title="История выдачи бонусов">
    <NDataTable
      :columns="columns"
      :data="history"
      :pagination="pagination"
      :loading="loading"
      bordered
      striped
    />
    <NSpace justify="end" class="mt-4">
      <NButton @click="$emit('export')" type="primary">Экспорт в CSV</NButton>
    </NSpace>
  </NCard>
</template>
