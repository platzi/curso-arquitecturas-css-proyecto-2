<template>
  <div class="stack-container">
    <div ref="wordsContainer" class="stack-container__name-container">
      <div class="words1">
        <p
          v-for="(technology, index) in technologies[0]"
          :key="index"
          ref="word"
          class="stack-container__name-container--name"
        >
          {{ technology.name }}
        </p>
      </div>
      <div class="words2">
        <p
          v-for="(technology, index) in technologies[1]"
          :key="index"
          ref="word"
          class="stack-container__name-container--name"
        >
          {{ technology.name }}
        </p>
      </div>
      <div class="words3">
        <p
          v-for="(technology, index) in technologies[2]"
          :key="index"
          ref="word"
          class="stack-container__name-container--name"
        >
          {{ technology.name }}
        </p>
      </div>
    </div>
    <div class="stack-container__image-container">
      <div class="images1">
        <figure
          v-for="(image, index) in images[0]"
          :key="index"
          class="stack-container__image-container--image"
        >
          <img :src="image.name" alt="" />
        </figure>
      </div>
      <div class="images2">
        <figure
          v-for="(image, index) in images[1]"
          :key="index"
          class="stack-container__image-container--image"
        >
          <img :src="image.name" alt="" />
        </figure>
      </div>
      <div class="images3">
        <figure
          v-for="(image, index) in images[2]"
          :key="index"
          class="stack-container__image-container--image"
        >
          <img :src="image.name" alt="" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
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
      gsap.registerPlugin(ScrollTrigger)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".stack-container__name-container",
            start: "center center",
            end: "bottom bottom",
            markers: true,
            scrub: true,
            pin: true,
          },
        })
        .from(".words1", {
          x: innerWidth * 1,
          opacity: 0,
        })
        .from(".words2", {
          x: innerWidth * 1,
          opacity: 0,
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
  padding: 0 2.125rem;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.stack-container__name-container {
  width: 25%;
  height: 100%;
}

.stack-container__name-container--name {
  color: var(--primary-color);
  font-family: var(--font-family);
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
}

.words1,
.words2,
.words3,
.images1,
.images2,
.images3 {
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.stack-container__image-container {
  width: 75%;
  height: 100%;
}

.stack-container__image-container--image {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
}

.stack-container__image-container--image img {
  width: 100%;
  height: 100%;
}
</style>
