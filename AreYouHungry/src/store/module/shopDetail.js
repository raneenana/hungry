import { getShopDetail, getMenuDetail } from '@/api/index'
const state = {
  shopDetail: {},
  menuDetail: {}
}

const mutations = {
  updataState (state, payload) {
    for (var key in payload) {
      state[key] = payload[key]
    }
  }
}

const actions = {
  // 餐馆详情
  async getShopDetail ({ commit }, payload) {
    let data = await getShopDetail(payload)
    commit('updataState', { shopDetail: data })
  },
  // 获取食品列表
  async getMenuDetail ({ commit }, payload) {
    console.log('payload', payload)
    let data = await getMenuDetail(payload)
    console.log('menuDetail', data)
    commit('updataState', { menuDetail: data })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
