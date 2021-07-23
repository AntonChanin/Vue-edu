<template>
  <div class="cards">
    <div v-for="item in gallery.items" :key="item.label">
      <MyCard>
        <template #content>
          <span>{{ item.label }}</span>
          <img class="gallery-item" alt="picture" href="item.content" />
        </template>
      </MyCard>
    </div>
  </div>
</template>

<script>
import MyCard from "../components/MyCard.vue";

export default {
  name: "Gallery",
  components: {
    MyCard,
  },
  data: function () {
    return {
      gallery: {
        items: [
          { label: "Name:", content: "AntonyChanin" },
          { label: "Email:", content: "antonyChe@gmail.com" },
          { label: "Phone:", content: "(8)-800-5335" },
          { label: "Fax:", content: "(8)-800-5335" },
          { label: "Date of birth:", content: "23 May 1995" },
          { label: "Country", content: "Russian Federation" },
        ],
      },
    };
  },
};
</script>

<style scoped>
.gallery-item {
  background-color: rgba(95, 158, 160, 0.5);
  display: block;
  width: 100%;
  height: 235px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 940px;
  margin: auto;
  justify-content: center;
}
.card {
  min-width: 240px;
  max-width: 33%;
  margin: 5px;
}
</style>