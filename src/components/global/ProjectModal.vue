<template>
  <div class="projectModal" v-if="isModalOpen">
    <figure class="projectModal--imageContainer">
        <img :src="project.selectedProject.image" :alt="project.selectedProject.name">
    </figure>
    <div class="buttonContainer">
      <button class="modalButton" @click="closeModal">
        <the-icons name="close" />
      </button>
    </div>
    <!-- <div
      v-if="project.selectedProject.name.length"
      class="projectModal--projectContent"
    >
      <figure>
        <img
          :src="project.selectedProject.image"
          :alt="project.selectedProject.name"
        />
      </figure>
      <div class="projectModal--projectContent__content">
        <p class="projectTitle">
          {{ project.selectedProject.name }}
        </p>
        <p class="projectDescription">
          {{ project.selectedProject.description }}
        </p>
        <a
          :href="project.selectedProject.url"
          target="_blank"
          class="projectLink"
        >{{ project.selectedProject.url }}</a>
        <div class="projectGithub" v-if="project.selectedProject.isPrivate">
          <a
            :href="project.selectedProject.repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <the-icons name="github" class="githubIcon" />
          </a>
        </div>
      </div>
    </div> -->
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
.buttonContainer {
  width: 100%;
  height: 100%;
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
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.projectModal--projectContent figure {
  width: 50%;
  height: 100%;
  padding: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.projectModal--projectContent img {
  width: 80%;
  height: 100%;
  object-fit: contain;
  position: relative;
  top: 0%;
}
.projectModal--projectContent__content {
  font-family: "Nunito";
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1rem;
}

.projectTitle {
  font-size: 1.5rem;
}

.projectDescription {
  font-size: 1.125rem;
  margin: 0;
}

.projectModal--projectContent__content a {
  font-size: 0.8785rem;
  color: #5f7429;
  margin: 1rem 0;
}

.projectGithub {
  width: 2rem;
  height: 2rem;
}
.githubIcon {
  color: #5f7429;
}
</style>
