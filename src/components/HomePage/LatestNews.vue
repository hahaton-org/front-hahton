<template>
  <section class="news-section">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
        </div>
        <h2 class="section-title">Последние новости</h2>
        <p class="section-subtitle">Следите за обновлениями нашей платформы</p>
      </div>

      <div class="news-grid">
        <n-card
          v-for="newsItem in news"
          :key="newsItem.id"
          hoverable
          class="news-card"
          @click="openNews(newsItem.id)"
        >
          <template #cover>
            <div class="image-container">
              <n-image
                :src="newsItem.image"
                height="200"
                object-fit="cover"
                class="news-image"
              />
              <div class="image-overlay"></div>
              <div class="news-date">
                <n-icon size="18" color="white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                  </svg>
                </n-icon>
                <span>{{ newsItem.date }}</span>
              </div>
            </div>
          </template>
          <div class="news-content">
            <div class="news-category">{{ newsItem.category }}</div>
            <h3 class="news-title">{{ newsItem.title }}</h3>
            <p class="news-description">{{ newsItem.description }}</p>
            <n-button
              type="primary"
              text
              class="read-more"
              @click.stop="openNews(newsItem.id)"
            >
              Читать далее
              <template #icon>
                <n-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                  </svg>
                </n-icon>
              </template>
            </n-button>
          </div>
        </n-card>
      </div>

      <div class="view-all">
        <n-button type="primary" ghost size="large" class="view-all-button">
          Все новости
          <template #icon>
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NCard, NImage, NButton, NIcon, NTag } from 'naive-ui'

const news = [
  {
    id: 1,
    title: 'Новые партнеры присоединились к программе',
    description: '5 новых компаний начали предлагать бонусы для волонтеров через нашу платформу.',
    date: '15 апреля 2023',
    category: 'Партнеры',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Обновление списка ТОП-150 волонтеров',
    description: 'Опубликован новый рейтинг лучших волонтеров за первое полугодие 2023 года.',
    date: '5 апреля 2023',
    category: 'Рейтинги',
    image: 'https://i0.wp.com/static.vecteezy.com/system/resources/previews/020/197/993/non_2x/refresh-icon-3d-rendering-illustration-vector.jpg?ssl=1',
  },
  {
    id: 3,
    title: 'История успеха: волонтер года',
    description: 'Интервью с победителем рейтинга волонтеров 2022 года и его впечатлениями о программе.',
    date: '28 марта 2023',
    category: 'Истории',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
]

const openNews = (id) => {
  // Навигация к странице новости
  console.log(`Opening news item ${id}`)
}
</script>

<style scoped>
.news-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  margin-bottom: 16px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
  position: relative;
  display: inline-block;
}

.section-title::after {
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

.section-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.news-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.image-container {
  position: relative;
}

.news-image {
  width: 100%;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%);
}

.news-date {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  z-index: 2;
}

.news-content {
  padding: 24px;
}

.news-category {
  display: inline-block;
  background: rgba(59, 130, 246, 0.1);
  color: #3B82F6;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
}

.news-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
  line-height: 1.4;
}

.news-description {
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.read-more {
  padding: 0;
  font-weight: 500;
}

.view-all {
  text-align: center;
  margin-top: 40px;
}

.view-all-button {
  padding: 0 30px;
  height: 50px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .news-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-title::after {
    width: 80px;
    bottom: -8px;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
