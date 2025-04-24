<script setup lang="ts">
import { ref } from 'vue';
import { NCard, NButton, NInput, NForm, NFormItem, NTabs, NTabPane, NSpace, NFlex } from 'naive-ui';
import { role, guid, isAuth, redirectToPages, saveToken, getToken } from '../auth'
import api from '../api';
import router from '../Router';
import { Login } from '../classes/Login';
const registrationForm = ref({ name: '', mail: '', inn: '', type: '', password: '' });
const loginForm = ref({ mail: '', password: '', });
const loginType = ref('volunteer');
const loginData = ref<Login>(null)
const reg = ref<boolean>(false);
async function register() {
  loginData.value = await api.post('api/auth/registry/partner', { json: registrationForm.value }).json();
  saveToken(loginData.value.token);
  redirectToPages(loginData.value.token);
}

async function login() {
  loginData.value = await api.post<Login>('api/auth/login', { json: loginForm.value }).json();
  saveToken(loginData.value.token);
  redirectToPages(loginData.value.token);
}
</script>

<template>
  <NFlex justify="center" align="center">
  <NSpace class="mt-4">
    <NCard v-if="reg" title="Регистрация партнёра">
      <NForm>
        <NFormItem label="Название">
          <NInput v-model:value="registrationForm.name" placeholder="Введите название" />
        </NFormItem>
        <NFormItem label="Тип организации">
          <NInput v-model:value="registrationForm.type" placeholder="Введите тип организации" />
        </NFormItem>
        <NFormItem label="ИНН">
          <NInput v-model:value="registrationForm.inn" placeholder="Введите ИНН" />
        </NFormItem>
        <NFormItem label="Email">
          <NInput v-model:value="registrationForm.mail" placeholder="Введите email" />
        </NFormItem>
        <NFormItem label="Пароль">
          <NInput v-model:value="registrationForm.password" placeholder="Введите пароль" />
        </NFormItem>
        <NFormItem>
          <NButton type="primary" @click=register>Зарегистрироваться</NButton>
        </NFormItem>
        <NFormItem>
          <NButton type="primary" @click="() => reg = false">Назад</NButton>
        </NFormItem>
      </NForm>
    </NCard>
    <NCard v-else="reg" title="Вход в систему">
      <NTabs v-model:value="loginType" type="line">
        <NTabPane name="volunteer" tab="Волонтёр">
          <NForm>
            <NFormItem label="Email">
              <NInput v-model:value="loginForm.mail" placeholder="Введите Email" />
            </NFormItem>
            <NFormItem label="Пароль">
              <NInput v-model:value="loginForm.password" type="password" placeholder="Введите пароль" />
            </NFormItem>
            <NFormItem>
              <NButton type="primary" @click=login>Войти как волонтёр</NButton>
            </NFormItem>
          </NForm>
        </NTabPane>

        <NTabPane name="partner" tab="Партнёр">
          <NForm>
            <NFormItem label="Email">
              <NInput v-model:value="loginForm.mail" placeholder="Введите Email" />
            </NFormItem>
            <NFormItem label="Пароль">
              <NInput v-model:value="loginForm.password" type="password" placeholder="Введите пароль" />
            </NFormItem>
            <NFormItem>
              <NButton type="primary" @click=login>Войти как партнёр</NButton>
            </NFormItem>
            <NFormItem>
              <NButton type="primary" @click="() => reg = true">Зарегистрироваться как партнёр</NButton>
            </NFormItem>
          </NForm>
        </NTabPane>
      </NTabs>
    </NCard>
  </NSpace>
</NFlex>
</template>
