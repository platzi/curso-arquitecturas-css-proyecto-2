<template>
  <div class="heroSection">
    <div class="title-container">
      <h1 class="title">
        Hi, I'm <span class="name">Luis</span>
        Web
        <span>Developer</span>
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
  margin: 1.5rem;
  font-family: "Nunito", sans-serif;
}
.title .name {
  display: block;
  font-family: "Nunito", sans-serif;

  white-space: nowrap;
  border-right: 4px solid;
  width: 4ch;

  animation: typing 2s steps(4), blink 0.5s infinite step-end alternate;
  overflow: hidden;
}

@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
