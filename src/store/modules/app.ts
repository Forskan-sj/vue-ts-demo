import { Commit } from 'vuex'

export default{
  namespaced: true,
  state: {
    name: 'appname',
    value: 'appvalue'
  },
  mutations: {
    TOGGLE_VALUE: (state: any, device: string) => {
      state.value = device
    },
    TOGGLE_NAME: (state: any, device: string) => {
      state.name = device
    }
  },
  actions: {
    setName( context: { commit: Commit }, newName: string) {
      context.commit('TOGGLE_NAME', newName)
    },
    setVal( context: { commit: Commit }, newVal: string) {
      context.commit('TOGGLE_VALUE', newVal)
    }
  }
};
