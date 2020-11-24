<template>
  <header class="flex fixed top-0 inset-x-0 p-3 bg-cream">
    <h1 class="flex-1 mr-2 text-2xl">
      En Jul För Alla
    </h1>
    <p class="subtitle">Ge en julklapp till ett barn som annars blir utan</p>
    <button class="icon">Ge julklapp</button>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply text-accent-100 bg-accent bg-opacity-20;
  &:hover {
    @apply text-white bg-accent-600;
  }
}
.light-mode {
  & .nuxt-link-exact-active {
    @apply text-accent-600;
    &:hover {
      @apply text-white;
    }
  }
}
</style>
