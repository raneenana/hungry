import { getCateList, getShopList } from '@/api/index'
const state = {
  shopList: [],
  foodList: []
}

const mutations = {
  updataState (state, payload) {
    for (var key in payload) {
      state[key] = payload[key]
    }
  }
}

const actions = {
  async getcateList ({ commit }, payload) {
    let data = await getCateList()
    commit('updataState', { foodList: data })
  },
  async getShopList ({ commit }) {
    let data = await getShopList()
    commit('updataState', {shopList: data})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
