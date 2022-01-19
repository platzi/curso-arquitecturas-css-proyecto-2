<template>
  <div class="wrap">
    <the-cursor :xCursorPosition="xPosition" :yCursorPosition="yPosition" />
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
import TheCursor from "./components/global/TheCursor.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    MyPortfolio,
    AboutMe,
    ContactSection,
    TheCursor,
  },
  data: () => ({
    xPosition: 0,
    yPosition: 0,
  }),
  mounted() {
    document.addEventListener('mousemove', this.getCursor)
  },
  methods: {
    getCursor(event) {
      console.log(event.clientX)
      console.log(event.clientY)
      return this.xPosition = event.clientX, this.yPosition = event.clientY
    }
  },
  unmounted() {
    document.removeEventListener('mousemove', this.getCursor)
  }
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
