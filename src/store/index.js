import Vue from 'vue';
import Vuex from 'vuex';
import comments from './modules/comments';
import posts from './modules/posts';
import photos from './modules/photos';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    comments,
    posts,
    photos
  }
});