import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //保存用户名
      name:sessionStorage.getItem('name') || "" ,
      count:sessionStorage.getItem('count') || 0,
      nid:sessionStorage.getItem('nid') || 0,
  },
  mutations: { //修改数据
      changeName(state,uname){
          state.name=uname
        sessionStorage.setItem('name',state.name)
      },
      changeCount(state,counts){
          state.count=counts
          sessionStorage.setItem('count',state.count)
      },
      changeUid(state,uid){
          state.nid=uid
          sessionStorage.setItem('nid',state.nid)
      }
  },
  getters: {  //获取数据
      getName(state){
        return state.name
      },
      getCount(state){
        return state.count
      },
      getUid(state){
        return state.nid
      }
  }
})
