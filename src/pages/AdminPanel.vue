<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
    >
      <n-menu
        v-model:value="activeKey"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>

    <n-layout-content>
      <div class="admin-content">
        <n-card v-if="activeKey === 'upload'" title="Загрузка CSV">
          <n-upload
            action="/api/upload-csv"
            :headers="{
              Authorization: `Bearer ${token}`,
            }"
            :data="{
              type: 'bonuses',
            }"
            @finish="handleUploadFinish"
            @error="handleUploadError"
          >
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <CloudUploadOutline />
                </n-icon>
              </div>
              <n-text style="font-size: 16px"> Нажмите или перетащите файл для загрузки </n-text>
              <n-p depth="3" style="margin: 8px 0 0 0"> Загрузите CSV файл с данными бонусов </n-p>
            </n-upload-dragger>
          </n-upload>
          <n-space vertical class="mt-4">
            <n-input v-model:value="csvDelimiter" placeholder="Разделитель (по умолчанию ,)" />
            <n-button @click="downloadTemplate" type="primary" class="mt-2">
              Скачать шаблон CSV
            </n-button>
          </n-space>
        </n-card>

        <n-card v-if="activeKey === 'history'" title="История выдачи бонусов">
          <n-data-table
            :columns="historyColumns"
            :data="bonusHistory"
            :pagination="pagination"
            :loading="historyLoading"
            bordered
            striped
          />
          <n-space justify="end" class="mt-4">
            <n-button @click="exportHistoryToCSV" type="primary"> Экспорт в CSV </n-button>
          </n-space>
        </n-card>

        <n-card v-if="activeKey === 'volunteers'" title="Управление волонтёрами">
          <n-tabs type="line">
            <n-tab-pane name="list" tab="Список">
              <n-space vertical>
                <n-input
                  v-model:value="volunteerSearch"
                  placeholder="Поиск волонтёров..."
                  clearable
                />
                <n-data-table
                  :columns="volunteerColumns"
                  :data="filteredVolunteers"
                  :pagination="pagination"
                  :loading="volunteersLoading"
                  bordered
                />
              </n-space>
            </n-tab-pane>
            <n-tab-pane name="edit" tab="Добавить/Редактировать">
              <volunteer-edit-form :volunteer="currentVolunteer" @submit="handleVolunteerSubmit" />
            </n-tab-pane>
          </n-tabs>
        </n-card>

        <n-card v-if="activeKey === 'partners'" title="Управление партнёрами">
          <n-tabs type="line">
            <n-tab-pane name="list" tab="Список">
              <n-space vertical>
                <n-input v-model:value="partnerSearch" placeholder="Поиск партнёров..." clearable />
                <n-data-table
                  :columns="partnerColumns"
                  :data="filteredPartners"
                  :pagination="pagination"
                  :loading="partnersLoading"
                  bordered
                />
              </n-space>
            </n-tab-pane>
            <n-tab-pane name="edit" tab="Добавить/Редактировать">
              <partner-edit-form :partner="currentPartner" @submit="handlePartnerSubmit" />
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </div>
    </n-layout-content>
  </n-layout>
</template>

<script>
import { ref, computed, onMounted, h } from 'vue'
import {
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NMenu,
  NCard,
  NUpload,
  NUploadDragger,
  NIcon,
  NText,
  NP,
  NSpace,
  NButton,
  NInput,
  NDataTable,
  NTabs,
  NTabPane,

} from 'naive-ui'
import { CloudUploadOutline, BookOutline, PeopleOutline, BusinessOutline } from '@vicons/ionicons5'

