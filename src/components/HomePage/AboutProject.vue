<template>
  <section class="about-project">
    <div class="container">
      <n-grid cols="1 m:2" x-gap="24" y-gap="24">
        <n-grid-item>
          <div class="about-text">
            <h2>О проекте</h2>
            <p>
              Платформа "Волонтерские Бонусы" создана для поощрения и мотивации самых активных
              волонтеров Донецкого региона. Мы объединяем усилия бизнеса и общества, чтобы создать
              систему честного вознаграждения за социально полезную деятельность.
            </p>
            <p>
              Проект реализуется под патронатом Донецкой региональной общественной организации
              "Ресурсный центр поддержки добровольчества (волонтерства)".
            </p>
          </div>
        </n-grid-item>

        <n-grid-item>
          <n-grid cols="2" x-gap="12" y-gap="12">
            <n-grid-item v-for="stat in stats" :key="stat.value">
              <n-card hoverable>
                <n-statistic :label="stat.label" :value="stat.value" />
              </n-card>
            </n-grid-item>
          </n-grid>
        </n-grid-item>
      </n-grid>
    </div>
  </section>
</template>

<script setup>
import { NGrid, NGridItem, NStatistic, NCard } from 'naive-ui'

const stats = [
  { value: '150+', label: 'лучших волонтеров региона' },
  { value: '20+', label: 'компаний-партнеров' },
  { value: '1000+', label: 'выданных бонусов' },
  { value: '6 мес.', label: 'срок действия бонусов' },
]
</script>

<style scoped>
.about-project {
  padding: 80px 0;
}

.about-text h2 {
  color: var(--primary-blue);
  margin-bottom: 24px;
  font-size: 1.8rem;
}

.about-text p {
  margin-bottom: 16px;
  color: #555;
}

.n-statistic {
  text-align: center;
}

.n-statistic >>> .n-statistic-value__content {
  font-size: 2rem;
  color: var(--secondary-green);
  font-weight: 700;
}

.n-statistic >>> .n-statistic-label {
  font-size: 0.9rem;
  color: #666;
}
</style>
