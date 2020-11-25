<template>
  <aside class="aside" :class="{ isOpen }">
    <div class="fixed z-40 float-left m-2 cursor-pointer" @click="closeDrawer">
      <svg width="100" height="100" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M81.9303 46.0148L78.9056 43L50 72L78.9056 101L81.9303 97.9852L56.0298 72L81.9303 46.0148Z" fill="black"/>
      </svg>
    </div>

    <div class="relative mx-auto my-8" style="height: 165px; width: 215px;">
      <transition name="slide-left">
        <nuxt-image v-show="formCategory !== 'matkasse'" src="/img/julklapp-opt.png" width="300" height="260" fit="contain" class="absolute inset-0 z-20 transition ease-in-out duration-200 pointer-events-none" :class="{ 'package-right': formCategory === 'julklapp' }" style="position: absolute; overflow: visible;"/>
      </transition>
      <transition name="slide-right">
      <nuxt-image v-show="formCategory !== 'julklapp'" src="/img/matkasse-opt.png" width="300" height="260" fit="contain" class="absolute inset-0 z-10 transition ease-in-out duration-200 pointer-events-none" :class="{ 'package-left': formCategory === 'matkasse' }" style="position: absolute; overflow: visible;"/>
      </transition>
    </div>

    <h3 class="text-black text-5xl text-center mb-8">Ge en gåva</h3>

    <form name="gava" method="POST" data-netlify="true" @submit.prevent="submitHandler" class="flex flex-wrap mx-auto max-w-xs mb-16">
      <FormulateInput
        v-model="formCategory"
        type="radio"
        :options="{julklapp: 'Julklapp', matkasse: 'Matkasse'}"
        name="kategori"
        label="Vad vill du ge?"
        placeholder="Välj julklapp eller matkasse"
        validation="required"
        class="form-radio-choices"
      />
      <template v-if="formCategory !== ''">
        <FormulateInput v-model="formAmount" type="number" name="belopp" placeholder="Hur mycket vill du ge? (SEK)" help-position="before" help="Hur mycket vill du ge? (SEK)" min="1" max="100000" validation="number|required" class="form-help-inside" />

        <div class="formulate-input" style="margin-top: -1rem;">
          <div class="formulate-input-help formulate-input-help--after">{{ formAmountHelpText }}</div>
        </div>

        <FormulateInput v-model="formMessage" v-if="formCategory === 'matkasse'" type="textarea" name="meddelande" placeholder="Skriv en hälsning till en familj som kommer få en av våra matkassar... (valfritt)" help-position="before" help="Din hälsning (valfritt)" class="form-help-inside"/>

        <div class="formulate-input" style="margin-bottom: 0.5rem;">
          <div class="formulate-input-label formulate-input-label--before">Om du vill ha återkoppling när vi gett gåvorna så får du gärna fylla i din email.</div>
        </div>
        <FormulateInput v-model="formEmail" type="email" name="email" placeholder="Email (valfritt)" help-position="before" help="Email (valfritt)" validation="email" class="form-help-inside"/>

        <FormulateInput v-model="formGDPR" v-if="formEmail !== ''" type="checkbox" name="gdpr" label="Godkännande av hantering av personuppgifter. De uppgifter som du lämnar i detta formulär kommer hanteras konfidentiellt, och vi kommer inte lämna vidare dina uppgifter till någon utanför Hillsongs organisation." validation="accepted" class="form-label-disabled-empty" />

        <FormulateErrors />
        <swish-button :amount="formAmount" :handler="submitHandler">Swisha gåva</swish-button>
      </template>
    </form>

  </aside>
</template>

<script>
import { EventBus } from '~/utils/EventBus.js';
import SwishButton from './SwishButton'

export default {
  components: {
    'swish-button': SwishButton,
  },
  head() {
    return {
      bodyAttrs: {
        class: this.isOpen ? 'overflow-hidden' : '',
      }
    }
  },
  data: () => ({
    isOpen: false,
    formCategory: '',
    formAmount: null,
    formMessage: '',
    formEmail: '',
    formGDPR: false,
  }),
  computed: {
    formAmountHelpText() {
      return this.formCategory === 'matkasse'
        ? 'En matkasse kostar runt 500 kr. Oavsett vad du ger så bidrar det till att vi kan dela ut fler matkassar.'
        : 'En julklapp kostar 50-200 kr. Oavsett vad du ger så bidrar det till att vi kan dela ut fler julklappar.'
    },
  },
  mounted() {
    EventBus.$on('isOpen', (payload) => {
      if (payload === true) this.openDrawer();
      else if (typeof payload === 'string') this.openDrawer(payload);
      else this.closeDrawer();
    })
  },
  methods: {
    submitHandler(evt) {
      console.log('Submitted!', evt);
      // TODO: replace with supported request lib or polyfill fetch
      return fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": 'gava',
          category: this.formCategory,
          amount: this.formAmount,
          message: this.formMessage,
          email: this.formEmail,
          gdpr: this.formGDPR,
        })
      })
    },
    openDrawer(prefillCategory) {
      this.isOpen = true;
      if (prefillCategory === 'matkasse' || prefillCategory === 'julklapp') {
        this.formCategory = prefillCategory;
      }
    },
    closeDrawer() {
      this.isOpen = false;
    },
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    }
  },
}
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */
.aside {
  @apply fixed z-30 top-0 right-0 h-full w-full transform translate-x-full overflow-y-auto overflow-x-hidden transition-transform duration-300 ease-in-out bg-cream;
  &.isOpen {
    @apply translate-x-0;
  }
}
.package-left {
  left: -40px;
  right: 40px;
}
.package-right {
  left: 50px;
  right: -50px;
}
/*! purgecss end ignore */
</style>