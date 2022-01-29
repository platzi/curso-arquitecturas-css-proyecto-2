<template>
  <div class="modalContainer" v-if="isModalOpen">
    <div class="projectModal">
      <div class="buttonContainer">
        <button class="modalButton" @click="closeModal">
          <the-icons name="close" />
        </button>
      </div>
      <div class="projectModal--projectContent"></div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import TheIcons from "./TheIcons.vue";
export default {
  components: {
    TheIcons,
  },
  setup() {
    const store = useStore();

    const isModalOpen = computed(() => {
      return store.getters["modal/getModal"];
    });

    function closeModal() {
      console.log('Estamos por cerrar el modal desde el componente')
      store.dispatch("modal/activeModal", false);
    }

    return {
      closeModal,
      isModalOpen
    };
  },
};
</script>

<style scoped>
.modalContainer {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #330411;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 300;
}
.projectModal {
  width: 50%;
  height: 70%;
  position: relative;
  z-index: 310;
  border-radius: 2rem;
  box-shadow: 0px 10px 32px -4px rgba(0, 0, 0, 0.75);
  display: flex;
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
</style>
