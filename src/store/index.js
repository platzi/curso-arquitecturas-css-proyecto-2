import Vue from 'vue'
import Vuex from 'vuex'
import config_drawer from "./modules/config_drawer"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    config_drawer
  },
  strict: debug
})

