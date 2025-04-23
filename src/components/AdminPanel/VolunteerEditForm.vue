<script setup lang="ts">
import { Volunteer } from '../../classes/Volunteer';
import { NForm, NFormItem, NInput, NButton, NSpace, FormRules } from 'naive-ui'
import { watch, ref } from 'vue'

const props = defineProps<{
  volunteer: Volunteer | null
}>();

const emit = defineEmits<{
  submit: [volunteer: Volunteer]
}>();

const formData = ref<Volunteer>({
  id: '',
  inn: '',
  lastName: '',
  firstName: '',
  middleName: '',
  phone: '',
  mail: '',
  active: false,
  birthdayDate: '',
  createdAt: ''
});

watch(
  () => props.volunteer,
  (newVal) => {
    if (newVal) {
      formData.value = { ...newVal }
    } else {
      formData.value = {
        id: '',
        inn: '',
        lastName: '',
        firstName: '',
        middleName: '',
        phone: '',
        mail: '',
        active: false,
        birthdayDate: '',
        createdAt: ''
      }
    }
  },
  { immediate: true }
);

const rules: FormRules = {
  lastName: {
    required: true
  },
  firstName: {
    required: true
  },
  middleName: {
    required: true
  },
  mail: {
    required: true
  },
  phone: {
    required: true
  }
};
const handleSubmit = () => {
  emit('submit', formData.value)
}
</script>

<template>
  <NForm :model="formData" :rules="rules">
    <NFormItem path="lastName" label="Фамилия">
      <NInput v-model:value="formData.lastName" placeholder="Введите фамилию" />
    </NFormItem>
    <NFormItem path="firstName" label="Имя">
      <NInput v-model:value="formData.firstName" placeholder="Введите имя" />
    </NFormItem>
    <NFormItem path="middleName" label="Отчество">
      <NInput v-model:value="formData.middleName" placeholder="Введите отчество" />
    </NFormItem>
    <NFormItem path="phone" label="Телефон">
      <NInput v-model:value="formData.phone" placeholder="Введите телефон" />
    </NFormItem>
    <NFormItem path="mail" label="Email">
      <NInput v-model:value="formData.mail" placeholder="Введите email" />
    </NFormItem>
    <NSpace justify="end">
      <NButton type="primary" @click="handleSubmit">
        {{ formData.id ? 'Обновить' : 'Добавить' }}
      </NButton>
    </NSpace>
  </NForm>
</template>
