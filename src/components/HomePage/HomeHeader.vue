<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo" @click="scrollTo('main')">
          <n-icon size="36" color="#3B82F6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          </n-icon>
          <div class="logo-text">
            <h1>Волонтерские Бонусы</h1>
            <p>Под патронатом Ресурсного центра поддержки добровольчества</p>
          </div>
        </div>

        <div class="nav-container">
          <nav class="desktop-nav">
            <n-space>
              <n-button text type="tertiary" size="large" class="nav-link" @click="scrollTo('main')">
                Главная
              </n-button>
              <n-button text type="tertiary" size="large" class="nav-link" @click="scrollTo('how-it-works')">
                Как это работает
              </n-button>
              <n-button text type="tertiary" size="large" class="nav-link" @click="scrollTo('about')">
                О проекте
              </n-button>
              <n-button text type="tertiary" size="large" class="nav-link" @click="scrollTo('news')">
                Новости
              </n-button>
            </n-space>
          </nav>

          <div class="auth-buttons">

            <n-button type="primary" ghost size="large" class="register-button" @click="openAuthModal('register')">
              Авторизация
            </n-button>
          </div>

          <n-button
            text
            class="mobile-menu-button"
            @click="showMobileMenu = !showMobileMenu"
          >
            <n-icon size="24">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
              </svg>
            </n-icon>
          </n-button>
        </div>
      </div>

      <!-- Мобильное меню -->
      <transition name="slide-down">
        <div v-if="showMobileMenu" class="mobile-menu">
          <n-space vertical>
            <n-button
              block
              text
              type="tertiary"
              size="large"
              class="mobile-nav-link"
              @click="scrollToAndClose('main')"
            >
              Главная
            </n-button>
            <n-button
              block
              text
              type="tertiary"
              size="large"
              class="mobile-nav-link"
              @click="scrollToAndClose('how-it-works')"
            >
              Как это работает
            </n-button>
            <n-button
              block
              text
              type="tertiary"
              size="large"
              class="mobile-nav-link"
              @click="scrollToAndClose('about')"
            >
              О проекте
            </n-button>
            <n-button
              block
              text
              type="tertiary"
              size="large"
              class="mobile-nav-link"
              @click="scrollToAndClose('news')"
            >
              Новости
            </n-button>
          </n-space>

          <div class="mobile-auth-buttons">
            <n-button
              block
              type="primary"
              size="large"
              class="mobile-login-button"
              @click="openAuthModal"
            >
              Войти
            </n-button>
            <n-button
              block
              type="primary"
              ghost
              size="large"
              class="mobile-register-button"
              @click="openAuthModal('register')"
            >
              Регистрация
            </n-button>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { NButton, NSpace, NIcon } from 'naive-ui'
import { ref } from 'vue'
import {redirectToSignIn} from '../../auth'
const showMobileMenu = ref(false)

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    })
    history.pushState(null, null, `#${id}`)
  }
}

const scrollToAndClose = (id) => {
  scrollTo(id)
  showMobileMenu.value = false
}

const openAuthModal = (type = 'login') => {
  redirectToSignIn();
}
</script>

<style scoped>
.header {
  background-color: white;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 10px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.logo:hover {
  opacity: 0.8;
}

.logo-text h1 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  line-height: 1.2;
}

.logo-text p {
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 30px;
}

.desktop-nav {
  display: none;
}

.auth-buttons {
  display: none;
  gap: 12px;
}

.nav-link {
  font-weight: 500;
  position: relative;
  padding: 8px 12px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #3B82F6;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: calc(100% - 24px);
}

.login-button {
  padding: 0 20px;
  height: 42px;
  font-weight: 500;
}

.register-button {
  padding: 0 20px;
  height: 42px;
  font-weight: 500;
}

.mobile-menu-button {
  display: block;
  color: #4b5563;
}

.mobile-menu {
  background: white;
  padding: 20px 0;
  border-top: 1px solid #e5e7eb;
  margin-top: 10px;
}

.mobile-nav-link {
  justify-content: flex-start;
  padding: 12px 20px;
  font-weight: 500;
}

.mobile-auth-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 20px;
  padding: 0 20px;
}

.mobile-login-button,
.mobile-register-button {
  width: 100%;
}

/* Анимации */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  padding: 0;
  border-top: 0;
}

/* Адаптация для десктопа */
@media (min-width: 992px) {
  .desktop-nav {
    display: block;
  }

  .auth-buttons {
    display: flex;
  }

  .mobile-menu-button {
    display: none;
  }

  .mobile-menu {
    display: none;
  }
}

/* Эффекты при скролле */
.scrolled {
  padding: 5px 0;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.scrolled .logo-text h1 {
  font-size: 1.2rem;
}

.scrolled .logo-text p {
  font-size: 0.65rem;
}
</style>
