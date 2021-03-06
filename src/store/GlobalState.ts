import Vue from 'vue';
import Vuex from 'vuex';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import axios from 'axios';

Vue.use(Vuex);

const $http = axios.create({
  baseURL: 'https://everpost.herokuapp.com',
});

const JWT_KEY = 'jwt';

@Module({
  name: 'GlobalState',
})
export default class GlobalState extends VuexModule {
  posts: Post[] = [];
  token = '';
  isHome = true;
  isLogined = false;
  user: User | null = null;
  menuList: AppBarMenu[] = [];

  get getPostById() {
    return (postId: number): Post => {
      const result = this.posts.find(item => {
        return item.id === postId;
      });

      if (result) {
        return result;
      } else {
        throw new Error('post not found');
      }
    };
  }

  @Mutation
  loadJwtFromLocal() {
    const jwt = localStorage.getItem(JWT_KEY) as string;

    if (jwt) {
      this.token = jwt;
    }
  }

  @Action
  async requestLogin(request: LoginRequest) {
    const res = await $http.post('/users/auth', request);

    localStorage.setItem(JWT_KEY, res.data.token);
  }

  @Action
  async requestRegister(request: SignUpRequest) {
    await $http.post('/users', request);
  }

  @Action
  async fetchUserData() {
    try {
      const res = await $http.get('/users/me', {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      });

      this.setUser(res.data);
      this.setIsLogined(true);
    } catch (e) {
      console.error('An error occured while app fetch user data');

      this.setUser(null);
      this.setIsLogined(false);
    }
  }

  @Mutation
  setUser(user: User | null) {
    this.user = user;
  }

  @Mutation
  setIsLogined(isLogined: boolean) {
    this.isLogined = isLogined;
  }

  @Action
  async fetchPosts() {
    const res = await $http.get('/posts', {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });

    this.setPosts(res.data.documents);
  }

  @Mutation
  setPosts(posts: Post[]) {
    this.posts = posts;
  }

  @Action
  async createPost(data: CreatePostRequest) {
    try {
      const createdPost: Post = await $http.post('/posts', data, {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      });

      // push new post
      this.posts.push(createdPost);

      alert('새 포스트를 생성했습니다!');
    } catch (e) {
      console.error(e);
      alert('포스트 생성에 실패했습니다');
    }
  }

  @Action
  async updatePost(data: UpdatePostRequest) {
    try {
      const result: Post = await $http.patch(`/posts/${data.id}`, data, {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      });

      // update target index data
      const idx = this.posts.findIndex(item => item.id === data.id);
      this.posts[idx] = result;

      alert('포스트 내용을 수정하였습니다');
    } catch (e) {
      console.error(e);
      alert('포스트 내용 수정을 실패했습니다');
    }
  }

  @Action
  async deletePost(id: number) {
    try {
      await $http.delete(`/posts/${id}`, {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      });

      // delete target index data
      const idx = this.posts.findIndex(item => item.id === id);
      this.posts.splice(idx, 1);

      alert('포스트를 삭제하였습니다');
    } catch (e) {
      alert('포스트 삭제 도중 오류가 발생했습니다');
    }
  }

  @Mutation
  changeIsHomeState(isHomeState: boolean) {
    this.isHome = isHomeState;
  }

  @Mutation
  changeMenuList(menuList: AppBarMenu[]) {
    this.menuList = menuList;
  }
}
