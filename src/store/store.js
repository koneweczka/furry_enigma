import Vuex from 'vuex'
import Vue from 'vue'
//import VuexPersistence from 'vuex-persist'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
// to dodałam:
Vue.use(VueAxios, axios)
// te kreseczki / dawac lepiej w teodach http
// tego nie potrzebuje jak dalam w tym vue.configu tego devServera:
//Vue.axios.defaults.baseURL = 'http://localhost:3000'

// to pamieta w browserze todo liste
// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage
//   })

function cleaner(task) {
  let punct = /[!"#$%&'()*+,\-./\\:;<=>?@[\]^_`{|}~]/g;
  return task.toLocaleLowerCase().replace(punct, "")
}

export default new Vuex.Store({
    state: {
      //to teraz z defaultu bedzie puste pod db:
      list: []
    },

    mutations: {
      createList(state, list) {
        // tylko to daje:
        state.list = list;
      },
      //to chyba wtedy wyjebuje? tak!
      // addTask(state, newTask) {
      //   state.list.push({summary: newTask})
      // },
      // removeTask(state, index) {
      //   state.list.splice(index, 1)
      // },
      // editTask(state, {index, newTask}) {
      //   state.list.splice(index, 1, newTask)
      // }
    },

    actions: {
      async createListLogic({commit}) {
        //to daje:
        try {
          const result = await Vue.axios.get('/list')
          //tu dodałam returna:
          commit('createList', result.data);
          return true
        } catch (error) {
          throw new Error(`API ${error}`);
        }
      },
        async addTaskLogic(context, summary) {
            if (context.state.list.some(i => cleaner(i.summary) === cleaner(summary))) {
              alert("This task is already on the list.")
              return false
            } else if (summary !== "" && summary !== null) {
                // tu muszę mieć obiekt z summary, bo go przyjmuję w tym poście
                try {
                  const result = await Vue.axios.post('/list', {summary})
                  // on ten context bierze z mutacji
                  context.commit('createList', result.data)
                  return true
                } catch (error) {
                  throw new Error(`API ${error}`);
                }
            } else {
                alert("Type something.")
                return false
            }
        },
        async removeTaskLogic(context, id) {
            if (id > -1) {
              try {
                const result = await Vue.axios.delete('/list/' + id)
                //nowe
                context.commit('createList', result.data)
                return true
              } catch(error) {
                throw new Error(`API ${error}`);
              }
            } else {
                alert("Something goes wrong.")
            }
        },
        async editTaskLogic(context, {id, summary}) {
          try {
              const result = await Vue.axios.put('/list/' + id, {summary})
              context.commit('createList', result.data)
              return true
          } catch(error) {
              throw new Error(`API ${error}`);
          }
        }
    // to tez jest do persista
    // plugins: [vuexLocal.plugin]
      }
  });