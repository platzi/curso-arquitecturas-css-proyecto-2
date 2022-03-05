<template>
  <div class="works-container">
    <div class="works-container__title-container">
      <h1 class="title">TAKE A LOOK TO MY PORTFOLIO</h1>
    </div>
    <div class="works-container__projects-container">
      <project-card
        v-for="(project, index) in myProjects"
        :key="index"
        :title="project.name"
        :image="project.image"
        :date="project.date"
        :projectId="project.id"
        :position="index + 1"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/cards/ProjectCard.vue"
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    ProjectCard
  },
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
  padding: 0 2.125rem;
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
  margin-bottom: -5%;
}
</style>
