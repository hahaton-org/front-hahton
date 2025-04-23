<script setup lang="ts">
import { NCard, NTabs, NTabPane, NSpace, NInput, NDataTable, NButton } from 'naive-ui'
import { h } from 'vue';
const props = defineProps<{
  placeholder: string
}>();
</script>
<template>
  <NCard title="Управление волонтёрами">
    <NTabs type="line">
      <NTabPane name="list" tab="Список">
        <NSpace vertical>
          <NInput v-model:value="search" :placeholder=placeholder clearable />
          <NDataTable :columns="columns" :data="data"  bordered />
        </NSpace>
      </NTabPane>
      <NTabPane name="edit" tab="Добавить/Редактировать">
        <volunteer-edit-form :volunteer="currentVolunteer" @submit="handleVolunteerSubmit" />
      </NTabPane>
    </NTabs>
  </NCard>
</template>
