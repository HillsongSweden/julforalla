<template>
  <section class="flex justify-between items-start w-full gap-x-4">
    <div class="flex-1 text-center">
      <p class="text-5xl text-accent">
        {{ julklapparBarn }}
      </p>
      <h4 class="text-black leading-6 text-base xs:text-lg sm:text-2xl">
        insamlade julklappar <wbr />till <span class="whitespace-no-wrap">barn & ungdomar</span>
      </h4>
    </div>
    <div class="flex-1 text-center">
      <p class="text-5xl text-accent">
        {{ matkassar }}
      </p>
      <h4 class="text-black leading-6 text-base xs:text-lg sm:text-2xl">
        insamlade matkassar<wbr /> <span class="whitespace-no-wrap">till familjer</span>
      </h4>
    </div>
    <div class="flex-1 text-center">
      <p class="text-5xl text-accent">
        {{ julklapparHemlos }}
      </p>
      <h4 class="text-black leading-6 text-base xs:text-lg sm:text-2xl">
        insamlade julklappar <wbr /><span class="whitespace-no-wrap">till hemlösa</span>
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      julklapparBarn: process.env.counters.julklapparBarn || 0,
      julklapparHemlos: process.env.counters.julklapparHemlos || 0,
      matkassar: process.env.counters.matkassar || 0
    }
  }
}
</script>
