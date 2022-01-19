<template>
  <hero-section/>
  <my-portfolio />
  <about-me />
  <contact-section />
</template>

<script>
import HeroSection from './components/index/HeroSection.vue'
import MyPortfolio from './components/index/MyPortfolio.vue'
import AboutMe from './components/index/AboutMe.vue'
import ContactSection from './components/index/ContactSection.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    MyPortfolio,
    AboutMe,
    ContactSection
  }
}
</script>

<style>
#app {
  scroll-behavior: smooth;
}
</style>
