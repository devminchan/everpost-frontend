<template>
  <v-app-bar app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Everpost</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="isHome" icon @click="handleCreate">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <div v-if="!isHome">
      <v-btn v-for="menu in menuList" :key="menu.menuTitle" @click="menu.action">
        {{ menu.menuTitle }}
      </v-btn>
    </div>
    <v-btn v-if="!isHome" flat v-icon @click="handleBack">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import GlobalState from '../store/GlobalState';

@Component
export default class CustomAppBar extends Vue {
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
