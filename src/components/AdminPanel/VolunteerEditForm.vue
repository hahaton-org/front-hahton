<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, NSpace } from 'naive-ui'
import { ref, watch } from 'vue'

const props = defineProps<{
  volunteer?: {
    id?: number
    full_name?: string
    phone?: string
    email?: string
    status?: string
  }
}>()

const emit = defineEmits(['submit'])

const formData = ref({
  id: undefined,
  full_name: '',
  phone: '',
  email: '',
  status: 'active',
})

watch(
  () => props.volunteer,
  (newVal) => {
    if (newVal) {
      formData.value = { ...newVal }
    } else {
      formData.value = {
        id: undefined,
        full_name: '',
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
    <NFormItem label="ФИО">
      <NInput v-model:value="formData.full_name" placeholder="Введите ФИО" />
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
