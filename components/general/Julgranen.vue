<template>
  <div class="w-full my-16 max-w-md relative">
    <nuxt-image src="/img/julgran-bg-opt.png" class=""/>
    <nuxt-image src="/img/julgran-klapp-opt.png" class="julklapp pulse" @click="openDrawer('julklapp')"/>
    <nuxt-image src="/img/julgran-matkasse-opt.png" class="matkasse pulse" @click="openDrawer('matkasse')"/>
  </div>
</template>

<script>
import { EventBus } from '~/utils/EventBus.js';

export default {
  methods: {
    openDrawer(category) {
      EventBus.$emit('isOpen', category);
    }
  },
}
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */
.julklapp,
.matkasse {
  @apply w-1/2 cursor-pointer transition duration-200 ease-in-out;
  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
}

.julklapp {
  @apply absolute left-0 bottom-0 overflow-visible !important;
  animation-delay: 4s;
}
.matkasse {
  @apply absolute right-0 bottom-0 overflow-visible !important;
  animation-delay: 8s;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@keyframes pulse {
  from { transform: scale3d(1, 1, 1); }
  50% { transform: scale3d(1.1, 1.1, 1.1); }
  to { transform: scale3d(1, 1, 1); }
}
.pulse {
  animation-name: pulse;
  animation-duration: .75s;
  animation-timing-function: ease-in-out;
}
/*! purgecss end ignore */
</style>