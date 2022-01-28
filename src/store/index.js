import { createStore } from "vuex";
import config_drawer from "./modules/config_drawer";
import projects from "./modules/projects"


const store = createStore({
  modules: {
    config_drawer,
    projects
  },
});

export default store
