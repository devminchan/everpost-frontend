<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark absolute>
      <v-btn icon color="white">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="toolbar">포스트 수정</v-toolbar-title>
      <v-spacer />
      <v-btn @click="handlePost">
        수정완료
      </v-btn>
    </v-app-bar>
    <v-content>
      <div id="create-post-container">
        <div id="create-post_input-title-container">
          <v-text-field
            id="create-post_input-title"
            type="text"
            placeholder="제목을 입력하세요..."
            v-model="title"
          />
        </div>
        <div id="create-post_textarea-container">
          <v-textarea solo placeholder="내용을 입력하세요..." v-model="content"></v-textarea>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import GlobalState from '../store/GlobalState';

@Component
export default class CreatePost extends Vue {
  @Prop(Object)
  post!: Post;
  title!: string;
  content!: string;

  created() {
    this.title = this.post.title;
    this.content = this.post.content;
  }

  async handlePost() {
    const globalState = getModule(GlobalState, this.$store);

    await globalState.updatePost(this.post.id, {
      title: this.title,
      content: this.content,
    });
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  color: white;
}

#create-post-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#create-post_input-title-container {
  margin-top: 8px;
  width: 90%;
  @media (max-width: 768px) {
    font-size: 28px;
    width: 98%;
  }
  .v-text-field {
    font-size: 24pt;
    border: 0px;
    width: 100%;
  }
}

#create-post_textarea-container {
  font-size: 28px;
  width: 90%;
  margin-top: 16px;
  @media (max-width: 768px) {
    font-size: 16px;
    width: 98%;
  }
}
</style>
