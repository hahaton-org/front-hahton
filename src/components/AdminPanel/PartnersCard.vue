<script setup lang="ts">
import { NCard, NTabs, NTabPane, NSpace, NInput, NDataTable, NButton } from 'naive-ui'
import { ref, computed, h } from 'vue'
import PartnerEditForm from './PartnerEditForm.vue'
import { Partner } from '../../classes/Partner';

const activeTab = ref('list')

const props = defineProps<{
  partners: Partner[]
  loading: boolean
  currentPartner: Partner | null
}>()

const emit = defineEmits<{
  edit: [partner: Partner];
  delete: [id: string],
  submit: [partner: Partner]
}>();

const search = ref('')

const filteredPartners = computed(() => {
  if (!search.value) return props.partners
  const query = search.value.toLowerCase()
  return props.partners.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.inn.toLowerCase().includes(query) ||
      p.type.includes(query) ||
      p.mail.toLowerCase().includes(query),
  )
})

const columns = [
  { title: 'Название', key: 'name' },
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
              onClick: () => { emit('edit', row); activeTab.value = 'edit' },
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
    <NTabs v-model:value="activeTab" type="line">
      <NTabPane name="list" tab="Список">
        <NSpace vertical>
          <NInput v-model:value="search" placeholder="Поиск партнёров..." clearable />
          <NDataTable :columns="columns" :data="filteredPartners" :loading="loading" bordered />
        </NSpace>
      </NTabPane>
      <NTabPane name="edit" tab="Добавить/Редактировать">
        <PartnerEditForm :partner="currentPartner" @submit="(partner: Partner) => $emit('submit', partner)" />
      </NTabPane>
    </NTabs>
  </NCard>
</template>
