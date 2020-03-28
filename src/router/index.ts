import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '@/views/Login.vue';
import CreatePost from '@/views/CreatePost.vue';
import UpdatePost from '@/views/UpdatePost.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/post/create',
    name: 'CreatePost',
    component: CreatePost,
  },
  {
    path: '/post/update/:id',
    name: 'UpdatePost',
    component: UpdatePost,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
