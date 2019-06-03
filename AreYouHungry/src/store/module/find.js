import { find } from '../../api/index'
const state = {
  historyList: [],
  findList: {}
}
const mutations = {
  CHANGE_LIST: (state, payload) => {
    if (state.historyList.indexOf(payload.tit) === -1) {
      state.historyList.push(payload.tit)
    }
    state.findList = payload.data
  }
}
const actions = {
  async getHistory ({ commit }, payload) {
    // console.log('...payload', payload)
    let data = await find(payload)
    // console.log('data...', data)
    commit('CHANGE_LIST', {tit: payload, data: data})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
