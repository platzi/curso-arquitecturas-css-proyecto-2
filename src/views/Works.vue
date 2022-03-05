<template>
  <div class="works-container">
    <div class="works-container__title-container">
      <h1 class="title">
        TAKE A LOOK TO MY PORTFOLIO AND MY WORK
      </h1>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();

    const myProjects = computed(() => {
      return store.getters["projects/getProjects"];
    });

    return {
      myProjects,
    };
  },
};
</script>

<style scoped>
.works-container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
.works-container__title-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title {
  width: 40%;
  font-family: var(--font-family);
  color: var(--primary-color);
  font-size: 4.5rem;
  font-weight: 500;
}
</style>
