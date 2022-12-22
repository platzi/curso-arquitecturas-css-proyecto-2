<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
  
const images = [
  { name: require("@/static/images/stacks/tailwind.png") },
  { name: require("@/static/images/stacks/vuejs.png") },
  { name: require("@/static/images/stacks/firebase.png") },
  { name: require("@/static/images/stacks/nuxtjs.png") },
];

const technologies = [
  { name: "TAILWIND" },
  { name: "VUEJS" },
  { name: "FIREBASE" },
  { name: "NUXT" },
];

function scrollAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({
    ease: "none",
    duration: 2,
  });

  const firstImage = gsap.timeline();
  firstImage.to(".techieImage1", { rotation: 770 });
  ScrollTrigger.create({
    animation: firstImage,
    trigger: "#firstSlide",
    start: "top top",
    end: "bottom",
    scrub: true,
    pin: true,
    markers: true,
  });
}
</script>

<template>
  <transition appear @enter="scrollAnimation">
    <section id="stackContainer" class="stack-container">
      <p class="stackTitle">My technologies</p>
      <!-- FIRST STACK -->
      <div id="firstSlide" class="first-container">
        <div class="names-container">
          <p
            v-for="(technology, index) in technologies"
            :key="index"
            class="tech-names first-techies"
          >
            {{ technology.name }}
          </p>
        </div>
        <div class="images-container">
          <figure
            v-for="(image, index) in images"
            :key="index"
            class="tech-image"
            :class="`image-${index}`"
          >
            <img :src="image.name" class="techieImage1" alt="" />
          </figure>
        </div>
      </div>
    </section>
  </transition>
</template>

<style scoped>
.stack-container {
  width: 100%;
  min-height: 100vh;
  /* position: relative; */
}

.stackTitle {
  font-family: var(--font-family);
  color: var(--primary-color);
  font-size: 4.5rem;
  font-weight: 500;
  margin-top: 3rem;
  z-index: 100;
}

.first-container {
  width: 100%;
}
.first-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
}

.names-container {
  width: 25%;
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.tech-names {
  font-family: var(--font-family);
  color: var(--primary-color);
  font-size: 2rem;
  text-align: left;
  width: 100%;
}

.images-container {
  width: 75%;
  height: 80vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tech-image {
  width: 100%;
  height: 100px;
  position: absolute;
}

.image-0 {
  top: 40%;
  left: 10%;
}
.image-1 {
  top: 20%;
  left: 30%;
}
.image-2 {
  top: 65%;
  left: 30%;
}
.image-3 {
  top: 40%;
  left: 50%;
}

.image-4 {
  top: 30%;
  left: 10%;
}
.image-5 {
  top: 20%;
  left: 10%;
}
.image-6 {
  top: 65%;
  left: 5%;
}
.image-7 {
  top: 40%;
  left: 20%;
}
.image-8 {
  top: 60%;
  left: 50%;
}
.image-9 {
  top: 50%;
  left: 35%;
}

.image-10 {
  top: 20%;
  left: 40%;
}

.image-11 {
  top: 40%;
  left: 50%;
}
.image-12 {
  top: 50%;
  left: 10%;
}
.image-13 {
  top: 60%;
  left: 40%;
}

.image-14 {
  top: 20%;
  left: 30%;
}

.tech-image img {
  width: 72px;
  height: 72px;
}

@media only screen and (max-width: 640px) {
  .stackTitle {
    font-size: 3rem;
  }
  .tech-names {
    font-size: 1rem;
  }
  .tech-image img {
    width: 48px;
    height: 48px;
  }
}
@media only screen and (max-width: 375px) {
  .tech-image img {
    width: 36px;
    height: 36px;
  }
}
</style>
