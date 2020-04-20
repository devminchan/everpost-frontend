<template>
  <v-form>
    <v-text-field v-model="username" label="유저 이름" />
    <v-text-field v-model="email" :rules="emailRules" label="이메일 주소" />
    <v-text-field type="password" v-model="password" :rules="passwordRules" label="패스워드" />
    <v-text-field
      type="password"
      v-model="passwordRepeat"
      :rules="passwordRules"
      label="패스워드 확인"
    />
    <v-btn @click="submit">
      가입완료
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
  passwordRepeat = '';
  username = '';

  async submit() {
    const globalState = getModule(GlobalState, this.$store);

    if (!this.verifyPassword()) {
      alert('패스워드를 다시 한 번 확인해주십시요.');
      return;
    }

    try {
      await globalState.requestRegister({
        email: this.email,
        password: this.password,
        username: this.username,
      });

      alert('회원가입에 성공하였습니다!');
      this.$router.push('/');
    } catch (e) {
      console.error(e);
      alert('회원가입에 실패하였습니다. 다시 시도해주세요');
    }
  }

  verifyPassword() {
    return this.password === this.passwordRepeat;
  }
}
</script>
