<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark>
      <v-btn icon color="white">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="toolbar">새 글 작성</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <div id="create-post-container">
        <input id="create-post_input_title" type="text" placeholder="제목을 입력하세요..." />
        <div id="create-post_textarea-container">
          <textarea id="create-post_textarea" placeholder="내용을 입력하세요..."></textarea>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CreatePost extends Vue {}
</script>

<style lang="scss" scoped>
.toolbar {
  color: white;
}

#create-post-container {
  width: 100%;
}

#create-post_input_title {
  font-size: 40px;
  border: 0px;
  width: 80%;
  @media (max-width: 768px) {
    font-size: 28px;
    width: 100%;
  }
}

#create-post_textarea {
  text-align: start;
  font-size: 28px;
  border: 0px;
  resize: none;
  width: 80%;
  height: 600px;
  margin-top: 16px;
  @media (max-width: 768px) {
    font-size: 18px;
    width: 100%;
  }
}
</style>
