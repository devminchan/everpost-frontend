import Vue from 'vue';
import Vuex from 'vuex';
import { VuexModule, MutationAction } from 'vuex-module-decorators';

import axios from 'axios';

Vue.use(Vuex);

const $http = axios.create({
  baseURL: 'http://localhost:4000',
});

export default class GlobalState extends VuexModule {
  posts: Post[] = [];

  @MutationAction({ mutate: ['posts'] })
  async getPosts() {
    const res = await $http.get('/posts');
    return res.data;
  }
}
