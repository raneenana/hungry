const state = {
  historyList: []
}
const mutations = {
  CHANGE_LIST: (state, payload) => {
    if (state.historyList.indexOf(payload) === -1) {
      state.historyList.push(payload)
    }
  }
}
const actions = {
  getHistory ({ commit }, payload) {
    // console.log('...payload', payload)
    commit('CHANGE_LIST', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
