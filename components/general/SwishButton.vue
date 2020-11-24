<template>
  <div v-if="!showQr" class="formulate-input" data-classification="button">
    <button
      type="button"
      @click="triggerSwish"
    >
      <slot></slot>
    </button>
  </div>

  <div v-else class="text-center">
    <h3 class="font-sans mt-4 mb-2">Skanna QR-kod med Swish för att ge{{ amount ? ` ${amount} kr` : '' }}</h3>
    <img :src="qr" alt="QR code" class="block mx-auto rounded-lg" />
    <h3 class="font-sans my-2">Eller skriv in swishnumret: {{ swishNumber }}</h3>
  </div>
</template>

<script>
export default {
  name: "SwishButton",
  props: {
    amount: String,

    /**
     * Optional handler to call before triggering Swish App/QR
     */
    handler: Function
  },
  data() {
    return {
      showQr: false,
      swishNumber: 1230961904,
    };
  },
  computed: {
    isMobile() {
      const UA = window.navigator.userAgent.toLowerCase();
      const isAndroid = UA && UA.indexOf("android") > 0;
      const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

      return isAndroid || isIOS;
    },
    qr() {
      return `https://d2s0kcwikgf0tm.cloudfront.net/?amount=${this.amount}`;
    },
    href() {
      let payload = {
        version: 1,
        payee: {
          value: this.swishNumber,
          editable: false
        },
        message: {
          value: "En jul för alla",
          editable: false
        }
      };

      if (this.amount > 0) {
        payload.amount = {
          value: Number(this.amount),
          editable: true
        };
      }

      return encodeURI("swish://payment?data=" + JSON.stringify(payload));
    }
  },
  methods: {
    async triggerSwish(event) {
      if (this.handler) {
        await this.handler(event);
      }

      if (this.isMobile) {
        window.location = this.href;
        return;
      }

      this.showQr = true;
    }
  }
};
</script>

<style scoped>
img {
  width: 300px;
}
</style>
