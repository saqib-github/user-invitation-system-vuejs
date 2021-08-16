import Vue from "vue";
import Vuex from "vuex";

// ..........
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  // application main state
  state() {
    return {
      token: null,
    };
  },
  getters: getters,
});
