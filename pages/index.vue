<template>
  <div class="main my-16 flex flex-col items-center justify-center">
    <!-- <logo /> -->
    <h2 class="title">Ge en julklapp till ett barn som annars blir utan</h2>
    <p class="subtitle">Intro text</p>
    <div class="text-primary bg-primary-200 grid place-content-center place-items-center my-16" style="height: 600px; width: 100%; max-width: 1000px;">
      "Virtuell Julgran"
    </div>
    <h2 class="title">Vad det betyder</h2>
    <p class="subtitle">Text om testimonial från förra året...</p>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo
  // },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
