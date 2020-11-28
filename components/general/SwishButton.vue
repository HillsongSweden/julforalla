<template>
  <div v-if="!showQr" class="formulate-input" data-classification="button">
    <FormulateInput
      type="submit"
      name="Swisha gåva"
      :disabled="disabled"
    />
      <!-- @click="triggerSwish" -->
  </div>

  <div v-else class="text-center">
    <h3 class="font-sans mt-4 mb-2">Skanna QR-kod med Swish för att ge{{ amount ? ` ${amount} kr` : '' }}</h3>
    <figure class="bg-white rounded-lg"><img :src="qr" alt="QR code" class="block mx-auto rounded-lg" /></figure>
    <h3 class="font-sans my-2">Eller skriv in swishnumret: {{ swishNumber.label }}</h3>
  </div>
</template>

<script>
export default {
  name: "SwishButton",
  props: {
    disabled: Boolean,
    amount: String,
    /**
     * Optional handler to call before triggering Swish App/QR
     */
    handler: Function
  },
  data() {
    return {
      showQr: false,
      swishNumber: {
        slug: "1230961904",
        label: "123-096 19 04",
      }
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
      return `https://d13tbc26tnbn9m.cloudfront.net/?amount=${this.amount}`;
    },
    href() {
      let payload = {
        version: 1,
        payee: {
          value: this.swishNumber.slug,
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
figure {
  height: 300px;
  width: 300px;
}
img {
  width: 300px;
}
</style>
