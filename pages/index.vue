<template>
  <div class="main flex flex-col items-center justify-center">
    <Counters />
    <Julgranen />
    <h2 class="title">Vad det betyder</h2>
    <p class="subtitle">Text om testimonial från förra året...</p>
  </div>
</template>

<script>
import Counters from '~/components/general/Counters';
import Julgranen from '~/components/general/Julgranen';

export default {
  components: {
    Counters,
    Julgranen,
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
