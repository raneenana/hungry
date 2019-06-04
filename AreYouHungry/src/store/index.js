import Vue from 'vue'
import Vuex from 'vuex'
import Logger from 'vuex/dist/logger'
import Find from './module/find'
import index from './module/index'
import shopDetail from './module/shopDetail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Find,
    index,
    shopDetail
  },
  plugins: [Logger()]
})
