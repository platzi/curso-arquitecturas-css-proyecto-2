<template>
  <section id="stackContainer" class="stack-container">
    <div class="first-container">
      <div class="names-container"></div>
      <div class="images-container"></div>
    </div>
    <div class="second-container">
      <div class="names-container"></div>
      <div class="images-container"></div>
    </div>
    <div class="third-container">
      <div class="names-container"></div>
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
        { name: require("@/static/images/logos/tailwind.png") },
        { name: require("@/static/images/logos/vuejs.png") },
        { name: require("@/static/images/logos/firebase.png") },
        { name: require("@/static/images/logos/nuxt.png") },
      ],
      [
        { name: require("@/static/images/logos/tailwind.png") },
        { name: require("@/static/images/logos/vuejs.png") },
        { name: require("@/static/images/logos/firebase.png") },
        { name: require("@/static/images/logos/nuxt.png") },
      ],
      [
        { name: require("@/static/images/logos/tailwind.png") },
        { name: require("@/static/images/logos/vuejs.png") },
        { name: require("@/static/images/logos/firebase.png") },
        { name: require("@/static/images/logos/nuxt.png") },
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
        { name: "TAILWIND" },
        { name: "VUEJS" },
        { name: "FIREBASE" },
        { name: "NUXT" },
      ],
      [
        { name: "TAILWIND" },
        { name: "VUEJS" },
        { name: "FIREBASE" },
        { name: "NUXT" },
      ],
    ];

    const mountingScrollAnimation = onMounted(() => {
      scrollAnimation();
    });

    function scrollAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({
        ease: "none",
        duration: 2
      })
      const slide = gsap.timeline();
      slide
        .from(".first-container", { xPercent: -100, opacity: 0 })
        .from(".second-container", { xPercent: 100, opacity: 0 })
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
}

.names-container {
  width: 25%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.images-container {
  width: 75%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


</style>
