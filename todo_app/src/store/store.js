import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      tasks:[],
      
    }
  },
  mutations: {
    addTask(state,data){
      state.tasks.push(data);
    },
    deleteItem(state,data){
      let i = state.tasks.map(item => item.title).indexOf(data.title);
      state.tasks.splice(i, 1);
    }
  }
})

export default store 