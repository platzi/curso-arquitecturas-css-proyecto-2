<template>
  <div>
    projects details
  </div>
</template>

<script>
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import { ref, computed, onBeforeMount } from "vue"
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    let pathId = ref("")

    const routePath = onBeforeMount(() => pathId = route.path );

    const getProjects = computed(() => {
      return store.getters["projects/getProjects"]
    })


    return {
      route,
      pathId,
      routePath,
      store,
      getProjects
    };
  },
}
</script>