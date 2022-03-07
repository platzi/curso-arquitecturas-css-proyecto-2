<template>
  <div class="wrap">
    <project-modal />
    <background />
    <the-header class="header-section" />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "../src/components/TheHeader.vue";
import ProjectModal from "../src/components/global/ProjectModal.vue";
import Background from "./components/global/Background.vue";
import TheFooter from "./components/TheFooter.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "App",
  components: {
    TheHeader,
    ProjectModal,
    Background,
    TheFooter,
  },
  setup() {
    const store = useStore();

    const isOpen = computed(() => {
      return store.getters["config_drawer/getDrawer"];
    });

    return {
      isOpen,
    };
  },
};
</script>

<style>
@import "./assets/css/variables.css";
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300&display=swap");

.static {
  overflow: hidden;
}

.wrap {
  background: var(--bglight-color);
  position: relative;
  background-image: url("./static/images/noise.png");
  background-position: center;
}

.header-section {
  padding: 0 2.125rem;
}
</style>
