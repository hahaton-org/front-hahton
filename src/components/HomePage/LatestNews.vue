<template>
  <section class="latest-news">
    <div class="container">
      <div class="section-title">
        <h2>Последние новости</h2>
        <p>Следите за обновлениями нашей платформы</p>
      </div>

      <n-grid cols="1 s:2 l:3" x-gap="24" y-gap="24">
        <n-grid-item v-for="newsItem in news" :key="newsItem.id">
          <n-card hoverable>
            <template #cover>
              <n-image :src="newsItem.image" height="180" object-fit="cover" />
            </template>
            <div class="news-date">{{ newsItem.date }}</div>
            <h3>{{ newsItem.title }}</h3>
            <p>{{ newsItem.description }}</p>
            <n-button text type="primary" style="margin-top: 12px">
              Читать далее
              <template #icon>
                <n-icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="currentColor"
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </n-icon>
              </template>
            </n-button>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
  </section>
</template>

<script setup>
import { NGrid, NGridItem, NCard, NImage, NButton, NIcon } from 'naive-ui'

const news = [
  {
    id: 1,
    title: 'Новые партнеры присоединились к программе',
    description: '5 новых компаний начали предлагать бонусы для волонтеров через нашу платформу.',
    date: '15 апреля 2023',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'Обновление списка ТОП-150 волонтеров',
    description: 'Опубликован новый рейтинг лучших волонтеров за первое полугодие 2023 года.',
    date: '5 апреля 2023',
    image:
      'https://images.unsplash.com/photo-1524179091875-b494986b8c37?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'История успеха: волонтер года',
    description: 'Интервью с победителем рейтинга волонтеров 2022 года.',
    date: '28 марта 2023',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
]
</script>

<style scoped>
.latest-news {
  padding: 80px 0;
  background-color: var(--light-gray);
}

.news-date {
  color: #777;
  font-size: 14px;
  margin-bottom: 12px;
}

.n-card h3 {
  color: var(--primary-blue);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.n-card p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 12px;
}
</style>
