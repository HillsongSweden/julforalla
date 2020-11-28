<template>
  <header class="main flex flex-col justify-center">
    <div
      class="sticky-header fixed top-0 left-0 w-full py-5 px-10 bg-cream z-20 shadow-sm"
      :class="{ active: isActive }"
    >
      <div class="max-w-5xl mx-auto flex justify-between">
        <nuxt-image class="julforalla" src="/ogp.png" alt="En jul för alla" />

        <button class="bg-accent text-white rounded p-3 px-5" @click="openDrawer">Ge en gåva</button>
      </div>
    </div>

    <nuxt-image src="/ogp.png" alt="En jul för alla" class="julforalla" />

    <article class="mx-auto">
      <p>
        Julen är en tid som ska vara full av ljus och glädje, men så är det tyvärr inte för alla. Många familjer runt om
        i Sverige kämpar i vardagen med att få ihop nog för att betala räkningar. Då kan julen lätt kännas som en extra
        påfrestning. Där har den senaste säsongen med covid-19 skapat ännu större utmaningar för en del. Därför är vi
        glada för att vi tillsammans kan få ge av det vi har för att sprida ljus och hopp till människor.
      </p>
    </article>

    <div class="mt-6 text-center text-lg">
      <button class="bg-accent text-white rounded p-5 px-10" @click="openDrawer" ref="callToAction">Ge en gåva</button>
    </div>
  </header>
</template>

<script>
import { EventBus } from '~/utils/EventBus.js'

export default {
  name: 'Header',
  mounted() {
    const cta = this.$refs.callToAction

    window.addEventListener('scroll', () => {
      const ctaLeftViewPort = window.scrollY > cta.offsetTop + cta.clientHeight

      if (ctaLeftViewPort && !this.isActive) {
        this.isActive = true
      } else if (!ctaLeftViewPort && this.isActive) {
        this.isActive = false
      }
    })
  },
  methods: {
    openDrawer(evt) {
      EventBus.$emit('isOpen', true)
    }
  },
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */
.sticky-header .julforalla {
  width: 180px;
}

.sticky-header {
  transform: translateY(-100%);
  transition: 150ms ease-out transform;
}

.sticky-header.active {
  transform: translateY(0%);
}

.julforalla >>> img {
  object-fit: contain !important;
}
/*! purgecss end ignore */
</style>
