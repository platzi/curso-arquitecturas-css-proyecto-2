<template>
  <div class="heroSection">
    Aqui nos estamos presentando
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heroSection {
  width: 100%;
  height: 100vh;
  background: blue;
}
</style>
