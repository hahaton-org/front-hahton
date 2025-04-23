<template>
  <section class="hero">
    <div class="container">
      <h2>Ваш труд ценен — получайте заслуженные бонусы!</h2>
      <p>Платформа для поощрения лучших волонтеров Донецкого региона</p>
      <div class="hero-buttons">
        <n-button type="primary" size="large" round>Я волонтер</n-button>
        <n-button type="success" size="large" round>Я партнер</n-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NButton } from 'naive-ui'
</script>

<style scoped>
.hero {
  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 120px 0;
  text-align: center;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 24px;
  font-weight: 700;
  line-height: 1.2;
}

.hero p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 40px;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0;
  }

  .hero h2 {
    font-size: 2rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
