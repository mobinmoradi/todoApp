import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      tasks:[]
    }
  },
  mutations: {
    addTask(state,data){
      state.tasks.push(data);
      console.log(state.tasks);
    }
  }
})

export default store 