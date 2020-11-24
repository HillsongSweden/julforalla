import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import { sv } from '@braid/vue-formulate-i18n'

Vue.use(VueFormulate, {
  plugins: [sv],
  locale: 'sv'
})
