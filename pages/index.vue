<template>
  <div class="main flex flex-col items-center justify-center overflow-hidden">
    <Divider />

    <Counters />
    <Julgranen />
    <Content />

    <!-- <Sponsors /> -->

    <Divider />
  </div>
</template>

<script>
import Counters from '~/components/general/Counters'
import Julgranen from '~/components/general/Julgranen'
import Content from '~/components/general/Content'
import Divider from '~/components/general/Divider'
import Sponsors from '~/components/general/Sponsors'

export default {
  components: {
    Counters,
    Julgranen,
    Content,
    Divider,
    Sponsors
  },
  head() {
    return {}
  }
}
</script>
