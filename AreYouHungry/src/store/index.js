import Vue from 'vue'
import Vuex from 'vuex'
import Logger from 'vuex/dist/logger'

Vue.use(Vuex)
import Find from './module/find'
import index from './module/index'

export default new Vuex.Store({
  modules: {
    Find,
    index
  },
  plugins: [Logger()]
})
