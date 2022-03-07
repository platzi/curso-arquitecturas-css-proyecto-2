<template>
  <div class="project-container">
    <div class="project-container__title-container">
      <h1 class="project-title">
        {{ projectDetail.name }}
      </h1>
    </div>
    <figure class="project-container__image-container">
      <img :src="projectDetail.image" :alt="projectDetail.name" />
    </figure>
    <div class="project-container__date-container">
      <p class="project-date">
        {{ projectDetail.date }}
      </p>
    </div>
    <div class="project-container__description-container">
      <p class="project-description">
        {{ projectDetail.description }}
      </p>
      <a :href="projectDetail.link" target="_blank">VISIT ONLINE VERSION</a>
    </div>
    <div class="project-container__stack-container">
      <figure
        v-for="(tool, index) in projectDetail.tools"
        :key="index"
        class="project-technology"
      >
        <img :src="tool.img" :alt="tool.techName" />
      </figure>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, computed, onBeforeMount, onUpdated, onMounted } from "vue";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    let pathId = ref("");

    const routePath = onBeforeMount(() => (pathId.value = route.params.id));

    const projectDetail = computed(() => {
      return store.getters["projects/getSelectedProject"];
    });

    onMounted(() => getProject());

    onUpdated(() => getProject());

    function getProject() {
      store.dispatch("projects/getSelectedProject", pathId.value);
    }

    return {
      route,
      pathId,
      routePath,
      store,
      projectDetail,
      getProject,
    };
  },
};
</script>

<style scoped>
.project-container {
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 0 2.125rem;
}
.project-container__title-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.project-title {
  font-family: var(--font-family);
  color: var(--primary-color);
  font-size: 0.75rem;
  font-weight: 700;
}

.project-container__image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  margin: 16px 0;
}

.project-container__image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.project-container__date-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 60px;
}

.project-date {
  color: var(--primary-color);
  font-family: var(--font-family);
  font-size: 0.625rem;
}

.project-container__description-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 12px;
}

.project-description {
  font-family: var(--font-family);
  color: var(--primary-color);
  font-size: 0.75rem;
}

.project-container__description-container a {
  color: var(--primary-color);
  font-family: var(--font-family);
  text-decoration: underline;
}

.project-container__stack-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.project-technology {
  width: 3rem;
  height: 3rem;
  margin: 1rem 0;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-technology img {
  width: 100%;
  height: 100%;
}

</style>
