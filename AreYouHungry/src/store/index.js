import Vue from 'vue'
import Vuex from 'vuex'
import Longger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{

  },
  plugins:[Longger()]
})
