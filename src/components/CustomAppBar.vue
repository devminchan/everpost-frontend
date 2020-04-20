<template>
  <v-app-bar app>
    <v-toolbar-title>Everpost</v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="isHome">
      <div v-if="isLogined">
        <v-avatar v-if="isLogined" color="indigo" size="36">
          <span class="white--text headline">{{ username }}</span>
        </v-avatar>
        <v-btn class="ml-4" icon color="#2c3e50" @click="handleCreatePost">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn color="#2c3e50" text @click="handleLogin">
          로그인
        </v-btn>
        <v-btn color="#2c3e50" text @click="handleSignUp">
          회원가입
        </v-btn>
      </div>
    </div>
    <div v-if="!isHome">
      <v-btn
        color="#2c3e50"
        class="mr-8"
        text
        v-for="menu in menuList"
        :key="menu.menuTitle"
        @click="menu.action"
      >
        {{ menu.menuTitle }}
      </v-btn>
      <v-btn color="#2c3e50" icon v-if="!isHome" v-icon @click="handleBack">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import GlobalState from '../store/GlobalState';

@Component
export default class CustomAppBar extends Vue {
  get username() {
    const globalState = getModule(GlobalState, this.$store);

    console.log(globalState.user);

    if (globalState.user?.username && globalState.user?.username.length > 0) {
      return globalState.user?.username[0].toUpperCase();
    }

    return 'N/A';
  }

  get menuList() {
    const globalState = getModule(GlobalState, this.$store);
    return globalState.menuList;
  }

  get isHome() {
    const globalState = getModule(GlobalState, this.$store);
    return globalState.isHome;
  }

  get isLogined() {
    const globalState = getModule(GlobalState, this.$store);
    return globalState.isLogined;
  }

  handleBack() {
    this.$router.back();
  }

  handleCreatePost() {
    this.$router.push('/post/create');
  }

  handleLogin() {
    const globalState = getModule(GlobalState, this.$store);

    if (!globalState.user) {
      this.$router.push('/login');
    }
  }

  handleSignUp() {
    const globalState = getModule(GlobalState, this.$store);

    if (!globalState.user) {
      this.$router.push('/signup');
    }
  }
}
</script>
