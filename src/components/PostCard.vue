<template>
  <div class="post-card">
    <h2>{{ post.title }}</h2>
    <div>{{ post.content }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PostCard extends Vue {
  @Prop(Object)
  post!: Post;
}
</script>

<style lang="scss">
.post-card {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 220px;
  height: 300px;
  @media (max-width: 800px) {
    width: 184px;
    height: 269px;
  }
}
</style>
