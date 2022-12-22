<script setup>
import gsap from "gsap";

const beforeNameIntro = (el) => {
  el.style.transform = "translateX(-40%)";
  el.style.opacity = 0;
};

const nameIntro = (el, done) => {
  gsap.to(el, {
    x: 0,
    duration: 1,
    opacity: 1,
    onComplete: done,
    delay: 2.6,
    ease: "power1.out",
  });
};

const beforeContentIntro = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(164px)";
};

const contentIntro = (el, done) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 1,
    onComplete: done,
    delay: 3.6,
  });
};
</script>

<template>
  <div class="heroSection">
    <div class="wrapper-presentation">
      <transition appear @enter="beforeNameIntro" @after-enter="nameIntro">
        <h1 class="name">
          Luis Reyes
        </h1>
      </transition>
      <transition appear @enter="beforeContentIntro" @after-enter="contentIntro">
        <p class="description">
          FullStack-Developer
        </p>
      </transition>
      <transition appear @enter="beforeContentIntro" @after-enter="contentIntro">
        <p class="shoot">
          MEVN developer, looking to create amazing Web experiences
        </p>
      </transition>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heroSection {
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
}
.wrapper-presentation {
  position: absolute;
  top: 35%;
  left: 25%;
}
.name, .description, .shoot {
  font-family: var(--font-family);
  margin: 0;
}
.name {
  font-size: 6rem;
  color: var(--lightbg-color);
}
.description {
  font-size: 1.25rem;
  color: var(--primary-color);
}
.shoot {
  width: 100%;
  max-width: 320px;
  margin-top: 12px;
  font-size: 1.5rem;
  color: var(--secundary-color);
}
</style>
