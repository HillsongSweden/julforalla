<template>
  <header class="flex fixed top-0 inset-x-0 p-3 bg-cream">
    <h1 class="flex-1 mr-2 text-2xl">
      En Jul För Alla
    </h1>
    <p class="subtitle">Ge en julklapp till ett barn som annars blir utan</p>
    <button class="icon" type="button" @click="openDrawer">Ge julklapp</button>
  </header>
</template>

<script>
import { EventBus } from '~/utils/EventBus.js';

export default {
  name: 'Header',
  methods: {
    openDrawer(evt) {
      EventBus.$emit('isOpen', true);
    },
  },
}
</script>
