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
    login: {}
  },
  mutations: {
    setGifs(state, gifs) {
      state.gifs = gifs;
    },
    SET_GIFS(state, gifs) {
      state.gifs = gifs;
    },
    async postFavorito(state, favorito) {
      try {
        await PostService.insertGif(favorito);
      } catch (err) {
        console.log(err.message);
      }
    },
    SET_FAVORITOS(state, favoritos) {
      state.favoritos = favoritos.map(fav => {
        return {
          url: fav.gif.url,
          title: fav.gif.title,
          id: fav._id
        };
      });
    },
    SET_CURRENT_GIF(state, currentGif) {
      state.currentGif = currentGif;
    },
    SET_OPEN(state) {
      state.open = !state.open;
    },
    SET_LOADCOUNTER(state, loadCounter) {
      state.loadCounter = loadCounter;
    },
    SET_LOGIN(state, login) {
      state.login = login;
    },
    SET_SEARCH(state, search) {
      state.search = search;
    }
  },
  actions: {
    enter({ dispatch }, params) {
      if (params.route.name !== "Favoritos") {
        dispatch("getGifs", params.search);
      }
    },
    getGifs({ commit, state }, search) {
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
          commit("SET_GIFS", gifs);
        });
      state.loadCounter++;
    },
    async getFavoritos({ commit }) {
      let favoritos;
      try {
        favoritos = await PostService.getGifs();
        commit("SET_FAVORITOS", favoritos);
      } catch (err) {
        console.log(err.message);
      }
    },
    async postFavorito(favorito) {
      try {
        await PostService.insertGif(favorito);
      } catch (err) {
        console.log(err.message);
      }
    },
    async removeFavorito({ dispatch }, id) {
      try {
        await PostService.deleteGif(id);
      } catch (err) {
        console.log(err.message);
      }

      dispatch("getFavoritos");
    },
    async updateFavorito({ dispatch }, gif) {
      try {
        await PostService.updateGif(gif.id, gif);
      } catch (err) {
        console.log(err.message);
      }

      dispatch("getFavoritos");
    },
    verifySearch({ state, commit, dispatch }, params) {
      if (state.search !== params.search) {
        commit("SET_GIFS", []);
        commit("SET_LOADCOUNTER", 0);
      }
      commit("SET_SEARCH", params.search);
      dispatch("enter", { search: params.search, route: params.route });
    }
  },
  modules: {}
});
