<template>
  <div id="login-form-container">
    <div id="login-form">
      <span>Email</span>
      <br />
      <input type="email" v-model="email" />
      <br />
      <br />
      <span>Password</span>
      <br />
      <input type="password" v-model="password" />
      <br />
      <br />
      <button @click="handleLogin">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import GlobalState from '@/store/GlobalState';
import { getModule } from 'vuex-module-decorators';

@Component
export default class Login extends Vue {
  email = '';
  password = '';

  handleLogin() {
    const globalState = getModule(GlobalState, this.$store);

    console.log(globalState.posts);
  }
}
</script>

<style lang="scss">
#login-form {
  background: white;
  width: 40%;
  @media (max-width: 768px) {
    width: 320px;
  }

  span {
    float: left;
  }

  input {
    width: 100%;
    font-size: 20px;
  }

  button {
    width: 30%;
    font-size: 24px;
    background-color: white;
    border: 1px solid rgba($color: #2c3e50, $alpha: 0.2);
  }
}

#login-form-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
