<template>
  <div id="appScene"></div>
</template>

<script>
import useWebGL from '@/hooks/use-webgl'
import useGUI from '@/hooks/use-gui'

export default {
  mounted() {
    const { renderer } = useWebGL()
    this.$el.appendChild(renderer.domElement)
  },
  beforeDestroy() {
    const WebGL = useWebGL()
    WebGL.destroy()

    const GUI = useGUI()
    GUI.destroy()
  }
}
</script>

<style lang="scss">
#appScene {
  height: 100% !important;
  left: 0;
  margin-top: 150px;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100% !important;
  z-index: -1;

  canvas {
    height: 100% !important;
    width: 100% !important;
  }
}
</style>
