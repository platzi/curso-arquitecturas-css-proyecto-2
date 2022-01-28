// mocking up the projects data
const state = () => ({
  projects: [
    {
      name: "Jnxur Artist website",
      url: "https://www.jhxnur.art/",
      image: "~/static/images/jhnur-min.png",
      isPrivate: false,
      repo: "https://github.com/CeoNabux/Jhxnur",
    },
    {
      name: "Cepol Academy Webapp",
      url: "https://www.cepolacademy.org/",
      image: "~/static/images/cepolAcademy-min.png",
      isPrivate: true,
      repo: "https://github.com/CeoNabux/Cepol",
    },
    {
      name: "Procorex",
      url: "https://procorex.ec/",
      image: "~/static/images/procorex.png",
      isPrivate: true,
      repo: "https://github.com/CeoNabux/procorex",
    },
    {
      name: "Refreezer",
      url: "https://www.refreezerec.com/",
      image: "~/static/images/refreezerCapture-min.png",
      isPrivate: true,
      repo: "https://github.com/CeoNabux/Refreezer",
    },
    {
      name: "Plazti Music",
      url: "Not in Production",
      image: "~/static/images/platzi-music.png",
      isPrivate: false,
      repo: "https://github.com/CeoNabux/platzi-music",
    },
  ],
});

const getters = {
  getProjects(state) {
    return state.projects;
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
