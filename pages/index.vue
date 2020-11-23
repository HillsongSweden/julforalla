<template>
  <div class="main my-16 flex flex-col items-center justify-center">
    <div class="text-primary bg-primary-200 grid place-content-center place-items-center my-16" style="height: 400px; width: 100%; max-width: 300px;">
      "Virtuell Julgran"
    </div>
    <h2 class="title">Vad det betyder</h2>
    <p class="subtitle">Text om testimonial från förra året...</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
