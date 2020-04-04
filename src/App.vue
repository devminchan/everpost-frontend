<template>
  <div id="app">
    <v-app>
      <CustomAppBar />
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Route } from 'vue-router';
import { Component, Watch } from 'vue-property-decorator';
import GlobalState from './store/GlobalState';
import { getModule } from 'vuex-module-decorators';
import CustomAppBar from '@/components/CustomAppBar.vue';

@Component({
  components: {
    CustomAppBar,
  },
})
export default class App extends Vue {
  created() {
    const globalState = getModule(GlobalState, this.$store);

    // localStorage에 저장된 토큰 불러오기
    globalState.loadJwtFromLocal();

    // User data 불러오기
    globalState.fetchUserData();

    this.onRouteChanged(this.$route);
  }

  @Watch('$route')
  onRouteChanged(val: Route) {
    const globalState = getModule(GlobalState, this.$store);

    if (val.name === 'Home') {
      globalState.changeIsHomeState(true);
    } else {
      globalState.changeIsHomeState(false);
    }
  }
}
</script>

<style lang="scss">
html {
  min-height: 100% !important;
}

body {
  min-height: 100% !important;
}

$main-color: #2c3e50;

* {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $main-color;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $main-color;
}
</style>
