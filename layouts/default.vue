<template>
  <div>
    <div class="flex">
      <div class="bg-mistletoe bg-contain bg-no-repeat flex-1"></div>
      <div class="flex-1 flex items-center justify-center logo-container">
        <nuxt-image class="hillsong-logo" src="/img/hillsong-logo.png" alt="Hillsong Logotype" />
      </div>
      <div class="bg-mistletoe bg-contain bg-no-repeat flex-1"></div>
    </div>
    <div class="container">
      <Intro />
      <Nuxt />
      <GeEnGava />
    </div>
  </div>
</template>

<script>
import Intro from '~/components/general/Intro.vue'
import GeEnGava from '~/components/general/GeEnGava.vue'

export default {
  components: {
    Intro,
    GeEnGava
  }
}
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */
.bg-mistletoe {
  height: 150px;
  background-position-x: -10px;
}

.bg-mistletoe:nth-child(3) {
  transform: rotateY(180deg);
}

.logo-container .hillsong-logo {
  width: 60px;
}
/*! purgecss end ignore */
</style>
