<template>
  <section class="partners-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Наши партнеры</h2>
        <p class="section-subtitle">Компании, которые поддерживают волонтеров</p>
      </div>

      <div class="partners-grid">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="partner-card"
          @mouseenter="hoveredPartner = index"
          @mouseleave="hoveredPartner = null"
        >
          <div class="logo-container">
            <n-image
              :src="partner.logo"
              :alt="partner.name"
              width="140"
              height="80"
              object-fit="contain"
              :class="['partner-logo', { 'hovered': hoveredPartner === index }]"
            />
          </div>
          <transition name="fade">
            <div v-if="hoveredPartner === index" class="partner-info">
              <h3>{{ partner.name }}</h3>
              <p>{{ partner.description }}</p>
              <n-button
                type="primary"
                size="small"
                ghost
                class="partner-button"
                @click.stop="navigateToPartner(partner.link)"
              >
                Подробнее
              </n-button>
            </div>
          </transition>
        </div>
      </div>

      <div class="cta-block">
        <n-button
          type="primary"
          size="large"
          round
          class="cta-button"

        >
          <template #icon>
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </n-icon>
          </template>
          Стать партнером
        </n-button>
        <p class="cta-text">Присоединяйтесь к нашему сообществу социально ответственных компаний</p>
      </div>
    </div>


  </section>
</template>

<script setup>
import { NImage, NButton, NModal, NCard, NIcon } from 'naive-ui'
import { ref } from 'vue'



const partners = [
  {
    name: 'GreenLife',
    logo: 'https://cdn-icons-png.flaticon.com/512/3716/3716158.png',
    description: 'Сеть экомагазинов, поддерживающая экологические инициативы',
    link: '#'
  },
  {
    name: 'TechFuture',
    logo: 'https://cdn-icons-png.flaticon.com/512/3716/3716151.png',
    description: 'IT компания, развивающая цифровые волонтерские проекты',
    link: '#'
  },
  {
    name: 'HealthPlus',
    logo: 'https://cdn-icons-png.flaticon.com/512/3716/3716168.png',
    description: 'Сеть медицинских центров, предоставляющая льготы волонтерам',
    link: '#'
  },
  {
    name: 'EduPro',
    logo: 'https://cdn-icons-png.flaticon.com/512/3716/3716188.png',
    description: 'Образовательная платформа с бесплатными курсами для активистов',
    link: '#'
  },
  {
    name: 'SportEnergy',
    logo: 'https://cdn-icons-png.flaticon.com/512/3716/3716108.png',
    description: 'Спортивные клубы, мотивирующие волонтеров вести здоровый образ жизни',
    link: '#'
  },
  {
    name: 'BookLand',
    logo: 'https://cdn-icons-png.flaticon.com/512/3716/3716195.png',
    description: 'Книжные магазины с особыми условиями для участников программы',
    link: '#'
  },
]

const navigateToPartner = (link) => {
  // Навигация к странице партнера
  window.location.href = link
}
</script>

<style scoped>
.partners-section {
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

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  margin: 0 auto;
}

.partner-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.logo-container {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-logo {
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
  max-width: 100%;
  max-height: 100%;
}

.partner-logo.hovered {
  filter: grayscale(0);
  opacity: 1;
  transform: scale(1.05);
}

.partner-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 0 0 16px 16px;
  text-align: center;
  backdrop-filter: blur(5px);
}

.partner-info h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
}

.partner-info p {
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 12px;
  line-height: 1.4;
}

.partner-button {
  width: 100%;
}

.cta-block {
  text-align: center;
  margin-top: 60px;
}

.cta-button {
  padding: 0 30px;
  height: 50px;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);
}

.cta-text {
  margin-top: 16px;
  color: #6b7280;
  font-size: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .partners-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-title::after {
    width: 80px;
    bottom: -8px;
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .partner-card {
    padding: 20px;
    height: 150px;
  }
}
</style>
