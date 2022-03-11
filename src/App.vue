<template>
  <div v-if="!isLoading" class="loading">
    <loader />
    <p class="loading-text">Loading . . .</p>
  </div>
  <div class="wrap static">
    <the-header class="header-section" />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "../src/components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { useStore } from "vuex";
import { onMounted, computed, reactive, toRefs } from "vue";
import Loader from "./components/global/Loader.vue"
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    Loader
  },
  setup() {
    const store = useStore();

    const renderState = reactive({
      isLoading: false,
    });

    const isOpen = computed(() => {
      return store.getters["config_drawer/getDrawer"];
    });

    onMounted(() => {
      loading();
    });

    function loading() {
      setTimeout(() => {
        renderState.isLoading = true;
      }, 700);
    }

    return {
      isOpen,
      ...toRefs(renderState),
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

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: var(--lightbg-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading .loading-text {
  font-family: var(--font-family);
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 500;
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

/* ROUTE TRANSITIONS */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>