export default {
  components: {
    NLayout,
    NLayoutSider,
    NLayoutContent,
    NMenu,
    NCard,
    NUpload,
    NUploadDragger,
    NIcon,
    NText,
    NP,
    NSpace,
    NButton,
    NInput,
    NDataTable,
    NTabs,
    NTabPane,
    CloudUploadOutline,
    BookOutline,
    PeopleOutline,
    BusinessOutline

  },
  setup() {
    const token = ref(localStorage.getItem('admin-token') || '')
    const activeKey = ref('upload')
    const csvDelimiter = ref(',')
    const historyLoading = ref(false)
    const volunteersLoading = ref(false)
    const partnersLoading = ref(false)
    const volunteerSearch = ref('')
    const partnerSearch = ref('')

    const bonusHistory = ref([])
    const volunteers = ref([])
    const partners = ref([])
    const currentVolunteer = ref(null)
    const currentPartner = ref(null)

    const pagination = ref({
      pageSize: 10,
    })

    const menuOptions = [
      {
        label: 'Загрузка CSV',
        key: 'upload',
        icon: () => h(CloudUploadOutline),
      },
      {
        label: 'История бонусов',
        key: 'history',
        icon: () => h(BookOutline),
      },
      {
        label: 'Волонтёры',
        key: 'volunteers',
        icon: () => h(PeopleOutline),
      },
      {
        label: 'Партнёры',
        key: 'partners',
        icon: () => h(BusinessOutline),
      },
    ]

    const historyColumns = [
      { title: 'ID', key: 'id' },
      { title: 'Волонтёр', key: 'volunteer_name' },
      { title: 'Партнёр', key: 'partner_name' },
      { title: 'Бонус', key: 'bonus_amount' },
      { title: 'Дата выдачи', key: 'issue_date' },
      { title: 'Статус', key: 'status' },
    ]

    const volunterColumns = [
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
                  onClick: () => editVolunteer(row),
                },
                { default: () => 'Редактировать' },
              ),
              h(
                NButton,
                {
                  size: 'small',
                  type: 'error',
                  onClick: () => deleteVolunteer(row.id),
                },
                { default: () => 'Удалить' },
              ),
            ],
          }),
      },
    ]

    const partnerColumns = [
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
                  onClick: () => editPartner(row),
                },
                { default: () => 'Редактировать' },
              ),
              h(
                NButton,
                {
                  size: 'small',
                  type: 'error',
                  onClick: () => deletePartner(row.id),
                },
                { default: () => 'Удалить' },
              ),
            ],
          }),
      },
    ]

    const filteredVolunteers = computed(() => {
      if (!volunteerSearch.value) return volunteers.value
      const search = volunteerSearch.value.toLowerCase()
      return volunteers.value.filter(
        (v) =>
          v.full_name.toLowerCase().includes(search) ||
          v.phone.includes(search) ||
          v.email.toLowerCase().includes(search),
      )
    })

    const filteredPartners = computed(() => {
      if (!partnerSearch.value) return partners.value
      const search = partnerSearch.value.toLowerCase()
      return partners.value.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          p.contact_person.toLowerCase().includes(search) ||
          p.phone.includes(search) ||
          p.email.toLowerCase().includes(search),
      )
    })

    const fetchBonusHistory = async () => {
      historyLoading.value = true
      try {
        const response = await fetch('/api/bonus-history', {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        })
        bonusHistory.value = await response.json()
      } catch (error) {
        console.error('Ошибка загрузки истории бонусов')
        console.error(error)
      } finally {
        historyLoading.value = false
      }
    }

    const fetchVolunteers = async () => {
      volunteersLoading.value = true
      try {
        const response = await fetch('/api/volunteers', {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        })
        volunteers.value = await response.json()
      } catch (error) {
        console.error('Ошибка загрузки волонтёров')
        console.error(error)
      } finally {
        volunteersLoading.value = false
      }
    }

    const fetchPartners = async () => {
      partnersLoading.value = true
      try {
        const response = await fetch('/api/partners', {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        })
        partners.value = await response.json()
      } catch (error) {
        console.error('Ошибка загрузки партнёров')
        console.error(error)
      } finally {
        partnersLoading.value = false
      }
    }

    const handleUploadFinish = ({ file }) => {
      console.success(`Файл ${file.name} успешно загружен`)
      fetchBonusHistory()
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
      try {
        await fetch(`/api/volunteers/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        })
        console.success('Волонтёр успешно удалён')
        fetchVolunteers()
      } catch (error) {
        console.error('Ошибка удаления волонтёра')
        console.error(error)
      }
    }

    const handleVolunteerSubmit = async (formData) => {
      try {
        const url = formData.id ? `/api/volunteers/${formData.id}` : '/api/volunteers'
        const method = formData.id ? 'PUT' : 'POST'

        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.value}`,
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          console.success(formData.id ? 'Волонтёр обновлён' : 'Волонтёр добавлен')
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
      try {
        await fetch(`/api/partners/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        })
        console.success('Партнёр успешно удалён')
        fetchPartners()
      } catch (error) {
        console.error('Ошибка удаления партнёра')
        console.error(error)
      }
    }

    const handlePartnerSubmit = async (formData) => {
      try {
        const url = formData.id ? `/api/partners/${formData.id}` : '/api/partners'
        const method = formData.id ? 'PUT' : 'POST'

        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.value}`,
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          console.success(formData.id ? 'Партнёр обновлён' : 'Партнёр добавлен')
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

    return {
      token,
      activeKey,
      menuOptions,
      csvDelimiter,
      bonusHistory,
      historyColumns,
      volunterColumns,
      partnerColumns,
      volunteers,
      partners,
      currentVolunteer,
      currentPartner,
      volunteerSearch,
      partnerSearch,
      filteredVolunteers,
      filteredPartners,
      historyLoading,
      volunteersLoading,
      partnersLoading,
      pagination,
      handleUploadFinish,
      handleUploadError,
      downloadTemplate,
      exportHistoryToCSV,
      editVolunteer,
      deleteVolunteer,
      handleVolunteerSubmit,
      editPartner,
      deletePartner,
      handlePartnerSubmit,
    }
  },
}
</script>

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
