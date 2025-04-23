<template>
  <section class="partners">
    <div class="container">
      <div class="section-title">
        <h2>Наши партнеры</h2>
        <p>Компании, которые поддерживают волонтеров</p>
      </div>

      <n-space justify="center" align="center" :wrap="true" :size="48">
        <n-image
          v-for="(partner, index) in partners"
          :key="index"
          :src="partner.logo"
          :alt="partner.name"
          width="120"
          height="60"
          object-fit="contain"
          class="partner-logo"
        />
      </n-space>

      <div class="become-partner">
        <n-button type="primary" size="large" round>Стать партнером</n-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NImage, NSpace, NButton } from 'naive-ui'

const partners = [
  { name: 'Партнер 1', logo: 'https://via.placeholder.com/120x60' },
  { name: 'Партнер 2', logo: 'https://via.placeholder.com/120x60' },
  { name: 'Партнер 3', logo: 'https://via.placeholder.com/120x60' },
  { name: 'Партнер 4', logo: 'https://via.placeholder.com/120x60' },
  { name: 'Партнер 5', logo: 'https://via.placeholder.com/120x60' },
]
</script>

<style scoped>
.partners {
  padding: 80px 0;
  background-color: var(--light-gray);
}

.partner-logo {
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s;
}

.partner-logo:hover {
  filter: grayscale(0);
  opacity: 1;
}

.become-partner {
  text-align: center;
  margin-top: 40px;
}
</style>
