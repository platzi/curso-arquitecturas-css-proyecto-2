<template>
  <svg
    class="svg"
    style="width: 100%; height: 100%; stroke-width: 2.5px"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path :d="myIcon" />
  </svg>
</template>

<script>
import { computed } from "vue";
import Icons from "../../helpers/Icons";
export default {
  props: {
    name: String,
  },
  setup(props) {
    const myIcon = computed(() => {
      return Icons[props.name];
    });

    return {
      myIcon,
    };
  },
};
</script>

<style scoped>
.svg {
  user-select: none;
}
</style>
