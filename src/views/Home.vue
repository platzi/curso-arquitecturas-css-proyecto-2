<template>
  <div class="general-container">
    <the-cursor :xCursorPosition="xPosition" :yCursorPosition="yPosition" />
    <hero-section class="section" />
    <my-portfolio />
    <my-stack class="" />
    <about-me class="section" />
    <contact-section class="" />
  </div>
</template>

<script>
import HeroSection from "../components/index/HeroSection.vue";
import MyPortfolio from "../components/index/MyPortfolio.vue";
import MyStack from "../components/index/MyStack.vue";
import ContactSection from "../components/index/ContactSection.vue";
import TheCursor from "../components/global/TheCursor.vue";
import AboutMe from "../components/index/AboutMe.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    MyPortfolio,
    MyStack,
    ContactSection,
    TheCursor,
    AboutMe,
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

<style scoped>
.general-container {
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  position: relative;
}
.section {
  width: 100%;
  min-height: 100vh;
  padding: 2rem 2.125rem;
}

@media only screen and (max-width: 1024px) {
  .section {
    padding: 1.25rem 1rem;
  }
}

@media only screen and (max-width: 375px) {
  .section {
    padding: 1rem 0.5rem;
  }
}
</style>
