import Vue from 'vue';
import Vuex from 'vuex';
import {
  VuexModule,
  Module,
  MutationAction,
  Mutation,
} from 'vuex-module-decorators';
import axios from 'axios';

Vue.use(Vuex);

const $http = axios.create({
  baseURL: 'http://localhost:4000',
});

const JWT_KEY = 'jwt';

@Module({
  name: 'GlobalState',
})
export default class GlobalState extends VuexModule {
  posts: Post[] = [];
  token = '';

  @Mutation
  loadJwtFromLocal() {
    const jwt = localStorage.getItem(JWT_KEY) as string;

    if (jwt) {
      this.token = jwt;
    }
  }

  @MutationAction({ mutate: ['token'] })
  async requestLogin(request: LoginRequest) {
    const res = await $http.post('/auth/email', request);

    localStorage.setItem(JWT_KEY, res.data.token);

    return res.data;
  }

  @MutationAction({ mutate: ['posts'] })
  async fetchPosts() {
    const res = await $http.get('/posts');
    return {
      posts: res.data.documents,
    };
  }
}
