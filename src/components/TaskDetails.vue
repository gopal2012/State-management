<template>
  <div>
    <h2>Task Details</h2>
    <p><b>Title:</b> {{ task?.title }}</p>
    <p><b>Description:</b> {{ task?.description }}</p>

    <button @click="$router.push('/')">Back</button>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      return this.$store.state.selectedTask;
    }
  }
};
</script>
