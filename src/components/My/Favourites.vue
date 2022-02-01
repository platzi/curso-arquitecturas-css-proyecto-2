<template>
  <div>
    <Renderer>
      <Camera :position="{ z: 10}">
        <Scene>
          <PointLight :position="{ y: 50, z: 50}">
            <Box>
              <LambertMaterial />
            </Box>
          </PointLight>
        </Scene>
      </Camera>
    </Renderer>
  </div>
</template>

<script>
import { Box, Camera, PointLight,LambertMaterial, Renderer, Scene } from 'troisjs'
export default {
  components: {
    Box,
    Camera,
    LambertMaterial,
    Renderer,
    Scene,
    PointLight
  }
}
</script>