import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifs: [],
    loadCounter: 0,
    busy: false
  },
  mutations: {
    enter(state, search) {
      console.log("deu enter!");
      state.busy = true;
      const apiKey = "U1kXvwFPKHwhxpdFPIppkTAzvnOJoUZE";
      const giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=${apiKey}&offset=${state.loadCounter *
        20}&limit=20`;

      fetch(giphyApiUrl)
        .then(data => {
          return data.json();
        })
        .then(json => {
          console.log(json.data);
          state.gifs = json.data;
        });
      state.loadCounter++;
      state.busy = false;
    }
  },
  actions: {},
  modules: {}
});
