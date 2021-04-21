import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersistence from 'vuex-persist'


Vue.use(Vuex)


const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })

function cleaner(task) {
  let punct = /[!"#$%&'()*+,\-./\\:;<=>?@[\]^_`{|}~]/g;
  return task.toLocaleLowerCase().replace(punct, "")
}

export default new Vuex.Store({
    state: {
      list: [
        {summary: "Posprzątać kuchnię."},
        {summary: "Wynieść śmieci."}
      ]
    },

    mutations: {
      addTask(state, newTask) {
        state.list.push({summary: newTask})
      },
      removeTask(state, index) {
        state.list.splice(index, 1)
      },
      editTask(state, {index, newTask}) {
        state.list.splice(index, 1, newTask)
      }
    },

    actions: {
        addTaskLogic(context, newTask) {
            if (context.state.list.some(i => cleaner(i.summary) === cleaner(newTask))) {
              alert("This task is already on the list.")
              return false
            } else if (newTask !== "" && newTask !== null) {
                // on ten context bierze z mutacji
                context.commit('addTask', newTask)
                return true
            } else {
                alert("Type something.")
                return false
            }
        },
        removeTaskLogic(context, index) {
            if (index > -1) {
                context.commit('removeTask', index)
            } else {
                alert("Something goes wrong.")
            }
        },
        editTaskLogic(context, {index, newTask}) {
            if (index > -1) {
                context.commit('editTask', {index, newTask})
            } else {
                alert("Something goes wrong.")
            }
        }
    },

    plugins: [vuexLocal.plugin]
  });

