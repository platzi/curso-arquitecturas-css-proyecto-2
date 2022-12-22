<script setup>

</script>

<template>
  <div class="pointer-wrapper">
    <div class="stick" />
  </div>
</template>

<style scoped>
.pointer-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
}
.stick {
  position: absolute;
  bottom: 0;
  height: 45%;
  left: 20%;
  width: 4px;
  border-right: 1px solid var(--primary-color);
  border-left: 1px solid var(--primary-color);
}
.stick::before {
  content: '';
  position: absolute;
  top: -16px;
  left: -7px;
  right: 0;
  border: 1px solid var(--primary-color);
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
</style>