<template>
  <div>
    <Intro />
    <div class="container">
      <nuxt />
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
    GeEnGava,
  }
}
</script>
