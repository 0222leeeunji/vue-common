import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import mallSettingSt from "./module/mallSettingSt";
import categorySt from "./module/categorySt";
import basePolicySt from "./module/basePolicySt";

export default () => {
  return new Vuex.Store({
    modules: {
      mallSettingSt:mallSettingSt,
      categorySt:categorySt,
      basePolicySt:basePolicySt,
    },

    plugins: [createPersistedState()],

    strict: process.env.NODE_ENV !== 'prod'
  });
}
