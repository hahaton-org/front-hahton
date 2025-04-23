<template>
  <div class="home-page">
    <Header />
    <HeroBanner />
    <HowItWorks />
    <CurrentBonuses />
    <PartnersSection />
    <AboutProject />
    <LatestNews />
    <FooterSection />
  </div>
</template>

<script setup>
import Header from '../components/HomePage/Header.vue'
import HeroBanner from '../components/HomePage/HeroBanner.vue'
import HowItWorks from '../components/HomePage/HowItWorks.vue'
import CurrentBonuses from '../components/HomePage/CurrentBonuses.vue'
import PartnersSection from '../components/HomePage/PartnersSection.vue'
import AboutProject from '../components/HomePage/AboutProject.vue'
import LatestNews from '../components/HomePage/LatestNews.vue'
import FooterSection from '../components/HomePage/FooterSection.vue'
</script>
