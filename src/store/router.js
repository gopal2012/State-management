import { createRouter, createWebHistory } from "vue-router";
import TaskForm from "../components/TaskForm.vue";
import TaskDetails from "../components/TaskDetails.vue";

const routes = [
  { path: "/", component: TaskForm },
  { path: "/details", component: TaskDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
