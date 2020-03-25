import Vue from 'vue';
import Vuex from 'vuex';

import GlobalState from './GlobalState';

Vue.use(Vuex);

export default new Vuex.Store<GlobalState>({});
