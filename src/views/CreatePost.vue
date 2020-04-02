<template>
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
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import GlobalState from '../store/GlobalState';

@Component
export default class CreatePost extends Vue {
  title!: string;
  content!: string;

  created() {
    const globalState = getModule(GlobalState, this.$store);

    globalState.changeMenuList([
      {
        menuTitle: '직성완료',
        action: this.handlePost,
      },
    ]);
  }

  async handlePost() {
    const globalState = getModule(GlobalState, this.$store);

    await globalState.createPost({
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
