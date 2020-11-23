<template>
  <div class="container">
    <Intro />
    <nuxt />
    <button @click="openDrawer">Temp open drawer</button>
    <GeEnGava />
  </div>
</template>

<script>
import { EventBus } from '~/utils/EventBus.js';
import Intro from '~/components/general/Intro.vue'
import GeEnGava from '~/components/general/GeEnGava.vue'

export default {
  components: {
    Intro,
    GeEnGava,
  },
  methods: {
    openDrawer(evt) {
      EventBus.$emit('isOpen', true);
    }
  },
}
</script>
