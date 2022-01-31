<template>
  <div class="projectModal" v-if="isModalOpen">
    <figure class="projectModal--imageContainer">
      <img
        :src="project.selectedProject.image"
        :alt="project.selectedProject.name"
      />
    </figure>
    <div class="projectModal--projectContent">
      <div class="buttonContainer">
        <button class="modalButton" @click="closeModal">
          <the-icons name="close" class="modalButton--icon" />
        </button>
      </div>
      <div class="projectDetails">
        <p class="projectTitle">
          {{ project.selectedProject.name }}
        </p>
        <div class="projectLinks">
          <a
            :href="project.selectedProject.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <the-icons name="link" />
          </a>
          <a
            v-if="project.selectedProject.isPrivate"
            :href="project.selectedProject.repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <the-icons name="github" />
          </a>
        </div>
        <div class="projectTools">
          <figure v-for="(tool, index) in project.selectedProject.tools" :key="index" class="projectTools--figure">
            <img :src="tool.img" :alt="tool.name">
          </figure>
        </div>
      </div>
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
  height: 85%;
  position: fixed;
  top: 7.5%;
  left: 25%;
  z-index: 310;
  border-radius: 2rem;
  box-shadow: 0px 10px 32px -4px rgba(0, 0, 0, 0.75);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 1;
}
.projectModal--imageContainer {
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  margin: 0;
  border-radius: 2rem;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #5f7429;
  border-radius: 10px;
}

.projectModal--imageContainer img {
  width: 100%;
  height: auto;
}
.projectModal--projectContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  z-index: 310;
  top: 0;
  left: 0;
  right: 0;
  padding-right: 8px;
}
.buttonContainer {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
}
.modalButton {
  border: #8f032a 1px solid;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
}
.modalButton--icon {
  color: #8f032a;
}
.projectDetails {
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #b79d36;
  border-radius: 0 0 2rem 2rem;
  padding: 0 1rem;
}
.projectTitle {
  width: 45%;
  background: transparent;
  color: #f5e6d7;
  font-family: "Nunito";
  font-size: 1.5rem;
  user-select: none;
}
.projectTools {
  width: 20%;
  display: flex;
  align-items: center;
}
.projectLinks {
  width: 30%;
  display: flex;
  align-items: center;
}
.projectLinks a {
  width: 1.25rem;
  height: 1.25rem;
  color: #f5e6d7;
  margin-right: 0.5rem;
}
.projectTools {
  display: flex;
  align-items: center;
}
.projectTools--figure {
  margin-right: 0.5rem;
  width: 1.25rem;
  height: 1.5rem;
}
</style>
