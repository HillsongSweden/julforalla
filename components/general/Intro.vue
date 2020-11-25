<template>
  <header>
    <div
      class="sticky-header fixed w-full p-5 flex justify-between items-center bg-cream z-0"
      :class="{ active: isActive }"
    >
      <img class="julforalla max-width-" src="/ogp.png" alt="En jul för alla" width="200" />
      <div>
        <button class="bg-accent text-white rounded p-3 px-5" @click="openDrawer" ref="callToAction">Ge en gåva</button>
      </div>
    </div>
    <div class="flex -m-4">
      <div class="bg-mistletoe bg-contain bg-no-repeat flex-1"></div>
      <div class="flex-1 flex items-center justify-center logo-container">
        <img class="hillsong-logo" src="/img/hillsong-logo.png" alt="Hillsong Logotype" />
      </div>
      <div class="bg-mistletoe bg-contain bg-no-repeat flex-1"></div>
    </div>
    <img src="/ogp.png" alt="En jul för alla" />

    <article class="px-6 text-lg leading-6">
      <p>
        Vår dröm är att alla ska få en minnesvärd jul. Runt om i Sverige finns det många familjer som inte får ihop det,
        och när man vanligtvis inte har råd att betala sina räkningar blir julen och helgerna en utmanande påfrestning.
      </p>
      <p>Tillsammans kan vi göra en skillnad och sprida både hopp och glädje till fler.</p>
    </article>

    <div class="mt-6 text-center text-lg">
      <button class="bg-accent text-white rounded p-5 px-10" @click="openDrawer" ref="callToAction">Ge en gåva</button>
    </div>
    <div class="flex justify-center mt-5">
      <img src="/img/single-branch.png" alt="Single mistle branch" role="presentational" width="75" />
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
</style>
