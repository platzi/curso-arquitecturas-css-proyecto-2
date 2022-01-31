// mocking up the projects data
const state = () => ({
  projects: [
    {
      name: "Jnxur Artist website",
      url: "https://www.jhxnur.art/",
      image: require("@/static/images/jhnur-min.png"),
      description:
        "Website for an ecuadorian urban artist for express his creations",
      isPrivate: true,
      repo: "https://github.com/CeoNabux/Jhxnur",
    },
    {
      name: "Cepol Academy Webapp",
      url: "https://www.cepolacademy.org/",
      image: require("@/static/images/cepolAcademy-min.png"),
      description: "WebApp for an academy to test their students",
      isPrivate: false,
      repo: "https://github.com/CeoNabux/Cepol",
    },
    {
      name: "Procorex",
      url: "https://procorex.ec/",
      image: require("@/static/images/procorex.png"),
      description:
        "Website created to show their tools for industry and send messages of products via Whatsapp",
      isPrivate: false,
      repo: "https://github.com/CeoNabux/procorex",
    },
    {
      name: "Refreezer",
      url: "https://www.refreezerec.com/",
      image: require("@/static/images/refreezerCapture-min.png"),
      description: "Website for an aircoditioning services and maintainace for industry market",
      isPrivate: true,
      repo: "https://github.com/CeoNabux/Refreezer",
    },
    {
      name: "Plazti Music",
      url: "Not in Production",
      image: require("@/static/images/platzi-music.png"),
      description:
        "Side project for creating a stream platform using spotify catalogue",
      isPrivate: true,
      repo: "https://github.com/CeoNabux/platzi-music",
    },
  ],
  selectedProjectDetail: {},
});

const getters = {
  getProjects(state) {
    return state.projects;
  },
  getSelectedProject(state) {
    return state.selectedProjectDetail;
  },
};

const mutations = {
  SELECTED_PROJECT(state, String) {
    const projectId = state.projects.findIndex(
      (project) => project.name === String
    );
    state.selectedProjectDetail = state.projects[projectId];
  },
};

const actions = {
  getSelectedProject({ commit }, payload) {
    commit("SELECTED_PROJECT", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
