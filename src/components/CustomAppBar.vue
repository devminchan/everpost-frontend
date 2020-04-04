<template>
  <v-app-bar app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Everpost</v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="isHome">
      <v-avatar color="indigo" size="36">
        <span class="white--text headline">{{ profileImage }}</span>
      </v-avatar>
      <v-btn color="#2c3e50" icon @click="handleCreate">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <div v-if="!isHome">
      <v-btn
        color="#2c3e50"
        class="custom-app-bar_menu"
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

    try {
      return globalState.user.profileImage;
    } catch (e) {
      return 'why';
    }
  }

  get menuList() {
    const globalState = getModule(GlobalState, this.$store);
    return globalState.menuList;
  }

  get isHome() {
    const globalState = getModule(GlobalState, this.$store);
    return globalState.isHome;
  }

  handleCreate() {
    this.$router.push('/post/create');
  }

  handleBack() {
    this.$router.back();
  }
}
</script>
