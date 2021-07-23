<template>
  <div class="wrapper">
    <Header msg="Welcome to Your Vue.js App" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  props: {},
  data() {
    return {
      now: new Date(),
    };
  },
  methods: {
    updateDate() {
      this.now = new Date();
    },
  },
  mounted() {
    setInterval(() => {
      this.updateDate();
    }, 1000);
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  width: -webkit-fill-available;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  overflow-x: hidden;
  width: 100%;
}
</style>