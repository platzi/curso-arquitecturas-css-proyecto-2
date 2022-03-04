<template>
  <div class="wrap">
    <project-modal />
    <background />
    <the-header />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "../src/components/TheHeader.vue";
import ProjectModal from "../src/components/global/ProjectModal.vue"
import Background from './components/global/Background.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: "App",
  components: {
    TheHeader,
    ProjectModal,
    Background
  },
  setup() {
    const store = useStore()

    const isOpen = computed(() => {
      return store.getters['config_drawer/getDrawer']
    })

    return {
      isOpen
    }
  }
};
</script>

<style>
@import './assets/css/variables.css';
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300&display=swap");


#app h2 {
  color: #f5e6d7;
}

.static {
  overflow: hidden;
}

.wrap {
  background: var(--bglight-color);
  position: relative;
}
</style>
