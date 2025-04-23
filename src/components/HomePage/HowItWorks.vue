<template>
  <section class="how-it-works">
    <div class="container">
      <div class="section-title">
        <h2>Как это работает</h2>
        <p>Простая система получения и предоставления бонусов</p>
      </div>

      <n-grid cols="1 s:2" x-gap="24" y-gap="24">
        <n-grid-item>
          <n-card title="Для волонтеров" hoverable>
            <n-space vertical>
              <div v-for="(step, index) in volunteerSteps" :key="index" class="step">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-content">
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
                </div>
              </div>
            </n-space>
          </n-card>
        </n-grid-item>

        <n-grid-item>
          <n-card title="Для партнеров" hoverable>
            <n-space vertical>
              <div v-for="(step, index) in partnerSteps" :key="index" class="step">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-content">
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
                </div>
              </div>
            </n-space>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
  </section>
</template>

<script setup>
import { NCard, NGrid, NGridItem, NSpace } from 'naive-ui'

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
  padding: 80px 0;
  background-color: var(--light-gray);
}

.step {
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
}

.step-number {
  background-color: var(--primary-blue);
  color: var(--white);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  flex-shrink: 0;
  font-weight: 600;
}

.step-content h4 {
  margin-bottom: 5px;
  font-weight: 600;
}

.step-content p {
  color: #666;
  font-size: 0.95rem;
}
</style>
