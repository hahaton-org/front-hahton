<template>
  <section class="how-it-works">
    <div class="container">
      <div class="section-title">
        <h2>Как это работает</h2>
        <p class="subtitle">Простая система получения и предоставления бонусов</p>
      </div>

      <n-grid cols="1 s:1 m:2 l:2" x-gap="24" y-gap="24" responsive="screen">
        <n-grid-item>
          <n-card class="custom-card" hoverable>
            <template #header>
              <div class="card-header">
                <n-icon size="28" color="#3B82F6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </n-icon>
                <h3>Для волонтеров</h3>
              </div>
            </template>
            <n-space vertical>
              <div v-for="(step, index) in volunteerSteps" :key="index" class="step">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-content">
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
                </div>
              </div>
            </n-space>
            <template #footer>
              <n-button type="primary" ghost size="large" class="action-button">
                Стать волонтером
              </n-button>
            </template>
          </n-card>
        </n-grid-item>

        <n-grid-item>
          <n-card class="custom-card" hoverable>
            <template #header>
              <div class="card-header">
                <n-icon size="28" color="#10B981">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </n-icon>
                <h3>Для партнеров</h3>
              </div>
            </template>
            <n-space vertical>
              <div v-for="(step, index) in partnerSteps" :key="index" class="step">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-content">
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
                </div>
              </div>
            </n-space>
            <template #footer>
              <n-button type="success" ghost size="large" class="action-button">
                Стать партнером
              </n-button>
            </template>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
  </section>
</template>

<script setup>
import { NCard, NGrid, NGridItem, NSpace, NButton, NIcon } from 'naive-ui'

const volunteerSteps = [
  {
    title: 'Регистрация',
    description: 'Зарегистрируйтесь на платформе и подтвердите свой статус волонтера',
  },
  {
    title: 'Получите статус',
    description: 'Попадите в ТОП-150 волонтеров региона по итогам полугодия',
  },
  {
    title: 'Выбирайте бонусы',
    description: 'Получайте специальные предложения от наших партнеров',
  },
]

const partnerSteps = [
  {
    title: 'Подключение',
    description: 'Присоединитесь к программе в качестве партнера',
  },
  {
    title: 'Настройка бонусов',
    description: 'Определите, какие бонусы вы готовы предоставлять',
  },
  {
    title: 'Поощряйте волонтеров',
    description: 'Поддержите социально активных граждан вашего региона',
  },
]
</script>

<style scoped>
.how-it-works {
  padding: 100px 0;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
  position: relative;
  display: inline-block;
}

.section-title h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3B82F6 0%, #10B981 100%);
  border-radius: 2px;
}

.subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.custom-card {
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.card-header h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.custom-card :deep(.n-card__content) {
  padding: 24px;
}

.step {
  display: flex;
  margin-bottom: 24px;
  align-items: flex-start;
  position: relative;
  padding-left: 10px;
}

.step:last-child {
  margin-bottom: 0;
}

.step::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 30px;
  bottom: -24px;
  width: 2px;
  background: #e5e7eb;
}

.step:last-child::before {
  display: none;
}

.step-number {
  background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  flex-shrink: 0;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.custom-card:nth-child(2) .step-number {
  background: linear-gradient(135deg, #10B981 0%, #14B8A6 100%);
}

.step-content h4 {
  margin-bottom: 8px;
  font-weight: 600;
  color: #1f2937;
  font-size: 1.1rem;
}

.step-content p {
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.5;
}

.action-button {
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
}

@media (max-width: 768px) {
  .how-it-works {
    padding: 60px 0;
  }

  .section-title h2 {
    font-size: 2rem;
  }

  .section-title h2::after {
    width: 80px;
    bottom: -8px;
  }

  .step {
    margin-bottom: 20px;
  }
}
</style>
