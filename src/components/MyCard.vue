<template>
  <div class="card">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "MyCard",
};
</script>

<style scoped>
.card {
  padding: 10px;
  margin: 10px;
  -webkit-box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
}
</style>