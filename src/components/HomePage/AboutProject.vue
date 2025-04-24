<template>
  <section class="about-section">
    <div class="container">
      <div class="section-decoration">
        <div class="decoration-circle"></div>
        <div class="decoration-dots"></div>
      </div>

      <n-grid cols="1 m:2" x-gap="40" y-gap="40" responsive="screen">
        <n-grid-item>
          <div class="about-content">
            <div class="section-tag">
            </div>
            <h2 class="section-title">
              Платформа <span class="highlight">"Волонтерские Бонусы"</span>
            </h2>
            <div class="about-text">
              <p>
                Наша платформа создана для поощрения и мотивации самых активных
                волонтеров Донецкого региона. Мы объединяем усилия бизнеса и общества, чтобы создать
                систему честного вознаграждения за социально полезную деятельность.
              </p>
              <p>
                Проект реализуется под патронатом Донецкой региональной общественной организации
                "Ресурсный центр поддержки добровольчества (волонтерства)".
              </p>
            </div>
            <n-button type="primary" size="large" class="action-button">
              Узнать больше
              <template #icon>
                <n-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </n-icon>
              </template>
            </n-button>
          </div>
        </n-grid-item>

        <n-grid-item>
          <n-grid cols="2" x-gap="20" y-gap="20" responsive="screen">
            <n-grid-item v-for="stat in stats" :key="stat.value">
              <n-card hoverable class="stat-card" :class="`stat-${stat.id}`">
                <n-statistic :label="stat.label" :value="stat.value">
                  <template #prefix>
                    <n-icon v-if="stat.icon" :component="stat.icon" :color="stat.color" />
                  </template>
                </n-statistic>
              </n-card>
            </n-grid-item>
          </n-grid>
        </n-grid-item>
      </n-grid>
    </div>
  </section>
</template>

<script setup>
import { NGrid, NGridItem, NStatistic, NCard, NButton, NTag, NIcon } from 'naive-ui'
import { PeopleOutline, BusinessOutline, GiftOutline, TimeOutline } from '@vicons/ionicons5'

const stats = [
  {
    id: 1,
    value: '150+',
    label: 'Лучших волонтеров региона',
    icon: PeopleOutline,
    color: '#3B82F6'
  },
  {
    id: 2,
    value: '20+',
    label: 'Компаний-партнеров',
    icon: BusinessOutline,
    color: '#10B981'
  },
  {
    id: 3,
    value: '1000+',
    label: 'Выданных бонусов',
    icon: GiftOutline,
    color: '#F59E0B'
  },
  {
    id: 4,
    value: '6 мес.',
    label: 'Срок действия бонусов',
    icon: TimeOutline,
    color: '#6366F1'
  },
]
</script>

<style scoped>
.about-section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background-color: #f9fafb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.section-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.decoration-circle {
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 100%);
}

.decoration-dots {
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background-image: radial-gradient(#d1d5db 2px, transparent 2px);
  background-size: 20px 20px;
  opacity: 0.3;
}

.section-tag {
  margin-bottom: 16px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1f2937;
  margin-bottom: 24px;
}

.highlight {
  color: #3B82F6;
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 8px;
  background: rgba(59, 130, 246, 0.2);
  z-index: -1;
}

.about-text {
  margin-bottom: 32px;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 20px;
}

.action-button {
  padding: 0 28px;
  height: 48px;
  font-weight: 500;
}

.stat-card {
  height: 100%;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  padding: 24px;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.stat-1 {
  background: rgba(59, 130, 246, 0.05);
  border-top: 3px solid #3B82F6;
}

.stat-2 {
  background: rgba(16, 185, 129, 0.05);
  border-top: 3px solid #10B981;
}

.stat-3 {
  background: rgba(245, 158, 11, 0.05);
  border-top: 3px solid #F59E0B;
}

.stat-4 {
  background: rgba(99, 102, 241, 0.05);
  border-top: 3px solid #6366F1;
}

:deep(.n-statistic-value) {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 8px 0;
}

:deep(.n-statistic-label) {
  font-size: 1rem;
  color: #6b7280;
}

:deep(.n-statistic__prefix) {
  margin-right: 8px;
}

@media (max-width: 768px) {
  .about-section {
    padding: 80px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-text p {
    font-size: 1rem;
  }

  .decoration-circle,
  .decoration-dots {
    display: none;
  }
}
</style>
