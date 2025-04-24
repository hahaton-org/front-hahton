<script setup lang="ts">
import { GivenBonus } from '../../classes/GivenBonus';
import { NCard, NDataTable, NSpace, NButton } from 'naive-ui'
import { ref } from 'vue'

const props = defineProps<{
  history: GivenBonus[]
  loading: boolean
}>()

const pagination = ref({
  pageSize: 10,
})

const emit = defineEmits(['export'])

const columns = [
  { title: 'Фамилия', key: 'volunteerLastName' },
  { title: 'Имя', key: 'volunteerFirstName' },
  { title: 'Отчество', key: 'volunteerMiddleName' },
  { title: 'Партнёр', key: 'partnerName' },
  { title: 'Категория', key: 'category' },
  { title: 'Дата выдачи', key: 'createdAt' }
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
