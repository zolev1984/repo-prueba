import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filesinfo: [
  /*    { "isActive": true, "age": 40, "name": { "first": "Dickerson", "last": "Macdonald" } },
      { "isActive": false, "age": 21, "name": { "first": "Larsen", "last": "Shaw" } },
      { "isActive": false, "age": 9, "name": { "first": "Mini", "last": "Navarro" }},
      { "isActive": false, "age": 89, "name": { "first": "Geneva", "last": "Wilson" } },
      { "isActive": true, "age": 38, "name": { "first": "Jami", "last": "Carney" } },
      { "isActive": false, "age": 27, "name": { "first": "Essie", "last": "Dunlap" } },
      { "isActive": true, "age": 40, "name": { "first": "Thor", "last": "Macdonald" } }   */
    ]
  },
  getters: {
  },
  mutations: {
    fullFiles(state, action) {
      state.filesinfo = action
    }
  },
  actions: {
    getFilesInfo: async function ({commit}){
      const data = await fetch('https://pokeapi.co/api/v2/pokemon');
      const files = await data.json();
      commit('fullFiles', files.results);
    }

  },
  modules: {
  }
})
