<template>
  <div>
    <hero-section class="section" />
    <my-portfolio class="section" />
    <about-me class="section" />
    <contact-section class="section" />
  </div>
</template>

<script>
import HeroSection from "./components/index/HeroSection.vue";
import MyPortfolio from "./components/index/MyPortfolio.vue";
import AboutMe from "./components/index/AboutMe.vue";
import ContactSection from "./components/index/ContactSection.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    MyPortfolio,
    AboutMe,
    ContactSection,
  },
};
</script>

<style>
#app {
  scroll-behavior: smooth;
}
.section {
  width: 100%;
  height: 100vh;
}
</style>
