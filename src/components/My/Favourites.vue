<template>
  <div class="myFavouriteStack">
    <Renderer ref="renderer" resize="true" orbit-ctrl>
      <Camera :position="{ z: 3 }">
        <Scene background="#464d34">
          <PointLight :position="{ y: 50, z: 50 }" />
          <AmbientLight />
          <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
            <BasicMaterial>
              <Texture :src="image" />
            </BasicMaterial>
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
  BasicMaterial,
  Renderer,
  Scene,
  AmbientLight,
  Texture
} from "troisjs";
export default {
  components: {
    Box,
    Camera,
    BasicMaterial,
    Renderer,
    Scene,
    PointLight,
    Texture,
    AmbientLight
  },
  setup() {
    const renderer = ref(null);
    const box = ref(null);

    const image = require("@/static/images/stacks/stack1.png")

    onMounted(() => {
      renderer?.value?.onBeforeRender(() => {
        box.value.mesh.rotation.x += 0.01;
      });
    });

    return {
      renderer,
      box,
      image
    };
  },
};
</script>

<style scoped>
.myFavouriteStack {
  width: 75%;
  height: 400px;
}
</style>
