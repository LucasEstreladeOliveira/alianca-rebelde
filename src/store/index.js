import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifs: [],
    loadCounter: 0,
    search: "",
    open: false,
    currentGif: {}
  },
  mutations: {
    enter(state, search) {
      const apiKey = "U1kXvwFPKHwhxpdFPIppkTAzvnOJoUZE";
      const giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=${apiKey}&offset=${state.loadCounter *
        20}&limit=20`;

      fetch(giphyApiUrl)
        .then(data => {
          return data.json();
        })
        .then(json => {
          console.log(json.data);
          let gifs = [...state.gifs, ...json.data];
          this.commit("setGifs", gifs);
        });
      state.loadCounter++;
    },
    setGifs(state, gifs) {
      state.gifs = gifs;
    },
    setCurrentGif(state, currentGif) {
      state.currentGif = currentGif;
    },
    setOpen(state) {
      state.open = !state.open;
    },
    setSearch(state, search) {
      if (state.search !== search) {
        state.gifs = [];
        state.loadCounter = 0;
      }
      state.search = search;
      this.commit("enter", state.search);
    }
  },
  actions: {},
  modules: {}
});
