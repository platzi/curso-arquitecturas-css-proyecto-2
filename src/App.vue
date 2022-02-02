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
import { computed, watch } from 'vue'
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

    watch((isOpen) => {
      if(isOpen) {
        document.body.classList.add('static')
      } else {
        document.body.classList.remove('static')
      }
    })

    return {
      isOpen
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300&display=swap");


#app h2 {
  color: #f5e6d7;
}

.static {
  overflow: hidden;
}

.wrap {
  background: #464d34;
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
</style>
