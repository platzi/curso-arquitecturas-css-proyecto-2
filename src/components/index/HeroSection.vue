<template>
  <div class="heroSection">
    <div class="content-container">
      <div class="title-container">
        <transition
          appear
          tag="title"
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <h1 class="title">
            Hey, I'm
            <div class="name-container">
              <transition-group
                tag="myName"
                class="myName"
                appear
                @enter="beforeNameIntro"
                @after-enter="nameIntro"
              >
                <p
                  v-for="(letter, index) in myName"
                  :key="index"
                  :data-index="index"
                >
                  {{ letter }}
                </p>
              </transition-group>
              <p class="empty">:)</p>
              <transition-group
                tag="myName"
                class="myLastname"
                appear
                @enter="beforeLastnameIntro"
                @after-enter="lastnameIntro"
              >
                <p
                  v-for="(letter, index) in myLastname"
                  :key="index"
                  :data-index="index"
                >
                  {{ letter }}
                </p>
              </transition-group>
            </div>
          </h1>
        </transition>
      </div>
      <div class="copywrite-container">
        <transition
          appear
          @enter="beforeContentIntro"
          @after-enter="contentIntro"
        >
          <p>I'm enthusiastic Frontend Developer,
            <br>

          </p>
        </transition>
      </div>
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
        delay: 0.2,
      });
    };

    const beforeNameIntro = (el) => {
      el.style.transform = "translateX(40vw)";
      el.style.opacity = 0
    };

    const nameIntro = (el, done) => {
      gsap.to(el, {
        x: 0,
        position: "block",
        duration: 1,
        opacity: 1,
        onComplete: done,
        delay: el.dataset.index * 0.1 + 0.3,
        ease: "power1.out"
      });
    };

    const beforeLastnameIntro = (el) => {
      el.style.transform = "translateX(40vw)";
      el.style.opacity = 0
    };

    const lastnameIntro = (el, done) => {
      gsap.to(el, {
        x: 0,
        duration: 1,
        onComplete: done,
        opacity: 1,
        delay: el.dataset.index * 0.2 + 0.6,
        ease: "power1.out"
      });
    };


    const beforeContentIntro = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateX(-164px)";
    };

    const contentIntro = (el, done) => {
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 1,
        onComplete: done,
        delay: 2.15,
      });
    };

    return {
      myName,
      myLastname,
      beforeEnter,
      enter,
      beforeNameIntro,
      nameIntro,
      beforeLastnameIntro,
      lastnameIntro,
      beforeContentIntro,
      contentIntro,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heroSection {
  width: 100%;
  display: flex;
  align-items: center;
}
.content-container {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 2rem 2.25rem;
  padding-left: 5rem;
}
.title-container {
  width: 75%;
}
.title {
  font-size: 8rem;
  margin: auto;
  color: #f5e6d7;
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
.copywrite-container p {
  font-size: 1.25rem;
  margin: 0;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  padding: 0 0.75rem;
  font-size: 2rem;
  color: #f5e6d7;
}
.empty {
  color: transparent;
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
