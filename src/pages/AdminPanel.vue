<script setup lang="ts">
import { ref, computed, onMounted, h, Component } from 'vue'
import { NLayout, NLayoutSider, NLayoutContent, NMenu, NIcon } from 'naive-ui' // Added NIcon here
import { CloudUploadOutline, BookOutline, PeopleOutline, BusinessOutline } from '@vicons/ionicons5'
import UploadCard from '../components/AdminPanel/UploadCard.vue'
import BonusHistoryCard from '../components/AdminPanel/BonusHistoryCard.vue'
import VolunteersCard from '../components/AdminPanel/VolunteersCard.vue'
import PartnersCard from '../components/AdminPanel/PartnersCard.vue'
import api from '../api'

const activeKey = ref('upload')
const historyLoading = ref(false)
const volunteersLoading = ref(false)
const partnersLoading = ref(false)

const bonusHistory = ref([])
const volunteers = ref([])
const partners = ref([])
const currentVolunteer = ref(null)
const currentPartner = ref(null)

function renderIcon(icon: Component) {
  return () => h(NIcon, { component: icon })
}
const menuOptions = [
  { label: 'Загрузка CSV', key: 'upload', icon: renderIcon(CloudUploadOutline) },
  { label: 'История бонусов', key: 'history', icon: renderIcon(BookOutline) },
  { label: 'Волонтёры', key: 'volunteers', icon: renderIcon(PeopleOutline) },
  { label: 'Партнёры', key: 'partners', icon: renderIcon(BusinessOutline) },
]

const fetchBonusHistory = async () => {
  historyLoading.value = true
  try {
    bonusHistory.value = await api.get('api/bonus-history').json()
  } finally {
    historyLoading.value = false
  }
}

const fetchVolunteers = async () => {
  volunteersLoading.value = true
  try {
    volunteers.value = await api.get('api/volunteers').json()
  } finally {
    volunteersLoading.value = false
  }
}

const fetchPartners = async () => {
  partnersLoading.value = true
  try {
    partners.value = await api.get('api/partners').json()
  } finally {
    partnersLoading.value = false
  }
}

const exportHistoryToCSV = () => {
  const headers = Object.keys(bonusHistory.value[0]).join(',')
  const rows = bonusHistory.value
    .map((obj) =>
      Object.values(obj)
        .map((v) => `"${v}"`)
        .join(','),
    )
    .join('\n')

  const csvContent = 'data:text/csv;charset=utf-8,' + headers + '\n' + rows
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', 'bonus_history.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const editVolunteer = (volunteer) => {
  currentVolunteer.value = { ...volunteer }
  activeKey.value = 'volunteers'
}

const deleteVolunteer = async (id) => {
  await api.delete(`api/volonters/${id}`)
  fetchVolunteers()
}

const handleVolunteerSubmit = async (formData) => {
  try {
    const url = formData.id ? `/api/volunteers/${formData.id}` : '/api/volunteers'
    const method = formData.id ? 'PUT' : 'POST'

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      console.log(formData.id ? 'Волонтёр обновлён' : 'Волонтёр добавлен')
      fetchVolunteers()
      currentVolunteer.value = null
    } else {
      throw new Error('Ошибка сервера')
    }
  } catch (error) {
    console.error('Ошибка сохранения волонтёра')
    console.error(error)
  }
}

const editPartner = (partner) => {
  currentPartner.value = { ...partner }
  activeKey.value = 'partners'
}

const deletePartner = async (id) => {
  await api.delete(`api/partners${id}`)
  fetchPartners()
}

const handlePartnerSubmit = async (formData) => {
  try {
    const url = formData.id ? `/api/partners/${formData.id}` : '/api/partners'
    const method = formData.id ? 'PUT' : 'POST'

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      console.log(formData.id ? 'Партнёр обновлён' : 'Партнёр добавлен')
      fetchPartners()
      currentPartner.value = null
    } else {
      throw new Error('Ошибка сервера')
    }
  } catch (error) {
    console.error('Ошибка сохранения партнёра')
    console.error(error)
  }
}

onMounted(() => {
  fetchBonusHistory()
  fetchVolunteers()
  fetchPartners()
})
</script>

<template>
  <NLayout has-sider>
    <NLayoutSider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
    >
      <NMenu
        v-model:value="activeKey"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </NLayoutSider>
    <NLayoutContent>
      <div class="admin-content">
        <UploadCard v-if="activeKey === 'upload'" />
        <BonusHistoryCard
          v-if="activeKey === 'history'"
          :history="bonusHistory"
          :loading="historyLoading"
          @export="exportHistoryToCSV"
        />
        <VolunteersCard
          v-if="activeKey === 'volunteers'"
          :volunteers="volunteers"
          :loading="volunteersLoading"
          :current-volunteer="currentVolunteer"
          @edit="editVolunteer"
          @delete="deleteVolunteer"
          @submit="handleVolunteerSubmit"
        />
        <PartnersCard
          v-if="activeKey === 'partners'"
          :partners="partners"
          :loading="partnersLoading"
          :current-partner="currentPartner"
          @edit="editPartner"
          @delete="deletePartner"
          @submit="handlePartnerSubmit"
        />
      </div>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped>
.admin-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.mt-2 {
  margin-top: 8px;
}

.mt-4 {
  margin-top: 16px;
}
</style>
