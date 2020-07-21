import Vue from "vue";
import Vuex from "vuex";
import PostService from "../PostService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifs: [],
    favoritos: [],
    loadCounter: 0,
    search: "",
    open: false,
    currentGif: {},
    id: "",
    password: ""
  },
  mutations: {
    enter(params) {
      if (params.route.name !== "Favoritos") {
        this.commit("getGifs", params.search);
      }
    },
    getGifs(state, search) {
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
          this.commit("setFavoritos", gifs);
        });
      state.loadCounter++;
    },
    async getFavoritos() {
      let favoritos;
      try {
        favoritos = await PostService.getGifs();
        this.commit("setFavoritos", favoritos);
      } catch (err) {
        this.error = err.message;
      }
    },
    setGifs(state, gifs) {
      let mappedGifs = gifs.map(gif => {
        return {
          url: gif.images.fixed_height.url,
          title: gif.title
        };
      });
      state.gifs = mappedGifs;
    },
    setFavoritos(state, favoritos) {
      console.log(favoritos);
      state.favoritos = favoritos.map(fav => fav.gif);
    },
    setCurrentGif(state, currentGif) {
      state.currentGif = currentGif;
    },
    setOpen(state) {
      state.open = !state.open;
    },
    setLogin(state, login) {
      this.commit("setID", login.id);
      this.commit("setPassword", login.password);
    },
    setID(state, id) {
      state.id = id;
    },
    setPassword(state, password) {
      state.password = password;
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
