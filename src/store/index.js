/*
 * @Author: your name
 * @Date: 2021-01-03 19:37:33
 * @LastEditTime: 2021-02-21 21:38:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /data-visualize/src/store/index.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: 'chalk'
  },
  mutations: {
    changeTheme (state) {
      if (state.theme === 'chalk') {
        state.theme = 'vintage'
      } else {
        state.theme = 'chalk'
      }
    }
  },
  actions: {},
  modules: {}
});
