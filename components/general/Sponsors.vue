<template>
  <div v-if="sponsors.length > 0">
    <h2 class="text-center mb-8">Våra sponsorer</h2>
    <div class="w-full max-h-32 flex justify-center align-center my-8">
      <div
        v-for="sponsor in sponsors" :key="sponsor.id"
        class="flex-initial inline-flex items-center mx-4 bg-white rounded-lg p-2"
      >
        <nuxt-image
          :src="`/img/${sponsor}`"
          role="presentational"
          fit="contain"
          class="w-32"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  computed: {
    sponsors() {
      return this.$store.state.sponsors;
    }
  },
}
</script>
