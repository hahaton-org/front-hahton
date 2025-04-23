<template>
  <section class="current-bonuses">
    <div class="container">
      <div class="section-title">
        <h2>Популярные бонусы</h2>
        <p>Специальные предложения от наших партнеров</p>
      </div>

      <n-carousel show-arrow draggable>
        <div class="bonus-slide" v-for="bonus in bonuses" :key="bonus.id">
          <n-card hoverable>
            <template #cover>
              <n-image :src="bonus.image" height="180" object-fit="cover" />
            </template>
            <h3>{{ bonus.title }}</h3>
            <p>{{ bonus.description }}</p>
            <n-space :size="8" style="margin-top: 16px">
              <n-tag
                v-for="category in bonus.categories"
                :key="category"
                :type="getCategoryType(category)"
                round
                size="small"
              >
                {{ category }}
              </n-tag>
            </n-space>
          </n-card>
        </div>
      </n-carousel>
    </div>
  </section>
</template>

<script setup>
import { NCarousel, NCard, NImage, NSpace, NTag } from 'naive-ui'
import { ref } from 'vue'

const bonuses = ref([
  {
    id: 1,
    title: 'Скидка 20% на обучение',
    description: 'Курсы повышения квалификации в учебном центре "Профессионал"',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: ['Топ-50', '51-100'],
  },
  {
    id: 2,
    title: 'Бесплатный абонемент',
    description: 'Месячный абонемент в фитнес-клуб "Энергия"',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: ['Топ-50'],
  },
  {
    id: 3,
    title: 'Скидка 15% в кафе',
    description: 'Скидка на все меню сети кафе "Вкусно и точка"',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: ['Топ-50', '51-100', '101-150'],
  },
  {
    id: 4,
    title: 'Бесплатная экскурсия',
    description: 'Экскурсия по историческим местам города с гидом',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    categories: ['Топ-50', '51-100'],
  },
])

const getCategoryType = (category) => {
  const types = {
    'Топ-50': 'success',
    '51-100': 'info',
    '101-150': 'warning',
  }
  return types[category] || 'default'
}
</script>

<style scoped>
.current-bonuses {
  padding: 80px 0;
}

.bonus-slide {
  padding: 0 10px;
}

.n-card {
  height: 100%;
}

.n-card h3 {
  color: var(--primary-blue);
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.n-card p {
  color: #666;
  font-size: 0.95rem;
}
</style>
