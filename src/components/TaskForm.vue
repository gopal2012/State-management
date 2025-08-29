<template>
  <div>
    <h2>Add Task</h2>
    <form @submit.prevent="addNewTask">
      <input v-model="title" placeholder="Task title" />
      <input v-model="description" placeholder="Task description"></input>
      <button type="submit">Add</button>
    </form>

    <h3>All Tasks</h3>
    <ul>
      <li v-for="t in tasks" :key="t.title">
        {{ t.title }}
        <button @click="showDetails(t)">Details</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: ""
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    addNewTask() {
      const task = { title: this.title, description: this.description };
      this.$store.commit("addTask", task);
      this.title = "";
      this.description = "";
    },
    showDetails(task) {
      this.$store.commit("setSelectedTask", task);
      this.$router.push("/details");
    }
  }
};
</script>
