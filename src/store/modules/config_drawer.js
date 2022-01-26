// the local state of the drawer

const state = () => ({
  drawerIsOpen: false,
});

const getters = {
  getDrawer(state) {
    return state.drawerIsOpen;
  },
};

const mutations = {
  // we are changing the drawer state according to the payload
  SHOW_DRAWER(state, Boolean) {
    state.drawerIsOpen = Boolean;
  },
};

const actions = {
  activeDrawer({ commit }, payload) {
    commit("SHOW_DRAWER", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
