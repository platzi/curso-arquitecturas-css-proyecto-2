<template>
  <div class="heroSection">
    <div class="title-container">
      <h1 class="title">
        Hola, <br />
        Soy Luis <br />Web
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heroSection {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-container {
  width: 75%;
}
.title {
  font-size: 6rem;
  color: white;
  margin: 0;
}
</style>
