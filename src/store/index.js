import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";
import {getToken, removeToken, setToken} from "@/util/common";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:getToken(),
    username:"",
    email:"",
    id:"",
    mobile:"",
    status:"",
    team:"",
    type:"",
    createdTime:"",
  },
  getters: {
    isLogin:state => {
      return !! state.token
    },
    hasUserinfo:state => {
      return !!state.username
    }
  },
  mutations: {
    setToken:(state,token) => {
      state.token = token
      setToken(token)
    },
    setUserinfo:(state,data) => {
      state.username = data.username
      state.email = data.email
      state.id = data.id
      state.mobile = data.mobile
      state.status = data.status
      state.team = data.team
      state.type = data.type
      state.createdTime = data.createdTime
    },
    removeUserinfo:(state) => {
      state.token = ''
      state.username = ''
      state.email = ''
      state.id = ''
      state.mobile = ''
      state.status = ''
      state.team = ''
      state.type = ''
      state.createdTime = ''
      removeToken()
    },
  },
  actions: {
    login({commit},data) {
      // 这儿添加请求接口
      // 然后接口成功后执行这些操作
      commit('setToken',data.username) // 没有token 先存个用户名
      commit('setUserinfo',data)
      router.push('/')
    },
    logout({commit}){
      // 这儿添加退出接口（可选）
      // 然后接口成功后执行这些操作
      commit('removeUserinfo')
      router.replace('/login')
    }
  },
  modules: {
  }
})
