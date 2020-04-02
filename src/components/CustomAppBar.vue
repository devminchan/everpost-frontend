<template>
  <v-app-bar app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Everpost</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="handleCreate">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CustomAppBar extends Vue {
  handleCreate() {
    this.$router.push('/post/create');
  }
}
</script>
