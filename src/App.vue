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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
