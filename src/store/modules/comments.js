const comments = {
  namespaced: true,
  state: {
    comments: []
  },
  mutations: {
    UPDATE_COMMENTS: (state, payload) => {
      state.comments = payload;
    }
  },
  actions: {
    featchComments: async (ctx) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=50');
      const comments = await res.json();
      ctx.commit('UPDATE_COMMENTS', comments);
    }
  }
}
export default comments;