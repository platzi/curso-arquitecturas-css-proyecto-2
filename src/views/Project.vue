<template>
  <div class="project-container"></div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, computed, onBeforeMount, onMounted } from "vue";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    let pathId = ref("");

    const routePath = onBeforeMount(() => (pathId.value = route.params.id));

    const projectDetail = computed(() => {
      return store.getters["projects/selectedProjectDetail"];
    });

    onMounted(() => getProject());

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
}
</style>
