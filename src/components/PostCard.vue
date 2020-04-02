<template>
  <v-card class="post-card d-flex flex-column">
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-text class="post-card_content">{{ post.content }}</v-card-text>
    <v-card-actions class="post-card_actions">
      <v-btn text @click="handleEdit">수정하기</v-btn>
      <v-btn text @click="handleAlert">
        <span class="post-card_actions_delete">삭제하기</span>
      </v-btn>
      <RemoveNotification :isOn.sync="isNotiOn" :onRemove="handleDelete" :onCancel="handleCancel" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import RemoveNotification from './RemoveNotification.vue';
import { getModule } from 'vuex-module-decorators';
import GlobalState from '../store/GlobalState';

@Component({
  components: { RemoveNotification },
})
export default class PostCard extends Vue {
  @Prop(Object)
  post!: Post;

  isNotiOn = false;

  handleEdit() {
    this.$router.push(`/post/update/${this.post.id}`);
  }

  handleAlert() {
    this.isNotiOn = true;
  }

  async handleDelete() {
    this.isNotiOn = false;

    const globalState = getModule(GlobalState, this.$store);

    await globalState.deletePost(this.post.id);
  }

  handleCancel() {
    this.isNotiOn = false;
  }
}
</script>

<style lang="scss">
.post-card {
  position: relative;
  padding-bottom: 50px;
  width: 220px;
  height: 300px;

  @media (max-width: 768px) {
    width: 180px;
    height: 246px;
  }
}

.post-card_content {
  text-align: start;
}

.post-card_actions {
  position: absolute;
  bottom: 0;
}

.post-card_actions_delete {
  color: orangered;
}
</style>
