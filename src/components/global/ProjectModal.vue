<template>
  <div class="modalContainer">
    <div class="projectModal">
      Hola soy un modal
    </div>
  </div>
</template>

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
  border-radius: 2rem;
  box-shadow: 0px 10px 32px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 10px 32px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 32px -4px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  background: #d1b7be;
}
</style>
