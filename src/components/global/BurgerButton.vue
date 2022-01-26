<template>
  <button class="button" @click="$emit('click', $event)">
    <div class="burgerButton">
      <div class="first" />
      <div class="second" />
      <div class="second--div" />
      <div class="third" />
    </div>
  </button>
</template>

<script>
export default {
  name: "BurgerButton",
};
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
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
    animation-name: disappear, moveLeft;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    animation-duration: 300ms;
  }
  .second {
    grid-column-start: 1;
    grid-column-end: span 3;
    grid-row-start: 2;
    grid-row-end: span 1;
    align-self: center;
    animation-name: rotateLeft;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    animation-duration: 300ms;
  }
  .second--div {
    grid-column-start: 1;
    grid-column-end: span 3;
    grid-row-start: 2;
    grid-row-end: span 1;
    align-self: center;
    animation-name: disappear, rotateRight;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    animation-direction: reverse;
    animation-timing-function: ease-in;
    animation-duration: 300ms;
  }
  .third {
    grid-column-start: 2;
    grid-column-end: span 2;
    grid-row-start: 3;
    grid-row-end: span 1;
    animation-name: disappear, moveRight;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    animation-duration: 300ms;
  }
}
@keyframes disappear {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(12px);
  }
}
@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-12px);
  }
}
@keyframes rotateLeft {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-45deg);
  }
}
@keyframes rotateRight {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
