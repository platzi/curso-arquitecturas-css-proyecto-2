<script setup>
import gsap from 'gsap';

const beforeStickIntro = (el) => {
  el.style.transform = "translateY(40%)";
  el.style.transform = "scaleY(0.3)";
  el.style.opacity = 0;
  el.style.transformOrigin = "bottom"
};
const stickIntro = (el, done) => {
  gsap.to(el, {
    y: 0,
    scaleY: 1,
    duration: 1,
    opacity: 1,
    onComplete: done,
    delay: 0.5,
    ease: "power1.out",
  });
};

const beforeCircleIntro = (el) => {
  el.style.transform = "scale(0)";
  el.style.opacity = 0;
  el.style.transformOrigin = "bottom"
};
const circleIntro = (el, done) => {
  gsap.to(el, {
    scale: 1,
    duration: 1,
    opacity: 1,
    onComplete: done,
    delay: 1.5,
    ease: "power1.out",
  });
};

const beforeDotIntro = (el) => {
  el.style.transform = "scale(0)";
  el.style.opacity = 1;
  el.style.transformOrigin = "center"
};

const dotIntro = (el) => {
  gsap.to(el, {
    scale: 3,
    duration: 1,
    opacity: 0,
    delay: 1.5,
    ease: "power1.out",
  });
};
const afterDotIntro = (el, done) => {
  gsap.to(el, {
    scale: 1,
    duration: 1,
    opacity: 1,
    onComplete: done,
    delay: 2.5,
    ease: "power1.out",
    background: '#1e705d'
  });
};
</script>

<template>
  <div class="pointer-wrapper">
    <transition appear @before-enter="beforeStickIntro" @enter="stickIntro">
      <div class="stick" />
    </transition>
    <transition appear @before-enter="beforeCircleIntro" @enter="circleIntro">
      <div class="circle" />
    </transition>
    <transition appear @before-enter="beforeDotIntro" @enter="dotIntro" @after-enter="afterDotIntro">
      <div class="dot" />
    </transition>
  </div>
</template>

<style scoped>
.pointer-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  pointer-events: none;
}
.stick {
  position: absolute;
  bottom: 0;
  height: 45%;
  left: 20%;
  width: 2px;
  border-right: 1px solid var(--primary-color);
  border-left: 1px solid var(--primary-color);
}
.circle {
  position: absolute;
  bottom: 45%;
  left: calc(20% - 3px);
  right: 0;
  border: 1px solid var(--primary-color);
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.dot {
  position: absolute;
  bottom: 45%;
  left: calc(20% - 3px);
  right: 0;
  /* background: var(--primary-color); */
  border: 1px solid var(--primary-color);
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>