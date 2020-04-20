<template>
  <v-container class="ml-8 mr-8">
    <v-layout row wrap justify-start>
      <v-flex xs13 md6 lg2 x12 v-for="post in posts" :key="post.id" class="ml-4 mt-4">
        <PostCard :post="post" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PostCard from '@/components/PostCard.vue';
import { getModule } from 'vuex-module-decorators';
import GlobalState from '../store/GlobalState';

@Component({
  components: {
    PostCard,
  },
})
export default class Home extends Vue {
  posts: Post[] = [];

  async created() {
    const globalState = getModule(GlobalState, this.$store);

    await globalState.fetchPosts();
    this.posts = globalState.posts;
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
