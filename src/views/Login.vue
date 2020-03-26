<template>
  <div>
    <input type="email" v-model="email" />
    <br />
    <input type="password" v-model="password" />
    <br />
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  email = '';
  password = '';

  handleLogin() {
    console.log(this.email, this.password);
  }
}
</script>
