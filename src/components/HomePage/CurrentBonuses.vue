<template>
  <section class="current-bonuses">
    <div class="container">
      <div class="section-title">
        <h2>Популярные бонусы</h2>
        <p class="subtitle">Специальные предложения от наших партнеров</p>
      </div>

      <n-carousel
        show-arrow
        draggable
        :slides-per-view="3"
        :space-between="20"
        :breakpoints="{ 768: { slidesPerView: 1 }, 1024: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }"
        class="bonus-carousel"
      >
        <div class="bonus-slide" v-for="bonus in bonuses" :key="bonus.id">
          <n-card hoverable bordered class="bonus-card">
            <template #cover>
              <div class="image-container">
                <n-image
                  :src="bonus.image"
                  height="180"
                  object-fit="cover"
                  class="bonus-image"
                />
                <div class="badge" v-if="bonus.categories.includes('Топ-50')">
                  <n-tag type="error" round size="small">
                    Топ предложение
                  </n-tag>
                </div>
              </div>
            </template>
            <div class="card-content">
              <h3>{{ bonus.title }}</h3>
              <p class="description">{{ bonus.description }}</p>
              <n-space :size="8" style="margin-top: 16px" wrap>
                <n-tag
                  v-for="category in bonus.categories"
                  :key="category"
                  :type="getCategoryType(category)"
                  round
                  size="small"
                  class="category-tag"
                >
                  {{ category }}
                </n-tag>
              </n-space>
              <n-button type="primary" ghost class="action-button">
                Получить бонус
              </n-button>
            </div>
          </n-card>
        </div>
      </n-carousel>
    </div>
  </section>
</template>

<script setup>
import { NCarousel, NCard, NImage, NSpace, NTag, NButton } from 'naive-ui'
import { ref } from 'vue'

const bonuses = ref([
  {
    id: 1,
    title: 'Скидка 20% на обучение',
    description: 'Курсы повышения квалификации в учебном центре "Профессионал"',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: ['Топ-50', '51-100'],
  },
  {
    id: 2,
    title: 'Бесплатный абонемент',
    description: 'Месячный абонемент в фитнес-клуб "Энергия"',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: ['Топ-50'],
  },
  {
    id: 3,
    title: 'Скидка 15% в кафе',
    description: 'Скидка на все меню сети кафе "Вкусно и точка"',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: ['Топ-50', '51-100', '101-150'],
  },
  {
    id: 4,
    title: 'Бесплатная экскурсия',
    description: 'Экскурсия по историческим местам города с гидом',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: ['Топ-50', '51-100'],
  },
  {
    id: 5,
    title: 'Скидка 30% на книги',
    description: 'На весь ассортимент книжного магазина "Читай-Город"',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: ['51-100', '101-150'],
  },
])

const getCategoryType = (category) => {
  const types = {
    'Топ-50': 'error',
    '51-100': 'info',
    '101-150': 'warning',
  }
  return types[category] || 'default'
}
</script>

<style scoped>
.current-bonuses {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 48px;
}

.section-title h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  position: relative;
  display: inline-block;
}



.subtitle {
  font-size: 1.1rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}

.bonus-carousel {
  padding: 10px;
}

.bonus-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.bonus-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.image-container {
  position: relative;
}

.bonus-image {
  width: 100%;
  border-radius: 12px 12px 0 0;
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
}

.card-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-content h3 {
  color: #1e293b;
  margin-bottom: 12px;
  font-size: 1.2rem;
  font-weight: 600;
}

.description {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: auto;
}

.category-tag {
  font-weight: 500;
}

.action-button {
  margin-top: 20px;
  width: 100%;
  font-weight: 500;
}

@media (max-width: 768px) {
  .current-bonuses {
    padding: 60px 0;
  }

  .section-title h2 {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>
