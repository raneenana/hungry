import Vue from 'vue'
import Vuex from 'vuex'
import Longger from 'vuex/dist/logger'
import Index from './module/index'
import Find from './module/find'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Index,
    Find
  },
  plugins: [Longger()]
})
