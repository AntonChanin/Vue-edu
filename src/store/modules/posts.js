const posts = {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    UPDATE_POSTS: (state, payload) => {
      state.posts = payload;
    }
  },
  actions: {
    featchPosts: async (ctx) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
      const posts = await res.json();
      ctx.commit('UPDATE_POSTS', posts);
    }
  }
}
export default posts;