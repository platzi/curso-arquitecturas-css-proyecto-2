// mocking up the projects data
const state = () => ({
  projects: [
    {
      name: "Jnxur Artist website",
      url: "https://www.jhxnur.art/",
      date: "2021",
      image: require("@/static/images/jhnur-min.png"),
      tools: [
        { name: "Vuejs", img: require("@/static/images/logos/vuejs.png") },
        {
          name: "Storyblok",
          img: require("@/static/images/logos/storyblok.png"),
        },
        { name: "Bulma", img: require("@/static/images/logos/bulma.png") },
      ],
      description:
        "Website for an ecuadorian urban artist for express his creations",
      isPrivate: true,
      repo: "https://github.com/CeoNabux/Jhxnur",
    },
    {
      name: "Cepol Academy Webapp",
      url: "https://www.cepolacademy.org/",
      date: "2021",
      image: require("@/static/images/cepolAcademy-min.png"),
      tools: [
        { name: "Nuxt", img: require("@/static/images/logos/nuxt.png") },
        {
          name: "Tailwind",
          img: require("@/static/images/logos/tailwind.png"),
        },
        {
          name: "Firebase",
          img: require("@/static/images/logos/firebase.png"),
        },
      ],
      description: "WebApp for an academy to test their students",
      isPrivate: true,
      repo: "https://github.com/CeoNabux/Cepol",
    },
    {
      name: "Procorex",
      url: "https://procorex.ec/",
      date: "2021",
      image: require("@/static/images/procorex.png"),
      tools: [
        {
          name: "Storyblok",
          img: require("@/static/images/logos/storyblok.png"),
        },

        {
          name: "Tailwind",
          img: require("@/static/images/logos/tailwind.png"),
        },

        { name: "Nuxt", img: require("@/static/images/logos/nuxt.png") },
      ],
      description:
        "Website created to show their tools for industry and send messages of products via Whatsapp",
      isPrivate: true,
      repo: "https://github.com/CeoNabux/procorex",
    },
    {
      name: "Refreezer",
      url: "https://www.refreezerec.com/",
      date: "2020",
      image: require("@/static/images/refreezerCapture-min.png"),
      tools: [
        {
          name: "Storyblok",
          img: require("@/static/images/logos/storyblok.png"),
        },
        { name: "Bulma", img: require("@/static/images/logos/bulma.png") },
        {
          name: "Tailwind",
          img: require("@/static/images/logos/tailwind.png"),
        },
        { name: "Vuejs", img: require("@/static/images/logos/vuejs.png") },
        { name: "Nuxt", img: require("@/static/images/logos/nuxt.png") },
        {
          name: "Firebase",
          img: require("@/static/images/logos/firebase.png"),
        },
        { name: "Nodejs", img: require("@/static/images/logos/nodejs.png") },
        { name: "MongoDB", img: require("@/static/images/logos/mongodb.png") },
      ],
      description:
        "Website for an aircoditioning services and maintainace for industry market",
      isPrivate: true,
      repo: "https://github.com/CeoNabux/Refreezer",
    },
    {
      name: "Plazti Music",
      url: "Not in Production",
      date: "2020",
      image: require("@/static/images/platzi-music.png"),
      tools: [
        { name: "Vuejs", img: require("@/static/images/logos/vuejs.png") },
      ],
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
