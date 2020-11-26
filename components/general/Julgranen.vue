<template>
  <div class="w-full my-16 max-w-md relative">
    <nuxt-image src="/img/julgran-bg-opt.png" class=""/>
    <nuxt-image v-intersect="isInView" src="/img/julgran-klapp-opt.png" class="julklapp" @click="openDrawer('julklapp')"/>
    <nuxt-image v-intersect="isInView" src="/img/julgran-matkasse-opt.png" class="matkasse" @click="openDrawer('matkasse')"/>
  </div>
</template>

<script>
import { EventBus } from '~/utils/EventBus.js';

export default {
  methods: {
    openDrawer(category) {
      EventBus.$emit('isOpen', category);
    },
    isInView(entry) {
      if (entry && entry.target) entry.target.classList.add('tada-delayed');
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
  animation-delay: 1.5s;
}
.matkasse {
  @apply absolute right-0 bottom-0 overflow-visible !important;
  animation-delay: 2s;
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
/* @keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }
  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
} */
@keyframes tadaDelayed {
  from {
    transform: scale3d(1, 1, 1);
  }
  1%,
  2% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  3%,
  5%,
  7%,
  9% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  4%,
  6%,
  8% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  10%,
  to {
    transform: scale3d(1, 1, 1);
  }
}
/* .tada {
  animation-name: tada;
  animation-duration: .75s;
  animation-timing-function: ease-in-out;
} */
.tada-delayed {
  animation-name: tadaDelayed;
  animation-duration: 7.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 5;
}
/*! purgecss end ignore */
</style>