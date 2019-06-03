import Vue from 'vue'
import Vuex from 'vuex'
import Logger from 'vuex/dist/logger'

Vue.use(Vuex)

import index from './module/index'

export default new Vuex.Store({
  modules: {
    index
  },
  plugins: [Logger()]
})
