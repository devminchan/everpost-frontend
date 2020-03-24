<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <PostCard :post="post"></PostCard>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PostCard, { PostCardData } from '@/components/PostCard.vue';

@Component({
  components: {
    PostCard,
  },
})
export default class Home extends Vue {
  data() {
    const datas: PostCardData[] = [
      {
        id: 1,
        title: 'Title1',
        content: 'Content',
        fileUrls: [],
      },
      {
        id: 2,
        title: 'Title2',
        content: 'Content',
        fileUrls: [],
      },
      {
        id: 3,
        title: 'Title3',
        content: 'Content',
        fileUrls: [],
      },
    ];

    return {
      posts: datas,
    };
  }
}
</script>
