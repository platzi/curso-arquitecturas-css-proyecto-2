// mocking up the projects data
const state = () => ({
  projects: [
    {
      name: "Jnxur Artist website",
      url: "https://www.jhxnur.art/",
      image: require("@/static/images/jhnur-min.png"),
      isPrivate: false,
      repo: "https://github.com/CeoNabux/Jhxnur",
    },
    {
      name: "Cepol Academy Webapp",
      url: "https://www.cepolacademy.org/",
      image: require("@/static/images/cepolAcademy-min.png"),
      isPrivate: true,
      repo: "https://github.com/CeoNabux/Cepol",
    },
    {
      name: "Procorex",
      url: "https://procorex.ec/",
      image: require("@/static/images/procorex.png"),
      isPrivate: true,
      repo: "https://github.com/CeoNabux/procorex",
    },
    {
      name: "Refreezer",
      url: "https://www.refreezerec.com/",
      image: require("@/static/images/refreezerCapture-min.png"),
      isPrivate: true,
      repo: "https://github.com/CeoNabux/Refreezer",
    },
    {
      name: "Plazti Music",
      url: "Not in Production",
      image: require("@/static/images/platzi-music.png"),
      isPrivate: false,
      repo: "https://github.com/CeoNabux/platzi-music",
    },
  ],
  selectedProjectDetail: {}
});

const getters = {
  getProjects(state) {
    return state.projects;
  },
};


const mutations = {
  SELECTED_PROJECT(state, String) {
    const projectId = state.projects.findIndex((project) => project.name === String )
    state.selectedProjectDetail = state.projects[projectId]
  }
}

const actions = {
  getSelectedProject({ commit }, payload) {
    commit('SELECTED_PROJECT', payload)
  }
}



export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
