<template>
  <div class="pageIndex">
    <block-title />
    <div class="pageIndex__image">
      <webgl-image :src="'/jan31.webp'" :aspectRatio="1200 / 1664" />
    </div>
  </div>
</template>

<script>
import useWebGL from '@/hooks/use-webgl'
import scroll from '@/mixins/scroll'
import gsap from '@/libs/gsap-bonus'

export default {
  mixins: [scroll],

  watch: {
    scrollVelocity() {
      const { composer } = useWebGL()
      // composer.barrelEffect.uniforms.get('intensity').value = -0.1
      const instensity = -Math.min(
        0.1,
        Math.abs(this.scrollVelocity.y) * 0.0001
      )

      this.tween?.kill()
      this.tween = gsap.to(composer.barrelEffect.uniforms.get('intensity'), {
        duration: 2,
        ease: 'expo.out',
        value: instensity
      })
    }
  }
}
</script>

<style lang="scss">
.pageIndex {
  &__image {
    margin: 0 auto;
    max-width: 1200px;
    // padding-bottom: 200vh;
    // padding-top: 200vh;
    width: 90vw;
  }
}
</style>
