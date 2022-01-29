// modal store for projects details

const state = () => ({
  isOpen: true
})

const getters = {
  getModal(state) {
    return state.isOpen
  }
}

const mutations = {
  SHOW_MODAL(state, Boolean) {
    state.isOpen = Boolean
    console.log('hemos hecho el cambio')
  }
}


const actions = {
  activeModal({ commit }, payload) {
    console.log('Estamos enviando el cambio al mutation')
    commit('SHOW_MODAL', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}