<template>
  <div class="general-container">
    <the-cursor :xCursorPosition="xPosition" :yCursorPosition="yPosition" />
    <hero-section id="indexhero" />
    <!-- <my-portfolio :projects="projects" id="indexportfolio" />
    <stack />
    <about-me id="indexabout" />
    <contact-section class="" id="indexcontact" /> -->
  </div>
</template>

<script>
import HeroSection from "../components/index/HeroSection.vue";
// import MyPortfolio from "../components/index/MyPortfolio.vue";
// import Stack from "../components/index/Stack.vue";
// import ContactSection from "../components/index/ContactSection.vue";
// import TheCursor from "../components/global/TheCursor.vue";
// import AboutMe from "../components/index/AboutMe.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  components: {
    HeroSection,
    // MyPortfolio,
    // Stack,
    // ContactSection,
    // TheCursor,
    // AboutMe,
  },
  setup() {
    const xPosition = ref(0);
    const yPosition = ref(0);
    const store = useStore();

    const projects = computed(() => store.getters["projects/getProjects"].slice(0, 4));

    onMounted(() => {
      document.addEventListener("mousemove", getCursor);
    });
    function getCursor(event) {
      return (
        (xPosition.value = event.clientX), (yPosition.value = event.clientY)
      );
    }
    onUnmounted(() => {
      document.removeEventListener("mousemove", getCursor);
    });

    return {
      xPosition,
      yPosition,
      projects,
      getCursor,
    };
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
