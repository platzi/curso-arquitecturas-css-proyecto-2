// the local state of the drawer

const state = () => ({
  isOpen: false,
});

const getters = {
  getDrawer(state) {
    return state.isOpen;
  },
};

const mutations = {
  // we are changing the drawer state according to the payload
  SHOW_DRAWER(state, Boolean) {
    state.isOpen = Boolean;
    console.log(Boolean);
  },
};

const actions = {
  activeDrawer({ commit }, payload) {
    console.log("estamo sne actions " + payload);
    commit("SHOW_DRAWER", payload);
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}