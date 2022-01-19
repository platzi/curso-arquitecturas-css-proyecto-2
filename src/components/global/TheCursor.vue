<template>
  <div class="TheCursor" :style="{getCursorPositionX, getCursorPositionY}" ></div>
</template>

<script>
export default {
  props: {
    xCursorPosition: {
      type: Number,
      required: true
    },
    yCursorPosition: {
      type: Number,
      required: true
    }
  },
  computed: {
    getCursorPositionX() {
      return `transform: translateX(${this.xCursorPosition}px)`
    },
    getCursorPositionY() {
      return `transform: translateY(${this.yCursorPosition}px)`
    },
  }
};
</script>

<style scoped>
.TheCursor {
  user-select: none;
  background: red;
  width: 50px;
  height: 50px;
  position: fixed;
}
</style>
