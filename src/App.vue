<script>
import TheHeader from "../src/components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheSectionPointer from "./components/global/TheSectionPointer.vue";
import { useStore } from "vuex";
import { onMounted, computed, reactive, toRefs } from "vue";
import Loader from "./components/global/Loader.vue"
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    Loader,
    TheSectionPointer
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
      }, 1250);
    }

    return {
      isOpen,
      ...toRefs(renderState),
    };
  },
};
</script>

<template>
  <div class="app-wrapper">
    <div class="wrap static">
      <the-header class="header-section" />
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
      <the-footer />
    </div>
    <TheSectionPointer />
  </div>
</template>

<style>
@import "./assets/css/variables.css";
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300&display=swap");

.static {
  overflow: hidden;
}

.app-wrapper {
  background: var(--darkbg-color);
  width: 100%;
  position: relative;
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

.wrap {
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
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
