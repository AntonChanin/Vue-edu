<template>
  <div class="col">
    <div class="row">
      <div class="text-info">{{ lorem }}</div>
      <div class="text-info">{{ lorem }}</div>
    </div>
    <div class="text-info">{{ lorem }}</div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data: function () {
    return {
      lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    };
  },
};
</script>

<style scoped>
.col {
  display: flex;
  flex-direction: column;
  height: 400px;
  max-width: 820px;
  margin: auto;
}

.row {
  display: flex;
  flex-direction: row;
}

.text-info {
  margin: 10px;
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