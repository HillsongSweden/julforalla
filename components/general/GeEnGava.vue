<template>
  <transition name="slide-left-full">
    <aside class="fixed mx-auto inset-0 bg-cream" v-show="isOpen">
      <div class="float-left m-2" @click="closeDrawer">
        <svg width="100" height="100" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M81.9303 46.0148L78.9056 43L50 72L78.9056 101L81.9303 97.9852L56.0298 72L81.9303 46.0148Z" fill="black"/>
        </svg>
      </div>
      <div class="bg-primary-600 mx-auto my-8" style="height: 140px; width: 100px;"></div>
      <h3 class="text-black text-5xl text-center mb-8">Ge en gåva</h3>
      <form name="gava" method="POST" data-netlify="true" @submit="showAlert" class="flex flex-wrap">
        <FormulateInput
          v-model="formCategory"
          type="select"
          :options="{matkasse: 'Matkasse', julklapp: 'Julklapp'}"
          name="category"
          placeholder="Välj matkasse eller julklapp"
          validation="in:matkasse,julklapp"
        />
        <FormulateInput v-model="formMessage" type="textarea" name="message" placeholder="Skriv en hälsning till en familj... (valfritt)" />
        <FormulateInput v-model="formEmail" type="email"  name="email" placeholder="Email (valfritt)" label="Om du vill ha återkoppling när vi gett gåvorna så får du gärna fylla i din email" validation="email" />
        <FormulateInput
          type="submit"
          name="Swisha gåva"
        />
      </form>
    </aside>
  </transition>
</template>

<script>
import { EventBus } from '~/utils/EventBus.js';

export default {
  data: () => ({
    isOpen: false,
    formCategory: '',
    formAmount: null,
    formMessage: '',
    formEmail: '',
    formGDPR: false,
  }),
  mounted() {
    EventBus.$on('isOpen', (payload) => {
      if (payload === true) this.openDrawer();
      else this.closeDrawer();
    })
  },
  methods: {
    showAlert(evt) {
      window.alert(evt);
    },
    openDrawer(evt) {
      this.isOpen = true;
      // EventBus.$emit('isOpen', this.isOpen);
    },
    closeDrawer(evt) {
      this.isOpen = false;
      // EventBus.$emit('isOpen', this.isOpen);
    }
  },
}
</script>
