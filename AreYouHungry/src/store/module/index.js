import {getCateList,getShopList,getMenuList} from "@/api/index"
const state = {
  shopList: [],
  foodList:[],
  tabData:[]
}

const mutations = {
  updataState(state, payload) {
    for (var key in payload) {
      state[key] = payload[key]
    }
  }
}

const actions = {
  async getcateList({ commit }, payload){
    let data = await getCateList()
    commit('updataState', { foodList: data })
  },
  async getShopList ({ commit }) {
    let data = await getShopList()
    commit('updataState',{shopList:data})
  },
  async getmenuList ({ commit },payload) {
    let data = await getMenuList(payload)
    console.log(data,'data.......')
    commit('updataState',{tabData:data})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}