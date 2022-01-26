import { createStore } from "vuex";
import config_drawer from "./modules/config_drawer";


const store = createStore({
  modules: {
    config_drawer,
  },
});

export default store
