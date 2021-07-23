import VueRouter from "vue-router";
import AboutUs from "./AboutUs.vue";
import Gallery from "./Gallery.vue";
import MainPage from "./MainPage.vue";

export const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/aboutUs",
    component: AboutUs,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
];

export default new VueRouter({
  routes,
  mode: "history",
});
