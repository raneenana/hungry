import { getUseInfo, getCode, login, password } from '@/api/index'
const state = {
  src: ''
}

const mutations = {
  updataState (state, payload) {
    for (var key in payload) {
      state[key] = payload[key]
    }
  }
}

const actions = {
  // 获取用户信息
  async getInfo ({ commit }, payload) {
    let result = await getUseInfo()
    console.log(result, '111')
    // return result.code
  },
  // 验证码
  async getCodes ({ commit }, payload) {
    let result = await getCode()
    return result.code
  },
  // 登录
  async Login ({ commit }, payload) {
    let result = await login(payload)
    console.log(result, '111')
  },
  // 修改密码
  async updataPassword ({ commit }, payload) {
    let result = await password(payload)
    console.log(result, '111')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
