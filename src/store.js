import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    addTask: '',
    deleted: [],
    done: []
  },

  getters: {
    addTask(state){
      return state.addTask;
    },
    tasks(state){
      return state.tasks;
    },
    deleted(state){
      return state.deleted;
    },
    done(state){
      return state.done;
    }
  },

  mutations: {
    ADD_task(state, addTask){
      state.tasks.push({name: addTask, editState: true});
      state.addTask = '';
      console.log(state.tasks);
    },
    DELETE_task(state, task){
      console.log(task)
      let tab = state.tasks.splice(state.tasks.indexOf(task), 1);
      state.deleted.push(tab[0])
      // console.log(state.deleted)
    },
    DELETE_done(state, task){
      let tab = state.done.splice(state.done.indexOf(task), 1);
      state.deleted.push(tab[0])
    },
    DONE_task(state, task){
      let tab = state.tasks.splice(state.tasks.indexOf(task), 1);
      state.done.push(tab[0])
    },
    TODO_task(state, task){
      let tab = state.done.splice(state.done.indexOf(task), 1);
      state.tasks.push(tab[0])
    },
    TODO_delete(state, task){
      let tab = state.deleted.splice(state.deleted.indexOf(task), 1);
      state.tasks.push(tab[0])
    },
    // EDIT_task(state, task){
    //   state.addTask = task
    //   state.tasks.splice(state.tasks.indexOf(task), 1)
    // },
  },

  actions: {
    ADDtask({commit}, task){
      commit('ADD_task', task)
    },
    DELETEtask({commit}, task){
      commit('DELETE_task', task)
    },
    DELETEdone({commit}, task){
      commit('DELETE_done', task)
    },
    DONEtask({commit}, task){
      commit('DONE_task', task)
    },
    TODOtask({commit}, task){
      commit('TODO_task', task)
    },
    TODOdelete({commit}, task){
      commit('TODO_delete', task)
    },
    EDITtask({commit}, task){
      commit('EDIT_task', task)
    }
  },
})
