<script setup lang="ts">
import { NCard, NTabs, NTabPane, NSpace, NInput, NDataTable, NButton } from 'naive-ui'
import { ref, computed } from 'vue'
import PartnerEditForm from './PartnerEditForm.vue'

const props = defineProps<{
  partners: any[]
  loading: boolean
  currentPartner: any
}>()

const emit = defineEmits(['edit', 'delete', 'submit'])

const search = ref('')

const filteredPartners = computed(() => {
  if (!search.value) return props.partners
  const query = search.value.toLowerCase()
  return props.partners.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.contact_person.toLowerCase().includes(query) ||
      p.phone.includes(query) ||
      p.email.toLowerCase().includes(query),
  )
})

const columns = [
  { title: 'ID', key: 'id' },
  { title: 'Название', key: 'name' },
  { title: 'Контактное лицо', key: 'contact_person' },
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
  <NCard title="Управление партнёрами">
    <NTabs type="line">
      <NTabPane name="list" tab="Список">
        <NSpace vertical>
          <NInput v-model:value="search" placeholder="Поиск партнёров..." clearable />
          <NDataTable :columns="columns" :data="filteredPartners" :loading="loading" bordered />
        </NSpace>
      </NTabPane>
      <NTabPane name="edit" tab="Добавить/Редактировать">
        <PartnerEditForm :partner="currentPartner" @submit="(data) => $emit('submit', data)" />
      </NTabPane>
    </NTabs>
  </NCard>
</template>
