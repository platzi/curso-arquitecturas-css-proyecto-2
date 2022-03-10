<template>
  <section id="stackContainer" class="stack-container">
    <p class="stackTitle">My technologies</p>
    <!-- FIRST STACK -->
    <div id="firstSlide" class="first-container">
      <div class="names-container">
        <p
          v-for="(technology, index) in technologies[0]"
          :key="index"
          class="tech-names first-techies"
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
          <img :src="image.name" class="techieImage1" alt="" />
        </figure>
      </div>
    </div>
    <!-- SECOND STACK -->
    <div id="secondSlide" class="second-container">
      <div class="names-container">
        <p
          v-for="(technology, index) in technologies[1]"
          :key="index"
          class="tech-names second-techies"
        >
          {{ technology.name }}
        </p>
      </div>
      <div class="images-container">
        <figure
          v-for="(image, index) in images[1]"
          :key="index"
          class="tech-image"
          :class="`image-${index + 5}`"
        >
          <img :src="image.name" class="techieImage2" alt="" />
        </figure>
      </div>
    </div>
    <!-- THIRD STACK -->
    <div id="thirdSlide" class="third-container">
      <div class="names-container">
        <p
          v-for="(technology, index) in technologies[2]"
          :key="index"
          class="tech-names third-techies"
        >
          {{ technology.name }}
        </p>
      </div>
      <div class="images-container">
        <figure
          v-for="(image, index) in images[2]"
          :key="index"
          class="tech-image"
          :class="`image-${index + 11}`"
        >
          <img :src="image.name" alt="" class="techieImage3" />
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
      document.onreadystatechange = () => {
        if(document.readyState == "complete") {
          scrollAnimation();
          ScrollTrigger.refresh()
        }
      }
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
        .to(".first-container", { xPercent: 120 })
        .from(".second-container", { xPercent: 120 })
        .to(".second-container", { xPercent: -50 })
        .from(".third-container", { xPercent: -120 })
        .to(".third-container", { xPercent: 120 });
      ScrollTrigger.create({
        animation: slide,
        trigger: "#stackContainer",
        start: "top top",
        end: "+=7000",
        scrub: true,
        pin: true,
      });

      // TITLE ANIMATION
      const title = gsap.timeline();
      title.from(".stackTitle", { xPercent: 100 });
      ScrollTrigger.create({
        animation: title,
        trigger: "#stackContainer",
        start: "top top",
        end: "+=7000",
        scrub: true,
        pin: true,
      });

      // LOGOS ROTATING

      const firstImage = gsap.timeline();
      firstImage.to(".techieImage1", { rotation: 1440 });
      ScrollTrigger.create({
        animation: firstImage,
        trigger: "#firstSlide",
        start: "top top",
        end: "+=2500",
        scrub: true,
        pin: true,
      });

      const secondImages = gsap.timeline();
      secondImages.to(".techieImage2", { rotation: 1440 });
      ScrollTrigger.create({
        animation: secondImages,
        trigger: "#secondSlide",
        start: "top top",
        end: "+=4500",
        scrub: true,
        pin: true,
      });

      const thirdImages = gsap.timeline();
      thirdImages.to(".techieImage3", { rotation: 1440 });
      ScrollTrigger.create({
        animation: thirdImages,
        trigger: "#thirdSlide",
        start: "top top",
        end: "+=6500",
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
  font-size: 4.5rem;
  font-weight: 500;
  margin-top: 3rem;
  position: absolute;
  top: 100%;
  z-index: 100;
}

.first-container {
  width: 100%;
  height: 80vh;
  position: fixed;
  top: -15vh;
  z-index: 5;
}
.second-container {
  width: 100%;
  height: 80vh;
  position: fixed;
  top: -15vh;
  z-index: 10;
}
.third-container {
  width: 100%;
  height: 80vh;
  position: fixed;
  top: -15vh;
  z-index: 15;
}

.first-container,
.second-container,
.third-container {
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
