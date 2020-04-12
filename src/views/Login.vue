<template>
  <v-form>
    <v-text-field v-model="email" :rules="emailRules" label="이메일 주소" />
    <v-text-field type="password" v-model="password" :rules="passwordRules" label="패스워드" />
    <v-btn @click="submit">
      로그인
    </v-btn>
  </v-form>
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

  async submit() {
    const globalState = getModule(GlobalState, this.$store);

    try {
      await globalState.requestLogin({
        email: this.email,
        password: this.password,
      });

      // await globalState.fetchUserData();

      alert('로그인에 성공하였습니다!');
      this.$router.push('/');
    } catch (e) {
      console.error(e);
      alert('로그인에 실패하였습니다. 다시 시도해주세요');
    }
  }
}
</script>
