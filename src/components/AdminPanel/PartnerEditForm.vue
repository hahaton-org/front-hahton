<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, NSpace } from 'naive-ui'
import { ref, watch } from 'vue'

const props = defineProps<{
  partner?: {
    id?: number
    name?: string
    contact_person?: string
    phone?: string
    email?: string
    status?: string
  }
}>()

const emit = defineEmits(['submit'])

const formData = ref({
  id: undefined,
  name: '',
  contact_person: '',
  phone: '',
  email: '',
  status: 'active',
})

watch(
  () => props.partner,
  (newVal) => {
    if (newVal) {
      formData.value = { ...newVal }
    } else {
      formData.value = {
        id: undefined,
        name: '',
        contact_person: '',
        phone: '',
        email: '',
        status: 'active',
      }
    }
  },
  { immediate: true },
)

const handleSubmit = () => {
  emit('submit', formData.value)
}
</script>

<template>
  <NForm>
    <NFormItem label="Название">
      <NInput v-model:value="formData.name" placeholder="Введите название" />
    </NFormItem>
    <NFormItem label="Контактное лицо">
      <NInput v-model:value="formData.contact_person" placeholder="Введите контактное лицо" />
    </NFormItem>
    <NFormItem label="Телефон">
      <NInput v-model:value="formData.phone" placeholder="Введите телефон" />
    </NFormItem>
    <NFormItem label="Email">
      <NInput v-model:value="formData.email" placeholder="Введите email" />
    </NFormItem>
    <NSpace justify="end">
      <NButton type="primary" @click="handleSubmit">
        {{ formData.id ? 'Обновить' : 'Добавить' }}
      </NButton>
    </NSpace>
  </NForm>
</template>
