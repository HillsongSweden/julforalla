<template>
  <div class="main my-16 flex flex-col items-center justify-center">
    <Julgranen />
    <h2 class="title">Vad det betyder</h2>
    <p class="subtitle">Text om testimonial från förra året...</p>
  </div>
</template>

<script>
import Julgranen from '~/components/general/Julgranen';

export default {
  components: {
    Julgranen,
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
