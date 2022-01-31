<template>
  <div class="projectModal" v-if="isModalOpen">
    <div class="buttonContainer">
      <button class="modalButton" @click="closeModal">
        <the-icons name="close" />
      </button>
    </div>
    <div
      v-if="project.selectedProject.name.length"
      class="projectModal--projectContent"
    >
      <figure class="w-1/2 flex justify-center items-center">
        <img
          :src="project.selectedProject.image"
          :alt="project.selectedProject.name"
        />
      </figure>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive, computed } from "vue";
import TheIcons from "./TheIcons.vue";
export default {
  components: {
    TheIcons,
  },
  setup() {
    const store = useStore();

    const project = reactive({
      selectedProject: computed(() => {
        return store.getters["projects/getSelectedProject"];
      }),
    });

    const isModalOpen = computed(() => {
      return store.getters["modal/getModal"];
    });

    function closeModal() {
      store.dispatch("modal/activeModal", false);
    }

    return {
      closeModal,
      isModalOpen,
      project,
    };
  },
};
</script>

<style scoped>
.projectModal {
  width: 50%;
  height: 70%;
  position: fixed;
  top: 15%;
  left: 25%;
  z-index: 310;
  border-radius: 2rem;
  box-shadow: 0px 10px 32px -4px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  padding: 0.75rem 1rem;
  background: rgb(247, 237, 240);
}
.buttonContainer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.25rem;
}
.modalButton {
  border: #330411 1px solid;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
}
.projectModal--projectContent {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.projectModal--projectContent img {
  width: 45%;
  object-fit: contain;
}
</style>
