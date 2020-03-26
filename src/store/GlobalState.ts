import Vue from 'vue';
import Vuex from 'vuex';
import { VuexModule, Module } from 'vuex-module-decorators';

import axios from 'axios';

Vue.use(Vuex);

const $http = axios.create({
  baseURL: 'http://localhost:4000',
});

@Module({
  name: 'GlobalState',
})
export default class GlobalState extends VuexModule {
  posts: Post[] = [
    {
      title: '123',
      id: 1,
      content: 'haaha',
      createDate: new Date(),
      updateDate: new Date(),
    },
  ];
}
