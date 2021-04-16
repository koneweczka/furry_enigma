import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      count: 0,
      totalTvCount: 10,
      isLarryHappy: true, 
      isJennyHappy: true,
      // MOJE:
      list: [
        {summary: "Posprzątać kuchnię."},
        {summary: "Wynieść śmieci."}
      ]
    },

    getters: {
        // Check if both Larry and Jenny are happy
        happyStaff: state => {
          return state.isLarryHappy && state.isJennyHappy
        }
      },

    mutations: {
      increment (state) {
        state.count++
      },
      decrement (state) {
        state.count--
      },
      removeTv(state, amount) {
        state.totalTvCount -= amount
      },
      // MOJE:
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
        removeTv(context, amount) {
            if(context.state.totalTvCount >= amount) {
                context.commit('removeTv', amount)
              }
        },
        // MOJE
        addTaskLogic(context, newTask) {
            // sprowadzasz oba do malych liter i spr zy jest takie samo
            if (context.state.list.some(i => i.summary.toLocaleLowerCase() == newTask.toLocaleLowerCase())) {
                alert("This task is already on the list.")
            } else if (newTask !== "" && newTask !== null) {
                // on ten context bierze z mutacji
                context.commit('addTask', newTask)
            } else {
                alert("Type something.")
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
    }
  });

