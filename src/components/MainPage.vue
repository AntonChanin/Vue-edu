<template>
  <div class="col">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="text-info">{{ lorem }}</div>
      <div class="text-info">{{ lorem }}</div>
    </div>
    <div class="text-info">{{ lorem }}</div>
    <div class="text-photo"></div>
    <div class="text-info">{{ lorem }}</div>
    <div class="post" v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "MainPage",
  props: {},
  data: function () {
    return {
      title: `Main page`,
      lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    };
  },
  computed: {
    ...mapState("posts", ["posts"]),
  },
  methods: {
    ...mapActions("posts", ["featchPosts"]),
  },

  async mounted() {
    await this.featchPosts();
  },
};
</script>

<style scoped>
h1 {
  margin: 24px auto;
}
.col {
  display: flex;
  flex-direction: column;
  max-width: 820px;
  margin: auto;
  padding: 0 10px;
}

.row {
  display: flex;
  flex-direction: row;
}

.text-info {
  margin: 10px;
}

.text-photo {
  height: 300px;
  max-width: 820px;
  background-color: rgba(95, 158, 160, 0.5);
  -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  border: 4px #fff solid;
}

@media screen and (max-width: 550px) {
  .row {
    flex-direction: column;
  }
  .text-info {
    margin: 10px 24px;
  }
}
</style>