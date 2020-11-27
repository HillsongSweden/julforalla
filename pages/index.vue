<template>
  <div class="main flex flex-col items-center justify-center">
    <Counters />
    <Julgranen />
    <Content />
  </div>
</template>

<script>
import Counters from '~/components/general/Counters'
import Julgranen from '~/components/general/Julgranen'
import Content from '~/components/general/Content'

export default {
  components: {
    Counters,
    Julgranen,
    Content
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
