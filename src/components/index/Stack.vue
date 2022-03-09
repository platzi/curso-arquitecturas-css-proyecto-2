<template>
  <section id="stackContainer" class="stack-container">
    <div class="first-container">
      <div class="names-container">
        <p
          v-for="(technology, index) in technologies[0]"
          :key="index"
          class="tech-names"
        >
          {{ technology.name }}
        </p>
      </div>
      <div class="images-container">
        <figure
          v-for="(image, index) in images[0]"
          :key="index"
          class="tech-image"
          :class="`image-${index}`"
        >
          <img :src="image.name" alt="" />
        </figure>
      </div>
    </div>
    <div class="second-container">
      <div class="names-container">
        <p
          v-for="(technology, index) in technologies[1]"
          :key="index"
          class="tech-names"
        >
          {{ technology.name }}
        </p>
      </div>
      <div class="images-container"></div>
    </div>
    <div class="third-container">
      <div class="names-container">
        <p
          v-for="(technology, index) in technologies[2]"
          :key="index"
          class="tech-names"
        >
          {{ technology.name }}
        </p>
      </div>
      <div class="images-container"></div>
    </div>
  </section>
</template>
<script>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  setup() {
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

    const technologies = [
      [
        { name: "TAILWIND" },
        { name: "VUEJS" },
        { name: "FIREBASE" },
        { name: "NUXT" },
      ],
      [
        { name: "JAVASCRIPT" },
        { name: "CSS" },
        { name: "GIT Y GITHUB" },
        { name: "FIGMA" },
      ],
      [
        { name: "NODEJS" },
        { name: "EXPRESSJS" },
        { name: "MONGODB" },
        { name: "POSTGRESS" },
      ],
    ];

    const mountingScrollAnimation = onMounted(() => {
      scrollAnimation();
    });

    function scrollAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({
        ease: "none",
        duration: 2,
      });
      const slide = gsap.timeline();
      slide
        .from(".first-container", { xPercent: -100 })
        .from(".second-container", { xPercent: 100 })
        .from(".third-container", { yPercent: -100, opacity: 0 });
      ScrollTrigger.create({
        animation: slide,
        trigger: "#stackContainer",
        start: "top top",
        end: "+=6000",
        scrub: true,
        pin: true,
        markers: true,
      });
    }

    return {
      images,
      technologies,
      mountingScrollAnimation,
    };
  },
};
</script>

<style scoped>
.stack-container {
  width: 100%;
  margin-bottom: 100vh;
  position: relative;
}

.first-container {
  width: 100%;
  height: 80vh;
  position: fixed;
  top: 10vh;
  z-index: 5;
  /* left: 0; */
  background: yellow;
}
.second-container {
  width: 100%;
  height: 80vh;
  position: fixed;
  top: 10vh;
  /* left: 0; */
  z-index: 10;
  background: blue;
}
.third-container {
  width: 100%;
  height: 80vh;
  position: fixed;
  z-index: 15;
  top: 10vh;
  /* left: 0; */
  background: orange;
}

.first-container,
.second-container,
.third-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20%;
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
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tech-image {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
}

.image-0 {
  justify-content: flex-end;
}
.image-1 {
  justify-content: center;
}
.image-2 {
  justify-content: flex-start;
}
.image-3 {
  justify-content: center;
}

.tech-image img {
  width: 100px;
  height: 100px;
}
</style>
