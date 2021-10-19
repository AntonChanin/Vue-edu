const photos = {
  namespaced: true,
  state: {
    photos: [],
  },
  mutations: {
    UPDATE_PHOTOS: (state, payload) => {
      state.photos = payload;
    }
  },
  actions: {
    featchPhotos: async (ctx) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=9');
      const photos = await res.json();
      ctx.commit('UPDATE_PHOTOS', photos);
    }
  }
}
export default photos;