import { createStore } from 'vuex'

export default createStore({
  state: {
    listaJuegos: [],
    
  },
  getters: {
    /* getJuegoById: (state) => (codigo) => {
      return state.listaJuegos.find(juego => juego.codigo == codigo)
    }, */

  },
  mutations: {
    SET_JUEGOS(state, listaJuegos) {
      state.listaJuegos = listaJuegos
    },
    ADD_STOCK(state, indice) {
      state.listaJuegos[indice].stock ++
    },
    DELETE_STOCK(state,indice){
      state.listaJuegos[indice].stock --
    }

  },
  actions: {
    async cargarJuegos({ commit }) {
      try {
        let domain = location.origin
        let projectName = "/desafio-uno-vuex/"
        let url = `${domain}${projectName}juegos.json`
        
        let response = await fetch(url);
        let juegos = await response.json();
        /* let juegos = data */
        console.log(juegos)
        commit("SET_JUEGOS", juegos)
      } catch (error) {
        console.log(error)
      }
    },
    addStock(context, codigo) {
      let indice = context.state.listaJuegos.findIndex(
        (juego) => juego.codigo == codigo)
        console.log(codigo)
      context.commit('ADD_STOCK', indice)
    },
    deleteStock(context, codigo) {
      let indice = context.state.listaJuegos.findIndex(
        (juego) => juego.codigo == codigo)
        console.log(codigo)
      context.commit('DELETE_STOCK', indice)
    }
  },
  modules: {
  }
})
