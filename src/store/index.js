import { createStore } from "vuex";
import config_drawer from "./modules/config_drawer";
import projects from "./modules/projects"
import modal from "./modules/modal"

const store = createStore({
  modules: {
    config_drawer,
    projects,
    modal
  },
});

export default store
