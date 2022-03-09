<template>
  <section id="stackContainer" class="stack-container">
    <p class="stackTitle">My technologies</p>
    <!-- FIRST STACK -->
    <div class="first-container">
      <div class="names-container">
        <p
          v-for="(technology, index) in technologies[0]"
          :key="index"
          class="tech-names techies"
        >
          {{ technology.name }}
        </p>
      </div>
      <div class="images-container">
        <figure
          v-for="(image, index) in images[0]"
          :key="index"
          class="tech-image techieImage"
          :class="`image-${index}`"
        >
          <img :src="image.name" alt="" />
        </figure>
      </div>
    </div>
    <!-- SECOND STACK -->
    <div class="second-container">
      <div class="names-container">
        <p
          v-for="(technology, index) in technologies[1]"
          :key="index"
          class="tech-names techies"
        >
          {{ technology.name }}
        </p>
      </div>
      <div class="images-container">
        <figure
          v-for="(image, index) in images[1]"
          :key="index"
          class="tech-image techieImage"
          :class="`image-${index + 5}`"
        >
          <img :src="image.name" alt="" />
        </figure>
      </div>
    </div>
    <!-- THIRD STACK -->
    <div class="third-container">
      <div class="names-container">
        <p
          v-for="(technology, index) in technologies[2]"
          :key="index"
          class="tech-names techies"
        >
          {{ technology.name }}
        </p>
      </div>
      <div class="images-container">
        <figure
          v-for="(image, index) in images[2]"
          :key="index"
          class="tech-image techieImage"
          :class="`image-${index + 11}`"
        >
          <img :src="image.name" alt="" />
        </figure>
      </div>
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

      const title = gsap.timeline();
      title.from(".stackTitle", { xPercent: 100 });
      ScrollTrigger.create({
        animation: title,
        trigger: "#stackContainer",
        start: "top top",
        end: "+=6000",
        scrub: true,
        pin: true,
      });

      const techiesName = gsap.timeline();
      techiesName.from(".techies", { scale: 0 }).to(".techies", { scale: 0 });
      ScrollTrigger.create({
        animation: techiesName,
        trigger: "#stackContainer",
        start: "top top",
        end: "+=6000",
        scrub: true,
        pin: true,
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

.stackTitle {
  font-family: var(--font-family);
  color: var(--primary-color);
  font-size: 8rem;
  opacity: 0.8;
  position: absolute;
  top: 0;
  z-index: -10;
}

.first-container {
  width: 100%;
  height: 80vh;
  position: fixed;
  top: 10vh;
  z-index: 5;
}
.second-container {
  width: 100%;
  height: 80vh;
  position: fixed;
  top: 10vh;
  z-index: 10;
}
.third-container {
  width: 100%;
  height: 80vh;
  position: fixed;
  top: 10vh;
  z-index: 15;
}

.first-container,
.second-container,
.third-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20%;
  padding-top: 30%;
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
  left: 50%;
}
.image-3 {
  top: 40%;
  left: 70%;
}

.image-4 {
  top: 40%;
  left: 10%;
}
.image-5 {
  top: 20%;
  left: 30%;
}
.image-6 {
  top: 65%;
  left: 50%;
}
.image-7 {
  top: 40%;
  left: 70%;
}
.image-8 {
  top: 35%;
  left: 50%;
}
.image-9 {
  top: 30%;
  left: 70%;
}

.image-10 {
  top: 20%;
  left: 40%;
}

.image-11 {
  top: 40%;
  left: 70%;
}
.image-12 {
  top: 35%;
  left: 50%;
}
.image-13 {
  top: 30%;
  left: 70%;
}

.image-14 {
  top: 20%;
  left: 30%;
}

.tech-image img {
  width: 72px;
  height: 72px;
}
</style>
