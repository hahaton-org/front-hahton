<script setup lang="ts">
import { NSpace, NCard, NUpload, NUploadDragger, NInput, NButton, NIcon, NText, NP } from 'naive-ui'
import { CloudUploadOutline, BookOutline, PeopleOutline, BusinessOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
const props = defineProps<{}>()
const token = ref(null)
const csvDelimiter = ref(null)
const handleUploadFinish = ({ file }) => {
  console.log(`Файл ${file.name} успешно загружен`)
  // fetchBonusHistory()
}

const handleUploadError = ({ file }) => {
  console.error(`Ошибка загрузки файла ${file.name}`)
}
const downloadTemplate = () => {
  const csvContent =
    'data:text/csv;charset=utf-8,' +
    'volunteer_id,partner_id,bonus_amount,issue_date\n' +
    '1,1,100,2023-01-01\n' +
    '2,1,150,2023-01-02'

  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', 'bonus_template.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
<template>
  <NCard title="Загрузка CSV">
    <NUpload
      action="http://203.31.40.27:8080/api/admin/csvload"
      :headers="{
        Authorization: `Bearer ${token}`,
      }"
      :data="{
        type: 'bonuses',
      }"
      @finish="handleUploadFinish"
      @error="handleUploadError"
    >
      <NUploadDragger style="display: flex; flex-direction: column; align-items: center">
        <NIcon size="48" :depth="3" :component="CloudUploadOutline" />
        <NText>Нажмите или перетащите файл для загрузки</NText>
        <NP depth="3">Загрузите CSV файл с данными бонусов</NP>
      </NUploadDragger>
    </NUpload>
    <NSpace vertical class="mt-4">
      <NInput v-model:value="csvDelimiter" placeholder="Разделитель (по умолчанию ,)" />
      <NButton @click="downloadTemplate" type="primary" class="mt-2">Скачать шаблон CSV</NButton>
    </NSpace>
  </NCard>
</template>
