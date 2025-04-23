<script setup lang="ts">
import { NCard, NTabs, NTabPane, NSpace, NInput, NDataTable, NButton } from 'naive-ui'
import { ref, computed } from 'vue'
import VolunteerEditForm from './VolunteerEditForm.vue'

const props = defineProps<{
  volunteers: any[]
  loading: boolean
  currentVolunteer: any
}>()

const emit = defineEmits(['edit', 'delete', 'submit'])

const search = ref('')

const filteredVolunteers = computed(() => {
  if (!search.value) return props.volunteers
  const query = search.value.toLowerCase()
  return props.volunteers.filter(
    (v) =>
      v.full_name.toLowerCase().includes(query) ||
      v.phone.includes(query) ||
      v.email.toLowerCase().includes(query),
  )
})

const columns = [
  { title: 'ID', key: 'id' },
  { title: 'ФИО', key: 'full_name' },
  { title: 'Телефон', key: 'phone' },
  { title: 'Email', key: 'email' },
  { title: 'Статус', key: 'status' },
  {
    title: 'Действия',
    key: 'actions',
    render: (row) =>
      h(NSpace, null, {
        default: () => [
          h(
            NButton,
            {
              size: 'small',
              onClick: () => emit('edit', row),
            },
            { default: () => 'Редактировать' },
          ),
          h(
            NButton,
            {
              size: 'small',
              type: 'error',
              onClick: () => emit('delete', row.id),
            },
            { default: () => 'Удалить' },
          ),
        ],
      }),
  },
]
</script>

<template>
  <NCard title="Управление волонтёрами">
    <NTabs type="line">
      <NTabPane name="list" tab="Список">
        <NSpace vertical>
          <NInput v-model:value="search" placeholder="Поиск волонтёров..." clearable />
          <NDataTable :columns="columns" :data="filteredVolunteers" :loading="loading" bordered />
        </NSpace>
      </NTabPane>
      <NTabPane name="edit" tab="Добавить/Редактировать">
        <VolunteerEditForm
          :volunteer="currentVolunteer"
          @submit="(data) => $emit('submit', data)"
        />
      </NTabPane>
    </NTabs>
  </NCard>
</template>
