<template>
  <div  class="modalContainer" v-if="isModalOpen" />
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup() {
    const store = useStore()

    const isModalOpen = computed(() => {
      return store.getters['modal/getModal']
    })


    return {
      isModalOpen
    }
  }
}
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
</style>