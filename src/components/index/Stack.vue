<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
  
const images = [
  [
    { name: require("@/static/images/stacks/tailwind.png") },
    { name: require("@/static/images/stacks/vuejs.png") },
    { name: require("@/static/images/stacks/firebase.png") },
    { name: require("@/static/images/stacks/nuxtjs.png") },
  ],
  [
    { name: require("@/static/images/stacks/javascript.png") },
    { name: require("@/static/images/stacks/css.png") },
    { name: require("@/static/images/stacks/git.png") },
    { name: require("@/static/images/stacks/github.png") },
    { name: require("@/static/images/stacks/figma.png") },
    { name: require("@/static/images/stacks/nodejs.png") },
  ],
  [
    { name: require("@/static/images/stacks/postgres.png") },
    { name: require("@/static/images/stacks/mongo.png") },
    { name: require("@/static/images/stacks/expressjs.png") },
    { name: require("@/static/images/stacks/webpack.png") },
  ],
];

// const technologies = [
//   { name: "TAILWIND" },
//   { name: "VUEJS" },
//   { name: "FIREBASE" },
//   { name: "NUXT" },
// ];

function scrollAnimation2() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({
    ease: "none",
    duration: 1,
  });

  gsap.timeline({
    ScrollTrigger: {
      trigger: "#firstSlide",
      start: "top bottom",
      end: "top center",
      scrub: true,
      markers: true,
    }
  })
  .from(".firstStack", { yPercent: 200, opacity: 0 });
}
onMounted(() => {
  scrollAnimation2()
})
</script>

<template>
  <section id="stackContainer" class="stack-container">
    <p class="stackTitle">My Stack</p>
    <!-- FIRST STACK -->
    <div id="firstSlide" class="first-container">
      <!-- <div class="names-container">
        <p
          v-for="(technology, index) in technologies"
          :key="index"
          class="tech-names firstStack"
        >
          {{ technology.name }}
        </p>
      </div> -->
      <div class="images-container">
        <figure
          v-for="(image, index) in images[0]"
          :key="index"
          class="tech-image"
          :class="`image-${index}`"
        >
          <img :src="image.name" class="techieImage1" alt="" />
        </figure>
      </div>
      <div class="images-container">
        <figure
          v-for="(image, index) in images[1]"
          :key="index"
          class="tech-image"
          :class="`image-${index}`"
        >
          <img :src="image.name" class="techieImage1" alt="" />
        </figure>
      </div>
      <div class="images-container">
        <figure
          v-for="(image, index) in images[2]"
          :key="index"
          class="tech-image"
          :class="`image-${index}`"
        >
          <img :src="image.name" class="techieImage1" alt="" />
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.stackTitle {
  font-family: var(--font-family);
  color: var(--primary-color);
  font-size: 4.5rem;
  font-weight: 500;
  margin-top: 3rem;
  width: 80%;
  text-align: right;
  padding-right: 1rem;
}

.first-container {
  width: 100%;
  display: flex;
}
.first-container {
  display: flex;
  justify-content: flex-end;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
 
.tech-image {
  width: 100%;
  height: 100px;
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
