<template>
  <div class="w-full my-4 max-w-md relative">
    <nuxt-image src="/img/julgran-bg-opt.png" />
    <XmasEntity src="/img/julgran-klapp-opt.png" type="julklapp" />
    <XmasEntity src="/img/julgran-matkasse-opt.png" type="matkasse" />
  </div>
</template>

<script>
import XmasEntity from '~/components/general/XmasEntity'

export default {
  components: {
    XmasEntity
  }
}
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */
.julklapp {
  @apply absolute left-0 bottom-0 overflow-visible !important;
  animation-delay: 1.5s;
}
.matkasse {
  @apply absolute right-0 bottom-0 overflow-visible !important;
  animation-delay: 2s;
}
/*! purgecss end ignore */
</style>
