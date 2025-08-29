import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
    selectedTask: null
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    setSelectedTask(state, task) {
      state.selectedTask = task;
    }
  }
});
