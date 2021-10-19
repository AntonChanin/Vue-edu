<template>
  <div class="cards">
    <h1>{{ gallery.title }}</h1>
    <div class="cards">
      <div v-for="item in gallery.items" :key="item.label">
        <MyCard>
          <template #content>
            <span>{{ item.label }}</span>
            <img class="gallery-item" alt="picture" v-bind:src="item.content" />
          </template>
        </MyCard>
      </div>
      <div v-for="photo in photos" :key="photo.id">
        <MyCard>
          <template #content>
            <span class="gallery-title">{{ photo.title }}</span>
            <img class="gallery-item" alt="picture" v-bind:src="photo.url" />
          </template>
        </MyCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MyCard from "../components/MyCard.vue";

export default {
  name: "Gallery",
  components: {
    MyCard,
  },
  data: function () {
    return {
      gallery: {
        title: "Gallery",
        items: [
          { label: "Name:", content: "AntonyChanin" },
          { label: "Email:", content: "antonyChe@gmail.com" },
          { label: "Phone:", content: "(8)-800-5335" },
          { label: "Fax:", content: "(8)-800-5335" },
          { label: "Date of birth:", content: "23 May 1995" },
          { label: "Country", content: "Russian Federation" },
          { label: "First:", content: "ThirdChanin" },
          { label: "Second:", content: "Secondmail" },
          { label: "Third:", content: "(8)-First" },
        ],
      },
    };
  },
  computed: {
    ...mapState("photos", ["photos"]),
  },
  methods: {
    ...mapActions("photos", ["featchPhotos"]),
  },

  async mounted() {
    await this.featchPhotos();
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
.gallery-title {
  height: 20px;
  display: block;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 940px;
  margin: auto;
  justify-content: center;
}
.cards h1 {
  display: flex;
  width: 800px;
}
.card {
  width: 240px;
  margin: 5px;
}
</style>