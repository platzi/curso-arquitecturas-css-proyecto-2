<template>
  <div class="heroSection">
    <div class="content-container">
      <div class="title-container">
        <transition appear @enter="beforeNameIntro" @after-enter="nameIntro">
          <h1 class="title">
            <span>Hey, I'm</span>
            LUIS REYES
          </h1>
        </transition>
      </div>
      <div class="copywrite-container">
        <transition
          appear
          @enter="beforeContentIntro"
          @after-enter="contentIntro"
        >
          <p>
            <span class="first-line">I'm enthusiastic</span>
            <br />
            <span class="middle-line"> FRONTEND DEVELOPER </span>
            <br />
            <span class="second-line">
              Vuejs promoter, and a project lover
            </span>
          </p>
        </transition>
      </div>
      <div class="gesture-container">
        <transition
          appear
          @before-enter="beforeGestureIntro"
          @enter="gestureIntro"
        >
          <div class="gesture-container__arrow-container">
            <svg
              width="8"
              height="47"
              viewBox="0 0 8 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.67157 46.3536L7.85355 43.1716C8.04882 42.9763 8.04882 42.6597 7.85355 42.4645C7.65829 42.2692 7.34171 42.2692 7.14645 42.4645L4.81802 44.7929L4.81802 3.93695C5.68056 3.71488 6.31787 2.93187 6.31787 2C6.31787 0.895431 5.42244 0 4.31787 0C3.2133 0 2.31787 0.895431 2.31787 2C2.31787 2.93197 2.95533 3.71506 3.81802 3.93703L3.81802 44.7929L1.48959 42.4645C1.29433 42.2692 0.977748 42.2692 0.782485 42.4645C0.587224 42.6597 0.587224 42.9763 0.782485 43.1716L3.96447 46.3536C4.15973 46.5488 4.47631 46.5488 4.67157 46.3536Z"
                fill="#1E6F5C"
              />
            </svg>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "HeroSection",
  setup() {
    //animacion tanto del nombre como del apellido
    // de derecha a izquierda
    const beforeNameIntro = (el) => {
      el.style.transform = "translateX(-40vw)";
      el.style.opacity = 0;
    };

    const nameIntro = (el, done) => {
      gsap.to(el, {
        x: 0,
        duration: 1,
        opacity: 1,
        onComplete: done,
        delay: 1,
        ease: "power1.out",
      });
    };

    // aqui esta la animacion de mi presentacion inicial
    const beforeContentIntro = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateX(164px)";
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

    // GESTURES EVENTS ANIMATIONS
    const beforeGestureIntro = (el) => {
      el.style.opacity = 0;
      el.style.transform = "scale(0.5)"
    }

    const gestureIntro = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        onComplete: done,
        delay: 3.5,
      })
    }

    return {
      beforeNameIntro,
      nameIntro,
      beforeContentIntro,
      contentIntro,
      beforeGestureIntro,
      gestureIntro
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heroSection {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}
.content-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1440px;
}
.title-container {
  width: 100%;
  /* height: 50%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
}
.title-container h1 {
  color: var(--primary-color);
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 9rem;
  font-weight: 500;
  letter-spacing: var(--letter-spacing);
}

.title {
  margin: 0;
}

.title-container h1 span {
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: var(--letter-spacing);
}

.title p {
  margin: 0;
}

.copywrite-container {
  width: 100%;
  /* height: 50%; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.copywrite-container p {
  font-size: 1.25rem;
  margin: 0;
  font-family: var(--font-family);
  padding: 0 0.5rem;
  color: var(--primary-color);
  text-align: right;
  letter-spacing: var(--letter-spacing);
}

.copywrite-container p .first-line {
  font-size: 3rem;
  font-weight: 400;
}

.copywrite-container p .middle-line {
  font-size: 4.5rem;
  font-weight: 500;
}

.copywrite-container p .second-line {
  font-size: 1.5rem;
  font-weight: 400;
}

.gesture-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.gesture-container__arrow-container {
  border: 1px solid var(--primary-color);
  border-radius: 100%;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 640px) {
  .content-container {
    padding: 3rem 0.75rem;
  }

  .title-container {
    margin-bottom: 2.25rem;
  }

  .title-container h1 {
    font-size: 4.5rem;
  }

  .title-container h1 span {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .copywrite-container {
    margin-bottom: 3.75rem;
  }

  .copywrite-container p .first-line {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .copywrite-container p .middle-line {
    font-size: 3rem;
    font-weight: 500;
  }

  .copywrite-container p .second-line {
    font-size: 0.75rem;
    font-weight: 400;
  }
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
