import Vue from 'vue';
import Vuex from 'vuex';
import { VuexModule, Module, MutationAction } from 'vuex-module-decorators';

import axios from 'axios';

Vue.use(Vuex);

const $http = axios.create({
  baseURL: 'http://localhost:4000',
});

@Module({
  name: 'GlobalState',
})
export default class GlobalState extends VuexModule {
  posts: Post[] = [];

  @MutationAction({ mutate: ['posts'] })
  async fetchPosts() {
    const res = await $http.get('/posts');
    return {
      posts: res.data.documents,
    };
  }
}
