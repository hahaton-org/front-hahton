<template>
  <section class="hero">
    <div class="container">
      <h2>Ваш труд ценен — получайте заслуженные бонусы!</h2>
      <p>Платформа для поощрения лучших волонтеров Донецкого региона</p>

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
    url('https://avatars.mds.yandex.net/i?id=5da845bda329670b308b8d615454406e_l-2480692-images-thumbs&n=13');

  background-size: auto;
  background-position: center;
  color: var(--white);
  padding: 100px 0;
  text-align: center;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 24px;
  font-weight: 700;
  line-height: 1.9;
}

.hero p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 40px;
  opacity: 0.9;
}


@media (max-width: 768px) {
  .hero {
    padding: 80px 0;
  }

  .hero h2 {
    font-size: 2rem;
  }


}
</style>
