<template>
  <div>projects details</div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, computed, onBeforeMount } from "vue";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    let pathId = ref("");

    const routePath = onBeforeMount(() => pathId.value = route.params.id);

    const getProjects = computed(() => {
      const projects = store.getters["projects/getProject"];
      const projectId = store.getters["projects/getProjects"].findIndex(
        (project) => project.id === pathId.value
      );
      const selectedProject = projects[projectId];
      console.log(selectedProject)
      return selectedProject
    });

    return {
      route,
      pathId,
      routePath,
      store,
      getProjects,
    };
  },
};
</script>
