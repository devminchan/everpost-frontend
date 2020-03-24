<template>
  <div>
    <h2>{{ post.title }}</h2>
    <div>{{ post.content }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

export interface PostCardData {
  id: number;
  title: string;
  content: string;
  fileUrls: string[];
}

@Component
export default class PostCard extends Vue {
  @Prop(Object)
  post!: PostCardData;
}
</script>

<style></style>
