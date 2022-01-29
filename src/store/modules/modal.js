// modal store for projects details

const state = () => ({
  isOpen: false
})

const getters = {
  getModal(state) {
    return state.isOpen
  }
}

const mutations = {
  SHOW_MODAL(state, Boolean) {
    state.isOpen = Boolean
  }
}


const actions = {
  activeModal({ commit }, payload) {
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