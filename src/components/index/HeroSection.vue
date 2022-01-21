<template>
  <div class="heroSection">
    <div class="title-container">
      <transition appear tag="title" @before-enter="beforeEnter" @enter="enter">
        <h1 class="title">
          Hi, I'm
          <div class="name-container">
            <transition-group tag="myName" class="myName">
              <p v-for="(letter, index) in myName" :key="index">{{ letter }}</p>
            </transition-group>
            <p class="empty">:)</p>
            <transition-group tag="myName" class="myLastname">
              <p v-for="(letter, index) in myLastname" :key="index">
                {{ letter }}
              </p>
            </transition-group>
          </div>
          Web
          <span>Developer</span>
        </h1>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
export default {
  name: "HeroSection",
  setup() {
    const myName = ref(["L", "u", "i", "s"]);
    const myLastname = ref(["R", "e", "y", "e", "s"]);

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
      });
    };

    return { myName, myLastname, beforeEnter, enter };
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
.name-container {
  display: flex;
  justify-content: start;
  align-items: center;
}
.myName,
.myLastname {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title p {
  margin: 0;
}
.empty {
  color: transparent
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
