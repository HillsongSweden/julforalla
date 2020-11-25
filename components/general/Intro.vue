<template>
  <header>
    <div
      class="sticky-header fixed w-full p-5 flex justify-between items-center bg-cream z-0"
      :class="{ active: isActive }"
    >
      <nuxt-image class="julforalla max-w-xs" src="/ogp.png" alt="En jul för alla" width="200" />
      <div>
        <button class="bg-accent text-white rounded p-3 px-5" @click="openDrawer" ref="callToAction">Ge en gåva</button>
      </div>
    </div>
    <div class="flex">
      <div class="bg-mistletoe bg-contain bg-no-repeat flex-1"></div>
      <div class="flex-1 flex items-center justify-center logo-container">
        <nuxt-image class="hillsong-logo" src="/img/hillsong-logo.png" alt="Hillsong Logotype" />
      </div>
      <div class="bg-mistletoe bg-contain bg-no-repeat flex-1"></div>
    </div>

    <article class="max-w-xl mx-auto px-6 text-lg leading-6">
      <nuxt-image src="/ogp.png" alt="En jul för alla" />
      <p>
        Julen är en tid som ska vara full av ljus och glädje, men så är det tyvärr inte för alla.
        Många familjer runt om i Sverige kämpar i vardagen med att få ihop till räkningar och annat och julen kan då bli en extra påfrestning. Där har den senaste säsongen med Covid-19 skapat en ännu större utmaning för en del. Därför är vi glada för att vi tillsammans kan få ge av det vi har för att sprida ljus och hopp till människor i jul.
      </p>
    </article>

    <div class="mt-6 text-center text-lg">
      <button class="bg-accent text-white rounded p-5 px-10" @click="openDrawer" ref="callToAction">Ge en gåva</button>
    </div>
    <div class="flex justify-center mt-5">
      <nuxt-image src="/img/single-branch.png" alt="Single mistle branch" role="presentational" width="96" class="w-24" />
    </div>
  </header>
</template>

<script>
import { EventBus } from '~/utils/EventBus.js'

export default {
  name: 'Header',
  mounted () {
    const cta = this.$refs.callToAction

    window.addEventListener('scroll', () => {
      const ctaLeftViewPort = window.scrollY > (cta.offsetTop + cta.clientHeight)

      if (ctaLeftViewPort && !this.isActive) {
        this.isActive = true
      } else if (!ctaLeftViewPort && this.isActive) {
        this.isActive = false
      }
    })
  },
  methods: {
    openDrawer (evt) {
      EventBus.$emit('isOpen', true)
    }
  },
  data () {
    return {
      isActive: false
    }
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

.sticky-header {
  transform: translateY(-100%);
  transition: 150ms ease-out transform;
}

.sticky-header.active {
  transform: translateY(0%);
}
/*! purgecss end ignore */
</style>
