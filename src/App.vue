<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GlobalState from './store/GlobalState';
import { getModule } from 'vuex-module-decorators';

export default Vue.extend({
  created() {
    const globalState = getModule(GlobalState, this.$store);

    // localStorage에 저장된 토큰 불러오기
    globalState.loadJwtFromLocal();
  },
});
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
