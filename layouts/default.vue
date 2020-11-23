<template>
  <div class="container">
    <Intro />
    <nuxt />
  </div>
</template>

<script>
import Intro from '~/components/general/Intro.vue'

export default {
  components: {
    Intro,
  }
}
</script>
