<template>
  <ul id="post-card-container">
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
      {
        id: 4,
        title: 'Title3',
        content: 'Content',
        fileUrls: [],
      },
      {
        id: 5,
        title: 'Title3',
        content: 'Content',
        fileUrls: [],
      },
      {
        id: 6,
        title: 'Title3',
        content: 'Content',
        fileUrls: [],
      },
      {
        id: 7,
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

<style lang="scss">
#post-card-container {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
}

#post-card-container > li {
  margin-right: 40px;
  @media (max-width: 1023px) {
    margin-right: 24px;
  }
}
</style>
