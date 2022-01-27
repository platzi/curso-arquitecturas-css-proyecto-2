<template>
  <div class="card">
    <div class="card--contentContainer">
      <div class="wrapper">Este es el contenido</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  padding: 1rem;
}
.card--contentContainer {
  background: #8f032a;
  border-radius: 1rem;
  box-shadow: 0px 32px 82px 4px rgba(143, 3, 42, 0.4);
  -webkit-box-shadow: 0px 32px 82px 4px rgba(143, 3, 42, 0.4);
  -moz-box-shadow: 0px 32px 82px 4px rgba(143, 3, 42, 0.4);
  padding: 0.15rem;
  width: 100%;
  min-width: 254px;
  height: 320px;
}

.wrapper {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
