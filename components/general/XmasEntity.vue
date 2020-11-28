<template>
  <nuxt-image :src="src" class="xmas-entity" :class="type" v-intersect="isInView" @click="openDrawer(type)" />
</template>

<script>
import { EventBus } from '~/utils/EventBus.js'

export default {
  props: {
    src: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    openDrawer() {
      EventBus.$emit('isOpen', this.type)
    },
    isInView(entry) {
      if (entry && entry.target) entry.target.classList.add('tada-delayed')
    }
  }
}
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */
.xmas-entity {
  @apply w-1/2 cursor-pointer transition duration-200 ease-in-out;
  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
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
  2%,
  4% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  6%,
  10%,
  14%,
  18% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  8%,
  12%,
  16% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  20%,
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
  animation-duration: 3.75s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 5;
  animation-delay: 1.5s;
}
/*! purgecss end ignore */
</style>
