<template>
  <div class="myFavouriteStack">
    <Renderer ref="renderer" resize="true" orbit-ctrl>
      <Camera :position="{ z: 3 }">
        <Scene background="#464d34">
          <PointLight :position="{ y: 50, z: 50 }" />
          <AmbientLight />
          <Sphere ref="sphere" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
            <BasicMaterial>
              <Texture :src="image" />
            </BasicMaterial>
          </Sphere>
        </Scene>
      </Camera>
    </Renderer>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import {
  Sphere,
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
    Sphere,
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
    const sphere = ref(null);

    const image = require("@/static/images/logos/nuxt.png")

    onMounted(() => {
      renderer?.value?.onBeforeRender(() => {
        sphere.value.mesh.rotation.x += 0.01;
      });
    });

    return {
      renderer,
      sphere,
      image
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
