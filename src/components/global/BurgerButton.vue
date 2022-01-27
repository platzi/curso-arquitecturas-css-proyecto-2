<template>
  <button class="button">
    <div class="burgerButton">
      <transition name="first">
        <div class="first" v-if="!isMenuOpen" />
      </transition>
      <transition name="second" >
        <div class="second" v-if="!isMenuOpen" />
      </transition>
      <transition name="second--comp" >
        <div class="second--comp" v-if="isMenuOpen" />
      </transition>
      <transition name="secondDiv">
        <div class="second--div" v-if="isMenuOpen" />
      </transition>
      <transition name="third">
        <div class="third" v-if="!isMenuOpen" />
      </transition>
    </div>
  </button>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "BurgerButton",
  setup() {
    const store = useStore();

    const isMenuOpen = computed(() => store.getters["config_drawer/getDrawer"]);

    return {
      isMenuOpen,
    };
  },
};
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button:active {
  border: #f5e6d7 1px solid;
  border-radius: 100%;
}
@media only screen and (max-width: 1024px) {
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button:focus {
    outline: none;
  }
  .burgerButton {
    display: grid;
    padding: 0.125rem;
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  .first,
  .second,
  .second--comp,
  .second--div,
  .third {
    height: 2px;
    border-radius: 0.125rem;
    align-self: center;
    background: #f5e6d7;
  }
  .first {
    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 1;
    grid-row-end: span 1;
  }
  .second {
    grid-column-start: 1;
    grid-column-end: span 3;
    grid-row-start: 2;
    grid-row-end: span 1;
    align-self: center;
  }
  .second--comp {
    grid-column-start: 1;
    grid-column-end: span 3;
    grid-row-start: 2;
    grid-row-end: span 1;
    align-self: center;
    transform: rotate(-45deg);
  }
  .second--div {
    grid-column-start: 1;
    grid-column-end: span 3;
    grid-row-start: 2;
    grid-row-end: span 1;
    align-self: center;
    transform: rotate(45deg);
  }
  .third {
    grid-column-start: 2;
    grid-column-end: span 2;
    grid-row-start: 3;
    grid-row-end: span 1;
  }
}

/* ------------- */

/* THIS SECTION MANIPULATE THE ANIMATIONS */
.first-enter-active {
  animation: moveFirst ease-in 0.3s forwards;
}
.first-leave-active {
  animation: moveFirst ease-in 0.3s forwards reverse;
}


.second-enter-active {
  animation: moveSecond ease-in 0.3s forwards reverse;
}
.second-leave-active {
  animation: moveSecond ease-in 0.3s forwards;
}


.second--comp-enter-active {
  animation: moveSecond ease-in 0.3s forwards;
}
.second--comp-leave-active {
  animation: moveSecond ease-in 0.3s forwards reverse;
}


.secondDiv-enter-active {
  animation: moveSecondDiv ease-in 0.3s forwards;
}
.secondDiv-leave-active {
  animation: moveSecondDiv ease-in 0.3s forwards reverse;
}


.third-enter-active {
  animation: moveThird ease-in 0.3s forwards;
}
.third-leave-active {
  animation: moveThird ease-in 0.3s forwards reverse;
}

/* --------------------- */

/* HERE ARE MY ANIMATIONS */

@keyframes moveFirst {
  0% {
    transform: translateX(-12px);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 0;
  }
}

@keyframes moveSecond {
  0% {
    transform: rotate(0);
    opacity: 0;
  }
  100% {
    transform: rotate(-45deg);
    opacity: 1;
  }
}

@keyframes moveSecondDiv {
  0% {
    transform: rotate(0);
    opacity: 0;
  }
  100% {
    transform: rotate(45deg);
    opacity: 1;
  }
}

@keyframes moveThird {
  0% {
    transform: translateX(12px);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 0;
  }
}
</style>
