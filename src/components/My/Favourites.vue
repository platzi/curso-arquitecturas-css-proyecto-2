<template>
  <div class="myFavouriteStack">
    <Renderer ref="renderer" resize="true" orbit-ctrl>
      <Camera :position="{ z: 3 }">
        <Scene background="#464d34">
          <PointLight :position="{ y: 50, z: 50 }" />
          <AmbientLight />
          <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
            <LambertMaterial />
          </Box>
        </Scene>
      </Camera>
    </Renderer>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import {
  Box,
  Camera,
  PointLight,
  LambertMaterial,
  Renderer,
  Scene,
  AmbientLight
} from "troisjs";
export default {
  components: {
    Box,
    Camera,
    LambertMaterial,
    Renderer,
    Scene,
    PointLight,
    AmbientLight
  },
  setup() {
    const renderer = ref(null);
    const box = ref(null);

    onMounted(() => {
      renderer?.value?.onBeforeRender(() => {
        box.value.mesh.rotation.x += 0.01;
      });
    });

    return {
      renderer,
      box,
    };
  },
};
</script>

<style scoped>
.myFavouriteStack {
  width: 100%;
  height: 100vh;
}
</style>
