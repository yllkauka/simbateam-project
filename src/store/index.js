import { createStore } from 'vuex';

import classes from './modules/classes.js';

export default createStore({
  state: {
    windowInnerWidth: null,
    openedCart: false,
  },
  mutations: {
    UPDATE_WINDOW_WIDTH(state, payload) {
      state.windowInnerWidth = payload;
    },
    toggleCart(state, val) {
      state.openedCart = val;
    },
  },
  modules: {
    classes,
  },
});
