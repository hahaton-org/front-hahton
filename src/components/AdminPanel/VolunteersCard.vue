<script setup lang="ts">
import { NCard, NTabs, NTabPane, NSpace, NInput, NDataTable, NButton } from 'naive-ui'
import { ref, computed, h } from 'vue'
import VolunteerEditForm from './VolunteerEditForm.vue'
import { Volunteer } from '../../classes/Volunteer';

const activeTab = ref('list')
const pagination = ref({
  pageSize: 10,
})
const props = defineProps<{
  volunteers: Volunteer[];
  loading: boolean
  currentVolunteer: Volunteer | null
}>();

const emit = defineEmits<{
  edit: [volunteer: Volunteer];
  delete: [id: string],
  submit: [volunteer: Volunteer]
}>();

const search = ref('')

const filteredVolunteers = computed(() => {
  if (!search.value) return props.volunteers
  const query = search.value.toLowerCase()
  return props.volunteers.filter(
    (v) =>
      v.lastName.toLowerCase().includes(query) ||
      v.firstName.toLowerCase().includes(query) ||
      v.middleName.toLowerCase().includes(query) ||
      v.phone.includes(query) ||
      v.mail.toLowerCase().includes(query),
  )
})

const columns = [
  { title: 'Фамилия', key: 'lastName' },
  { title: 'Имя', key: 'firstName' },
  { title: 'Отчество', key: 'middleName' },
  { title: 'ИНН', key: 'inn' },
  { title: 'Телефон', key: 'phone' },
  { title: 'Email', key: 'mail' },
  { title: 'Статус', key: 'active' },
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
              onClick: () => { emit('edit', row); activeTab.value = 'edit'},
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
    <NTabs v-model:value="activeTab" type="line">
      <NTabPane name="list" tab="Список">
        <NSpace vertical>
          <NInput v-model:value="search" placeholder="Поиск волонтёров..." clearable />
          <NDataTable :columns="columns" :data="filteredVolunteers" :loading="loading" bordered :pagination="pagination"/>
        </NSpace>
      </NTabPane>
      <NTabPane name="edit" tab="Добавить/Редактировать">
        <VolunteerEditForm :volunteer="currentVolunteer" @submit="(volunteer: Volunteer) => $emit('submit', volunteer)" />
      </NTabPane>
    </NTabs>
  </NCard>
</template>
