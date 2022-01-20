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
    document.addEventListener("mousemove", this.getCursor);
  },
  methods: {
    getCursor(event) {
      return (this.xPosition = event.clientX), (this.yPosition = event.clientY);
    },
  },
  unmounted() {
    document.removeEventListener("mousemove", this.getCursor);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
#app {
  scroll-behavior: smooth;
}
.wrap {
  padding: 0.75rem;
  background: #3e5cb6;
  background: -webkit-linear-gradient(bottom right, #3e5cb6, #d445e8);
  background: -moz-linear-gradient(bottom right, #3e5cb6, #d445e8);
  background: linear-gradient(to top left, #3e5cb6, #d445e8);
}
.section {
  width: 100%;
  height: 100vh;
}
</style>
