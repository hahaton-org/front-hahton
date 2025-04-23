<script setup lang="ts">
import { Partner } from '../../classes/Partner';
import { NForm, NFormItem, NInput, NButton, NSpace, FormRules } from 'naive-ui'
import { ref, watch } from 'vue'

const props = defineProps<{
  partner: Partner | null
}>();

const emit = defineEmits<{
  submit: [partner: Partner]
}>();

const formData = ref<Partner>({
  id: '',
  inn: '',
  name: '',
  type: '',
  mail: '',
  active: false,
  createdAt: ''
})

watch(
  () => props.partner,
  (newVal) => {
    if (newVal) {
      formData.value = { ...newVal }
    } else {
      formData.value = {
        id: '',
        inn: '',
        name: '',
        type: '',
        mail: '',
        active: false,
        createdAt: ''
      }
    }
  },
  { immediate: true },
);

const rules: FormRules = {
  name: {
    required: true
  },
  inn: {
    required: true
  },
  type: {
    required: true
  },
  mail: {
    required: true
  }
};

const handleSubmit = () => {
  emit('submit', formData.value)
}
</script>

<template>
  <NForm>
    <NFormItem label="Название">
      <NInput v-model:value="formData.name" placeholder="Введите название" />
    </NFormItem>
    <NFormItem label="Тип организации">
      <NInput v-model:value="formData.type" placeholder="Введите тип организации" />
    </NFormItem>
    <NFormItem label="ИНН">
      <NInput v-model:value="formData.inn" placeholder="Введите ИНН" />
    </NFormItem>
    <NFormItem label="Email">
      <NInput v-model:value="formData.mail" placeholder="Введите email" />
    </NFormItem>
    <NSpace justify="end">
      <NButton type="primary" @click="handleSubmit">
        {{ formData.id ? 'Обновить' : 'Добавить' }}
      </NButton>
    </NSpace>
  </NForm>
</template>
