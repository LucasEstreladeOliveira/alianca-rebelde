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
    enter(state, params) {
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
          let mappedData = json.data.map(gif => {
            return {
              url: gif.images.fixed_height.url,
              title: gif.title
            };
          });
          let gifs = [...state.gifs, ...mappedData];
          this.commit("setGifs", gifs);
        });
      state.loadCounter++;
    },
    async getFavoritos() {
      let favoritos;
      try {
        favoritos = await PostService.getGifs();
        this.commit("setFavoritos", favoritos);
      } catch (err) {
        console.log(err.message);
      }
    },
    setGifs(state, gifs) {
      state.gifs = gifs;
    },
    async postFavorito(state, favorito) {
      try {
        await PostService.insertGif(favorito);
      } catch (err) {
        console.log(err.message);
      }
    },
    async removeFavorito(state, id) {
      try {
        await PostService.deleteGif(id);
      } catch (err) {
        console.log(err.message);
      }

      this.commit("getFavoritos");
    },
    async updateFavorito(state, gif) {
      try {
        await PostService.updateGif(gif.id, gif);
      } catch (err) {
        console.log(err.message);
      }

      this.commit("getFavoritos");
    },
    setFavoritos(state, favoritos) {
      state.favoritos = favoritos.map(fav => {
        return {
          url: fav.gif.url,
          title: fav.gif.title,
          id: fav._id
        };
      });
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
    setSearch(state, params) {
      if (state.search !== params.search) {
        state.gifs = [];
        state.loadCounter = 0;
      }
      state.search = params.search;
      this.commit("enter", { search: params.search, route: params.route });
    }
  },
  actions: {},
  modules: {}
});
