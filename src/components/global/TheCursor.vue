<template>
  <div class="TheCursor" :style="getCursorPosition"></div>
</template>

<script>
export default {
  props: {
    xCursorPosition: {
      type: Number,
      required: true,
    },
    yCursorPosition: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getCursorPosition() {
      return `transform: translateY(${this.yCursorPosition}px) translateX(${this.xCursorPosition}px) translateZ(0px) translate3d(0, 0, 0)`;
    },
  },
};
</script>

<style scoped>
/* .TheCursor {
  user-select: none;
  background: red;
  width: 42px;
  height: 42px;
  position: fixed;
  will-change: transform;
  pointer-events: none;
  backface-visibility: hidden;
} */
</style>
