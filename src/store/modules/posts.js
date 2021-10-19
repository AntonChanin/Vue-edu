const posts = {
  namespaced: true,
  state: {
    posts: [],
    findPost: {},
    isShow: false
  },
  mutations: {
    UPDATE_POSTS: (state, payload) => {
      state.posts = payload;
    },
    UPDATE_POST: (state, payload) => {
      state.findPost = payload;
    }
  },
  actions: {
    featchPosts: async (ctx) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
      const posts = await res.json();
      ctx.commit('UPDATE_POSTS', posts);
    },
    featchPostsById: async (ctx, id) => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
      const post = await res.json();
      ctx.commit('UPDATE_POST', post);
      console.log(post);
    }
  },
  getters: {
    getShowForm: async (state) => {
      console.log('state.isShow', state.isShow)
      state.isShow = !state.isShow;
    }
  }
}
export default posts;