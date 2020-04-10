<template>
  <v-app-bar app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Everpost</v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="isHome">
      <v-avatar color="indigo" size="36" @click="handleLogin">
        <span class="white--text headline">{{ profileImage }}</span>
      </v-avatar>
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
  get profileImage() {
    const globalState = getModule(GlobalState, this.$store);

    return globalState.user?.profileImage || 'N/A';
  }

  get menuList() {
    const globalState = getModule(GlobalState, this.$store);
    return globalState.menuList;
  }

  get isHome() {
    const globalState = getModule(GlobalState, this.$store);
    return globalState.isHome;
  }

  handleBack() {
    this.$router.back();
  }

  handleLogin() {
    const globalState = getModule(GlobalState, this.$store);

    if (!globalState.user) {
      this.$router.push('/login');
    }
  }
}
</script>
