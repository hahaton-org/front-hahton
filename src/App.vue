<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { darkTheme } from 'naive-ui'

const theme = ref(null) // Можно переключить на darkTheme для темной темы
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

[id] {
  scroll-margin-top: 100px; /* Отступ сверху для якорных ссылок */
}

:root {
  --primary-blue: #3366ff;
  --secondary-green: #00b578;
  --light-gray: #f7f8fa;
  --dark-gray: #1a1a1a;
  --white: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    sans-serif;
}

body {
  line-height: 1.6;
  color: var(--dark-gray);
  background-color: var(--light-gray);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 48px;
}

.section-title h2 {
  font-size: 2rem;
  color: var(--primary-blue);
  margin-bottom: 12px;
  font-weight: 700;
}

.section-title p {
  color: #666;
  font-size: 1rem;
}
</style>
