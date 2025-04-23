<template>
  <header class="header">
    <div class="container header-container">
      <div class="logo">
        <n-avatar
          src="https://cdn-icons-png.flaticon.com/512/3716/3716158.png"
          round
          :size="50"
        />
        <div class="logo-text">
          <h1>Волонтерские Бонусы</h1>
          <p>Под патронатом Ресурсного центра поддержки добровольчества</p>
        </div>
      </div>

      <nav>
        <n-space>
          <n-button
            text
            type="primary"
            size="large"
            @click="scrollTo('main')"
          >
            Главная
          </n-button>
          <n-button
            text
            size="large"
            @click="scrollTo('how-it-works')"
          >
            Как это работает
          </n-button>
          <n-button
            text
            size="large"
            @click="scrollTo('about')"
          >
            О проекте
          </n-button>
          <n-button
            text
            size="large"
            @click="scrollTo('news')"
          >
            Новости
          </n-button>
        </n-space>
      </nav>

      <div class="auth-buttons">
        <n-button type="primary" size="large" ghost>Вход</n-button>
        <n-button type="primary" size="large">Регистрация</n-button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { NButton, NSpace, NAvatar } from 'naive-ui'

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    // Плавная прокрутка с отступом от верха
    window.scrollTo({
      top: element.offsetTop - 80, // 80px - высота хедера
      behavior: 'smooth'
    })

    // Обновляем URL без перезагрузки страницы
    history.pushState(null, null, `#${id}`)
  }
}
</script>

<style scoped>
.header {
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-text h1 {
  font-size: 20px;
  color: var(--primary-blue);
  font-weight: 700;
}

.logo-text p {
  font-size: 12px;
  color: var(--dark-gray);
  opacity: 0.8;
}

.auth-buttons {
  display: flex;
  gap: 12px;
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 16px;
  }

  .auth-buttons {
    margin-bottom: 15px;
  }
}
</style>
