<template>
  <section class="flex justify-between items-start w-full">
    <div class="flex-1 text-left mr-4">
      <p class="text-5xl text-accent">
        {{ julklappar }}
      </p>
      <h4 class="text-black leading-6 text-base xs:text-lg sm:text-2xl">
        insamlade julklappar <wbr /><span class="whitespace-no-wrap">till barn & ungdomar</span>
      </h4>
    </div>
    <div class="flex-1 text-right ml-4">
      <p class="text-5xl text-accent">
        {{ matkassar }}
      </p>
      <h4 class="text-black leading-6 text-base xs:text-lg sm:text-2xl">
        insamlade matkassar<wbr /><span class="whitespace-no-wrap">till familjer</span>
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      julklappar: process.env.counters.julklappar || 100,
      matkassar: process.env.counters.matkassar || 100
    }
  }
}
</script>
