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
    <button class="button-data-base" v-on:click="isShow = !isShow">
      FIND POST IN DB
    </button>
    <div v-if="isShow" class="find-form">
      <MyCard>
        <template #content>
          <div v-if="findPost.id">
            <span>Post Id</span><input placeholder="Found Id" />
            <button class="button-data-base" v-on:click="featchPostsById(3)">
              START FIND
            </button>
          </div>
          <div v-else>
            <span>{{ findPost }}</span>
            <button
              class="button-data-base"
              v-on:click="
                isShow = false;
                findPost = {};
              "
            >
              END
            </button>
          </div>
        </template>
      </MyCard>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import MyCard from "../components/MyCard.vue";

export default {
  name: "MainPage",
  props: {},
  components: {
    MyCard,
  },
  data: function () {
    return {
      title: `Main page`,
      lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      isShow: false,
    };
  },
  computed: {
    ...mapState("posts", ["posts", "findPost"]),
    ...mapGetters("posts", ["getShowForm"]),
  },
  methods: {
    ...mapActions("posts", ["featchPosts", "featchPostsById"]),
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
.button-data-base {
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 18px;
  outline: none;
  height: 40px;
}
.button-data-base:active {
  background-color: #292929;
}
.col {
  display: flex;
  flex-direction: column;
  max-width: 820px;
  margin: auto;
  padding: 0 10px;
}
.find-form {
  position: absolute;
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