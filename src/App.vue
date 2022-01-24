<template>
  <div class="wrap">
    <div class="general-container">
      <the-cursor :xCursorPosition="xPosition" :yCursorPosition="yPosition" />
      <hero-section class="section" />
      <my-portfolio />
      <my-stack class="" />
      <about-me class="section" />
      <contact-section class="" />
    </div>
  </div>
</template>

<script>
import HeroSection from "./components/index/HeroSection.vue";
import MyPortfolio from "./components/index/MyPortfolio.vue";
import MyStack from "./components/index/MyStack.vue";
import ContactSection from "./components/index/ContactSection.vue";
import TheCursor from "./components/global/TheCursor.vue";
import AboutMe from "./components/index/AboutMe.vue";

export default {
  name: "App",
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300&display=swap");
#app {
  overflow: hidden;
}
#app h2 {
  color: #f5e6d7;
}

.wrap {
  background: rgb(70, 77, 52);
  /* background: linear-gradient(
    180deg,
    rgba(228, 199, 95, 1) 0%,
    rgba(143, 3, 42, 1) 20%,
    rgba(88, 0, 26, 1) 40%,
    rgba(95, 116, 41, 1) 60%,
    rgba(228, 199, 95, 1) 80%,
    rgba(183, 157, 54, 1) 100%
  ); */
}
.general-container {
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
}
.section {
  width: 100%;
  height: 100vh;
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
